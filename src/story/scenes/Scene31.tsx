import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { SceneLayout } from '../components/SceneLayout';
import { useSlideAnimation } from '../components/SlideAnimationContext';
import { TrendingUp, ShieldCheck } from 'lucide-react';
import { audioManager } from '../utils/audioManager';

interface CMSInfo {
  id: string;
  name: string;
  rank: number;
  share: string; // Official percentage
  visualWidth: number; // Visual progress bar fill percentage
  category: string;
  brandColor: string;
  gradientClass: string;
  borderClass: string;
  glowColor: string;
  logoUrl: string;
  badge: string;
  description: string;
}

const WordPressSvg: React.FC = () => (
  <svg viewBox="0 -0.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
    <g fill="#3B58E6">
      <path d="M18.1239675,127.500488 C18.1239675,170.795707 43.284813,208.211252 79.7700163,225.941854 L27.5938862,82.985626 C21.524813,96.5890081 18.1239675,111.643057 18.1239675,127.500488 L18.1239675,127.500488 Z M201.345041,121.980878 C201.345041,108.462829 196.489366,99.1011382 192.324683,91.8145041 C186.780098,82.8045528 181.583089,75.1745041 181.583089,66.1645528 C181.583089,56.1097886 189.208976,46.7501789 199.950569,46.7501789 C200.435512,46.7501789 200.89548,46.8105366 201.367935,46.8375935 C181.907772,29.0091707 155.981008,18.1239675 127.50465,18.1239675 C89.2919675,18.1239675 55.6727154,37.7298211 36.1147317,67.4258211 C38.6809756,67.5028293 41.0994472,67.5569431 43.1536911,67.5569431 C54.5946016,67.5569431 72.3043902,66.1687154 72.3043902,66.1687154 C78.2007154,65.8211382 78.8958699,74.4814309 73.0057886,75.1786667 C73.0057886,75.1786667 67.0803252,75.8759024 60.4867642,76.2213984 L100.318699,194.699447 L124.25574,122.909138 L107.214049,76.2172358 C101.323967,75.8717398 95.744,75.1745041 95.744,75.1745041 C89.8497561,74.8290081 90.540748,65.8169756 96.4349919,66.1645528 C96.4349919,66.1645528 114.498602,67.5527805 125.246439,67.5527805 C136.685268,67.5527805 154.397138,66.1645528 154.397138,66.1645528 C160.297626,65.8169756 160.990699,74.4772683 155.098537,75.1745041 C155.098537,75.1745041 149.160585,75.8717398 142.579512,76.2172358 L182.107577,193.798244 L193.017756,157.340098 C197.746472,142.211122 201.345041,131.34465 201.345041,121.980878 L201.345041,121.980878 Z M129.42361,137.068228 L96.6056585,232.43135 C106.404423,235.31187 116.76722,236.887415 127.50465,236.887415 C140.242211,236.887415 152.457366,234.685398 163.827512,230.68722 C163.534049,230.218927 163.267642,229.721496 163.049106,229.180358 L129.42361,137.068228 L129.42361,137.068228 Z M223.481756,75.0225691 C223.95213,78.5066667 224.218537,82.2467642 224.218537,86.2699187 C224.218537,97.3694959 222.145561,109.846894 215.901659,125.448325 L182.490537,222.04774 C215.00878,203.085008 236.881171,167.854829 236.881171,127.502569 C236.883252,108.485724 232.025496,90.603187 223.481756,75.0225691 L223.481756,75.0225691 Z M127.50465,0 C57.2003902,0 0,57.1962276 0,127.500488 C0,197.813073 57.2003902,255.00722 127.50465,255.00722 C197.806829,255.00722 255.015545,197.813073 255.015545,127.500488 C255.013463,57.1962276 197.806829,0 127.50465,0 L127.50465,0 Z M127.50465,249.162927 C60.4243252,249.162927 5.84637398,194.584976 5.84637398,127.500488 C5.84637398,60.4201626 60.4222439,5.84637398 127.50465,5.84637398 C194.582894,5.84637398 249.156683,60.4201626 249.156683,127.500488 C249.156683,194.584976 194.582894,249.162927 127.50465,249.162927 L127.50465,249.162927 Z"></path>
    </g>
  </svg>
);

