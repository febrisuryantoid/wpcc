import React, { createContext, useContext, useState, useEffect } from 'react';
import { SceneConfig, isChapterSlide } from '../types';

export type AnimationPhase = 'heading' | 'description' | 'points' | 'completed';

export interface SlideAnimationContextType {
  sceneId: string;
  currentPhase: AnimationPhase;
  isTextFinished: boolean;
  headingDuration: number;
  descriptionDuration: number;
  pointsDuration: number;
  totalDuration: number;
  hasDescription: boolean;
  hasPoints: boolean;
  pointsCount: number;
  headingShowMode: 'hidden' | 'typing' | 'full';
  descriptionShowMode: 'hidden' | 'typing' | 'full';
}

export const SlideAnimationContext = createContext<SlideAnimationContextType | null>(null);

export const useSlideAnimation = () => {
  const context = useContext(SlideAnimationContext);
  if (!context) {
    // Return a default mock/fallback value if used outside provider so components don't crash
    return {
      sceneId: '',
      currentPhase: 'completed' as AnimationPhase,
      isTextFinished: true,
      headingDuration: 0,
      descriptionDuration: 0,
      pointsDuration: 0,
      totalDuration: 0,
      hasDescription: false,
      hasPoints: false,
      pointsCount: 0,
      headingShowMode: 'full' as const,
      descriptionShowMode: 'full' as const,
    };
  }
  return context;
};

export const getPointsCountForScene = (scene: SceneConfig): number => {
  if (!scene) return 0;
  
  // Specific slide item overrides to match actual custom visual cards/steps
  switch (scene.id) {
    case 'scene_01': return 0; // Cover page
    case 'scene_02': return 8; // Speaker Profile (needs more time for multiple custom animations/staggers)
    case 'scene_03': return 0; // Chapter 1 Title
    case 'scene_04': return 5; // Objectives
    case 'scene_05': return 5; // Agenda Steps
    case 'scene_07': return 6; // Flow Nodes (6 workflow diagram boxes)
    case 'scene_08': return 5; // Analogy Cards
    case 'scene_10': return 5; // History Timeline
    case 'scene_11': return 6; // CMS Market Share Data
    case 'scene_12': return 5; // Comparison Rows
    case 'scene_13': return 0; // Chapter 2 Title
    case 'scene_15': return 5; // Career Roles
    case 'scene_18': return 0; // Chapter 3 Title
    case 'scene_23': return 0; // Chapter 4 Title
    case 'scene_32': return 4; // Workflow Steps
    case 'scene_33': return 0; // Chapter 5 Title
    case 'scene_36': return 0; // Chapter 6 Title
    case 'scene_40': return 0; // Closing slide
  }

  // Fallback to config points array if defined
  if (scene.points) return scene.points.length;
  return 0;
};

export const getSlideAnimationDetails = (scene: SceneConfig) => {
  if (!scene) {
    return {
      headingDuration: 0,
      descriptionDuration: 0,
      pointsDuration: 0,
      totalDuration: 0,
      hasDescription: false,
      hasPoints: false,
      pointsCount: 0,
    };
  }

  const isChapter = isChapterSlide(scene.id);
  
  // For chapter slides and standard slides, we treat headline as the heading and supportingSentence as description.
  const hasDescription = !!scene.supportingSentence;
  const pointsCount = getPointsCountForScene(scene);
  const hasPoints = pointsCount > 0;

  // Let's determine the texts
  const headingText = scene.headline || '';
  const descriptionText = hasDescription ? (scene.supportingSentence || '') : '';

  // Heading typing animation duration: 1 to 2 seconds
  const headingDuration = headingText 
    ? Math.min(2.0, Math.max(1.0, headingText.length * 0.035)) 
    : 0;

  // Description typing animation duration: 2 to 2.5 seconds
  const descriptionDuration = hasDescription 
    ? Math.min(2.5, Math.max(2.0, descriptionText.length * 0.025)) 
    : 0;

  // Points appear staggered by 0.4s each, plus 1.2s buffer so the last point's sound effect and animation complete
  const pointsDuration = hasPoints ? (pointsCount * 0.4 + 1.2) : 0;

  // Let's add 0.1s initial delay before typing starts
  const totalDuration = 0.1 + headingDuration + descriptionDuration + pointsDuration;

  return {
    headingDuration,
    descriptionDuration,
    pointsDuration,
    totalDuration,
    hasDescription,
    hasPoints,
    pointsCount,
  };
};

interface SlideAnimationProviderProps {
  scene: SceneConfig;
  isActive?: boolean;
  children: React.ReactNode;
}

export const SlideAnimationProvider: React.FC<SlideAnimationProviderProps> = ({
  scene,
  isActive = false,
  children,
}) => {
  const details = getSlideAnimationDetails(scene);
  const [currentPhase, setCurrentPhase] = useState<AnimationPhase>('heading');

  useEffect(() => {
    if (!isActive) {
      setCurrentPhase('heading');
      return;
    }

    setCurrentPhase('heading');

    // 1. Heading typing phase runs from t=0.1s to t=0.1s + headingDuration
    const headingEndMs = (0.1 + details.headingDuration) * 1000;
    
    // 2. Transition to description phase (if exists) or points phase
    const headingTimer = setTimeout(() => {
      if (details.hasDescription) {
        setCurrentPhase('description');
      } else {
        setCurrentPhase('points');
      }
    }, headingEndMs);

    // 3. Description typing phase runs from headingEnd to descriptionEnd
    let descriptionTimer: NodeJS.Timeout | null = null;
    if (details.hasDescription) {
      const descriptionEndMs = (0.1 + details.headingDuration + details.descriptionDuration) * 1000;
      descriptionTimer = setTimeout(() => {
        setCurrentPhase('points');
      }, descriptionEndMs);
    }

    // 4. Points transition to completed phase
    const totalMs = details.totalDuration * 1000;
    const completedTimer = setTimeout(() => {
      setCurrentPhase('completed');
    }, totalMs);

    return () => {
      clearTimeout(headingTimer);
      if (descriptionTimer) clearTimeout(descriptionTimer);
      clearTimeout(completedTimer);
    };
  }, [scene.id, isActive, details.headingDuration, details.descriptionDuration, details.totalDuration, details.hasDescription]);

  const isTextFinished = currentPhase === 'points' || currentPhase === 'completed';

  const headingShowMode = currentPhase === 'heading' ? 'typing' : 'full';
  
  let descriptionShowMode: 'hidden' | 'typing' | 'full' = 'hidden';
  if (details.hasDescription) {
    if (currentPhase === 'heading') descriptionShowMode = 'hidden';
    else if (currentPhase === 'description') descriptionShowMode = 'typing';
    else descriptionShowMode = 'full';
  }

  return (
    <SlideAnimationContext.Provider
      value={{
        sceneId: scene.id,
        currentPhase,
        isTextFinished,
        headingShowMode,
        descriptionShowMode,
        ...details,
      }}
    >
      {children}
    </SlideAnimationContext.Provider>
  );
};
