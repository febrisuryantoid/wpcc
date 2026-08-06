import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useBackgroundMusic, AudioControlPopover } from './BackgroundMusicContext';
import { 
  Home, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Presentation, 
  Volume2, 
  VolumeX, 
  Search, 
  Maximize 
} from 'lucide-react';

interface NavigationProps {
  isNavbarVisible: boolean;
  isHoveringNavbar: boolean;
  setIsHoveringNavbar: (hover: boolean) => void;
  onHome: () => void;
  onPrev: () => void;
  onNext: () => void;
  prevDisabled: boolean;
  nextDisabled: boolean;
  isPlaying: boolean;
  onTogglePlay: () => void;
  isPresentationMode: boolean;
  onTogglePresentation: () => void;
  isMusicMuted: boolean;
  onToggleMusic: () => void;
  onOpenSearch: () => void;
  onToggleFullscreen: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  isNavbarVisible,
  isHoveringNavbar,
  setIsHoveringNavbar,
  onHome,
  onPrev,
  onNext,
  prevDisabled,
  nextDisabled,
  isPlaying,
  onTogglePlay,
  isPresentationMode,
  onTogglePresentation,
  isMusicMuted,
  onToggleMusic,
  onOpenSearch,
  onToggleFullscreen,
}) => {
  const [isMusicPopoverOpen, setIsMusicPopoverOpen] = useState(false);
  const { isMuted: globalMuted } = useBackgroundMusic();

  const baseBtnClass = "w-8 h-8 sm:w-9 sm:h-9 rounded-full shrink-0 inline-flex items-center justify-center p-0 m-0 border transition-all duration-200 cursor-pointer active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60";
  const inactiveBtnClass = `${baseBtnClass} border-transparent text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/15`;
  const activeBtnClass = `${baseBtnClass} border-blue-400/50 bg-blue-500/20 text-cyan-300 shadow-[0_0_12px_rgba(59,130,246,0.35)] hover:bg-blue-500/30`;
  const disabledBtnClass = "w-8 h-8 sm:w-9 sm:h-9 rounded-full shrink-0 inline-flex items-center justify-center p-0 m-0 border border-transparent text-slate-600 opacity-30 cursor-not-allowed pointer-events-none";

  return (
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[30] h-16 sm:h-20 px-4 sm:px-12 flex items-center justify-center pointer-events-auto"
      style={{ width: 'auto', minWidth: '320px', maxWidth: '100%' }}
      onMouseEnter={() => setIsHoveringNavbar(true)}
      onMouseMove={() => setIsHoveringNavbar(true)}
      onMouseLeave={() => setIsHoveringNavbar(false)}
      onTouchStart={() => setIsHoveringNavbar(true)}
      onTouchEnd={() => setIsHoveringNavbar(false)}
    >
      <motion.div 
        className="glass-nav h-11 sm:h-12 flex flex-nowrap items-center justify-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 rounded-full border border-white/15 bg-slate-950/80 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.15)]"
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: !isNavbarVisible ? 100 : 0, 
          opacity: !isNavbarVisible ? 0 : 1 
        }}
        style={{ pointerEvents: isNavbarVisible ? 'auto' : 'none' }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
      >
        {/* Cover Home Button */}
        <button 
          onClick={onHome} 
          className={inactiveBtnClass}
          title="Kembali ke Cover"
          aria-label="Kembali ke Cover"
        >
          <Home className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-slate-300 group-hover:text-cyan-300 transition-colors shrink-0" />
        </button>

        <div className="w-[1px] h-3.5 sm:h-4 bg-white/15 mx-0.5 shrink-0" aria-hidden="true" />

        {/* Prev Slide / Step */}
        <button 
          onClick={onPrev} 
          disabled={prevDisabled} 
          className={prevDisabled ? disabledBtnClass : inactiveBtnClass}
          title="Slide / Tahap Sebelumnya"
          aria-label="Slide / Tahap Sebelumnya"
        >
          <ChevronLeft className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-slate-300 group-hover:text-cyan-300 transition-colors shrink-0" />
        </button>
        
        {/* Next Slide / Step */}
        <button 
          onClick={onNext} 
          disabled={nextDisabled} 
          className={nextDisabled ? disabledBtnClass : inactiveBtnClass}
          title="Slide / Tahap Selanjutnya"
          aria-label="Slide / Tahap Selanjutnya"
        >
          <ChevronRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-slate-300 group-hover:text-cyan-300 transition-colors shrink-0" />
        </button>

        <div className="w-[1px] h-3.5 sm:h-4 bg-white/15 mx-0.5 shrink-0" aria-hidden="true" />
        
        {/* Auto Play Toggle Button */}
        <button
          onClick={onTogglePlay}
          className={isPlaying ? activeBtnClass : inactiveBtnClass}
          title={isPlaying ? "Jeda Putar Otomatis (Pause)" : "Mulai Putar Otomatis (Auto Play)"}
          aria-label={isPlaying ? "Jeda Putar Otomatis (Pause)" : "Mulai Putar Otomatis (Auto Play)"}
          aria-pressed={isPlaying}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-cyan-300 animate-pulse shrink-0" />
          ) : (
            <Play className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-slate-300 group-hover:text-cyan-300 transition-colors shrink-0" />
          )}
        </button>

        {/* Mode Presentasi Toggle Button */}
        <button
          onClick={onTogglePresentation}
          className={isPresentationMode ? activeBtnClass : inactiveBtnClass}
          title={isPresentationMode ? "Nonaktifkan Mode Presentasi" : "Aktifkan Mode Presentasi"}
          aria-label={isPresentationMode ? "Nonaktifkan Mode Presentasi" : "Aktifkan Mode Presentasi"}
          aria-pressed={isPresentationMode}
        >
          <Presentation className={`w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0 transition-colors ${isPresentationMode ? 'text-cyan-300' : 'text-slate-300 group-hover:text-cyan-300'}`} />
        </button>

        {/* Background Music Toggle Button */}
        <div className="relative">
          <button
            onClick={() => setIsMusicPopoverOpen(!isMusicPopoverOpen)}
            className={!globalMuted ? activeBtnClass : inactiveBtnClass}
            title={globalMuted ? "Pengaturan Musik Latar (Mute)" : "Pengaturan Musik Latar (Aktif)"}
            aria-label={globalMuted ? "Pengaturan Musik Latar (Mute)" : "Pengaturan Musik Latar (Aktif)"}
            aria-pressed={!globalMuted}
          >
            {!globalMuted ? (
              <Volume2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-cyan-300 animate-pulse shrink-0" />
            ) : (
              <VolumeX className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-slate-300 group-hover:text-red-400 transition-colors shrink-0" />
            )}
          </button>
          <AudioControlPopover 
            isOpen={isMusicPopoverOpen} 
            onClose={() => setIsMusicPopoverOpen(false)} 
            align="center" 
            position="top"
          />
        </div>

        <div className="w-[1px] h-3.5 sm:h-4 bg-white/15 mx-0.5 shrink-0" aria-hidden="true" />

        {/* Quick Search Button */}
        <button
          onClick={onOpenSearch}
          className={inactiveBtnClass}
          title="Cari Slide (Ctrl+K)"
          aria-label="Cari Slide (Ctrl+K)"
        >
          <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-slate-300 group-hover:text-cyan-300 transition-colors shrink-0" />
        </button>
        
        {/* Fullscreen Toggle */}
        <button 
          onClick={onToggleFullscreen} 
          className={inactiveBtnClass}
          title="Toggle Fullscreen"
          aria-label="Toggle Fullscreen"
        >
          <Maximize className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-slate-300 group-hover:text-cyan-300 transition-colors shrink-0" />
        </button>
      </motion.div>
    </div>
  );
};

export default Navigation;
