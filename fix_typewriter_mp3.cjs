const fs = require('fs');

const code = `import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
}

// Singleton audio context to avoid exhausting browser limits
let audioCtx: AudioContext | null = null;
let typeWriterBuffer: AudioBuffer | null = null;
let isFetchingBuffer = false;

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

const loadTypewriterSound = async () => {
  const ctx = getAudioContext();
  if (!ctx || typeWriterBuffer || isFetchingBuffer) return;
  isFetchingBuffer = true;
  try {
    const response = await fetch("https://assets.mixkit.co/active_storage/sfx/1397/1397-preview.mp3");
    const arrayBuffer = await response.arrayBuffer();
    typeWriterBuffer = await ctx.decodeAudioData(arrayBuffer);
  } catch (e) {
    console.error("Failed to load typewriter sound", e);
  } finally {
    isFetchingBuffer = false;
  }
};

// Preload immediately
if (typeof window !== 'undefined') {
  setTimeout(loadTypewriterSound, 100);
}

const playTypewriterSound = () => {
  const ctx = getAudioContext();
  if (!ctx) return;
  if (ctx.state === 'suspended') ctx.resume().catch(() => {});
  
  if (!typeWriterBuffer) {
    loadTypewriterSound();
    return;
  }
  
  try {
    const source = ctx.createBufferSource();
    source.buffer = typeWriterBuffer;
    
    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(2.0, ctx.currentTime); // boost volume slightly as requested
    
    source.connect(gainNode);
    gainNode.connect(ctx.destination);
    source.start(0);
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

fs.writeFileSync('src/story/components/TypewriterText.tsx', code);
