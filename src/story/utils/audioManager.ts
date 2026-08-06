export class SFXManager {
  private ctx: AudioContext | null = null;
  private buffers: Record<string, AudioBuffer> = {};
  private loading: Record<string, boolean> = {};
  private urls: Record<string, string> = {};
  private audioPool: Record<string, HTMLAudioElement[]> = {};
  private sfxVolume: number = (() => {
    const saved = localStorage.getItem('bg_sfx_volume');
    return saved ? parseFloat(saved) : 0.75; // Default 75%
  })();

  setSfxVolume(val: number) {
    this.sfxVolume = Math.max(0, Math.min(1, val));
    localStorage.setItem('bg_sfx_volume', String(this.sfxVolume));
  }

  getSfxVolume(): number {
    return this.sfxVolume;
  }

  init() {
    if (!this.ctx) {
      try {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      } catch (e) {
        console.warn("AudioContext init error:", e);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  async loadSound(key: string, url: string) {
    this.urls[key] = url;
    
    // Preload HTMLAudioElement as fallback for instant playback without CORS requirements
    try {
      if (!this.audioPool[key]) {
        this.audioPool[key] = [];
      }
      const audio = new Audio(url);
      audio.preload = 'auto';
      audio.load();
      this.audioPool[key].push(audio);
    } catch (e) {
      console.warn(`HTML5 Audio preload notice for ${key}:`, e);
    }

    // Try Web Audio API arrayBuffer decode
    if (this.buffers[key] || this.loading[key]) return;
    this.loading[key] = true;
    try {
      this.init();
      const response = await fetch(url, { mode: 'cors' });
      if (response.ok) {
        const arrayBuffer = await response.arrayBuffer();
        if (this.ctx) {
          this.buffers[key] = await this.ctx.decodeAudioData(arrayBuffer);
        }
      }
    } catch (e) {
      // CORS or network notice - HTML5 Audio / Synth fallback will be used automatically
    } finally {
      this.loading[key] = false;
    }
  }

  private boxPointKeys = [
    'box_point_1',
    'box_point_2',
    'box_point_3',
    'box_point_4',
    'box_point_5',
    'box_point_6',
    'box_point_7'
  ];
  private boxPointCounter = 0;

  playBoxPointSound(_pointIndex: number = 0, slideSeed: number = 0, volume: number = 0.5) {
    const numericSeed = typeof slideSeed === 'number' ? slideSeed : 0;
    const soundIndex = Math.abs(numericSeed + Math.floor(numericSeed / 5)) % this.boxPointKeys.length;
    const selectedKey = this.boxPointKeys[soundIndex];
    this.playSound(selectedKey, volume);
  }

  playSound(key: string, volume: number = 1.0) {
    if (key === 'point_reveal') {
      const selectedKey = this.boxPointKeys[this.boxPointCounter % this.boxPointKeys.length];
      this.boxPointCounter++;
      key = selectedKey;
    }

    this.init();

    const scaledVol = volume * this.sfxVolume;

    // 1. Try Web Audio API if buffer is decoded
    if (this.ctx && this.buffers[key]) {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
      try {
        const source = this.ctx.createBufferSource();
        source.buffer = this.buffers[key];
        const gainNode = this.ctx.createGain();
        gainNode.gain.value = Math.min(1.0, Math.max(0, scaledVol));
        source.connect(gainNode);
        gainNode.connect(this.ctx.destination);
        source.start(0);
        return;
      } catch (e) {
        console.warn('WebAudio playSound error, falling back:', e);
      }
    }

    // 2. Fallback to HTML5 Audio Element using Audio Pool
    const url = this.urls[key];
    if (url) {
      try {
        if (!this.audioPool[key]) {
          this.audioPool[key] = [];
        }

        // Find an idle audio element from the pool
        let audio = this.audioPool[key].find(a => a.paused || a.ended);

        if (!audio) {
          // If pool is not too large, create a new one, otherwise reuse the oldest one
          if (this.audioPool[key].length < 10) {
            audio = new Audio(url);
            audio.preload = 'auto';
            this.audioPool[key].push(audio);
          } else {
            // Reuse the first one by resetting it
            audio = this.audioPool[key][0];
            audio.pause();
            audio.currentTime = 0;
          }
        }

        audio.volume = Math.min(1.0, Math.max(0, scaledVol));
        audio.currentTime = 0;
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            this.playSynthFallback(key, scaledVol);
          });
        }
        return;
      } catch (e) {
        console.warn('HTML5 Audio play error:', e);
      }
    }

    // 3. Fallback to Web Audio Synthetic SFX Generator
    this.playSynthFallback(key, scaledVol);
  }

  playSoundLoop(key: string, volume: number = 1.0, durationMs: number): any {
    this.init();
    const scaledVol = volume * this.sfxVolume;
    if (this.ctx && this.buffers[key]) {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
      try {
        const source = this.ctx.createBufferSource();
        source.buffer = this.buffers[key];
        source.loop = true;
        const gainNode = this.ctx.createGain();
        gainNode.gain.value = Math.min(1.0, Math.max(0, scaledVol));
        source.connect(gainNode);
        gainNode.connect(this.ctx.destination);
        source.start(0);
        
        setTimeout(() => {
          try {
            source.stop();
          } catch (e) {}
        }, durationMs);
        
        return source;
      } catch (e) {}
    }

    // Fallback for loop (e.g. typewriter)
    const url = this.urls[key];
    if (url) {
      try {
        const audio = new Audio(url);
        audio.loop = true;
        audio.volume = Math.min(1.0, Math.max(0, scaledVol));
        audio.play().catch(() => {});
        setTimeout(() => {
          try {
            audio.pause();
            audio.currentTime = 0;
          } catch (e) {}
        }, durationMs);
        return audio;
      } catch (e) {}
    }

    this.playSynthFallback(key, scaledVol);
    return null;
  }

  // Built-in synthetic SFX generator for guaranteed audible feedback without network dependency
  private playSynthFallback(key: string, volume: number = 0.5) {
    if (!this.ctx) this.init();
    if (!this.ctx) return;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);

      let freq = 440;
      let duration = 0.12;

      if (key.includes('click') || key.includes('box_point') || key.includes('point')) {
        freq = 580;
        duration = 0.08;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + duration);
      } else if (key.includes('sphere') || key.includes('open') || key.includes('transition')) {
        freq = 320;
        duration = 0.3;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(200, now);
        osc.frequency.exponentialRampToValueAtTime(600, now + duration);
      } else if (key.includes('power') || key.includes('zoom')) {
        freq = 250;
        duration = 0.25;
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.exponentialRampToValueAtTime(500, now + duration);
      } else {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
      }

      const vol = Math.min(0.4, Math.max(0.05, volume * 0.3));
      gain.gain.setValueAtTime(vol, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      osc.start(now);
      osc.stop(now + duration);
    } catch (e) {
      // Ignore fallback errors
    }
  }
}

export const sfxManager = new SFXManager();
export const audioManager = sfxManager;

