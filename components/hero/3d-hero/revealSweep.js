import * as THREE from 'three';
import gsap from 'gsap';

export function addRevealSweep(mesh, {
  axis = 'y',
  direction = 'top-down',
  duration = 5,
  delay = 0,
  featherPct = 1,
  paddingPct = 0.5
} = {}) {
  // Normaliza direções equivalentes
  const dir = (direction === 'bottom-up' || direction === 'bottom-top') ? 'bottom-up' : 'top-down'
  const box = new THREE.Box3().setFromObject(mesh);
  const size = new THREE.Vector3(); box.getSize(size);

  const axisIndex = axis === 'x' ? 0 : axis === 'z' ? 2 : 1;
  const minA = box.min.getComponent(axisIndex);
  const maxA = box.max.getComponent(axisIndex);

  const span = Math.max(maxA - minA, 1e-6);
  const feather = featherPct * span;
  const pad = paddingPct * span;


  let startVal, endVal, invert;
  if (dir === 'top-down') {
    startVal = maxA + pad + 1e-3; 
    endVal = minA - pad - 1e-3;
    invert = 0;
  } else { // bottom-up
    startVal = minA - pad - 1e-3; 
    endVal = maxA + pad + 1e-3;
    invert = 1;
  }

  const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
  mats.forEach((m) => {
    if (!m) return;
    if (m.userData && m.userData.revealSkipGlobal) return;
    m.transparent = true;
    m.depthWrite = true;
    m.side = THREE.DoubleSide;
    if (m.type === 'ShaderMaterial') {
      m.depthWrite = false;
      const u = m.uniforms || {};
      u.uReveal = u.uReveal || { value: startVal };
      u.uFeather = u.uFeather || { value: feather };
      u.uAxis = u.uAxis || { value: axisIndex };
      u.uInvert = u.uInvert || { value: invert };
      u.uFinalVisible = u.uFinalVisible || { value: 0 };
      u.uReveal.value = startVal;
      u.uFeather.value = feather;
      u.uAxis.value = axisIndex;
      u.uInvert.value = invert;
      u.uFinalVisible.value = 0;
      m.uniforms = u;
      m.needsUpdate = true;
    } else {
      m.onBeforeCompile = (shader) => {
        shader.uniforms.uReveal  = { value: startVal };
        shader.uniforms.uFeather = { value: feather };
        shader.uniforms.uAxis    = { value: axisIndex };
        shader.uniforms.uInvert  = { value: invert };
        shader.uniforms.uFinalVisible = { value: 0 };
        shader.vertexShader =
          `varying vec3 vWorldPos;\n` +
          shader.vertexShader.replace(
            '#include <project_vertex>',
            `vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
             #include <project_vertex>`
          );
        shader.fragmentShader =
          `varying vec3 vWorldPos;\n         uniform float uReveal, uFeather;\n         uniform int uAxis, uInvert;\n         uniform int uFinalVisible;\n` +
          shader.fragmentShader.replace(
            '#include <dithering_fragment>',
            `
            if (uFinalVisible == 1) {
            } else {
              float coord = (uAxis == 0) ? vWorldPos.x : (uAxis == 1) ? vWorldPos.y : vWorldPos.z;
              float m = smoothstep(uReveal - uFeather, uReveal + uFeather, coord);
              float mask = (uInvert == 1) ? (1.0 - m) : m;
              if (mask <= 0.001) discard;
              gl_FragColor.a *= mask;
            }
            #include <dithering_fragment>
            `
          );
        m.userData.shader = shader;
      };
      m.needsUpdate = true;
    }
  });

  requestAnimationFrame(() => {
    mats.forEach((m) => {
      const uRevealObj = (m?.userData?.shader?.uniforms?.uReveal) || (m.uniforms && m.uniforms.uReveal);
      if (!uRevealObj) return;
      gsap.to(uRevealObj, {
        value: endVal,
        duration,
        delay,
        ease: 'power2.inOut',
        onComplete: () => {
          const uniforms = m.userData?.shader?.uniforms || m.uniforms;
          if (!uniforms) return;
          uniforms.uFinalVisible.value = 1;
          uniforms.uFeather.value = 0.0;
        }
      });
    });
  });
} // <-- fecha a função corretamente

