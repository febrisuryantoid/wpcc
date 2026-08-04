import React from 'react';
import { SceneProps } from '../types';
import { SceneLayout } from '../components/SceneLayout';

export const Scene53: React.FC<SceneProps> = ({ scene, isActive }) => {
  return (
    <SceneLayout scene={scene} isActive={isActive} />
  );
};
