import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { audioManager } from '../utils/audioManager';
import { SceneProps } from '../types';
import { TypewriterText } from '../ui/TypewriterText';
import { InteractiveShowcaseImage } from '../ui/InteractiveShowcaseImage';
import { Code2, Layout, Database, BrainCircuit, Search, Briefcase, ChevronRight, X, User, Users, Award, Terminal, Calendar, MapPin, ArrowRight, ShieldCheck, Cpu, Star, ExternalLink, GraduationCap, CheckCircle2, Sparkles, Globe, Layers } from 'lucide-react';

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

// 12 Orbital balls positions in 360 degrees
const ORBITAL_BALLS = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  angle: (360 / 12) * i,
  size: i % 3 === 0 ? 'w-3.5 h-3.5' : i % 2 === 0 ? 'w-2.5 h-2.5' : 'w-2 h-2',
  color: i % 3 === 0 
    ? 'bg-cyan-400 shadow-[0_0_15px_#22d3ee]' 
    : i % 2 === 0 
    ? 'bg-blue-400 shadow-[0_0_12px_#60a5fa]' 
    : 'bg-amber-300 shadow-[0_0_10px_#fcd34d]',
  ringDistance: i % 2 === 0 ? 112 : 124, // Radius % distance from center
}));

const Slide02Content: React.FC<SceneProps> = ({ scene, isActive, isPresentationMode = false, revealStep = 3 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSpinningFast, setIsSpinningFast] = useState(false);
  const [revealedCount, setRevealedCount] = useState(0);
  const { 
    headingShowMode, 
    descriptionShowMode, 
    headingDuration, 
    descriptionDuration,
    isTextFinished
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

  // Auto stagger-reveal experience cards and the CTA button after text typing is completed
  useEffect(() => {
    if (!isActive || !isTextFinished) {
      setRevealedCount(0);
      return;
    }

    setRevealedCount(0);

    const timers: NodeJS.Timeout[] = [];
    const delayStep = 450; // 450ms gap between cards
    const initialDelay = 150; // start right after heading & description typing complete

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
  }, [isActive, isTextFinished]);

  // Handle CTA button click: Fast anti-clockwise spin 360 animation, photo scale up, then trigger modal popup
  const handleOpenResumeModal = () => {
    audioManager.playSound('point_reveal', 0.85);
    audioManager.playSound('profile_more', 0.9);
    setIsSpinningFast(true);

    setTimeout(() => {
      setIsModalOpen(true);
      setIsSpinningFast(false);
    }, 850);
  };

  if (!isActive && !isModalOpen) return null;

  return (
    <>
      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-center my-auto pt-14 sm:pt-10 px-5 sm:px-[30px] lg:px-[40px] pb-20 sm:pb-16 z-20 pointer-events-none overflow-y-auto h-full max-h-screen w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full max-w-[1800px] mx-auto flex flex-col md:flex-row gap-6 sm:gap-10 md:gap-16 items-center justify-center h-full">
          
          {/* Left Column - Cyber 360-Degree Orbital Profile Picture */}
          <motion.div 
            className="w-full md:w-[32%] flex flex-col items-center justify-center pointer-events-auto relative"
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 80, delay: 0.1 }}
          >
            <div className={`relative w-44 sm:w-52 md:w-56 lg:w-64 aspect-square flex items-center justify-center transition-transform duration-700 ease-out ${isSpinningFast ? 'scale-125' : 'scale-100'}`}>
              
              {/* Outer 360 Light Ring (No backdrop blur so image is completely clear) */}
              <div className="absolute inset-[-18%] rounded-full border border-blue-500/30 bg-blue-500/5" />

              {/* Orbital Balls Ring 1 - Spins Counter-Clockwise when clicked */}
              <motion.div 
                className="absolute inset-[-14%] rounded-full border border-cyan-400/35 border-dashed"
                animate={{ rotate: isSpinningFast ? -720 : 360 }}
                transition={{ 
                  duration: isSpinningFast ? 0.8 : 18, 
                  ease: isSpinningFast ? "easeOut" : "linear", 
                  repeat: Infinity 
                }}
              >
                {/* Orbital balls positioned precisely around 360 degrees */}
                {ORBITAL_BALLS.map((ball) => {
                  const rad = (ball.angle * Math.PI) / 180;
                  const x = 50 + 50 * Math.cos(rad);
                  const y = 50 + 50 * Math.sin(rad);
                  return (
                    <div
                      key={`ring1-${ball.id}`}
                      className={`absolute rounded-full ${ball.size} ${ball.color} -translate-x-1/2 -translate-y-1/2 transition-transform duration-300`}
                      style={{ left: `${x}%`, top: `${y}%` }}
                    />
                  );
                })}
              </motion.div>

              {/* Orbital Balls Ring 2 - Reverse Rotation */}
              <motion.div 
                className="absolute inset-[-6%] rounded-full border border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                animate={{ rotate: isSpinningFast ? 720 : -360 }}
                transition={{ 
                  duration: isSpinningFast ? 0.6 : 12, 
                  ease: isSpinningFast ? "easeOut" : "linear", 
                  repeat: Infinity 
                }}
              >
                {/* 6 Secondary orbital energy balls */}
                {[0, 60, 120, 180, 240, 300].map((deg, idx) => {
                  const rad = (deg * Math.PI) / 180;
                  const x = 50 + 50 * Math.cos(rad);
                  const y = 50 + 50 * Math.sin(rad);
                  return (
                    <div
                      key={`ring2-${idx}`}
                      className="absolute w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_14px_#22d3ee] -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${x}%`, top: `${y}%` }}
                    />
                  );
                })}
              </motion.div>

              {/* Hyper Speed Shockwave Flash during button click */}
              {isSpinningFast && (
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1.4, opacity: 0.9 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-[-25%] rounded-full bg-gradient-to-r from-cyan-500/40 via-blue-600/40 to-indigo-500/40 blur-xl pointer-events-none"
                />
              )}

              {/* Main Profile Image - Completely Crisp, Bright & Clear with NO front overlay */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.6)] bg-slate-950 group">
                <img 
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjREJU5lGaZVr2IiJGDJdiy26MdsthXcLT7tWc9xenfDmmC2U46vuHSKW20C22YK4GinGkYd6h5uPn3ucY_N1JVeM47lzbk6s0XyUY9su-nSkZfX1hxkmUMe2yBywystGtfvYYFNa_k3T2FqMcjOhyY-pq7u5SXytoXy4cXrKjg5Sgxl2gRA5r6MZoKxGA/s1600/Febri%20Suryanto.webp"
                  alt="Febri Suryanto" 
                  className={`w-full h-full object-cover select-none transition-transform duration-700 ${isSpinningFast ? 'scale-115' : 'scale-[1.02]'}`}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Profile Details */}
          <motion.div 
            className="w-full md:w-[68%] flex flex-col items-center md:items-start justify-center text-center md:text-left pointer-events-auto"
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
                <User className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[10px] sm:text-xs font-bold text-cyan-400 tracking-[0.2em] uppercase">ABOUT THE SPEAKER</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 ml-1">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                <span className="w-2 h-2 rounded-full bg-cyan-400/60 shadow-[0_0_8px_rgba(34,211,238,0.4)] animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-cyan-400/30" />
              </div>
            </motion.div>

            {/* Profile Name */}
            <h2 className="wpcc-h3 font-bold text-white mb-1 tracking-[-0.02em] leading-tight font-serif drop-shadow-sm whitespace-normal sm:whitespace-nowrap text-center md:text-left">
              <TypewriterText text="Febri Suryanto" showMode={headingShowMode} exactDuration={headingDuration} />
            </h2>

            {/* Positioning Tagline */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xs sm:text-sm font-semibold text-cyan-300 tracking-wide mb-2 text-center md:text-left"
            >
              WordPress Specialist · Web Developer · AI Engineer
            </motion.div>

            {/* Profile Supporting Description / Proof Sentence */}
            <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-xl mb-3 sm:mb-4 leading-relaxed font-light text-center md:text-left wpcc-slide-desc">
              <TypewriterText text="10+ years building websites, digital solutions, and WordPress projects." showMode={descriptionShowMode} exactDuration={descriptionDuration} />
            </p>

            {/* Divider line appears AFTER description finishes typing */}
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isTextFinished ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center justify-center md:justify-start w-full max-w-md mx-auto md:mx-0 wpcc-divide-container mb-3 sm:mb-4"
            >
              <div className="md:hidden h-[1px] flex-1 bg-gradient-to-r from-transparent to-cyan-500/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] mx-3 md:ml-0 md:mr-4 inline-block animate-pulse shrink-0" />
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-cyan-500/40 md:bg-gradient-to-r md:from-cyan-500/40 md:to-transparent" />
            </motion.div>

            {/* 5 High-Tech Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 w-full mb-4 sm:mb-6">
              {[
                { title: "10+ YEARS", desc: "Web Development Experience", icon: Calendar, color: "bg-blue-600 border-blue-400" },
                { title: "WORDPRESS", desc: "WordPress Specialist", icon: WordPressIcon, color: "bg-blue-600 border-blue-400" },
                { title: "WEB DEVELOPMENT", desc: "Website & Digital Solutions", icon: Code2, color: "bg-blue-600 border-blue-400" },
                { title: "AI ENGINEERING", desc: "AI & Automation", icon: BrainCircuit, color: "bg-blue-600 border-blue-400" },
                { title: "COMMUNITY", desc: "Community & Knowledge Sharing", icon: Users, color: "bg-blue-600 border-blue-400" }
              ].map((item, idx) => {
                const isRevealed = revealedCount > idx;
                return (
                  <motion.div 
                    key={item.title} 
                    className="flex flex-row items-center justify-start text-left gap-2 sm:gap-3.5 py-[10px] px-[8px] sm:p-3.5 rounded-2xl border border-blue-500/20 bg-blue-950/20 backdrop-blur-sm hover:border-blue-400/40 hover:bg-blue-900/10 transition-all duration-300 pointer-events-auto shadow-lg"
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
                      <span className="text-[12px] sm:text-xs text-slate-400 font-light mt-0.5 leading-normal whitespace-normal">{item.desc}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Premium VIEW PROFILE Button */}
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
                onClick={handleOpenResumeModal}
                disabled={isSpinningFast}
                className="group relative inline-flex items-center justify-between pl-5 pr-6 sm:pl-7 sm:pr-9 py-2.5 sm:py-3.5 rounded-full border border-blue-400/50 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-800 hover:from-blue-600 hover:to-indigo-700 hover:border-cyan-400/80 text-white font-bold transition-all duration-300 shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(34,211,238,0.5)] hover:scale-[1.02] active:scale-[0.98] text-xs sm:text-sm tracking-[0.15em] gap-4 sm:gap-6 pointer-events-auto w-fit"
              >
                <span className="uppercase font-bold tracking-wider">
                  {isSpinningFast ? "LOADING PROFILE..." : "VIEW PROFILE"}
                </span>
                {isSpinningFast ? (
                  <div className="flex items-center gap-1 py-1 px-0.5">
                    <motion.span 
                      className="w-2 h-2 rounded-full bg-cyan-300"
                      animate={{ scale: [0.6, 1.3, 0.6], opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    />
                    <motion.span 
                      className="w-2 h-2 rounded-full bg-cyan-300"
                      animate={{ scale: [0.6, 1.3, 0.6], opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.span 
                      className="w-2 h-2 rounded-full bg-cyan-300"
                      animate={{ scale: [0.6, 1.3, 0.6], opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                    />
                  </div>
                ) : (
                  <ArrowRight size={18} className="text-cyan-300 group-hover:translate-x-1.5 transition-transform duration-300" />
                )}
              </button>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>

      {/* Modal Profile Landing Page - Animated One-by-One at 1-Second Tempo on Scroll */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <React.Fragment key="modal-group">
              {/* Modal Overlay with blur */}
              <motion.div
                key="modal-overlay"
                className="fixed inset-0 z-[99998] bg-slate-950/95 backdrop-blur-2xl pointer-events-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsModalOpen(false)}
              />

              {/* Modal Sheet Content - Fullscreen No Border Bounds */}
              <motion.div 
                key="modal-content"
                className="fixed inset-0 w-full h-full z-[99999] flex flex-col bg-[#020617] overflow-y-auto pointer-events-auto scrollbar-hide scroll-smooth p-4 sm:p-8 md:p-12 lg:p-16"
                initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
              >
                {/* Floating Fixed Close Button */}
                <button 
                  onClick={() => {
                    audioManager.playSound('fullscreen_off', 0.85);
                    setIsModalOpen(false);
                  }}
                  aria-label="Tutup Profile"
                  className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[100000] p-3.5 sm:p-4 rounded-full bg-slate-800/90 hover:bg-red-600 text-white transition-all backdrop-blur-xl pointer-events-auto shadow-2xl border border-white/20 group shadow-black/90 hover:scale-110 active:scale-95 cursor-pointer"
                >
                  <X size={26} className="group-hover:rotate-90 transition-transform duration-300 text-white" />
                </button>
                
                <div className="w-full max-w-6xl mx-auto pb-24 flex flex-col relative pt-12 sm:pt-6">
                
                {/* Item 1: Profile Header Block */}
                <motion.div 
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ amount: 0.1, once: false }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col md:flex-row gap-8 md:gap-10 items-center md:items-start mb-14 p-5 sm:p-8 rounded-3xl bg-slate-950/60 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden"
                >
                  <div className="relative shrink-0">
                    <img 
                      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjREJU5lGaZVr2IiJGDJdiy26MdsthXcLT7tWc9xenfDmmC2U46vuHSKW20C22YK4GinGkYd6h5uPn3ucY_N1JVeM47lzbk6s0XyUY9su-nSkZfX1hxkmUMe2yBywystGtfvYYFNa_k3T2FqMcjOhyY-pq7u5SXytoXy4cXrKjg5Sgxl2gRA5r6MZoKxGA/s1600/Febri%20Suryanto.webp" 
                      alt="Febri Suryanto" 
                      className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-2 border-cyan-400 shadow-[0_0_35px_rgba(34,211,238,0.4)] bg-slate-950"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-3 rounded-full border border-slate-900 shadow-xl animate-bounce">
                      <Award size={20} />
                    </div>
                  </div>

                  <div className="text-center md:text-left flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-semibold mb-3 tracking-widest uppercase">
                      <Terminal size={12} />
                      Speaker Profile
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2 tracking-tight font-serif">
                      Febri Suryanto
                    </h2>

                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mb-4">
                      {["Technology Consultant", "WordPress Specialist", "AI Solutions Engineer"].map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3.5 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-xs font-semibold flex items-center gap-1.5"
                        >
                          <Star size={12} className="text-blue-400 fill-blue-400" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl font-light">
                      Web Developer, WordPress Specialist, dan Technology Consultant dengan pengalaman 10+ tahun dalam membangun website, aplikasi web, serta solusi digital untuk bisnis dan organisasi. Aktif berbagi pengetahuan dan berkontribusi dalam pengembangan ekosistem teknologi web di Indonesia.
                    </p>
                  </div>
                </motion.div>

                {/* Staggered Vertical Resume Modules */}
                <div className="flex flex-col gap-10">
                  
                  {/* Item 2: Stat Counters */}
                  <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ amount: 0.1, once: false }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-5"
                  >
                    {[
                      { start: 0, target: 10, pad: true, label: "Years Experience", icon: Calendar, color: "from-blue-600/20 to-blue-500/5", border: "border-blue-500/30" },
                      { start: 0, target: 6, pad: true, label: "Strategic Roles", icon: ShieldCheck, color: "from-cyan-600/20 to-cyan-500/5", border: "border-cyan-500/30" },
                      { start: 128, target: 368, pad: false, label: "Clients & Partners", icon: User, color: "from-purple-600/20 to-purple-500/5", border: "border-purple-500/30" }
                    ].map((stat, i) => (
                      <div 
                        key={i}
                        className={`flex flex-col items-center justify-center p-6 rounded-3xl bg-gradient-to-b ${stat.color} border ${stat.border} text-center shadow-xl`}
                      >
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-3 text-cyan-300">
                          <stat.icon size={20} />
                        </div>
                        <span className="text-4xl font-black text-white mb-1 tracking-tighter">
                          <CountUp start={stat.start} end={stat.target} padZeros={stat.pad} suffix="+" />
                        </span>
                        <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">{stat.label}</span>
                      </div>
                    ))}
                  </motion.div>

                  {/* Item 3: Core Expertise */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.1, once: false }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-7 w-1.5 bg-blue-500 rounded-full" />
                      <h3 className="text-base uppercase tracking-[0.2em] text-white font-bold">
                        CORE EXPERTISE
                      </h3>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        { icon: WordPressIcon, title: "WordPress Engineering", desc: "Pengembangan website WordPress, custom theme, plugin, integrasi API, dan solusi berbasis WordPress yang scalable." },
                        { icon: Database, title: "Web Application", desc: "Merancang dan mengembangkan aplikasi web dengan arsitektur frontend dan backend modern, termasuk React, Node.js, dan API." },
                        { icon: Cpu, title: "Web Performance", desc: "Optimasi Core Web Vitals, caching, asset delivery, database, dan server untuk meningkatkan kecepatan serta efisiensi website." },
                        { icon: Layout, title: "UI/UX & Web Design", desc: "Merancang pengalaman digital yang modern, intuitif, responsif, dan berorientasi pada kebutuhan pengguna." },
                        { icon: Search, title: "SEO & Digital Growth", desc: "Mengembangkan fondasi teknis dan struktur website yang mendukung SEO, discoverability, serta pertumbuhan digital." },
                        { icon: Briefcase, title: "Technology Consulting", desc: "Menganalisis kebutuhan, menentukan teknologi, merancang solusi, dan mengarahkan implementasi proyek digital dari awal hingga deployment." }
                      ].map((skill, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, y: 30, scale: 0.9 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ amount: 0.1, once: false }}
                          transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                          className="flex gap-4 p-5 rounded-2xl bg-slate-950/50 border border-white/10 hover:border-blue-400/40 hover:bg-slate-900/70 transition-all duration-300 shadow-lg"
                        >
                          <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center shrink-0 text-cyan-300">
                            <skill.icon className="w-5 h-5 text-cyan-300" />
                          </div>
                          <div>
                            <span className="wpcc-h4 text-slate-100 font-bold block mb-1">{skill.title}</span>
                            <p className="text-slate-400 text-xs leading-relaxed">{skill.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Item 4: Career & Professional Journey Timeline */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.1, once: false }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-7 w-1.5 bg-cyan-400 rounded-full" />
                      <h3 className="text-base uppercase tracking-[0.2em] text-white font-bold">
                        CAREER & PROFESSIONAL JOURNEY
                      </h3>
                    </div>

                    <div className="relative border-l-2 border-slate-800 ml-3 sm:ml-5 pl-5 sm:pl-7 space-y-6">
                      {[
                        { role: "Founder & CEO", company: "Ziezan Solutions", year: "2021 — Present", desc: "Memimpin pengembangan solusi website dan digital untuk bisnis, organisasi, dan berbagai kebutuhan transformasi digital.", location: "Baros, Serang, Banten" },
                        { role: "Co-Organizer & Speaker", company: "WordPress Meetup Serang", year: "2022 — Present", desc: "Aktif dalam kegiatan komunitas WordPress melalui knowledge sharing, meetup, workshop, dan pengembangan ekosistem pengguna serta developer lokal.", location: "Kota Serang, Banten" },
                        { role: "Chief Technology Officer", company: "Nest Digital Solutions", year: "2022 — 2025", desc: "Memimpin arah teknologi, pengembangan sistem, serta koordinasi engineering dalam implementasi solusi digital perusahaan.", location: "Sukoharjo, Jawa Tengah" }
                      ].map((exp, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, x: -30, scale: 0.95 }}
                          whileInView={{ opacity: 1, x: 0, scale: 1 }}
                          viewport={{ amount: 0.1, once: false }}
                          transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                          className="relative"
                        >
                          <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-slate-900 border-4 border-blue-500 flex items-center justify-center shadow-md">
                            <span className="w-1 h-1 rounded-full bg-white" />
                          </div>
                          
                          <div className="p-5 rounded-2xl bg-slate-950/40 border border-white/10 hover:border-blue-400/30 transition-all duration-300 shadow-md">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
                              <span className="px-3 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase w-fit">
                                {exp.year}
                              </span>
                              <span className="text-slate-400 text-xs font-medium flex items-center gap-1">
                                <MapPin size={12} />
                                {exp.location}
                              </span>
                            </div>
                            <h4 className="text-slate-100 font-bold text-lg">{exp.role}</h4>
                            <p className="text-cyan-400 font-semibold text-xs mb-2">{exp.company}</p>
                            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{exp.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Item 5: Community & Knowledge Sharing */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.1, once: false }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="p-6 sm:p-8 rounded-3xl bg-slate-950/50 border border-white/10 flex flex-col gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <Users className="text-cyan-400 w-5 h-5" />
                      <h3 className="text-base uppercase tracking-[0.2em] text-white font-bold">
                        COMMUNITY & KNOWLEDGE SHARING
                      </h3>
                    </div>
                    
                    <p className="text-slate-200 text-sm font-semibold">
                      Aktif berbagi pengetahuan mengenai:
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {["WordPress", "Web Development", "UI/UX", "Web Performance", "SEO", "AI", "Digital Technology"].map((item, idx) => (
                        <span key={idx} className="text-xs bg-blue-500/10 border border-blue-400/20 text-blue-300 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> {item}
                        </span>
                      ))}
                    </div>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                      Berkomitmen membantu mahasiswa, developer, dan pelaku teknologi memahami bagaimana teknologi web dapat digunakan untuk belajar, berkarya, membangun karier, dan menciptakan solusi nyata.
                    </p>
                  </motion.div>

                  {/* Item 6: Community & Professional Focus */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.1, once: false }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-7 w-1.5 bg-indigo-500 rounded-full" />
                      <h3 className="text-base uppercase tracking-[0.2em] text-white font-bold">
                        COMMUNITY & PROFESSIONAL FOCUS
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        { title: "Open Source Contributor", desc: "Berbagi dan berkontribusi pada ekosistem teknologi terbuka.", icon: Globe },
                        { title: "WordPress Community", desc: "Aktif dalam komunitas dan kegiatan WordPress lokal.", icon: Users },
                        { title: "Speaker & Educator", desc: "Membagikan pengetahuan melalui meetup, workshop, dan sesi edukasi.", icon: GraduationCap },
                        { title: "Web Performance", desc: "Berfokus pada website yang cepat, efisien, dan scalable.", icon: Cpu },
                        { title: "AI Solutions", desc: "Mengeksplorasi pemanfaatan AI untuk meningkatkan produktivitas dan solusi digital.", icon: BrainCircuit }
                      ].map((item, i) => (
                        <div key={i} className="p-5 rounded-2xl bg-slate-950/40 border border-white/10 flex flex-col gap-2">
                          <div className="flex items-center gap-2.5 text-cyan-300">
                            <item.icon size={18} />
                            <span className="font-bold text-sm text-white">{item.title}</span>
                          </div>
                          <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Item 7: Professional Philosophy */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.1, once: false }}
                    transition={{ duration: 0.8 }}
                    className="p-6 rounded-3xl bg-gradient-to-r from-blue-950/40 via-indigo-950/40 to-slate-950/60 border border-blue-500/20 text-center"
                  >
                    <span className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-bold block mb-2">
                      PROFESSIONAL PHILOSOPHY
                    </span>
                    <blockquote className="text-lg sm:text-xl font-serif text-white italic max-w-2xl mx-auto">
                      "Build technology that is useful, accessible, scalable, and built to last."
                    </blockquote>
                  </motion.div>

                  {/* Item 8: Connect with Febri */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.1, once: false }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-slate-950/80 border border-white/10"
                  >
                    <div>
                      <h4 className="text-white font-bold text-base mb-1">Connect with Febri</h4>
                      <p className="text-slate-400 text-xs">WordPress · Web Development · AI · Digital Transformation</p>
                    </div>
                    <button 
                      onClick={() => setIsModalOpen(false)}
                      className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-blue-600/30 hover:scale-105 active:scale-95"
                    >
                      Close Profile
                    </button>
                  </motion.div>

                </div>
              </div>
            </motion.div>
          </React.Fragment>
        )}
      </AnimatePresence>,
      document.body
    )}
    </>
  );
};

