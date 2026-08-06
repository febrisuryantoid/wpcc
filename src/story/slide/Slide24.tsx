import React from 'react';
import { SceneProps } from '../types';
import { SceneLayout } from '../ui/SceneLayout';

export const Slide24: React.FC<SceneProps> = (props) => {
  return (
    <SceneLayout 
      scene={props.scene} 
      isActive={props.isActive} 
      isPresentationMode={props.isPresentationMode} 
      revealStep={props.revealStep} 
    />
  );
};
