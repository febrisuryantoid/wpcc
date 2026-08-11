import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { Calendar, Users, Code, BookOpen, Layers, Sparkles } from 'lucide-react';
import { TypewriterText } from '../ui/TypewriterText';
import { audioManager } from '../utils/audioManager';
import { SlideAnimationProvider, useSlideAnimation } from '../ui/SlideAnimationContext';

const historyTimeline = [
  { year: '2003', title: 'Tahun Peluncuran', icon: Calendar, desc: 'WordPress pertama kali dirilis secara resmi pada tanggal 27 Mei 2003.' },
  { year: 'Pendiri', title: 'Matt Mullenweg & Mike Little', icon: Users, desc: 'Dua pengembang visioner yang menginisiasi proyek pengembangan WordPress.' },
  { year: 'Awal Proyek', title: 'b2/cafelog', icon: Code, desc: 'Dikembangkan sebagai cabang (fork) dari platform blogging b2/cafelog yang dihentikan.' },
  { year: 'Fase Awal', title: 'Blog Platform', icon: BookOpen, desc: 'Awalnya dirancang khusus untuk mempermudah publikasi artikel dan blog pribadi.' },
  { year: 'Masa Kini', title: 'CMS Modern', icon: Layers, desc: 'Berevolusi menjadi Content Management System (CMS) modern pemberdaya web global.' },
];

export const Slide10: React.FC<SceneProps> = (props) => {
  if (!props.isActive) return null;

  return (
    <SlideAnimationProvider scene={props.scene} isActive={props.isActive}>
      <Slide10Content {...props} />
    </SlideAnimationProvider>
  );
};

const Slide10Content: React.FC<SceneProps> = ({ scene }) => {
  const { 
    headingShowMode, 
    descriptionShowMode, 
    headingDuration, 
    descriptionDuration, 
    isTextFinished 
  } = useSlideAnimation();

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center my-auto pt-16 sm:pt-20 md:pt-24 p-3 sm:p-8 md:p-12 pb-20 sm:pb-24 z-10 pointer-events-none overflow-y-auto h-full max-h-screen w-full"
      initial={{ opacity: 0, scale: 0.96, filter: 'blur(10px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(10px)' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center justify-center h-full">
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1.5 sm:mb-2"
          >
            <Sparkles className="w-3.5 h-3.5" /> Timeline Sejarah
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
          <p className="mt-1.5 sm:mt-2 text-slate-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-light leading-snug wpcc-slide-desc">
            <TypewriterText text={scene.supportingSentence || ""} showMode={descriptionShowMode} exactDuration={descriptionDuration} />
          </p>
        </div>

        {/* Vertical Stepper Timeline Container */}
        <div className="w-full max-w-3xl pointer-events-auto relative pl-6 sm:pl-10">
          {/* Vertical Line */}
          <div className="absolute left-[23px] sm:left-[39px] top-4 bottom-4 w-1 bg-gradient-to-b from-blue-500 via-cyan-400 to-indigo-600 rounded-full opacity-40" />

          <div className="space-y-2.5 text-left">
            {historyTimeline.map((item, idx) => (
              <TimelineRow 
                key={item.year + idx} 
                item={item} 
                index={idx} 
                isTextFinished={isTextFinished} 
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface RowProps {
  item: typeof historyTimeline[0];
  index: number;
  isTextFinished: boolean;
}

const TimelineRow: React.FC<RowProps> = ({ item, index, isTextFinished }) => {
  const IconComponent = item.icon;
  const hasPlayedRef = React.useRef(false);

  useEffect(() => {
    if (!isTextFinished) {
      hasPlayedRef.current = false;
      return;
    }
    if (hasPlayedRef.current) return;

    const timer = setTimeout(() => {
      audioManager.playBoxPointSound(index, 5, 0.45);
      hasPlayedRef.current = true;
    }, index * 250);
    return () => clearTimeout(timer);
  }, [index, isTextFinished]);

  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      animate={isTextFinished ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative flex items-start gap-3 py-[10px] px-[8px] sm:p-3.5 rounded-xl bg-slate-950/40 border border-white/10 backdrop-blur-md hover:bg-slate-900/50 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_4px_16px_rgba(0,0,0,0.3)]"
      onClick={() => audioManager.playSound('wpcc_click', 0.5)}
    >
      {/* Connector Node */}
      <div className="relative z-10 flex items-center justify-center">
        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-950 border-2 border-cyan-400/50 group-hover:border-cyan-400 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)]">
          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 text-left">
        <div className="flex flex-row items-center gap-2 sm:gap-3 mb-1">
          <span className="w-max inline-block text-[10px] sm:text-xs font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-400/20 text-cyan-300">
            {item.year}
          </span>
          <h3 className="wpcc-h4 font-bold text-white group-hover:text-cyan-300 transition-colors">
            {item.title}
          </h3>
        </div>
        <p className="text-[13px] sm:text-sm text-slate-300 group-hover:text-slate-200 transition-colors leading-relaxed font-light text-left mt-1 sm:mt-0">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
};
