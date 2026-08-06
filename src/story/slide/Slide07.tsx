import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { Monitor, Compass, Server, Cpu, Database, Globe, ArrowRight, Sparkles } from 'lucide-react';
import { TypewriterText } from '../ui/TypewriterText';
import { audioManager } from '../utils/audioManager';
import { SlideAnimationProvider, useSlideAnimation } from '../ui/SlideAnimationContext';

const flowNodes = [
  { 
    id: '01', 
    name: 'Browser', 
    icon: Monitor, 
    sub: 'Client Request',
    desc: 'Pengguna mengetik alamat URL di web browser (Chrome, Safari, Edge).' 
  },
  { 
    id: '02', 
    name: 'DNS', 
    icon: Compass, 
    sub: 'Domain Name System',
    desc: 'Menerjemahkan nama domain unik menjadi alamat IP server hosting.' 
  },
  { 
    id: '03', 
    name: 'Web Server', 
    icon: Server, 
    sub: 'Server Host',
    desc: 'Menerima permintaan dari DNS dan meneruskannya ke sistem website.' 
  },
  { 
    id: '04', 
    name: 'WordPress', 
    icon: Cpu, 
    sub: 'CMS Engine',
    desc: 'Memproses logika PHP, template tema, serta plugin pendukung website.' 
  },
  { 
    id: '05', 
    name: 'Database', 
    icon: Database, 
    sub: 'Data Storage',
    desc: 'Menyimpan teks, pengaturan, dan semua konfigurasi data website secara aman.' 
  },
  { 
    id: '06', 
    name: 'Website', 
    icon: Globe, 
    sub: 'Render Tampilan',
    desc: 'Browser merender halaman visual utuh untuk ditampilkan kepada pengguna.' 
  },
];

export const Slide07: React.FC<SceneProps> = (props) => {
  if (!props.isActive) return null;

  return (
    <SlideAnimationProvider scene={props.scene} isActive={props.isActive}>
      <Slide07Content {...props} />
    </SlideAnimationProvider>
  );
};

const Slide07Content: React.FC<SceneProps> = ({ scene }) => {
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
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center justify-center h-full">
        {/* Header */}
        <div className="mb-4 sm:mb-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1.5 sm:mb-2"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Diagram Alur Kerja Web
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
            <TypewriterText text={scene.supportingSentence || "Proses kilat di balik layar setiap kali Anda membuka alamat website di internet."} showMode={descriptionShowMode} exactDuration={descriptionDuration} />
          </p>
        </div>

        {/* Horizontal Flow Diagram */}
        <div className="w-full pointer-events-auto relative">
          {/* Animated Connecting Beam (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] -translate-y-1/2 h-1 bg-gradient-to-r from-blue-600/30 via-cyan-400/40 to-indigo-600/30 -z-0 rounded-full">
            <motion.div 
              className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]"
              initial={{ width: '0%' }}
              animate={isTextFinished ? { width: '100%' } : { width: '0%' }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
          </div>

          {/* Flow Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4 relative z-10 items-stretch w-full max-w-[280px] sm:max-w-none mx-auto">
            {flowNodes.map((node, idx) => {
              return (
                <DiagramNodeCard 
                  key={node.id} 
                  node={node} 
                  index={idx} 
                  isTextFinished={isTextFinished} 
                  isLast={idx === flowNodes.length - 1}
                />
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface NodeCardProps {
  node: typeof flowNodes[0];
  index: number;
  isTextFinished: boolean;
  isLast: boolean;
}

const DiagramNodeCard: React.FC<NodeCardProps> = ({ node, index, isTextFinished, isLast }) => {
  const IconComponent = node.icon;
  const hasPlayedRef = React.useRef(false);

  useEffect(() => {
    if (!isTextFinished) {
      hasPlayedRef.current = false;
      return;
    }
    if (hasPlayedRef.current) return;

    const timer = setTimeout(() => {
      audioManager.playBoxPointSound(index, 5, 0.45);
      hasPlayedRef.current = true;
    }, index * 300);
    return () => clearTimeout(timer);
  }, [index, isTextFinished]);

  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={isTextFinished ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.85, y: 20 }}
        transition={{ duration: 0.5, delay: index * 0.25 }}
        className="group relative w-full h-full flex flex-row sm:flex-col items-center sm:items-start justify-start text-left py-[10px] px-[8px] sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-[#091328]/85 border border-cyan-500/20 backdrop-blur-xl hover:border-cyan-400/70 hover:bg-[#0f2240] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer gap-3 sm:gap-0"
        onClick={() => audioManager.playSound('wpcc_click', 0.6)}
        onMouseEnter={() => audioManager.playSound('wpcc_click', 0.4)}
      >
        <div className="flex flex-row sm:flex-col items-center sm:items-start gap-2 sm:gap-0 shrink-0">
          {/* Number Badge */}
          <div className="mb-0 sm:mb-3 bg-cyan-500/10 border border-cyan-400/30 px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-md text-cyan-300 text-[9px] sm:text-xs font-bold tracking-wider w-max z-20">
            {node.id}
          </div>
          <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-md sm:rounded-lg bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]">
            <IconComponent className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
          </div>
        </div>

        {/* Content Wrapper */}
        <div className="flex flex-col flex-grow text-left justify-center sm:justify-start w-full">
          <div className="flex flex-col flex-1 leading-tight sm:mt-2">
            <h3 className="wpcc-h4 font-extrabold text-white group-hover:text-cyan-300 transition-colors">
              {node.name}
            </h3>
            <span className="text-[8px] sm:text-[11px] font-semibold text-cyan-400/80 uppercase tracking-wider">
              {node.sub}
            </span>
          </div>
          
          {/* Baris 2: Subheading/Desc */}
          <div className="flex flex-col text-left w-full pl-0 sm:pl-0 mt-1 sm:mt-1.5">
            <p className="text-[13px] sm:text-xs text-slate-300/90 font-light sm:font-normal leading-relaxed text-left">
              {node.desc}
            </p>
          </div>
        </div>

        {/* Arrow connector between nodes (on desktop) */}
        {!isLast && (
          <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-cyan-400 pointer-events-none">
            <ArrowRight className="w-5 h-5 animate-pulse" />
          </div>
        )}
      </motion.div>

      {/* Arrow connector on mobile */}
      {!isLast && (
        <div className="lg:hidden my-2 text-cyan-400/60">
          <ArrowRight className="w-5 h-5 rotate-90" />
        </div>
      )}
    </div>
  );
};
