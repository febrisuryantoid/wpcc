import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Maximize, Minimize } from 'lucide-react';
import { audioManager } from '../utils/audioManager';

interface CoverPageProps {
  onStart: () => void;
}

const electronPaths = [
  // Top Right
  "M 2000,200 L 1600,200 L 1300,500 L 1100,500 L 1050,550",
  "M 1800,-100 L 1800,100 L 1400,500 L 1150,500 L 1100,550",
  "M 1900,50 L 1550,50 L 1150,450 L 950,450 L 850,550",
  "M 2100,400 L 1700,400 L 1450,650 L 1200,650 L 1100,550",
  // Bottom Left
  "M -100,800 L 400,800 L 700,500 L 850,500 L 900,450",
  "M 100,1200 L 100,900 L 400,600 L 700,600 L 800,500 L 900,500",
  "M -200,600 L 200,600 L 600,200 L 850,200 L 950,300",
  "M 300,1200 L 300,950 L 650,600 L 850,600 L 900,550",
];

export const CoverBackgroundImage = () => {
  return (
    <motion.div
      key="cover-bg"
      className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none transform-gpu overflow-hidden"
      style={{ backgroundImage: "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilt8apgZg9bwSvgAG4i3kzWSeGxvQbv119y_KcOqWMm6H50x4E0Iuxggk-eJGb5cNzdTxQvHTBUshaMqyIjBMNPGfehNeboptxziFOJacDY3HEbWiCguowMgeqcoqcWj8_ZTrexwxUs-8WevKGSqbcq0yKMs3nNKLdsIiGm8EF_UXr1sHq9lOkZlqiIe0/s1600/bg-cover.webp')" }}
      initial={{ opacity: 0, scale: 1.02 }}
      animate={{ 
        opacity: 1, 
        scale: [1.02, 1.07, 1.02], 
      }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ 
        opacity: { duration: 0.7 },
        scale: { duration: 16, repeat: Infinity, ease: "easeInOut" }
      }}
    />
  );
};

export const ElectronLines = () => {
  return (
    <motion.div 
      className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-90 mix-blend-screen transform-gpu"
    >
      <svg 
        viewBox="0 0 1920 1080" 
        preserveAspectRatio="xMidYMid slice" 
        className="w-full h-full absolute inset-0"
      >
        <defs>
          <filter id="blue-glow-cover" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="electron-grad-tr" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="80%" stopColor="#2563EB" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="electron-grad-bl" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="80%" stopColor="#2563EB" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="1" />
          </linearGradient>
        </defs>
        
        {electronPaths.map((path, i) => {
          const isFromTR = i < 4;
          const duration = 2.5 + (i % 4) * 0.5; 
          const delay = (i * 0.6) % 3;
          return (
            <g key={i}>
              <motion.path
                d={path}
                stroke="rgba(59, 130, 246, 0.1)"
                strokeWidth="1"
                fill="transparent"
              />
              <motion.path
                d={path}
                stroke={isFromTR ? "url(#electron-grad-tr)" : "url(#electron-grad-bl)"}
                strokeWidth="4"
                fill="transparent"
                filter="url(#blue-glow-cover)"
                strokeLinecap="square" strokeLinejoin="miter"
                initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 0.2, 0.2, 0],
                  pathOffset: [0, 0, 0.8, 1],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: delay,
                }}
              />
            </g>
          );
        })}
      </svg>
    </motion.div>
  );
};

