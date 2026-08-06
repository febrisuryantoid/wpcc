import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { Monitor, LayoutGrid, Laptop, Sparkles } from 'lucide-react';
import { WordPressLogoSVG } from '../ui/WordPressLogoSVG';
import { TypewriterText } from '../ui/TypewriterText';
import { SlideAnimationProvider, useSlideAnimation } from '../ui/SlideAnimationContext';
import { audioManager } from '../utils/audioManager';

const objectives = [
  {
    id: '01',
    title: 'Website & Content Management System',
    desc: 'Konsep dasar kerja web dan pengelolaan konten.',
    icon: Monitor,
  },
  {
    id: '02',
    title: 'WordPress',
    desc: 'Sejarah, market share, dan ekosistem open-source.',
    icon: null, // WordPressLogoSVG
  },
  {
    id: '03',
    title: 'Modern WordPress',
    desc: 'Arsitektur blok, Gutenberg, dan Site Editor terbaru.',
    icon: LayoutGrid,
  },
  {
    id: '04',
    title: 'Praktik Langsung',
    desc: 'Praktik langsung membuat halaman website profesional.',
    icon: Laptop,
  },
];

export const Slide04: React.FC<SceneProps> = (props) => {
  if (!props.isActive) return null;

  return (
    <SlideAnimationProvider scene={props.scene} isActive={props.isActive}>
      <Slide04Content {...props} />
    </SlideAnimationProvider>
  );
};

const Slide04Content: React.FC<SceneProps> = ({ scene }) => {
  const { 
    headingShowMode, 
    descriptionShowMode, 
    headingDuration, 
    descriptionDuration, 
    isTextFinished 
  } = useSlideAnimation();

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-start pt-[146px] sm:pt-[100px] p-6 sm:p-10 md:p-16 z-10 pointer-events-none overflow-hidden h-full max-h-screen overflow-y-auto sm:overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center h-full">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 w-full">
          <h2 className="wpcc-h3 font-bold text-white mb-2 drop-shadow-2xl font-serif text-center max-w-4xl mx-auto leading-[1.15] tracking-[-0.02em] whitespace-normal sm:whitespace-nowrap">
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

          <p className="text-sm sm:text-base md:text-lg font-normal text-slate-300 max-w-3xl text-center leading-[1.6] font-sans mx-auto wpcc-slide-desc">
            <TypewriterText text={scene.supportingSentence || ""} showMode={descriptionShowMode} exactDuration={descriptionDuration} />
          </p>
        </div>

        {/* 2x2 Grid Container */}
        <div className="w-full pointer-events-auto mt-4 sm:mt-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-6 items-stretch">
            {objectives.map((obj, idx) => (
              <ObjectiveCard 
                key={obj.id}
                obj={obj}
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

interface ObjectiveCardProps {
  obj: typeof objectives[0];
  index: number;
  isTextFinished: boolean;
}

const ObjectiveCard: React.FC<ObjectiveCardProps> = ({ obj, index, isTextFinished }) => {
  const IconComponent = obj.icon;
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    if (!isTextFinished) {
      hasPlayedRef.current = false;
      return;
    }
    if (hasPlayedRef.current) return;

    const timer = setTimeout(() => {
      audioManager.playBoxPointSound(index, 4, 0.45);
      hasPlayedRef.current = true;
    }, index * 250);
    return () => clearTimeout(timer);
  }, [index, isTextFinished]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={isTextFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative rounded-2xl p-[1.5px] bg-slate-900/40 border border-white/10 hover:border-blue-400/50 hover:bg-slate-900/60 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-full"
      onClick={() => audioManager.playSound('wpcc_click', 0.6)}
      onMouseEnter={() => audioManager.playSound('wpcc_click', 0.4)}
    >
      {/* Hover Chasing Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-0">
        <div 
          className="absolute -inset-[100%] animate-[spin_3s_linear_infinite]"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, #3b82f6 320deg, #60a5fa 355deg, #ffffff 360deg)'
          }}
        />
      </div>

      {/* Card Inner */}
      <div className="relative w-full h-full z-10 py-[10px] px-[8px] sm:p-5 md:p-6 flex flex-col justify-between flex-1">
        
        {/* Number Badge */}
        <div className="mb-2 sm:mb-3 bg-blue-500/10 border border-blue-400/20 px-2 py-0.5 rounded-md text-blue-400 text-[10px] sm:text-xs font-bold font-sans tracking-wider w-max z-20">
          {obj.id}
        </div>
        
        {/* Content Wrapper */}
        <div className="flex flex-col flex-grow text-left justify-start">
          {/* Baris 1: Ikon & Heading */}
          <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-lg bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 group-hover:border-blue-400 group-hover:text-blue-300 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover:scale-110">
              {IconComponent ? (
                <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <WordPressLogoSVG className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </div>
            <h3 className="wpcc-h4 font-bold text-white tracking-tight leading-tight flex-1">
              {obj.title}
            </h3>
          </div>
          
          {/* Baris 2: Subheading/Desc */}
          <div className="flex flex-col text-left w-full pl-0 sm:pl-0 mt-1 sm:mt-1.5">
            <p className="text-[13px] sm:text-sm text-slate-300/90 font-light sm:font-medium leading-relaxed text-left">
              {obj.desc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
