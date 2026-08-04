import React from 'react';
import { CameraRig } from './CameraRig';
import { SceneConfig } from '../types';
import { Environment, Stars } from '@react-three/drei';
import { DigitalCore } from './DigitalCore';

interface GlobalCanvasProps {
  scene: SceneConfig;
}

export const GlobalCanvas: React.FC<GlobalCanvasProps> = ({ scene }) => {
  const isScene15 = scene.id === 'scene_15';

  return (
    <>
      {/* Lighting - Softened on Scene 15 to eliminate blinding glare */}
      <ambientLight intensity={isScene15 ? 0.08 : 0.2} />
      <directionalLight position={[10, 10, 5]} intensity={isScene15 ? 0.25 : 1} color={isScene15 ? "#94A3B8" : "#ffffff"} />
      <directionalLight position={[-10, -10, -5]} intensity={isScene15 ? 0.15 : 0.5} color="#3B58E6" />
      
      {/* Environment */}
      <Environment preset={isScene15 ? "night" : "city"} />
      <Stars radius={100} depth={50} count={isScene15 ? 1500 : 5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Camera Rig handles moving camera based on scene */}
      <CameraRig scene={scene} />

      {/* The Single Evolving Hero Object */}
      <DigitalCore scene={scene} />
    </>
  );
};
