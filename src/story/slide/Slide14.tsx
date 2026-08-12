import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { DollarSign, Clock, ShieldCheck, Zap, Layers, Sparkles, Check, X, AlertCircle } from 'lucide-react';
import { TypewriterText } from '../ui/TypewriterText';
import { SlideAnimationProvider, useSlideAnimation } from '../ui/SlideAnimationContext';
import { audioManager } from '../utils/audioManager';

interface SolutionMetrics {
  name: string;
  category: string;
  badgeColor: string;
  borderColor: string;
  bgColor: string;
  initialCost: { score: number; text: string }; // 1 to 5
  timeToMarket: { score: number; text: string };
  scalability: { score: number; text: string };
  dataOwnership: { score: number; text: string };
  pros: string[];
  cons: string[];
}

const solutionsData: SolutionMetrics[] = [
  {
    name: 'WordPress (Open Source)',
    category: 'Optimal Balance',
    badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-400/30',
    borderColor: 'border-blue-500/30 hover:border-blue-400',
    bgColor: 'bg-slate-950/95 shadow-[0_0_20px_rgba(30,58,138,0.15)]',
    initialCost: { score: 5, text: 'Sangat Hemat (Free / Hemat Hosting)' },
    timeToMarket: { score: 5, text: 'Sangat Cepat (1-3 Hari)' },
    scalability: { score: 4.8, text: 'Sangat Tinggi (NASA / Meta)' },
    dataOwnership: { score: 5, text: '100% Hak Milik' },
    pros: [
      'Kepemilikan penuh: Konten, data, algoritma, & domain milik Anda 100%',
      'Multi-user: Siapa pun bisa diberi akses update konten (gambar/tulisan)',
      'Sangat mudah digunakan berkat AI & Block/Site Editor modern',
      'Bebas repot urus server & hosting jika memakai Managed Hosting'
    ],
    cons: [
      'Membutuhkan pemeliharaan berkala jika mengurus server sendiri',
      'Praktik UIN Banten: Bebas repot karena mendapat akses managed hosting WordPress.com (bebas setup/update/backup)!'
    ]
  },
  {
    name: 'Framework Custom (React/Next/Laravel)',
    category: 'Enterprise Coding',
    badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-400/30',
    borderColor: 'border-purple-500/30 hover:border-purple-400',
    bgColor: 'bg-slate-950/95 shadow-[0_0_20px_rgba(88,28,135,0.15)]',
    initialCost: { score: 1.5, text: 'Tinggi ($3,000 - $15,000+)' },
    timeToMarket: { score: 2, text: 'Lama (1-3 Bulan)' },
    scalability: { score: 5, text: 'Tak Terbatas' },
    dataOwnership: { score: 5, text: '100% Hak Milik' },
    pros: ['Kustomisasi logika 100% dari nol', 'Performa mentah sangat cepat'],
    cons: ['Biaya developer sangat mahal', 'Tidak ada dashboard admin bawaan']
  },
  {
    name: 'Closed SaaS (Shopify / Wix)',
    category: 'Proprietary Lock-in',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-400/30',
    borderColor: 'border-amber-500/30 hover:border-amber-400',
    bgColor: 'bg-slate-950/95 shadow-[0_0_20px_rgba(120,53,4,0.15)]',
    initialCost: { score: 3, text: 'Bulanan ($29 - $299+/bln)' },
    timeToMarket: { score: 4.5, text: 'Cepat (1-2 Hari)' },
    scalability: { score: 3.5, text: 'Terbatas Vendor' },
    dataOwnership: { score: 2, text: 'Terbatas (SaaS Lock-in)' },
    pros: ['Tanpa repot urus server & hosting', 'Dukungan teknis langsung dari platform'],
    cons: ['Potongan komisi transaksi tiap penjualan', 'Data & situs tidak bisa dipindah server']
  }
];

