import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Maximize, Minimize, Volume2, VolumeX } from 'lucide-react';
import { audioManager } from '../utils/audioManager';
import { useBackgroundMusic, AudioControlPopover } from '../ui/BackgroundMusicContext';

interface CoverPageProps {
  onStart: () => void;
  isMusicMuted?: boolean;
  onToggleMusic?: () => void;
  onSpinStart?: () => void;
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
      className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none overflow-hidden"
      style={{ 
        backgroundImage: "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilt8apgZg9bwSvgAG4i3kzWSeGxvQbv119y_KcOqWMm6H50x4E0Iuxggk-eJGb5cNzdTxQvHTBUshaMqyIjBMNPGfehNeboptxziFOJacDY3HEbWiCguowMgeqcoqcWj8_ZTrexwxUs-8WevKGSqbcq0yKMs3nNKLdsIiGm8EF_UXr1sHq9lOkZlqiIe0/s1600/bg-cover.webp')",
        transform: 'translateZ(0)',
        willChange: 'opacity'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    />
  );
};

export const ElectronLines = () => {
  return (
    <motion.div 
      className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-85"
      style={{ transform: 'translateZ(0)', willChange: 'opacity' }}
    >
      <svg 
        viewBox="0 0 1920 1080" 
        preserveAspectRatio="xMidYMid slice" 
        className="w-full h-full absolute inset-0"
      >
        <defs>
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
                stroke="rgba(59, 130, 246, 0.15)"
                strokeWidth="1"
                fill="transparent"
              />
              <motion.path
                d={path}
                stroke={isFromTR ? "url(#electron-grad-tr)" : "url(#electron-grad-bl)"}
                strokeWidth="3.5"
                fill="transparent"
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ filter: 'drop-shadow(0px 0px 6px rgba(59,130,246,0.85))' }}
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

export const CoverPage: React.FC<CoverPageProps> = ({ onStart, isMusicMuted = false, onToggleMusic, onSpinStart }) => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(!!document.fullscreenElement);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [isMusicPopoverOpen, setIsMusicPopoverOpen] = useState<boolean>(false);
  const { isMuted: globalMuted } = useBackgroundMusic();

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

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(chimeTimer);
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
    if (onSpinStart) onSpinStart();

    audioManager.init();

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
      

      {/* Top Right Controls specifically for Cover Page */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-8 z-50 pointer-events-auto flex items-center justify-end gap-2.5 sm:gap-3">
        <div className="relative">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMusicPopoverOpen(!isMusicPopoverOpen);
            }}
            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border backdrop-blur-md transition-all duration-200 cursor-pointer flex items-center justify-center shrink-0 shadow-[0_4px_20px_rgba(0,0,0,0.5)] ${
              !globalMuted 
                ? 'bg-blue-600/80 border-blue-400 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                : 'bg-slate-950/80 border-white/15 text-slate-300 hover:text-white hover:bg-white/10'
            }`}
            title={globalMuted ? "Pengaturan Musik Latar (Mute)" : "Pengaturan Musik Latar (Aktif)"}
            aria-label={globalMuted ? "Pengaturan Musik Latar (Mute)" : "Pengaturan Musik Latar (Aktif)"}
          >
            {!globalMuted ? (
              <Volume2 className="w-5 h-5 text-cyan-300 animate-pulse" />
            ) : (
              <VolumeX className="w-5 h-5 text-slate-300" />
            )}
          </button>

          <AudioControlPopover 
            isOpen={isMusicPopoverOpen} 
            onClose={() => setIsMusicPopoverOpen(false)} 
            align="right" 
          />
        </div>

        <button
          onClick={toggleFullscreen}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/15 bg-slate-950/80 text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer flex items-center justify-center shrink-0 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          title={isFullscreen ? "Keluar Layar Penuh" : "Layar Penuh (Full Screen)"}
          aria-label={isFullscreen ? "Keluar Layar Penuh" : "Layar Penuh (Full Screen)"}
        >
          {isFullscreen ? (
            <Minimize className="w-5 h-5 text-cyan-300" />
          ) : (
            <Maximize className="w-5 h-5 text-slate-300 group-hover:text-cyan-300" />
          )}
        </button>
      </div>

      {/* Centered Start Button Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-40 pointer-events-none p-4">
        <button
          onClick={handleSphereClick}
          className="pointer-events-auto cursor-pointer relative focus:outline-none group z-50 border-none bg-transparent outline-none flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 shrink-0 transition-transform hover:scale-105 active:scale-95"
          title="Klik untuk Mulai Presentasi"
          aria-label="Klik untuk Mulai Presentasi"
        >
          <img 
            src="/favicon.svg" 
            alt="Mulai Presentasi WPCC" 
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain brightness-0 invert drop-shadow-[0_0_25px_rgba(59,130,246,0.95)] relative z-10 shrink-0"
          />
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] sm:text-xs font-semibold tracking-widest text-cyan-200/90 group-hover:text-cyan-100 uppercase opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Mulai Presentasi
          </span>
        </button>
      </div>
    </motion.div>
  );
};
