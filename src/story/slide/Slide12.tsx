import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { Sparkles, Check, X, Globe, Sliders, DollarSign, Database } from 'lucide-react';
import { TypewriterText } from '../ui/TypewriterText';
import { audioManager } from '../utils/audioManager';
import { SlideAnimationProvider, useSlideAnimation } from '../ui/SlideAnimationContext';

export const Slide12: React.FC<SceneProps> = (props) => {
  if (!props.isActive) return null;

  return (
    <SlideAnimationProvider scene={props.scene} isActive={props.isActive}>
      <Slide12Content {...props} />
    </SlideAnimationProvider>
  );
};

interface ComparisonRow {
  aspect: string;
  icon: any;
  comText: string;
  comIsAdvantage: boolean;
  orgText: string;
  orgIsAdvantage: boolean;
}

const comparisonRows: ComparisonRow[] = [
  {
    aspect: "Hosting & Setup",
    icon: Globe,
    comText: "Terkelola Sepenuhnya (Hosting, SSL, & keamanan dikelola otomatis oleh platform)",
    comIsAdvantage: true,
    orgText: "Self-Hosted Mandiri (Anda menyewa web hosting, domain, & instalasi sendiri)",
    orgIsAdvantage: false,
  },
  {
    aspect: "Plugin & Tema",
    icon: Sliders,
    comText: "Terkurasi & Dibatasi (Fitur bawaan siap pakai; plugin kustom butuh paket Business)",
    comIsAdvantage: false,
    orgText: "Akses Bebas 100% (Bebas pasang 59.000+ plugin, tema kustom, & edit kode)",
    orgIsAdvantage: true,
  },
  {
    aspect: "Pemeliharaan",
    icon: Database,
    comText: "Otomatis & Bebas Repot (Update versi, pemindaian malware, & backup diurus sistem)",
    comIsAdvantage: true,
    orgText: "Tanggung Jawab Mandiri (Pemilik situs wajib mengelola update & backup sendiri)",
    orgIsAdvantage: false,
  },
  {
    aspect: "Monetisasi & Kontrol",
    icon: DollarSign,
    comText: "Aturan Layanan (Fitur iklan & toko online terikat paket langganan yang dipilih)",
    comIsAdvantage: false,
    orgText: "Kebebasan Komersial (100% pendapatan iklan & e-commerce milik Anda penuh)",
    orgIsAdvantage: true,
  }
];

