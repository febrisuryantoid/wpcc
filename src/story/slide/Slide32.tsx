import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { TypewriterText } from '../ui/TypewriterText';
import { audioManager } from '../utils/audioManager';
import { SlideAnimationProvider, useSlideAnimation } from '../ui/SlideAnimationContext';
import { CheckCircle, Sparkles, Layout, Move } from 'lucide-react';

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

  const [activePart, setActivePart] = useState<string>('header');

  useEffect(() => {
    if (isTextFinished) {
      audioManager.playBoxPointSound(0, 3, 0.4);
    }
  }, [isTextFinished]);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-start pt-16 sm:pt-20 md:pt-24 p-3 sm:p-8 md:p-12 pb-20 sm:pb-24 z-10 pointer-events-none overflow-y-auto sm:overflow-hidden h-full max-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-4 sm:gap-6 items-center justify-between h-full max-h-full">
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

          {/* Divider line with glowing dot */}
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex items-center justify-center sm:justify-start max-w-lg mx-auto sm:mx-0 w-full wpcc-divide-container"
          >
            <div className="sm:hidden h-[1px] flex-1 bg-gradient-to-r from-transparent to-cyan-500/40" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] mx-3 sm:ml-0 sm:mr-4 inline-block animate-pulse shrink-0" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-cyan-500/40 sm:bg-gradient-to-r sm:from-cyan-500/40 sm:to-transparent" />
          </motion.div>
          <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] font-normal text-slate-300 mb-6 leading-relaxed wpcc-slide-desc">
            <TypewriterText text={scene.supportingSentence || "Site Editor memungkinkan Anda mengelola hampir seluruh tampilan website secara visual, mulai dari Header, Footer, Template, hingga Global Styles."} showMode={descriptionShowMode} exactDuration={descriptionDuration} />
          </p>

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

        {/* Right FSE Canvas Layout Mockup (55% Width) */}
        <motion.div 
          className="w-full md:w-[55%] pointer-events-auto h-full max-h-[60vh] md:max-h-[75vh] flex items-center justify-center relative"
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1.0], delay: 0.1 }}
        >
          {/* Site Editor Canvas Grid */}
          <div className="w-full max-w-[480px] aspect-[4/3] rounded-xl border border-white/[0.08] bg-slate-950/80 shadow-[0_24px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl p-4 flex flex-col gap-3.5 overflow-hidden text-left relative">
            
            {/* Top Toolbar Control */}
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 shrink-0 text-[9px] text-slate-400">
              <div className="flex items-center gap-2">
                <Layout className="w-4 h-4 text-blue-400" />
                <span className="font-extrabold text-white">Full Site Editor</span>
              </div>
              <span className="flex items-center gap-1 font-mono"><Move className="w-3 h-3 text-blue-400" /> Click to select element</span>
            </div>

            {/* Simulated Live Canvas Builder */}
            <div className="flex-1 flex flex-col gap-3 overflow-hidden text-[9px]">
              
              {/* Header Part Card */}
              <motion.div 
                className={`p-2.5 rounded-lg border text-center relative cursor-pointer transition-all duration-300 ${activePart === 'header' ? 'bg-blue-600/10 border-blue-500 shadow-md shadow-blue-500/5' : 'bg-slate-900/40 border-white/[0.04]'}`}
                onClick={() => {
                  setActivePart('header');
                  audioManager.playSound('wpcc_power', 0.5);
                }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="absolute top-1 left-2 text-[6px] font-extrabold uppercase tracking-widest text-blue-400">Template Part: Header</div>
                <div className="flex justify-between items-center mt-2.5">
                  <span className="font-black text-white text-[10px]">🎓 CampusConnect</span>
                  <div className="flex gap-2.5 text-[8px] text-slate-400 font-semibold">
                    <span>Beranda</span>
                    <span>Tentang</span>
                    <span>Praktik</span>
                  </div>
                </div>
              </motion.div>

              {/* Main Template Content Part Card */}
              <motion.div 
                className={`p-3 rounded-lg border text-center relative cursor-pointer transition-all duration-300 flex-1 flex flex-col justify-center ${activePart === 'body' ? 'bg-blue-600/10 border-blue-500 shadow-md shadow-blue-500/5' : 'bg-slate-900/40 border-white/[0.04]'}`}
                onClick={() => {
                  setActivePart('body');
                  audioManager.playSound('wpcc_power', 0.5);
                }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="absolute top-1.5 left-2 text-[6px] font-extrabold uppercase tracking-widest text-purple-400">Page Content Template</div>
                <div className="space-y-1.5 max-w-[280px] mx-auto mt-2">
                  <h4 className="text-[11px] font-black text-white">Selamat Datang di Portal WordPress</h4>
                  <p className="text-[8px] text-slate-400 leading-normal font-light line-clamp-2">
                    Pelajari WordPress Modern berbasis Gutenberg Block Editor dan rasakan kemudahan membangun website visual impian Anda dalam hitungan menit...
                  </p>
                </div>
              </motion.div>

              {/* Footer Part Card */}
              <motion.div 
                className={`p-2.5 rounded-lg border text-center relative cursor-pointer transition-all duration-300 ${activePart === 'footer' ? 'bg-blue-600/10 border-blue-500 shadow-md shadow-blue-500/5' : 'bg-slate-900/40 border-white/[0.04]'}`}
                onClick={() => {
                  setActivePart('footer');
                  audioManager.playSound('wpcc_power', 0.5);
                }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="absolute top-1 left-2 text-[6px] font-extrabold uppercase tracking-widest text-orange-400">Template Part: Footer</div>
                <div className="flex justify-between items-center mt-2.5 text-[8px] text-slate-500">
                  <span>© 2026 CampusConnect. All Rights Reserved.</span>
                  <span className="font-medium text-slate-400 hover:underline">Support</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