export const CoverPage: React.FC<CoverPageProps> = ({ onStart }) => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(!!document.fullscreenElement);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);

  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    // 1. Play opening sound when sphere emerges on cover
    audioManager.playSound('open', 0.8);

    // 2. Play WPCC icon zoom sound when icon starts appearing (600ms)
    const zoomTimer = setTimeout(() => {
      audioManager.playSound('cover_wpcc_zoom', 0.85);
    }, 600);

    // 3. Play chime sound 0.5s later (1100ms)
    const chimeTimer = setTimeout(() => {
      audioManager.playSound('cover_chime', 0.85);
    }, 1100);

    // 4. Play ambient SFX after 2.5 seconds, then every 30 seconds (cycling ambient sounds on cover)
    const ambientList = ['cover_ambient', 'bg_ambient_1', 'bg_ambient_2'];
    let ambientIdx = 0;
    let ambientInterval: NodeJS.Timeout | null = null;
    const ambientTimer = setTimeout(() => {
      audioManager.playSound(ambientList[ambientIdx % ambientList.length], 0.8);
      ambientIdx++;
      ambientInterval = setInterval(() => {
        audioManager.playSound(ambientList[ambientIdx % ambientList.length], 0.8);
        ambientIdx++;
      }, 30000);
    }, 2500);

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(chimeTimer);
      clearTimeout(ambientTimer);
      if (ambientInterval) clearInterval(ambientInterval);
    };
  }, []);

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handleSphereClick = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    // Play rapid spin transition sound
    audioManager.playSound('sphere_3', 0.95);
    audioManager.playSound('wpcc_transition', 0.95);

    // After 750ms rapid spin & expansion, trigger transition to Slide 1
    setTimeout(() => {
      onStart();
    }, 750);
  };

  return (
    <motion.div
      className="fixed inset-0 w-full h-screen overflow-hidden select-none font-sans z-10 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      

      {/* Top Right Fullscreen Control Button */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 pointer-events-auto">
        <button
          onClick={toggleFullscreen}
          className="p-3 rounded-full bg-[#040C1A]/80 border border-blue-500/30 backdrop-blur-md hover:bg-blue-500/20 hover:border-blue-400 text-slate-300 hover:text-white shadow-[0_0_20px_rgba(0,0,0,0.8)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-300 cursor-pointer flex items-center justify-center group"
          title={isFullscreen ? "Keluar Layar Penuh" : "Layar Penuh (Full Screen)"}
          aria-label={isFullscreen ? "Keluar Layar Penuh" : "Layar Penuh (Full Screen)"}
        >
          {isFullscreen ? (
            <Minimize className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
          ) : (
            <Maximize className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
          )}
        </button>
      </div>
      
      {/* Centered Sphere and Icon */}
      <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none" >
        <div className="relative flex items-center justify-center" style={{ marginTop: "-1px" }}>
          {/* Sphere effect */}
          <motion.div 
            initial={{ scale: 0, opacity: 0, rotate: 0 }}
            animate={isSpinning ? {
              scale: [1, 2.6],
              rotate: [0, 1080],
              opacity: [1, 1],
            } : {
              scale: 1,
              rotate: 0,
              opacity: 1
            }}
            transition={isSpinning ? {
              duration: 0.75,
              ease: [0.4, 0, 0.2, 1]
            } : {
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
            className={`absolute w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-blue-500/20 border-2 border-blue-400/50 backdrop-blur-md transition-shadow duration-300 ${
              isSpinning 
                ? 'shadow-[0_0_120px_rgba(59,130,246,1)] border-white' 
                : 'shadow-[0_0_60px_rgba(59,130,246,0.5)] animate-[pulse_4s_ease-in-out_infinite]'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 via-blue-500/30 to-blue-300/50 rounded-full" />
            <div className="absolute top-0 left-1/4 w-1/2 h-1/4 bg-white/20 rounded-full blur-md" />
          </motion.div>

          <motion.button
            onClick={handleSphereClick}
            initial={{ scale: 0, opacity: 0, rotate: 0 }}
            animate={isSpinning ? {
              scale: [1, 2.2],
              rotate: [0, 1080],
              opacity: [1, 1]
            } : {
              scale: 1,
              rotate: 0,
              opacity: 1
            }}
            transition={isSpinning ? {
              duration: 0.75,
              ease: [0.4, 0, 0.2, 1]
            } : {
              duration: 0.7,
              delay: 0.6,
              type: "spring",
              damping: 14,
              stiffness: 100
            }}
            whileHover={!isSpinning ? { scale: 1.05 } : {}}
            whileTap={!isSpinning ? { scale: 0.95 } : {}}
            className="pointer-events-auto cursor-pointer flex flex-col items-center justify-center relative focus:outline-none group z-50"
          >
            <img 
              src="/favicon.svg" 
              alt="Start Presentation" 
              className={`w-32 h-32 sm:w-40 sm:h-40 object-contain brightness-0 invert transition-all duration-300 relative z-10 ${
                isSpinning 
                  ? 'drop-shadow-[0_0_60px_rgba(255,255,255,1)]' 
                  : 'drop-shadow-[0_0_20px_rgba(59,130,246,0.8)] group-hover:drop-shadow-[0_0_40px_rgba(59,130,246,1)]'
              }`}
            />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
