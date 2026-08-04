import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { Globe, Layout, Code2, Workflow, Layers, Briefcase, Sliders, Cpu } from 'lucide-react';
import { WPIcon } from '../utils/pointHelper';
import { TypewriterText } from '../components/TypewriterText';
import { audioManager } from '../utils/audioManager';
import { SlideAnimationProvider, useSlideAnimation } from '../components/SlideAnimationContext';

const chapters = [
  { num: '01', chapter: 'Chapter 1', title: 'Mengapa Website Penting?', icon: Globe },
  { num: '02', chapter: 'Chapter 2', title: 'Apa itu Website?', icon: Layout },
  { num: '03', chapter: 'Chapter 3', title: 'HTML, CSS & JavaScript', icon: Code2 },
  { num: '04', chapter: 'Chapter 4', title: 'Perjalanan Sebuah Website', icon: Workflow },
  { num: '05', chapter: 'Chapter 5', title: 'Pengenalan WordPress', icon: WPIcon },
  { num: '06', chapter: 'Chapter 6', title: 'Fitur Utama WordPress', icon: Sliders },
  { num: '07', chapter: 'Chapter 7', title: 'Apa yang Bisa Dibuat?', icon: Layers },
  { num: '08', chapter: 'Chapter 8', title: 'Peluang Karier & Bisnis', icon: Briefcase },
  { num: '09', chapter: 'Chapter 9', title: 'Masa Depan & Penutup', icon: Cpu },
];

interface ChapterCardProps {
  item: typeof chapters[0];
  index: number;
}

const ChapterCard: React.FC<ChapterCardProps> = ({ item, index }) => {
  const IconComponent = item.icon;
  const { isTextFinished } = useSlideAnimation();

  const hasPlayedRef = React.useRef(false);

  useEffect(() => {
    if (!isTextFinished) {
      hasPlayedRef.current = false;
      return;
    }
    if (hasPlayedRef.current) return;

    // Play point reveal sound staggered matching the entrance delay
    const timer = setTimeout(() => {
      audioManager.playBoxPointSound(index, 3, 0.45);
      hasPlayedRef.current = true;
    }, (index * 0.4) * 1000);
    return () => clearTimeout(timer);
  }, [index, isTextFinished]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isTextFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.4 }}
      className="group relative rounded-[12px] p-[1.5px] transition-all duration-300 cursor-pointer overflow-hidden text-left"
      onClick={() => audioManager.playSound('wpcc_click', 0.6)}
      onMouseEnter={() => audioManager.playSound('wpcc_click', 0.4)}
    >
      {/* Chasing Border Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div 
          className="absolute -inset-[100%] animate-[spin_3s_linear_infinite]"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, #3b82f6 320deg, #60a5fa 355deg, #ffffff 360deg)'
          }}
        />
      </div>

      <div className="relative w-full h-full z-10 backdrop-blur-xl rounded-[12px] border border-white/15 group-hover:border-blue-400/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden p-4 sm:p-5 flex items-center justify-between transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] group-hover:-translate-y-1 bg-slate-900/40 group-hover:bg-slate-900/70">
        <div className="flex items-center gap-3.5 min-w-0 pr-3">
          <div className="w-11 h-11 rounded-full bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-400 shrink-0 shadow-inner group-hover:bg-blue-500/25 group-hover:border-blue-400/60 transition-colors">
            <IconComponent className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-0.5">
              {item.chapter}
            </div>
            <div className="text-white font-bold text-sm sm:text-base md:text-lg leading-snug whitespace-normal">
              {item.title}
            </div>
          </div>
        </div>

        <div className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-700/40 group-hover:text-blue-400/30 transition-colors select-none shrink-0 ml-2">
          {item.num}
        </div>
      </div>
    </motion.div>
  );
};

export const Scene03: React.FC<SceneProps> = (props) => {
  if (!props.isActive) return null;

  return (
    <SlideAnimationProvider scene={props.scene} isActive={props.isActive}>
      <Scene03Content {...props} />
    </SlideAnimationProvider>
  );
};

const Scene03Content: React.FC<SceneProps> = ({ scene }) => {
  const { currentPhase, isTextFinished } = useSlideAnimation();

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8 md:p-12 z-10 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-7xl flex flex-col items-center text-center pointer-events-auto relative px-2 sm:px-4">
        
        {/* Glowing orb background effect behind title */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 w-[650px] sm:w-[900px] h-[240px] rounded-full bg-blue-600/10 border border-blue-500/20 blur-xl pointer-events-none -z-10" />

        {/* Title Header */}
        <div className="mb-8 md:mb-10 flex flex-col items-center">
          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-serif drop-shadow-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <TypewriterText text={scene.headline || "Hari Ini Kita Akan Belajar..."} delay={0.1} isTyping={currentPhase === 'heading'} minDuration={3.5} />
          </motion.h1>

          {/* Glowing Dots */}
          <div className="flex items-center gap-2 my-3">
            {[...Array(5)].map((_, i) => (
              <span 
                key={i} 
                className="w-[10px] h-1.5 rounded-sm bg-blue-400/80 shadow-[0_0_8px_#3b82f6] loading-wave-dot" 
                style={{ animationDelay: `${i * 0.15}s`, animationDuration: '1.5s' }}
              />
            ))}
          </div>

          <motion.div 
            className="text-slate-300 text-sm sm:text-base md:text-lg font-normal max-w-xl min-h-[1.5em]"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <TypewriterText text={scene.supportingSentence || "Perjalanan materi yang akan kita pelajari bersama."} delay={0} isTyping={currentPhase === 'description'} minDuration={4.0} />
          </motion.div>
        </div>

        {/* Grid of Chapter Cards */}
        <div className="w-full max-w-7xl flex flex-col gap-4 sm:gap-5">
          
          {/* Top Row: Chapters 1, 2, 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full">
            {chapters.slice(0, 3).map((item, index) => (
              <ChapterCard key={item.num} item={item} index={index} />
            ))}
          </div>

          {/* Middle Row: Chapters 4, 5, 6 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full">
            {chapters.slice(3, 6).map((item, index) => (
              <ChapterCard key={item.num} item={item} index={index + 3} />
            ))}
          </div>

          {/* Bottom Row: Chapters 7, 8, 9 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full">
            {chapters.slice(6, 9).map((item, index) => (
              <ChapterCard key={item.num} item={item} index={index + 6} />
            ))}
          </div>

        </div>

      </div>
    </motion.div>
  );
};
