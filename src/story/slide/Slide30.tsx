import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SceneProps } from '../types';
import { TypewriterText } from '../ui/TypewriterText';
import { audioManager } from '../utils/audioManager';
import { SlideAnimationProvider, useSlideAnimation } from '../ui/SlideAnimationContext';
import { FileEdit, Sparkles, LayoutGrid, Plus, MoreHorizontal, Settings, AlignLeft, Eye, Check, Trash2, Image, Quote, MousePointerClick, RefreshCw } from 'lucide-react';

interface GutenbergBlock {
  id: string;
  type: 'paragraph' | 'image' | 'button' | 'heading' | 'quote';
  title: string;
  content: string;
  color: string;
}

const initialBlocks: GutenbergBlock[] = [
  {
    id: 'blk_1',
    type: 'paragraph',
    title: 'Paragraf Teks Utama',
    content: 'WordPress merupakan sarana paling fleksibel untuk mewujudkan website impian Anda dengan sangat instan...',
    color: '#2563eb' // blue-600
  },
  {
    id: 'blk_2',
    type: 'image',
    title: 'Hero-Banner.jpg',
    content: 'Media Block • Rasio 16:9 • Teroptimasi WebP',
    color: '#059669' // emerald-600
  },
  {
    id: 'blk_3',
    type: 'button',
    title: 'Tombol Aksi (Call To Action)',
    content: 'Hubungi Kami Sekaraang',
    color: '#7c3aed' // violet-600
  }
];

export const Slide30: React.FC<SceneProps> = (props) => {
  if (!props.isActive) return null;

  return (
    <SlideAnimationProvider scene={props.scene} isActive={props.isActive}>
      <Slide28Content {...props} />
    </SlideAnimationProvider>
  );
};

