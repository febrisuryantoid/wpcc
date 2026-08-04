import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { SceneLayout } from '../components/SceneLayout';
import { useSlideAnimation } from '../components/SlideAnimationContext';
import { Globe, BookOpen, FileText, Users, ShoppingBag, Palette, ExternalLink } from 'lucide-react';
import { audioManager } from '../utils/audioManager';

interface ResourceItem {
  id: string;
  title: string;
  description: string;
  url: string;
  displayUrl: string;
  icon: React.ElementType;
  iconColor: string;
  borderColor: string;
  glowColor: string;
}

const resources: ResourceItem[] = [
  {
    id: 'org',
    title: 'WordPress.org',
    description: 'Download WordPress, dokumentasi, dan berita terbaru.',
    url: 'https://wordpress.org',
    displayUrl: 'wordpress.org',
    icon: Globe,
    iconColor: '#3B82F6',
    borderColor: 'border-blue-500/30 hover:border-blue-400',
    glowColor: 'rgba(59, 130, 246, 0.3)'
  },
  {
    id: 'learn',
    title: 'Learn WordPress',
    description: 'Kursus gratis, workshop, dan materi pembelajaran resmi.',
    url: 'https://learn.wordpress.org',
    displayUrl: 'learn.wordpress.org',
    icon: BookOpen,
    iconColor: '#10B981',
    borderColor: 'border-emerald-500/30 hover:border-emerald-400',
    glowColor: 'rgba(16, 185, 129, 0.3)'
  },
  {
    id: 'docs',
    title: 'WordPress Documentation',
    description: 'Panduan lengkap penggunaan WordPress dari dasar hingga lanjutan.',
    url: 'https://developer.wordpress.org',
    displayUrl: 'developer.wordpress.org',
    icon: FileText,
    iconColor: '#8B5CF6',
    borderColor: 'border-purple-500/30 hover:border-purple-400',
    glowColor: 'rgba(139, 92, 246, 0.3)'
  },
  {
    id: 'community',
    title: 'WordPress Community',
    description: 'Bergabung dengan komunitas WordPress lokal maupun global.',
    url: 'https://make.wordpress.org/community',
    displayUrl: 'make.wordpress.org/community',
    icon: Users,
    iconColor: '#EC4899',
    borderColor: 'border-pink-500/30 hover:border-pink-400',
    glowColor: 'rgba(236, 72, 153, 0.3)'
  },
  {
    id: 'plugins',
    title: 'WordPress Plugin Directory',
    description: 'Ribuan plugin gratis untuk menambahkan fitur Website.',
    url: 'https://wordpress.org/plugins',
    displayUrl: 'wordpress.org/plugins',
    icon: ShoppingBag,
    iconColor: '#F59E0B',
    borderColor: 'border-amber-500/30 hover:border-amber-400',
    glowColor: 'rgba(245, 158, 11, 0.3)'
  },
  {
    id: 'themes',
    title: 'WordPress Theme Directory',
    description: 'Ribuan tema gratis yang dapat langsung digunakan.',
    url: 'https://wordpress.org/themes',
    displayUrl: 'wordpress.org/themes',
    icon: Palette,
    iconColor: '#06B6D4',
    borderColor: 'border-cyan-500/30 hover:border-cyan-400',
    glowColor: 'rgba(6, 182, 212, 0.3)'
  }
];

interface ResourceCardProps {
  item: ResourceItem;
  index: number;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ item, index }) => {
  const IconComp = item.icon as any;
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
      audioManager.playBoxPointSound(index, 61, 0.45);
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
      transition={{ duration: 0.4, delay: index * 0.4, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => audioManager.playSound('wpcc_click', 0.6)}
      onMouseEnter={() => audioManager.playSound('wpcc_click', 0.4)}
      className={`group relative flex items-center justify-between p-3.5 sm:p-4 rounded-[12px] bg-slate-900/40 group-hover:bg-slate-900/70 border ${item.borderColor} transition-all duration-300 hover:-translate-y-1 shadow-lg backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden`}
      style={{
        boxShadow: `0 8px 20px -8px ${item.glowColor}`
      }}
    >
      {/* Left Side: Icon in Box */}
      <div 
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 border group-hover:scale-110 transition-transform duration-300"
        style={{
          backgroundColor: `${item.iconColor}15`,
          borderColor: `${item.iconColor}40`
        }}
      >
        <IconComp className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: item.iconColor }} />
      </div>

      {/* Center: Title + Description + URL */}
      <div className="flex-1 min-w-0 mx-3.5 text-left">
        <div className="flex items-center gap-2">
          <h3 className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors truncate">
            {item.title}
          </h3>
        </div>
        <p className="text-[11px] sm:text-xs text-slate-300/80 leading-snug line-clamp-1 mt-0.5">
          {item.description}
        </p>
        <span className="text-[10px] font-mono text-blue-400/90 font-medium tracking-tight block mt-1 truncate">
          {item.displayUrl}
        </span>
      </div>

      {/* Right Side: External Link Button */}
      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-slate-400 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-400 transition-all">
        <ExternalLink className="w-4 h-4" />
      </div>
    </motion.a>
  );
};

export const Scene61: React.FC<SceneProps> = ({ scene, isActive }) => {
  const { isTextFinished } = useSlideAnimation();
  const showContent = true;

  return (
    <SceneLayout scene={scene} isActive={isActive}>
      {showContent && (
        <motion.div 
          className="w-full max-w-5xl mx-auto mt-3 sm:mt-4 pointer-events-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={isTextFinished ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Elongated Box Grid: 2 Columns on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {resources.map((item, index) => (
              <ResourceCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </motion.div>
      )}
    </SceneLayout>
  );
};
