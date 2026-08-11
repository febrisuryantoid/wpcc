import React from 'react';
import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { Calendar, MapPin } from 'lucide-react';
import { TypewriterText } from '../ui/TypewriterText';
import { SegmentedTypewriterText } from '../ui/SegmentedTypewriterText';
import { SlideAnimationProvider, useSlideAnimation } from '../ui/SlideAnimationContext';

export const Slide01: React.FC<SceneProps> = (props) => {
  if (!props.isActive) return null;

  return (
    <SlideAnimationProvider scene={props.scene} isActive={props.isActive}>
      <Slide01Content {...props} />
    </SlideAnimationProvider>
  );
};

const Slide01Content: React.FC<SceneProps> = ({ scene }) => {
  const { 
    headingShowMode, 
    descriptionShowMode, 
    headingDuration, 
    descriptionDuration 
  } = useSlideAnimation();

  // Split headline for customized layout: "WordPress" and "Campus Connect"
  const words = scene.headline.split(' ');
  const firstWord = words[0] || 'WordPress';
  const remainingWords = words.slice(1).join(' ') || 'Campus Connect';

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-start justify-start pt-16 sm:pt-12 p-4 sm:p-12 md:p-16 lg:p-24 pb-20 sm:pb-12 z-10 pointer-events-none overflow-y-auto sm:overflow-hidden h-full max-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-5xl flex flex-col items-start text-left justify-center h-full">
        {/* Date / Metadata Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-cyan-400 wpcc-badge mb-6 pointer-events-auto"
        >
          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
          <span>17 September 2026</span>
        </motion.div>

        {/* Dynamic Custom Split Headline with Single Segmented Typewriter */}
        <h1 className="wpcc-h1 mb-6 flex flex-col items-start gap-1 whitespace-pre-line">
          <SegmentedTypewriterText 
            segments={[
              { text: firstWord + "\n", className: "text-white" },
              { text: remainingWords, className: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300" }
            ]}
            showMode={headingShowMode}
            exactDuration={headingDuration}
          />
        </h1>

        {/* Key Points / Core Concepts separated by beautiful glowing dots */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center gap-y-2 text-[11px] sm:text-[14px] text-slate-200 font-medium mb-8 pointer-events-auto font-sans"
        >
          <span>Belajar</span>
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400 mx-2.5 sm:mx-3.5 shadow-[0_0_10px_#22d3ee] inline-block animate-pulse" />
          <span>Berbagi</span>
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400 mx-2.5 sm:mx-3.5 shadow-[0_0_10px_#22d3ee] inline-block animate-pulse" />
          <span>Berkarya</span>
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400 mx-2.5 sm:mx-3.5 shadow-[0_0_10px_#22d3ee] inline-block animate-pulse" />
          <span>Bersama WordPress</span>
        </motion.div>

        {/* Location Info */}
        {scene.supportingSentence && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center gap-2.5 text-[11px] sm:text-[14px] text-slate-200 font-normal pointer-events-auto font-sans wpcc-slide-desc"
          >
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 filter drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
            <span>
              <TypewriterText text={scene.supportingSentence} showMode={descriptionShowMode} exactDuration={descriptionDuration} />
            </span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
