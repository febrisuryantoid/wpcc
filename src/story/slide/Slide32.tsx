import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { TypewriterText } from '../ui/TypewriterText';
import { audioManager } from '../utils/audioManager';
import { SlideAnimationProvider, useSlideAnimation } from '../ui/SlideAnimationContext';
import { Download, LogIn, Monitor, PenTool, LayoutTemplate, Globe, ChevronRight, Sparkles } from 'lucide-react';

const workflowSteps = [
  { step: '01', title: 'Install WP', label: 'Inisialisasi', icon: Download, desc: 'Instalasi CMS secara lokal di komputer Anda.' },
  { step: '02', title: 'Login Admin', label: 'Dashboard', icon: LogIn, desc: 'Masuk pusat administrasi utama /wp-admin.' },
  { step: '03', title: 'Block Theme', label: 'Tampilan', icon: Monitor, desc: 'Mengaktifkan tema berbasis Full Site Editing.' },
  { step: '04', title: 'Site Editor', label: 'Layouting', icon: LayoutTemplate, desc: 'Menyusun kustomisasi header, menu, & footer.' },
  { step: '05', title: 'Buat Konten', label: 'Halaman', icon: PenTool, desc: 'Merancang homepage & artikel berita kustom.' },
  { step: '06', title: 'Publish!', label: 'Go Live', icon: Globe, desc: 'Menayangkan website secara resmi ke internet.' },
];

export const Slide32: React.FC<SceneProps> = (props) => {
  if (!props.isActive) return null;

  return (
    <SlideAnimationProvider scene={props.scene} isActive={props.isActive}>
      <Slide32Content {...props} />
    </SlideAnimationProvider>
  );
};

const Slide32Content: React.FC<SceneProps> = ({ scene }) => {
  const { 
    headingShowMode, 
    descriptionShowMode, 
    headingDuration, 
    descriptionDuration, 
    isTextFinished 
  } = useSlideAnimation();

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
        <div className="mb-4 sm:mb-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1.5 sm:mb-2"
          >
            <Sparkles className="w-3.5 h-3.5" /> Alur Pengerjaan
          </motion.div>
          <h2 className="wpcc-h3 font-bold text-white tracking-[-0.02em] leading-[1.15] font-serif drop-shadow-2xl text-center whitespace-normal sm:whitespace-nowrap">
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
          <p className="mt-1.5 sm:mt-2 text-slate-400 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] max-w-2xl mx-auto font-light leading-snug wpcc-slide-desc">
            <TypewriterText text={scene.supportingSentence || "Secara umum, proses membangun website dengan WordPress mengikuti alur sederhana berikut."} showMode={descriptionShowMode} exactDuration={descriptionDuration} />
          </p>
        </div>

        {/* Workflow Horizontal Process Stepper */}
        <div className="w-full pointer-events-auto relative mt-2">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[40px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-blue-600/30 via-cyan-400/50 to-indigo-500/30 -z-0 rounded-full">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-400 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.8)]"
              initial={{ width: '0%' }}
              animate={isTextFinished ? { width: '100%' } : { width: '0%' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-2.5 sm:gap-4 relative z-10 overflow-hidden">
            {workflowSteps.map((step, idx) => (
              <WorkflowStepCard 
                key={step.step} 
                step={step} 
                index={idx} 
                isTextFinished={isTextFinished} 
                isLast={idx === workflowSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface StepProps {
  step: typeof workflowSteps[0];
  index: number;
  isTextFinished: boolean;
  isLast: boolean;
}

const WorkflowStepCard: React.FC<StepProps> = ({ step, index, isTextFinished, isLast }) => {
  const IconComp = step.icon;
  const hasPlayedRef = React.useRef(false);

  useEffect(() => {
    if (!isTextFinished) {
      hasPlayedRef.current = false;
      return;
    }
    if (hasPlayedRef.current) return;

    const timer = setTimeout(() => {
      audioManager.playBoxPointSound(index, 6, 0.35);
      hasPlayedRef.current = true;
    }, index * 200);
    return () => clearTimeout(timer);
  }, [index, isTextFinished]);

  return (
    <motion.div
      className="flex flex-col text-left justify-start bg-slate-900/40 border border-white/[0.05] backdrop-blur-md p-[6px_6px_4px_6px] sm:pt-[10px] sm:pr-[10px] sm:pb-[5px] sm:pl-[10px] rounded-2xl relative transition-all duration-300 hover:border-blue-500/30 hover:bg-slate-900/60"
      initial={{ opacity: 0, y: 15 }}
      animate={isTextFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      {/* Number Badge */}
      <div className="mb-2 sm:mb-3 bg-blue-500/10 border border-blue-400/20 px-2 py-0.5 rounded-md text-blue-400 text-[10px] sm:text-xs font-bold font-sans tracking-wider w-max z-20">
        {step.step}
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-col flex-grow text-left justify-start w-full">
        {/* Baris 1: Ikon & Heading */}
        <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-lg bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 group-hover:border-blue-400 group-hover:text-blue-300 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover:scale-110">
            <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <h3 className="wpcc-h4 font-bold text-white tracking-tight leading-tight flex-1">
            {step.title}
          </h3>
        </div>
        
        {/* Baris 2: Subheading/Desc */}
        <div className="flex flex-col text-left w-full pl-0 sm:pl-0 mt-1 sm:mt-1.5">
          <p className="text-[13px] sm:text-xs text-slate-300 leading-normal font-light sm:font-medium text-left">
            {step.desc}
          </p>
        </div>
      </div>

      {/* Mobile Arrow connector */}
      {!isLast && (
        <div className="hidden lg:hidden absolute bottom-[-16px] left-1/2 -translate-x-1/2 z-20 text-blue-400/30">
          <ChevronRight className="w-4 h-4 rotate-90" />
        </div>
      )}
    </motion.div>
  );
};