// Variante controlada por scroll: prepara os uniforms e retorna um controlador
// com setProgress(t: 0..1). Não cria tween interno.
export function addRevealSweepScroll(mesh, {
  axis = 'y',
  direction = 'top-down',
  featherPct = 1,
  paddingPct = 0.5
} = {}) {
  const dir = (direction === 'bottom-up' || direction === 'bottom-top') ? 'bottom-up' : 'top-down';
  const box = new THREE.Box3().setFromObject(mesh);
  const size = new THREE.Vector3(); box.getSize(size);

  const axisIndex = axis === 'x' ? 0 : axis === 'z' ? 2 : 1;
  const minA = box.min.getComponent(axisIndex);
  const maxA = box.max.getComponent(axisIndex);

  const span = Math.max(maxA - minA, 1e-6);
  const feather = featherPct * span;
  const pad = paddingPct * span;

  let startVal, endVal;
  if (dir === 'top-down') {
    startVal = maxA + pad + 1e-3;
    endVal = minA - pad - 1e-3;
  } else { // bottom-up
    startVal = minA - pad - 1e-3;
    endVal = maxA + pad + 1e-3;
  }

  const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
  mats.forEach((m) => {
    if (!m) return;
    m.transparent = true;
    m.depthWrite = true;
    m.side = THREE.DoubleSide;
    if (m.type === 'ShaderMaterial') {
      m.depthWrite = false;
      const u = m.uniforms || {};
      u.uReveal = u.uReveal || { value: startVal };
      u.uFeather = u.uFeather || { value: feather };
      u.uAxis = u.uAxis || { value: axisIndex };
      u.uInvert = u.uInvert || { value: (dir === 'bottom-up') ? 1 : 0 };
      u.uFinalVisible = u.uFinalVisible || { value: 0 };
      u.uReveal.value = startVal;
      u.uFeather.value = feather;
      u.uAxis.value = axisIndex;
      u.uInvert.value = (dir === 'bottom-up') ? 1 : 0;
      u.uFinalVisible.value = 0;
      m.uniforms = u;
      m.needsUpdate = true;
    } else {
      m.onBeforeCompile = (shader) => {
        shader.uniforms.uReveal  = { value: startVal };
        shader.uniforms.uFeather = { value: feather };
        shader.uniforms.uAxis    = { value: axisIndex };
        shader.uniforms.uInvert  = { value: (dir === 'bottom-up') ? 1 : 0 };
        shader.uniforms.uFinalVisible = { value: 0 };
        shader.vertexShader =
          `varying vec3 vWorldPos;\n` +
          shader.vertexShader.replace(
            '#include <project_vertex>',
            `vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;\n           #include <project_vertex>`
          );
        shader.fragmentShader =
          `varying vec3 vWorldPos;\n         uniform float uReveal, uFeather;\n         uniform int uAxis, uInvert;\n         uniform int uFinalVisible;\n` +
          shader.fragmentShader.replace(
            '#include <dithering_fragment>',
            `
            if (uFinalVisible == 1) {
            } else {
              float coord = (uAxis == 0) ? vWorldPos.x : (uAxis == 1) ? vWorldPos.y : vWorldPos.z;
              float m = smoothstep(uReveal - uFeather, uReveal + uFeather, coord);
              float mask = (uInvert == 1) ? (1.0 - m) : m;
              if (mask <= 0.001) discard;
              gl_FragColor.a *= mask;
            }
            #include <dithering_fragment>
            `
          );
        m.userData.shader = shader;
      };
      m.needsUpdate = true;
    }
  });

  // Cria e retorna um controlador de progresso
  const ctrl = {
    setProgress(t) {
      const val = THREE.MathUtils.lerp(startVal, endVal, THREE.MathUtils.clamp(t, 0, 1));
      mats.forEach((m) => {
        const uniforms = m.userData?.shader?.uniforms || m.uniforms;
        if (!uniforms || !uniforms.uReveal) return;
        uniforms.uReveal.value = val;
        // opcionalmente, ao final do scroll, travar visível
        if (t >= 0.999) {
          uniforms.uFinalVisible.value = 1;
          uniforms.uFeather.value = 0.0;
        } else {
          uniforms.uFinalVisible.value = 0;
          uniforms.uFeather.value = feather;
        }
      });
    }
  };

  // Armazena para referência externa
  mesh.userData.revealScrollCtrl = ctrl;
  return ctrl;
}
