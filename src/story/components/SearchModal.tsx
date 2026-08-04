import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ChevronRight, FileText, Sparkles, CornerDownLeft, Home } from 'lucide-react';
import { SceneConfig } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSlide: (index: number) => void;
  scenes: SceneConfig[];
  currentIndex: number; // -1 for cover, 0..57 for slides
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectSlide,
  scenes,
  currentIndex,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on modal open
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Build searchable items list including Cover
  const allItems = React.useMemo(() => {
    const coverItem = {
      isCover: true,
      index: -1,
      headline: 'Cover Presentasi',
      supportingSentence: 'Halaman Cover Utama WordPress Campus Connect',
      points: ['Official Presentation Cover', 'Febri Suryanto', 'Kresuber Digital'],
    };

    const slideItems = scenes.map((scene, idx) => ({
      isCover: false,
      index: idx,
      headline: scene.headline,
      supportingSentence: scene.supportingSentence || '',
      points: scene.points || [],
    }));

    return [coverItem, ...slideItems];
  }, [scenes]);

  // Filter items based on query
  const filteredResults = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allItems.map((item) => ({ item, score: 0 }));

    return allItems
      .map((item) => {
        if (item.isCover) {
          const isCoverQuery = q === 'cover' || q === 'home' || q === '0' || q === 'sampul';
          const matchHeadline = item.headline.toLowerCase().includes(q);
          const matchSupport = item.supportingSentence.toLowerCase().includes(q);
          if (isCoverQuery || matchHeadline || matchSupport) {
            return { item, score: isCoverQuery ? 200 : 50 };
          }
          return null;
        }

        const slideNumStr = (item.index + 1).toString();
        const paddedNumStr = (item.index + 1).toString().padStart(2, '0');
        const headlineStr = item.headline.toLowerCase();
        const supportStr = item.supportingSentence.toLowerCase();
        const pointsStr = item.points.join(' ').toLowerCase();

        const numMatch =
          q === slideNumStr ||
          q === paddedNumStr ||
          q === `#${slideNumStr}` ||
          q === `#${paddedNumStr}` ||
          q === `slide ${slideNumStr}` ||
          q === `slide ${paddedNumStr}`;

        const headlineMatch = headlineStr.includes(q);
        const supportMatch = supportStr.includes(q);
        const pointsMatch = pointsStr.includes(q);

        if (numMatch || headlineMatch || supportMatch || pointsMatch) {
          let score = 0;
          if (numMatch) score += 100;
          if (headlineMatch) score += 50;
          if (supportMatch) score += 20;
          if (pointsMatch) score += 10;

          return { item, score };
        }
        return null;
      })
      .filter((entry): entry is { item: (typeof allItems)[0]; score: number } => entry !== null)
      .sort((a, b) => b.score - a.score);
  }, [query, allItems]);

  // Reset selectedIndex if filtered list shrinks
  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredResults.length]);

  // Keyboard navigation inside modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredResults.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredResults.length) % Math.max(1, filteredResults.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredResults[selectedIndex]) {
          onSelectSlide(filteredResults[selectedIndex].item.index);
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredResults, selectedIndex, onClose, onSelectSlide]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md pointer-events-auto">
        {/* Click outside to close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-[#0b0f19] border border-blue-500/30 rounded-2xl shadow-[0_0_50px_rgba(59,88,230,0.3)] overflow-hidden flex flex-col z-10 max-h-[80vh]"
        >
          {/* Top Search Input Bar */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-white/5">
            <Search className="w-5 h-5 text-blue-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari (misal: Cover, 01, WordPress, Website Statis)..."
              className="w-full bg-transparent text-white placeholder-slate-400 text-base outline-none font-sans"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="text-xs text-slate-400 border border-white/10 px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 transition-colors ml-2 shrink-0"
            >
              ESC
            </button>
          </div>

          {/* Results List Area */}
          <div className="overflow-y-auto p-3 space-y-2 max-h-[60vh] scrollbar-thin scrollbar-thumb-blue-500/30">
            {filteredResults.length === 0 ? (
              <div className="py-12 px-6 text-center text-slate-400">
                <FileText className="w-10 h-10 mx-auto mb-3 text-slate-600" />
                <p className="text-base font-medium text-slate-300">Tidak ada slide yang ditemukan</p>
                <p className="text-xs text-slate-500 mt-1">
                  Coba ketik kata kunci seperti <span className="text-blue-400 font-mono">Cover</span>, <span className="text-blue-400 font-mono">18</span>, atau <span className="text-blue-400 font-mono">WordPress</span>
                </p>

                {/* Suggestion Chips */}
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {['Cover', 'WordPress', 'Website Statis', 'Website Dinamis', 'HTML', 'CSS', 'JavaScript', 'Server'].map(
                    (tag) => (
                      <button
                        key={tag}
                        onClick={() => setQuery(tag)}
                        className="text-xs px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 hover:bg-blue-500/20 transition-colors"
                      >
                        {tag}
                      </button>
                    )
                  )}
                </div>
              </div>
            ) : (
              filteredResults.map(({ item }, idx) => {
                const isSelected = idx === selectedIndex;
                const isCurrent = item.index === currentIndex;

                return (
                  <div
                    key={item.isCover ? 'cover' : `slide_${item.index}`}
                    onClick={() => {
                      onSelectSlide(item.index);
                      onClose();
                    }}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`group relative flex items-start gap-4 p-3.5 rounded-xl transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-blue-600/20 border-blue-500/50 shadow-md'
                        : 'bg-white/5 border-transparent hover:bg-white/10'
                    }`}
                  >
                    {/* Badge */}
                    <div
                      className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-lg font-mono text-sm font-bold ${
                        item.isCover
                          ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-400/30'
                          : isCurrent
                          ? 'bg-blue-500 text-white shadow-[0_0_15px_rgba(59,88,230,0.8)]'
                          : isSelected
                          ? 'bg-blue-500/30 text-blue-200 border border-blue-400/30'
                          : 'bg-white/10 text-slate-300'
                      }`}
                    >
                      {item.isCover ? (
                        <Home className="w-5 h-5 text-blue-300" />
                      ) : (
                        (item.index + 1).toString().padStart(2, '0')
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm md:text-base font-semibold text-white truncate group-hover:text-blue-300 transition-colors">
                          {item.headline}
                        </span>
                        {isCurrent && (
                          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 shrink-0">
                            Aktif
                          </span>
                        )}
                        {item.isCover && (
                          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 shrink-0">
                            Cover
                          </span>
                        )}
                      </div>

                      <p className="text-xs md:text-sm text-slate-400 line-clamp-1 font-light">
                        {item.supportingSentence}
                      </p>

                      {item.points && item.points.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {item.points.slice(0, 4).map((pt, pIdx) => (
                            <span
                              key={pIdx}
                              className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300"
                            >
                              {pt}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Arrow */}
                    <div className="shrink-0 self-center text-slate-400 group-hover:text-blue-400 transition-colors">
                      {isSelected ? (
                        <CornerDownLeft className="w-4 h-4 text-blue-400 animate-pulse" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Info */}
          <div className="px-5 py-2.5 bg-white/[0.02] border-t border-white/10 flex justify-between items-center text-xs text-slate-400 font-mono">
            <span>
              Menampilkan {filteredResults.length} dari {allItems.length} halaman
            </span>
            <div className="flex items-center gap-3">
              <span>
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-slate-300">↑</kbd>{' '}
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-slate-300">↓</kbd> Navigasi
              </span>
              <span>
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-slate-300">↵</kbd> Pilih
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
