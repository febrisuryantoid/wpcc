import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { SceneConfig } from '../types';
import { CINEMATIC_POSITIONS } from './CinematicPositions';
import { getCoreState } from './CoreState';

interface CameraRigProps {
  scene: SceneConfig;
}

export const CameraRig: React.FC<CameraRigProps> = ({ scene }) => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  
  const currentPos = useRef(new THREE.Vector3(0, 0, 7));
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));
  
  useFrame((state, delta) => {
    if (!cameraRef.current) return;
    
    const coreState = getCoreState(scene.id);
    const targetConfig = CINEMATIC_POSITIONS[coreState.cameraIndex];
    
    // Smooth damp factor for high-class morph transition (frame-rate independent)
    const dampFactor = 1 - Math.exp(-0.6 * delta);

    // Parallax mouse offsets for true 3D spatial depth
    const parallaxX = state.pointer.x * 0.8;
    const parallaxY = state.pointer.y * 0.5;

    // 1. Smoothly move camera position with parallax offset
    const targetCamVec = new THREE.Vector3(
      targetConfig.camPos[0] + parallaxX,
      targetConfig.camPos[1] + parallaxY,
      targetConfig.camPos[2]
    );
    currentPos.current.lerp(targetCamVec, dampFactor);
    cameraRef.current.position.copy(currentPos.current);
    
    // 2. Smoothly change lookAt with slight counter-parallax focus
    const targetLookAtVec = new THREE.Vector3(
      targetConfig.lookAt[0] + parallaxX * 0.2,
      targetConfig.lookAt[1] + parallaxY * 0.2,
      targetConfig.lookAt[2]
    );
    currentLookAt.current.lerp(targetLookAtVec, dampFactor);
    cameraRef.current.lookAt(currentLookAt.current);
  });

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      position={[0, 0, 7]}
      fov={50}
    />
  );
};
