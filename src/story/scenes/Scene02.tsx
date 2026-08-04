import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { audioManager } from '../utils/audioManager';
import { SceneProps } from '../types';
import { TypewriterText } from '../components/TypewriterText';
import { InteractiveShowcaseImage } from '../components/InteractiveShowcaseImage';
import { Code2, Layout, Database, BrainCircuit, Search, Briefcase, ChevronRight, X, User, Award, Terminal, Calendar, MapPin, ArrowRight, ShieldCheck, Cpu, Star } from 'lucide-react';

interface CountUpProps {
  start: number;
  end: number;
  duration?: number;
  padZeros?: boolean;
  suffix?: string;
}

const CountUp: React.FC<CountUpProps> = ({
  start,
  end,
  duration = 1600,
  padZeros = false,
  suffix = '+'
}) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (end - start) * easedProgress);
      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [start, end, duration]);

  const formatted = padZeros && count < 10 ? `0${count}` : `${count}`;
  return <span>{formatted}{suffix}</span>;
};

export const Scene02: React.FC<SceneProps> = ({ scene, isActive, isPresentationMode = false, revealStep = 3 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Play speaker introductory chime as soon as this slide becomes active
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        audioManager.playSound('profile_more', 0.85);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  if (!isActive && !isModalOpen) return null;

  // Stagger Container Variants for Left & Right text sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { type: 'spring' as const, damping: 20, stiffness: 100 }
    }
  };

  return (
    <>
      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-16 pt-24 z-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center h-full">
          
          <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center justify-center w-full">
            
            {/* Left Column - Cyber Profile Picture */}
            <motion.div 
              className="w-full md:w-[45%] flex flex-col items-center justify-center pointer-events-auto"
              initial={{ opacity: 0, scale: 0.9, x: -30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 80, delay: 0.1 }}
            >
              <div className="w-full max-w-[340px] lg:max-w-[400px] relative group">
                {/* Glowing Outer Backdrop */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 opacity-60 blur-xl group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                
                {/* Main Image Frame - full rounded 360 degree with 2px white border */}
                <div className="relative overflow-hidden rounded-full border-2 border-white bg-slate-950/80 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl aspect-square">
                  <img 
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAA5FpDA_DYIf4Jh9EW26kX1ZvCt2rO9hRvvlPpfVyeCSTuxMEtQhwoTdPq2YqcOvMtIInXI3Yrib4oa-yRbAmk4-6xO10GXF_-r3jilk2baJsGE6PhZRpl7VGEe9hvahGuiE8B3Vl1ERUOPIU6l75gh0i4zpLhVFoM4fWbUB_2Xkn7HVMv0iQjH_dq8w/s1600/fs-profile.png" 
                    alt="Febri Suryanto" 
                    className="w-full h-full object-cover rounded-full select-none"
                  />
                  {/* Subtle Gradient Shadow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none rounded-full" />
                </div>
              </div>
            </motion.div>

            {/* Right Column - Beautifully Animated Profile Details */}
            <motion.div 
              className="w-full md:w-[55%] flex flex-col justify-center text-center md:text-left pointer-events-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-lg md:text-xl font-bold text-blue-400 uppercase tracking-[0.25em] font-sans mb-2 flex items-center justify-center md:justify-start gap-2"
              >
                <Cpu className="w-5 h-5 text-blue-400 animate-pulse" />
                <span>{scene.headline || "Meet Your Speaker"}</span>
              </motion.h2>

              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-2 tracking-tight leading-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] font-serif"
              >
                Febri Suryanto
              </motion.h1>

              {/* Glowing Interactive Dots Indicator */}
              <motion.div variants={itemVariants} className="flex items-center gap-1.5 my-3 justify-center md:justify-start">
                {[...Array(6)].map((_, i) => (
                  <span 
                    key={i} 
                    className="w-[12px] h-1.5 rounded-sm bg-blue-400/80 shadow-[0_0_8px_#3b82f6] loading-wave-dot" 
                    style={{ animationDelay: `${i * 0.12}s`, animationDuration: '1.4s' }}
                  />
                ))}
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex flex-col gap-4 mb-8">
                <p className="text-xl md:text-2xl text-cyan-300 font-semibold tracking-wide">Technology Consultant & WordPress Architect</p>
                
                {/* Horizontal Staggered Tags */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-3">
                  {["10+ Years Exp", "WordPress Specialist", "AI Solutions Dev", "Community Lead"].map((tag, idx) => (
                    <motion.span 
                      key={tag} 
                      className="px-3.5 py-1.5 bg-slate-900/60 border border-blue-500/20 text-slate-200 text-xs md:text-sm rounded-full font-medium backdrop-blur-md shadow-sm flex items-center gap-1.5 hover:border-cyan-400/40 hover:text-white transition-colors duration-300"
                      initial={{ opacity: 0, scale: 0.8, x: -10 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      transition={{ type: 'spring', damping: 15, stiffness: 150, delay: 0.4 + idx * 0.1 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Fully Animated View Profile CTA Button */}
              <motion.div variants={itemVariants}>
                <button
                  onClick={() => {
                    audioManager.playSound('profile_more', 0.85);
                    setIsModalOpen(true);
                  }}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600/90 to-cyan-500/90 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-full transition-all duration-300 shadow-[0_8px_25px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_30px_rgba(34,211,238,0.5)] border border-white/10 hover:scale-105 active:scale-95"
                >
                  <User size={20} className="animate-pulse" />
                  <span>LIHAT PROFIL LENGKAP</span>
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ChevronRight size={16} />
                  </div>
                </button>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* Modal Profile Landing Page - Super Interactive & Fully Animated */}
      <AnimatePresence>
        {isModalOpen && (
          <React.Fragment key="modal-group">
            {/* Modal Overlay with heavy blur and dim */}
            <motion.div
              key="modal-overlay"
              className="fixed inset-0 z-40 bg-slate-950/90 backdrop-blur-md pointer-events-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsModalOpen(false)}
            />

            {/* Modal Sheet Content */}
            <motion.div 
              key="modal-content"
              className="fixed top-[3%] bottom-[3%] left-[3%] right-[3%] md:left-[6%] md:right-[6%] lg:left-[10%] lg:right-[10%] z-50 flex flex-col bg-slate-900/98 overflow-y-auto pointer-events-auto scrollbar-hide scroll-smooth rounded-[2rem] border border-blue-500/20 shadow-[0_24px_60px_rgba(0,0,0,0.8)] shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]"
              initial={{ opacity: 0, scale: 0.9, y: 50, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.9, y: 50, filter: 'blur(10px)' }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
            >
              {/* Floating Close Button */}
              <div className="sticky top-0 right-0 w-full flex justify-end p-6 z-50 pointer-events-none">
                <button 
                  onClick={() => {
                    audioManager.playSound('fullscreen_off', 0.85);
                    setIsModalOpen(false);
                  }}
                  className="p-3.5 rounded-full bg-slate-800/90 hover:bg-red-500/90 text-white transition-colors backdrop-blur-xl pointer-events-auto shadow-2xl border border-white/10 group shadow-black/80"
                >
                  <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>
              
              <div className="w-full mx-auto px-6 pb-20 md:px-12 md:pb-24 flex flex-col relative mt-[-60px]">
                
                {/* Profile Header Block */}
                <div className="flex flex-col md:flex-row gap-10 items-center md:items-start mb-20 border-b border-white/[0.08] pb-12">
                  <motion.div 
                    className="relative shrink-0"
                    initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                  >
                    <img 
                      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAA5FpDA_DYIf4Jh9EW26kX1ZvCt2rO9hRvvlPpfVyeCSTuxMEtQhwoTdPq2YqcOvMtIInXI3Yrib4oa-yRbAmk4-6xO10GXF_-r3jilk2baJsGE6PhZRpl7VGEe9hvahGuiE8B3Vl1ERUOPIU6l75gh0i4zpLhVFoM4fWbUB_2Xkn7HVMv0iQjH_dq8w/s1600/fs-profile.png" 
                      alt="Febri Suryanto" 
                      className="w-44 h-44 md:w-56 md:h-56 rounded-full object-cover border-2 border-white shadow-[0_0_30px_rgba(59,130,246,0.3)] bg-slate-950"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-3 rounded-full border border-slate-900 shadow-xl animate-bounce">
                      <Award size={20} />
                    </div>
                  </motion.div>

                  <div className="text-center md:text-left flex-1">
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-semibold mb-3 tracking-widest uppercase"
                    >
                      <Terminal size={12} />
                      Consultant Profile
                    </motion.div>
                    
                    <motion.h2 
                      className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight font-serif"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      Febri Suryanto
                    </motion.h2>

                    <motion.div 
                      className="flex flex-wrap justify-center md:justify-start items-center gap-2 md:gap-3 mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {["Technology Consultant", "WordPress Specialist", "AI Solutions Engineer", "Speaker Lead"].map((tag, idx) => (
                        <motion.span 
                          key={tag} 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.3 + idx * 0.08 }}
                          className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-xs sm:text-sm font-semibold flex items-center gap-1.5"
                        >
                          <Star size={12} className="text-blue-400 fill-blue-400" />
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                    
                    <motion.p 
                      className="text-slate-300 text-base md:text-lg leading-relaxed max-w-3xl font-normal"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      Profesional di bidang Web Development, WordPress, dan Digital Transformation dengan pengalaman lebih dari 10 tahun membangun solusi digital yang inovatif, aman, cepat, dan scalable. Fokus mendedikasikan waktu untuk kemajuan digital Indonesia.
                    </motion.p>
                  </div>
                </div>

                {/* Staggered Vertical Modules */}
                <div className="flex flex-col gap-20">
                  
                  {/* Keahlian Grid - Fully Animated */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <div className="h-8 w-1.5 bg-blue-500 rounded-full" />
                      <h3 className="text-lg uppercase tracking-[0.25em] text-white font-bold">
                        KEAHLIAN UTAMA
                      </h3>
                    </div>
                    
                    <motion.div 
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: { staggerChildren: 0.1 }
                        }
                      }}
                    >
                      {[
                        { icon: Code2, title: "WordPress Development", desc: "Mengembangkan tema & plugin custom berstandar global dengan keamanan tinggi." },
                        { icon: Database, title: "Web Application", desc: "Arsitektur frontend & backend menggunakan React, Node, dan teknologi termutakhir." },
                        { icon: BrainCircuit, title: "AI Integration", desc: "Penyematan API kecerdasan buatan (Gemini, OpenAI) untuk otomatisasi cerdas." },
                        { icon: Layout, title: "UI/UX Design Philosophy", desc: "Orientasi kenyamanan pengguna dengan transisi animasi halus nan berestetika." },
                        { icon: Search, title: "SEO & Growth Strategy", desc: "Optimalisasi struktur dan performa web agar merajai peringkat teratas mesin pencari." },
                        { icon: Briefcase, title: "Project Management", desc: "Manajemen siklus hidup sistem TI secara profesional, transparan, dan tepat waktu." }
                      ].map((skill, i) => (
                        <motion.div 
                          key={i}
                          variants={{
                            hidden: { opacity: 0, y: 25, scale: 0.95 },
                            visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 120, damping: 18 } }
                          }}
                          className="flex gap-4 p-5 rounded-2xl bg-slate-950/40 border border-white/[0.06] hover:border-blue-500/40 hover:bg-slate-950/70 transition-all duration-300 group hover:-translate-y-1.5 shadow-lg relative overflow-hidden"
                        >
                          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-[5rem] pointer-events-none group-hover:bg-blue-500/10 transition-colors" />
                          <div className="w-12 h-12 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/25 flex items-center justify-center shrink-0 transition-colors">
                            <skill.icon size={22} className="text-blue-400 group-hover:text-cyan-300 transition-colors" />
                          </div>
                          <div>
                            <span className="text-slate-100 font-bold text-base block mb-1 group-hover:text-blue-300 transition-colors">{skill.title}</span>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{skill.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>

                  {/* Perjalanan Karir Timeline - Fully Animated */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <div className="h-8 w-1.5 bg-cyan-500 rounded-full" />
                      <h3 className="text-lg uppercase tracking-[0.25em] text-white font-bold">
                        PERJALANAN KARIR
                      </h3>
                    </div>

                    <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 pl-6 md:pl-8 space-y-10">
                      {[
                        { role: "Founder & CEO", company: "Ziezan Solutions", year: "2021 – Sekarang", desc: "Memimpin agensi pengembangan sistem TI dan konsultasi digital terkemuka di Indonesia, melayani puluhan korporat nasional.", location: "Baros, Serang, Banten" },
                        { role: "Co-Organizer & Speaker", company: "WordPress Meetup Serang", year: "2022 – Sekarang", desc: "Membina ekosistem developer, menggelar lokakarya, serta aktif menjadi keynote speaker di berbagai ajang nasional.", location: "Kota Serang, Banten" },
                        { role: "Chief Tech Officer (CTO)", company: "Nest Digital Solutions", year: "2022 – 2025", desc: "Mengarsiteki transformasi digital internal perusahaan, mengepalai divisi engineer, dan mengawasi implementasi produk TI skala massal.", location: "Sukoharjo, Jawa Tengah" }
                      ].map((exp, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.65 + i * 0.15 }}
                          className="relative group"
                        >
                          {/* Timeline Node */}
                          <div className="absolute -left-[35px] md:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-slate-900 border-4 border-blue-500 group-hover:border-cyan-400 group-hover:scale-125 transition-all duration-300 flex items-center justify-center shadow-md">
                            <span className="w-1 h-1 rounded-full bg-white animate-ping" />
                          </div>
                          
                          <div className="p-6 rounded-2xl bg-slate-950/30 border border-white/[0.05] group-hover:border-blue-500/30 group-hover:bg-slate-950/60 transition-all duration-300 shadow-md">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                              <span className="px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black tracking-wider uppercase">
                                {exp.year}
                              </span>
                              <span className="text-slate-500 text-xs font-medium flex items-center gap-1">
                                <MapPin size={12} />
                                {exp.location}
                              </span>
                            </div>
                            <h4 className="text-slate-100 font-black text-xl leading-snug group-hover:text-blue-300 transition-colors">{exp.role}</h4>
                            <p className="text-slate-400 font-bold text-sm mb-3">{exp.company}</p>
                            <p className="text-slate-300 text-sm leading-relaxed">{exp.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Pencapaian Numbers - Staggered Counters */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.75 }}
                  >
                    <div className="flex items-center gap-3 mb-8 justify-center">
                      <div className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                      <h3 className="text-lg uppercase tracking-[0.25em] text-white font-bold text-center">
                        PENCAPAISAN STATISTIK
                      </h3>
                      <div className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { start: 0, target: 12, pad: true, label: "Tahun Pengalaman", icon: Calendar, color: "from-blue-600/20 to-blue-500/5", border: "border-blue-500/30" },
                        { start: 0, target: 6, pad: true, label: "Posisi Strategis", icon: ShieldCheck, color: "from-cyan-600/20 to-cyan-500/5", border: "border-cyan-500/30" },
                        { start: 128, target: 368, pad: false, label: "Klien & Partner", icon: User, color: "from-purple-600/20 to-purple-500/5", border: "border-purple-500/30" }
                      ].map((stat, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.8 + i * 0.12 }}
                          className={`flex flex-col items-center justify-center p-8 rounded-3xl bg-gradient-to-b ${stat.color} border ${stat.border} text-center group hover:scale-[1.03] transition-transform duration-300 shadow-xl`}
                        >
                          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 text-slate-300 group-hover:text-white transition-colors group-hover:bg-white/10">
                            <stat.icon size={22} className="animate-pulse" />
                          </div>
                          <span className="text-5xl font-black text-white mb-2 tracking-tighter drop-shadow-md">
                            <CountUp start={stat.start} end={stat.target} padZeros={stat.pad} suffix="+" />
                          </span>
                          <span className="text-slate-400 text-xs sm:text-sm font-bold uppercase tracking-wider">{stat.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  
                </div>
              </div>
            </motion.div>
          </React.Fragment>
        )}
      </AnimatePresence>
    </>
  );
};
