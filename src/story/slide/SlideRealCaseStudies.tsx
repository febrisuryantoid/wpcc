import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SceneProps } from '../types';
import { Globe, Building2, ShoppingBag, Newspaper, CheckCircle2, ExternalLink, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { TypewriterText } from '../ui/TypewriterText';
import { SlideAnimationProvider, useSlideAnimation } from '../ui/SlideAnimationContext';
import { audioManager } from '../utils/audioManager';

interface CaseStudyItem {
  id: string;
  name: string;
  category: 'global' | 'ecommerce' | 'media';
  domain: string;
  logoText: string;
  badge: string;
  description: string;
  stats: string;
  techHighlights: string[];
  gradient: string;
}

const caseStudiesData: CaseStudyItem[] = [
  {
    id: 'nasa',
    name: 'NASA Official Portal',
    category: 'global',
    domain: 'nasa.gov',
    logoText: '🚀 NASA',
    badge: 'U.S. Federal Government',
    description: 'Situs utama NASA bermigrasi penuh ke WordPress headless/decoupled untuk mengelola jutaan artikel, berita antariksa, dan arsip foto resolusi tinggi.',
    stats: '150M+ Pengunjung Bulanan',
    techHighlights: ['WordPress Gutenberg', 'High-Availability Cloud', 'Enterprise Security'],
    gradient: 'from-blue-600/20 to-indigo-600/20',
  },
  {
    id: 'meta',
    name: 'META Newsroom & Tech',
    category: 'global',
    domain: 'about.fb.com',
    logoText: '∞ META',
    badge: 'Tech Giant Enterprise',
    description: 'Portal berita dan dokumentasi teknik utama Meta (Facebook, Instagram, WhatsApp) mempercayakan publikasi pers globalnya pada WordPress.',
    stats: 'Multi-Language Global Scale',
    techHighlights: ['Custom Block Architecture', 'Sub-second Latency', 'CDN Edge Caching'],
    gradient: 'from-sky-600/20 to-blue-600/20',
  },
  {
    id: 'disney',
    name: 'The Walt Disney Company',
    category: 'global',
    domain: 'thewaltdisneycompany.com',
    logoText: '🏰 DISNEY',
    badge: 'Global Entertainment',
    description: 'Portal korporat resmi Disney menyajikan informasi saham, pers, dan kampanye global menggunakan kebebasan kustomisasi WordPress.',
    stats: '100% Brand Customization',
    techHighlights: ['Enterprise Multisite', 'Strict Compliance', 'Custom Theme Framework'],
    gradient: 'from-purple-600/20 to-pink-600/20',
  },
  {
    id: 'sony',
    name: 'Sony Music',
    category: 'global',
    domain: 'sonymusic.com',
    logoText: '🎵 SONY MUSIC',
    badge: 'Entertainment & Media',
    description: 'Showcase artis dan perilisan album dari label musik terbesar di dunia mengandalkan performa visual & integrasi media WordPress.',
    stats: 'Thousands of Artist Pages',
    techHighlights: ['Dynamic Media Streaming', 'Interactive Artist Hub', 'Global Localization'],
    gradient: 'from-red-600/20 to-amber-600/20',
  },
  {
    id: 'whitehouse',
    name: 'The White House',
    category: 'global',
    domain: 'whitehouse.gov',
    logoText: '🏛️ WHITE HOUSE',
    badge: 'Government & Security',
    description: 'Situs resmi Istana Kepresidenan AS membuktikan standar keamanan tertinggi, aksesibilitas WCAG, dan keandalan skema WordPress.',
    stats: 'Top Security & Accessibility',
    techHighlights: ['Section 508 Compliant', 'Hardened Security', 'Fast News Publishing'],
    gradient: 'from-cyan-600/20 to-blue-600/20',
  },
  {
    id: 'time',
    name: 'Time Magazine',
    category: 'media',
    domain: 'time.com',
    logoText: '📰 TIME.COM',
    badge: 'Global Media & Publishing',
    description: 'Salah satu majalah tertua dan terbesar di dunia menyajikan berita harian serta edisi Person of the Year kepada pembaca global.',
    stats: '50M+ Monthly Readers',
    techHighlights: ['WordPress VIP', 'Real-time Editorial Workflow', 'High Ad Revenue Integration'],
    gradient: 'from-rose-600/20 to-orange-600/20',
  },
  {
    id: 'mercedes',
    name: 'Mercedes-Benz Group',
    category: 'global',
    domain: 'mercedes-benz.com',
    logoText: '🚘 MERCEDES-BENZ',
    badge: 'Luxury Automotive',
    description: 'Brand otomotif mewah kelas dunia menggunakan WordPress untuk majalah gaya hidup digital dan showcase teknologi kendaraan masa depan.',
    stats: 'Premium High-Res Showcases',
    techHighlights: ['Interactive 3D Showrooms', 'Fluid Animations', 'Multi-region Delivery'],
    gradient: 'from-slate-600/20 to-teal-600/20',
  },
  {
    id: 'tokoonline',
    name: 'Toko Online & E-Commerce Lokal',
    category: 'ecommerce',
    domain: 'WooCommerce Indonesia',
    logoText: '🛍️ TOKO ONLINE LOKAL',
    badge: 'WooCommerce E-Commerce',
    description: 'Ribuan UMKM, brand D2C lokal, dan toko fashion Indonesia memproses miliaran rupiah transaksi harian dengan plugin WooCommerce.',
    stats: 'Bebas Biaya Komisi SaaS',
    techHighlights: ['Payment Gateway Lokal (Midtrans/Xendit)', 'Integrasi Ekspedisi (JNE/JNT/Sicepat)', 'Auto Invoice WhatsApp'],
    gradient: 'from-emerald-600/20 to-green-600/20',
  }
];

export const SlideRealCaseStudies: React.FC<SceneProps> = (props) => {
  if (!props.isActive) return null;

  return (
    <SlideAnimationProvider scene={props.scene} isActive={props.isActive}>
      <SlideRealCaseStudiesContent {...props} />
    </SlideAnimationProvider>
  );
};

const SlideRealCaseStudiesContent: React.FC<SceneProps> = ({ scene }) => {
  const { 
    headingShowMode, 
    descriptionShowMode, 
    headingDuration, 
    descriptionDuration, 
    isTextFinished 
  } = useSlideAnimation();

  const [activeFilter, setActiveFilter] = useState<'all' | 'global' | 'ecommerce' | 'media'>('all');

  const filteredCaseStudies = activeFilter === 'all' 
    ? caseStudiesData 
    : caseStudiesData.filter(item => item.category === activeFilter);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center my-auto pt-16 sm:pt-20 md:pt-24 p-3 sm:p-6 md:p-10 pb-20 sm:pb-24 z-10 pointer-events-none overflow-y-auto h-full max-h-screen w-full"
      initial={{ opacity: 0, scale: 0.96, filter: 'blur(10px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(10px)' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col justify-center items-center h-full">
        
        {/* Header */}
        <div className="text-center mb-3 sm:mb-4 flex-shrink-0 w-full">
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" /> Real-World Case Studies
          </motion.div>
          <h2 className="wpcc-h3 font-bold text-white tracking-[-0.02em] leading-[1.15] font-serif drop-shadow-2xl text-center">
            <TypewriterText text="Bukti Nyata Pengguna WordPress Global & Lokal" showMode={headingShowMode} exactDuration={headingDuration} />
          </h2>

          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex items-center justify-center max-w-md mx-auto w-full wpcc-divide-container my-1.5"
          >
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-cyan-500/40" />
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] mx-3 inline-block animate-pulse shrink-0" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-cyan-500/40" />
          </motion.div>

          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl mx-auto font-light leading-relaxed wpcc-slide-desc">
            <TypewriterText text="Dari badan antariksa NASA, Meta, The White House, hingga toko online lokal WooCommerce — bukti keandalan dan skalabilitas WordPress tanpa batas." showMode={descriptionShowMode} exactDuration={descriptionDuration} />
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-3 pointer-events-auto">
          {[
            { key: 'all', label: 'Semua Studi Kasus', icon: Globe },
            { key: 'global', label: 'Global Enterprise', icon: Building2 },
            { key: 'ecommerce', label: 'Toko Online & E-Commerce', icon: ShoppingBag },
            { key: 'media', label: 'Media & Publishing', icon: Newspaper },
          ].map((tab) => {
            const IconComponent = tab.icon;
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => {
                  audioManager.playSound('wpcc_click', 0.5);
                  setActiveFilter(tab.key as any);
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

        {/* Case Studies Grid */}
        <div className="w-full pointer-events-auto flex-1 min-h-0 flex items-center justify-center">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 w-full max-w-6xl mx-auto"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredCaseStudies.slice(0, 8).map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={isTextFinished ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 15 }}
                  exit={{ opacity: 0, scale: 0.9, y: -15 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`group relative overflow-hidden rounded-xl border border-white/10 bg-slate-950/50 backdrop-blur-xl p-3 sm:p-4 shadow-xl hover:border-cyan-400/40 hover:bg-slate-900/70 transition-all duration-300 flex flex-col justify-between`}
                >
                  {/* Subtle Gradient Glow Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none`} />

                  <div>
                    {/* Header Item */}
                    <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/10">
                      <div className="font-bold text-sm sm:text-base text-white font-mono tracking-tight flex items-center gap-1.5">
                        <span>{item.logoText}</span>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-400/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <ExternalLink className="w-2.5 h-2.5" />
                        {item.domain}
                      </span>
                    </div>

                    <div className="text-[10px] sm:text-xs font-semibold text-blue-300 mb-1 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-cyan-400" />
                      {item.badge}
                    </div>

                    <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-light mb-2 line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Highlights & Metrics Footer */}
                  <div className="mt-2 pt-2 border-t border-white/5 flex flex-col gap-1.5">
                    <div className="text-[10px] font-bold text-amber-300 bg-amber-500/10 border border-amber-400/20 px-2 py-0.5 rounded flex items-center gap-1 w-max">
                      <Zap className="w-3 h-3" /> {item.stats}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {item.techHighlights.map((tech, tIdx) => (
                        <span key={tIdx} className="text-[9px] bg-white/5 border border-white/10 text-slate-300 px-1.5 py-0.5 rounded">
                          ✓ {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
};