export const Slide14: React.FC<SceneProps> = (props) => {
  if (!props.isActive) return null;

  return (
    <SlideAnimationProvider scene={props.scene} isActive={props.isActive}>
      <Slide14Content {...props} />
    </SlideAnimationProvider>
  );
};

const Slide14Content: React.FC<SceneProps> = ({ scene }) => {
  const { 
    headingShowMode, 
    descriptionShowMode, 
    headingDuration, 
    descriptionDuration, 
    isTextFinished 
  } = useSlideAnimation();

  const [activeMetric, setActiveMetric] = useState<'all' | 'cost' | 'speed' | 'ownership'>('all');

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center my-auto pt-14 sm:pt-18 md:pt-20 px-5 sm:px-[30px] lg:px-[40px] pb-20 sm:pb-24 z-10 pointer-events-none overflow-y-auto h-full max-h-screen w-full"
      initial={{ opacity: 0, scale: 0.96, filter: 'blur(10px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(10px)' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="w-full max-w-[1800px] mx-auto flex flex-col justify-center items-center h-full">
        
        {/* Header */}
        <div className="text-center mb-3 sm:mb-4 flex-shrink-0 w-full">
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" /> Comparative Matrix
          </motion.div>
          <h2 className="wpcc-h3 font-bold text-white tracking-[-0.02em] leading-[1.15] font-serif drop-shadow-sm text-center whitespace-normal md:whitespace-nowrap">
            <TypewriterText text="Perbandingan Cost, Time & Effort" showMode={headingShowMode} exactDuration={headingDuration} />
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl mx-auto font-light leading-relaxed wpcc-slide-desc my-1.5">
            <TypewriterText text="Analisis rasional kenapa WordPress menjadi pilihan nomor 1 bagi pebisnis & pembuat web: efisiensi biaya luar biasa, pengerjaan cepat, dan kepemilikan data 100% utuh." showMode={descriptionShowMode} exactDuration={descriptionDuration} />
          </p>

          {/* Divider line appears AFTER description finishes typing */}
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isTextFinished ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center justify-center max-w-md mx-auto w-full wpcc-divide-container my-1.5"
          >
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-cyan-500/40" />
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] mx-3 inline-block animate-pulse shrink-0" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-cyan-500/40" />
          </motion.div>
        </div>

        {/* Metric Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-[24px] pointer-events-auto">
          {[
            { key: 'all', label: 'Semua Matriks', icon: Layers },
            { key: 'cost', label: 'Efisiensi Biaya', icon: DollarSign },
            { key: 'speed', label: 'Waktu Pembuatan', icon: Clock },
            { key: 'ownership', label: 'Skalabilitas & Data', icon: ShieldCheck },
          ].map((tab) => {
            const IconComponent = tab.icon;
            const isActive = activeMetric === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => {
                  audioManager.playSound('wpcc_click', 0.5);
                  setActiveMetric(tab.key as any);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.2 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)] border border-blue-400'
                    : 'bg-slate-900/60 text-slate-300 hover:text-white hover:bg-slate-800/80 border border-white/10'
                }`}
              >
                <IconComponent className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 3 Column Matrix Cards */}
        <div className="w-full pointer-events-auto flex-1 min-h-0 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 w-full max-w-6xl mx-auto">
            {solutionsData.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isTextFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`relative overflow-hidden rounded-2xl border ${item.borderColor} ${item.bgColor} backdrop-blur-xl p-4 shadow-2xl flex flex-col justify-between transition-all duration-300 group`}
              >
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/10 gap-2">
                    <h3 className="font-bold text-sm sm:text-base text-white tracking-tight whitespace-nowrap">
                      {item.name}
                    </h3>
                    <span className={`text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full border whitespace-nowrap ${item.badgeColor}`}>
                      {item.category}
                    </span>
                  </div>

                  {/* Progress / Score Bars */}
                  <div className="space-y-2.5 my-3">
                    {/* Biaya Bar */}
                    <div className={`transition-all duration-300 ${activeMetric === 'all' || activeMetric === 'cost' ? 'opacity-100 scale-100' : 'opacity-20 scale-[0.97]'}`}>
                      <div className="flex justify-between items-center text-[10px] sm:text-[11px] mb-1 gap-2">
                        <span className="text-slate-300 flex items-center gap-1 whitespace-nowrap truncate">
                          <DollarSign className="w-3 h-3 text-amber-400 shrink-0" /> Hemat Biaya
                        </span>
                        <span className="font-mono text-[10px] sm:text-xs font-bold text-amber-300 whitespace-nowrap text-right">{item.initialCost.text}</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-950/80 rounded-full overflow-hidden border border-white/5 relative">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full relative overflow-hidden"
                          initial={{ width: '0%' }}
                          animate={isTextFinished ? { width: `${(item.initialCost.score / 5) * 100}%` } : { width: '0%' }}
                          transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer-sweep" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Waktu Pembuatan Bar */}
                    <div className={`transition-all duration-300 ${activeMetric === 'all' || activeMetric === 'speed' ? 'opacity-100 scale-100' : 'opacity-20 scale-[0.97]'}`}>
                      <div className="flex justify-between items-center text-[10px] sm:text-[11px] mb-1 gap-2">
                        <span className="text-slate-300 flex items-center gap-1 whitespace-nowrap truncate">
                          <Clock className="w-3 h-3 text-cyan-400 shrink-0" /> Kecepatan Rilis
                        </span>
                        <span className="font-mono text-[10px] sm:text-xs font-bold text-cyan-300 whitespace-nowrap text-right">{item.timeToMarket.text}</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-950/80 rounded-full overflow-hidden border border-white/5 relative">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full relative overflow-hidden"
                          initial={{ width: '0%' }}
                          animate={isTextFinished ? { width: `${(item.timeToMarket.score / 5) * 100}%` } : { width: '0%' }}
                          transition={{ duration: 1, delay: 0.3 + idx * 0.1 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer-sweep" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Kepemilikan Data Bar */}
                    <div className={`transition-all duration-300 ${activeMetric === 'all' || activeMetric === 'ownership' ? 'opacity-100 scale-100' : 'opacity-20 scale-[0.97]'}`}>
                      <div className="flex justify-between items-center text-[10px] sm:text-[11px] mb-1 gap-2">
                        <span className="text-slate-300 flex items-center gap-1 whitespace-nowrap truncate">
                          <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" /> Hak Milik & Kontrol
                        </span>
                        <span className="font-mono text-[10px] sm:text-xs font-bold text-emerald-300 whitespace-nowrap text-right">{item.dataOwnership.text}</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-950/80 rounded-full overflow-hidden border border-white/5 relative">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-300 rounded-full relative overflow-hidden"
                          initial={{ width: '0%' }}
                          animate={isTextFinished ? { width: `${(item.dataOwnership.score / 5) * 100}%` } : { width: '0%' }}
                          transition={{ duration: 1, delay: 0.4 + idx * 0.1 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer-sweep" />
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Pros List */}
                  <div className="mt-3 pt-2 border-t border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold tracking-wider block mb-1">Keunggulan Utama</span>
                    {item.pros.map((pro, pIdx) => (
                      <div key={pIdx} className="text-[11px] text-slate-200 flex items-start gap-1.5 leading-tight">
                        <Check className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cons List */}
                <div className="mt-2 pt-2 border-t border-white/5 space-y-1">
                  <span className="text-[10px] font-mono text-rose-400 uppercase font-bold tracking-wider block mb-1">Catatan Pertimbangan</span>
                  {item.cons.map((con, cIdx) => (
                    <div key={cIdx} className="text-[11px] text-slate-300 flex items-start gap-1.5 leading-tight">
                      <AlertCircle className="w-3 h-3 text-rose-400 shrink-0 mt-0.5" />
                      <span>{con}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
};
