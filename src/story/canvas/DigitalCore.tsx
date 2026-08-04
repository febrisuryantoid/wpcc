import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { SceneConfig } from '../types';
import { CINEMATIC_POSITIONS } from './CinematicPositions';
import { getCoreState } from './CoreState';

// Texture canvas dot generator
const createDotTexture = () => {
  const dotCanvas = document.createElement('canvas');
  dotCanvas.width = 128; 
  dotCanvas.height = 128;
  const dotCtx = dotCanvas.getContext('2d');
  if (!dotCtx) return null;
  const gradient = dotCtx.createRadialGradient(64, 64, 0, 64, 64, 64);
  
  gradient.addColorStop(0.0, 'rgba(255, 255, 255, 1.0)'); 
  gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.85)'); 
  gradient.addColorStop(1.0, 'rgba(255, 255, 255, 0.0)');
  
  dotCtx.fillStyle = gradient;
  dotCtx.beginPath();
  dotCtx.arc(64, 64, 64, 0, Math.PI * 2);
  dotCtx.fill();
  return new THREE.CanvasTexture(dotCanvas);
};

// Shader for Tight Subtle Rim Aura behind the sphere
const SubtleBackAuraShader = {
  uniforms: {
    glowColor: { value: new THREE.Color(0x3B58E6) },
    glowOpacity: { value: 1.0 },
  },
  vertexShader: `
    varying vec3 vNormalW;
    varying vec3 vPositionW;
    void main() {
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vPositionW = worldPosition.xyz;
      vNormalW = normalize(mat3(modelMatrix) * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 glowColor;
    uniform float glowOpacity;
    varying vec3 vNormalW;
    varying vec3 vPositionW;
    void main() {
      vec3 viewDirection = normalize(cameraPosition - vPositionW);
      float rim = pow(1.0 - abs(dot(normalize(vNormalW), viewDirection)), 3.5);
      gl_FragColor = vec4(glowColor, rim * glowOpacity);
    }
  `
};

