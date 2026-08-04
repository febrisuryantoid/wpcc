import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SceneConfig } from '../story/types';

interface AnimatedBackgroundsProps {
  sceneIndex: number;
  currentScene?: SceneConfig;
}

const SLIDE_BACKGROUNDS = [
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8gtsnqDHRvghS9axyYGVnuX4wKvNho7aYWFmhHo22J6CjIpXGCZxhpZzQEoYeY2-vDNkg1BD9Ds1YnmrEaONYmR9daxsVKatRUT1w8k_apUDRgPue9Z0Z6QmNOc-yTpfYm2SApGBjnsgwlw9IZJfV77te2t9kx1xbvzeL_ec9zf9tAAN-Vi1c9wmI4lU/s1600/bg-slide-01.webp',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifl19TcwfuYRzS9-_TKp-1ECh9TLUbUB4w0Xjf6jEMgvZVMQp24xSle5dPt-C4c-_SkQs6AU2e-zBBqrVcRIxC5NnuXRRK5eYSUqrdDd2ev2xpgi9wafLA8qyHSb1T7x4TyEtYKLu7dZrUj0T36Sr2dTpdBoGfTwCStXZreU5NTkEZtf-S3nyJPxM46tE/s1600/bg-slide-01b.webp',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhngId5ZCo8CrnNxpJ1RNDv8bwJsR2ujq9C-6D5GCxebiY7Tq1A9tvcinIw-DB_6B3BBuC_QsjdHPevq3Eke8MLLXNZpxAyNbzh0seOM7B03YtF2JAnFuXlRWh0dY0LkUJEt7MRS_UEROPGrHLkgU8J5VLG2xnvHghOfjeYQta2pgxbpW6BDoo-_CFKrnM/s1600/bg-slide-02.webp',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOT3osKeJH65qgMMINKqt1qP3bS-z-n_9DUXcdDDCox6IAzsMnZjQw7RjyDOqTI0c-yg9DPGDHTpAmY9ljYtG3wZr68t94dJy_sxElUZIwXng4DPrJbfOA-dWsOm_cMClEZBn8bguk_qA-2NrTlxi90n5J7clovfLu0VX1z3dFp2QW4weL0_Ad1p68HoA/s1600/bg-slide-03.webp',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeQV5IqJiP97DB3wvHEVXQIDylv-9QD2yvuvx_lqZY7KYkDnzOIB8nho7S0WGFXRfMeCAWh3R1jbp9cH0VQYfi3-X2zTa4jw8U8TPzTpoqfd0Y53J5iin-ox7drYknmHvnRX_aixslBj_QxGYBttQA1rB98kvkvxmOYV8rxCGE-K_s2_DkEwlpXf8wu6g/s1600/bg-slide-04.webp',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEyhS55Kcg6CXqonIPYK5magnDE5C4PWyIsiGKMQlYJgxkCC8c9yRzSbl1WBYps1gTqOdVf_I33zywNus6prAqUttvabws04UBUeHYb2AWKAgGk_nVCVsBKOY6xx9pSBfnOBryttxRN84fBhumnRpNJF28wLShBjHkUzcFFn7dv3Eqm_gU5U7dfWgreL0/s1600/bg-slide-04b.webp',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6eFEn-vk3vZRAOpolVLCZDkjf9uMxOqQas8s3jt1_b-vfYZaXkFP7moYPwSZ-f81ryr8f_AY7YMpzJeOhiPlW5T30xKLeHDuaQfGc3Y79xdjvAhjHFIjZrOJOJSGGAwsRvwuMsFU2Oe41jUTVGZCGyBCqIUJ8oVm_gH3fTIeEGvk7zXTiXvQGeimFtVA/s1600/bg-slide-05.webp',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbkTorSqHgvjzjqd7kZF423V3gJgjF3wasLENf502_xdS2i6AZhV9z3sv4FUuETcrKs7sFy5nJp2veMmnB_uUjyiqtGRAWyvV9r3UpTznCncLPTsy5SGVBS3bRaPdjGYBunyygWVhY-bB0o51XsihDZ0Xff5v2WXv3ByojIZQTr0mJp8Acqs5K-Blzl0Q/s1600/bg-slide-06.webp',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNCgyMjjGPYnJTZmeqFJoqr750yEaA5__t8Jxuk042W8VZTQaCw0GdN34IrXHHdB2G_tX9_K1S1kizVG6WP7wB4EEUWgV6naaWaTi6EuDwjWNmDuVG6xUg4X9OAHq3UpW7TWzhfN4KVqF8pg-aRjubq0R2MZ8n65uBhsbiXT6Dgw6iYT-Msy1zLlLn0GU/s1600/bg-slide-07.webp',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtmmE3JD3VQo1D9cIVm7BBbBf4C_yGdKAXX8EknblhCnRDhEqMsC6WL78PaaFZMWvcKDR1Tb_1bR3HncvZnXX8h6R-MQeYt-5lLqDcfbR0F2kLIwAwfMdXbguKfdsB_93v4Ml3-_NhhZsIN0DnsPCKaYL7KQSxgz_EJRuU9SxU0APG1qPSLR5VhiMxDeM/s1600/bg-slide-08.webp',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6Kuu-YVB7umW686iQU2I4VZ-8EsFeYvS92x4uMvfSAWclMcTtvyO7qNyw1R0Ev9wuTg9CTAqgRkpX65UpCrC150pHUmNkUaUXheu7EQbrl0D0kGJKrK_XYEMvgsrkBgO-tzPojgmFah3IT6nZq6MgocRDIl5IB1YEOAxSX4jDlhwUIUL_f6F9RXMM5S8/s1600/bg-slide-08b.webp'
];

