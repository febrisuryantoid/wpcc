import React from 'react';
import { motion } from 'motion/react';

interface FooterProps {
  currentSceneIndex: number;
  totalScenes: number;
}

export const Footer: React.FC<FooterProps> = ({ currentSceneIndex, totalScenes }) => {
  return (
    <motion.div 
      className="absolute bottom-3 sm:bottom-6 md:bottom-8 left-0 right-0 w-full z-[20] pointer-events-none px-4 sm:px-6 md:px-8 lg:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between text-slate-400 wpcc-footer-text font-medium relative">
        <div className="hidden sm:block text-slate-400">© 2026 WordPress Campus Connect</div>
        <div className="block sm:hidden text-slate-400">© 2026 WPCC</div>
        <div className="hidden sm:block text-center absolute left-1/2 -translate-x-1/2 font-medium text-slate-300">Febri Suryanto</div>
        
        {/* Aligned Active Slide Number with Cyan Glow & Bright Separator */}
        <div className="flex items-center font-mono font-bold text-[8px] sm:text-[12px]">
          <span className="text-sky-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">
            {(currentSceneIndex + 1).toString().padStart(2, '0')}
          </span>
          <span className="text-cyan-200/60 font-semibold mx-1.5 sm:mx-2" aria-hidden="true">/</span>
          <span className="text-slate-400/90 font-medium">
            {totalScenes}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
