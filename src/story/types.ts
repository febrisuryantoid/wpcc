
export interface SceneConfig {
  id: string;
  chapter?: number;
  chapterId?: string;
  title?: string;
  headline: string;
  supportingSentence: string;
  points?: string[];
  sideImage?: string;
  topImage?: string;
  speakerScript?: string;
  visualExperience?: {
    mood: string;
    artDirection: string;
    focusPoint: string;
  };
  heroExperience: {
    type?: string;
    cameraMotion?: string;
    heroPosition: 'center' | 'left' | 'right' | 'fullscreen';
    heroSize?: string;
    heroAnimation?: string;
    heroMaterial?: string;
  };
  backgroundExperience?: {
    type?: string;
    colorWorld: string;
    motion?: string;
    particleDensity?: string;
  };
  uiState?: {
    glassPanel?: {
      visible: boolean;
      content?: string;
      position?: string;
    };
  };
}

export interface SceneProps {
  scene: SceneConfig;
  isActive?: boolean;
  isPresentationMode?: boolean;
  revealStep?: number;
}
