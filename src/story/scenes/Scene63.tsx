import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { SceneLayout } from '../components/SceneLayout';
import { useSlideAnimation } from '../components/SlideAnimationContext';
import { ExternalLink, Globe } from 'lucide-react';
import { audioManager } from '../utils/audioManager';

interface SocialLink {
  id: string;
  label: string;
  url: string;
  displayUrl: string;
  iconType: 'svg' | 'lucide';
  iconSrc?: string;
  isWhite?: boolean;
}

const links: SocialLink[] = [
  {
    id: 'web',
    label: 'Website',
    url: 'https://febrisuryanto.com',
    displayUrl: 'febrisuryanto.com',
    iconType: 'svg',
    iconSrc: 'https://pos9z4l1pzm0tayq.public.blob.vercel-storage.com/icon.svg'
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/febrisuryantoid',
    displayUrl: 'linkedin.com/in/febrisuryantoid',
    iconType: 'svg',
    iconSrc: 'https://www.svgrepo.com/show/448234/linkedin.svg'
  },
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://instagram.com/febrisuryantoid',
    displayUrl: 'instagram.com/febrisuryantoid',
    iconType: 'svg',
    iconSrc: 'https://www.svgrepo.com/show/452229/instagram-1.svg'
  },
  {
    id: 'youtube',
    label: 'YouTube',
    url: 'https://youtube.com/@febrisuryantoid',
    displayUrl: 'youtube.com/@febrisuryantoid',
    iconType: 'svg',
    iconSrc: 'https://www.svgrepo.com/show/448261/youtube.svg'
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    url: 'https://tiktok.com/@febrisuryantoid',
    displayUrl: 'tiktok.com/@febrisuryantoid',
    iconType: 'svg',
    iconSrc: 'https://www.svgrepo.com/show/452114/tiktok.svg'
  },
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/febrisuryantoid',
    displayUrl: 'github.com/febrisuryantoid',
    iconType: 'svg',
    iconSrc: 'https://www.svgrepo.com/show/448225/github.svg',
    isWhite: true
  }
];

interface LinkCardProps {
  item: SocialLink;
  index: number;
}

const LinkCard: React.FC<LinkCardProps> = ({ item, index }) => {
  const { isTextFinished } = useSlideAnimation();

  const hasPlayedRef = React.useRef(false);

  useEffect(() => {
    if (!isTextFinished) {
      hasPlayedRef.current = false;
      return;
    }
    if (hasPlayedRef.current) return;

    // Play point reveal sound staggered matching the entrance delay
    const timer = setTimeout(() => {
      audioManager.playBoxPointSound(index, 63, 0.45);
      hasPlayedRef.current = true;
    }, (index * 0.4) * 1000);
    return () => clearTimeout(timer);
  }, [index, isTextFinished]);

  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 15 }}
      animate={isTextFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{ duration: 0.4, delay: index * 0.4 }}
      onClick={() => audioManager.playSound('wpcc_click', 0.6)}
      onMouseEnter={() => audioManager.playSound('wpcc_click', 0.4)}
      className="group relative flex items-center justify-between p-3.5 sm:p-4 rounded-[12px] bg-slate-900/40 group-hover:bg-slate-900/70 border border-blue-500/20 hover:border-blue-400/60 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/20 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.5)]"
    >
      {/* Left Side: Icon in Glassmorphism Container */}
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300 p-2">
        {item.iconType === 'lucide' ? (
          <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
        ) : (
          <img 
            src={item.iconSrc} 
            alt={item.label} 
            className={`w-6 h-6 sm:w-7 sm:h-7 object-contain ${item.isWhite ? 'brightness-0 invert' : ''}`}
          />
        )}
      </div>

      {/* Left-Aligned Text Area */}
      <div className="flex-1 min-w-0 mx-3.5 text-left">
        <span className="text-sm sm:text-base font-semibold text-slate-100 group-hover:text-white transition-colors tracking-tight font-mono block truncate">
          {item.displayUrl}
        </span>
      </div>

      {/* Right Side: External Link Icon */}
      <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-400/20 flex items-center justify-center shrink-0 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
        <ExternalLink className="w-4 h-4" />
      </div>
    </motion.a>
  );
};

export const Scene63: React.FC<SceneProps> = ({ scene, isActive }) => {
  const { isTextFinished } = useSlideAnimation();
  const showContent = true;

  return (
    <SceneLayout scene={scene} isActive={isActive}>
      {showContent && (
        <motion.div 
          className="w-full max-w-4xl mx-auto mt-4 sm:mt-6 pointer-events-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isTextFinished ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Sleek Button Grid: 2 Columns on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {links.map((item, index) => (
              <LinkCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </motion.div>
      )}
    </SceneLayout>
  );
};
