import React, { useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { SceneConfig } from '../types';

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

const BokehParticleItem: React.FC<{ pt: typeof BOKEH_PARTICLES[0]; springX: any; springY: any; primary: string; secondary: string }> = ({ pt, springX, springY, primary, secondary }) => {
  const x = useTransform(springX, (val: number) => val * (55 * pt.depthFactor));
  const y = useTransform(springY, (val: number) => val * (38 * pt.depthFactor));

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none transform-gpu"
      style={{
        left: `${pt.x}%`,
        top: `${pt.y}%`,
        width: `${pt.size}px`,
        height: `${pt.size}px`,
        backgroundColor: primary,
        boxShadow: `0 0 10px ${primary}, 0 0 20px ${secondary}`,
        opacity: pt.opacity,
        x,
        y
      }}
    />
  );
};

export const AnimatedBackgrounds: React.FC<AnimatedBackgroundsProps> = ({ sceneIndex, currentScene }) => {
  const chapterId = currentScene?.chapterId || 'chapter_01';
  const currentTheme = techThemes[chapterId] || fallbackTheme;
  const currentBgUrl = SLIDE_BACKGROUNDS[Math.abs(sceneIndex) % SLIDE_BACKGROUNDS.length];

  // Motion values for smooth hardware-accelerated parallax without React re-renders
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  const springX = useSpring(rawMouseX, { damping: 30, stiffness: 100 });
  const springY = useSpring(rawMouseY, { damping: 30, stiffness: 100 });

  // Transforms per layer
  const bgX = useTransform(springX, x => -x * 14);
  const bgY = useTransform(springY, y => -y * 10);
  const bgRotateY = useTransform(springX, x => -x * 1.5);
  const bgRotateX = useTransform(springY, y => y * 1.5);

  const midGlowX = useTransform(springX, x => x * 25);
  const midGlowY = useTransform(springY, y => y * 18);

  const circuitX = useTransform(springX, x => x * 40);
  const circuitY = useTransform(springY, y => y * 28);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      rawMouseX.set(x);
      rawMouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [rawMouseX, rawMouseY]);

  // Direction offset based on slide index for 3D slide transition flow
  const slideDir = sceneIndex % 2 === 0 ? 1 : -1;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-[#000205] perspective-1000 transform-gpu">
      {/* LAYER 0: Far Background Image with Parallax & 3D Depth Zoom Transition */}
      <AnimatePresence>
        <motion.div
          key={currentBgUrl}
          initial={{ opacity: 0, scale: 1.12 }}
          animate={{ 
            opacity: 0.85, 
            scale: 1.05, 
          }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full pointer-events-none z-0 transform-gpu"
          style={{ 
            transformStyle: 'preserve-3d',
            x: bgX,
            y: bgY,
            rotateY: bgRotateY,
            rotateX: bgRotateX
          }}
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
        style={{
          x: midGlowX,
          y: midGlowY,
        }}
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

      {/* LAYER 4: Clean Ambient Soft Glow */}
      <div className="absolute inset-0 z-[4] pointer-events-none" />

      {/* LAYER 5: Floating Bokeh Depth Dust Particles for 3D Parallax Separation */}
      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
        {BOKEH_PARTICLES.map((pt) => (
          <BokehParticleItem 
            key={`bokeh-${pt.id}`}
            pt={pt}
            springX={springX}
            springY={springY}
            primary={currentTheme.primary}
            secondary={currentTheme.secondary}
          />
        ))}
      </div>

      {/* LAYER 6: PREMIUM FUTURISTIC MORPH TRANSITION FLARE & LIQUID WAVE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`morph-transition-${sceneIndex}`}
          initial={{ opacity: 0.9, scale: 1.15, filter: 'blur(16px)' }}
          animate={{ opacity: 0, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 pointer-events-none z-[12] flex items-center justify-center overflow-hidden"
        >
          {/* Soft Liquid Morphing Glow Blob */}
          <motion.div 
            className="w-[900px] h-[600px] rounded-[40%_60%_70%_30%/50%_60%_40%_50%] opacity-25 mix-blend-screen"
            style={{
              background: `radial-gradient(ellipse at center, ${currentTheme.primary} 0%, ${currentTheme.secondary} 50%, transparent 80%)`,
              boxShadow: `0 0 100px ${currentTheme.primary}`
            }}
            animate={{
              borderRadius: [
                '40% 60% 70% 30% / 50% 60% 40% 50%',
                '60% 30% 50% 70% / 40% 50% 60% 30%',
                '40% 60% 70% 30% / 50% 60% 40% 50%'
              ],
              rotate: [0, 15, -10, 0],
              scale: [1, 1.08, 0.95, 1]
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {/* Soft Ambient Radial Glass Reflection */}
          <div 
            className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-blue-500/10 to-indigo-500/5 backdrop-blur-[2px] opacity-40 pointer-events-none"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

