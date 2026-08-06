import React, { useState, useEffect } from "react";
import { audioManager } from "../utils/audioManager";

interface Segment {
  text: string;
  className?: string;
}

interface SegmentedTypewriterTextProps {
  segments: Segment[];
  delay?: number;
  className?: string;
  isTyping?: boolean;
  minDuration?: number;
  showMode?: 'hidden' | 'typing' | 'full';
  exactDuration?: number;
}

export const SegmentedTypewriterText: React.FC<SegmentedTypewriterTextProps> = ({
  segments,
  delay = 0,
  className = "",
  isTyping = true,
  minDuration = 3.5,
  showMode,
  exactDuration
}) => {
  const totalText = segments.map(s => s.text).join("");
  const [currentLength, setCurrentLength] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const resolvedShowMode = showMode || (isTyping ? 'typing' : 'full');

  useEffect(() => {
    setCurrentLength(0);
    setIsStarted(false);
    setIsFinished(false);

    if (resolvedShowMode !== 'typing') {
      return;
    }

    const startTimer = setTimeout(() => {
      setIsStarted(true);
      
      const duration = exactDuration || Math.max(minDuration, totalText.length * 0.05);
      const durationMs = duration * 1000;
      
      const soundSource = audioManager.playSoundLoop('typewriter', 0.55, durationMs);

      const startTime = performance.now();
      let rAF: number;

      const updateTyping = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / durationMs);
        
        const nextLength = Math.floor(progress * totalText.length);
        setCurrentLength(prev => prev === nextLength ? prev : nextLength);

        if (progress < 1) {
          rAF = requestAnimationFrame(updateTyping);
        } else {
          setCurrentLength(totalText.length);
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
  }, [totalText, delay, resolvedShowMode, minDuration, exactDuration]);

  const isCursorFinished = resolvedShowMode === 'full' ? true : isFinished;
  const isCursorStarted = resolvedShowMode === 'full' ? true : isStarted;

  const cursorElement = (
    <span 
      className={`inline-block w-[3px] h-[1.1em] bg-blue-400 align-middle ml-1 ${
        !isCursorStarted || isCursorFinished ? 'custom-cursor-blink' : 'opacity-100'
      }`}
      style={{
        boxShadow: '0 0 8px rgba(96, 165, 250, 0.6)'
      }}
    />
  );

  let accumulated = 0;
  const renderedSegments = segments.map((seg, idx) => {
    const isLast = idx === segments.length - 1;
    const segLen = seg.text.length;
    let segText = "";
    
    if (resolvedShowMode === 'full') {
      segText = seg.text;
    } else if (resolvedShowMode === 'hidden') {
      segText = "";
    } else {
      if (currentLength <= accumulated) {
        segText = "";
      } else if (currentLength >= accumulated + segLen) {
        segText = seg.text;
      } else {
        segText = seg.text.slice(0, currentLength - accumulated);
      }
    }
    accumulated += segLen;

    return (
      <span key={idx} className={`${seg.className || ""} ${isLast ? "whitespace-nowrap" : ""}`}>
        {segText}
        {isLast && cursorElement}
      </span>
    );
  });

  return (
    <span className={`${className} inline-relative`}>
      {renderedSegments}
    </span>
  );
};
