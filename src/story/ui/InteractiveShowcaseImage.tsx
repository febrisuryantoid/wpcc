import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { audioManager } from '../utils/audioManager';
import { HelpCircle, Sparkles, AlertCircle, Info, Layers, Compass, Cpu, Settings, X } from 'lucide-react';

export type ShowcaseType = 
  | 'company-profile' 
  | 'landing-page' 
  | 'ecommerce' 
  | 'elearning' 
  | 'portfolio' 
  | 'portal-berita'
  | 'speaker-profile';

interface Hotspot {
  id: string;
  title: string;
  description: string;
  x: number; // percentage from left (0 - 100)
  y: number; // percentage from top (0 - 100)
  placement: 'top' | 'bottom' | 'left' | 'right';
  icon?: React.ComponentType<any>;
}

interface InteractiveShowcaseImageProps {
  src: string;
  alt: string;
  type: ShowcaseType;
  isActive: boolean;
}

const hotspotsData: Record<ShowcaseType, Hotspot[]> = {
  'company-profile': [
    {
      id: 'cp_header',
      title: 'Header & Navigation',
      description: 'Menu navigasi utama berisi logo perusahaan, tautan profil, layanan, dan kontak cepat untuk memudahkan pengunjung menjelajahi website.',
      x: 50,
      y: 10,
      placement: 'bottom',
      icon: Compass
    },
    {
      id: 'cp_hero',
      title: 'Hero Section',
      description: 'Bagian layar utama paling atas yang memuat headline/tagline kuat dan latar belakang visual impresif untuk menanamkan impresi awal perusahaan.',
      x: 50,
      y: 42,
      placement: 'right',
      icon: Sparkles
    },
    {
      id: 'cp_cta',
      title: 'Call to Action (CTA)',
      description: 'Tombol interaktif menonjol seperti "Hubungi Kami" atau "Mulai Sekarang" untuk langsung mengonversi minat pengunjung menjadi prospek bisnis.',
      x: 50,
      y: 75,
      placement: 'top',
      icon: Layers
    }
  ],
  'landing-page': [
    {
      id: 'lp_usp',
      title: 'Headline / USP',
      description: 'Unique Selling Point berupa penawaran mutlak yang menonjolkan solusi utama produk/layanan demi memikat hati calon pelanggan secara instan.',
      x: 30,
      y: 25,
      placement: 'right',
      icon: Sparkles
    },
    {
      id: 'lp_form',
      title: 'Lead Capture Form',
      description: 'Formulir pendaftaran strategis dengan isian ringkas untuk mempermudah calon pembeli memberikan email/nomor kontak demi pengumpulan prospek.',
      x: 75,
      y: 45,
      placement: 'left',
      icon: Cpu
    },
    {
      id: 'lp_proof',
      title: 'Social Proof / Testimoni',
      description: 'Kumpulan ulasan jujur dari pelanggan asli atau logo partner kerja guna membangun rasa percaya dan kredibilitas di mata pengunjung baru.',
      x: 50,
      y: 82,
      placement: 'top',
      icon: HelpCircle
    }
  ],
  'ecommerce': [
    {
      id: 'eco_cart',
      title: 'Keranjang Belanja & Fitur Search',
      description: 'Akses instan bagi pembeli untuk mengumpulkan produk, mencari barang secara akurat, dan menavigasi checkout dengan mulus dalam sekali klik.',
      x: 85,
      y: 12,
      placement: 'bottom',
      icon: Compass
    },
    {
      id: 'eco_grid',
      title: 'Katalog Produk Utama',
      description: 'Pajangan produk unggulan dengan visual resolusi tinggi, detail harga, label diskon, rating ulasan bintang, dan tombol pembelian cepat.',
      x: 50,
      y: 50,
      placement: 'right',
      icon: Layers
    },
    {
      id: 'eco_payment',
      title: 'Integrasi Payment Gateway',
      description: 'Sistem checkout otomatis aman yang mendukung berbagai e-wallet, transfer bank, hingga kartu kredit demi kelancaran transaksi 24 jam.',
      x: 50,
      y: 85,
      placement: 'top',
      icon: Settings
    }
  ],
  'elearning': [
    {
      id: 'el_cats',
      title: 'Katalog Kursus Terstruktur',
      description: 'Pengelompokan materi pelajaran berdasarkan bidang keahlian dan tingkat kesulitan guna mempermudah pencarian kursus yang sesuai minat.',
      x: 50,
      y: 12,
      placement: 'bottom',
      icon: Compass
    },
    {
      id: 'el_lms',
      title: 'LMS Student Portal',
      description: 'Dashboard interaktif siswa untuk melihat video materi, memantau persentase kelulusan, menjawab kuis, dan mengunduh sertifikat resmi.',
      x: 25,
      y: 45,
      placement: 'right',
      icon: Cpu
    },
    {
      id: 'el_player',
      title: 'Interactive Video Player',
      description: 'Media pemutar video pembelajaran berkualitas tinggi yang dilengkapi dengan ringkasan transkrip otomatis dan kolom tanya-jawab langsung bersama pengajar.',
      x: 75,
      y: 50,
      placement: 'left',
      icon: Layers
    }
  ],
  'portfolio': [
    {
      id: 'port_brand',
      title: 'Personal Branding Statement',
      description: 'Kalimat pengantar diri profesional yang ringkas, kuat, dan langsung menunjukkan keahlian khusus Anda beserta nilai tambah yang Anda tawarkan.',
      x: 35,
      y: 28,
      placement: 'right',
      icon: Sparkles
    },
    {
      id: 'port_showcase',
      title: 'Project Gallery',
      description: 'Kisi-kisi foto interaktif yang memajang hasil karya terbaik Anda, lengkap dengan teknologi yang dipakai dan kisah di balik kesuksesan proyek.',
      x: 50,
      y: 60,
      placement: 'top',
      icon: Layers
    },
    {
      id: 'port_contact',
      title: 'Formulir Kolaborasi & Sosial',
      description: 'Tautan langsung ke LinkedIn/GitHub beserta formulir pesan cepat untuk mempermudah calon klien atau rekruter menghubungi Anda langsung.',
      x: 50,
      y: 85,
      placement: 'top',
      icon: Settings
    }
  ],
  'portal-berita': [
    {
      id: 'news_ticker',
      title: 'Breaking News Ticker',
      description: 'Barisan teks berjalan di atas halaman yang secara real-time memuat berita darurat atau topik terhangat agar pembaca tidak tertinggal info penting.',
      x: 50,
      y: 12,
      placement: 'bottom',
      icon: AlertCircle
    },
    {
      id: 'news_grid',
      title: 'Dynamic Category Grid',
      description: 'Susunan artikel berita utama yang dikelompokkan secara dinamis berdasar subjek (Politik, Bisnis, Teknologi, Gaya Hidup) dengan tata letak koran modern.',
      x: 40,
      y: 45,
      placement: 'right',
      icon: Layers
    },
    {
      id: 'news_ads',
      title: 'Ad Banner Spaces (Monetisasi)',
      description: 'Penempatan strategis slot iklan banner komersial (Google AdSense/Sponsor lokal) untuk mengalirkan pendapatan pasif dari trafik pembaca.',
      x: 85,
      y: 45,
      placement: 'left',
      icon: Settings
    }
  ],
  'speaker-profile': [
    {
      id: 'sp_ai',
      title: 'AI Consultant Engineer',
      description: 'Keahlian dalam mengintegrasikan AI tercanggih (Generative AI, Gemini, LLM) ke dalam WordPress untuk otomatisasi konten dan fitur cerdas.',
      x: 50,
      y: 18,
      placement: 'right',
      icon: Cpu
    },
    {
      id: 'sp_design',
      title: 'Premium UI/UX Philosophy',
      description: 'Berkomitmen mendesain antarmuka web modern dengan animasi yang halus, harmoni warna visual kelas atas, dan kemudahan akses bagi pengguna.',
      x: 28,
      y: 52,
      placement: 'right',
      icon: Sparkles
    },
    {
      id: 'sp_wp',
      title: 'Enterprise WordPress Architect',
      description: 'Pengalaman 10+ tahun merancang struktur web berbasis WordPress yang super cepat, aman dari serangan siber, dan andal menampung jutaan trafik.',
      x: 72,
      y: 52,
      placement: 'left',
      icon: Settings
    }
  ]
};

