import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { MapPin, Compass, Home, Monitor, Sparkles } from 'lucide-react';
import { TypewriterText } from '../ui/TypewriterText';
import { audioManager } from '../utils/audioManager';
import { SlideAnimationProvider, useSlideAnimation } from '../ui/SlideAnimationContext';

const analogyCards = [
  {
    title: 'Domain',
    subtitle: 'Alamat Rumah',
    desc: 'Alamat rumah unik yang ingin dituju oleh pengunjung.',
    icon: MapPin,
    gradient: 'from-blue-600 to-cyan-600',
    borderColor: 'border-blue-500/30'
  },
  {
    title: 'DNS',
    subtitle: 'Petunjuk Arah',
    desc: 'Sistem yang menerjemahkan nama domain ke alamat IP server.',
    icon: Compass,
    gradient: 'from-purple-600 to-indigo-600',
    borderColor: 'border-purple-500/30'
  },
  {
    title: 'Hosting',
    subtitle: 'Bangunan Rumah',
    desc: 'Server tempat menyimpan seluruh file dan database website.',
    icon: Home,
    gradient: 'from-amber-600 to-orange-600',
    borderColor: 'border-amber-500/30'
  },
  {
    title: 'Website',
    subtitle: 'Isi Rumah',
    desc: 'Halaman visual dan konten yang dapat dilihat oleh pengunjung.',
    icon: Monitor,
    gradient: 'from-emerald-600 to-teal-600',
    borderColor: 'border-emerald-500/30'
  }
];

export const Slide08: React.FC<SceneProps> = (props) => {
  if (!props.isActive) return null;

  return (
    <SlideAnimationProvider scene={props.scene} isActive={props.isActive}>
      <Slide08Content {...props} />
    </SlideAnimationProvider>
  );
};

const Slide08Content: React.FC<SceneProps> = ({ scene }) => {
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
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center justify-center h-full">
        {/* Header */}
        <div className="mb-4 sm:mb-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1.5 sm:mb-2"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Konsep Sederhana
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
            <TypewriterText text={scene.supportingSentence || "Perumpamaan intuitif untuk memahami bagaimana elemen-elemen web saling melengkapi."} showMode={descriptionShowMode} exactDuration={descriptionDuration} />
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 pointer-events-auto">
          {analogyCards.map((card, idx) => (
            <AnalogyCard 
              key={card.title} 
              card={card} 
              index={idx} 
              isTextFinished={isTextFinished} 
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

interface AnalogyCardProps {
  card: typeof analogyCards[0];
  index: number;
  isTextFinished: boolean;
}

const AnalogyCard: React.FC<AnalogyCardProps> = ({ card, index, isTextFinished }) => {
  const IconComp = card.icon;
  const hasPlayedRef = React.useRef(false);

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
      initial={{ opacity: 0, y: 30 }}
      animate={isTextFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`group relative flex flex-col p-[6px_6px_4px_6px] sm:pt-[10px] sm:pr-[10px] sm:pb-[5px] sm:pl-[10px] rounded-2xl bg-[#091328]/90 border ${card.borderColor} backdrop-blur-xl hover:border-white/40 hover:bg-[#0e1d3d] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer text-left`}
      onClick={() => audioManager.playSound('wpcc_click', 0.6)}
      onMouseEnter={() => audioManager.playSound('wpcc_click', 0.4)}
    >
      {/* Subtitle Badge (Desktop) */}
      <div className="hidden sm:block mb-3 bg-blue-500/10 border border-blue-400/20 px-2 py-0.5 rounded-md text-blue-400 text-xs font-bold font-sans tracking-wider w-max z-20">
        {card.subtitle}
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-col flex-grow text-left justify-start w-full">
        {/* Baris 1: Ikon & Heading */}
        <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3">
          <div className={`w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-lg bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
            <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="flex flex-row items-center gap-2 flex-1 flex-wrap">
            <h3 className="font-bold text-white group-hover:text-cyan-300 transition-colors wpcc-h4 leading-tight">
              {card.title}
            </h3>
            {/* Subtitle Badge (Mobile) */}
            <div className="sm:hidden bg-blue-500/10 border border-blue-400/20 px-1.5 py-0.5 rounded-md text-blue-400 text-[9px] font-bold font-sans tracking-wider w-max z-20">
              {card.subtitle}
            </div>
          </div>
        </div>
        
        {/* Baris 2: Subheading/Desc */}
        <div className="flex flex-col text-left w-full pl-0 sm:pl-0 mt-1 sm:mt-1.5">
          <p className="text-[13px] sm:text-sm text-slate-300/90 font-light sm:font-medium leading-relaxed text-left">
            {card.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
