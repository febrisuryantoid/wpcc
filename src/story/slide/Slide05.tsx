import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { Globe, Briefcase, Users, Laptop, Route } from 'lucide-react';
import { WordPressLogoSVG } from '../ui/WordPressLogoSVG';
import { TypewriterText } from '../ui/TypewriterText';
import { SlideAnimationProvider, useSlideAnimation } from '../ui/SlideAnimationContext';
import { audioManager } from '../utils/audioManager';

const agendaSteps = [
  { id: '01', title: 'Introduction', icon: Globe, desc: 'Konsep & Fondasi Website', isWordPress: false },
  { id: '02', title: 'WordPress', icon: null, desc: 'Ekosistem & Sejarah', isWordPress: true },
  { id: '03', title: 'Career', icon: Briefcase, desc: 'Peluang Kerja & Industri', isWordPress: false, isHighlighted: true },
  { id: '04', title: 'Community', icon: Users, desc: 'Open Source & Kontribusi', isWordPress: false },
  { id: '05', title: 'Workshop', icon: Laptop, desc: 'Membangun Website Modern', isWordPress: false },
];

export const Slide05: React.FC<SceneProps> = (props) => {
  if (!props.isActive) return null;

  return (
    <SlideAnimationProvider scene={props.scene} isActive={props.isActive}>
      <Slide05Content {...props} />
    </SlideAnimationProvider>
  );
};

