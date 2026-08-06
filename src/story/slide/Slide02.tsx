import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { audioManager } from '../utils/audioManager';
import { SceneProps } from '../types';
import { TypewriterText } from '../ui/TypewriterText';
import { InteractiveShowcaseImage } from '../ui/InteractiveShowcaseImage';
import { Code2, Layout, Database, BrainCircuit, Search, Briefcase, ChevronRight, X, User, Users, Award, Terminal, Calendar, MapPin, ArrowRight, ShieldCheck, Cpu, Star } from 'lucide-react';

const WordPressIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 122.523 122.523" fill="currentColor" className={className}>
    <path d="M8.708 61.26c0 20.802 12.089 38.779 29.619 47.298L13.258 39.872a52.35 52.35 0 0 0-4.55 21.388M96.74 58.608c0-6.495-2.333-10.993-4.334-14.494-2.664-4.329-5.161-7.995-5.161-12.324 0-4.831 3.664-9.328 8.825-9.328.233 0 .454.029.681.042-9.35-8.566-21.807-13.796-35.489-13.796-18.36 0-34.513 9.42-43.91 23.688 1.233.037 2.395.063 3.382.063 5.497 0 14.006-.667 14.006-.667 2.833-.167 3.167 3.994.337 4.329 0 0-2.847.335-6.015.501L48.2 93.547l11.501-34.493-8.188-22.434c-2.83-.166-5.511-.501-5.511-.501-2.832-.166-2.5-4.496.332-4.329 0 0 8.679.667 13.843.667 5.496 0 14.006-.667 14.006-.667 2.835-.167 3.168 3.994.337 4.329 0 0-2.853.335-6.015.501l18.992 56.494 5.242-17.517c2.272-7.269 4.001-12.49 4.001-16.989" />
    <path d="m62.184 65.857-15.768 45.819a52.6 52.6 0 0 0 14.846 2.141c6.12 0 11.989-1.058 17.452-2.979a4.6 4.6 0 0 1-.374-.724zM107.376 36.046c.226 1.674.354 3.471.354 5.404 0 5.333-.996 11.328-3.996 18.824l-16.053 46.413c15.624-9.111 26.133-26.038 26.133-45.426.001-9.137-2.333-17.729-6.438-25.215" />
    <path d="M61.262 0C27.483 0 0 27.481 0 61.26c0 33.783 27.483 61.263 61.262 61.263s61.265-27.48 61.265-61.263C122.526 27.481 95.04 0 61.262 0m0 119.715c-32.23 0-58.453-26.223-58.453-58.455 0-32.23 26.222-58.451 58.453-58.451 32.229 0 58.45 26.221 58.45 58.451 0 32.232-26.221 58.455-58.45 58.455" />
  </svg>
);

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

import { SlideAnimationProvider, useSlideAnimation } from '../ui/SlideAnimationContext';

export const Slide02: React.FC<SceneProps> = (props) => {
  if (!props.isActive) return null;

  return (
    <SlideAnimationProvider scene={props.scene} isActive={props.isActive}>
      <Slide02Content {...props} />
    </SlideAnimationProvider>
  );
};