// Tech theme accent configurations mapped to chapters with enriched glow & accent intensity
const techThemes: Record<string, any> = {
  'chapter_01': { id: 'cyber-cyan', primary: '#00F0FF', secondary: '#0066FF', copper: '#FF8A3D', glow: 'rgba(0, 240, 255, 0.40)', corePos: 'top-1/3 left-1/2' },
  'chapter_02': { id: 'quantum-turq', primary: '#2DD4BF', secondary: '#0284C7', copper: '#F59E0B', glow: 'rgba(45, 212, 191, 0.38)', corePos: 'bottom-1/4 right-1/2' },
  'chapter_03': { id: 'sapphire-pulse', primary: '#38BDF8', secondary: '#1D4ED8', copper: '#FB923C', glow: 'rgba(56, 189, 248, 0.40)', corePos: 'top-1/4 right-1/3' },
  'chapter_04': { id: 'royal-circuit', primary: '#60A5FA', secondary: '#2563EB', copper: '#F97316', glow: 'rgba(96, 165, 250, 0.40)', corePos: 'top-1/2 left-1/4' },
  'chapter_05': { id: 'electric-blue', primary: '#3B82F6', secondary: '#1E40AF', copper: '#EAB308', glow: 'rgba(59, 130, 246, 0.42)', corePos: 'bottom-1/3 right-1/4' },
  'chapter_06': { id: 'neon-indigo', primary: '#818CF8', secondary: '#4338CA', copper: '#FF8A3D', glow: 'rgba(129, 140, 248, 0.40)', corePos: 'top-1/4 left-1/4' },
  'chapter_07': { id: 'neon-purple', primary: '#C084FC', secondary: '#7E22CE', copper: '#F97316', glow: 'rgba(192, 132, 252, 0.42)', corePos: 'top-1/2 left-1/2' },
  'chapter_08': { id: 'emerald-glow', primary: '#34D399', secondary: '#047857', copper: '#FB923C', glow: 'rgba(52, 211, 153, 0.40)', corePos: 'bottom-1/3 right-1/3' },
  'chapter_09': { id: 'amber-spark', primary: '#FBBF24', secondary: '#B45309', copper: '#FF6B00', glow: 'rgba(251, 191, 36, 0.42)', corePos: 'top-1/3 right-1/3' },
};

const fallbackTheme = { id: 'cyber-cyan', primary: '#00F0FF', secondary: '#0066FF', copper: '#FF8A3D', glow: 'rgba(0, 240, 255, 0.40)', corePos: 'top-1/3 left-1/2' };

// Pre-calculated depth particles for 3D Bokeh parallax effect
const BOKEH_PARTICLES = Array.from({ length: 14 }).map((_, i) => ({
  id: i,
  x: (i * 73 + 12) % 100,
  y: (i * 47 + 23) % 100,
  size: 3 + (i % 4) * 2,
  depthFactor: 0.6 + (i % 5) * 0.4, // Depth layer multiplier
  opacity: 0.2 + (i % 3) * 0.25,
}));

