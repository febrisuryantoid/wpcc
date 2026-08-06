import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { TypewriterText } from '../ui/TypewriterText';
import { audioManager } from '../utils/audioManager';
import { SlideAnimationProvider, useSlideAnimation } from '../ui/SlideAnimationContext';
import { LayoutDashboard, FileText, Folder, Eye, Settings, Terminal, Sparkles } from 'lucide-react';

export const Slide25: React.FC<SceneProps> = (props) => {
  if (!props.isActive) return null;

  return (
    <SlideAnimationProvider scene={props.scene} isActive={props.isActive}>
      <Slide25Content {...props} />
    </SlideAnimationProvider>
  );
};

const Slide25Content: React.FC<SceneProps> = ({ scene }) => {
  const { 
    headingShowMode, 
    descriptionShowMode, 
    headingDuration, 
    descriptionDuration, 
    isTextFinished 
  } = useSlideAnimation();

  useEffect(() => {
    if (isTextFinished) {
      audioManager.playBoxPointSound(0, 2, 0.4);
    }
  }, [isTextFinished]);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-start pt-[146px] sm:pt-[100px] p-6 sm:p-10 md:p-16 z-10 pointer-events-none overflow-y-auto sm:overflow-hidden h-full max-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-4 sm:gap-6 items-center justify-between h-full max-h-full">
        {/* Left: Heading and Info (45% Width) */}
        <div className="w-full md:w-[45%] flex flex-col items-center sm:items-start text-center sm:text-left shrink-0">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Pusat Kontrol Website
          </motion.div>
          <h2 className="wpcc-h3 font-bold text-white tracking-[-0.02em] leading-[1.15] font-serif drop-shadow-2xl text-center sm:text-left mb-2 whitespace-normal sm:whitespace-nowrap">
            <TypewriterText text={scene.headline} showMode={headingShowMode} exactDuration={headingDuration} />
          </h2>

          {/* Divider line with glowing dot */}
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex items-center justify-center sm:justify-start max-w-lg mx-auto sm:mx-0 w-full wpcc-divide-container"
          >
            <div className="sm:hidden h-[1px] flex-1 bg-gradient-to-r from-transparent to-cyan-500/40" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] mx-3 sm:ml-0 sm:mr-4 inline-block animate-pulse shrink-0" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-cyan-500/40 sm:bg-gradient-to-r sm:from-cyan-500/40 sm:to-transparent" />
          </motion.div>
          <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] font-normal text-slate-300 mb-6 leading-relaxed wpcc-slide-desc">
            <TypewriterText text={scene.supportingSentence || "Dashboard merupakan pusat kontrol WordPress untuk mengelola konten, tampilan, pengguna, plugin, dan seluruh pengaturan website."} showMode={descriptionShowMode} exactDuration={descriptionDuration} />
          </p>

          <motion.div 
            className="space-y-3.5 w-full pointer-events-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isTextFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/30 border border-white/[0.04]">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0"><LayoutDashboard className="w-4 h-4" /></div>
              <div>
                <h4 className="text-xs font-bold text-white">Navigasi Sentral</h4>
                <p className="text-[10px] text-slate-400 hidden sm:block mt-0.5">Akses langsung ke semua fitur utama hanya dalam sekali klik di sidebar kiri.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/30 border border-white/[0.04]">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0"><Terminal className="w-4 h-4" /></div>
              <div>
                <h4 className="text-xs font-bold text-white">Instan & Responsif</h4>
                <p className="text-[10px] text-slate-400 hidden sm:block mt-0.5">Ringkasan status website, pembaruan, aktivitas terbaru, dan draf cepat langsung terlihat.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Beautiful Vector WP Dashboard Mockup (55% Width) */}
        <motion.div 
          className="w-full md:w-[55%] pointer-events-auto h-full max-h-[60vh] md:max-h-[75vh] flex items-center justify-center relative"
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1.0], delay: 0.1 }}
        >
          {/* Dashboard Canvas */}
          <div className="w-full max-w-[540px] aspect-[4/3] rounded-xl border border-white/[0.08] bg-slate-950/80 shadow-[0_24px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl flex overflow-hidden">
            {/* Sidebar Mock */}
            <div className="w-[110px] sm:w-[140px] bg-[#1d2327] border-r border-white/[0.04] p-2 flex flex-col gap-2 shrink-0">
              <div className="flex items-center gap-2 px-1.5 py-1 mb-2 border-b border-white/[0.06]">
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white text-[10px] font-black">W</div>
                <span className="text-[10px] font-extrabold text-white hidden sm:inline">WordPress Admin</span>
              </div>
              <div className="space-y-1">
                <SidebarItem icon={LayoutDashboard} text="Dashboard" active={true} />
                <SidebarItem icon={FileText} text="Posts" />
                <SidebarItem icon={Folder} text="Media" />
                <SidebarItem icon={Eye} text="Appearance" />
                <SidebarItem icon={Settings} text="Plugins" />
                <SidebarItem icon={Settings} text="Settings" />
              </div>
            </div>

            {/* Main Area Mock */}
            <div className="flex-1 bg-[#f0f0f1]/10 p-3 sm:p-4 flex flex-col gap-3 overflow-hidden text-left">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                <span className="text-xs font-extrabold text-white">Dashboard Overview</span>
                <span className="text-[9px] text-slate-400 font-mono">WP Version 6.4.3</span>
              </div>

              {/* Welcome Card */}
              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600/20 to-indigo-600/10 border border-blue-500/20 shadow-md">
                <h3 className="wpcc-h4 font-bold text-white flex items-center gap-1.5">
                  Welcome to your WordPress Dashboard! <span className="animate-bounce">👋</span>
                </h3>
                <p className="text-[10px] text-slate-300 font-light mt-1">
                  We’ve assembled some links to get you started:
                </p>
                <div className="grid grid-cols-2 gap-2 mt-2.5">
                  <div className="text-[9px] text-blue-400 hover:underline cursor-pointer">✍️ Write your first blog post</div>
                  <div className="text-[9px] text-blue-400 hover:underline cursor-pointer">🎨 Edit your site layout</div>
                </div>
              </div>

              {/* Grid Widgets */}
              <div className="grid grid-cols-2 gap-3 flex-1 overflow-hidden">
                {/* Site Health */}
                <div className="p-2.5 rounded-lg bg-slate-900/40 border border-white/[0.06] flex flex-col justify-between">
                  <span className="text-[10px] font-bold text-white">Site Health Status</span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] text-emerald-400 font-bold">Good / Aman</span>
                  </div>
                  <p className="text-[8px] text-slate-400 leading-tight mt-1">Website Anda dalam kondisi optimal & aman.</p>
                </div>

                {/* At a Glance */}
                <div className="p-2.5 rounded-lg bg-slate-900/40 border border-white/[0.06] flex flex-col justify-between">
                  <span className="text-[10px] font-bold text-white">At a Glance</span>
                  <div className="space-y-0.5 mt-1 text-[8px] text-slate-300">
                    <div>📝 3 Posts</div>
                    <div>📄 5 Pages</div>
                  </div>
                  <p className="text-[8px] text-slate-400 leading-tight mt-1">Theme: <strong>Twenty Twenty-Four</strong></p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

interface SidebarItemProps {
  icon: any;
  text: string;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, text, active = false }) => {
  return (
    <div className={`flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer transition-all ${active ? 'bg-blue-600 text-white shadow-md shadow-blue-500/10' : 'text-slate-400 hover:bg-white/[0.04] hover:text-white'}`}>
      <Icon className="w-3.5 h-3.5 shrink-0" />
      <span className="text-[9px] font-medium hidden sm:inline">{text}</span>
    </div>
  );
};
