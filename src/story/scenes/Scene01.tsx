import React from 'react';
import { SceneProps } from '../types';
import { SceneLayout } from '../components/SceneLayout';

export const Scene01: React.FC<SceneProps> = ({ scene, isActive }) => {
  if (!isActive) return null;

  return <SceneLayout scene={scene} isActive={isActive} />;
};
