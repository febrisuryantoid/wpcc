import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { TypewriterText } from '../ui/TypewriterText';
import { audioManager } from '../utils/audioManager';
import { SlideAnimationProvider, useSlideAnimation } from '../ui/SlideAnimationContext';
import { FileText, Calendar, Compass, Sparkles } from 'lucide-react';

export const Slide26: React.FC<SceneProps> = (props) => {
  if (!props.isActive) return null;

  return (
    <SlideAnimationProvider scene={props.scene} isActive={props.isActive}>
      <Slide26Content {...props} />
    </SlideAnimationProvider>
  );
};

const Slide26Content: React.FC<SceneProps> = ({ scene }) => {
  const { 
    headingShowMode, 
    descriptionShowMode, 
    headingDuration, 
    descriptionDuration, 
    isTextFinished 
  } = useSlideAnimation();

  useEffect(() => {
    if (isTextFinished) {
      audioManager.playBoxPointSound(0, 2, 0.4);
    }
  }, [isTextFinished]);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-start pt-[146px] sm:pt-[100px] p-6 sm:p-10 md:p-16 z-10 pointer-events-none overflow-hidden h-full max-h-screen overflow-y-auto sm:overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center h-full">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1.5 sm:mb-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Tipe Konten Utama
          </motion.div>
          <h2 className="wpcc-h3 font-bold text-white tracking-[-0.02em] leading-[1.15] font-serif drop-shadow-2xl text-center whitespace-normal sm:whitespace-nowrap">
            <TypewriterText text={scene.headline} showMode={headingShowMode} exactDuration={headingDuration} />
          </h2>
          {/* Divider line with glowing dot */}
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex items-center justify-center max-w-lg mx-auto w-full wpcc-divide-container"
          >
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-cyan-500/40" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] mx-3 sm:mx-4 inline-block animate-pulse shrink-0" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-cyan-500/40" />
          </motion.div>
          <p className="mt-1.5 sm:mt-2 text-slate-300 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] max-w-2xl mx-auto font-normal leading-relaxed wpcc-slide-desc">
            <TypewriterText text={scene.supportingSentence || "WordPress menyediakan dua jenis konten utama, yaitu Posts untuk konten dinamis dan Pages untuk konten statis."} showMode={descriptionShowMode} exactDuration={descriptionDuration} />
          </p>
        </div>

        {/* Comparative Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-4xl mx-auto pointer-events-auto">
          {/* Left Column: Posts (Dinamis) */}
          <motion.div 
            className="p-5 sm:p-6 rounded-2xl bg-slate-950/40 border border-white/[0.05] backdrop-blur-md flex flex-col justify-between hover:border-blue-500/30 transition-all duration-300 animate-slide-in"
            initial={{ opacity: 0, x: -35 }}
            animate={isTextFinished ? { opacity: 1, x: 0 } : { opacity: 0, x: -35 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              <div className="flex items-center gap-3 mb-4 border-b border-white/[0.05] pb-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Calendar className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="wpcc-h4 font-extrabold text-white">Posts (Konten Dinamis)</h3>
                  <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400">Chronological / Time-Based</span>
                </div>
              </div>

              {/* Feed Preview Mockup */}
              <div className="space-y-2 mb-4">
                <div className="p-2.5 rounded-lg bg-slate-900/50 border border-white/[0.04] text-left">
                  <div className="flex items-center gap-2 text-[8px] text-blue-400 mb-0.5">
                    <span className="font-semibold uppercase tracking-wider">Artikel</span>
                    <span>•</span>
                    <span>Hari ini</span>
                  </div>
                  <h4 className="text-[10px] font-bold text-white leading-tight">Mengenal Gutenberg Modern di Era Full Site Editing</h4>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/50 border border-white/[0.04] text-left">
                  <div className="flex items-center gap-2 text-[8px] text-purple-400 mb-0.5">
                    <span className="font-semibold uppercase tracking-wider">Berita</span>
                    <span>•</span>
                    <span>Kemarin</span>
                  </div>
                  <h4 className="text-[10px] font-bold text-slate-300 leading-tight">WordCamp Asia Sukses Digelar dengan Ribuan Partisipan</h4>
                </div>
              </div>

              {/* Character lists */}
              <ul className="space-y-2 text-left text-xs text-slate-300 font-light hidden sm:block">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                  <span>Diurutkan kronologis berdasarkan tanggal terbit terbaru.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                  <span>Dapat dikategorikan (`Categories`) & diberi label (`Tags`).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                  <span>Mendukung fitur komentar diskusi & masuk dalam RSS feed.</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3.5 border-t border-white/[0.05] text-[10px] text-slate-400 font-mono hidden sm:flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Contoh: Blog, Artikel, Rilis Pers, Portofolio Karya</span>
            </div>
          </motion.div>

          {/* Right Column: Pages (Statis) */}
          <motion.div 
            className="p-5 sm:p-6 rounded-2xl bg-slate-950/40 border border-white/[0.05] backdrop-blur-md flex flex-col justify-between hover:border-purple-500/30 transition-all duration-300"
            initial={{ opacity: 0, x: 35 }}
            animate={isTextFinished ? { opacity: 1, x: 0 } : { opacity: 0, x: 35 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <div className="flex items-center gap-3 mb-4 border-b border-white/[0.05] pb-3.5">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                  <FileText className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="wpcc-h4 font-extrabold text-white">Pages (Konten Statis)</h3>
                  <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400">Structural / Hierarchical</span>
                </div>
              </div>

              {/* Pages Tree Preview Mockup */}
              <div className="space-y-2 mb-4">
                <div className="p-2.5 rounded-lg bg-slate-900/50 border border-white/[0.04] text-left">
                  <h4 className="text-[10px] font-bold text-white leading-tight">🏠 Beranda Utama (Homepage)</h4>
                  <div className="pl-3 mt-1.5 border-l border-white/[0.08] space-y-1.5">
                    <div className="text-[9px] text-slate-400">• Tentang Kami (About Us)</div>
                    <div className="text-[9px] text-slate-400">• Layanan Jasa (Services)</div>
                  </div>
                </div>
              </div>

              {/* Character lists */}
              <ul className="space-y-2 text-left text-xs text-slate-300 font-light hidden sm:block">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                  <span>Statis, tidak terikat waktu, dan bertahan lama di navigasi.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                  <span>Dapat disusun berjenjang (parent-child relationship).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                  <span>Tidak mendukung tags/categories bawaan, serta tanpa feed RSS.</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3.5 border-t border-white/[0.05] text-[10px] text-slate-400 font-mono hidden sm:flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <span>Contoh: Home, About Us, Services, Contact, Privacy Policy</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
