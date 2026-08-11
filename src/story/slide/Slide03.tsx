import React from 'react';
import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { TypewriterText } from '../ui/TypewriterText';
import { SegmentedTypewriterText } from '../ui/SegmentedTypewriterText';
import { SlideAnimationProvider, useSlideAnimation } from '../ui/SlideAnimationContext';
import { GraduationCap } from 'lucide-react';

export const Slide03: React.FC<SceneProps> = (props) => {
  if (!props.isActive) return null;

  return (
    <SlideAnimationProvider scene={props.scene} isActive={props.isActive}>
      <Slide03Content {...props} />
    </SlideAnimationProvider>
  );
};

const Slide03Content: React.FC<SceneProps> = ({ scene, isActive }) => {
  const { 
    headingShowMode, 
    descriptionShowMode, 
    headingDuration, 
    descriptionDuration 
  } = useSlideAnimation();

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-start pt-16 sm:pt-20 md:pt-24 p-3 sm:p-10 md:p-16 pb-20 sm:pb-24 z-10 pointer-events-none overflow-y-auto sm:overflow-hidden h-full max-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-full max-w-4xl flex flex-col items-center text-center justify-center h-full mt-24">
        {/* Chapter 1 Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-cyan-400 text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.15em] mb-4 pointer-events-auto shadow-[0_0_15px_rgba(59,130,246,0.15)] font-sans"
        >
          CHAPTER 1
        </motion.div>

        {/* Big Heading (Welcome to WordPress Campus Connect) with Segmented Typewriter */}
        <h2 className="wpcc-h2 font-bold tracking-[-0.02em] leading-[1.15] mb-6 text-center font-serif whitespace-normal md:whitespace-nowrap">
          <SegmentedTypewriterText
            segments={[
              { text: "Welcome to ", className: "text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]" },
              { text: "WordPress Campus Connect", className: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] whitespace-normal sm:whitespace-nowrap" }
            ]}
            showMode={headingShowMode}
            exactDuration={headingDuration}
          />
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

        {/* Supporting Sentence description box */}
        {scene.supportingSentence && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 md:mt-8 p-4 sm:p-6 rounded-2xl border border-blue-500/30 bg-blue-950/25 backdrop-blur-md max-w-3xl mx-auto shadow-[0_0_30px_rgba(59,130,246,0.15)] pointer-events-auto flex flex-col items-center justify-center text-center gap-3 sm:gap-4 w-full"
          >
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-blue-500/40 bg-blue-500/15 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)] mx-auto">
              <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <p className="wpcc-slide-desc text-xs sm:text-base md:text-lg text-slate-300 font-normal leading-[1.6] font-sans text-center m-0 w-full max-w-2xl mx-auto">
              <TypewriterText 
                text={scene.supportingSentence} 
                showMode={descriptionShowMode} 
                exactDuration={descriptionDuration}
                delay={0.8}
              />
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};