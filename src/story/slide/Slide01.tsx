import React from 'react';
import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { Calendar, BookOpen, Code2, Users, TrendingUp } from 'lucide-react';
import { SlideAnimationProvider, useSlideAnimation } from '../ui/SlideAnimationContext';
import { TypewriterText } from '../ui/TypewriterText';
import { SegmentedTypewriterText } from '../ui/SegmentedTypewriterText';

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
    descriptionDuration, 
    currentPhase 
  } = useSlideAnimation();

  const isHeadingFinished = currentPhase !== 'heading';

  const pillars = [
    { label: 'Learn', icon: BookOpen, color: 'text-blue-400', border: 'border-blue-500/30' },
    { label: 'Build', icon: Code2, color: 'text-cyan-400', border: 'border-cyan-500/30' },
    { label: 'Connect', icon: Users, color: 'text-emerald-400', border: 'border-emerald-500/30' },
    { label: 'Grow', icon: TrendingUp, color: 'text-indigo-400', border: 'border-indigo-500/30' },
  ];

  const headingSegments = [
    {
      text: "WordPress\n",
      className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-white font-serif leading-none drop-shadow-sm block mb-1 sm:mb-2"
    },
    {
      text: "Campus Connect",
      className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 font-serif leading-tight drop-shadow-[0_0_15px_rgba(34,211,238,0.25)] block"
    }
  ];

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-start justify-center pt-14 sm:pt-18 md:pt-20 px-5 sm:px-[30px] lg:px-[40px] pb-20 sm:pb-24 z-10 pointer-events-none h-full max-h-screen overflow-y-auto w-full"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="w-full max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
        
        {/* Left Column: Text & Content */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start text-left justify-center space-y-5 sm:space-y-6">
          
          {/* 1. Badge: Date */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 shadow-[0_0_20px_rgba(34,211,238,0.15)] text-cyan-300 text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-md"
          >
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span>17 SEPTEMBER 2026</span>
          </motion.div>

          {/* 2. H1 Title with Typewriter Animation */}
          <div className="space-y-1 sm:space-y-1.5 min-h-[90px] sm:min-h-[140px]">
            <SegmentedTypewriterText 
              segments={headingSegments} 
              showMode={headingShowMode} 
              delay={0.3} 
              exactDuration={headingDuration} 
            />
          </div>

          {/* 3. Subtitle Pillars: Learn • Build • Connect • Grow */}
          <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-3 py-1 min-h-[36px]">
            {pillars.map((pillar, idx) => (
              <React.Fragment key={pillar.label}>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={isHeadingFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                  transition={{ duration: 0.4, delay: 0.05 + idx * 0.1 }}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/60 border ${pillar.border} text-slate-200 text-xs sm:text-sm font-medium backdrop-blur-sm shadow-sm`}
                >
                  <pillar.icon className={`w-3.5 h-3.5 ${pillar.color}`} />
                  <span>{pillar.label}</span>
                </motion.div>
                {idx < pillars.length - 1 && (
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={isHeadingFinished ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + idx * 0.1 }}
                    className="text-cyan-500/60 font-bold text-xs sm:text-sm hidden sm:inline"
                  >
                    •
                  </motion.span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* 4. Institution / Campus Venue Label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isHeadingFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-blue-950/40 border border-blue-400/20 text-slate-200 text-xs sm:text-sm md:text-base font-semibold backdrop-blur-md"
          >
            <div className="bg-white rounded-full p-[3px] flex items-center justify-center shrink-0">
              <img src="/icon.svg" alt="UIN Sultan Maulana Hasanuddin Banten" className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
            </div>
            <span>UIN Sultan Maulana Hasanuddin Banten</span>
          </motion.div>

          {/* 5. Description with Typewriter Animation */}
          <div className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl font-light leading-relaxed wpcc-slide-desc text-left min-h-[48px]">
            <TypewriterText 
              text={scene.supportingSentence || "Mengenal WordPress, membangun website, dan membuka peluang di ekosistem open source."} 
              showMode={descriptionShowMode} 
              delay={0.75}
              exactDuration={descriptionDuration} 
            />
          </div>

        </div>

        {/* Right Column: Wapuu Mascot with Zoom-in & Floating Animation */}
        <div className="lg:col-span-5 xl:col-span-4 flex items-center justify-center relative mt-6 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center pointer-events-auto"
          >
            {/* Glowing backdrop aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-cyan-500/20 to-indigo-500/20 rounded-full filter blur-2xl opacity-75 transform scale-90" />
            
            <motion.div
              animate={{ y: [-14, 14, -14] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-[220px] sm:w-[280px] md:w-[340px] lg:w-[380px] xl:w-[440px] max-w-full drop-shadow-[0_25px_60px_rgba(34,211,238,0.25)] select-none relative z-10"
            >
              <img 
                src="/wapuu.svg" 
                alt="Wapuu WordPress Mascot" 
                className="w-full h-auto object-contain pointer-events-none filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]" 
              />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
};
