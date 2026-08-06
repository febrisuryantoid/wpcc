import * as THREE from 'three';

export interface CoreStateParams {
  color: string;
  speed: number;
  mouseParallax: boolean;
  cameraIndex: number;
  showWireframe?: boolean;
  showWpIcon?: boolean;
}

export function getCoreState(sceneId: string): CoreStateParams {
  const num = parseInt(sceneId.replace('scene_', ''), 10);
  if (sceneId === 'scene_cover') {
    return { color: '#3B58E6', speed: 0.15, mouseParallax: true, cameraIndex: 10, showWireframe: false, showWpIcon: false };
  }
  
  // Base state with dynamic camera assignment across all slides
  let state: CoreStateParams = {
    color: '#3B58E6',
    speed: 0.3,
    mouseParallax: true,
    cameraIndex: 0,
    showWireframe: false,
    showWpIcon: false
  };

  // Dynamic camera sequence across 18 positions guaranteeing no adjacent slides share camera angle
  const camSequence = [
    1, 11, 3, 14, 5, 12, 2, 16, 7, 4, 
    13, 15, 8, 17, 6, 1, 12, 14, 3, 11
  ];
  const isValidNum = !isNaN(num);
  state.cameraIndex = isValidNum ? camSequence[num % camSequence.length] : 0;

  // Specific thematic tweaks per slide topic
  if (num === 1) {
    state.color = '#3B58E6';
    state.speed = 0.2;
    state.cameraIndex = 3; 
    state.mouseParallax = true;
    state.showWpIcon = true;
  }
  else if (num === 2) {
    state.color = '#10B981';
    state.cameraIndex = 11;
    state.speed = 0.25;
  }
  else if (num === 3) {
    state.color = '#EAB308';
    state.speed = 0.2;
    state.cameraIndex = 5;
    state.mouseParallax = true;
  }
  else if (num === 4) {
    state.color = '#EF4444'; 
    state.speed = 0.15;
    state.cameraIndex = 2;
  }
  else if (num === 5) {
    state.color = '#8B5CF6'; 
    state.speed = 0.15;
    state.cameraIndex = 14;
  }
  else if (num === 15) {
    state.color = '#94A3B8';
    state.speed = 0.1;
    state.showWireframe = true;
  }
  else if (num === 16) {
    state.color = '#F472B6';
    state.speed = 0.2;
    state.cameraIndex = 13;
  }
  else if (num === 17) {
    state.color = '#FACC15';
    state.speed = 0.45;
    state.cameraIndex = 16;
  }
  else if (num >= 23 && num <= 36) {
    state.speed = 0.35;
    state.mouseParallax = true;
    state.showWpIcon = (num % 2 === 0);
  }

  return state;
}
