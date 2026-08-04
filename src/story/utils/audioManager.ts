export class AudioManager {
  private ctx: AudioContext | null = null;
  private buffers: Record<string, AudioBuffer> = {};
  private loading: Record<string, boolean> = {};

  init() {
    if (!this.ctx) {
      try {
        this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      } catch (e) {
        console.warn("AudioContext not supported");
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  async loadSound(key: string, url: string) {
    if (this.buffers[key] || this.loading[key]) return;
    this.loading[key] = true;
    try {
      if (!this.ctx) this.init();
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      if (this.ctx) {
        this.buffers[key] = await this.ctx.decodeAudioData(arrayBuffer);
      }
    } catch (e) {
      console.error(`Failed to load sound ${key}`, e);
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
    // 1 slide uses 1 SFX for all box points appearing in that slide.
    // Different slides use different SFX based on the slide index/seed.
    const numericSeed = typeof slideSeed === 'number' ? slideSeed : 0;
    const soundIndex = Math.abs(numericSeed + Math.floor(numericSeed / 5)) % this.boxPointKeys.length;
    const selectedKey = this.boxPointKeys[soundIndex];
    if (this.buffers[selectedKey]) {
      this.playSound(selectedKey, volume);
    } else {
      this.playSound('point_reveal', volume);
    }
  }

  playSound(key: string, volume: number = 1.0) {
    if (key === 'point_reveal') {
      const selectedKey = this.boxPointKeys[this.boxPointCounter % this.boxPointKeys.length];
      this.boxPointCounter++;
      if (this.buffers[selectedKey]) {
        key = selectedKey;
      }
    }

    if (!this.ctx) this.init();
    if (!this.ctx || !this.buffers[key]) return;
    
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    
    try {
      const source = this.ctx.createBufferSource();
      source.buffer = this.buffers[key];
      const gainNode = this.ctx.createGain();
      gainNode.gain.value = volume;
      source.connect(gainNode);
      gainNode.connect(this.ctx.destination);
      source.start(0);
    } catch (e) {
      console.error(e);
    }
  }

  playSoundLoop(key: string, volume: number = 1.0, durationMs: number): AudioBufferSourceNode | null {
    if (!this.ctx) this.init();
    if (!this.ctx || !this.buffers[key]) return null;
    
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    
    try {
      const source = this.ctx.createBufferSource();
      source.buffer = this.buffers[key];
      source.loop = true;
      const gainNode = this.ctx.createGain();
      gainNode.gain.value = volume;
      source.connect(gainNode);
      gainNode.connect(this.ctx.destination);
      source.start(0);
      
      setTimeout(() => {
        try {
          source.stop();
        } catch (e) {}
      }, durationMs);
      
      return source;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}

export const audioManager = new AudioManager();
