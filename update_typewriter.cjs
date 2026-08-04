const fs = require('fs');

const content = `import React, { useEffect } from "react";
import { motion, animate, useMotionValue, useTransform } from "motion/react";

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
    const bufferSize = ctx.sampleRate * 0.05; // 50ms buffer
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    
    // Fill with white noise
    for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
    }
    
    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = buffer;
    
    // Filter to make it sound mechanical/clicky (highpass)
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 5000;
    
    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0.05, ctx.currentTime); // low volume so it's not annoying
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
    
    noiseSource.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    noiseSource.start();
  } catch (e) {}
};

export const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  delay = 0, 
  className = ""
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));
  
  useEffect(() => {
    // Calculate speed based on length.
    // 35ms per character, max 1.2 seconds total duration for fast reading.
    const charSpeed = 0.035; 
    const calculatedDuration = Math.min(text.length * charSpeed, 1.2);
    
    let lastLength = 0;

    const controls = animate(count, text.length, {
      type: "tween",
      duration: calculatedDuration,
      delay: delay,
      ease: "linear",
      onUpdate: (latest) => {
        const currentLength = Math.round(latest);
        if (currentLength > lastLength) {
          // Play sound if the character is not a space
          if (text[currentLength - 1] && text[currentLength - 1] !== ' ') {
             playTypewriterSound();
          }
          lastLength = currentLength;
        }
      }
    });

    return () => controls.stop();
  }, [text, delay, count]);

  return <motion.span className={className}>{displayText}</motion.span>;
};
`;

fs.writeFileSync('src/story/components/TypewriterText.tsx', content);
