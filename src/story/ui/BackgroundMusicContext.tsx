import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { Volume2, Volume1, VolumeX, Music, Check, Settings, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BackgroundMusicContextType {
  isMuted: boolean;
  volume: number; // 0.0 to 1.0
  isPlaying: boolean;
  toggleMute: () => void;
  changeVolume: (val: number) => void;
  playMusic: () => void;
  pauseMusic: () => void;
}

const BackgroundMusicContext = createContext<BackgroundMusicContextType | undefined>(undefined);

export const useBackgroundMusic = () => {
  const context = useContext(BackgroundMusicContext);
  if (!context) {
    throw new Error('useBackgroundMusic must be used within a BackgroundMusicProvider');
  }
  return context;
};

interface ProviderProps {
  children: React.ReactNode;
}

export const BackgroundMusicProvider: React.FC<ProviderProps> = ({ children }) => {
  // Read initial states from localStorage if available
  const [isMuted, setIsMuted] = useState<boolean>(() => {
    const saved = localStorage.getItem('bg_music_muted');
    return saved ? saved === 'true' : false;
  });

  const [volume, setVolume] = useState<number>(() => {
    const saved = localStorage.getItem('bg_music_volume');
    return saved ? parseFloat(saved) : 0.35; // Default volume 35%
  });

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize Audio element once on mount
  useEffect(() => {
    const audio = new Audio("https://herkcjez4t5tfiiv.public.blob.vercel-storage.com/Minor_Horizon.mp3");
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = isMuted ? 0 : volume;
    audioRef.current = audio;

    // Monitor actual play/pause states
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    // Try to auto-play on first user interaction to bypass browser autoplay policies
    const attemptAutoplay = () => {
      if (!isMuted && audio.paused) {
        audio.play()
          .then(() => {
            console.log("Background music autoplay success via interaction");
            removeInteractions();
          })
          .catch((e) => console.log("Interaction autoplay blocked:", e));
      } else {
        removeInteractions();
      }
    };

    const removeInteractions = () => {
      window.removeEventListener('click', attemptAutoplay);
      window.removeEventListener('keydown', attemptAutoplay);
      window.removeEventListener('touchstart', attemptAutoplay);
    };

    window.addEventListener('click', attemptAutoplay);
    window.addEventListener('keydown', attemptAutoplay);
    window.addEventListener('touchstart', attemptAutoplay);

    return () => {
      removeInteractions();
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // Sync volume and mute state to actual HTMLAudioElement
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
    localStorage.setItem('bg_music_muted', String(isMuted));
    localStorage.setItem('bg_music_volume', String(volume));
  }, [isMuted, volume]);

  const toggleMute = () => {
    setIsMuted(prev => {
      const nextMuted = !prev;
      if (audioRef.current) {
        if (nextMuted) {
          // Keep active track paused or just volume zeroed out so it loops continuously
          audioRef.current.volume = 0;
        } else {
          audioRef.current.volume = volume;
          if (audioRef.current.paused) {
            audioRef.current.play().catch(e => console.log("Audio resume error:", e));
          }
        }
      }
      return nextMuted;
    });
  };

  const changeVolume = (val: number) => {
    const clamped = Math.max(0, Math.min(1, val));
    setVolume(clamped);
    if (clamped > 0 && isMuted) {
      setIsMuted(false);
    }
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : clamped;
      if (clamped > 0 && audioRef.current.paused) {
        audioRef.current.play().catch(e => console.log("Audio play error on volume change:", e));
      }
    }
  };

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(e => console.log("Manual play failed:", e));
    }
  };

  const pauseMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <BackgroundMusicContext.Provider value={{
      isMuted,
      volume,
      isPlaying,
      toggleMute,
      changeVolume,
      playMusic,
      pauseMusic
    }}>
      {children}
    </BackgroundMusicContext.Provider>
  );
};

// ==========================================
// Minimalist & Modern Popover Component
// ==========================================
interface AudioControlPopoverProps {
  isOpen: boolean;
  onClose: () => void;
  align?: 'left' | 'right' | 'center';
  position?: 'top' | 'bottom';
}

export const AudioControlPopover: React.FC<AudioControlPopoverProps> = ({ 
  isOpen, 
  onClose, 
  align = 'right',
  position = 'bottom'
}) => {
  const { isMuted, volume, toggleMute, changeVolume, isPlaying, playMusic } = useBackgroundMusic();
  const popoverRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handleOutsideClick = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen, onClose]);

  const isTop = position === 'top';
  const alignClass = {
    left: `left-0 ${isTop ? 'origin-bottom-left' : 'origin-top-left'}`,
    right: `right-0 ${isTop ? 'origin-bottom-right' : 'origin-top-right'}`,
    center: `left-1/2 -translate-x-1/2 ${isTop ? 'origin-bottom' : 'origin-top'}`
  }[align];

  // Pick correct speaker icon depending on state
  const getVolumeIcon = () => {
    if (isMuted || volume === 0) return <VolumeX className="w-4 h-4 text-rose-400" />;
    if (volume < 0.4) return <Volume1 className="w-4 h-4 text-cyan-400" />;
    return <Volume2 className="w-4 h-4 text-blue-400 animate-pulse" />;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={popoverRef}
          initial={{ opacity: 0, scale: 0.92, y: isTop ? -10 : 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: isTop ? -10 : 10 }}
          transition={{ type: 'spring', damping: 20, stiffness: 220 }}
          className={`absolute ${isTop ? 'bottom-12 sm:bottom-14' : 'top-12'} ${alignClass} w-[240px] bg-slate-950/95 border border-blue-500/30 backdrop-blur-xl rounded-2xl p-4 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_15px_rgba(37,99,235,0.15)] z-50 pointer-events-auto text-white`}
          style={{ contentVisibility: 'auto' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
            <div className="flex items-center gap-1.5">
              <Music className="w-3.5 h-3.5 text-blue-400 animate-bounce" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-300">Pengaturan Audio</span>
            </div>
            <button 
              onClick={onClose}
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Tutup"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Toggle Switch */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-medium text-slate-200">Musik Latar</span>
            <button
              onClick={() => {
                toggleMute();
                if (isMuted) {
                  playMusic();
                }
              }}
              className={`relative w-10 h-5.5 rounded-full p-0.5 transition-colors duration-300 ${
                !isMuted ? 'bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.5)]' : 'bg-slate-800'
              }`}
            >
              <motion.div
                layout
                className="w-4.5 h-4.5 bg-white rounded-full shadow-md"
                animate={{ x: !isMuted ? 18 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
          </div>

          {/* Volume Control */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-slate-400">Volume</span>
              <span className="text-[11px] font-bold text-blue-400">{Math.round(isMuted ? 0 : volume * 100)}%</span>
            </div>
            
            <div className="flex items-center gap-2.5">
              <button 
                onClick={toggleMute}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {getVolumeIcon()}
              </button>
              
              {/* Custom Input Range */}
              <input
                type="range"
                min="0"
                max="100"
                value={isMuted ? 0 : Math.round(volume * 100)}
                onChange={(e) => {
                  const val = parseInt(e.target.value, 10);
                  changeVolume(val / 100);
                }}
                className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500 focus:outline-none focus:ring-0 active:accent-cyan-400 transition-all [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-400 [&::-webkit-slider-thumb]:shadow-[0_0_8px_rgba(59,130,246,0.8)]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