const WebflowSvg: React.FC = () => (
  <svg viewBox="0 -10 124 124" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
    <g clipPath="url(#clip0_webflow_31)">
      <path d="M58.2238 20.7236C56.1485 22.751 54.398 24.2874 52.8497 26.0064C48.2775 31.1226 44.5872 36.963 41.9296 43.2891C34.9725 59.6069 29.8694 76.5496 25.3183 93.6663C24.9173 95.1759 24.8307 96.7754 24.3673 98.2606C24.0688 99.3534 23.4212 100.319 22.5233 101.009C21.6254 101.7 20.5263 102.079 19.3935 102.086C18.2618 102.123 17.1486 101.793 16.219 101.147C15.2894 100.501 14.593 99.5714 14.2328 98.4982C13.9213 97.6568 13.6874 96.7891 13.5344 95.9057C11.4091 84.2065 9.296 72.5053 7.19487 60.8022C5.14116 49.3235 3.02391 37.8552 1.14022 26.3483C0.544923 22.7116 0.586152 18.9672 0.393188 15.2688C0.3951 14.3709 0.46675 13.4745 0.607267 12.5876C0.637156 11.8477 0.926659 11.1416 1.42513 10.5939C1.92359 10.0463 2.59905 9.69199 3.33293 9.59282C4.79 9.30862 6.22801 10.2832 6.85481 12.0868C7.24101 13.3744 7.54798 14.6845 7.77376 16.0097C10.2521 27.5096 12.7292 39.0099 15.2049 50.5107C16.6515 57.194 18.1196 63.8725 19.6095 70.5468C19.8477 71.6199 20.1634 72.6759 20.6275 74.4395C22.6713 68.2496 24.4494 62.7133 26.3278 57.2112C29.37 48.2969 32.6169 39.4679 37.3543 31.2683C41.1612 24.6262 46.1687 18.7489 52.1219 13.9356C53.8684 12.5245 55.5538 11.0372 57.3135 9.64244C60.6529 6.99542 64.1616 7.67926 65.7802 11.6284C66.8419 14.4584 67.6177 17.3878 68.0955 20.3724C71.1396 36.4691 74.0911 52.5835 77.082 68.6907C77.2658 69.6752 77.5126 70.6544 77.9031 72.4147C78.421 70.6695 78.7413 69.6522 79.0261 68.625C83.4439 52.7029 88.5903 37.0742 97.0597 22.7365C100.904 16.2276 105.167 10.0402 110.726 4.88401C112.575 3.26775 114.609 1.87535 116.784 0.735431C118.763 -0.371154 120.734 0.198499 122.335 1.73564C123.761 3.10608 124.08 5.26332 122.933 7.34781C122.012 9.14552 120.835 10.7995 119.439 12.2579C107.953 23.4425 101.131 37.3623 95.8067 52.1666C90.7116 66.3337 87.25 80.9615 83.6973 95.5618C83.3993 96.8718 83.0199 98.1615 82.5612 99.4243C82.166 100.61 81.4099 101.643 80.3992 102.377C79.3878 103.112 78.1722 103.512 76.9226 103.521C75.6105 103.565 74.3215 103.169 73.2608 102.396C72.2002 101.623 71.429 100.517 71.0707 99.2543C70.1091 96.2634 69.3622 93.2075 68.8339 90.1109C65.009 67.6477 60.5545 45.2786 58.6308 22.5279C58.6052 22.1919 58.4877 21.8696 58.2238 20.7236Z" fill="#4353FF" />
    </g>
    <defs>
      <clipPath id="clip0_webflow_31">
        <rect width="123.392" height="103.701" fill="white" transform="translate(0.32251 0.123047)" />
      </clipPath>
    </defs>
  </svg>
);

