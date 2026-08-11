import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SceneProps } from '../types';
import { Monitor, Compass, Server, Cpu, Database, Globe, ArrowRight, Sparkles, Play, CheckCircle2, Activity, Info } from 'lucide-react';
import { TypewriterText } from '../ui/TypewriterText';
import { audioManager } from '../utils/audioManager';
import { SlideAnimationProvider, useSlideAnimation } from '../ui/SlideAnimationContext';

const flowNodes = [
  { 
    id: '01', 
    name: 'Browser', 
    icon: Monitor, 
    sub: 'Client Request',
    desc: 'Pengguna mengetik alamat URL di web browser (Chrome, Safari, Edge).' ,
    tech: 'HTTP/2, SSL/TLS, GET Request'
  },
  { 
    id: '02', 
    name: 'DNS', 
    icon: Compass, 
    sub: 'Domain Name System',
    desc: 'Menerjemahkan nama domain unik menjadi alamat IP server hosting.' ,
    tech: 'DNS Lookup, A Record, Cloudflare'
  },
  { 
    id: '03', 
    name: 'Web Server', 
    icon: Server, 
    sub: 'Server Host',
    desc: 'Menerima permintaan dari DNS dan meneruskannya ke sistem website.' ,
    tech: 'Nginx / Apache, Port 443'
  },
  { 
    id: '04', 
    name: 'WordPress', 
    icon: Cpu, 
    sub: 'CMS Engine',
    desc: 'Memproses logika PHP, template tema, serta plugin pendukung website.' ,
    tech: 'PHP 8.2, Theme Engine, Hooks'
  },
  { 
    id: '05', 
    name: 'Database', 
    icon: Database, 
    sub: 'Data Storage',
    desc: 'Menyimpan teks, pengaturan, dan semua konfigurasi data website secara aman.' ,
    tech: 'MySQL / MariaDB Query'
  },
  { 
    id: '06', 
    name: 'Website', 
    icon: Globe, 
    sub: 'Render Tampilan',
    desc: 'Browser merender halaman visual utuh untuk ditampilkan kepada pengguna.' ,
    tech: 'HTML5, CSS3, DOM Ready'
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

  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  // Auto step simulation function
  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    audioManager.playSound('sphere_1', 0.8);
    
    let step = 0;
    setActiveNodeIndex(0);

    const interval = setInterval(() => {
      step++;
      if (step < flowNodes.length) {
        setActiveNodeIndex(step);
        audioManager.playBoxPointSound(step, 6, 0.5);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 800);
  };

  const handleSelectNode = (idx: number) => {
    if (isSimulating) return;
    setActiveNodeIndex(idx);
    audioManager.playSound('wpcc_click', 0.6);
  };

  const activeNode = flowNodes[activeNodeIndex];

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
        <div className="mb-3 sm:mb-5">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1.5"
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
            className="flex items-center justify-center max-w-lg mx-auto w-full wpcc-divide-container my-1.5"
          >
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-cyan-500/40" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] mx-3 sm:mx-4 inline-block animate-pulse shrink-0" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-cyan-500/40" />
          </motion.div>

          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto font-normal leading-snug wpcc-slide-desc">
            <TypewriterText text={scene.supportingSentence || "Proses kilat di balik layar setiap kali Anda membuka alamat website di internet."} showMode={descriptionShowMode} exactDuration={descriptionDuration} />
          </p>
        </div>

        {/* Interactive Control & Active Node Inspector */}
        <div className="w-full max-w-4xl mb-4 pointer-events-auto">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/30 backdrop-blur-2xl flex flex-col sm:flex-row items-center justify-between gap-3 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 flex items-center justify-center shrink-0">
                <Activity className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold tracking-wider">
                    LANGKAH #{activeNode.id} • {activeNode.sub}
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-[9px] font-bold">
                    {activeNode.tech}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-extrabold text-white">{activeNode.name}</h4>
                <p className="text-xs text-slate-300 mt-0.5">{activeNode.desc}</p>
              </div>
            </div>

            <button 
              onClick={runSimulation}
              disabled={isSimulating}
              className={`px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shrink-0 ${
                isSimulating 
                  ? 'bg-slate-800 text-slate-500 border border-white/10 cursor-not-allowed'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-105 active:scale-95'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              {isSimulating ? 'Memproses Simulasi...' : 'Mulai Simulasi Alur Web'}
            </button>
          </div>
        </div>

        {/* Horizontal Flow Diagram */}
        <div className="w-full pointer-events-auto relative">
          {/* Animated Connecting Beam (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[8%] right-[8%] -translate-y-1/2 h-1.5 bg-slate-900 -z-0 rounded-full border border-white/10">
            <motion.div 
              className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.9)]"
              animate={{ 
                width: `${((activeNodeIndex + 1) / flowNodes.length) * 100}%` 
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>

          {/* Flow Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 relative z-10 items-stretch w-full mx-auto">
            {flowNodes.map((node, idx) => {
              const isActive = idx === activeNodeIndex;
              const isPassed = idx < activeNodeIndex;
              return (
                <DiagramNodeCard 
                  key={node.id} 
                  node={node} 
                  index={idx} 
                  isActive={isActive}
                  isPassed={isPassed}
                  isTextFinished={isTextFinished} 
                  isLast={idx === flowNodes.length - 1}
                  onClick={() => handleSelectNode(idx)}
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
  isActive: boolean;
  isPassed: boolean;
  isTextFinished: boolean;
  isLast: boolean;
  onClick: () => void;
}

const DiagramNodeCard: React.FC<NodeCardProps> = ({ node, index, isActive, isPassed, isTextFinished, isLast, onClick }) => {
  const IconComponent = node.icon;

  return (
    <div className="flex flex-col items-center">
      <motion.div
        layout
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`group relative w-full h-full flex flex-col items-center justify-start text-center p-3 rounded-xl backdrop-blur-xl border transition-all duration-300 cursor-pointer ${
          isActive 
            ? 'bg-[#0e274a] border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.4)] scale-105 z-20' 
            : isPassed
            ? 'bg-[#091328]/90 border-emerald-500/40 text-emerald-300'
            : 'bg-[#091328]/80 border-cyan-500/20 hover:border-cyan-400/50'
        }`}
      >
        <div className="flex items-center justify-between w-full mb-2">
          <span className={`px-1.5 py-0.5 rounded text-[8px] font-mono font-bold ${
            isActive ? 'bg-cyan-500 text-slate-950' : 'bg-cyan-500/10 text-cyan-300'
          }`}>
            #{node.id}
          </span>
          {isPassed && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
        </div>

        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white mb-2 transition-all ${
          isActive 
            ? 'bg-gradient-to-tr from-cyan-500 to-blue-600 scale-110 shadow-[0_0_15px_rgba(34,211,238,0.8)]' 
            : 'bg-slate-800/80 border border-white/10'
        }`}>
          <IconComponent className="w-4 h-4" />
        </div>

        <h3 className={`text-xs font-bold leading-tight ${isActive ? 'text-white' : 'text-slate-200'}`}>
          {node.name}
        </h3>
        <span className="text-[8px] font-mono text-cyan-400/80 mt-0.5 line-clamp-1">
          {node.sub}
        </span>
      </motion.div>
    </div>
  );
};

