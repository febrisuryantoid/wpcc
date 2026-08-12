import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { PointData } from '../utils/pointHelper';
import { audioManager } from '../utils/audioManager';
import { useSlideAnimation } from '../ui/SlideAnimationContext';

export interface BoxPointProps {
  pointData: PointData;
  index: number;
  url?: string | null;
  isCompact?: boolean;
  layoutType?: 'vertical' | 'horizontal';
}

/**
 * Boxpoint Style Component
 * Folder: src/story/style/boxpoint.tsx
 * Used for displaying structured bullet point cards across presentation slides.
 */
export const BoxPoint: React.FC<BoxPointProps> = ({
  pointData,
  index,
  url,
  isCompact = false,
  layoutType = 'vertical'
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

  const isHorizontal = layoutType === 'horizontal';

  // Calculate content volume to determine desktop padding
  const contentLength = (pointData.title?.length || 0) + (pointData.description?.length || 0);
  const isHeavyContent = contentLength > 80 || isCompact;

  // Desktop padding: 15px top/right/left & 5px bottom if lots of content, 20px top/right/left & 8px bottom if little content
  const desktopPaddingClass = isHeavyContent
    ? 'sm:pt-[15px] sm:px-[15px] sm:pb-[5px]'
    : 'sm:pt-[20px] sm:px-[20px] sm:pb-[8px]';

  const CardInner = (
    <div className={`relative w-full h-full z-10 backdrop-blur-2xl wpcc-card border-white/20 group-hover:border-blue-400/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_12px_40px_rgba(0,0,0,0.7)] flex ${isHorizontal ? 'flex-row items-center gap-4 landscape:gap-6' : 'flex-col justify-between'} transition-all duration-300 group-hover:shadow-[0_0_35px_rgba(59,130,246,0.35)] group-hover:-translate-y-1 overflow-hidden bg-slate-950/85 group-hover:bg-slate-900/95 group-hover:border-cyan-400/60 flex-1 ${desktopPaddingClass}`}>
      
      {/* Content Wrapper */}
      <div className="flex flex-col flex-grow text-left items-start justify-start w-full min-w-0">
        {/* Baris 1: Ikon & Heading */}
        <div className={`flex items-start sm:items-center ${isHorizontal ? "gap-2 sm:gap-4" : "gap-2 sm:gap-3 mb-1 sm:mb-2"}`}>
          {/* Icon Badge */}
          <div className={`${isHorizontal ? 'w-8 h-8 sm:w-12 sm:h-12' : 'w-7 h-7 sm:w-10 sm:h-10'} shrink-0 rounded-lg bg-blue-500/15 border-2 border-blue-400/40 group-hover:border-blue-400 group-hover:bg-blue-500/25 flex items-center justify-center text-blue-300 group-hover:text-blue-200 shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300 group-hover:scale-110`}>
            <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 transition-transform duration-300" />
          </div>
          
          {/* Title */}
          <h3 className="wpcc-h4 font-bold text-white tracking-tight flex items-center gap-1.5 flex-1 leading-tight w-full break-normal [word-break:keep-all] text-left">
            <span className="text-left text-xs sm:text-base [word-break:keep-all] font-semibold text-white drop-shadow-sm">{pointData.title}</span>
            {url && <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 opacity-80 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5 sm:mt-0" />}
          </h3>
        </div>

        {/* Baris 2: Subheading/Description */}
        <div className="flex flex-col text-left w-full pl-0 sm:pl-0 mt-1 sm:mt-1.5">
          <p className="wpcc-body-normal text-slate-100/95 text-[12px] sm:text-sm leading-relaxed text-left break-normal [word-break:keep-all] hyphens-none font-normal">
            {pointData.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={isTextFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
      transition={{ duration: 0.5, delay: index * 0.4 }}
      className="group relative rounded-[12px] p-[1.5px] transition-all duration-300 cursor-pointer overflow-hidden w-full h-full flex flex-col items-stretch flex-1"
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

// Aliases for compatibility
export const BoxPointCard = BoxPoint;
export const PointCard = BoxPoint;