const cmsData: CMSInfo[] = [
  {
    id: 'wordpress',
    name: 'WordPress',
    rank: 1,
    share: '61,3%',
    visualWidth: 61.3,
    category: 'Open Source CMS Leader',
    brandColor: '#3B58E6',
    gradientClass: 'from-[#3B58E6] via-[#2563EB] to-[#1D4ED8]',
    borderClass: 'border-[#3B58E6]/50 hover:border-[#3B58E6]',
    glowColor: 'rgba(59, 88, 230, 0.45)',
    logoUrl: 'https://www.svgrepo.com/show/354572/wordpress-icon.svg',
    badge: 'Dominan Global',
    description: 'Leader CMS (Sistem Manajemen Konten) global penggerak 61,3% website dunia.'
  },
  {
    id: 'joomla',
    name: 'Joomla',
    rank: 2,
    share: '4,4%',
    visualWidth: 4.4,
    category: 'Open Source CMS',
    brandColor: '#5091CD',
    gradientClass: 'from-[#5091CD] via-[#3B82F6] to-[#F46F20]',
    borderClass: 'border-[#5091CD]/50 hover:border-[#5091CD]',
    glowColor: 'rgba(80, 145, 205, 0.45)',
    logoUrl: 'https://www.svgrepo.com/show/353936/joomla.svg',
    badge: 'Open Source #2',
    description: 'CMS (Sistem Manajemen Konten) open source fleksibel untuk beragam struktur data.'
  },
  {
    id: 'shopify',
    name: 'Shopify',
    rank: 3,
    share: '4,3%',
    visualWidth: 4.3,
    category: 'E-Commerce Platform',
    brandColor: '#96BF48',
    gradientClass: 'from-[#96BF48] via-[#7AB55C] to-[#5A9E3B]',
    borderClass: 'border-[#96BF48]/50 hover:border-[#96BF48]',
    glowColor: 'rgba(150, 191, 72, 0.45)',
    logoUrl: 'https://www.svgrepo.com/show/475678/shopify-color.svg',
    badge: 'Toko Online #1',
    description: 'Platform khusus e-commerce & toko online.'
  },
  {
    id: 'wix',
    name: 'Wix',
    rank: 4,
    share: '2,7%',
    visualWidth: 2.7,
    category: 'Drag & Drop Builder',
    brandColor: '#FAAD14',
    gradientClass: 'from-[#FAAD14] via-[#F59E0B] to-[#D97706]',
    borderClass: 'border-[#FAAD14]/50 hover:border-[#FAAD14]',
    glowColor: 'rgba(250, 173, 20, 0.45)',
    logoUrl: 'https://www.svgrepo.com/show/394569/wix.svg',
    badge: 'Visual Builder',
    description: 'Website builder instan tanpa koding.'
  },
  {
    id: 'squarespace',
    name: 'Squarespace',
    rank: 5,
    share: '2,3%',
    visualWidth: 2.3,
    category: 'Design & Portfolio',
    brandColor: '#E2E8F0',
    gradientClass: 'from-[#FFFFFF] via-[#CBD5E1] to-[#64748B]',
    borderClass: 'border-slate-300/40 hover:border-white',
    glowColor: 'rgba(226, 232, 240, 0.4)',
    logoUrl: 'https://www.svgrepo.com/show/512900/squarespace-132.svg',
    badge: 'Estetik Kreatif',
    description: 'Pilihan desainer untuk portofolio visual.'
  },
  {
    id: 'webflow',
    name: 'Webflow*',
    rank: 6,
    share: '0,8%',
    visualWidth: 0.8,
    category: 'Visual Web Dev',
    brandColor: '#4353FF',
    gradientClass: 'from-[#4353FF] via-[#3B82F6] to-[#1D4ED8]',
    borderClass: 'border-[#4353FF]/50 hover:border-[#4353FF]',
    glowColor: 'rgba(67, 83, 255, 0.45)',
    logoUrl: 'https://www.svgrepo.com/show/409983/webflow.svg',
    badge: 'Visual Code',
    description: 'Visual web development untuk desainer & pro.'
  }
];

interface CmsCardProps {
  cms: CMSInfo;
  index: number;
}

