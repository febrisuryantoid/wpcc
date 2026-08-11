import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SceneProps } from '../types';
import { TypewriterText } from '../ui/TypewriterText';
import { audioManager } from '../utils/audioManager';
import { SlideAnimationProvider, useSlideAnimation } from '../ui/SlideAnimationContext';
import { FileText, Calendar, Compass, Sparkles, Plus, Layers, Clock, CornerDownRight, CheckCircle2 } from 'lucide-react';

interface PostItem {
  id: string;
  title: string;
  category: string;
  time: string;
}

interface PageItem {
  id: string;
  title: string;
  parent?: string;
  isNew?: boolean;
}

const initialPosts: PostItem[] = [
  { id: 'p1', title: 'Mengenal Gutenberg Modern di Era Full Site Editing', category: 'Artikel', time: 'Baru saja' },
  { id: 'p2', title: 'WordCamp Asia Sukses Digelar dengan Ribuan Partisipan', category: 'Berita', time: '1 jam lalu' }
];

const initialPages: PageItem[] = [
  { id: 'g1', title: '🏠 Beranda Utama (Home)' },
  { id: 'g2', title: 'Tentang Kami (About Us)', parent: 'g1' },
  { id: 'g3', title: 'Layanan & Solusi (Services)', parent: 'g1' }
];

export const Slide26: React.FC<SceneProps> = (props) => {
  if (!props.isActive) return null;

  return (
    <SlideAnimationProvider scene={props.scene} isActive={props.isActive}>
      <Slide26Content {...props} />
    </SlideAnimationProvider>
  );
};

