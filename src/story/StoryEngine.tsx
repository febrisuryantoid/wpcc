import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import { motion, AnimatePresence } from 'motion/react';
import { storyScenes } from './data';
import { CoverPage, ElectronLines, CoverBackgroundImage } from './slide/CoverPage';
import { SceneLayout } from './ui/SceneLayout';
import { Slide01 } from './slide/Slide01';
import { Slide02 } from './slide/Slide02';
import { Slide03 } from './slide/Slide03';
import { Slide04 } from './slide/Slide04';
import { Slide05 } from './slide/Slide05';
import { Slide06 } from './slide/Slide06';
import { Slide07 } from './slide/Slide07';
import { Slide08 } from './slide/Slide08';
import { Slide09 } from './slide/Slide09';
import { Slide10 } from './slide/Slide10';
import { Slide11 } from './slide/Slide11';
import { Slide12 } from './slide/Slide12';
import { Slide13 } from './slide/Slide13';
import { Slide14 } from './slide/Slide14';
import { Slide15 } from './slide/Slide15';
import { Slide16 } from './slide/Slide16';
import { Slide17 } from './slide/Slide17';
import { Slide18 } from './slide/Slide18';
import { Slide19 } from './slide/Slide19';
import { Slide20 } from './slide/Slide20';
import { Slide21 } from './slide/Slide21';
import { Slide22 } from './slide/Slide22';
import { Slide23 } from './slide/Slide23';
import { Slide24 } from './slide/Slide24';
import { Slide25 } from './slide/Slide25';
import { Slide26 } from './slide/Slide26';
import { Slide27 } from './slide/Slide27';
import { Slide28 } from './slide/Slide28';
import { Slide29 } from './slide/Slide29';
import { Slide30 } from './slide/Slide30';
import { Slide31 } from './slide/Slide31';
import { Slide32 } from './slide/Slide32';
import { Slide33 } from './slide/Slide33';
import { Slide34 } from './slide/Slide34';
import { Slide35 } from './slide/Slide35';
import { Slide36 } from './slide/Slide36';
import { Slide37 } from './slide/Slide37';
import { Slide38 } from './slide/Slide38';
import { Slide39 } from './slide/Slide39';
import { Slide40 } from './slide/Slide40';
import { WordPressLogoSVG } from './ui/WordPressLogoSVG';
import { AnimatedBackgrounds } from './ui/AnimatedBackgrounds';
import { getSlideAnimationDetails } from './ui/SlideAnimationContext';
import { useBackgroundMusic } from './ui/BackgroundMusicContext';