const Slide12Content: React.FC<SceneProps> = ({ scene }) => {
  const { 
    headingShowMode, 
    descriptionShowMode, 
    headingDuration, 
    descriptionDuration, 
    isTextFinished 
  } = useSlideAnimation();

  const playedRowsRef = useRef<Record<number, boolean>>({});

  useEffect(() => {
    if (!isTextFinished) {
      playedRowsRef.current = {};
      return;
    }

    // Play staggered sound effects as each of the 4 table rows appears
    const timers = comparisonRows.map((_, idx) => {
      // Each row appears after the table frame loads (table frame delay is 0.2s, rows start at 0.6s)
      return setTimeout(() => {
        if (!playedRowsRef.current[idx]) {
          audioManager.playBoxPointSound(idx, comparisonRows.length, 0.4);
          playedRowsRef.current[idx] = true;
        }
      }, 600 + idx * 450);
    });

    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
  }, [isTextFinished]);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-start pt-[146px] sm:pt-[100px] p-4 sm:p-8 px-6 sm:px-12 pb-[80px] md:pb-[90px] z-10 pointer-events-none overflow-hidden h-full max-h-screen overflow-y-auto sm:overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center h-full">
        
        {/* Header */}
        <div className="mb-4 sm:mb-5 w-full flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1.5 sm:mb-2"
          >
            <Sparkles className="w-3.5 h-3.5" /> Platform Comparison
          </motion.div>
          
          <h2 className="wpcc-h3 font-bold text-white tracking-[-0.02em] leading-[1.15] font-serif drop-shadow-2xl text-center mb-1.5 sm:mb-2 whitespace-normal sm:whitespace-nowrap">
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

          <p className="text-xs sm:text-sm md:text-base text-slate-100 font-normal max-w-2xl mx-auto leading-relaxed text-center mb-4 sm:mb-6 wpcc-slide-desc">
            <TypewriterText text={scene.supportingSentence || ""} showMode={descriptionShowMode} exactDuration={descriptionDuration} />
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="w-full flex-1 flex flex-col justify-center max-h-[62vh] min-h-0 pointer-events-auto">
          {/* Table Outline/Bagan (Fades in first) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={isTextFinished ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.98, y: 15 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="w-full overflow-hidden rounded-2xl bg-slate-950/40 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col min-h-0"
          >
            {/* Table Header Row */}
            <div className="grid grid-cols-2 sm:grid-cols-[1.1fr_2fr_2fr] gap-2 sm:gap-3 bg-white/5 border-b border-white/10 p-2 sm:p-3 items-center font-bold text-white text-xs sm:text-sm uppercase tracking-wider">
              <div className="hidden sm:block text-left pl-2 text-slate-400">Aspek</div>
              <div className="flex items-center gap-1.5 justify-center bg-blue-500/10 py-1 px-2.5 rounded-lg border border-blue-500/20 text-blue-300 w-full">
                <span>WordPress.com</span>
                <span className="hidden sm:inline text-[9px] bg-blue-500/20 px-1.5 py-0.5 rounded text-white font-mono uppercase tracking-normal">SaaS</span>
              </div>
              <div className="flex items-center gap-1.5 justify-center bg-indigo-500/10 py-1 px-2.5 rounded-lg border border-indigo-500/20 text-indigo-300 w-full">
                <span>WordPress.org</span>
                <span className="hidden sm:inline text-[9px] bg-indigo-500/20 px-1.5 py-0.5 rounded text-white font-mono uppercase tracking-normal">Self-Host</span>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-white/5 overflow-hidden flex-1 flex flex-col justify-between">
              {comparisonRows.map((row, idx) => {
                const IconComponent = row.icon;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isTextFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                    transition={{ duration: 0.5, delay: 0.6 + idx * 0.45 }}
                    className="grid grid-cols-2 sm:grid-cols-[1.1fr_2fr_2fr] gap-2 sm:gap-3 p-2 sm:p-3 items-center hover:bg-white/[0.02] transition-colors duration-200"
                  >
                    {/* Column 1: Aspect Name */}
                    <div className="hidden sm:flex items-center gap-1.5 pl-2 min-w-0">
                      <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <span className="wpcc-h4 font-semibold text-white leading-tight truncate">{row.aspect}</span>
                    </div>

                    {/* Column 2: WordPress.com */}
                    <div className="px-2.5 py-1.5 rounded-xl bg-slate-900/30 border border-white/[0.03] flex items-center gap-1.5 w-full min-h-[36px] sm:min-h-[44px]">
                      <div className={`flex-shrink-0 w-4.5 h-4.5 rounded-full flex items-center justify-center ${row.comIsAdvantage ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_8px_rgba(16,185,129,0.2)]' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}`}>
                        {row.comIsAdvantage ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                      </div>
                      <span className="text-[10px] sm:text-xs md:text-sm text-slate-200 leading-snug">{row.comText}</span>
                    </div>

                    {/* Column 3: WordPress.org */}
                    <div className="px-2.5 py-1.5 rounded-xl bg-slate-900/30 border border-white/[0.03] flex items-center gap-1.5 w-full min-h-[36px] sm:min-h-[44px]">
                      <div className={`flex-shrink-0 w-4.5 h-4.5 rounded-full flex items-center justify-center ${row.orgIsAdvantage ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_8px_rgba(16,185,129,0.2)]' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}`}>
                        {row.orgIsAdvantage ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                      </div>
                      <span className="text-[10px] sm:text-xs md:text-sm text-slate-200 leading-snug">{row.orgText}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
};
