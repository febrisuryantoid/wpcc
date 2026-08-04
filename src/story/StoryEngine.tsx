import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import { motion, AnimatePresence } from 'motion/react';
import { storyScenes } from './data';
import { CoverPage, ElectronLines, CoverBackgroundImage } from './components/CoverPage';
import { SceneLayout } from './components/SceneLayout';
import { Scene02 } from './scenes/Scene02';
import { Scene03 } from './scenes/Scene03';
import { Scene31 } from './scenes/Scene31';
import { Scene50 } from './scenes/Scene50';
import { Scene61 } from './scenes/Scene61';
import { Scene63 } from './scenes/Scene63';
import { Scene64 } from './scenes/Scene64';
import { WordPressLogoSVG } from './components/WordPressLogoSVG';
import { AnimatedBackgrounds } from '../components/AnimatedBackgrounds';

import { GlobalCanvas } from './canvas/GlobalCanvas';
import { ChevronRight, ChevronLeft, Maximize, Search, Home, Presentation, Play, Pause } from 'lucide-react';
import { SearchModal } from './components/SearchModal';
import { audioManager } from './utils/audioManager';
import { SceneConfig } from './types';

export const StoryEngine: React.FC = () => {
  // -1 represents Cover Page, 0..N represents Slide 1 to N
  const [currentSceneIndex, setCurrentSceneIndex] = useState(-1);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [revealStep, setRevealStep] = useState(1);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isHoveringNavbar, setIsHoveringNavbar] = useState(false);
  const [isMusicLoaded, setIsMusicLoaded] = useState(false);
  
    const wakeLockRef = useRef<any>(null);

  useEffect(() => {
    const requestWakeLock = async () => {
      try {
        if ('wakeLock' in navigator) {
          wakeLockRef.current = await (navigator as any).wakeLock.request('screen');
        }
      } catch (err) {
        console.warn('Wake Lock error:', err);
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
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    const sfx = [
      { key: 'open', url: 'https://assets.mixkit.co/active_storage/sfx/2950/2950-preview.mp3' },
      { key: 'cover_wpcc_zoom', url: 'https://assets.mixkit.co/active_storage/sfx/167/167-preview.mp3' },
      { key: 'cover_chime', url: 'https://assets.mixkit.co/active_storage/sfx/2740/2740-preview.mp3' },
      { key: 'cover_ambient', url: 'https://assets.mixkit.co/active_storage/sfx/2734/2734-preview.mp3' },
      { key: 'last_slide_sfx', url: 'https://assets.mixkit.co/active_storage/sfx/381/381-preview.mp3' },
      { key: 'wpcc_click', url: 'https://assets.mixkit.co/active_storage/sfx/900/900-preview.mp3' },
      { key: 'wpcc_transition', url: 'https://assets.mixkit.co/active_storage/sfx/2738/2738-preview.mp3' },
      { key: 'sphere_1', url: 'https://assets.mixkit.co/active_storage/sfx/2639/2639-preview.mp3' },
      { key: 'sphere_2', url: 'https://assets.mixkit.co/active_storage/sfx/3176/3176-preview.mp3' },
      { key: 'sphere_3', url: 'https://assets.mixkit.co/active_storage/sfx/3161/3161-preview.mp3' },
      { key: 'sphere_4', url: 'https://assets.mixkit.co/active_storage/sfx/3024/3024-preview.mp3' },
      { key: 'sphere_last', url: 'https://assets.mixkit.co/active_storage/sfx/811/811-preview.mp3' },
      { key: 'fullscreen_on', url: 'https://assets.mixkit.co/active_storage/sfx/890/890-preview.mp3' },
      { key: 'fullscreen_off', url: 'https://assets.mixkit.co/active_storage/sfx/913/913-preview.mp3' },
      { key: 'profile_more', url: 'https://assets.mixkit.co/active_storage/sfx/183/183-preview.mp3' },
      { key: 'sphere_stop_first', url: 'https://assets.mixkit.co/active_storage/sfx/546/546-preview.mp3' },
      { key: 'industries_12', url: 'https://assets.mixkit.co/active_storage/sfx/2629/2629-preview.mp3' },
      { key: 'bg_ambient_1', url: 'https://assets.mixkit.co/active_storage/sfx/2004/2004-preview.mp3' },
      { key: 'bg_ambient_2', url: 'https://assets.mixkit.co/active_storage/sfx/2008/2008-preview.mp3' },
      { key: 'box_point_1', url: 'https://assets.mixkit.co/active_storage/sfx/2008/2008-preview.mp3' },
      { key: 'box_point_2', url: 'https://assets.mixkit.co/active_storage/sfx/3169/3169-preview.mp3' },
      { key: 'box_point_3', url: 'https://assets.mixkit.co/active_storage/sfx/912/912-preview.mp3' },
      { key: 'box_point_4', url: 'https://assets.mixkit.co/active_storage/sfx/1471/1471-preview.mp3' },
      { key: 'box_point_5', url: 'https://assets.mixkit.co/active_storage/sfx/1469/1469-preview.mp3' },
      { key: 'box_point_6', url: 'https://assets.mixkit.co/active_storage/sfx/1461/1461-preview.mp3' },
      { key: 'box_point_7', url: 'https://assets.mixkit.co/active_storage/sfx/3205/3205-preview.mp3' },
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


    const handleFirstInteraction = () => {
      audioManager.init();
      audioManager.playSound('open', 0.65);
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (currentSceneIndex >= 0 || isMusicLoaded) {
        audioRef.current.volume = 0.25;
        audioRef.current.play().catch(e => console.log('Audio playback failed:', e));
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [currentSceneIndex, isMusicLoaded]);

  const isCover = currentSceneIndex === -1;
  const currentScene = isCover ? { ...storyScenes[0], id: 'scene_cover' } : storyScenes[currentSceneIndex];

  // Identify slide content density to compute dynamic Auto Play duration (5000ms - 10000ms)
  const getAutoPlayDuration = (scene: SceneConfig): number => {
    if (isCover) return 6000; // Cover page is 6 seconds
    if (!scene) return 6000;

    const isChapter = scene.headline?.startsWith('CHAPTER');
    const hasDescription = !isChapter && !!scene.supportingSentence;
    
    let pointsCount = 0;
    if (scene.id === 'scene_03') pointsCount = 9; // 9 chapters
    else if (scene.id === 'scene_31') pointsCount = 6; // 6 CMS cards
    else if (scene.id === 'scene_61') pointsCount = 6; // 6 resource cards
    else if (scene.id === 'scene_63') pointsCount = 6; // 6 link cards
    else if (scene.points) pointsCount = scene.points.length;

    const hasPoints = pointsCount > 0;

    // Heading typing duration (at least 3.5 seconds)
    const headingText = isChapter ? scene.headline : (scene.headline || '');
    const headingDuration = Math.max(3.5, headingText.length * 0.05);

    // Description typing duration (at least 4.0 seconds if present)
    const descriptionText = hasDescription ? (scene.supportingSentence || '') : '';
    const descriptionDuration = hasDescription ? Math.max(4.0, descriptionText.length * 0.04) : 0;

    // Points appear staggered by 0.4s each
    const pointsDuration = hasPoints ? pointsCount * 0.4 : 0;

    // Let's add 0.1s initial delay before typing starts
    const totalAnimationDuration = 0.1 + headingDuration + descriptionDuration + pointsDuration;

    // Add 2.0 seconds buffer after the animation sequence finishes for the user to read
    const totalDurationMs = (totalAnimationDuration + 2.0) * 1000;

    // Clamp duration safely (at least 6000ms)
    return Math.max(6000, Math.floor(totalDurationMs));
  };

  const getMaxStepsForScene = (scene: SceneConfig) => {
    if (scene.headline?.startsWith('CHAPTER')) return 1;
    if (scene.points && scene.points.length > 0) return 3;
    if (scene.supportingSentence) return 2;
    return 1;
  };

  const nextStep = () => {
    audioManager.init();
    if (isCover) {
      setCurrentSceneIndex(0);
      setRevealStep(3);
      return;
    }

    audioManager.playSound('wpcc_click', 0.6);

    if (currentSceneIndex < storyScenes.length - 1) {
      setCurrentSceneIndex(prev => prev + 1);
      setRevealStep(3);
    }
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
    if (!isPlaying || isSearchOpen) return;

    const duration = getAutoPlayDuration(currentScene);

    const timer = setTimeout(() => {
      if (isCover) {
        setCurrentSceneIndex(0);
        setRevealStep(1);
      } else if (
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

  // Navbar Auto-Hide Logic: Auto hide after 3 seconds if navbar area is untouched
  useEffect(() => {
    if (isCover) {
      setIsNavbarVisible(true);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      return;
    }

    if (isSearchOpen) {
      setIsNavbarVisible(true);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      return;
    }

    // If the user is currently hovering/touching the navbar area, keep it visible and clear timer
    if (isHoveringNavbar) {
      setIsNavbarVisible(true);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      return;
    }

    // If it is currently visible but not hovered, let's start a 3-second countdown to hide it.
    // If it's already hidden, we do NOT show it or set any timer.
    if (isNavbarVisible) {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      hideTimerRef.current = setTimeout(() => {
        setIsNavbarVisible(false);
      }, 3000);
    }

    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, [isCover, isSearchOpen, isHoveringNavbar, isNavbarVisible]);

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
      
      <audio 
        ref={audioRef} 
        src="https://herkcjez4t5tfiiv.public.blob.vercel-storage.com/Minor_Horizon.mp3" 
        preload="auto" 
        loop 
        onCanPlay={(e) => { 
          e.currentTarget.volume = 0.25; 
          if (currentSceneIndex >= 0 || isMusicLoaded) {
            e.currentTarget.play().catch(() => {});
          }
        }} 
      />
      
      {/* Top Header with WPCC & WP Logos (Only shown on Slides, NOT on Cover or Scene 64) */}
      {(!isCover && currentScene.id !== 'scene_64') && (
        <header className="absolute top-0 left-0 w-full p-4 md:p-6 flex justify-between items-center z-40 pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <button 
              onClick={() => {
                setCurrentSceneIndex(-1);
                setRevealStep(1);
              }} 
              className="flex items-center gap-2 group cursor-pointer border-none bg-transparent outline-none"
              title="Kembali ke Cover Presentasi"
            >
              <motion.img 
                layoutId="wpcc-header-logo"
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibSOq5GIr9KBMVJU2-7b8EyeOf8FSYqIEMSLvkuN6GPsWpk6lzvBrDnLjfbGa13Y2uKnuyGKfePOn6p138AgUQVaSPf5D25rCV9uxOa4oUReEwwWjFNmdore7sq9qmN4ozTBejMkQCZHYi8PtptE1VTshNsj7Lbg0tbkup4F14pRjuhbOw2IHz5vTQobM/s1600/wpcc-logo-horizontal-white.png" 
                alt="WPCC Logo" 
                className="h-9 md:h-11 w-auto object-contain transition-transform group-hover:scale-105" 
              />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 md:gap-3"
          >
            
            <motion.img
              layoutId="wp-header-logo"
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-ML1gSOI3LDIMf_vNLeahgkoFWZaat8RgxKijhpHnWHed7N6skUY8MdjVHoanvWNiEeCcIBQVAQv7FOkNlpUUXrMnczmlFw1Aio_1O-krIAZMFIT3XkhrTVFLC1XOsSWwmZ4fnYIYZMg1xGJxe41aa5yGSlxCbvihCmkg8PIUFbIZKnUMziMg6LcmET8/s1600/wordpress-logo.png"
              alt="WordPress Logo"
              className="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </motion.div>
        </header>
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

      <div className="absolute inset-0 z-[5] pointer-events-none">
        <Canvas aria-hidden="true" style={{ pointerEvents: 'none' }} dpr={[1, 2]}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={2} color="#ffffff" />
          <spotLight position={[-10, -10, -10]} angle={0.2} penumbra={1} intensity={1} color="#3858E9" />
          
          <Sparkles count={40} scale={12} size={1.5} speed={0.3} opacity={0.15} />
          
          <GlobalCanvas scene={currentScene} />
        </Canvas>
      </div>

      {/* HTML UI Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center pointer-events-none p-6 md:p-12">
        <AnimatePresence mode="wait">
          {isCover ? (
            <CoverPage 
              key="cover_page" 
              onStart={() => {
                setIsMusicLoaded(true);
                setCurrentSceneIndex(0);
                setRevealStep(3);
              }} 
            />
          ) : currentScene.id === 'scene_02' ? (
            <Scene02 
              key="scene_02" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          ) : currentScene.id === 'scene_03' ? (
            <Scene03 
              key="scene_03" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          ) : currentScene.id === 'scene_31' ? (
            <Scene31 
              key="scene_31" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          ) : currentScene.id === 'scene_50' ? (
            <Scene50 
              key="scene_50" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          ) : currentScene.id === 'scene_61' ? (
            <Scene61 
              key="scene_61" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          ) : currentScene.id === 'scene_63' ? (
            <Scene63 
              key="scene_63" 
              scene={currentScene} 
              isActive={true} 
              isPresentationMode={isPresentationMode}
              revealStep={revealStep}
            />
          ) : currentScene.id === 'scene_64' ? (
            <Scene64 
              key="scene_64" 
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
        <motion.div 
          className="absolute bottom-0 left-0 w-full px-6 py-4 flex items-center justify-between text-slate-400 text-xs font-mono z-[20] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
        >
          <div className="hidden sm:block">© 2026 WordPress Campus Connect</div>
          <div className="block sm:hidden">© 2026 WPCC</div>
          <div className="text-center absolute left-1/2 -translate-x-1/2">Febri Suryanto</div>
          <div className="font-bold text-white/80">
            {(currentSceneIndex + 1).toString().padStart(2, '0')}<span className="text-white/30 font-normal mx-1" aria-hidden="true">/</span>{storyScenes.length}
          </div>
        </motion.div>
      )}

      {/* UI Controls Bar (Navbar - Only shown on Slides, NOT on Cover) */}
      {!isCover && (
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[30] pb-6 md:pb-8 pt-12 px-8 flex items-end justify-center pointer-events-auto"
          style={{ width: 'min(480px, 100%)' }}
          onMouseEnter={() => {
            setIsHoveringNavbar(true);
          }}
          onMouseMove={() => {
            setIsHoveringNavbar(true);
          }}
          onMouseLeave={() => {
            setIsHoveringNavbar(false);
          }}
          onTouchStart={() => {
            setIsHoveringNavbar(true);
          }}
          onTouchEnd={() => {
            setIsHoveringNavbar(false);
          }}
        >
          <motion.div 
            className="glass-nav flex items-center gap-2 md:gap-3 px-4 py-2 rounded-full"
            initial={{ y: 0, opacity: 1 }}
            animate={{ 
              y: !isNavbarVisible ? 100 : 0, 
              opacity: !isNavbarVisible ? 0 : 1 
            }}
            style={{ pointerEvents: isNavbarVisible ? 'auto' : 'none' }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {/* Cover Home Button */}
            <button 
              onClick={() => {
                setCurrentSceneIndex(-1);
                setRevealStep(1);
              }} 
              className="text-slate-300 hover:text-blue-300 hover:bg-blue-500/20 p-1.5 rounded-full transition-colors cursor-pointer flex items-center justify-center group"
              title="Kembali ke Cover"
              aria-label="Kembali ke Cover"
            >
              <Home className="w-4 h-4 text-slate-300 group-hover:text-blue-400 transition-colors" />
            </button>

            <div className="w-px h-4 bg-white/15 mx-0.5" />

            {/* Prev Slide / Step */}
            <button 
              onClick={prevStep} 
              disabled={currentSceneIndex <= 0 && revealStep <= 1} 
              className="text-slate-300 hover:text-blue-300 disabled:opacity-30 transition-colors cursor-pointer flex items-center justify-center p-1.5 rounded-full hover:bg-blue-500/20 group"
              title="Slide / Tahap Sebelumnya"
              aria-label="Slide / Tahap Sebelumnya"
            >
              <ChevronLeft className="w-4 h-4 text-slate-300 group-hover:text-blue-400 transition-colors" />
            </button>
            
            {/* Next Slide / Step */}
            <button 
              onClick={nextStep} 
              disabled={currentSceneIndex === storyScenes.length - 1 && revealStep >= getMaxStepsForScene(currentScene)} 
              className="text-slate-300 hover:text-blue-300 disabled:opacity-30 transition-colors cursor-pointer flex items-center justify-center p-1.5 rounded-full hover:bg-blue-500/20 group"
              title="Slide / Tahap Selanjutnya"
              aria-label="Slide / Tahap Selanjutnya"
            >
              <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-400 transition-colors" />
            </button>
            
            <div className="w-px h-4 bg-white/15 mx-0.5" />

            {/* Auto Play Toggle Button */}
            <button
              onClick={() => setIsPlaying(prev => !prev)}
              className={`p-1.5 rounded-full transition-all cursor-pointer flex items-center justify-center border ${
                isPlaying 
                  ? 'bg-blue-600 border-blue-400 text-white shadow-[0_0_12px_rgba(59,130,246,0.5)]' 
                  : 'text-slate-300 border-transparent hover:text-blue-300 hover:bg-blue-500/20'
              }`}
              title={isPlaying ? "Jeda Putar Otomatis (Pause)" : "Mulai Putar Otomatis (Auto Play)"}
              aria-label={isPlaying ? "Jeda Putar Otomatis (Pause)" : "Mulai Putar Otomatis (Auto Play)"}
              aria-pressed={isPlaying}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-white animate-pulse" />
              ) : (
                <Play className="w-4 h-4 text-slate-300 group-hover:text-blue-400 transition-colors ml-0.5" />
              )}
            </button>

            <div className="w-px h-4 bg-white/15 mx-0.5" />

            {/* Mode Presentasi Toggle Button - Uniform styling */}
            <button
              onClick={() => {
                setIsPresentationMode(prev => !prev);
                setRevealStep(3);
              }}
              className={`p-1.5 rounded-full transition-all cursor-pointer flex items-center justify-center border ${
                isPresentationMode 
                  ? 'bg-blue-600 border-blue-400 text-white shadow-[0_0_12px_rgba(59,130,246,0.5)]' 
                  : 'text-slate-300 border-transparent hover:text-blue-300 hover:bg-blue-500/20'
              }`}
              title={isPresentationMode ? "Nonaktifkan Mode Presentasi" : "Aktifkan Mode Presentasi"}
              aria-label={isPresentationMode ? "Nonaktifkan Mode Presentasi" : "Aktifkan Mode Presentasi"}
              aria-pressed={isPresentationMode}
            >
              <Presentation className={`w-4 h-4 ${isPresentationMode ? 'text-white' : 'text-slate-300'}`} />
            </button>

            <div className="w-px h-4 bg-white/15 mx-0.5" />

            {/* Quick Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-slate-300 hover:text-blue-300 hover:bg-blue-500/20 p-1.5 rounded-full transition-colors cursor-pointer flex items-center justify-center group"
              title="Cari Slide (Ctrl+K)"
              aria-label="Cari Slide (Ctrl+K)"
            >
              <Search className="w-4 h-4 text-slate-300 group-hover:text-blue-400 transition-colors" />
            </button>
            
            {/* Fullscreen Toggle */}
            <button 
              onClick={() => {
                if (!document.fullscreenElement) {
                  document.documentElement.requestFullscreen().catch(() => {});
                } else if (document.exitFullscreen) {
                  document.exitFullscreen().catch(() => {});
                }
              }} 
              className="text-slate-300 hover:text-blue-300 hover:bg-blue-500/20 p-1.5 rounded-full transition-colors cursor-pointer flex items-center justify-center group" 
              title="Toggle Fullscreen"
              aria-label="Toggle Fullscreen"
            >
              <Maximize className="w-4 h-4 text-slate-300 group-hover:text-blue-400 transition-colors" />
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};
