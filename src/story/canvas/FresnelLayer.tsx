import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
varying vec3 vNormalW;
varying vec3 vPositionW;
void main() {
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vPositionW = worldPosition.xyz;
  vNormalW = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform vec3 glowColor;
uniform float fresnelBias;
uniform float fresnelScale;
uniform float fresnelPower;
uniform float glowOpacity;
varying vec3 vNormalW;
varying vec3 vPositionW;
void main() {
  vec3 viewDirection = normalize(cameraPosition - vPositionW);
  float fresnel = fresnelBias + fresnelScale * pow(1.0 - max(0.0, dot(normalize(vNormalW), viewDirection)), fresnelPower);
  gl_FragColor = vec4(glowColor, clamp(fresnel, 0.0, 1.0) * glowOpacity);
}
`;

interface FresnelLayerProps {
  scale: number;
  bias: number;
  fresnelScale: number;
  power: number;
  opacity: number;
  baseColor: THREE.Color;
  activeOpacityMultiplier: number;
  geometry: THREE.BufferGeometry;
}

export const FresnelLayer: React.FC<FresnelLayerProps> = ({ scale, bias, fresnelScale, power, opacity, baseColor, activeOpacityMultiplier, geometry }) => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(() => ({
    glowColor: { value: new THREE.Color(baseColor) },
    fresnelBias: { value: bias },
    fresnelScale: { value: fresnelScale },
    fresnelPower: { value: power },
    glowOpacity: { value: opacity * activeOpacityMultiplier },
  }), []);

  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.glowColor.value.copy(baseColor);
      materialRef.current.uniforms.glowOpacity.value = opacity * activeOpacityMultiplier;
    }
  });

  return (
    <mesh scale={scale} geometry={geometry}>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
};
