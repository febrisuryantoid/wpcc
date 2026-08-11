import React from 'react';
import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { Sparkles } from 'lucide-react';
import { TypewriterText } from '../ui/TypewriterText';
import { SlideAnimationProvider, useSlideAnimation } from '../ui/SlideAnimationContext';

import adobeLogo from '../../assets/logo/adobe.svg';
import capgeminiLogo from '../../assets/logo/capgemini.svg';
import cnnLogo from '../../assets/logo/cnn.svg';
import cunyLogo from '../../assets/logo/cuny.svg';
import disneyLogo from '../../assets/logo/disney.svg';
import globalnewsLogo from '../../assets/logo/globalnews.svg';
import harvardLogo from '../../assets/logo/harvarduniversity.svg';
import microsoftLogo from '../../assets/logo/microsoft.svg';
import nasaLogo from '../../assets/logo/nasa.svg';
import nypostLogo from '../../assets/logo/newyorkpost.svg';
import qualtricsLogo from '../../assets/logo/qualtrics.svg';
import rollingstoneLogo from '../../assets/logo/rollingstone.svg';
import samsungLogo from '../../assets/logo/samsung.svg';
import spotifyLogo from '../../assets/logo/spotify.svg';
import taylorswiftLogo from '../../assets/logo/taylorswift.svg';
import techcrunchLogo from '../../assets/logo/techcrunch.svg';
import tedLogo from '../../assets/logo/ted.svg';
import timeLogo from '../../assets/logo/time.svg';
import voxLogo from '../../assets/logo/vox.svg';
import whitehouseLogo from '../../assets/logo/whitehouse.svg';

interface LogoItem {
  id: string;
  name: string;
  src: string;
  category: 'Government' | 'Technology' | 'Enterprise' | 'Media' | 'Education';
}

const logos: LogoItem[] = [
  { id: 'nasa', name: 'NASA', src: nasaLogo, category: 'Government' },
  { id: 'microsoft', name: 'Microsoft', src: microsoftLogo, category: 'Technology' },
  { id: 'disney', name: 'Disney', src: disneyLogo, category: 'Enterprise' },
  { id: 'whitehouse', name: 'The White House', src: whitehouseLogo, category: 'Government' },
  { id: 'harvard', name: 'Harvard University', src: harvardLogo, category: 'Education' },
  
  { id: 'time', name: 'Time Magazine', src: timeLogo, category: 'Media' },
  { id: 'cnn', name: 'CNN', src: cnnLogo, category: 'Media' },
  { id: 'adobe', name: 'Adobe', src: adobeLogo, category: 'Technology' },
  { id: 'spotify', name: 'Spotify', src: spotifyLogo, category: 'Technology' },
  { id: 'techcrunch', name: 'TechCrunch', src: techcrunchLogo, category: 'Media' },
  
  { id: 'samsung', name: 'Samsung', src: samsungLogo, category: 'Enterprise' },
  { id: 'capgemini', name: 'Capgemini', src: capgeminiLogo, category: 'Enterprise' },
  { id: 'rollingstone', name: 'Rolling Stone', src: rollingstoneLogo, category: 'Media' },
  { id: 'vox', name: 'Vox Media', src: voxLogo, category: 'Media' },
  { id: 'qualtrics', name: 'Qualtrics', src: qualtricsLogo, category: 'Technology' },
  
  { id: 'taylorswift', name: 'Taylor Swift', src: taylorswiftLogo, category: 'Media' },
  { id: 'ted', name: 'TED', src: tedLogo, category: 'Education' },
  { id: 'cuny', name: 'CUNY', src: cunyLogo, category: 'Education' },
  { id: 'globalnews', name: 'Global News', src: globalnewsLogo, category: 'Media' },
  { id: 'nypost', name: 'New York Post', src: nypostLogo, category: 'Media' },
];

export const Slide12: React.FC<SceneProps> = (props) => {
  if (!props.isActive) return null;

  return (
    <SlideAnimationProvider scene={props.scene} isActive={props.isActive}>
      <Slide12Content {...props} />
    </SlideAnimationProvider>
  );
};

const Slide12Content: React.FC<SceneProps> = ({ scene }) => {
  const { 
    headingShowMode, 
    descriptionShowMode, 
    headingDuration, 
    descriptionDuration, 
    isTextFinished 
  } = useSlideAnimation();

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center pt-16 sm:pt-18 md:pt-20 pb-14 sm:pb-16 px-4 sm:px-6 md:px-8 z-10 pointer-events-none overflow-y-auto h-full max-h-screen w-full"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center items-center my-auto space-y-3 sm:space-y-4 md:space-y-5">
        
        {/* Header Section */}
        <div className="text-center flex-shrink-0 w-full space-y-1.5 sm:space-y-2">
          {/* Eyebrow */}
          <motion.div 
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            REAL-WORLD WORDPRESS
          </motion.div>

          {/* H2 Headline */}
          <h2 className="wpcc-h3 font-bold text-white tracking-[-0.02em] leading-[1.15] font-serif drop-shadow-sm text-center whitespace-normal md:whitespace-nowrap">
            <TypewriterText 
              text={scene.headline || "Used by Global Brands & Organizations"} 
              showMode={headingShowMode} 
              exactDuration={headingDuration} 
            />
          </h2>

          {/* Divider line with glowing dot */}
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex items-center justify-center max-w-sm sm:max-w-md mx-auto w-full wpcc-divide-container my-1.5"
          >
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-cyan-500/40" />
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] mx-2.5 inline-block animate-pulse shrink-0" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-cyan-500/40" />
          </motion.div>

          {/* Description */}
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl sm:max-w-3xl mx-auto font-light leading-relaxed wpcc-slide-desc">
            <TypewriterText 
              text={scene.supportingSentence || "WordPress bersifat gratis dan open-source, serta digunakan oleh lebih dari 43% dari seluruh website di dunia. Berbagai perusahaan kelas dunia juga menggunakan WordPress sebagai CMS (Content Management System) mereka."} 
              showMode={descriptionShowMode} 
              exactDuration={descriptionDuration} 
            />
          </p>
        </div>

        {/* 5x4 Logo Grid */}
        <div className="w-full max-w-4xl sm:max-w-5xl px-2 sm:px-4 mx-auto">
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-3 w-full">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.id}
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                animate={isTextFinished ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.85, y: 15 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.035,
                  ease: [0.215, 0.61, 0.355, 1.0] 
                }}
                className="group relative h-10 sm:h-12 md:h-14 bg-white/85 backdrop-blur-md border border-white/50 rounded-lg sm:rounded-xl flex items-center justify-center p-2 sm:p-2.5 transition-all duration-300 hover:bg-white hover:border-cyan-400/60 shadow-md hover:shadow-cyan-500/25"
              >
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  title={logo.name}
                  className="max-h-[70%] max-w-[84%] w-auto h-auto object-contain transition-all duration-300 group-hover:scale-105 pointer-events-none"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Caption & Short Conclusion Footer */}
        <motion.div 
          className="text-center flex flex-col items-center gap-0.5 shrink-0 pt-1"
          initial={{ opacity: 0, y: 10 }}
          animate={isTextFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="text-cyan-300/90 font-semibold text-[10px] sm:text-xs md:text-sm tracking-widest uppercase">
            Enterprise · Media · Government · Education · Technology
          </div>
          <div className="text-slate-400 text-[11px] sm:text-xs md:text-sm font-light">
            WordPress scales from individual creators to global organizations.
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};
