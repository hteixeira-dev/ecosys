// ===== uniforms =====
uniform float uTime;
uniform vec3  uColor;
uniform float uStripeFreq;
uniform float uStripeSpeed;
uniform float uStripePower;
uniform float uFresnelPower;
uniform float uHoloMixBase;

// Reveal (varredura)
uniform float uReveal;
uniform float uFeather;
uniform int   uAxis;         // 0=x, 1=y, 2=z
uniform int   uInvert;       // 0=top-down, 1=bottom-up
uniform int   uFinalVisible; // 1 = ignora máscara

// MatCap
uniform sampler2D uMatcap;
uniform float     uMatcapStrength; // 0..1

// ===== varyings =====
varying vec3 vWorldPos;
varying vec3 vNormal;

// --- Matcap a partir de normal/pos em world ---
vec3 sampleMatcap_fromWorld(vec3 worldNormal, vec3 worldPos) {
    vec3 nView = normalize(mat3(viewMatrix) * worldNormal);
    vec3 pView = (viewMatrix * vec4(worldPos, 1.0)).xyz;

    vec3 V = normalize(-pView);              // direção para câmera (view space)
    vec3 X = normalize(vec3(V.z, 0.0, -V.x));// base ortogonal
    vec3 Y = cross(V, X);

    vec2 uv = vec2(dot(X, nView), dot(Y, nView)) * 0.495 + 0.5;
    return texture2D(uMatcap, uv).rgb;
}

void main() {
    // normal corrigindo face
    vec3 nWorld = normalize(vNormal);
    if (!gl_FrontFacing) nWorld *= -1.0;

    // listras
    float stripes = mod((vWorldPos.x + uTime * uStripeSpeed) * uStripeFreq, 1.0);
    stripes = pow(stripes, uStripePower);

    // fresnel
    vec3 viewDirWorld = normalize(cameraPosition - vWorldPos);
    float fresnel = 1.0 - max(0.0, dot(viewDirWorld, nWorld));
    fresnel = pow(fresnel, uFresnelPower);

    // falloff + holo
    float falloff = smoothstep(0.8, 0.0, fresnel);
    float holo = (stripes * fresnel + fresnel * uHoloMixBase) * falloff;

    // matcap
    vec3 mc = sampleMatcap_fromWorld(nWorld, vWorldPos);
    float m = clamp(uMatcapStrength, 0.0, 1.0);   // força do matcap

    vec3  finalRGB = mix(uColor, mc, m);
    float finalA = holo * (1.0 - m);            // opcional: holo some quando matcap entra
    finalA = clamp(finalA + 0.12 * m, 0.0, 1.0);  // dá um "corpo" quando m=1

    gl_FragColor = vec4(finalRGB, finalA);

    // ---- REVEAL (sem variáveis reaproveitadas) ----
    if (uFinalVisible == 0) {
        float coordAxis =
            (uAxis == 0) ? vWorldPos.x :
            (uAxis == 1) ? vWorldPos.y :
                           vWorldPos.z;

        float edge = smoothstep(uReveal - uFeather, uReveal + uFeather, coordAxis);
        float maskVal = (uInvert == 1) ? (1.0 - edge) : edge;

        if (maskVal <= 0.001) discard;
        gl_FragColor.a *= maskVal;
    }

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}