import { GlobalCanvas } from './scene/GlobalCanvas';
import { ChevronRight, ChevronLeft, Maximize, Search, Home, Presentation, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { SearchModal } from './ui/SearchModal';
import { Header } from './ui/Header';
import { Footer } from './ui/Footer';
import { Navigation } from './ui/Navigation';
import { audioManager } from './utils/audioManager';
import { SceneConfig, isChapterSlide } from './types';
import { getSlideClassification } from './classification/slideCategory';

export const StoryEngine: React.FC = () => {
  // -1 represents Cover Page, 0..N represents Slide 1 to N
  const [currentSceneIndex, setCurrentSceneIndex] = useState(-1);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [revealStep, setRevealStep] = useState(1);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isHoveringNavbar, setIsHoveringNavbar] = useState(false);
  const [isSpinningCover, setIsSpinningCover] = useState(false);
  const { isMuted: isMusicMuted, toggleMute: toggleMusic, playMusic: startAudioPlayback } = useBackgroundMusic();

  const isCover = currentSceneIndex === -1;
  const currentScene = isCover ? { ...storyScenes[0], id: 'scene_cover' } : storyScenes[currentSceneIndex];

  const wakeLockRef = useRef<any>(null);

  useEffect(() => {
    const requestWakeLock = async () => {
      try {
        if ('wakeLock' in navigator) {
          wakeLockRef.current = await (navigator as any).wakeLock.request('screen');
        }
      } catch (_err) {
        // Silently ignore permissions policy disallowance in embedded preview
      }
    };
    
    requestWakeLock();
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        requestWakeLock();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (wakeLockRef.current) {
        wakeLockRef.current.release().catch(() => {});
      }
    };
  }, []);

  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const sfx = [
      { key: 'open', url: 'https://assets.mixkit.co/active_storage/sfx/2950/2950-preview.mp3' },
      { key: 'cover_wpcc_zoom', url: 'https://assets.mixkit.co/active_storage/sfx/167/167-preview.mp3' },
      { key: 'cover_chime', url: 'https://assets.mixkit.co/active_storage/sfx/2740/2740-preview.mp3' },
      { key: 'cover_ambient', url: 'https://assets.mixkit.co/active_storage/sfx/2004/2004-preview.mp3' },
      { key: 'last_slide_sfx', url: 'https://assets.mixkit.co/active_storage/sfx/381/381-preview.mp3' },
      { key: 'wpcc_click', url: 'https://assets.mixkit.co/active_storage/sfx/900/900-preview.mp3' },
      { key: 'wpcc_transition', url: 'https://assets.mixkit.co/active_storage/sfx/2639/2639-preview.mp3' },
      { key: 'sphere_1', url: 'https://assets.mixkit.co/active_storage/sfx/2639/2639-preview.mp3' },
      { key: 'sphere_2', url: 'https://assets.mixkit.co/active_storage/sfx/3176/3176-preview.mp3' },
      { key: 'sphere_3', url: 'https://assets.mixkit.co/active_storage/sfx/3161/3161-preview.mp3' },
      { key: 'sphere_4', url: 'https://assets.mixkit.co/active_storage/sfx/3161/3161-preview.mp3' },
      { key: 'sphere_last', url: 'https://assets.mixkit.co/active_storage/sfx/811/811-preview.mp3' },
      { key: 'fullscreen_on', url: 'https://assets.mixkit.co/active_storage/sfx/913/913-preview.mp3' },
      { key: 'fullscreen_off', url: 'https://assets.mixkit.co/active_storage/sfx/913/913-preview.mp3' },
      { key: 'profile_more', url: 'https://assets.mixkit.co/active_storage/sfx/900/900-preview.mp3' },
      { key: 'sphere_stop_first', url: 'https://assets.mixkit.co/active_storage/sfx/546/546-preview.mp3' },
      { key: 'industries_12', url: 'https://assets.mixkit.co/active_storage/sfx/2629/2629-preview.mp3' },
      { key: 'bg_ambient_1', url: 'https://assets.mixkit.co/active_storage/sfx/2004/2004-preview.mp3' },
      { key: 'bg_ambient_2', url: 'https://assets.mixkit.co/active_storage/sfx/2004/2004-preview.mp3' },
      { key: 'box_point_1', url: 'https://assets.mixkit.co/active_storage/sfx/2004/2004-preview.mp3' },
      { key: 'box_point_2', url: 'https://assets.mixkit.co/active_storage/sfx/2632/2632-preview.mp3' },
      { key: 'box_point_3', url: 'https://assets.mixkit.co/active_storage/sfx/912/912-preview.mp3' },
      { key: 'box_point_4', url: 'https://assets.mixkit.co/active_storage/sfx/2632/2632-preview.mp3' },
      { key: 'box_point_5', url: 'https://assets.mixkit.co/active_storage/sfx/2632/2632-preview.mp3' },
      { key: 'box_point_6', url: 'https://assets.mixkit.co/active_storage/sfx/1461/1461-preview.mp3' },
      { key: 'box_point_7', url: 'https://assets.mixkit.co/active_storage/sfx/2632/2632-preview.mp3' },
      { key: 'point_reveal', url: 'https://assets.mixkit.co/active_storage/sfx/2632/2632-preview.mp3' },
      { key: 'typewriter', url: 'https://assets.mixkit.co/active_storage/sfx/2529/2529-preview.mp3' },
    ];
    sfx.forEach(s => audioManager.loadSound(s.key, s.url));

    const handleFullscreenChange = () => {
      if (document.fullscreenElement) {
        audioManager.playSound('fullscreen_on', 0.7);
      } else {
        audioManager.playSound('fullscreen_off', 0.7);
      }
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    const handleUserGesture = () => {
      startAudioPlayback();
    };

    // Attempt playback immediately
    startAudioPlayback();

    window.addEventListener('click', handleUserGesture);
    window.addEventListener('touchstart', handleUserGesture);
    window.addEventListener('keydown', handleUserGesture);
    window.addEventListener('pointerdown', handleUserGesture);

    return () => {
      window.removeEventListener('click', handleUserGesture);
      window.removeEventListener('touchstart', handleUserGesture);
      window.removeEventListener('keydown', handleUserGesture);
      window.removeEventListener('pointerdown', handleUserGesture);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [startAudioPlayback]);

  useEffect(() => {
    startAudioPlayback();
  }, [isMusicMuted, currentSceneIndex, startAudioPlayback]);

  // Identify slide content density to compute dynamic Auto Play duration
  const getAutoPlayDuration = (scene: SceneConfig): number => {
    if (isCover) return 2000;
    if (!scene) return 2000;

    const details = getSlideAnimationDetails(scene);
    
    // User requested: "Jika di dalam slide animasinya belum selesai semua jangan auto slide langsung harus nunggu semuanya selesai terlebih dahulu setelah itu ada jeda 1,5 detik baru next slide."
    // Wait for all slide animations to finish (details.totalDuration) and then add exactly 1.5 seconds (1500ms) of delay.
    const totalDurationMs = (details.totalDuration + 1.5) * 1000;

    return Math.max(2500, Math.floor(totalDurationMs));
  };

  const getMaxStepsForScene = (scene: SceneConfig) => {
    if (isChapterSlide(scene.id)) return 2;
    if (scene.points && scene.points.length > 0) return 3;
    if (scene.supportingSentence) return 2;
    return 1;
  };

  const nextStep = () => {
    audioManager.init();
    if (isCover) {
      setCurrentSceneIndex(0);
      setRevealStep(3);
      startAudioPlayback();
      return;
    }

    audioManager.playSound('wpcc_click', 0.6);

    if (currentSceneIndex < storyScenes.length - 1) {
      setCurrentSceneIndex(prev => prev + 1);
      setRevealStep(3);
    }
    startAudioPlayback();
  };

  const prevStep = () => {
    audioManager.init();
    if (isCover) return;

    audioManager.playSound('wpcc_click', 0.6);

    if (currentSceneIndex > 0) {
      setCurrentSceneIndex(prev => prev - 1);
      setRevealStep(3);
    } else if (currentSceneIndex === 0) {
      setCurrentSceneIndex(-1);
      setRevealStep(3);
    }
    startAudioPlayback();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger scene arrow keys if search modal is open
      if (isSearchOpen) return;

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        nextStep();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevStep();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, isPresentationMode, revealStep, currentSceneIndex]);

  // Auto Play Timer Logic (Dynamic 5s - 10s depending on content)
  useEffect(() => {
    if (!isPlaying || isSearchOpen || isCover) return;

    const duration = getAutoPlayDuration(currentScene);

    const timer = setTimeout(() => {
      if (
        currentSceneIndex === storyScenes.length - 1 &&
        (!isPresentationMode || revealStep >= getMaxStepsForScene(currentScene))
      ) {
        // Loop back to first slide when reaching the end
        setCurrentSceneIndex(0);
        setRevealStep(1);
      } else {
        nextStep();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [isPlaying, isSearchOpen, currentSceneIndex, revealStep, isPresentationMode, isCover, currentScene]);

  // Handle sphere transition sound effects on scene change
  useEffect(() => {
    if (currentSceneIndex === -1) {
      audioManager.playSound('open', 0.65);
      return;
    }

    // Introduce a tiny 100ms delay before sphere movement sound to stagger it from button click sound
    const moves = ['sphere_1', 'sphere_2', 'sphere_3', 'sphere_4'];
    const sfxKey = currentSceneIndex === storyScenes.length - 1 
      ? 'sphere_last' 
      : moves[currentSceneIndex % moves.length];

    const moveTimer = setTimeout(() => {
      audioManager.playSound(sfxKey, 0.7);
    }, 100);

    let stopTimer: NodeJS.Timeout | null = null;
    if (currentSceneIndex === 0) {
      // Play 546-preview.mp3 after sphere finishes moving and settling on slide 1
      stopTimer = setTimeout(() => {
        audioManager.playSound('sphere_stop_first', 0.85);
      }, 1100); // 1100ms is perfect spacing
    }

    return () => {
      clearTimeout(moveTimer);
      if (stopTimer) clearTimeout(stopTimer);
    };
  }, [currentSceneIndex, storyScenes.length]);

  // Navbar Auto-Hide Logic:
  // ONLY appears when the user's cursor hovers the navbar area at the bottom (or search modal is active)
  useEffect(() => {
    if (isCover || isSearchOpen || isHoveringNavbar) {
      setIsNavbarVisible(true);
    } else {
      setIsNavbarVisible(false);
    }
  }, [isCover, isSearchOpen, isHoveringNavbar]);

  // Handle Left Click for Next Page
  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isSearchOpen || isCover) return;
    const target = e.target as HTMLElement;
    // Don't trigger step advance if clicking on buttons, links, or interactive elements
    if (target.closest('button, a, input, [role="button"], .pointer-events-auto')) return;

    nextStep();
  };

  // Handle Right Click for Previous Page
  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isSearchOpen || isCover) return;
    const target = e.target as HTMLElement;
    if (target.closest('button, a, input, [role="button"]')) return;

    e.preventDefault();
    prevStep();
  };

  return (
    <div 
      className="w-full h-screen relative overflow-hidden transition-colors duration-1000 font-sans cursor-default select-none" 
      style={{ backgroundColor: '#000205' }}
      onClick={handleContainerClick}
      onContextMenu={handleContextMenu}
    >
      {!isCover && <AnimatedBackgrounds sceneIndex={currentSceneIndex} currentScene={currentScene} />}
      
      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectSlide={(index) => {
          setCurrentSceneIndex(index);
          setRevealStep(1);
        }}
        scenes={storyScenes}
        currentIndex={currentSceneIndex}
      />
      
      {/* Top Header with WPCC & WP Logos (Only shown on Slides, NOT on Cover or Scene 64) */}
      {(!isCover && currentScene.id !== 'scene_64') && (
        <Header 
          onBackToCover={() => {
            setCurrentSceneIndex(-1);
            setRevealStep(1);
          }} 
        />
      )}

      {/* Accessibility Live Region */}
      <div 
        className="sr-only" 
        aria-live="polite" 
        aria-atomic="true"
      >
        <h2>{isCover ? 'Cover Presentasi WordPress Campus Connect' : currentScene.headline}</h2>
        <p>{isCover ? 'Halaman Cover Utama' : currentScene.supportingSentence}</p>
      </div>

      {/* Cover Background Image with Parallax */}
      <AnimatePresence>
        {isCover && <CoverBackgroundImage />}
      </AnimatePresence>

      
      {/* Cover Page Background Effects (Below Canvas) */}
      <AnimatePresence>
        {isCover && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[4] pointer-events-none"
          >
            {/* Dark premium gradient in center */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,3,15,0.8)_0%,rgba(0,3,15,0.4)_30%,transparent_70%)] mix-blend-multiply" />
            <ElectronLines />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Canvas Background */}

      <div className="absolute inset-0 z-[5] pointer-events-none" style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}>
        <Canvas 
          aria-hidden="true" 
          style={{ pointerEvents: 'none', transform: 'translateZ(0)' }} 
          dpr={[1, Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 2 : 2, 2)]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance', preserveDrawingBuffer: true }}
        >
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={2} color="#ffffff" />
          <spotLight position={[-10, -10, -10]} angle={0.2} penumbra={1} intensity={1} color="#3858E9" />
          
          <Sparkles count={40} scale={12} size={1.5} speed={0.3} opacity={0.15} />
          
          <GlobalCanvas scene={currentScene} isSpinningCover={isSpinningCover} />
        </Canvas>
      </div>

      {/* HTML UI Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center pointer-events-none p-2 sm:p-4 md:p-6 lg:p-10 max-w-[1800px] mx-auto w-full h-full overflow-hidden">
        <AnimatePresence mode="wait">
          {isCover ? (
            <CoverPage 
              key="cover_page" 
              isMusicMuted={isMusicMuted}
              onToggleMusic={toggleMusic}
              onSpinStart={() => setIsSpinningCover(true)}
              onStart={() => {
                setIsSpinningCover(false);
                setCurrentSceneIndex(0);
                setRevealStep(3);
              }} 
            />
          ) :           currentScene.id === 'scene_01' ? (
            <Slide01 
              key="scene_01" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_02' ? (
            <Slide02 
              key="scene_02" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_03' ? (
            <Slide03 
              key="scene_03" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_04' ? (
            <Slide04 
              key="scene_04" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_05' ? (
            <Slide05 
              key="scene_05" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_06' ? (
            <Slide06 
              key="scene_06" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_07' ? (
            <Slide07 
              key="scene_07" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_08' ? (
            <Slide08 
              key="scene_08" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_09' ? (
            <Slide09 
              key="scene_09" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_10' ? (
            <Slide10 
              key="scene_10" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_11' ? (
            <Slide11 
              key="scene_11" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_12' ? (
            <Slide12 
              key="scene_12" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_13' ? (
            <Slide13 
              key="scene_13" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_14' ? (
            <Slide14 
              key="scene_14" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_15' ? (
            <Slide15 
              key="scene_15" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_16' ? (
            <Slide16 
              key="scene_16" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_17' ? (
            <Slide17 
              key="scene_17" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_18' ? (
            <Slide18 
              key="scene_18" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_19' ? (
            <Slide19 
              key="scene_19" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_20' ? (
            <Slide20 
              key="scene_20" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_21' ? (
            <Slide21 
              key="scene_21" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_22' ? (
            <Slide22 
              key="scene_22" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_23' ? (
            <Slide23 
              key="scene_23" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_24' ? (
            <Slide24 
              key="scene_24" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_25' ? (
            <Slide25 
              key="scene_25" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_26' ? (
            <Slide26 
              key="scene_26" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_27' ? (
            <Slide27 
              key="scene_27" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_28' ? (
            <Slide28 
              key="scene_28" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_29' ? (
            <Slide29 
              key="scene_29" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_30' ? (
            <Slide30 
              key="scene_30" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_31' ? (
            <Slide31 
              key="scene_31" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_32' ? (
            <Slide32 
              key="scene_32" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_33' ? (
            <Slide33 
              key="scene_33" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_34' ? (
            <Slide34 
              key="scene_34" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_35' ? (
            <Slide35 
              key="scene_35" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_36' ? (
            <Slide36 
              key="scene_36" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_37' ? (
            <Slide37 
              key="scene_37" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_38' ? (
            <Slide38 
              key="scene_38" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_39' ? (
            <Slide39 
              key="scene_39" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )
          : currentScene.id === 'scene_40' ? (
            <Slide40 
              key="scene_40" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          ) : (
            <SceneLayout 
              key={currentScene.id} 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          )}
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[6] mix-blend-screen">
        <div className="w-[600px] h-[600px] bg-[#3B58E6] rounded-full opacity-[0.15] blur-[120px]" />
      </div>

      {/* Footer */}
      {!isCover && (
        <Footer 
          currentSceneIndex={currentSceneIndex} 
          totalScenes={storyScenes.length} 
        />
      )}

      {/* UI Controls Bar (Navbar - Only shown on Slides, NOT on Cover) */}
      {!isCover && (
        <Navigation 
          isNavbarVisible={isNavbarVisible}
          isHoveringNavbar={isHoveringNavbar}
          setIsHoveringNavbar={setIsHoveringNavbar}
          onHome={() => {
            setCurrentSceneIndex(-1);
            setRevealStep(1);
          }}
          onPrev={prevStep}
          onNext={nextStep}
          prevDisabled={currentSceneIndex <= 0 && revealStep <= 1}
          nextDisabled={currentSceneIndex === storyScenes.length - 1 && revealStep >= getMaxStepsForScene(currentScene)}
          isPlaying={isPlaying}
          onTogglePlay={() => setIsPlaying(prev => !prev)}
          isPresentationMode={isPresentationMode}
          onTogglePresentation={() => {
            setIsPresentationMode(prev => !prev);
            setRevealStep(3);
          }}
          isMusicMuted={isMusicMuted}
          onToggleMusic={toggleMusic}
          onOpenSearch={() => setIsSearchOpen(true)}
          onToggleFullscreen={() => {
            if (!document.fullscreenElement) {
              document.documentElement.requestFullscreen().catch(() => {});
            } else if (document.exitFullscreen) {
              document.exitFullscreen().catch(() => {});
            }
          }}
        />
      )}
    </div>
  );
};