const CmsCard: React.FC<CmsCardProps> = ({ cms, index }) => {
  const { isTextFinished } = useSlideAnimation();

  const hasPlayedRef = React.useRef(false);

  useEffect(() => {
    if (!isTextFinished) {
      hasPlayedRef.current = false;
      return;
    }
    if (hasPlayedRef.current) return;

    // Play point reveal sound staggered matching the entrance delay
    const timer = setTimeout(() => {
      audioManager.playBoxPointSound(index, 31, 0.45);
      hasPlayedRef.current = true;
    }, (index * 0.4) * 1000);
    return () => clearTimeout(timer);
  }, [index, isTextFinished]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={isTextFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.4, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={`relative group rounded-[12px] p-3.5 sm:p-4 bg-slate-900/40 group-hover:bg-slate-900/70 border ${cms.borderClass} transition-all duration-300 hover:-translate-y-1 shadow-lg backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.5)] flex items-center justify-between overflow-hidden cursor-pointer`}
      onClick={() => audioManager.playSound('wpcc_click', 0.6)}
      onMouseEnter={() => audioManager.playSound('wpcc_click', 0.4)}
      style={{
        boxShadow: `0 8px 24px -6px ${cms.glowColor}`
      }}
    >
      {/* Left Side: ICON BALUTED WITH FULL WHITE FULL ROUNDED BACKGROUND */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white p-2.5 sm:p-3 flex items-center justify-center shrink-0 shadow-lg border border-white/50 group-hover:scale-110 transition-transform duration-300">
        {cms.id === 'wordpress' ? (
          <WordPressSvg />
        ) : cms.id === 'webflow' ? (
          <WebflowSvg />
        ) : (
          <img 
            src={cms.logoUrl} 
            alt={`${cms.name} logo`} 
            className="w-full h-full object-contain"
          />
        )}
      </div>

      {/* Right/Center Side: Info, Percentage & Animated Progress Bar */}
      <div className="flex-1 min-w-0 mx-3.5 text-left">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
              {cms.name}
            </h3>
            <span className="text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded bg-white/10 text-slate-300 border border-white/10">
              #{cms.rank}
            </span>
          </div>

          {/* Percentage text with CMS branding color */}
          <div className="flex items-baseline gap-1 shrink-0">
            <span 
              className="text-base sm:text-xl font-extrabold tracking-tight font-serif drop-shadow-sm"
              style={{ color: cms.brandColor === '#E2E8F0' ? '#FFFFFF' : cms.brandColor }}
            >
              {cms.share}
            </span>
            <span className="text-[9px] text-slate-400 font-medium hidden sm:inline">Share</span>
          </div>
        </div>

        <p className="text-[10px] text-slate-300 font-medium truncate mt-0.5">
          {cms.description}
        </p>

        {/* Animated Progress Bar using CMS Branding Colors */}
        <div className="w-full bg-slate-900/90 rounded-full h-2 p-0.5 border border-white/10 overflow-hidden relative shadow-inner mt-2">
          <motion.div
            className={`h-full rounded-full bg-gradient-to-r ${cms.gradientClass} relative overflow-hidden`}
            initial={{ width: '0%' }}
            animate={isTextFinished ? { width: `${cms.visualWidth}%` } : { width: '0%' }}
            transition={{ duration: 1.2, delay: (index * 0.4) + 0.2, ease: 'easeOut' }}
          >
            {/* Shimmer Effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export const Scene31: React.FC<SceneProps> = ({ scene, isActive }) => {
  const { isTextFinished } = useSlideAnimation();
  const showContent = true;

  return (
    <SceneLayout scene={scene} isActive={isActive}>
      {showContent && (
        <motion.div 
          className="w-full max-w-5xl mx-auto mt-2 sm:mt-3 pointer-events-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={isTextFinished ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Subheader Data Source Badge */}
          <div className="flex items-center justify-between mb-2.5 sm:mb-3.5 px-1">
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-blue-300/90 bg-blue-950/60 border border-blue-500/30 px-3 py-1 rounded-full backdrop-blur-md shadow-md">
              <TrendingUp className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
              <span>Sumber Data Resmi: <strong>W3Techs CMS Research</strong></span>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-[11px] text-slate-300 font-medium bg-slate-900/50 px-2.5 py-1 rounded-full border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Pangsa Pasar CMS Dunia</span>
            </div>
          </div>

          {/* Elongated Box Grid: 2 Columns of 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {cmsData.map((cms, index) => (
              <CmsCard key={cms.id} cms={cms} index={index} />
            ))}
          </div>
        </motion.div>
      )}
    </SceneLayout>
  );
};

