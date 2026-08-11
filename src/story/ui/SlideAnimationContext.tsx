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
  
  // Specific slide item overrides to match actual custom visual cards/steps across all 42 slides
  switch (scene.id) {
    case 'scene_01': return 0; // Cover page
    case 'scene_02': return 8; // Speaker Profile (avatar, bio, role, 4 stats)
    case 'scene_03': return 0; // Chapter 1 Title
    case 'scene_04': return 4; // Objectives
    case 'scene_05': return 4; // Platform Used
    case 'scene_06': return 4; // More Than a CMS
    case 'scene_07': return 6; // How WP Evolved (6 workflow diagram nodes)
    case 'scene_08': return 3; // Choosing Tech (3 analogy cards)
    case 'scene_09': return 4; // Before WordPress
    case 'scene_10': return 5; // History Timeline
    case 'scene_11': return 4; // CMS Market Share Data
    case 'scene_12': return 8; // Real-World Case Studies (20 logos in 5 grid columns)
    case 'scene_13': return 0; // Chapter 2 Title
    case 'scene_14': return 6; // Cost & Effort Matrix (3 cards x score metrics)
    case 'scene_15': return 3; // Who Owns WordPress
    case 'scene_16': return 4; // Career in WordPress
    case 'scene_17': return 8; // Career Path (8 role cards)
    case 'scene_18': return 0; // Chapter 3 Title
    case 'scene_19': return 3; // What Is WordCamp
    case 'scene_20': return 4; // A Global Community
    case 'scene_21': return 3; // Introducing WP Campus Connect
    case 'scene_22': return 4; // What Will Students Get
    case 'scene_23': return 3; // How Can Campus Participate
    case 'scene_24': return 3; // Your Journey Starts Here
    case 'scene_25': return 0; // Chapter 4 Title
    case 'scene_26': return 4; // Arsitektur WordPress
    case 'scene_27': return 4; // Dashboard WordPress (4 modules)
    case 'scene_28': return 6; // Posts vs Pages (2 cards x 3 feature rows)
    case 'scene_29': return 4; // Themes & Plugins
    case 'scene_30': return 3; // Gutenberg Block Editor
    case 'scene_31': return 4; // Blocks & Patterns
    case 'scene_32': return 4; // Site Editor (FSE)
    case 'scene_33': return 0; // Chapter 5 Title
    case 'scene_34': return 4; // Workflow WordPress (4 step cards)
    case 'scene_35': return 4; // WP Campus Connect Program
    case 'scene_36': return 0; // Chapter 6 Title
    case 'scene_37': return 4; // Persiapan Praktik
    case 'scene_38': return 3; // Build, Connect & Grow
    case 'scene_39': return 4; // Resources & Pembelajaran
    case 'scene_40': return 0; // Sesi Tanya Jawab (Q&A)
    case 'scene_41': return 3; // Stay Connected
    case 'scene_42': return 0; // Closing slide
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
      postAnimationDelay: 2.0,
    };
  }

  const isChapter = isChapterSlide(scene.id);
  
  // For chapter slides and standard slides, we treat headline as heading and supportingSentence as description
  const hasDescription = !!scene.supportingSentence;
  const pointsCount = getPointsCountForScene(scene);
  const hasPoints = pointsCount > 0;

  // Determine the text lengths
  const headingText = scene.headline || '';
  const descriptionText = hasDescription ? (scene.supportingSentence || '') : '';

  // Heading typing animation duration: 1.0 to 2.0 seconds
  const headingDuration = headingText 
    ? Math.min(2.0, Math.max(1.0, headingText.length * 0.035)) 
    : 0;

  // Description typing animation duration: 2.0 to 2.5 seconds
  const descriptionDuration = hasDescription 
    ? Math.min(2.5, Math.max(2.0, descriptionText.length * 0.025)) 
    : 0;

  // Points appear staggered by 0.45s each, plus 1.2s buffer so the last point's animation & sound effect complete
  const pointsDuration = hasPoints ? (pointsCount * 0.45 + 1.2) : 0;

  // Initial delay before typing starts: 0.1s
  const totalDuration = 0.1 + headingDuration + descriptionDuration + pointsDuration;

  // Dynamic post-animation delay based on user rules:
  // "The previous 1.5-second delay has been changed to a minimum of 2 seconds, depending on the length or amount of content on the slide. The maximum is 3 seconds."
  const totalTextLength = headingText.length + descriptionText.length;
  let postAnimationDelay = 2.0;

  if (pointsCount >= 6 || totalTextLength > 180) {
    postAnimationDelay = 3.0; // Maximum 3 seconds for heavy content
  } else if (pointsCount >= 3 || totalTextLength > 70) {
    postAnimationDelay = 2.5; // Medium 2.5 seconds
  } else {
    postAnimationDelay = 2.0; // Minimum 2.0 seconds for light/chapter slides
  }

  return {
    headingDuration,
    descriptionDuration,
    pointsDuration,
    totalDuration,
    hasDescription,
    hasPoints,
    pointsCount,
    postAnimationDelay,
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
