// World space (para stripes/fresnel/reveal)
varying vec3 vWorldPos;
varying vec3 vNormal;

// === MatCap: varyings em ESPAÇO DE VISÃO ===
varying vec3 vViewPos;
varying vec3 vNormalView;

vec3 sampleMatcapReflect(vec3 normalView, vec3 viewPos, sampler2D tex) {
    vec3 N = normalize(normalView);
    vec3 V = normalize(-viewPos);
    vec3 R = reflect(V, N);              // reflexão em view space
    vec2 uv = R.xy * 0.5 + 0.5;          // [-1..1] -> [0..1]
    return texture2D(tex, uv).rgb;
}


void main() {
    // posição em mundo
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPos = worldPos.xyz;
    

    // normal em mundo
    vNormal = normalize(mat3(modelMatrix) * normal);

    // posição e normal em VISÃO (corrige escala não-uniforme)
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vViewPos = mv.xyz;
    vNormalView = normalize(normalMatrix * normal);

    gl_Position = projectionMatrix * mv;
}
