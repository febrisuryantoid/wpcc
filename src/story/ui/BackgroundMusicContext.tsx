import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { Volume2, Volume1, VolumeX, Music, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { audioManager } from '../utils/audioManager';

export class MusicManager {
  private static instance: MusicManager;
  private audio: HTMLAudioElement | null = null;
  private volume: number = 0.35;
  private isMuted: boolean = false;
  private isPlaying: boolean = false;
  private onStateChange: (() => void) | null = null;

  private constructor() {
    const savedMuted = localStorage.getItem('bg_music_muted');
    this.isMuted = savedMuted ? savedMuted === 'true' : false;

    const savedVolume = localStorage.getItem('bg_music_volume');
    this.volume = savedVolume ? parseFloat(savedVolume) : 0.35;
  }

  public static getInstance(): MusicManager {
    if (!MusicManager.instance) {
      MusicManager.instance = new MusicManager();
    }
    return MusicManager.instance;
  }

  public registerCallback(cb: () => void) {
    this.onStateChange = cb;
  }

  public init() {
    if (this.audio) return;
    this.audio = new Audio("https://herkcjez4t5tfiiv.public.blob.vercel-storage.com/Minor_Horizon.mp3");
    this.audio.loop = true;
    this.audio.preload = "auto";
    this.audio.volume = this.isMuted ? 0 : this.volume;

    this.audio.addEventListener('play', () => {
      this.isPlaying = true;
      if (this.onStateChange) this.onStateChange();
    });

    this.audio.addEventListener('pause', () => {
      this.isPlaying = false;
      if (this.onStateChange) this.onStateChange();
    });
  }

  public play() {
    this.init();
    if (this.audio) {
      if (this.audio.paused) {
        this.audio.play()
          .then(() => {
            this.isPlaying = true;
            if (this.onStateChange) this.onStateChange();
          })
          .catch(e => console.log("Music play blocked:", e));
      }
    }
  }

  public pause() {
    if (this.audio) {
      this.audio.pause();
      this.isPlaying = false;
      if (this.onStateChange) this.onStateChange();
    }
  }

  public toggleMute() {
    const nextMuted = !this.isMuted;
    this.setMuted(nextMuted);
    return nextMuted;
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    localStorage.setItem('bg_music_muted', String(this.isMuted));
    if (this.audio) {
      this.audio.volume = this.isMuted ? 0 : this.volume;
      if (!muted && this.audio.paused) {
        this.audio.play()
          .then(() => {
            this.isPlaying = true;
            if (this.onStateChange) this.onStateChange();
          })
          .catch(e => console.log("Music play after unmute blocked:", e));
      }
    }
    if (this.onStateChange) this.onStateChange();
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public setVolume(val: number) {
    const clamped = Math.max(0, Math.min(1, val));
    this.volume = clamped;
    localStorage.setItem('bg_music_volume', String(clamped));
    
    if (clamped > 0 && this.isMuted) {
      this.isMuted = false;
      localStorage.setItem('bg_music_muted', 'false');
    }

    if (this.audio) {
      this.audio.volume = this.isMuted ? 0 : clamped;
      if (clamped > 0 && this.audio.paused) {
        this.audio.play()
          .then(() => {
            this.isPlaying = true;
            if (this.onStateChange) this.onStateChange();
          })
          .catch(e => console.log("Music play after volume change blocked:", e));
      }
    }
    if (this.onStateChange) this.onStateChange();
  }

  public getVolume(): number {
    return this.volume;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const musicManager = MusicManager.getInstance();

interface BackgroundMusicContextType {
  isMuted: boolean;
  volume: number; // 0.0 to 1.0
  isPlaying: boolean;
  sfxVolume: number; // 0.0 to 1.0
  toggleMute: () => void;
  changeVolume: (val: number) => void;
  changeSfxVolume: (val: number) => void;
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
  const [isMuted, setIsMuted] = useState<boolean>(() => musicManager.getMuted());
  const [volume, setVolume] = useState<number>(() => musicManager.getVolume());
  const [isPlaying, setIsPlaying] = useState<boolean>(() => musicManager.getIsPlaying());
  
  const [sfxVolume, setSfxVolume] = useState<number>(() => {
    const saved = localStorage.getItem('bg_sfx_volume');
    return saved ? parseFloat(saved) : 0.75; // Default 75%
  });

  // Sync state changes from MusicManager
  useEffect(() => {
    musicManager.registerCallback(() => {
      setIsMuted(musicManager.getMuted());
      setVolume(musicManager.getVolume());
      setIsPlaying(musicManager.getIsPlaying());
    });
    
    // Auto initialize on mount
    musicManager.init();

    // Try to auto-play on first user interaction to bypass browser autoplay policies
    const attemptAutoplay = () => {
      if (!musicManager.getMuted() && !musicManager.getIsPlaying()) {
        musicManager.play();
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
    };
  }, []);

  const toggleMute = () => {
    musicManager.toggleMute();
    setIsMuted(musicManager.getMuted());
  };

  const changeVolume = (val: number) => {
    musicManager.setVolume(val);
    setVolume(musicManager.getVolume());
    setIsMuted(musicManager.getMuted());
  };

  const changeSfxVolume = (val: number) => {
    const clamped = Math.max(0, Math.min(1, val));
    setSfxVolume(clamped);
    audioManager.setSfxVolume(clamped);
  };

  const playMusic = () => {
    musicManager.play();
  };

  const pauseMusic = () => {
    musicManager.pause();
  };

  return (
    <BackgroundMusicContext.Provider value={{
      isMuted,
      volume,
      isPlaying,
      sfxVolume,
      toggleMute,
      changeVolume,
      changeSfxVolume,
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
  const { 
    isMuted, 
    volume, 
    toggleMute, 
    changeVolume, 
    isPlaying, 
    playMusic,
    sfxVolume,
    changeSfxVolume
  } = useBackgroundMusic();
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

  const getSfxIcon = () => {
    if (sfxVolume === 0) return <VolumeX className="w-4 h-4 text-slate-500" />;
    if (sfxVolume < 0.4) return <Volume1 className="w-4 h-4 text-amber-400" />;
    return <Volume2 className="w-4 h-4 text-yellow-400" />;
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

          {/* BG Music Section */}
          <div className="mb-4">
            {/* Toggle Switch */}
            <div className="flex items-center justify-between mb-2">
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
                <span className="text-[11px] text-slate-400">Volume Musik</span>
                <span className="text-[11px] font-bold text-blue-400">{Math.round(isMuted ? 0 : volume * 100)}%</span>
              </div>
              
              <div className="flex items-center gap-2.5">
                <button 
                  onClick={toggleMute}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {getVolumeIcon()}
                </button>
                
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
          </div>

          {/* Divider */}
          <div className="border-t border-white/5 my-3" />

          {/* SFX Section */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-200">Efek Suara (SFX)</span>
              <span className="text-[11px] font-bold text-yellow-400">{Math.round(sfxVolume * 100)}%</span>
            </div>
            
            <div className="flex items-center gap-2.5">
              <div className="text-slate-400">
                {getSfxIcon()}
              </div>
              
              <input
                type="range"
                min="0"
                max="100"
                value={Math.round(sfxVolume * 100)}
                onChange={(e) => {
                  const val = parseInt(e.target.value, 10);
                  changeSfxVolume(val / 100);
                }}
                className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-yellow-500 focus:outline-none focus:ring-0 active:accent-amber-400 transition-all [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-yellow-400 [&::-webkit-slider-thumb]:shadow-[0_0_8px_rgba(234,179,8,0.8)]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
