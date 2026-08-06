import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { SceneConfig } from '../types';
import { CINEMATIC_POSITIONS } from './CinematicPositions';
import { getCoreState } from './CoreState';
import { getSlideClassification, ShapeType, CelestialPalette } from '../classification/slideCategory';

/**
 * 4K Realistic Sun/Star Shader using 3D Simplex Noise & Fractal Brownian Motion (FBM)
 * Seamless procedural plasma flows with dynamic thermal limb darkening
 */
const RealisticSunShader = {
  uniforms: {
    time: { value: 0.0 },
    radius: { value: 1.1475 },
    colorDark: { value: new THREE.Color() },
    colorBase: { value: new THREE.Color() },
    colorBright: { value: new THREE.Color() },
    colorLimb: { value: new THREE.Color() }
  },
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vViewPosition;

    void main() {
        vUv = uv;
        vPosition = position;
        vNormal = normalize(normalMatrix * normal);
        vViewPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    uniform float radius;
    uniform vec3 colorDark;
    uniform vec3 colorBase;
    uniform vec3 colorBright;
    uniform vec3 colorLimb;

    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vViewPosition;

    // 3D Hash Function for Simplex Noise
    vec3 hash(vec3 p) {
        p = vec3(dot(p, vec3(127.1, 311.7, 74.7)),
                 dot(p, vec3(269.5, 183.3, 246.1)),
                 dot(p, vec3(113.5, 271.9, 124.6)));
        return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
    }

    // 3D Simplex Noise
    float noise(vec3 p) {
        vec3 i = floor(p);
        vec3 f = fract(p);
        vec3 u = f * f * (3.0 - 2.0 * f);

        return mix(mix(mix(dot(hash(i + vec3(0.0,0.0,0.0)), f - vec3(0.0,0.0,0.0)), 
                           dot(hash(i + vec3(1.0,0.0,0.0)), f - vec3(1.0,1.0,0.0)), u.x),
                       mix(dot(hash(i + vec3(0.0,1.0,0.0)), f - vec3(0.0,1.0,0.0)), 
                           dot(hash(i + vec3(1.0,1.0,0.0)), f - vec3(1.0,1.0,0.0)), u.x), u.y),
                   mix(mix(dot(hash(i + vec3(0.0,0.0,1.0)), f - vec3(0.0,0.0,1.0)), 
                           dot(hash(i + vec3(1.0,0.0,1.0)), f - vec3(1.0,1.0,1.0)), u.x),
                       mix(dot(hash(i + vec3(0.0,1.0,1.0)), f - vec3(0.0,1.0,1.0)), 
                           dot(hash(i + vec3(1.0,1.0,1.0)), f - vec3(1.0,1.0,1.0)), u.x), u.y), u.z);
    }

    // Fractal Brownian Motion (6 Octaves for hyper-realistic detail)
    float fbm(vec3 p) {
        float f = 0.0;
        float amplitude = 0.5;
        float frequency = 1.0;
        for (int i = 0; i < 6; i++) {
            f += amplitude * noise(p * frequency);
            p = p * 2.0;
            amplitude *= 0.5;
            frequency *= 2.0;
        }
        return f;
    }

    void main() {
        // Plasma turbulence swirled over time for rich color motion
        vec3 p = vPosition * (4.0 / radius) + vec3(time * 0.05, time * 0.03, time * 0.04);
        
        float n1 = fbm(p);
        float n2 = fbm(p + vec3(n1) + time * 0.03);
        float finalNoise = fbm(p + n2 * 2.0);

        finalNoise = finalNoise * 0.5 + 0.5; 

        // White-hot solar core hotspots
        vec3 colorWhite = vec3(1.0, 1.0, 1.0);  

        // Smooth thermal surface color blending with animated fluid movement
        vec3 color = mix(colorDark, colorBase, smoothstep(0.0, 0.38, finalNoise));
        color = mix(color, colorBright, smoothstep(0.38, 0.68, finalNoise));
        color = mix(color, colorWhite, smoothstep(0.78, 1.0, finalNoise));

        // Atmospheric Limb Darkening (In view space)
        vec3 viewDirection = normalize(-vViewPosition);
        float edgeFactor = dot(viewDirection, vNormal);
        edgeFactor = smoothstep(0.0, 0.85, edgeFactor);
        color = mix(colorLimb, color, edgeFactor);

        // Realistic Planet Sunlight Shading & Terminator (Sisi Gelap)
        // Sunlight coming from upper-left front direction (X: -0.4, Y: 0.7, Z: 0.8)
        vec3 sunDir = normalize(vec3(-0.4, 0.75, 0.8));
        float NdotL = dot(vNormal, sunDir);

        // Soft realistic day-to-night shadow transition curve
        float shadowTerminator = smoothstep(-0.25, 0.45, NdotL);

        // Ambient night-side atmosphere glow (subtle deep dark tone on shadow side)
        vec3 nightColor = colorDark * 0.15 + colorLimb * 0.05;

        // Blend illuminated day-side with dark shadowed side
        color = mix(nightColor, color, shadowTerminator);

        gl_FragColor = vec4(color, 1.0);
    }
  `
};

/**
 * Realistic Stellar Corona / Atmospheric Atmosphere Shader
 * Creates volumetric glowing rim matching solar plasma color
 */
const RealisticAtmosphereShader = {
  uniforms: {
    colorCorona: { value: new THREE.Color() }
  },
  vertexShader: `
    varying vec3 vNormal;
    varying vec3 vPositionNormal;
    void main() {
        vNormal = normalize(normalMatrix * normal);
        vPositionNormal = (modelViewMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 colorCorona;
    varying vec3 vNormal;
    varying vec3 vPositionNormal;
    void main() {
        // Use the mathematically precise camera-aligned view direction in view space
        vec3 viewDir = normalize(-vPositionNormal);
        float intensity = pow(1.0 - max(dot(vNormal, viewDir), 0.0), 4.5);
        gl_FragColor = vec4(colorCorona, 1.0) * intensity * 0.7;
    }
  `
};

/**
 * Scale factors of each celestial body to give varying aesthetic size
 */
export const getRadiusForShape = (shape: ShapeType, baseRadius: number = 0.85): number => {
  switch (shape) {
    case 'helios': return baseRadius * 1.35;
    case 'auriga': return baseRadius * 1.25;
    case 'dwarf': return baseRadius * 1.15;
    case 'ignis': return baseRadius * 1.40;
    case 'ceti': return baseRadius * 1.20;
    case 'eridani': return baseRadius * 1.30;
    case 'proxima': return baseRadius * 1.10;
    case 'alpha': return baseRadius * 1.45;
    case 'sirius': return baseRadius * 1.28;
    case 'orion': return baseRadius * 1.38;
    case 'vega': return baseRadius * 1.18;
    case 'centauri': return baseRadius * 1.32;
    default: return baseRadius * 1.30;
  }
};

/**
 * Photorealistic 3D Sphere Geometry for all planets
 */
export const getGeometryForShape = (_shape: ShapeType, radius: number): THREE.BufferGeometry => {
  return new THREE.SphereGeometry(radius, 128, 128);
};

/**
 * Realistic Stellar Core Mesh using ShaderMaterial with smooth transition on slide change
 */
const SunSphere = ({ palette, radius, shape }: { palette: CelestialPalette; radius: number; shape: ShapeType }) => {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  
  // Clone uniforms to prevent sharing instances across different components
  const uniforms = useMemo(() => {
    const cloned = THREE.UniformsUtils.clone(RealisticSunShader.uniforms);
    cloned.radius.value = radius;
    return cloned;
  }, [radius]);
  
  // Create static target colors for smooth interpolation on slide transition
  const targetDark = useRef(new THREE.Color().setRGB(palette.dark.r, palette.dark.g, palette.dark.b));
  const targetBase = useRef(new THREE.Color().setRGB(palette.base.r, palette.base.g, palette.base.b));
  const targetBright = useRef(new THREE.Color().setRGB(palette.bright.r, palette.bright.g, palette.bright.b));
  const targetLimb = useRef(new THREE.Color().setRGB(palette.limb.r, palette.limb.g, palette.limb.b));

  useEffect(() => {
    targetDark.current.setRGB(palette.dark.r, palette.dark.g, palette.dark.b);
    targetBase.current.setRGB(palette.base.r, palette.base.g, palette.base.b);
    targetBright.current.setRGB(palette.bright.r, palette.bright.g, palette.bright.b);
    targetLimb.current.setRGB(palette.limb.r, palette.limb.g, palette.limb.b);
  }, [palette]);

  // Always use a pristine, detailed 128x128 3D Sphere Geometry
  const geom = useMemo(() => new THREE.SphereGeometry(radius, 128, 128), [radius]);

  useFrame((state, delta) => {
    if (matRef.current) {
      // Shifting plasma noise movement over elapsed time
      matRef.current.uniforms.time.value += delta;

      // Smooth color interpolation on slide transition
      const lerpSpeed = 1.0 - Math.exp(-3.5 * delta);
      matRef.current.uniforms.colorDark.value.lerp(targetDark.current, lerpSpeed);
      matRef.current.uniforms.colorBase.value.lerp(targetBase.current, lerpSpeed);
      matRef.current.uniforms.colorBright.value.lerp(targetBright.current, lerpSpeed);
      matRef.current.uniforms.colorLimb.value.lerp(targetLimb.current, lerpSpeed);
    }
  });

  return (
    <mesh geometry={geom}>
      <shaderMaterial 
        ref={matRef}
        args={[RealisticSunShader]}
        uniforms={uniforms}
      />
    </mesh>
  );
};

/**
 * Volumetric Rim Glow Atmosphere Shader Mesh - Disabled to remove outer outline ring
 */
const SolarAuraMesh = ({ radius, palette, shape }: { radius: number; palette: CelestialPalette; shape: ShapeType }) => {
  // Return null to remove outer artificial outline glow ring ("garis tebal kayak cahaya")
  return null;
};

/**
 * Double Planetary Orbit Rings (inspired by Saturn's rings)
 * Beautiful flat luminous rings rotating in space
 */
const SaturnianRings = ({ radius, colorHex, show }: { radius: number; colorHex: string; show: boolean }) => {
  const ringRef = useRef<THREE.Mesh>(null);
  const color = useMemo(() => new THREE.Color(colorHex), [colorHex]);

  useFrame((_, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.05 * delta;
    }
  });

  if (!show) return null;

  return (
    <mesh ref={ringRef} rotation={[Math.PI / 2.5, Math.PI / 8, 0]}>
      <ringGeometry args={[radius * 1.35, radius * 2.1, 64]} />
      <meshBasicMaterial 
        color={color} 
        side={THREE.DoubleSide} 
        transparent 
        opacity={0.35} 
        blending={THREE.AdditiveBlending} 
      />
    </mesh>
  );
};

/**
 * Orbiting Satellites / Moons revolving around the central star/planet
 */
const OrbitingSatellite = ({ radius, colorHex, show }: { radius: number; colorHex: string; show: boolean }) => {
  const satelliteRef = useRef<THREE.Mesh>(null);
  const angle = useRef(0);
  const color = useMemo(() => new THREE.Color(colorHex), [colorHex]);

  useFrame((_, delta) => {
    if (satelliteRef.current) {
      angle.current += 0.8 * delta;
      const orbitRadius = radius * 1.8;
      satelliteRef.current.position.x = Math.cos(angle.current) * orbitRadius;
      satelliteRef.current.position.z = Math.sin(angle.current) * orbitRadius * 0.4;
      satelliteRef.current.position.y = Math.sin(angle.current) * orbitRadius * 0.2;
    }
  });

  if (!show) return null;

  return (
    <mesh ref={satelliteRef}>
      <sphereGeometry args={[radius * 0.15, 16, 16]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

/**
 * Sophisticated Luminous Wireframe and Vertex Beacons overlay
 * For stylized cosmic geometry visual highlights
 */
const LuminousWireframe = ({ shape, radius, colorHex, show }: { shape: ShapeType; radius: number; colorHex: string; show: boolean }) => {
  const geom = useMemo(() => getGeometryForShape(shape, radius), [shape, radius]);
  const color = useMemo(() => new THREE.Color(colorHex), [colorHex]);

  if (!show) return null;

  return (
    <>
      {/* Wireframe overlay */}
      <mesh geometry={geom}>
        <meshBasicMaterial 
          color={color} 
          wireframe 
          transparent 
          opacity={0.15} 
          blending={THREE.AdditiveBlending} 
        />
      </mesh>
    </>
  );
};

/**
 * Overlay component for WordPress Logo
 */
const WpIconOverlay = ({ colorHex, show }: { colorHex: string; show: boolean }) => {
  return null;
};

/**
 * Object 3D Component - Master celestial view handler
 */
export const Planet3D: React.FC<{ scene: SceneConfig; isSpinningCover?: boolean }> = ({ scene, isSpinningCover }) => {
  const coreState = getCoreState(scene.id);
  const targetConfig = CINEMATIC_POSITIONS[coreState.cameraIndex];
  
  // Classification with the updated fictional celestial space body names & palettes
  const classification = getSlideClassification(scene.id);
  const activeColorHex = classification.color;

  const outerGroupRef = useRef<THREE.Group>(null);
  const innerGroupRef = useRef<THREE.Group>(null);
  
  const currentObjPos = useRef(new THREE.Vector3(...targetConfig.objPos));
  
  const { viewport } = useThree();
  const isPortrait = viewport.height > viewport.width;
  const isSmallScreen = viewport.width < 5;
  const scaleMultiplier = isPortrait ? 0.6 : (isSmallScreen ? 0.75 : 0.95);

  const baseRadius = 0.85 * scaleMultiplier;
  const radius = useMemo(() => getRadiusForShape(classification.shape, baseRadius), [classification.shape, baseRadius]);

  // Pure, photorealistic 3D planet without noisy 2D overlays or wireframe artifacts
  const hasRings = false;
  const hasSatellite = false;
  const hasWireframeOverlay = false;

  useFrame((state, delta) => {
    // Parallax logic based on mouse pointer
    const mouseX = coreState.mouseParallax ? state.pointer.x : 0;
    const mouseY = coreState.mouseParallax ? state.pointer.y : 0;
    
    const targetRotationY = mouseX * 0.4;
    const targetRotationX = -mouseY * 0.4;
    const targetPositionX = mouseX * 0.15;
    const targetPositionY = mouseY * 0.15;
    
    const morphDamp = 1 - Math.exp(-0.6 * delta);

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
      // Fast spin on 3D sphere object when clicked on cover, or standard planetary spin
      const currentSpeed = isSpinningCover ? 30.0 : coreState.speed;
      innerGroupRef.current.rotation.y += 0.18 * delta * currentSpeed;
      innerGroupRef.current.rotation.x = 0.18;
      innerGroupRef.current.rotation.z = 0.08;
    }
  });

  return (
    <group ref={outerGroupRef}>
      <group ref={innerGroupRef}>
        {/* Volumetric Glowing Stellar Atmosphere / Corona */}
        <SolarAuraMesh radius={radius} palette={classification.palette} shape={classification.shape} />

        {/* 4K Procedural Plasma Shader Core */}
        <SunSphere palette={classification.palette} radius={radius} shape={classification.shape} />

        {/* Dynamic Decorative Features (Saturn-Style Rings, Moons, Wireframes) */}
        <SaturnianRings radius={radius} colorHex={activeColorHex} show={hasRings} />
        <OrbitingSatellite radius={radius} colorHex={activeColorHex} show={hasSatellite} />
        <LuminousWireframe shape={classification.shape} radius={radius} colorHex={activeColorHex} show={hasWireframeOverlay} />
      </group>

      {/* Embedded WordPress SVG Icon */}
      <WpIconOverlay colorHex={activeColorHex} show={!!coreState.showWpIcon} />
    </group>
  );
};

export const Object3D = Planet3D;
export const DigitalCore = Planet3D;