const Slide05Content: React.FC<SceneProps> = ({ scene }) => {
  const { 
    headingShowMode, 
    descriptionShowMode, 
    headingDuration, 
    descriptionDuration, 
    isTextFinished 
  } = useSlideAnimation();

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-start pt-16 sm:pt-20 md:pt-24 p-3 sm:p-8 md:p-12 pb-20 sm:pb-24 z-10 pointer-events-none overflow-y-auto sm:overflow-hidden h-full max-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center justify-center my-auto py-4">
        {/* Top Alur Pelatihan Pill */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-3"
        >
          <Route className="w-4 h-4 text-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
          <span>Alur Pelatihan</span>
        </motion.div>

        {/* Heading */}
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

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg font-normal text-slate-300 max-w-3xl text-center leading-[1.6] font-sans mx-auto mb-5 sm:mb-8 wpcc-slide-desc">
          <TypewriterText 
            text={scene.supportingSentence || "Sesi teori akan disampaikan secara ringkas sebelum dilanjutkan dengan praktik membangun website menggunakan WordPress."} 
            showMode={descriptionShowMode} 
            exactDuration={descriptionDuration} 
          />
        </p>

        {/* Horizontal Timeline Section */}
        <div className="w-full pointer-events-auto relative max-w-5xl mx-auto px-[25px]">
          
          {/* Desktop Connecting Line & Glowing Connector Nodes */}
          <div className="hidden lg:block absolute top-[48px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-blue-500/20 via-purple-500/40 to-blue-500/20 -z-10 rounded-full">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-400 to-blue-400 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"
              initial={{ width: '0%' }}
              animate={isTextFinished ? { width: '100%' } : { width: '0%' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
            
            {/* Glowing Connector Intersection Nodes (Placed perfectly between cols) */}
            <motion.div 
              className="absolute left-[20%] top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] border-2 border-slate-950 z-20"
              initial={{ scale: 0 }}
              animate={isTextFinished ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.4 }}
            />
            <motion.div 
              className="absolute left-[40%] top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-purple-400 shadow-[0_0_12px_#c084fc] border-2 border-slate-950 z-20"
              initial={{ scale: 0 }}
              animate={isTextFinished ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.8 }}
            />
            <motion.div 
              className="absolute left-[60%] top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-purple-400 shadow-[0_0_12px_#c084fc] border-2 border-slate-950 z-20"
              initial={{ scale: 0 }}
              animate={isTextFinished ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 1.2 }}
            />
            <motion.div 
              className="absolute left-[80%] top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] border-2 border-slate-950 z-20"
              initial={{ scale: 0 }}
              animate={isTextFinished ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 1.6 }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-6 relative z-10">
            {agendaSteps.map((step, idx) => (
              <TimelineStepCard 
                key={step.id}
                step={step}
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

interface StepProps {
  step: typeof agendaSteps[0];
  index: number;
  isTextFinished: boolean;
}

const TimelineStepCard: React.FC<StepProps> = ({ step, index, isTextFinished }) => {
  const IconComponent = step.icon;
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    if (!isTextFinished) {
      hasPlayedRef.current = false;
      return;
    }
    if (hasPlayedRef.current) return;

    const timer = setTimeout(() => {
      audioManager.playBoxPointSound(index, 5, 0.45);
      hasPlayedRef.current = true;
    }, index * 200);
    return () => clearTimeout(timer);
  }, [index, isTextFinished]);

  const isHigh = step.isHighlighted;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isTextFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`group relative flex flex-col text-left justify-center sm:justify-start p-2.5 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl backdrop-blur-xl transition-all duration-300 cursor-pointer overflow-hidden ${
        isHigh 
          ? 'bg-purple-950/20 border-2 border-purple-500/80 shadow-[0_0_35px_rgba(168,85,247,0.35)] hover:bg-purple-950/30 hover:shadow-[0_0_45px_rgba(168,85,247,0.5)] scale-[1.03] lg:scale-[1.04] z-20' 
          : 'bg-slate-900/40 border border-white/10 hover:border-blue-400/40 hover:bg-slate-900/60 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]'
      }`}
      onClick={() => audioManager.playSound('wpcc_click', 0.6)}
      onMouseEnter={() => audioManager.playSound('wpcc_click', 0.4)}
    >
      {/* Animated Hover Chasing Border for Normal Cards */}
      {!isHigh && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-0">
          <div 
            className="absolute -inset-[100%] animate-[spin_3s_linear_infinite]"
            style={{
              background: 'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, #3b82f6 320deg, #60a5fa 355deg, #ffffff 360deg)'
            }}
          />
        </div>
      )}

      {/* Step Badge */}
      <div className={`mb-1.5 sm:mb-2.5 px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-bold tracking-wider w-max z-20 ${
        isHigh
          ? 'bg-purple-500/20 border border-purple-400/30 text-purple-300'
          : 'bg-blue-500/10 border border-blue-400/20 text-blue-400'
      }`}>
        {step.id}
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col flex-grow text-left justify-start w-full min-w-0">
        {/* Baris 1: Ikon & Heading */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5 min-w-0">
          <div className={`w-6 h-6 sm:w-7 sm:h-7 shrink-0 rounded-lg flex items-center justify-center transition-all duration-300 ${
            isHigh 
              ? 'bg-purple-500/20 border border-purple-400/50 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.3)] group-hover:scale-110' 
              : 'bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-400/20 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover:scale-110'
          }`}>
            {step.isWordPress ? (
              <WordPressLogoSVG className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            ) : IconComponent ? (
              <IconComponent className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            ) : null}
          </div>
          <h3 className={`text-[12px] sm:text-[13px] lg:text-[12px] xl:text-[13px] font-bold transition-colors leading-tight flex-1 whitespace-nowrap overflow-visible tracking-tight [word-break:keep-all] hyphens-none ${
            isHigh ? 'text-purple-200 group-hover:text-white' : 'text-white'
          }`}>
            {step.title}
          </h3>
        </div>

        {/* Baris 2: Subheading/Desc */}
        <div className="flex flex-col text-left w-full pl-0 sm:pl-0 mt-0.5 sm:mt-1 min-w-0">
          <p className={`text-[11px] sm:text-[11px] lg:text-[10.5px] xl:text-[11px] leading-snug text-left tracking-tight [word-break:keep-all] break-words hyphens-none ${
            isHigh ? 'text-purple-200/90 font-medium' : 'text-slate-300/90 font-light sm:font-medium'
          }`}>
            {step.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
