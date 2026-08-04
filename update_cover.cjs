const fs = require('fs');

const content = `import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Maximize, Minimize } from 'lucide-react';

interface CoverPageProps {
  onStart: () => void;
}

const electronPaths = [
  // Top Right coming in
  "M 2100,-100 L 1600,400 L 1200,600 L 900,650",
  "M 1950,-200 L 1500,250 L 1100,450 L 800,500",
  "M 2200,100 L 1700,600 L 1300,800 L 1000,900",
  "M 1800,-50 L 1400,350 L 1000,550 L 700,650",

  // Bottom Left coming in
  "M -100,1200 L 400,700 L 800,500 L 1100,450",
  "M -200,1000 L 300,500 L 700,300 L 1000,200",
  "M 100,1300 L 600,800 L 1000,600 L 1300,500",
  "M -50,1100 L 450,600 L 850,400 L 1150,300",
];

const ElectronLines = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-90 mix-blend-screen">
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
            <stop offset="80%" stopColor="#60A5FA" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#BFDBFE" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="electron-grad-bl" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="80%" stopColor="#60A5FA" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#BFDBFE" stopOpacity="1" />
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
                strokeLinecap="round"
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
    </div>
  );
};

export const CoverPage: React.FC<CoverPageProps> = ({ onStart }) => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(!!document.fullscreenElement);

  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
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

  return (
    <motion.div
      className="fixed inset-0 w-full h-screen overflow-hidden select-none font-sans z-10 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <ElectronLines />

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
      <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none" style={{ marginTop: '-5px' }}>
        <div className="relative flex items-center justify-center">
          {/* Sphere effect */}
          <div className="absolute w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-blue-500/10 border border-blue-400/30 shadow-[0_0_60px_rgba(59,130,246,0.4)] backdrop-blur-sm animate-[pulse_4s_ease-in-out_infinite]">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-blue-500/20 to-blue-300/40 rounded-full" />
            <div className="absolute top-0 left-1/4 w-1/2 h-1/4 bg-white/10 rounded-full blur-md" />
          </div>

          <motion.button
            onClick={onStart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="pointer-events-auto cursor-pointer flex flex-col items-center justify-center relative focus:outline-none group z-50"
          >
            <img 
              src="/favicon.svg" 
              alt="Start Presentation" 
              className="w-32 h-32 sm:w-40 sm:h-40 object-contain brightness-0 invert drop-shadow-[0_0_20px_rgba(59,130,246,0.8)] group-hover:drop-shadow-[0_0_40px_rgba(59,130,246,1)] transition-all duration-300 relative z-10"
            />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
`;

fs.writeFileSync('src/story/components/CoverPage.tsx', content);
