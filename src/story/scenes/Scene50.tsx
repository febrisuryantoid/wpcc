import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SceneProps } from '../types';
import { SceneLayout } from '../components/SceneLayout';
import { 
  ShoppingBag, Newspaper, Building2, Palette, GraduationCap, 
  HeartPulse, Home, Utensils, Plane, Heart, Tv, Cpu, X, Info
} from 'lucide-react';
import { WPIcon } from '../utils/pointHelper';
import { audioManager } from '../utils/audioManager';

interface IndustryBranch {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
  glowColor: string;
  angle: number; // Angle in degrees around the center
  summary: string;
}

const industries: IndustryBranch[] = [
  { id: '1', label: 'E-Commerce', icon: ShoppingBag, color: '#10B981', glowColor: 'rgba(16, 185, 129, 0.7)', angle: 270, summary: 'Toko online interaktif dengan katalog produk, keranjang belanja, checkout otomatis, dan integrasi payment gateway 24/7.' }, // Top
  { id: '2', label: 'Portal Berita', icon: Newspaper, color: '#3B82F6', glowColor: 'rgba(59, 130, 246, 0.7)', angle: 300, summary: 'Media berita digital berkecepatan tinggi dengan breaking news ticker, manajemen redaksi, dan slot monetisasi iklan.' },
  { id: '3', label: 'Corporate', icon: Building2, color: '#8B5CF6', glowColor: 'rgba(139, 92, 246, 0.7)', angle: 330, summary: 'Website profil perusahaan profesional untuk membangun citra merek, mengenalkan produk/layanan, dan menangkap prospek B2B.' },
  { id: '4', label: 'Portofolio', icon: Palette, color: '#EC4899', glowColor: 'rgba(236, 72, 153, 0.7)', angle: 0, summary: 'Showcase karya dan keahlian profesional interaktif untuk menarik klien korporat, rekruter, dan mitra bisnis.' },   // Right
  { id: '5', label: 'Pendidikan', icon: GraduationCap, color: '#F59E0B', glowColor: 'rgba(245, 158, 11, 0.7)', angle: 30, summary: 'Portal sekolah, kampus, atau LMS dengan modul pendaftaran siswa, jadwal kelas, kuis, dan sertifikasi online.' },
  { id: '6', label: 'Kesehatan', icon: HeartPulse, color: '#EF4444', glowColor: 'rgba(239, 68, 68, 0.7)', angle: 60, summary: 'Website klinik/rumah sakit dilengkapi sistem pendaftaran pasien, direktori dokter, jadwal konsultasi, dan rekam medis.' },
  { id: '7', label: 'Properti', icon: Home, color: '#14B8A6', glowColor: 'rgba(20, 184, 166, 0.7)', angle: 90, summary: 'Website real estate/agensi properti dengan fitur pencarian listing rumah, galeri virtual, dan kalkulator simulasi KPR.' },     // Bottom
  { id: '8', label: 'Kuliner', icon: Utensils, color: '#F97316', glowColor: 'rgba(249, 115, 22, 0.7)', angle: 120, summary: 'Website restoran/cafe dengan menu makanan interaktif, sistem pemesanan meja, lokasi cabang, dan pesanan antar.' },
  { id: '9', label: 'Travel', icon: Plane, color: '#06B6D4', glowColor: 'rgba(6, 182, 212, 0.7)', angle: 150, summary: 'Portal agensi tur & travel dengan reservasi paket liburan, kalender keberangkatan, payment gateway, dan ulasan wisatawan.' },
  { id: '10', label: 'Organisasi', icon: Heart, color: '#84CC16', glowColor: 'rgba(132, 204, 22, 0.7)', angle: 180, summary: 'Website yayasan/komunitas/LSM untuk publikasi program sosial, manajemen keanggotaan, dan transparansi donasi.' },  // Left
  { id: '11', label: 'Hiburan', icon: Tv, color: '#A855F7', glowColor: 'rgba(168, 85, 247, 0.7)', angle: 210, summary: 'Website media entertainment/event untuk reservasi tiket pertunjukan, sinopsis acara, trailer video, dan jadwal tayang.' },
  { id: '12', label: 'Tech & SaaS', icon: Cpu, color: '#6366F1', glowColor: 'rgba(99, 102, 241, 0.7)', angle: 240, summary: 'Website produk teknologi & startup dengan showcase fitur, dokumentasi API, kalkulator harga paket, dan tombol demo.' },
];

