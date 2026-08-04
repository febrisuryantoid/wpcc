import React, { createContext, useContext, useState, useEffect } from 'react';
import { SceneConfig } from '../types';

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
  if (scene.id === 'scene_03') return 9; // 9 chapters
  if (scene.id === 'scene_31') return 6; // 6 CMS cards
  if (scene.id === 'scene_61') return 6; // 6 resource cards
  if (scene.id === 'scene_63') return 6; // 6 link cards
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

  const isChapter = scene.headline?.startsWith('CHAPTER');
  
  // For chapter slides: headline is CHAPTER XX, supportingSentence is the big display title. No secondary description.
  // For standard slides: headline is heading, supportingSentence is description.
  const hasDescription = !isChapter && !!scene.supportingSentence;
  const pointsCount = getPointsCountForScene(scene);
  const hasPoints = pointsCount > 0;

  // Let's determine the texts
  const headingText = isChapter ? (scene.supportingSentence || '') : (scene.headline || '');
  const descriptionText = hasDescription ? (scene.supportingSentence || '') : '';

  let headingDuration = 0;
  let descriptionDuration = 0;

  if (headingText && descriptionText) {
    // Both heading and description are typed (gabungan)
    const totalLen = headingText.length + descriptionText.length;
    // Gabungan minimal 2 detik (untuk teks sedikit) dan maksimal 4 detik (untuk teks cukup panjang)
    const combinedDuration = Math.min(4.0, Math.max(2.0, totalLen * 0.03));
    
    // Proportional splitting:
    const rawHeadingDuration = combinedDuration * (headingText.length / totalLen);
    const rawDescriptionDuration = combinedDuration * (descriptionText.length / totalLen);

    // Clamp each to at least 1.0 seconds so neither is instant
    let hDur = rawHeadingDuration;
    let dDur = rawDescriptionDuration;
    if (hDur < 1.0) {
      hDur = 1.0;
      dDur = Math.max(1.0, combinedDuration - 1.0);
    } else if (dDur < 1.0) {
      dDur = 1.0;
      hDur = Math.max(1.0, combinedDuration - 1.0);
    }
    headingDuration = hDur;
    descriptionDuration = dDur;
  } else {
    // Only heading text is typed (or if only description, though unlikely)
    const targetText = headingText || descriptionText || '';
    const textLen = targetText.length;
    // Jika hanya ada heading saja seperti pada chapter maka durasi maksimal 3 detik
    const singleDuration = Math.min(3.0, Math.max(1.5, textLen * 0.05));
    
    if (headingText) {
      headingDuration = singleDuration;
      descriptionDuration = 0;
    } else {
      descriptionDuration = singleDuration;
      headingDuration = 0;
    }
  }

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
