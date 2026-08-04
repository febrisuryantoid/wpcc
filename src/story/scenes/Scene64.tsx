import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { TypewriterText } from '../components/TypewriterText';
import { WordPressLogoSVG } from '../components/WordPressLogoSVG';
import { audioManager } from '../utils/audioManager';

export const Scene64: React.FC<SceneProps> = ({ scene, isActive, isPresentationMode = false, revealStep = 1 }) => {
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        audioManager.playSound('last_slide_sfx', 0.85);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  if (!isActive) return null;

  const showContent = true;

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8 md:p-12 z-10 pointer-events-none text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-4xl flex flex-col items-center justify-center pointer-events-auto my-auto relative">
        
        {/* Glowing orb background effect behind logos and title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] rounded-full bg-blue-600/15 border border-blue-500/20 blur-2xl pointer-events-none -z-10 animate-pulse" />

        {/* 1. LOGOS ROW (ABOVE THE HEADING) - NO BACKGROUND BOX / NO CONTAINER CARD */}
        {showContent && (
          <motion.div 
            className="flex items-center justify-center gap-6 sm:gap-10 md:gap-14 mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: -30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.9, 
              ease: [0.16, 1, 0.3, 1] 
            }}
          >
            {/* WPCC Horizontal Logo (Morphs from Header) - NO BACKGROUND */}
            <motion.div className="flex items-center justify-center">
              <motion.img 
                layoutId="wpcc-header-logo"
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibSOq5GIr9KBMVJU2-7b8EyeOf8FSYqIEMSLvkuN6GPsWpk6lzvBrDnLjfbGa13Y2uKnuyGKfePOn6p138AgUQVaSPf5D25rCV9uxOa4oUReEwwWjFNmdore7sq9qmN4ozTBejMkQCZHYi8PtptE1VTshNsj7Lbg0tbkup4F14pRjuhbOw2IHz5vTQobM/s1600/wpcc-logo-horizontal-white.png" 
                alt="WordPress Campus Connect" 
                className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain filter drop-shadow-[0_10px_25px_rgba(59,130,246,0.6)] hover:scale-105 transition-transform duration-300"
              />
            </motion.div>

            {/* Glowing Pulse Sphere Connector between logos */}
            <div className="flex flex-col items-center justify-center gap-1.5 shrink-0">
              <motion.span 
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-blue-400 shadow-[0_0_20px_#3b82f6]"
                animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              />
            </div>

            {/* WordPress Official Logo (Morphs from Header) - NO BACKGROUND */}
            <motion.div className="flex items-center justify-center">
              
              <motion.img
                layoutId="wp-header-logo"
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-ML1gSOI3LDIMf_vNLeahgkoFWZaat8RgxKijhpHnWHed7N6skUY8MdjVHoanvWNiEeCcIBQVAQv7FOkNlpUUXrMnczmlFw1Aio_1O-krIAZMFIT3XkhrTVFLC1XOsSWwmZ4fnYIYZMg1xGJxe41aa5yGSlxCbvihCmkg8PIUFbIZKnUMziMg6LcmET8/s1600/wordpress-logo.png"
                alt="WordPress Logo"
                className="h-11 sm:h-15 md:h-18 lg:h-22 w-auto object-contain filter drop-shadow-[0_10px_25px_rgba(255,255,255,0.4)] hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </motion.div>
        )}

        {/* 2. HEADING ("Terima Kasih") */}
        {showContent && (
          <>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-3 tracking-tight drop-shadow-2xl font-serif leading-tight text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {scene.headline}
            </motion.h1>

            {/* Glowing Dots */}
            <div className="flex items-center gap-2 mb-6 sm:mb-8 justify-center">
              <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_12px_#3b82f6]" />
              <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_12px_#3b82f6]" />
              <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_12px_#3b82f6]" />
              <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_12px_#3b82f6]" />
              <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_12px_#3b82f6]" />
            </div>
          </>
        )}

        {/* 3. SUPPORTING SENTENCE (DESCRIPTION) */}
        {showContent && (
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl font-normal text-slate-300 max-w-3xl drop-shadow-md leading-relaxed text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {scene.supportingSentence}
          </motion.p>
        )}

      </div>
    </motion.div>
  );
};
