import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { PointData } from '../utils/pointHelper';
import { audioManager } from '../utils/audioManager';
import { useSlideAnimation } from './SlideAnimationContext';

interface PointCardProps {
  pointData: PointData;
  index: number;
  url?: string | null;
  isCompact?: boolean;
}

export const PointCard: React.FC<PointCardProps> = ({
  pointData,
  index,
  url,
  isCompact = false
}) => {
  const Icon = pointData.icon;
  const { isTextFinished, sceneId } = useSlideAnimation();
  const slideSeed = parseInt(sceneId?.replace(/\D/g, '') || '0', 10);

  const hasPlayedRef = React.useRef(false);

  useEffect(() => {
    if (!isTextFinished) {
      hasPlayedRef.current = false;
      return;
    }
    if (hasPlayedRef.current) return;
    
    // Play point reveal sound with staggered delay matching its entry animation
    const revealDelay = (index * 0.4) * 1000;
    const timer = setTimeout(() => {
      audioManager.playBoxPointSound(index, slideSeed, 0.45);
      hasPlayedRef.current = true;
    }, revealDelay);
    return () => clearTimeout(timer);
  }, [index, isTextFinished, slideSeed]);

  const CardInner = (
    <div className={`relative w-full h-full z-10 backdrop-blur-xl rounded-[12px] border border-white/15 group-hover:border-blue-400/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.5)] ${
      isCompact ? 'p-3 sm:p-3.5 md:p-4' : 'p-5 sm:p-6 md:p-7'
    } flex flex-col items-center text-center transition-all duration-300 group-hover:shadow-[0_0_35px_rgba(59,130,246,0.3)] group-hover:-translate-y-1 flex-grow overflow-hidden bg-slate-900/40 group-hover:bg-slate-900/70 border-white/15 group-hover:border-cyan-400/50`}>
      
      {/* Icon Badge */}
      <div className={`${
        isCompact 
          ? 'w-10 h-10 sm:w-12 sm:h-12 mb-2 border' 
          : 'w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-5 border-2'
      } rounded-full bg-blue-500/10 border-blue-400/30 group-hover:border-blue-400 group-hover:bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-300 group-hover:scale-110 shrink-0`}>
        <Icon className={`${isCompact ? 'w-5 h-5 sm:w-6 sm:h-6' : 'w-8 h-8 sm:w-10 sm:h-10'} transition-transform duration-300`} />
      </div>

      {/* Title */}
      <h3 className={`${
        isCompact ? 'text-sm sm:text-base font-bold' : 'text-base sm:text-lg md:text-xl font-bold'
      } text-white tracking-tight leading-snug flex items-center gap-1.5 justify-center`}>
        {pointData.title}
        {url && <ExternalLink className={`${isCompact ? 'w-3.5 h-3.5' : 'w-4 h-4'} text-blue-400 opacity-60 group-hover:opacity-100 transition-opacity`} />}
      </h3>

      {/* Blue Line Divider */}
      <div className={`${
        isCompact ? 'w-6 h-0.5 my-1.5 group-hover:w-9' : 'w-8 h-1 my-2.5 sm:my-3 group-hover:w-12'
      } bg-blue-500/80 rounded-full transition-all duration-300 group-hover:bg-blue-400 shrink-0`} />

      {/* Description */}
      <p className={`${
        isCompact ? 'text-[11px] sm:text-xs leading-snug max-w-[200px]' : 'text-xs sm:text-sm leading-relaxed max-w-[240px]'
      } text-slate-300/90 font-normal mx-auto flex-grow`}>
        {pointData.description}
      </p>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={isTextFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
      transition={{ duration: 0.5, delay: index * 0.4 }}
      className="group relative rounded-[12px] p-[1.5px] transition-all duration-300 cursor-pointer overflow-hidden w-full h-full flex flex-col items-stretch"
      onClick={() => audioManager.playSound('wpcc_click', 0.6)}
      onMouseEnter={() => audioManager.playSound('wpcc_click', 0.4)}
    >
      {/* Animated Chasing Border Effect on Hover (Head chasing tail) */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-0">
        <div 
          className="absolute -inset-[100%] animate-[spin_3s_linear_infinite]"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, #3b82f6 320deg, #60a5fa 355deg, #ffffff 360deg)'
          }}
        />
      </div>

      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-stretch w-full h-full z-10 flex-grow">
          {CardInner}
        </a>
      ) : (
        CardInner
      )}
    </motion.div>
  );
};