export const InteractiveShowcaseImage: React.FC<InteractiveShowcaseImageProps> = ({ src, alt, type, isActive }) => {
  const [glitchPhase, setGlitchPhase] = useState<'glitching' | 'stable'>('glitching');
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [hoveredHotspot, setHoveredHotspot] = useState<string | null>(null);
  const [showHotspots, setShowHotspots] = useState(false);

  useEffect(() => {
    if (isActive) {
      setGlitchPhase('glitching');
      setShowHotspots(false);
      setActiveHotspot(null);
      
      // Glitch phase lasts for 1.8 seconds, then it unblurs and stabilizes
      const timer = setTimeout(() => {
        setGlitchPhase('stable');
        setShowHotspots(true);
      }, 1600);

      return () => clearTimeout(timer);
    }
  }, [isActive]);

  const hotspots = hotspotsData[type] || [];

  return (
    <div className="relative w-full overflow-hidden rounded-[24px] border border-white/[0.08] bg-slate-950/40 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-3xl group">
      {/* Glitch CRT Overlay effects while glitching */}
      {glitchPhase === 'glitching' && (
        <>
          {/* Cyber scanlines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,6px_100%] pointer-events-none z-30 opacity-90 animate-pulse" />
          
          {/* Horizontal glitch line */}
          <motion.div 
            className="absolute left-0 w-full h-[3px] bg-cyan-400/40 shadow-[0_0_10px_#22d3ee] z-30 pointer-events-none"
            initial={{ top: '-10%' }}
            animate={{ top: ['0%', '100%', '30%', '85%', '10%', '100%'] }}
            transition={{ duration: 1.5, ease: 'linear', repeat: Infinity }}
          />

          {/* Random glitch color flash overlays */}
          <motion.div 
            className="absolute inset-0 bg-blue-500/10 mix-blend-color-dodge pointer-events-none z-20"
            animate={{ opacity: [0, 0.3, 0, 0.1, 0, 0.4, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
          />
        </>
      )}

      {/* Main Image Container */}
      <motion.div
        className="w-full relative h-full flex items-center justify-center overflow-hidden"
        initial={{ filter: 'blur(25px) brightness(1.6)', scale: 1.05 }}
        animate={
          glitchPhase === 'glitching'
            ? {
                filter: [
                  'blur(25px) brightness(1.6) contrast(1.1)',
                  'blur(12px) brightness(1.1) contrast(1.3)',
                  'blur(18px) brightness(1.4)',
                  'blur(4px) brightness(1.0)',
                  'blur(8px) brightness(1.2)'
                ],
                scale: [1.05, 0.99, 1.03, 1.0, 1.02],
                x: [-2, 3, -3, 2, -1],
                y: [1, -2, 2, -1, 1],
              }
            : {
                filter: 'blur(0px) brightness(1.0) contrast(1.0)',
                scale: 1,
                x: 0,
                y: 0,
              }
        }
        transition={
          glitchPhase === 'glitching'
            ? { duration: 1.5, repeat: 0, ease: 'easeInOut' }
            : { duration: 0.6, ease: 'easeOut' }
        }
      >
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          className="w-full h-auto object-cover rounded-[22px] select-none pointer-events-none"
        />
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/10 pointer-events-none" />
      </motion.div>

      {/* Interactive Hotspots Overlay */}
      <AnimatePresence>
        {showHotspots && (
          <div className="absolute inset-0 z-20 pointer-events-auto">
            {hotspots.map((hotspot) => {
              const Icon = hotspot.icon || Info;
              const isSelected = activeHotspot === hotspot.id;
              const isHovered = hoveredHotspot === hotspot.id;

              return (
                <div
                  key={hotspot.id}
                  className="absolute"
                  style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                >
                  {/* Hotspot Pulsing Button */}
                  <div className="relative -translate-x-1/2 -translate-y-1/2">
                    {/* Ring Pulse */}
                    <motion.div
                      className="absolute -inset-4 rounded-full bg-blue-500/20 border border-blue-400/40 pointer-events-none"
                      animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    
                    {/* Secondary Radar Pulse */}
                    <motion.div
                      className="absolute -inset-6 rounded-full bg-cyan-400/10 border border-cyan-400/20 pointer-events-none"
                      animate={{ scale: [1, 2.2, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 2.4, delay: 0.4, repeat: Infinity, ease: 'easeInOut' }}
                    />

                    {/* Button Core */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        audioManager.playSound('wpcc_click', 0.85);
                        setActiveHotspot(isSelected ? null : hotspot.id);
                      }}
                      onMouseEnter={() => {
                        audioManager.playSound('wpcc_click', 0.3);
                        setHoveredHotspot(hotspot.id);
                      }}
                      onMouseLeave={() => setHoveredHotspot(null)}
                      className={`relative z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                        isSelected 
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-500 border-white shadow-[0_0_20px_rgba(59,130,246,0.6)] scale-110' 
                          : 'bg-slate-900/90 border-blue-400 hover:border-cyan-400 shadow-[0_4px_12px_rgba(0,0,0,0.5)] hover:scale-105'
                      }`}
                    >
                      <Icon className={`w-4 h-4 sm:w-4.5 sm:h-4.5 transition-colors ${isSelected ? 'text-white' : 'text-blue-400 hover:text-cyan-300'}`} />
                    </button>

                    {/* Pop-up Info Tooltip Card */}
                    <AnimatePresence>
                      {(isSelected || isHovered) && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8, y: hotspot.placement === 'bottom' ? 10 : -10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.8, y: hotspot.placement === 'bottom' ? 10 : -10 }}
                          transition={{ type: 'spring', damping: 15, stiffness: 200 }}
                          className={`absolute z-50 w-[240px] sm:w-[280px] p-4 sm:p-5 rounded-2xl bg-slate-900/95 border border-blue-500/30 shadow-[0_12px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl ${
                            hotspot.placement === 'top' ? 'bottom-12 left-1/2 -translate-x-1/2' :
                            hotspot.placement === 'bottom' ? 'top-12 left-1/2 -translate-x-1/2' :
                            hotspot.placement === 'left' ? 'right-12 top-1/2 -translate-y-1/2' :
                            'left-12 top-1/2 -translate-y-1/2'
                          }`}
                        >
                          {/* Pointing Arrow */}
                          <div className={`absolute w-3 h-3 bg-slate-900 border-t border-l border-blue-500/30 rotate-45 ${
                            hotspot.placement === 'top' ? 'bottom-[-6px] left-1/2 -translate-x-1/2 rotate-[225deg]' :
                            hotspot.placement === 'bottom' ? 'top-[-6px] left-1/2 -translate-x-1/2' :
                            hotspot.placement === 'left' ? 'right-[-6px] top-1/2 -translate-y-1/2 rotate-[135deg]' :
                            'left-[-6px] top-1/2 -translate-y-1/2 rotate-[-45deg]'
                          }`} />

                          <div className="flex items-start gap-3.5 relative z-10 text-left">
                            <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 shrink-0 text-blue-400 mt-0.5">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-sm font-bold text-white mb-1.5 flex items-center gap-1.5">
                                {hotspot.title}
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                              </h4>
                              <p className="text-[12px] text-slate-300 leading-relaxed font-normal">
                                {hotspot.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </AnimatePresence>

      {/* Glassmorphism Active Tooltip Overlay Layer */}
      <AnimatePresence>
        {activeHotspot && (() => {
          const selectedObj = hotspots.find(h => h.id === activeHotspot);
          if (!selectedObj) return null;
          const IconComponent = selectedObj.icon || Info;

          return (
            <motion.div
              key="active-glass-tooltip"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: 'spring', damping: 20, stiffness: 220 }}
              className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-40 p-4 sm:p-5 rounded-2xl bg-slate-950/85 border border-cyan-400/40 shadow-[0_20px_50px_rgba(0,0,0,0.9)] backdrop-blur-2xl text-white pointer-events-auto"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-cyan-400/40 text-cyan-300 shrink-0">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-cyan-400 px-2 py-0.5 rounded-md bg-cyan-950/80 border border-cyan-500/30">
                        INFO SHOWN
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    </div>
                    <h4 className="text-base sm:text-lg font-extrabold text-white mt-0.5">
                      {selectedObj.title}
                    </h4>
                  </div>
                </div>
                <button
                  onClick={() => {
                    audioManager.playSound('wpcc_click', 0.5);
                    setActiveHotspot(null);
                  }}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 mt-2.5 leading-relaxed font-normal">
                {selectedObj.description}
              </p>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      {/* Exploration instruction helper bar */}
      <motion.div
        className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 pointer-events-none px-3.5 py-1.5 rounded-full bg-slate-950/80 border border-white/10 text-[11px] font-semibold text-slate-300 tracking-wider flex items-center gap-2 backdrop-blur-md shadow-md shadow-black/40"
        initial={{ opacity: 0, y: 10 }}
        animate={showHotspots && !activeHotspot ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping shrink-0" />
        KLIK HOTSPOT UNTUK EKSPLORASI FITUR
      </motion.div>
    </div>
  );
};
