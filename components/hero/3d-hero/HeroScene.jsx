"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { addRevealSweep, addRevealSweepScroll } from "./revealSweep";
 
export default function HeroScene({ progressRef }) {
  const group = useRef();
  const FRAME_COUNT = 480; // total de frames da anima
  const FPS = 30;         // fps original

  const initialModelUrl =
    typeof window !== "undefined" && /Mobi|Android|iPhone/i.test(window.navigator.userAgent)
      ? "/models/CAR_02_MOBILE_v2.glb"
      : "/models/CAR_02_v018.gltf";

  const [modelUrl, setModelUrl] = useState(initialModelUrl);

  const { scene, nodes, cameras, animations } = useGLTF(modelUrl);
  const { actions, mixer } = useAnimations(animations, group);

  // --- HOLOGRAPHIC SHADER (vertex/fragment) + Matcap ---
  const [vertexSrc, setVertexSrc] = useState(null);
  const [fragmentSrc, setFragmentSrc] = useState(null);
  const matcapTex = useTexture("/matcaps/matcaptest3.png");
  const baseMatsRef = useRef({ holo: null, matcap: null });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onResize = () => {
      const isMobileSize = window.innerWidth <= 768;
      const isUA = /Mobi|Android|iPhone/i.test(window.navigator.userAgent);
      const wantMobile = isUA || isMobileSize;
      const target = wantMobile ? "/models/CAR_02_MOBILE_v2.glb" : "/models/CAR_02_v018.gltf";
      if (target !== modelUrl) setModelUrl(target);
    };
    onResize();
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, [modelUrl]);

  useEffect(() => {
    async function loadShaders() {
      const [v, f] = await Promise.all([
        fetch("/shaders/holographic/vertex.glsl"),
        fetch("/shaders/holographic/fragment.glsl"),
      ]);
      setVertexSrc(await v.text());
      setFragmentSrc(await f.text());
    }
    loadShaders().catch(console.error);
  }, []);

  useEffect(() => {
    if (!vertexSrc || !fragmentSrc) return;
    if (matcapTex) {
      matcapTex.colorSpace = THREE.SRGBColorSpace;
      matcapTex.flipY = false;
    }

    const holoMat = new THREE.ShaderMaterial({
      vertexShader: vertexSrc,
      fragmentShader: fragmentSrc,
      uniforms: {
        uTime:         new THREE.Uniform(1),
        uColor:        new THREE.Uniform(new THREE.Color("#3592FB")),
        uStripeFreq:   new THREE.Uniform(2.4),
        uStripeSpeed:  new THREE.Uniform(0.2),
        uStripePower:  new THREE.Uniform(0.2),
        uFresnelPower: new THREE.Uniform(7.5),
        uHoloMixBase:  new THREE.Uniform(0.6),

        uReveal:       new THREE.Uniform(0.0),
        uFeather:      new THREE.Uniform(0.0),
        uAxis:         new THREE.Uniform(1),
        uInvert:       new THREE.Uniform(0),
        uFinalVisible: new THREE.Uniform(0),

        uMatcap:         new THREE.Uniform(matcapTex || null),
        uMatcapStrength: new THREE.Uniform(0.0),
      },
      transparent: true,
      premultipliedAlpha: false,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });

    const matcapMat = holoMat.clone();
    matcapMat.uniforms = {
      ...holoMat.uniforms,
      uMatcap:         new THREE.Uniform(matcapTex || null),
      uMatcapStrength: new THREE.Uniform(0.8),
      uColor:          new THREE.Uniform(new THREE.Color("#3592FB")),
    };

    baseMatsRef.current.holo = holoMat;
    baseMatsRef.current.matcap = matcapMat;

    const variants = {};
    
    variants["montanha"] = (() => { 
      const m = holoMat.clone(); 
      m.uniforms = { ...holoMat.uniforms, 
        uColor: new THREE.Uniform(new THREE.Color("#2E6BD9")),
        uStripeFreq: new THREE.Uniform(2.6), 
        uStripePower: new THREE.Uniform(0.15), 
        uFresnelPower: new THREE.Uniform(6.8), 
        uHoloMixBase: new THREE.Uniform(0.1), 
        uMatcapStrength: new THREE.Uniform(0.0) 
      }; 
      return m; 
    })();

    variants["city"] = (() => { 
      const m = holoMat.clone(); 
      m.uniforms = { ...holoMat.uniforms, 
        uColor: new THREE.Uniform(new THREE.Color("#2E6BD9")), 
        uStripeFreq: new THREE.Uniform(2.9), 
        uStripePower: new THREE.Uniform(0.12), 
        uFresnelPower: new THREE.Uniform(7.0), 
        uHoloMixBase: new THREE.Uniform(0.45), 
        uMatcapStrength: new THREE.Uniform(0.0) 
      }; 
      return m; 
    })();

    variants["car_primario1"] = (() => { 
      const m = holoMat.clone(); 
      m.side = THREE.DoubleSide;
      m.uniforms = { ...holoMat.uniforms, 
        uColor: new THREE.Uniform(new THREE.Color("#2E6BD9")), 
        uStripeFreq: new THREE.Uniform(3.1), 
        uStripePower: new THREE.Uniform(0.18), 
        uFresnelPower: new THREE.Uniform(7.8), 
        uHoloMixBase: new THREE.Uniform(0.55), 
        uMatcapStrength: new THREE.Uniform(0.0) 
      }; 
      return m; 
    })();

    variants["roda"] = (() => { 
      const m = holoMat.clone(); 
      m.uniforms = { ...holoMat.uniforms, 
        uColor: new THREE.Uniform(new THREE.Color("#2E6BD9")), 
        uStripeFreq: new THREE.Uniform(2.4), 
        uStripePower: new THREE.Uniform(0.2), 
        uFresnelPower: new THREE.Uniform(7.0), 
        uHoloMixBase: new THREE.Uniform(0.5), 
        uMatcapStrength: new THREE.Uniform(0.0) 
      }; 
      return m; 
    })(); 

    variants["car_primario"] = (() => { 
      const m = new THREE.MeshMatcapMaterial({ 
        matcap: matcapTex, 
        color: new THREE.Color("#3592FB"), 
        side: THREE.DoubleSide, 
        transparent: true, 
        opacity: 0.2   
      }); 
      m.userData.uMatcapStrength = 0.8; 
      m.onBeforeCompile = (shader) => { 
        shader.uniforms.uMatcapStrength = { value: m.userData.uMatcapStrength }; 
        shader.fragmentShader = shader.fragmentShader 
          .replace("#include <matcap_pars_fragment>", "#include <matcap_pars_fragment>\nuniform float uMatcapStrength;") 
          .replace("#include <matcap_fragment>", "vec4 matcapTexel = texture2D( matcap, matcapUV );\ndiffuseColor.rgb = mix( diffuseColor.rgb, diffuseColor.rgb * matcapTexel.rgb, uMatcapStrength );"); 
        m.userData.shader = shader; 
      }; 
      return m; 
    })();

    variants["tablet_frontal"] = (() => { 
      const m = new THREE.MeshMatcapMaterial({ 
        matcap: matcapTex, 
        color: new THREE.Color("#3592FB"), 
        side: THREE.DoubleSide, 
        transparent: true, 
        opacity: 0.5   
      }); 
      m.userData.uMatcapStrength = 0.8; 
      m.onBeforeCompile = (shader) => { 
        shader.uniforms.uMatcapStrength = { value: m.userData.uMatcapStrength }; 
        shader.fragmentShader = shader.fragmentShader 
          .replace("#include <matcap_pars_fragment>", "#include <matcap_pars_fragment>\nuniform float uMatcapStrength;") 
          .replace("#include <matcap_fragment>", "vec4 matcapTexel = texture2D( matcap, matcapUV );\ndiffuseColor.rgb = mix( diffuseColor.rgb, diffuseColor.rgb * matcapTexel.rgb, uMatcapStrength );"); 
        m.userData.shader = shader; 
      }; 
      return m; 
    })();

    baseMatsRef.current.holo = holoMat;
    baseMatsRef.current.matcap = matcapMat;
    baseMatsRef.current.variants = variants;
    baseMatsRef.current.all = [holoMat, matcapMat, ...Object.values(variants)];

    // 2) Aplica os materiais holográficos
    scene.traverse((child) => {
      if (!child.isMesh) return;
      if (child.isSkinnedMesh) return;

      let n = child;
      let applied = false;
      const keys = Object.keys(variants);

      while (n) {
        const nm = (n.name || "").toLowerCase();
        const key = keys.find((k) => nm.includes(k));
        if (key) {
          child.material = variants[key];
          applied = true;
          break;
        }
        n = n.parent;
      }

      if (!applied) child.material = holoMat;
    });

    // 3) AGORA aplica o revealSweep nos materiais já prontos
    const getDelay = (obj) => {
      const rules = [
        ["montanha", 0.5],
        ["city", 0.8],
        ["RODA", 1.5],
        ["car_primario1", 1.5],
        ["tablet", 3],
        ["tablet_frontal", 3],
        ["car_primario", 4],
      ];

      let p = obj;
      while (p) {
        const nm = p.name || "";
        const hit = rules.find(([k]) => nm === k);
        if (hit) return hit[1];
        p = p.parent;
      }
      return 0;
    };

    const getDirection = (obj) => {
      let p = obj;
      while (p) {
        const nm = p.name || "";
        if (nm === "tablet" || nm === "tablet_frontal" || nm === "RODA") return "top-down";
        p = p.parent;
      }
      return "bottom-up";
    };

    const getPadPct = (obj) => {
      let p = obj;
      while (p) {
        const nm = p.name || "";
        if (nm === "tablet" || nm === "tablet_frontal") return 1.0;
        p = p.parent;
      }
      return 0.5;
    };

    scene.traverse((obj) => {
      if (!obj.isMesh) return;

      // garante material único por mesh
      if (obj.material) {
        if (Array.isArray(obj.material)) {
          obj.material = obj.material.map((m) =>
            m && m.clone ? m.clone() : m
          );
        } else if (obj.material.clone) {
          obj.material = obj.material.clone();
        }
      }
      const nmObj = obj.name || "";
      const isTablet = nmObj === "tablet" || nmObj === "tablet_frontal";
      const isCarPrimario = nmObj === "car_primario";
      if (isTablet || isCarPrimario) {
        const ctrl = addRevealSweepScroll(obj, {
          axis: "y",
          direction: getDirection(obj),
          featherPct: 0.08,
          paddingPct: getPadPct(obj),
        });
        scrollCtrlsRef.current.push(ctrl);
        obj.visible = true;
      } else {
        addRevealSweep(obj, {
          axis: "y",
          direction: getDirection(obj),
          duration: 4,
          delay: getDelay(obj),
          paddingPct: getPadPct(obj),
          featherPct: 0.08,
        });
      }
    });
  }, [vertexSrc, fragmentSrc, matcapTex, scene]);

  // --- CÂMERA DO GLTF ---
  const gltfCamera = useMemo(
    () => (cameras && cameras.length > 0 ? cameras[0] : null),
    [cameras]
  );

  const { set, size, camera: defaultCamera } = useThree();

  useEffect(() => {
    if (!gltfCamera) return;

    gltfCamera.aspect = size.width / size.height;
    gltfCamera.updateProjectionMatrix();

    set({ camera: gltfCamera });

    // opcional: volta pra câmera padrão se esse componente desmontar
    return () => set({ camera: defaultCamera });
  }, [gltfCamera, size, set, defaultCamera]);

   // --- ANIMAÇÃO DO GLTF CONTROLADA PELO SCROLL ---
  const actionRef = useRef(null);
  const clipRef = useRef(null);
  const progressInternalRef = useRef(0); // progress baseado em frames
  const scrollCtrlsRef = useRef([]);

  useEffect(() => {
    if (!animations || animations.length === 0 || !actions) return;

    const firstClip = animations[0];
    const action = actions[firstClip.name];

    if (!action) return;

    action.play();
    action.paused = true;

    actionRef.current = action;
    clipRef.current = firstClip;
  }, [animations, actions]);

  useFrame(() => {
    if (!actionRef.current || !clipRef.current || !progressRef?.current) return;

    // 1) progress vindo do scroll: 0 → 1
    const target = THREE.MathUtils.clamp(progressRef.current, 0, 1);

    // 2) suavização para tirar o tranco da rodinha do mouse
    const smoothing = 0.15; // 0.1–0.2 fica bem suave sem delay demais
    progressInternalRef.current = THREE.MathUtils.lerp(
      progressInternalRef.current,
      target,
      smoothing
    );

    // 3) em vez de travar em frame inteiro, usamos tempo contínuo
    // progressInternalRef: 0 → 1
    // FRAME_COUNT / FPS = duração em segundos (480 / 30 = 16)
    const durationSeconds = FRAME_COUNT / FPS; // 16s
    const t = durationSeconds * progressInternalRef.current;

    actionRef.current.time = t;
    mixer.update(0);

    // 4) usa o mesmo progress para os reveals (0 → 1 contínuo)
    scrollCtrlsRef.current.forEach((c) =>
      c.setProgress(progressInternalRef.current)
    );
  });

  useLayoutEffect(() => {
    scene.traverse((obj) => {
      if (!obj.isMesh) return;
      const nm = obj.name || "";
      if (nm === "tablet" || nm === "tablet_frontal" || nm === "car_primario") {
        obj.visible = false;
      }
    });
  }, [scene]);
  
  return <primitive ref={group} object={scene} />;
}

useGLTF.preload("/models/CAR_02_MOBILE_v2.glb");
useGLTF.preload("/models/CAR_02_v018.gltf");
