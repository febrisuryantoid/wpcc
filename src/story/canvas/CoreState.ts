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
    return { color: '#3B58E6', speed: 0.5, mouseParallax: true, cameraIndex: 10, showWireframe: false, showWpIcon: false };
  }
  
  // Default / Base state
  let state: CoreStateParams = {
    color: '#3B58E6',
    speed: 1,
    mouseParallax: true,
    cameraIndex: 0,
    showWireframe: false,
    showWpIcon: false
  };

  // Assign camera positions dynamically across all 63 slides
  // Cycle through cinematic positions 0 to 9 based on slide number
  const camIndices = [0, 9, 1, 5, 2, 7, 3, 8, 4, 6];
  state.cameraIndex = camIndices[num % camIndices.length];

  // Specific overrides per slide topic
  if (num === 15) {
    // HTML: Pure structure (Muted Slate Gray to prevent eye strain glare)
    state.color = '#94A3B8';
    state.speed = 0;
    state.mouseParallax = false;
    state.showWireframe = true;
  }
  else if (num === 16) {
    // CSS: Styling & color
    state.color = '#F472B6'; // Pink
    state.speed = 0;
    state.mouseParallax = false;
    state.showWireframe = false;
  }
  else if (num === 17) {
    // JS: Interactivity & motion
    state.color = '#FACC15'; // Yellow
    state.speed = 2;
    state.mouseParallax = true;
  }
  else if (num === 18) {
    // HTML + CSS + JS combined
    state.color = '#3B58E6'; // Core Blue
    state.speed = 1.5;
    state.mouseParallax = true;
  }
  else if (num >= 29 && num <= 50) {
    // WordPress & CMS section
    state.color = '#3B58E6';
    state.speed = 1.2;
    state.mouseParallax = true;
    state.showWpIcon = true;
    if (num === 50) {
      state.cameraIndex = 0; // Center Hub dead center for 3D sphere
    }
  }
  else if (num === 56) {
    // AI + WordPress
    state.color = '#A855F7'; // AI Purple
    state.speed = 1.8;
  }
  else if (num >= 60) {
    // Outro / Conclusion / Q&A
    state.color = '#3B58E6';
    state.speed = 1;
  }

  return state;
}