export const AnimatedBackgrounds: React.FC<AnimatedBackgroundsProps> = ({ sceneIndex, currentScene }) => {
  const chapterId = currentScene?.chapterId || 'chapter_01';
  const currentTheme = techThemes[chapterId] || fallbackTheme;
  const currentBgUrl = SLIDE_BACKGROUNDS[Math.abs(sceneIndex) % SLIDE_BACKGROUNDS.length];

  // Mouse Parallax position state with smooth lerping
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const updatePosition = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      setMousePos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Direction offset based on slide index for 3D slide transition flow
  const slideDir = sceneIndex % 2 === 0 ? 1 : -1;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-[#000205] perspective-1000">
      {/* LAYER 0: Far Background Image with Parallax & 3D Depth Zoom Transition */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentBgUrl}
          initial={{ opacity: 0, scale: 1.12, x: slideDir * 35, rotateY: slideDir * 2 }}
          animate={{ 
            opacity: 0.85, 
            scale: 1.05, 
            x: -mousePos.x * 14, 
            y: -mousePos.y * 10,
            rotateY: -mousePos.x * 1.5,
            rotateX: mousePos.y * 1.5
          }}
          exit={{ opacity: 0, scale: 0.96, x: -slideDir * 35, rotateY: -slideDir * 2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full pointer-events-none z-0 transform-gpu"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.img 
            src={currentBgUrl} 
            alt="" 
            aria-hidden="true"
            className="w-full h-full object-cover select-none"
            loading="lazy"
            decoding="async"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Subtle dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#000205]/85 via-[#000205]/25 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* LAYER 1: Mid-ground Ambient Glow & Energy Core Parallax */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-[1] transform-gpu"
        animate={{
          x: mousePos.x * 25,
          y: mousePos.y * 18,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 100 }}
      >
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 transition-all duration-1000 ease-out"
          style={{
            background: `radial-gradient(circle, ${currentTheme.primary} 0%, ${currentTheme.secondary} 50%, transparent 80%)`,
            left: '30%',
            top: '20%',
          }}
        />
      </motion.div>

      {/* LAYER 2: Fine Anti-Banding Noise Texture */}
      <div className="noise-overlay opacity-30 z-[2]" />

      {/* LAYER 3: Deep Obsidian Vignette Overlay */}
      <div className="absolute inset-0 z-[3] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#000205]/40 to-[#000205]/85" />

      {/* LAYER 4: High-Tech Electron Sparks & Traces Circuit Parallax */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-[4] pointer-events-none opacity-60 mix-blend-screen transform-gpu"
        animate={{
          x: mousePos.x * 40,
          y: mousePos.y * 28,
        }}
        transition={{ type: 'spring', damping: 35, stiffness: 120 }}
      >
        <svg viewBox="0 0 1920 1080" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <filter id="electron-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur1" />
              <feGaussianBlur stdDeviation="6" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ULTRA-FINE ELECTRON TRACES & SPARK NODES */}
          <g opacity="0.85">
            {[
              { path: "M -100 450 L 300 450 L 470 280 L 800 280 L 840 320" },
              { path: "M 0 250 L 170 250 L 330 90 L 750 90" },
              { path: "M -50 1080 L 200 830 L 370 830 L 530 670 L 830 670" },
              { path: "M 2020 630 L 1620 630 L 1450 800 L 1230 800 L 1190 760" },
              { path: "M 2020 280 L 1750 280 L 1590 120 L 1270 120" },
              { path: "M 1820 1180 L 1720 1080 L 1550 1080 L 1390 920 L 1090 920" }
            ].map((circuit, idx) => (
              <g key={`electron-circuit-${idx}`}>
                <path 
                  d={circuit.path} 
                  fill="none" 
                  stroke="rgba(255, 255, 255, 0.05)" 
                  strokeWidth="1" 
                />
                <path 
                  d={circuit.path} 
                  fill="none" 
                  stroke={currentTheme.primary} 
                  strokeWidth="1.5" 
                  strokeDasharray="15 3000"
                  strokeLinecap="round"
                  className={`sweep-${idx % 3 === 0 ? 'fast' : idx % 2 === 0 ? 'mid' : 'slow'}`}
                  filter="url(#electron-glow)"
                />
              </g>
            ))}

            {/* TINY ELECTRON NODES */}
            {[
              { x: 300, y: 450 }, { x: 470, y: 280 }, { x: 800, y: 280 },
              { x: 170, y: 250 }, { x: 330, y: 90 }, { x: 200, y: 830 },
              { x: 530, y: 670 }, { x: 1620, y: 630 }, { x: 1450, y: 800 },
              { x: 1230, y: 800 }, { x: 1750, y: 280 }, { x: 1590, y: 120 }
            ].map((node, i) => (
              <g key={`electron-node-${i}`} className="animate-pulse" style={{ animationDelay: `${i * 0.2}s`, animationDuration: '3s' }}>
                <circle cx={node.x} cy={node.y} r="2.5" fill={currentTheme.primary} filter="url(#electron-glow)" opacity="0.9" />
                <circle cx={node.x} cy={node.y} r="1" fill="#FFFFFF" />
              </g>
            ))}
          </g>
        </svg>
      </motion.div>

      {/* LAYER 5: Floating Bokeh Depth Dust Particles for 3D Parallax Separation */}
      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
        {BOKEH_PARTICLES.map((pt) => (
          <motion.div
            key={`bokeh-${pt.id}`}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: `${pt.x}%`,
              top: `${pt.y}%`,
              width: `${pt.size}px`,
              height: `${pt.size}px`,
              backgroundColor: currentTheme.primary,
              boxShadow: `0 0 10px ${currentTheme.primary}, 0 0 20px ${currentTheme.secondary}`,
              opacity: pt.opacity,
            }}
            animate={{
              x: mousePos.x * (55 * pt.depthFactor),
              y: mousePos.y * (38 * pt.depthFactor),
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 80 }}
          />
        ))}
      </div>
    </div>
  );
};

