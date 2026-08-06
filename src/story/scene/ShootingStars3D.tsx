import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
/ * Rare & Elegant Photorealistic 3D Meteor Glide in Deep Space
 */
export const ShootingStars3D: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const trailMeshRef = useRef<THREE.InstancedMesh>(null);

  // Meteor state
  const state = useMemo(() => ({
    startPos: new THREE.Vector3(),
    endPos: new THREE.Vector3(),
    currentPos: new THREE.Vector3(),
    progress: 0,
    speed: 0.35,
    delay: 3.0, // Initial wait before first shooting star
    active: false,
    color: new THREE.Color('#38BDF8'),
  }), []);

  // Pre-allocated dummy object for instanced trail particles
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const TRAIL_COUNT = 16;
  const history = useMemo(() => Array.from({ length: TRAIL_COUNT }).map(() => new THREE.Vector3()), []);

  const resetShootingStar = () => {
    // Randomize trajectory across deep background space (z = -25 to -30)
    const angles = [
      { start: [-28, 22, -28], end: [18, -18, -25] },
      { start: [25, 25, -26], end: [-20, -15, -28] },
      { start: [-22, 28, -25], end: [22, -12, -27] },
      { start: [28, 18, -27], end: [-15, -22, -26] },
    ];
    const pick = angles[Math.floor(Math.random() * angles.length)];
    const offsetY = (Math.random() - 0.5) * 6;

    state.startPos.set(pick.start[0], pick.start[1] + offsetY, pick.start[2]);
    state.endPos.set(pick.end[0], pick.end[1] + offsetY, pick.end[2]);
    state.currentPos.copy(state.startPos);
    
    // Fill history buffer with start position
    for (let i = 0; i < TRAIL_COUNT; i++) {
      history[i].copy(state.startPos);
    }

    state.progress = 0;
    state.speed = 0.25 + Math.random() * 0.2; // Smooth, slow elegant glide
    state.active = true;

    // Pick subtle soft cyan/sky/amber glow colors
    const colors = ['#38BDF8', '#60A5FA', '#818CF8', '#34D399'];
    state.color.set(colors[Math.floor(Math.random() * colors.length)]);
  };

  useFrame((_, delta) => {
    if (!state.active) {
      state.delay -= delta;
      if (state.delay <= 0) {
        resetShootingStar();
      }
      return;
    }

    state.progress += delta * state.speed;

    if (state.progress >= 1) {
      state.active = false;
      state.delay = 6.0 + Math.random() * 8.0; // Wait 6-14 seconds between stars for rare elegance
      if (meshRef.current) meshRef.current.visible = false;
      if (trailMeshRef.current) trailMeshRef.current.visible = false;
      return;
    }

    // Interpolate 3D position
    state.currentPos.lerpVectors(state.startPos, state.endPos, state.progress);

    // Update Head Mesh
    if (meshRef.current) {
      meshRef.current.visible = true;
      meshRef.current.position.copy(state.currentPos);
      
      // Smooth fade-in & fade-out curve
      const opacity = Math.sin(state.progress * Math.PI);
      const scale = 0.12 * opacity;
      meshRef.current.scale.setScalar(scale);

      if (meshRef.current.material instanceof THREE.MeshBasicMaterial) {
        meshRef.current.material.color = state.color;
        meshRef.current.material.opacity = opacity * 0.9;
      }
    }

    // Update 3D Trail History
    history.pop();
    history.unshift(state.currentPos.clone());

    // Update Trail Instanced Mesh
    if (trailMeshRef.current) {
      trailMeshRef.current.visible = true;
      const opacityCurve = Math.sin(state.progress * Math.PI);

      for (let i = 0; i < TRAIL_COUNT; i++) {
        const factor = 1 - i / TRAIL_COUNT;
        dummy.position.copy(history[i]);
        const s = 0.08 * factor * opacityCurve;
        dummy.scale.set(s, s, s);
        dummy.updateMatrix();
        trailMeshRef.current.setMatrixAt(i, dummy.matrix);
      }
      trailMeshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group>
      {/* 3D Meteor Glow Head */}
      <mesh ref={meshRef} visible={false}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* 3D Meteor Dust Trail */}
      <instancedMesh
        ref={trailMeshRef}
        args={[undefined, undefined, TRAIL_COUNT]}
        visible={false}
      >
        <sphereGeometry args={[1, 8, 8]} />
        <meshBasicMaterial
          color="#E0F2FE"
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
        />
      </instancedMesh>
    </group>
  );
};
