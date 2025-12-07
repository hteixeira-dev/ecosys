"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

export default function TabletScene({ progressRef }) {
  const group = useRef();

  const FRAME_COUNT = 480; // total de frames da anima
  const FPS = 30;         // fps original


  const initialModelUrl = (typeof window !== 'undefined' && /Mobi|Android|iPhone/i.test(window.navigator.userAgent))
    ? '/models/CAR_TABLE_MOBILE_01_V1.glb'
    : '/models/CAR_TABLE_01_V13.glb';
  const [modelUrl, setModelUrl] = useState(initialModelUrl);

  const { scene, cameras, animations } = useGLTF(modelUrl);
  const { actions, mixer } = useAnimations(animations, group);

  // --- MATERIAL: MeshNormal pra todo mundo ---
  // const normalMat = useMemo(() => new THREE.MeshNormalMaterial(), []);

  // useEffect(() => {
  //   scene.traverse((child) => {
  //     if (child.isMesh) {
  //       if (child.material && child.material.dispose) {
  //         child.material.dispose();
  //       }
  //       child.material = normalMat;
  //       child.material.needsUpdate = true;
  //     }
  //   });
  // }, [scene, normalMat]);

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

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onResize = () => {
      const isMobileSize = window.innerWidth <= 768;
      const isUA = /Mobi|Android|iPhone/i.test(window.navigator.userAgent);
      const wantMobile = isUA || isMobileSize;
      const target = wantMobile ? '/models/CAR_TABLE_MOBILE_01_V1.glb' : '/models/CAR_TABLE_01_V13.glb';
      if (target !== modelUrl) setModelUrl(target);
    };
    onResize();
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, [modelUrl]);

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


  return <primitive ref={group} object={scene} />;
}

// useGLTF.preload('/models/CAR_TABLE_MOBILE_01_V1.glb');
// useGLTF.preload('/models/CAR_TABLE_01_V13.glb');
