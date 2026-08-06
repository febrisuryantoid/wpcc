import React, { useState, useEffect } from "react";
import { audioManager } from "../utils/audioManager";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
  isTyping?: boolean;
  minDuration?: number;
  showMode?: 'hidden' | 'typing' | 'full';
  exactDuration?: number;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  delay = 0, 
  className = "",
  isTyping = true,
  minDuration = 3.5,
  showMode,
  exactDuration
}) => {
  const [currentLength, setCurrentLength] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const resolvedShowMode = showMode || (isTyping ? 'typing' : 'full');

  useEffect(() => {
    // Reset state when text changes or typing trigger shifts
    setCurrentLength(0);
    setIsStarted(false);
    setIsFinished(false);

    if (resolvedShowMode !== 'typing') {
      return;
    }

    // Typing start timer (after delay)
    const startTimer = setTimeout(() => {
      setIsStarted(true);
      
      // Calculate typing duration based on exactDuration or text length and minDuration
      const duration = exactDuration || Math.max(minDuration, text.length * 0.05);
      const durationMs = duration * 1000;
      
      // Play typewriter loop sound
      const soundSource = audioManager.playSoundLoop('typewriter', 0.55, durationMs);

      const startTime = performance.now();
      let rAF: number;

      const updateTyping = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / durationMs);
        
        // Linear typing progress
        const nextLength = Math.floor(progress * text.length);
        setCurrentLength(prev => prev === nextLength ? prev : nextLength);

        if (progress < 1) {
          rAF = requestAnimationFrame(updateTyping);
        } else {
          setCurrentLength(text.length);
          setIsFinished(true);
        }
      };

      rAF = requestAnimationFrame(updateTyping);

      return () => {
        cancelAnimationFrame(rAF);
        if (soundSource) {
          try {
            soundSource.stop();
          } catch (e) {}
        }
      };
    }, delay * 1000);

    return () => clearTimeout(startTimer);
  }, [text, delay, resolvedShowMode, minDuration, exactDuration]);

  const displayedText = resolvedShowMode === 'full' 
    ? text 
    : (resolvedShowMode === 'hidden' ? '' : text.slice(0, currentLength));
  
  const isCursorFinished = resolvedShowMode === 'full' ? true : isFinished;
  const isCursorStarted = resolvedShowMode === 'full' ? true : isStarted;

  return (
    <span className={`${className} inline-relative`}>
      {displayedText}
      
      {/* Insertion point (titik sisip) */}
      <span 
        className={`inline-block w-[3px] h-[1.1em] bg-blue-400 align-middle ml-1 ${
          !isCursorStarted || isCursorFinished ? 'custom-cursor-blink' : 'opacity-100'
        }`}
        style={{
          boxShadow: '0 0 8px rgba(96, 165, 250, 0.6)'
        }}
      />
    </span>
  );
};
