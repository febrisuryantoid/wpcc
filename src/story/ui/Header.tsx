import React from 'react';
import { motion } from 'motion/react';

interface HeaderProps {
  onGoCover?: () => void;
  onBackToCover?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onGoCover, 
  onBackToCover,
}) => {
  const handleCoverNav = onGoCover || onBackToCover;

  return (
    <header className="absolute top-0 left-0 right-0 w-full z-40 px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 pointer-events-auto bg-gradient-to-b from-slate-950/80 via-slate-950/30 to-transparent">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        {/* Left WPCC Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center shrink-0"
        >
          <button 
            onClick={handleCoverNav} 
            className="flex items-center group cursor-pointer border-none bg-transparent outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 rounded-lg p-0.5"
            title="Kembali ke Cover Presentasi"
          >
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibSOq5GIr9KBMVJU2-7b8EyeOf8FSYqIEMSLvkuN6GPsWpk6lzvBrDnLjfbGa13Y2uKnuyGKfePOn6p138AgUQVaSPf5D25rCV9uxOa4oUReEwwWjFNmdore7sq9qmN4ozTBejMkQCZHYi8PtptE1VTshNsj7Lbg0tbkup4F14pRjuhbOw2IHz5vTQobM/s1600/wpcc-logo-horizontal-white.png" 
              alt="WPCC Logo" 
              className="h-7 sm:h-8 md:h-9 lg:h-10 xl:h-11 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" 
            />
          </button>
        </motion.div>

        {/* Right WordPress Logo */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center shrink-0"
        >
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-ML1gSOI3LDIMf_vNLeahgkoFWZaat8RgxKijhpHnWHed7N6skUY8MdjVHoanvWNiEeCcIBQVAQv7FOkNlpUUXrMnczmlFw1Aio_1O-krIAZMFIT3XkhrTVFLC1XOsSWwmZ4fnYIYZMg1xGJxe41aa5yGSlxCbvihCmkg8PIUFbIZKnUMziMg6LcmET8/s1600/wordpress-logo.png"
            alt="WordPress Logo"
            className="h-6 sm:h-7 md:h-8 lg:h-9 xl:h-10 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;


