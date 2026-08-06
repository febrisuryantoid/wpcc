import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { Sparkles } from 'lucide-react';
import { TypewriterText } from '../ui/TypewriterText';
import { audioManager } from '../utils/audioManager';
import { SlideAnimationProvider, useSlideAnimation } from '../ui/SlideAnimationContext';
import { getPointDetails } from '../utils/pointHelper';
import { PointCard } from '../ui/PointCard';

export const Slide06: React.FC<SceneProps> = (props) => {
  if (!props.isActive) return null;

  return (
    <SlideAnimationProvider scene={props.scene} isActive={props.isActive}>
      <Slide06Content {...props} />
    </SlideAnimationProvider>
  );
};

const Slide06Content: React.FC<SceneProps> = ({ scene }) => {
  const { 
    headingShowMode, 
    descriptionShowMode, 
    headingDuration, 
    descriptionDuration, 
    isTextFinished 
  } = useSlideAnimation();

  const hasPlayedRef = useRef<Record<number, boolean>>({});

  useEffect(() => {
    if (!isTextFinished) {
      hasPlayedRef.current = {};
      return;
    }

    // Play staggered sound effects for each of the 4 box points
    const timers = [0, 1, 2, 3].map((idx) => {
      return setTimeout(() => {
        if (!hasPlayedRef.current[idx]) {
          audioManager.playBoxPointSound(idx, 6, 0.45);
          hasPlayedRef.current[idx] = true;
        }
      }, idx * 400);
    });

    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
  }, [isTextFinished]);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-start pt-[146px] sm:pt-[100px] p-6 sm:p-10 md:p-16 pb-[80px] md:pb-[100px] z-10 pointer-events-none overflow-hidden h-full max-h-screen overflow-y-auto sm:overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center justify-center h-full">
        {/* Header */}
        <div className="mb-4 sm:mb-5 w-full flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2"
          >
            <Sparkles className="w-3.5 h-3.5" /> WordPress Foundations
          </motion.div>
          
          <h2 className="wpcc-h3 font-bold text-white tracking-[-0.02em] leading-[1.15] font-serif drop-shadow-2xl text-center mb-1.5 sm:mb-2 whitespace-normal sm:whitespace-nowrap">
            <TypewriterText text={scene.headline} showMode={headingShowMode} exactDuration={headingDuration} />
          </h2>

          {/* Divider line with glowing dot */}
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex items-center justify-center w-full max-w-md mx-auto wpcc-divide-container"
          >
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-cyan-500/40" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] mx-3 sm:mx-4 inline-block animate-pulse shrink-0" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-cyan-500/40" />
          </motion.div>

          <p className="text-xs sm:text-sm md:text-base text-slate-100 font-normal max-w-2xl mx-auto leading-relaxed text-center mb-4 sm:mb-6 drop-shadow-md wpcc-slide-desc">
            <TypewriterText text={scene.supportingSentence || ""} showMode={descriptionShowMode} exactDuration={descriptionDuration} />
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 pointer-events-auto items-stretch">
          {scene.points && scene.points.map((point, idx) => {
            const pointData = getPointDetails(point, scene.headline);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                animate={isTextFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{ duration: 0.5, delay: idx * 0.4 }}
                className="h-full flex flex-col"
              >
                <PointCard 
                  pointData={pointData}
                  index={idx}
                  url={null}
                  isCompact={false}
                  layoutType="horizontal"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