const Slide02Content: React.FC<SceneProps> = ({ scene, isActive, isPresentationMode = false, revealStep = 3 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [revealedCount, setRevealedCount] = useState(0);
  const { 
    headingShowMode, 
    descriptionShowMode, 
    headingDuration, 
    descriptionDuration 
  } = useSlideAnimation();

  // Play speaker introductory chime as soon as this slide becomes active
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        audioManager.playSound('profile_more', 0.85);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  // Auto stagger-reveal experience cards and the CTA button with audio feedback
  useEffect(() => {
    if (!isActive) {
      setRevealedCount(0);
      return;
    }

    setRevealedCount(0);

    const timers: NodeJS.Timeout[] = [];
    const delayStep = 600; // 600ms gap for highly visible one-by-one sequence
    const initialDelay = 1000; // Start after heading/sub heading typing starts settling

    for (let i = 1; i <= 6; i++) {
      const t = setTimeout(() => {
        setRevealedCount(i);
        if (i <= 5) {
          audioManager.playSound('box_point_2', 0.4);
        } else {
          audioManager.playSound('point_reveal', 0.55);
        }
      }, initialDelay + (i - 1) * delayStep);
      timers.push(t);
    }

    return () => {
      timers.forEach(clearTimeout);
    };
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
        className="absolute inset-0 flex flex-col items-center justify-start pt-[146px] sm:pt-10 p-6 sm:p-10 md:p-16 z-20 pointer-events-none overflow-y-auto sm:overflow-hidden h-full max-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full max-w-[1240px] mx-auto flex flex-col md:flex-row gap-6 sm:gap-10 md:gap-16 items-center justify-center h-full">
          
          {/* Left Column - Cyber Profile Picture with high-tech glowing rings */}
          <motion.div 
            className="w-full md:w-[30%] flex flex-col items-center justify-center pointer-events-auto"
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 80, delay: 0.1 }}
          >
            <div className="relative w-40 sm:w-48 md:w-52 lg:w-56 aspect-square flex items-center justify-center">
              {/* Outer animated rotating/glowing rings matching the exact tech aesthetic */}
              <div className="absolute inset-[-15%] rounded-full border border-blue-500/20 animate-[spin_50s_linear_infinite]" />
              <div className="absolute inset-[-10%] rounded-full border border-cyan-400/10 animate-[spin_30s_linear_infinite_reverse]" />
              
              {/* Outer tech circle with nodes */}
              <div className="absolute inset-[-5%] rounded-full border border-blue-500/40 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                {/* Tech nodes / dots around outer circle */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
                
                <div className="absolute top-[14.6%] left-[14.6%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]" />
                <div className="absolute top-[14.6%] right-[14.6%] translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]" />
                <div className="absolute bottom-[14.6%] left-[14.6%] -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]" />
                <div className="absolute bottom-[14.6%] right-[14.6%] translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]" />
              </div>
              
              {/* Glowing cyan orbit circle */}
              <div className="absolute inset-[-1%] rounded-full border border-cyan-400/40 shadow-[0_0_15px_rgba(34,211,238,0.2)] animate-pulse" />

              {/* Main Profile Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-400/70 shadow-[0_0_45px_rgba(34,211,238,0.4)] bg-slate-950">
                <img 
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjREJU5lGaZVr2IiJGDJdiy26MdsthXcLT7tWc9xenfDmmC2U46vuHSKW20C22YK4GinGkYd6h5uPn3ucY_N1JVeM47lzbk6s0XyUY9su-nSkZfX1hxkmUMe2yBywystGtfvYYFNa_k3T2FqMcjOhyY-pq7u5SXytoXy4cXrKjg5Sgxl2gRA5r6MZoKxGA/s1600/Febri%20Suryanto.webp"
                  alt="Febri Suryanto" 
                  className="w-full h-full object-cover select-none scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Beautifully Animated Profile Details matching the UI screenshot */}
          <motion.div 
            className="w-full md:w-[70%] flex flex-col items-center md:items-start justify-center text-center md:text-left pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* About Speaker Tech Badge with dots */}
            <motion.div 
              className="flex items-center justify-center md:justify-start gap-3 mb-2 sm:mb-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/40 bg-blue-500/5 backdrop-blur-sm shadow-[inset_0_1px_8px_rgba(59,130,246,0.1)]">
                <User className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                <span className="text-[10px] sm:text-xs font-bold text-cyan-400 tracking-[0.2em] uppercase">ABOUT SPEAKER</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 ml-1">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                <span className="w-2 h-2 rounded-full bg-cyan-400/60 shadow-[0_0_8px_rgba(34,211,238,0.4)] animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-cyan-400/30" />
              </div>
            </motion.div>

            {/* Profile Name */}
            <h2 className="wpcc-h3 font-bold text-white mb-1.5 sm:mb-2.5 tracking-[-0.02em] leading-tight font-serif drop-shadow-2xl whitespace-normal sm:whitespace-nowrap text-center md:text-left">
              <TypewriterText text="Febri Suryanto" showMode={headingShowMode} exactDuration={headingDuration} />
            </h2>

            {/* Divider line with glowing dot */}
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="flex items-center justify-center md:justify-start w-full max-w-md mx-auto md:mx-0 wpcc-divide-container"
            >
              <div className="md:hidden h-[1px] flex-1 bg-gradient-to-r from-transparent to-cyan-500/40" />
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] mx-3 md:ml-0 md:mr-4 inline-block animate-pulse shrink-0" />
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-cyan-500/40 md:bg-gradient-to-r md:from-cyan-500/40 md:to-transparent" />
            </motion.div>

            {/* Profile Supporting Sentence / Description - Hidden on Mobile */}
            <p className="hidden md:block text-xs sm:text-sm md:text-base text-slate-300 max-w-xl mb-3 sm:mb-5 leading-relaxed font-light text-center md:text-left wpcc-slide-desc">
              <TypewriterText text="Kenali pembicara yang akan menemani perjalanan belajar hari ini." showMode={descriptionShowMode} exactDuration={descriptionDuration} />
            </p>

            

            {/* Exact Grid Layout of 5 High-Tech Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 w-full mb-5 sm:mb-8">
              {[
                { 
                  title: "Experience", 
                  desc: "Pengalaman 10+ tahun", 
                  icon: Star, 
                  color: "bg-blue-600 border-blue-400" 
                },
                { 
                  title: "WordPress", 
                  desc: "Ahli WordPress & CMS", 
                  icon: WordPressIcon, 
                  color: "bg-blue-600 border-blue-400" 
                },
                { 
                  title: "Developer", 
                  desc: "Pengembang solusi AI", 
                  icon: Code2, 
                  color: "bg-blue-600 border-blue-400" 
                },
                { 
                  title: "Community", 
                  desc: "Pemimpin Komunitas", 
                  icon: Users, 
                  color: "bg-blue-600 border-blue-400" 
                },
                { 
                  title: "Solutif", 
                  desc: "Berorientasi pada Hasil", 
                  icon: ShieldCheck, 
                  color: "bg-blue-600 border-blue-400" 
                }
              ].map((item, idx) => {
                const isRevealed = revealedCount > idx;
                return (
                  <motion.div 
                    key={item.title} 
                    className="flex flex-row items-center justify-start text-left gap-2 sm:gap-3.5 py-[10px] px-[8px] sm:p-4 rounded-2xl border border-blue-500/20 bg-blue-950/20 backdrop-blur-sm hover:border-blue-400/40 hover:bg-blue-900/10 transition-all duration-300 pointer-events-auto shadow-lg"
                    initial={{ opacity: 0, scale: 0.85, y: 20 }}
                    animate={{ 
                      opacity: isRevealed ? 1 : 0, 
                      scale: isRevealed ? 1 : 0.85, 
                      y: isRevealed ? 0 : 20,
                      pointerEvents: isRevealed ? "auto" : "none" as const
                    }}
                    transition={{ type: 'spring', damping: 15, stiffness: 110 }}
                  >
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 text-white ${item.color} shadow-[0_0_12px_rgba(37,99,235,0.6)]`}>
                      <item.icon className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" />
                    </div>
                    <div className="flex flex-col items-start min-w-0">
                      <span className="wpcc-h4 font-bold text-white leading-snug whitespace-normal">{item.title}</span>
                      <span className="text-[13px] sm:text-sm text-slate-400 font-light mt-0.5 leading-normal whitespace-normal">{item.desc}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Premium LIHAT PROFIL LENGKAP Button */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ 
                opacity: revealedCount >= 6 ? 1 : 0, 
                y: revealedCount >= 6 ? 0 : 15,
                pointerEvents: revealedCount >= 6 ? "auto" : "none" as const
              }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              className="flex justify-center md:justify-start w-full"
            >
              <button
                onClick={() => {
                  audioManager.playSound('profile_more', 0.85);
                  setIsModalOpen(true);
                }}
                className="group relative inline-flex items-center justify-between pl-5 pr-6 sm:pl-7 sm:pr-9 py-2.5 sm:py-3.5 rounded-full border border-blue-400/50 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-800 hover:from-blue-600 hover:to-indigo-700 hover:border-cyan-400/80 text-white font-bold transition-all duration-300 shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(34,211,238,0.5)] hover:scale-[1.02] active:scale-[0.98] text-xs sm:text-sm tracking-[0.15em] gap-4 sm:gap-6 pointer-events-auto w-fit"
              >
                <span className="uppercase font-bold tracking-wider">LIHAT PROFIL LENGKAP</span>
                <ArrowRight size={18} className="text-cyan-300 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>

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
                <div className="flex flex-col md:flex-row gap-10 items-center md:items-start mb-20 p-4 sm:p-6 md:p-8 rounded-3xl bg-slate-950/40 border border-white/[0.08] backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden">
                  <motion.div 
                    className="relative shrink-0"
                    initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                  >
                    <img 
                      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjREJU5lGaZVr2IiJGDJdiy26MdsthXcLT7tWc9xenfDmmC2U46vuHSKW20C22YK4GinGkYd6h5uPn3ucY_N1JVeM47lzbk6s0XyUY9su-nSkZfX1hxkmUMe2yBywystGtfvYYFNa_k3T2FqMcjOhyY-pq7u5SXytoXy4cXrKjg5Sgxl2gRA5r6MZoKxGA/s1600/Febri%20Suryanto.webp" 
                      alt="Febri Suryanto" 
                      className="w-44 h-44 md:w-56 md:h-56 rounded-full object-cover border-2 border-white shadow-[0_0_30px_rgba(59,130,246,0.3)] bg-slate-950"
                      referrerPolicy="no-referrer"
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
                      className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                        { icon: Cpu, title: "Performance Optimization", desc: "Optimalisasi Core Web Vitals, caching tingkat lanjut, dan efisiensi server untuk kecepatan web maksimal." },
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
                            <span className="wpcc-h4 text-slate-100 font-bold block mb-1 group-hover:text-blue-300 transition-colors">{skill.title}</span>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed hidden sm:block wpcc-body-normal">{skill.desc}</p>
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
                            <p className="text-slate-300 text-sm leading-relaxed hidden sm:block wpcc-body-normal">{exp.desc}</p>
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
