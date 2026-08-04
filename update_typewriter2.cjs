const fs = require('fs');

const content = `import React, { useEffect } from "react";
import { motion } from "motion/react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
}

// Singleton audio context to avoid exhausting browser limits
let audioCtx: AudioContext | null = null;
const getAudioContext = () => {
  if (!audioCtx) {
    try {
      audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch (e) {
      console.warn("AudioContext not supported");
    }
  }
  return audioCtx;
};

const playTypewriterSound = () => {
  const ctx = getAudioContext();
  if (!ctx) return;
  if (ctx.state === 'suspended') ctx.resume().catch(() => {});
  
  try {
    const t = ctx.currentTime;
    
    // Noise component (clack)
    const bufferSize = ctx.sampleRate * 0.03; 
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    
    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'highpass';
    noiseFilter.frequency.value = 3000;
    
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.04, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.02);
    
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    noise.start(t);

    // Oscillator component (thud)
    const osc = ctx.createOscillator();
    osc.type = 'square';
    osc.frequency.setValueAtTime(300, t);
    osc.frequency.exponentialRampToValueAtTime(100, t + 0.02);
    
    const oscGain = ctx.createGain();
    oscGain.gain.setValueAtTime(0.02, t);
    oscGain.gain.exponentialRampToValueAtTime(0.001, t + 0.02);
    
    osc.connect(oscGain);
    oscGain.connect(ctx.destination);
    osc.start(t);
    osc.stop(t + 0.03);
  } catch (e) {}
};

export const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  delay = 0, 
  className = ""
}) => {
  // 30ms per character
  const charSpeed = 0.030; 
  const characters = text.split("");
  
  useEffect(() => {
    let timeoutIds: NodeJS.Timeout[] = [];
    
    characters.forEach((char, index) => {
      if (char !== ' ') {
        const timeout = setTimeout(() => {
          playTypewriterSound();
        }, (delay + index * charSpeed) * 1000);
        timeoutIds.push(timeout);
      }
    });

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, [text, delay]);

  return (
    <span className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.01,
            delay: delay + index * charSpeed,
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};
`;

fs.writeFileSync('src/story/components/TypewriterText.tsx', content);
