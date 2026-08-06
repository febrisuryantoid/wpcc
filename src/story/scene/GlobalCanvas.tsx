import React from 'react';
import { CameraRig } from './CameraRig';
import { SceneConfig } from '../types';
import { Environment, Stars } from '@react-three/drei';
import { Planet3D } from './Planet3D';
import { ShootingStars3D } from './ShootingStars3D';

interface GlobalCanvasProps {
  scene: SceneConfig;
  isSpinningCover?: boolean;
}

export const GlobalCanvas: React.FC<GlobalCanvasProps> = ({ scene, isSpinningCover }) => {
  const isScene15 = scene.id === 'scene_15';

  return (
    <>
      {/* Lighting - Softened on Scene 15 to eliminate blinding glare */}
      <ambientLight intensity={isScene15 ? 0.08 : 0.2} />
      <directionalLight position={[10, 10, 5]} intensity={isScene15 ? 0.25 : 1} color={isScene15 ? "#94A3B8" : "#ffffff"} />
      <directionalLight position={[-10, -10, -5]} intensity={isScene15 ? 0.15 : 0.5} color="#3B58E6" />
      
      {/* Environment & Cosmic Background Stars */}
      <Environment preset={isScene15 ? "night" : "city"} />
      <Stars radius={100} depth={50} count={isScene15 ? 1500 : 5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Dynamic 3D Shooting Stars / Meteors streaking towards planet */}
      <ShootingStars3D />

      {/* Camera Rig handles moving camera based on scene */}
      <CameraRig scene={scene} />

      {/* The Evolving Planet 3D (Adapts shape & color to slide content) */}
      <Planet3D scene={scene} isSpinningCover={isSpinningCover} />
    </>
  );
};

