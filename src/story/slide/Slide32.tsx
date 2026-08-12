import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { TypewriterText } from '../ui/TypewriterText';
import { audioManager } from '../utils/audioManager';
import { SlideAnimationProvider, useSlideAnimation } from '../ui/SlideAnimationContext';
import { CheckCircle, Sparkles } from 'lucide-react';

export const Slide32: React.FC<SceneProps> = (props) => {
  if (!props.isActive) return null;

  return (
    <SlideAnimationProvider scene={props.scene} isActive={props.isActive}>
      <Slide32Content {...props} />
    </SlideAnimationProvider>
  );
};

const Slide32Content: React.FC<SceneProps> = ({ scene }) => {
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
      <div className="w-full max-w-[1800px] mx-auto flex flex-col md:flex-row gap-4 sm:gap-6 items-center justify-between h-full max-h-full">
        {/* Left Info Column (45% Width) */}
        <div className="w-full md:w-[45%] flex flex-col items-center sm:items-start text-center sm:text-left shrink-0">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Full Site Editing (FSE)
          </motion.div>
          <h2 className="wpcc-h3 font-bold text-white tracking-[-0.02em] leading-[1.15] font-serif drop-shadow-sm text-center sm:text-left mb-2 whitespace-normal md:whitespace-nowrap">
            <TypewriterText text={scene.headline} showMode={headingShowMode} exactDuration={headingDuration} />
          </h2>

          <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] font-normal text-slate-300 mb-3 leading-relaxed wpcc-slide-desc">
            <TypewriterText text={scene.supportingSentence || "Site Editor memungkinkan Anda mengelola hampir seluruh tampilan website secara visual, mulai dari Header, Footer, Template, hingga Global Styles."} showMode={descriptionShowMode} exactDuration={descriptionDuration} />
          </p>

          {/* Divider line appears AFTER description finishes typing */}
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isTextFinished ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center justify-center sm:justify-start max-w-lg mx-auto sm:mx-0 w-full wpcc-divide-container mb-4 sm:mb-6"
          >
            <div className="sm:hidden h-[1px] flex-1 bg-gradient-to-r from-transparent to-cyan-500/40" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] mx-3 sm:ml-0 sm:mr-4 inline-block animate-pulse shrink-0" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-cyan-500/40 sm:bg-gradient-to-r sm:from-cyan-500/40 sm:to-transparent" />
          </motion.div>

          <motion.div 
            className="space-y-3.5 w-full pointer-events-auto text-xs text-slate-300 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={isTextFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Satu Antarmuka</strong>: Desain seluruh website secara holistik tanpa berpindah menu admin kustomisasi lama.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Edit Header & Footer</strong>: Cukup klik bagian atas/bawah halaman untuk menyunting menu navigasi, logo, atau hak cipta.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Template Builder</strong>: Buat desain kustom untuk artikel blog, halaman pencarian, hingga halaman error 404 secara visual.</span>
            </div>
          </motion.div>
        </div>

        {/* Right: Full Site Editor Image (55% Width) */}
        <motion.div 
          className="w-full md:w-[55%] pointer-events-auto flex items-center justify-center relative"
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          animate={isTextFinished ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.95, x: 40 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1.0], delay: 0.1 }}
        >
          <div className="w-full max-w-[640px] rounded-2xl border border-white/10 bg-slate-950/90 shadow-[0_24px_50px_rgba(0,0,0,0.7)] backdrop-blur-xl overflow-hidden p-1.5 sm:p-2 group">
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLUOBEqqQ2qrMhqjVk3GhExAh5WwkvRed7iN4NKEOPZotPDuGtrdq-1ldWogLxnwCxHPPJnD2MBf0SDCfMIGJH61ra1plxr8JdlhixvO0TWEKrwzCMthz4equ3Bk9rpAPrvAHX2m3qQ8gLdbALlJaEuiwhgN3yR0iUEvH0dhkarNApMVfbCFHCT6IY_RM/s1600/full-site-editor.webp" 
              alt="WordPress Full Site Editor"
              className="w-full h-auto object-cover rounded-xl border border-white/5 transition-transform duration-500 group-hover:scale-[1.01]"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