export const Scene50: React.FC<SceneProps> = ({ scene, isActive }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryBranch | null>(null);

  useEffect(() => {
    if (isActive) {
      audioManager.playSound('industries_12', 0.8);
      setSelectedIndustry(null);
    }
  }, [isActive]);

  // Radius percent for compact 12-branch polar layout
  const radiusPercent = 36;

  return (
    <SceneLayout scene={scene} isActive={isActive}>
      {isActive && (
        <AnimatePresence mode="wait">
          <motion.div 
            key="scene50-container"
            className="w-full h-full flex flex-col items-center justify-center pointer-events-auto overflow-hidden max-h-[82vh] py-0 my-auto relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Perfectly Sized Circular Container: Strictly restricted height */}
            <div className="relative w-[300px] h-[300px] sm:w-[370px] sm:h-[370px] md:w-[420px] md:h-[420px] lg:w-[440px] lg:h-[440px] flex items-center justify-center my-0">
              
              {/* Animated Orbit Rings */}
              <div className="absolute inset-2 rounded-full border border-blue-500/15 animate-[spin_80s_linear_infinite] pointer-events-none" />
              <div className="absolute inset-14 rounded-full border border-indigo-500/10 pointer-events-none" />
              <div className="absolute inset-28 rounded-full border border-blue-400/10 pointer-events-none" />

              {/* Connecting Lines SVG Layer */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                <defs>
                  {industries.map((ind) => (
                    <linearGradient key={`grad-${ind.id}`} id={`line-grad-${ind.id}`} x1="50%" y1="50%" x2={`${50 + radiusPercent * Math.cos((ind.angle * Math.PI) / 180)}%`} y2={`${50 + radiusPercent * Math.sin((ind.angle * Math.PI) / 180)}%`}>
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
                      <stop offset="60%" stopColor={ind.color} stopOpacity="0.8" />
                      <stop offset="100%" stopColor={ind.color} stopOpacity="1" />
                    </linearGradient>
                  ))}
                </defs>
                {industries.map((ind) => {
                  const rad = (ind.angle * Math.PI) / 180;
                  const targetXPercent = 50 + radiusPercent * Math.cos(rad);
                  const targetYPercent = 50 + radiusPercent * Math.sin(rad);

                  return (
                    <g key={`line-group-${ind.id}`}>
                      <motion.line
                        x1="50%"
                        y1="50%"
                        x2={`${targetXPercent}%`}
                        y2={`${targetYPercent}%`}
                        stroke={ind.color}
                        strokeWidth="2.5"
                        strokeOpacity="0.3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        exit={{ pathLength: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 + parseInt(ind.id) * 0.03, ease: "easeOut" }}
                      />
                      <motion.line
                        x1="50%"
                        y1="50%"
                        x2={`${targetXPercent}%`}
                        y2={`${targetYPercent}%`}
                        stroke={`url(#line-grad-${ind.id})`}
                        strokeWidth="1.8"
                        strokeDasharray="4 2.5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        exit={{ pathLength: 0, opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 + parseInt(ind.id) * 0.03, ease: "easeOut" }}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Central 3D WordPress Core Sphere */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center cursor-pointer group"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.15, 1], opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedIndustry(null)}
              >
                <motion.div 
                  className="absolute inset-0 rounded-full bg-blue-500/30 blur-lg pointer-events-none"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                />

                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full bg-gradient-to-tr from-[#0F172A] via-[#1E293B] to-[#3B58E6] p-2.5 sm:p-3.5 shadow-[0_0_40px_rgba(59,88,230,0.8)] flex items-center justify-center border-2 border-blue-400/60 relative group-hover:scale-105 transition-transform duration-300">
                  <WPIcon className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] animate-pulse" />
                </div>

                <span className="mt-1 text-[9px] sm:text-[10px] font-extrabold text-blue-200 tracking-wider uppercase bg-blue-950/90 px-2 py-0.5 rounded-full border border-blue-400/40 backdrop-blur-md shadow-md">
                  Core WordPress
                </span>
              </motion.div>

              {/* 12 Industry Branch Badges */}
              {industries.map((ind, index) => {
                const rad = (ind.angle * Math.PI) / 180;
                const leftPos = 50 + radiusPercent * Math.cos(rad);
                const topPos = 50 + radiusPercent * Math.sin(rad);
                const IconComponent = ind.icon as any;
                const isSelected = selectedIndustry?.id === ind.id;

                return (
                  <motion.div
                    key={`industry-${ind.id}`}
                    className="absolute z-20 flex flex-col items-center justify-center cursor-pointer group -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${leftPos}%`,
                      top: `${topPos}%`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.2 + index * 0.04, 
                      type: 'spring', 
                      stiffness: 150 
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      audioManager.playSound('wpcc_click', 0.85);
                      setSelectedIndustry(isSelected ? null : ind);
                    }}
                  >
                    {/* Compact Blinking & Glowing Circular Badge */}
                    <motion.div 
                      className={`w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center border-2 shadow-lg relative group-hover:scale-120 transition-all duration-300 backdrop-blur-md ${
                        isSelected ? 'scale-125 border-white shadow-[0_0_25px_rgba(255,255,255,0.8)]' : ''
                      }`}
                      style={{
                        backgroundColor: isSelected ? ind.color : '#0b1329',
                        borderColor: isSelected ? '#ffffff' : ind.color,
                        boxShadow: `0 0 16px ${ind.glowColor}`
                      }}
                      animate={{
                        boxShadow: isSelected 
                          ? [`0 0 20px ${ind.glowColor}`, `0 0 35px ${ind.glowColor}`, `0 0 20px ${ind.glowColor}`]
                          : [`0 0 8px ${ind.glowColor}`, `0 0 20px ${ind.glowColor}`, `0 0 8px ${ind.glowColor}`]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.8 + (index % 4) * 0.4,
                        ease: "easeInOut"
                      }}
                    >
                      <span 
                        className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full animate-ping"
                        style={{ backgroundColor: isSelected ? '#ffffff' : ind.color }}
                      />
                      <span 
                        className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full border border-white/50"
                        style={{ backgroundColor: isSelected ? '#ffffff' : ind.color }}
                      />

                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: isSelected ? '#ffffff' : ind.color }} />
                    </motion.div>

                    {/* Compact Industry Label */}
                    <span className={`mt-0.5 text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 rounded-md border shadow-md whitespace-nowrap transition-all ${
                      isSelected 
                        ? 'text-white bg-blue-600 border-white font-black' 
                        : 'text-slate-100 bg-slate-950/90 border-white/20 group-hover:text-white group-hover:border-blue-400'
                    }`}>
                      {ind.label}
                    </span>
                  </motion.div>
                );
              })}

              {/* Glassmorphism Interactive Tooltip Box on Click */}
              <AnimatePresence>
                {selectedIndustry && (
                  <motion.div
                    key="industry-tooltip-modal"
                    initial={{ opacity: 0, scale: 0.85, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, y: 15 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 220 }}
                    className="absolute z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[350px] p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-cyan-400/40 shadow-[0_20px_60px_rgba(0,0,0,0.95)] backdrop-blur-2xl text-white pointer-events-auto"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <div className="flex items-center gap-2.5">
                        <div 
                          className="p-2.5 rounded-xl border shadow-md shrink-0 flex items-center justify-center"
                          style={{
                            backgroundColor: `${selectedIndustry.color}20`,
                            borderColor: selectedIndustry.color,
                            color: selectedIndustry.color
                          }}
                        >
                          {React.createElement(selectedIndustry.icon, { className: 'w-5 h-5 sm:w-6 sm:h-6' })}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span 
                              className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border text-white"
                              style={{ backgroundColor: selectedIndustry.color, borderColor: selectedIndustry.color }}
                            >
                              KATEGORI WEBSITE
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                          </div>
                          <h4 className="text-base sm:text-lg font-extrabold text-white mt-0.5">
                            {selectedIndustry.label}
                          </h4>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          audioManager.playSound('wpcc_click', 0.5);
                          setSelectedIndustry(null);
                        }}
                        className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                      >
                        <X className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-slate-200 leading-relaxed">
                      <p className="font-medium">{selectedIndustry.summary}</p>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-white/10">
                      <span className="flex items-center gap-1">
                        <Info className="w-3 h-3 text-cyan-400" />
                        Klik di mana saja untuk menutup
                      </span>
                      <span className="font-bold text-cyan-300">WordPress Ecosystem</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </SceneLayout>
  );
};

