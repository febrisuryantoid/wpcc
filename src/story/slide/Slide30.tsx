import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { TypewriterText } from '../ui/TypewriterText';
import { audioManager } from '../utils/audioManager';
import { SlideAnimationProvider, useSlideAnimation } from '../ui/SlideAnimationContext';
import { Sparkles, LayoutGrid, MousePointerClick } from 'lucide-react';

export const Slide30: React.FC<SceneProps> = (props) => {
  if (!props.isActive) return null;

  return (
    <SlideAnimationProvider scene={props.scene} isActive={props.isActive}>
      <Slide28Content {...props} />
    </SlideAnimationProvider>
  );
};

const Slide28Content: React.FC<SceneProps> = ({ scene }) => {
  const { 
    headingShowMode, 
    descriptionShowMode, 
    headingDuration, 
    descriptionDuration, 
    isTextFinished 
  } = useSlideAnimation();

  useEffect(() => {
    if (isTextFinished) {
      audioManager.playBoxPointSound(0, 3, 0.4);
    }
  }, [isTextFinished]);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-start pt-14 sm:pt-18 md:pt-20 px-5 sm:px-[30px] lg:px-[40px] pb-20 sm:pb-24 z-10 pointer-events-none overflow-y-auto sm:overflow-hidden h-full max-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-[1800px] mx-auto flex flex-col lg:flex-row gap-6 items-center justify-between h-full max-h-full">
        
        {/* Left Info Column (42% Width) */}
        <div className="w-full lg:w-[42%] flex flex-col items-center sm:items-start text-center sm:text-left shrink-0">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Editor Visual Modern
          </motion.div>
          
          <h2 className="wpcc-h3 font-bold text-white tracking-[-0.02em] leading-[1.15] font-serif drop-shadow-sm text-center sm:text-left mb-2 whitespace-normal md:whitespace-nowrap">
            <TypewriterText text={scene.headline} showMode={headingShowMode} exactDuration={headingDuration} />
          </h2>

          <p className="text-[12px] sm:text-[13px] md:text-[14px] font-normal text-slate-300 mb-3 leading-relaxed wpcc-slide-desc">
            <TypewriterText text={scene.supportingSentence || "Gutenberg adalah editor bawaan WordPress yang menggunakan konsep Block sehingga setiap bagian halaman dapat dibuat dan disusun secara visual."} showMode={descriptionShowMode} exactDuration={descriptionDuration} />
          </p>

          {/* Divider line appears AFTER description finishes typing */}
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isTextFinished ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center justify-center sm:justify-start max-w-lg mx-auto sm:mx-0 w-full wpcc-divide-container mb-4"
          >
            <div className="sm:hidden h-[1px] flex-1 bg-gradient-to-r from-transparent to-cyan-500/40" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] mx-3 sm:ml-0 sm:mr-4 inline-block animate-pulse shrink-0" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-cyan-500/40 sm:bg-gradient-to-r sm:from-cyan-500/40 sm:to-transparent" />
          </motion.div>

          <motion.div 
            className="space-y-3 w-full pointer-events-auto text-xs text-slate-300 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={isTextFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-white/[0.06] backdrop-blur-md">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <LayoutGrid className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Konsep WYSIWYG Sejati</h4>
                <p className="text-[10px] text-slate-400">Tampilan di editor persis sama dengan hasil publikasi akhir.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-white/[0.06] backdrop-blur-md">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <MousePointerClick className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Interface Gutenberg Editor</h4>
                <p className="text-[10px] text-cyan-300 font-medium">Tampilan editor berbasis blok visual untuk menyusun artikel, halaman, dan elemen situs secara instan.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Gutenberg Editor Image (58% Width) */}
        <motion.div 
          className="w-full lg:w-[58%] pointer-events-auto flex flex-col items-center justify-center relative"
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1.0], delay: 0.1 }}
        >
          <div className="w-full max-w-[640px] rounded-2xl border border-white/10 bg-slate-950/90 shadow-[0_24px_50px_rgba(0,0,0,0.7)] backdrop-blur-xl overflow-hidden p-1.5 sm:p-2 group">
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7dJ_q6f5zeY6OT2APrzJr0IpfEmNuL27q0LftgWr1H7VBBiHVpkC5sYDk18RF43bohN73DIaA9J7btfqIj4TyTdoAj4NuKA0koK4KpXyC5EukZYhdVDsOL54ZX2SDaLuIqgxGSsnu7n-MBwn80LHwEvUITTD-iUii1duiNyUkGbLXIoA5oHJE86O3oIs/s1600/gutenberg-editor.webp" 
              alt="Gutenberg Editor WordPress"
              className="w-full h-auto object-cover rounded-xl border border-white/5 transition-transform duration-500 group-hover:scale-[1.01]"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

