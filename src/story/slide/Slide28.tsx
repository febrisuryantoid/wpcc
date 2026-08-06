import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { TypewriterText } from '../ui/TypewriterText';
import { audioManager } from '../utils/audioManager';
import { SlideAnimationProvider, useSlideAnimation } from '../ui/SlideAnimationContext';
import { FileEdit, Sparkles, LayoutGrid, Plus, MoreHorizontal, Settings, AlignLeft, Eye } from 'lucide-react';

export const Slide28: React.FC<SceneProps> = (props) => {
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
      className="absolute inset-0 flex flex-col items-center justify-start pt-[146px] sm:pt-[100px] p-6 sm:p-10 md:p-16 z-10 pointer-events-none overflow-y-auto sm:overflow-hidden h-full max-h-screen"
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
            <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Editor Visual Modern
          </motion.div>
          <h2 className="wpcc-h3 font-bold text-white tracking-[-0.02em] leading-[1.15] font-serif drop-shadow-2xl text-center sm:text-left mb-2 whitespace-normal sm:whitespace-nowrap">
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
            <TypewriterText text={scene.supportingSentence || "Gutenberg adalah editor bawaan WordPress yang menggunakan konsep Block sehingga setiap bagian halaman dapat dibuat dan disusun secara visual."} showMode={descriptionShowMode} exactDuration={descriptionDuration} />
          </p>

          <motion.div 
            className="space-y-3.5 w-full pointer-events-auto text-xs text-slate-300 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={isTextFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/30 border border-white/[0.04]">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0"><LayoutGrid className="w-4 h-4" /></div>
              <div>
                <h4 className="text-xs font-bold text-white">Konsep WYSIWYG Sejati</h4>
                <p className="text-[10px] text-slate-400 font-light">Apa yang Anda rancang di editor adalah tampilan persis yang akan dinikmati pengunjung.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/30 border border-white/[0.04]">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0"><FileEdit className="w-4 h-4" /></div>
              <div>
                <h4 className="text-xs font-bold text-white">Kebebasan Tata Letak</h4>
                <p className="text-[10px] text-slate-400 font-light">Susun multi-kolom, sematkan video, atau tambahkan tombol interaktif tanpa kode HTML.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Gutenberg Interface Mockup (55% Width) */}
        <motion.div 
          className="w-full md:w-[55%] pointer-events-auto h-full max-h-[60vh] md:max-h-[75vh] flex items-center justify-center relative"
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1.0], delay: 0.1 }}
        >
          {/* Gutenberg Screen Mockup */}
          <div className="w-full max-w-[500px] aspect-[4/3] rounded-xl border border-white/[0.08] bg-slate-950/80 shadow-[0_24px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl flex overflow-hidden">
            {/* Left Gutenberg Tools Panel */}
            <div className="flex-1 p-3.5 flex flex-col gap-3.5 text-left border-r border-white/[0.06] overflow-y-auto">
              {/* Top Bar Editor */}
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:bg-blue-500"><Plus className="w-3.5 h-3.5" /></div>
                  <span className="text-[9px] text-slate-400">Add Block</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 text-[8px]">
                  <span className="cursor-pointer hover:text-white">Save Draft</span>
                  <span>•</span>
                  <span className="cursor-pointer hover:text-white flex items-center gap-0.5"><Eye className="w-2.5 h-2.5" /> Preview</span>
                </div>
              </div>

              {/* Title Block */}
              <div className="py-1">
                <span className="text-[7px] text-slate-500 uppercase tracking-widest font-bold">Document Title</span>
                <h2 className="text-base font-black text-white leading-tight mt-0.5 border-b border-transparent hover:border-white/10 outline-none">
                  Membangun Website Pertama Anda
                </h2>
              </div>

              {/* Interactive Editing Blocks Canvas Stack */}
              <div className="space-y-2 flex-1 overflow-y-auto">
                {/* Paragraph Block Active */}
                <div className="p-2 rounded-lg border border-blue-500/30 bg-blue-500/[0.03] relative group">
                  {/* Floating Block Mini Toolbar */}
                  <div className="absolute -top-3 left-2 bg-[#2f353e] border border-white/[0.08] px-1.5 py-0.5 rounded shadow-lg flex items-center gap-1.5 text-[7px] text-slate-300 animate-slide-in">
                    <AlignLeft className="w-2.5 h-2.5 text-blue-400" />
                    <span>Paragraph</span>
                    <span>|</span>
                    <MoreHorizontal className="w-2.5 h-2.5" />
                  </div>
                  <p className="text-[10px] text-slate-200 leading-relaxed pt-1.5 font-light">
                    WordPress merupakan sarana paling fleksibel untuk mewujudkan website impian Anda dengan sangat instan...
                  </p>
                </div>

                {/* Cover/Image Block Mock */}
                <div className="p-2 rounded-lg border border-white/[0.04] bg-white/[0.01] flex items-center gap-3 relative hover:border-white/[0.1] cursor-pointer">
                  <div className="w-14 h-10 rounded bg-slate-800 flex items-center justify-center text-slate-500 shrink-0">
                    <LayoutGrid className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-[7px] text-slate-500 uppercase font-bold">Media Block</span>
                    <h5 className="text-[10px] font-bold text-slate-300 leading-none">Hero-Banner.jpg</h5>
                    <p className="text-[8px] text-slate-500 font-light mt-0.5">Image Block • 16:9 ratio</p>
                  </div>
                </div>

                {/* Button Block Mock */}
                <div className="p-2 rounded-lg border border-white/[0.04] bg-white/[0.01] hover:border-white/[0.1] cursor-pointer flex justify-start">
                  <span className="px-3 py-1 rounded-full bg-blue-600 text-[8px] font-bold text-white uppercase tracking-wider flex items-center gap-1">
                    Hubungi Kami <Plus className="w-2.5 h-2.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* Right Block Inspector / Sidebar */}
            <div className="w-[110px] sm:w-[140px] bg-[#1d2327] p-3 flex flex-col gap-3 shrink-0 text-[9px]">
              <div className="flex items-center gap-1.5 border-b border-white/[0.06] pb-1.5 shrink-0">
                <Settings className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-extrabold text-white">Block Settings</span>
              </div>
              
              <div className="space-y-3 flex-1 overflow-y-auto">
                <div className="space-y-1">
                  <span className="text-slate-400 font-bold block">Typography</span>
                  <div className="p-1.5 rounded bg-slate-900 border border-white/[0.04] text-white font-mono">Size: Default (16px)</div>
                </div>

                <div className="space-y-1">
                  <span className="text-slate-400 font-bold block">Color Settings</span>
                  <div className="flex gap-1.5">
                    <span className="w-4.5 h-4.5 rounded-full bg-blue-600 border border-white/20 cursor-pointer" />
                    <span className="w-4.5 h-4.5 rounded-full bg-emerald-500 cursor-pointer" />
                    <span className="w-4.5 h-4.5 rounded-full bg-purple-500 cursor-pointer" />
                    <span className="w-4.5 h-4.5 rounded-full bg-white cursor-pointer" />
                  </div>
                </div>

                <div className="space-y-1 pt-2 border-t border-white/[0.06]">
                  <span className="text-slate-400 font-bold block">Layout</span>
                  <div className="p-1 rounded bg-slate-900/40 border border-white/[0.04] text-slate-300 text-[8px]">Width: Content (620px)</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