const Slide28Content: React.FC<SceneProps> = ({ scene }) => {
  const { 
    headingShowMode, 
    descriptionShowMode, 
    headingDuration, 
    descriptionDuration, 
    isTextFinished 
  } = useSlideAnimation();

  // Interactive Playground States
  const [blocks, setBlocks] = useState<GutenbergBlock[]>(initialBlocks);
  const [selectedBlockId, setSelectedBlockId] = useState<string>('blk_1');
  const [docTitle, setDocTitle] = useState<string>('Membangun Website Pertama Anda');
  const [isPublishedModalOpen, setIsPublishedModalOpen] = useState<boolean>(false);
  const [activeThemeColor, setActiveThemeColor] = useState<string>('#2563eb');

  useEffect(() => {
    if (isTextFinished) {
      audioManager.playBoxPointSound(0, 3, 0.4);
    }
  }, [isTextFinished]);

  const selectedBlock = blocks.find(b => b.id === selectedBlockId) || blocks[0];

  const handleSelectBlock = (id: string) => {
    setSelectedBlockId(id);
    audioManager.playSound('wpcc_click', 0.5);
  };

  const handleAddBlock = () => {
    audioManager.playSound('wpcc_click', 0.6);
    const blockTypes: GutenbergBlock['type'][] = ['paragraph', 'quote', 'button', 'image'];
    const randomType = blockTypes[blocks.length % blockTypes.length];
    
    let newBlock: GutenbergBlock = {
      id: `blk_${Date.now()}`,
      type: randomType,
      title: randomType === 'quote' ? 'Kutipan Mutiara' : randomType === 'paragraph' ? 'Paragraf Baru' : randomType === 'button' ? 'Tombol Sekunder' : 'Galeri Foto.jpg',
      content: randomType === 'quote' ? '"Desain adalah bagaimana sesuatu bekerja, bukan sekadar tampilannya."' : 'Konten blok baru yang siap disunting dalam editor Gutenberg.',
      color: activeThemeColor
    };

    setBlocks(prev => [...prev, newBlock]);
    setSelectedBlockId(newBlock.id);
  };

  const handleDeleteBlock = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (blocks.length <= 1) return;
    audioManager.playSound('wpcc_click', 0.4);
    const updated = blocks.filter(b => b.id !== id);
    setBlocks(updated);
    if (selectedBlockId === id) {
      setSelectedBlockId(updated[0].id);
    }
  };

  const handleColorChange = (colorHex: string) => {
    setActiveThemeColor(colorHex);
    audioManager.playSound('wpcc_click', 0.5);
    setBlocks(prev => prev.map(b => b.id === selectedBlockId ? { ...b, color: colorHex } : b));
  };

  const handlePublish = () => {
    audioManager.playSound('sphere_1', 0.8);
    setIsPublishedModalOpen(true);
  };

  const handleReset = () => {
    audioManager.playSound('wpcc_click', 0.4);
    setBlocks(initialBlocks);
    setSelectedBlockId('blk_1');
    setDocTitle('Membangun Website Pertama Anda');
  };

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-start pt-14 sm:pt-18 md:pt-20 px-5 sm:px-[30px] lg:px-[40px] pb-20 sm:pb-24 z-10 pointer-events-none overflow-y-auto sm:overflow-hidden h-full max-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-[1800px] mx-auto flex flex-col lg:flex-row gap-6 items-center justify-between h-full max-h-full">
        
        {/* Left Info Column (42% Width) */}
        <div className="w-full lg:w-[42%] flex flex-col items-center sm:items-start text-center sm:text-left shrink-0">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Editor Visual Modern
          </motion.div>
          
          <h2 className="wpcc-h3 font-bold text-white tracking-[-0.02em] leading-[1.15] font-serif drop-shadow-sm text-center sm:text-left mb-2 whitespace-normal md:whitespace-nowrap">
            <TypewriterText text={scene.headline} showMode={headingShowMode} exactDuration={headingDuration} />
          </h2>

          <p className="text-[12px] sm:text-[13px] md:text-[14px] font-normal text-slate-300 mb-3 leading-relaxed wpcc-slide-desc">
            <TypewriterText text={scene.supportingSentence || "Gutenberg adalah editor bawaan WordPress yang menggunakan konsep Block sehingga setiap bagian halaman dapat dibuat dan disusun secara visual."} showMode={descriptionShowMode} exactDuration={descriptionDuration} />
          </p>

          {/* Divider line appears AFTER description finishes typing */}
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isTextFinished ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center justify-center sm:justify-start max-w-lg mx-auto sm:mx-0 w-full wpcc-divide-container mb-4"
          >
            <div className="sm:hidden h-[1px] flex-1 bg-gradient-to-r from-transparent to-cyan-500/40" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] mx-3 sm:ml-0 sm:mr-4 inline-block animate-pulse shrink-0" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-cyan-500/40 sm:bg-gradient-to-r sm:from-cyan-500/40 sm:to-transparent" />
          </motion.div>

          <motion.div 
            className="space-y-3 w-full pointer-events-auto text-xs text-slate-300 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={isTextFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/40 border border-white/[0.06] backdrop-blur-md">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <LayoutGrid className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Konsep WYSIWYG Sejati</h4>
                <p className="text-[10px] text-slate-400">Tampilan di editor persis sama dengan hasil publikasi akhir.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/40 border border-white/[0.06] backdrop-blur-md">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <MousePointerClick className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Mini Playground Interaktif</h4>
                <p className="text-[10px] text-cyan-300 font-medium">Klik blok di sebelah kanan untuk menyunting warna, menambah blok, & simulasikan terbit!</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Interactive Gutenberg Interface Mockup (58% Width) */}
        <motion.div 
          className="w-full lg:w-[58%] pointer-events-auto flex flex-col items-center justify-center relative"
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1.0], delay: 0.1 }}
        >
          {/* Top Instruction Banner */}
          <div className="w-full max-w-[560px] flex items-center justify-between mb-2 text-[10px] text-cyan-300/90 font-mono px-1">
            <span className="flex items-center gap-1.5 font-bold">
              <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" /> SIMULATOR EDITOR GUTENBERG (LIVE DEMO)
            </span>
            <button 
              onClick={handleReset} 
              className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors px-2 py-0.5 rounded bg-slate-800/60 border border-white/10"
            >
              <RefreshCw className="w-2.5 h-2.5" /> Reset Demo
            </button>
          </div>

          {/* Gutenberg Screen Mockup Frame */}
          <div className="w-full max-w-[560px] h-[360px] sm:h-[400px] rounded-2xl border border-white/15 bg-slate-950/90 shadow-[0_24px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl flex overflow-hidden relative">
            
            {/* Main Canvas Editor Area */}
            <div className="flex-1 p-3 sm:p-4 flex flex-col text-left border-r border-white/[0.08] overflow-hidden bg-slate-950/60">
              
              {/* Top Bar Editor Header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5 shrink-0">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={handleAddBlock}
                    className="h-6 px-2.5 bg-blue-600 hover:bg-blue-500 rounded-md text-white text-[10px] font-bold flex items-center gap-1 transition-all shadow-[0_0_12px_rgba(37,99,235,0.4)] hover:scale-105 active:scale-95"
                  >
                    <Plus className="w-3 h-3" /> Add Block
                  </button>
                  <span className="text-[9px] text-slate-400 hidden sm:inline">+{blocks.length} Blok Aktif</span>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={handlePublish}
                    className="h-6 px-3 bg-emerald-600 hover:bg-emerald-500 rounded-md text-white text-[10px] font-bold flex items-center gap-1.5 shadow-[0_0_12px_rgba(5,150,105,0.4)] transition-all hover:scale-105"
                  >
                    <Eye className="w-3 h-3" /> Publish / Preview
                  </button>
                </div>
              </div>

              {/* Editable Document Title */}
              <div className="py-2 border-b border-white/[0.04]">
                <span className="text-[8px] text-slate-500 uppercase tracking-widest font-bold">Judul Halaman</span>
                <input 
                  type="text" 
                  value={docTitle} 
                  onChange={(e) => setDocTitle(e.target.value)}
                  className="w-full text-xs sm:text-sm font-black text-white bg-transparent outline-none border-b border-transparent focus:border-blue-500/50 transition-colors"
                />
              </div>

              {/* Interactive Editing Blocks Canvas Stack */}
              <div className="space-y-2.5 flex-1 overflow-y-auto pt-2.5 pr-1">
                {blocks.map((block) => {
                  const isSelected = block.id === selectedBlockId;
                  return (
                    <motion.div 
                      key={block.id}
                      layout
                      onClick={() => handleSelectBlock(block.id)}
                      className={`p-2.5 rounded-xl border transition-all cursor-pointer relative group ${
                        isSelected 
                          ? 'bg-slate-900/90 shadow-[0_0_20px_rgba(37,99,235,0.2)]' 
                          : 'bg-slate-900/40 border-white/[0.05] hover:border-white/20'
                      }`}
                      style={{
                        borderColor: isSelected ? block.color : undefined
                      }}
                    >
                      {/* Floating Block Mini Toolbar when Selected */}
                      {isSelected && (
                        <motion.div 
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute -top-3.5 left-3 bg-slate-800 border border-white/20 px-2 py-0.5 rounded-md shadow-xl flex items-center gap-2 text-[8px] text-white font-mono z-20"
                        >
                          <div className="flex items-center gap-1 font-bold text-cyan-300">
                            {block.type === 'paragraph' && <AlignLeft className="w-2.5 h-2.5" />}
                            {block.type === 'image' && <Image className="w-2.5 h-2.5" />}
                            {block.type === 'button' && <LayoutGrid className="w-2.5 h-2.5" />}
                            {block.type === 'quote' && <Quote className="w-2.5 h-2.5" />}
                            <span className="capitalize">{block.type} Block</span>
                          </div>
                          <span className="text-slate-500">|</span>
                          <button 
                            onClick={(e) => handleDeleteBlock(block.id, e)}
                            className="text-red-400 hover:text-red-300 transition-colors"
                            title="Hapus Blok"
                          >
                            <Trash2 className="w-2.5 h-2.5" />
                          </button>
                        </motion.div>
                      )}

                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] font-extrabold text-white" style={{ color: block.color }}>
                          {block.title}
                        </span>
                        <span className="text-[8px] text-slate-500 font-mono">#{block.id.slice(-4)}</span>
                      </div>

                      <p className="text-[10px] text-slate-300 leading-relaxed font-light">
                        {block.content}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right Block Inspector / Sidebar */}
            <div className="w-[125px] sm:w-[150px] bg-[#1a2128] p-3 flex flex-col gap-3 shrink-0 text-[9px] border-l border-white/[0.08]">
              <div className="flex items-center gap-1.5 border-b border-white/[0.08] pb-2 shrink-0">
                <Settings className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-extrabold text-white text-[10px]">Inspector</span>
              </div>
              
              <div className="space-y-3 flex-1 overflow-y-auto">
                <div className="space-y-1">
                  <span className="text-slate-400 font-bold block text-[8px] uppercase tracking-wider">Blok Terpilih</span>
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-white/[0.06] text-cyan-300 font-bold text-[9px]">
                    {selectedBlock ? selectedBlock.title : 'Tidak ada'}
                  </div>
                </div>

                {/* Color Settings Palette */}
                <div className="space-y-1.5">
                  <span className="text-slate-400 font-bold block text-[8px] uppercase tracking-wider">Warna Akses Blok</span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { hex: '#2563eb', label: 'Blue' },
                      { hex: '#059669', label: 'Emerald' },
                      { hex: '#7c3aed', label: 'Purple' },
                      { hex: '#d97706', label: 'Amber' },
                      { hex: '#e11d48', label: 'Crimson' },
                    ].map((c) => (
                      <button
                        key={c.hex}
                        onClick={() => handleColorChange(c.hex)}
                        style={{ backgroundColor: c.hex }}
                        className={`w-5 h-5 rounded-full border transition-all flex items-center justify-center ${
                          selectedBlock?.color === c.hex 
                            ? 'ring-2 ring-white scale-110 border-white' 
                            : 'border-white/20 hover:scale-105'
                        }`}
                      >
                        {selectedBlock?.color === c.hex && <Check className="w-2.5 h-2.5 text-white" />}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1 pt-2 border-t border-white/[0.08]">
                  <span className="text-slate-400 font-bold block text-[8px] uppercase tracking-wider">Tata Letak</span>
                  <div className="p-1.5 rounded-lg bg-slate-900/60 border border-white/[0.04] text-slate-300 text-[8px]">
                    Lebar: Full Width (100%)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Live Published Modal Preview Overlay */}
      <AnimatePresence>
        {isPublishedModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-4 pointer-events-auto"
            onClick={() => setIsPublishedModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-2xl bg-slate-900 border border-cyan-500/40 p-6 shadow-[0_0_50px_rgba(34,211,238,0.3)] text-left"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <Check className="w-4 h-4 p-0.5 rounded-full bg-emerald-500/20" /> Tampilan Web Terbit (Real-Time Preview)
                </div>
                <button 
                  onClick={() => setIsPublishedModalOpen(false)}
                  className="text-slate-400 hover:text-white text-xs px-2 py-1 bg-slate-800 rounded-md"
                >
                  Tutup ✕
                </button>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-white/10 space-y-3">
                <h1 className="text-lg font-extrabold text-white">{docTitle}</h1>
                <div className="space-y-2">
                  {blocks.map(b => (
                    <div key={b.id} className="p-2 rounded bg-slate-900 border-l-2" style={{ borderColor: b.color }}>
                      <p className="text-xs text-slate-200">{b.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <button 
                  onClick={() => setIsPublishedModalOpen(false)}
                  className="px-4 py-1.5 rounded-lg bg-blue-600 text-white font-bold text-xs hover:bg-blue-500 transition-colors"
                >
                  Selesai Simulasi
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