const CoreDots = ({ radius, color, opacityMultiplier }: { radius: number, color: THREE.Color, opacityMultiplier: number }) => {
  const texture = useMemo(() => createDotTexture(), []);
  
  const dotCount = 800; // Reduced for performance optimization
  const { positions } = useMemo(() => {
    const pts = new Float32Array(dotCount * 3);
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    // Placed precisely on the sphere surface (radius * 1.01)
    const dotRadius = radius * 1.01; 
    
    for (let i = 0; i < dotCount; i++) {
      const y = 1 - (i / (dotCount - 1)) * 2;
      const horizontalRadius = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      pts[i*3] = Math.cos(theta) * horizontalRadius * dotRadius;
      pts[i*3+1] = y * dotRadius;
      pts[i*3+2] = Math.sin(theta) * horizontalRadius * dotRadius;
    }
    return { positions: pts };
  }, [radius, dotCount]);
  
  const matRef = useRef<THREE.PointsMaterial>(null);
  
  useFrame((state, delta) => {
    if (matRef.current) {
      matRef.current.opacity = THREE.MathUtils.lerp(matRef.current.opacity, 1.0 * opacityMultiplier, 1 - Math.exp(-2.0 * delta));
      matRef.current.color.lerp(color, 1 - Math.exp(-4.0 * delta));
    }
  });

  return (
    <points renderOrder={3}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={dotCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        ref={matRef}
        size={0.07} 
        color={0x3B58E6} 
        map={texture || undefined} 
        transparent 
        opacity={1.0} 
        alphaTest={0.001} 
        depthWrite={false} 
        depthTest={true}
        blending={THREE.AdditiveBlending} 
      />
    </points>
  );
};

// Tight Back Aura Mesh Component
const TightBackAura = ({ geometry, scale, baseColor, opacity, opacityMultiplier }: any) => {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const uniforms = useMemo(() => THREE.UniformsUtils.clone(SubtleBackAuraShader.uniforms), []);
  
  useFrame((state, delta) => {
    if (matRef.current) {
      const currentOpacity = matRef.current.uniforms.glowOpacity.value;
      matRef.current.uniforms.glowOpacity.value = THREE.MathUtils.lerp(currentOpacity, opacity * opacityMultiplier, 1 - Math.exp(-2.0 * delta));
      matRef.current.uniforms.glowColor.value.lerp(baseColor, 1 - Math.exp(-3.0 * delta));
    }
  });

  return (
    <mesh geometry={geometry} scale={scale} renderOrder={0}>
      <shaderMaterial 
        ref={matRef}
        args={[SubtleBackAuraShader]}
        uniforms={uniforms}
        transparent 
        side={THREE.BackSide}
        blending={THREE.AdditiveBlending} 
        depthWrite={false} 
      />
    </mesh>
  );
};

const WpIconOverlay = ({ colorHex, show }: { colorHex: string, show: boolean }) => {
  if (!show) return null;

  const isSphereWhite = colorHex.toLowerCase() === '#ffffff' || colorHex.toLowerCase() === '#fff';
  const iconColor = isSphereWhite ? '#3B58E6' : '#FFFFFF';

  return (
    <Html center distanceFactor={4} sprite transform style={{ pointerEvents: 'none' }}>
      <div className="w-16 h-16 flex items-center justify-center filter drop-shadow-[0_0_15px_rgba(59,88,230,0.6)] animate-pulse duration-1000">
        <svg 
          fill={iconColor} 
          stroke={iconColor} 
          viewBox="0 0 512 512" 
          className="w-full h-full transition-colors duration-500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <title>ionicons-v5_logos</title>
            <path d="M259,271.3,226.2,367h-.1l-25.4,73.1c1.8.5,3.5.9,5.3,1.4h.3a192.51,192.51,0,0,0,49.5,6.5,157,157,0,0,0,24.9-1.8,184.3,184.3,0,0,0,32.5-7.1h0c2.6-.8,5.2-1.7,7.8-2.6-2.8-6-8.8-19.3-9.1-19.9Z"></path>
            <path d="M80.8,180.5C70.8,203.1,64,230.9,64,256c0,6.3.3,12.6.9,18.8,6.9,71.2,52.9,131,116.1,157.9,2.6,1.1,5.3,2.2,8,3.2L96,180.6C88,180.3,86.5,180.8,80.8,180.5Z"></path>
            <path d="M430.2,175.4a188,188,0,0,0-15.1-26.6c-1.6-2.4-3.4-4.8-5.1-7.2A193,193,0,0,0,325.1,77a189.2,189.2,0,0,0-69.2-13,191.51,191.51,0,0,0-149.4,71.7A196,196,0,0,0,89,161.3c14.2.1,31.8.1,33.8.1,18.1,0,46-2.2,46-2.2,9.4-.6,10.4,13.1,1.1,14.2,0,0-9.4,1.1-19.8,1.6L213,362l37.8-113.3L224,175.1c-9.4-.5-18.1-1.6-18.1-1.6-9.4-.5-8.2-14.8,1-14.2,0,0,28.5,2.2,45.5,2.2,18.1,0,46-2.2,46-2.2,9.3-.6,10.5,13.1,1.1,14.2,0,0-9.3,1.1-19.7,1.6l62.3,185.6,17.3-57.6c8.7-22.4,13.1-40.9,13.1-55.7,0-21.3-7.7-36.1-14.3-47.6-8.7-14.3-16.9-26.3-16.9-40.4,0-15.9,12-30.7,29-30.7h2.2c26.2-.7,34.8,25.3,35.9,43v.6c.4,7.2.1,12.5.1,18.8,0,17.4-3.3,37.1-13.1,61.8l-39,112.8-22.3,65.7c1.8-.8,3.5-1.6,5.3-2.5,56.7-27.4,98-82,106.7-146.7a172.07,172.07,0,0,0,1.9-26A191.11,191.11,0,0,0,430.2,175.4Z"></path>
            <path d="M256,48a208.06,208.06,0,0,1,81,399.66A208.06,208.06,0,0,1,175,64.34,206.7,206.7,0,0,1,256,48m0-16C132.29,32,32,132.29,32,256S132.29,480,256,480,480,379.71,480,256,379.71,32,256,32Z"></path>
          </g>
        </svg>
      </div>
    </Html>
  );
};

export const DigitalCore: React.FC<{ scene: SceneConfig }> = ({ scene }) => {
  const coreState = getCoreState(scene.id);
  const targetConfig = CINEMATIC_POSITIONS[coreState.cameraIndex];
  
  const outerGroupRef = useRef<THREE.Group>(null);
  const innerGroupRef = useRef<THREE.Group>(null);
  const solidMeshRef = useRef<THREE.Mesh>(null);
  const wireMatRef = useRef<THREE.MeshBasicMaterial>(null);
  
  const currentColor = useRef(new THREE.Color(coreState.color));
  const currentObjPos = useRef(new THREE.Vector3(...targetConfig.objPos));
  
  const radius = 0.85;
  const geometry = useMemo(() => new THREE.SphereGeometry(radius, 64, 64), [radius]);

  useFrame((state, delta) => {
    // Parallax logic based on pointer
    const mouseX = coreState.mouseParallax ? state.pointer.x : 0;
    const mouseY = coreState.mouseParallax ? state.pointer.y : 0;
    
    const targetRotationY = mouseX * 0.5;
    const targetRotationX = -mouseY * 0.5;
    const targetPositionX = mouseX * 0.2;
    const targetPositionY = mouseY * 0.2;
    
    // Frame-rate independent morph damping
    const morphDamp = 1 - Math.exp(-0.6 * delta);
    const colorDamp = 1 - Math.exp(-2.0 * delta);

    // Lerp base color
    currentColor.current.lerp(new THREE.Color(coreState.color), colorDamp);
    
    // Smooth Object Position
    currentObjPos.current.lerp(new THREE.Vector3(...targetConfig.objPos), morphDamp);
    
    if (outerGroupRef.current) {
      outerGroupRef.current.position.x = currentObjPos.current.x + targetPositionX;
      outerGroupRef.current.position.y = currentObjPos.current.y + targetPositionY;
      outerGroupRef.current.position.z = currentObjPos.current.z;
      
      const parallaxDamp = 1 - Math.exp(-3.0 * delta);
      outerGroupRef.current.rotation.x += (targetRotationX - outerGroupRef.current.rotation.x) * parallaxDamp;
      outerGroupRef.current.rotation.y += (targetRotationY - outerGroupRef.current.rotation.y) * parallaxDamp;
    }
    
    if (innerGroupRef.current) {
      innerGroupRef.current.rotation.y += ((2 * Math.PI) / 25) * delta * coreState.speed;
    }

    if (solidMeshRef.current) {
      const targetOp = coreState.showWireframe ? 0 : 1;
      (solidMeshRef.current.material as THREE.Material).opacity = THREE.MathUtils.lerp((solidMeshRef.current.material as THREE.Material).opacity, targetOp, 0.1);
    }
    
    if (wireMatRef.current) {
      const targetWireOp = coreState.showWireframe ? 0.3 : 0;
      wireMatRef.current.opacity = THREE.MathUtils.lerp(wireMatRef.current.opacity, targetWireOp, 0.1);
      wireMatRef.current.color.copy(currentColor.current);
    }
  });

  const activeGlowOpacity = coreState.showWireframe ? 0 : 1;

  return (
    <group ref={outerGroupRef}>
      <group ref={innerGroupRef}>
        {/* Layer 0 (BEHIND): Very Tight & Subtle Back Aura hugging closely behind the sphere silhouette */}
        <TightBackAura geometry={geometry} scale={1.03} baseColor={currentColor.current} opacity={0.6} opacityMultiplier={activeGlowOpacity} />
        <TightBackAura geometry={geometry} scale={1.08} baseColor={currentColor.current} opacity={0.25} opacityMultiplier={activeGlowOpacity} />

        {/* Layer 1: Solid Pitch-Black Core Sphere with Depth Write enabled */}
        <mesh ref={solidMeshRef} geometry={geometry} renderOrder={1}>
          <meshBasicMaterial color={0x000000} transparent opacity={1} depthWrite={true} depthTest={true} />
        </mesh>
        
        {/* Wireframe for HTML state */}
        <mesh geometry={geometry} scale={1.001} renderOrder={2}>
          <meshBasicMaterial ref={wireMatRef} wireframe transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} />
        </mesh>

        {/* Layer 3: Surface Luminous Dots (Crisp dots on front surface, back dots occluded by depthTest) */}
        <CoreDots radius={radius} color={currentColor.current} opacityMultiplier={activeGlowOpacity} />
      </group>

      {/* Embedded WordPress SVG Icon */}
      <WpIconOverlay colorHex={coreState.color} show={!!coreState.showWpIcon} />
    </group>
  );
};