const Slide26Content: React.FC<SceneProps> = ({ scene }) => {
  const { 
    headingShowMode, 
    descriptionShowMode, 
    headingDuration, 
    descriptionDuration, 
    isTextFinished 
  } = useSlideAnimation();

  // Interactive Playground States
  const [posts, setPosts] = useState<PostItem[]>(initialPosts);
  const [pages, setPages] = useState<PageItem[]>(initialPages);
  const [activeTab, setActiveTab] = useState<'all' | 'posts' | 'pages'>('all');

  useEffect(() => {
    if (isTextFinished) {
      audioManager.playBoxPointSound(0, 2, 0.4);
    }
  }, [isTextFinished]);

  const handleAddPost = () => {
    audioManager.playSound('wpcc_click', 0.6);
    const postTitles = [
      'Panduan SEO WordPress 2026',
      '10 Plugin Keamanan Terbaik',
      'Tips Optimasi Kecepatan Loading',
      'Membangun Toko Online WooCommerce'
    ];
    const newPost: PostItem = {
      id: `p_${Date.now()}`,
      title: postTitles[posts.length % postTitles.length],
      category: posts.length % 2 === 0 ? 'Tutorial' : 'Tips Web',
      time: 'Baru saja'
    };
    setPosts(prev => [newPost, ...prev]);
  };

  const handleAddPage = () => {
    audioManager.playSound('wpcc_click', 0.6);
    const pageTitles = [
      'Kebijakan Privasi (Privacy Policy)',
      'Hubungi Kami (Contact Us)',
      'Tim & Manajemen (Our Team)',
      'Pertanyaan Umum (FAQ)'
    ];
    const newPage: PageItem = {
      id: `g_${Date.now()}`,
      title: pageTitles[(pages.length - 1) % pageTitles.length],
      parent: 'g1',
      isNew: true
    };
    setPages(prev => [...prev, newPage]);
  };

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-start pt-16 sm:pt-20 md:pt-24 p-3 sm:p-8 md:p-12 pb-20 sm:pb-24 z-10 pointer-events-none overflow-y-auto sm:overflow-hidden h-full max-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center h-full">
        
        {/* Header */}
        <div className="text-center mb-3 sm:mb-5">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Tipe Konten Utama
          </motion.div>

          <h2 className="wpcc-h3 font-bold text-white tracking-[-0.02em] leading-[1.15] font-serif drop-shadow-2xl text-center whitespace-normal sm:whitespace-nowrap">
            <TypewriterText text={scene.headline} showMode={headingShowMode} exactDuration={headingDuration} />
          </h2>

          {/* Divider line with glowing dot */}
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex items-center justify-center max-w-lg mx-auto w-full wpcc-divide-container my-1.5"
          >
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-cyan-500/40" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] mx-3 sm:mx-4 inline-block animate-pulse shrink-0" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-cyan-500/40" />
          </motion.div>

          <p className="text-slate-300 text-[12px] sm:text-[13px] md:text-[14px] max-w-2xl mx-auto font-normal leading-relaxed wpcc-slide-desc">
            <TypewriterText text={scene.supportingSentence || "WordPress menyediakan dua jenis konten utama, yaitu Posts untuk konten dinamis dan Pages untuk konten statis."} showMode={descriptionShowMode} exactDuration={descriptionDuration} />
          </p>
        </div>

        {/* Comparative Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-4xl mx-auto pointer-events-auto">
          
          {/* Left Column: Posts (Dinamis) */}
          <motion.div 
            className="p-4 sm:p-5 rounded-2xl bg-slate-950/60 border border-blue-500/20 backdrop-blur-xl flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, x: -35 }}
            animate={isTextFinished ? { opacity: 1, x: 0 } : { opacity: 0, x: -35 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              <div className="flex items-center justify-between mb-3 border-b border-white/[0.08] pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="wpcc-h4 font-extrabold text-white text-xs sm:text-sm">Posts (Konten Dinamis)</h3>
                    <span className="text-[9px] uppercase font-bold tracking-widest text-blue-300">Chronological Stream</span>
                  </div>
                </div>

                <button 
                  onClick={handleAddPost}
                  className="px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold flex items-center gap-1 shadow-[0_0_12px_rgba(37,99,235,0.4)] transition-all active:scale-95"
                >
                  <Plus className="w-3 h-3" /> Post Baru
                </button>
              </div>

              {/* Feed Preview Mockup Stack */}
              <div className="space-y-2 mb-3 max-h-[160px] overflow-y-auto pr-1">
                <AnimatePresence>
                  {posts.map((post) => (
                    <motion.div 
                      key={post.id}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="p-2.5 rounded-xl bg-slate-900/80 border border-blue-500/20 text-left relative overflow-hidden"
                    >
                      <div className="flex items-center justify-between text-[8px] text-blue-400 mb-1">
                        <span className="font-bold uppercase tracking-wider bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <Clock className="w-2.5 h-2.5" /> {post.time}
                        </span>
                      </div>
                      <h4 className="text-[11px] font-bold text-white leading-tight">
                        {post.title}
                      </h4>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Character lists */}
              <ul className="space-y-1.5 text-left text-[11px] text-slate-300 font-light">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1 shrink-0" />
                  <span>Diurutkan kronologis otomatis berdasarkan tanggal terbit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1 shrink-0" />
                  <span>Mendukung `Kategori` & `Tags` untuk pengelompokan artikel.</span>
                </li>
              </ul>
            </div>

            <div className="mt-3 pt-2.5 border-t border-white/[0.08] text-[10px] text-slate-400 font-mono flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Contoh: Artikel Blog, Berita, Pengumuman, Portofolio</span>
            </div>
          </motion.div>

          {/* Right Column: Pages (Statis) */}
          <motion.div 
            className="p-4 sm:p-5 rounded-2xl bg-slate-950/60 border border-purple-500/20 backdrop-blur-xl flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, x: 35 }}
            animate={isTextFinished ? { opacity: 1, x: 0 } : { opacity: 0, x: 35 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <div className="flex items-center justify-between mb-3 border-b border-white/[0.08] pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="wpcc-h4 font-extrabold text-white text-xs sm:text-sm">Pages (Konten Statis)</h3>
                    <span className="text-[9px] uppercase font-bold tracking-widest text-purple-300">Hierarchical Tree</span>
                  </div>
                </div>

                <button 
                  onClick={handleAddPage}
                  className="px-2.5 py-1 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-[10px] font-bold flex items-center gap-1 shadow-[0_0_12px_rgba(147,51,234,0.4)] transition-all active:scale-95"
                >
                  <Plus className="w-3 h-3" /> Page Baru
                </button>
              </div>

              {/* Pages Tree Preview Mockup */}
              <div className="space-y-1.5 mb-3 max-h-[160px] overflow-y-auto pr-1">
                <div className="p-2 rounded-xl bg-slate-900/80 border border-purple-500/20 text-left">
                  <h4 className="text-[11px] font-bold text-white leading-tight flex items-center gap-1.5">
                    {initialPages[0].title}
                  </h4>
                  <div className="pl-3 mt-1.5 border-l-2 border-purple-500/30 space-y-1.5">
                    {pages.slice(1).map(p => (
                      <motion.div 
                        key={p.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-[10px] text-purple-200 font-medium flex items-center gap-1"
                      >
                        <CornerDownRight className="w-2.5 h-2.5 text-purple-400" /> {p.title}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Character lists */}
              <ul className="space-y-1.5 text-left text-[11px] text-slate-300 font-light">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1 shrink-0" />
                  <span>Statis, bertahan di menu navigasi utama tanpa terikat tanggal.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1 shrink-0" />
                  <span>Mendukung struktur hierarki induk-anak (Parent-Child).</span>
                </li>
              </ul>
            </div>

            <div className="mt-3 pt-2.5 border-t border-white/[0.08] text-[10px] text-slate-400 font-mono flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <span>Contoh: Home, About, Services, Contact, Privacy Policy</span>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

