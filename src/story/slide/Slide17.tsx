import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { TypewriterText } from '../ui/TypewriterText';
import { audioManager } from '../utils/audioManager';
import { SlideAnimationProvider, useSlideAnimation } from '../ui/SlideAnimationContext';
import { Code, Palette, Puzzle, Layers, Search, TrendingUp, ShoppingCart, GraduationCap, Sparkles } from 'lucide-react';

const careerRoles = [
  { title: 'WordPress Developer', desc: 'Membangun fungsionalitas kustom, integrasi API, dan sistem website kompleks.', icon: Code },
  { title: 'Web Designer', desc: 'Merancang tata letak visual, tipografi, dan pengalaman pengguna (UX) yang memikat.', icon: Palette },
  { title: 'Plugin Developer', desc: 'Membuat modul ekstensi kustom untuk dipasarkan secara global di direktori WordPress.', icon: Puzzle },
  { title: 'Theme Developer', desc: 'Membuat desain template visual bertingkat tinggi untuk dipasarkan atau klien korporat.', icon: Layers },
  { title: 'SEO Specialist', desc: 'Mengoptimalkan arsitektur website agar menduduki peringkat utama di mesin pencari Google.', icon: Search },
  { title: 'Digital Marketer', desc: 'Mengelola kampanye periklanan digital terintegrasi langsung dengan landing page WordPress.', icon: TrendingUp },
  { title: 'WooCommerce Expert', desc: 'Mengembangkan ekosistem toko online, gerbang pembayaran, dan manajemen inventori.', icon: ShoppingCart },
  { title: 'Trainer / Instructor', desc: 'Berbagi keahlian, memimpin workshop, dan mengedukasi generasi pengembang berikutnya.', icon: GraduationCap },
];

export const Slide17: React.FC<SceneProps> = (props) => {
  if (!props.isActive) return null;

  return (
    <SlideAnimationProvider scene={props.scene} isActive={props.isActive}>
      <Slide15Content {...props} />
    </SlideAnimationProvider>
  );
};

const Slide15Content: React.FC<SceneProps> = ({ scene }) => {
  const { 
    headingShowMode, 
    descriptionShowMode, 
    headingDuration, 
    descriptionDuration, 
    isTextFinished 
  } = useSlideAnimation();

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-start pt-14 sm:pt-18 md:pt-20 px-5 sm:px-[30px] lg:px-[40px] pb-20 sm:pb-24 z-10 pointer-events-none overflow-y-auto sm:overflow-hidden h-full max-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-[1800px] mx-auto flex flex-col justify-center h-full">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 shrink-0">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Ekosistem Industri
          </motion.div>
          <h2 className="wpcc-h3 font-bold text-white tracking-[-0.02em] leading-[1.15] font-serif drop-shadow-sm text-center whitespace-normal md:whitespace-nowrap">
            <TypewriterText text={scene.headline} showMode={headingShowMode} exactDuration={headingDuration} />
          </h2>

          <p className="mt-1 text-slate-300 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] max-w-4xl mx-auto font-light leading-relaxed wpcc-slide-desc my-2">
            <TypewriterText text={scene.supportingSentence || "Menguasai WordPress membuka pintu ke berbagai peran profesional di industri digital."} showMode={descriptionShowMode} exactDuration={descriptionDuration} />
          </p>

          {/* Divider line appears AFTER description finishes typing */}
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isTextFinished ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center justify-center max-w-lg mx-auto w-full wpcc-divide-container mb-2"
          >
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-cyan-500/40" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] mx-3 sm:mx-4 inline-block animate-pulse shrink-0" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-cyan-500/40" />
          </motion.div>
        </div>

        {/* Roles 4x2 Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 pointer-events-auto overflow-hidden">
          {careerRoles.map((role, idx) => (
            <RoleCard 
              key={role.title} 
              role={role} 
              index={idx} 
              isTextFinished={isTextFinished} 
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

interface CardProps {
  role: typeof careerRoles[0];
  index: number;
  isTextFinished: boolean;
}

const RoleCard: React.FC<CardProps> = ({ role, index, isTextFinished }) => {
  const IconComp = role.icon;
  const hasPlayedRef = React.useRef(false);

  useEffect(() => {
    if (!isTextFinished) {
      hasPlayedRef.current = false;
      return;
    }
    if (hasPlayedRef.current) return;

    const timer = setTimeout(() => {
      audioManager.playBoxPointSound(index, 8, 0.3);
      hasPlayedRef.current = true;
    }, index * 120);
    return () => clearTimeout(timer);
  }, [index, isTextFinished]);

  return (
    <motion.div
      className="py-[10px] px-[8px] sm:p-4 rounded-xl bg-slate-950/40 border border-white/[0.05] backdrop-blur-md hover:border-blue-500/40 hover:bg-slate-900/50 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all duration-300 flex flex-col items-start text-left cursor-pointer group"
      initial={{ opacity: 0, y: 15 }}
      animate={isTextFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onClick={() => audioManager.playSound('wpcc_click', 0.5)}
      onMouseEnter={() => audioManager.playSound('wpcc_click', 0.35)}
    >
      {/* Icon */}
      <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
        <IconComp className="w-4.5 h-4.5" />
      </div>

      <h3 className="sm:font-extrabold text-white mb-1.5 group-hover:text-blue-400 transition-colors wpcc-h4">{role.title}
      </h3>
      
      <p className="text-[13px] sm:text-xs text-slate-300/90 leading-normal font-light mt-1 sm:mt-0">{role.desc}
      </p>
    </motion.div>
  );
};
