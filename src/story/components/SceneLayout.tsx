import { TypewriterText } from "./TypewriterText";
import React from 'react';
import { motion } from 'motion/react';
import { SceneConfig } from '../types';
import { getPointDetails } from '../utils/pointHelper';
import { PointCard } from './PointCard';
import { SlideAnimationProvider, useSlideAnimation } from './SlideAnimationContext';

interface SceneLayoutProps {
  scene: SceneConfig;
  isActive?: boolean;
  isPresentationMode?: boolean;
  revealStep?: number;
  illustration?: React.ReactNode;
  children?: React.ReactNode;
  childrenBeforePoints?: boolean;
}

const getGridClass = (count: number, hasIllustration: boolean) => {
  if (hasIllustration) {
    if (count > 3) return 'grid-cols-1 md:grid-cols-2 w-full';
    return 'grid-cols-1 w-full max-w-md';
  } else {
    if (count === 1) return 'grid-cols-1 w-full max-w-sm mx-auto';
    if (count === 2) return 'grid-cols-1 sm:grid-cols-2 w-full max-w-2xl mx-auto';
    if (count === 3) return 'grid-cols-1 sm:grid-cols-3 w-full max-w-5xl mx-auto';
    if (count === 4) return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-6xl mx-auto';
    if (count === 5) return 'flex flex-wrap justify-center w-full max-w-6xl mx-auto';
    if (count === 6) return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto';
    return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-6xl mx-auto';
  }
};

export const SceneLayout: React.FC<SceneLayoutProps> = (props) => {
  if (!props.isActive) return null;

  return (
    <SlideAnimationProvider scene={props.scene} isActive={props.isActive}>
      <SceneLayoutContent {...props} />
    </SlideAnimationProvider>
  );
};

const SceneLayoutContent: React.FC<SceneLayoutProps> = ({ 
  scene, 
  isActive, 
  isPresentationMode = false, 
  revealStep = 3, 
  illustration, 
  children, 
  childrenBeforePoints = false 
}) => {
  const { 
    currentPhase, 
    isTextFinished, 
    headingDuration, 
    descriptionDuration, 
    headingShowMode, 
    descriptionShowMode 
  } = useSlideAnimation();

  const isChapter = scene.headline.startsWith('CHAPTER');
  const showHeading = true;
  const showDescription = true;
  const showPoints = true;
  const hasPoints = scene.points && scene.points.length > 0;
  const isCompact = scene.id === 'scene_49' || (!!scene.points && scene.points.length >= 7);
  const hasSideImage = !!scene.sideImage;

  const isHtmlOrCss = ['scene_15', 'scene_16'].includes(scene.id);
  const headingClass = isHtmlOrCss 
    ? 'text-[20px] sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl whitespace-nowrap overflow-hidden text-ellipsis'
    : 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl';

  return (
    <motion.div 
      className={`absolute inset-0 flex flex-col md:flex-row items-center ${scene.topImage ? 'justify-start pt-24 sm:pt-32' : 'justify-center'} ${isCompact ? 'p-3 sm:p-5 md:p-6' : 'p-6 sm:p-8 md:p-12'} z-10 pointer-events-none overflow-y-auto`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {hasSideImage ? (
        /* Modern 2-Column Layout for slides with sideImage */
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-6 md:gap-[40px] items-center justify-between">
          {/* Left Column (40% Desktop, 45% Tablet, 100% Mobile) - Portrait Image */}
          <motion.div 
            className="w-full md:w-[45%] lg:w-[40%] shrink-0 flex items-center justify-center pointer-events-auto"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.215, 0.61, 0.355, 1.0] }}
          >
            <div className="relative flex items-center justify-center w-full max-w-[380px] sm:max-w-[420px] md:max-w-none">
              <img 
                src={scene.sideImage} 
                alt={scene.headline}
                className="w-full max-h-[78vh] aspect-[4/5] object-contain rounded-[24px] border border-white/[0.08] bg-gradient-to-br from-blue-500/[0.02] to-purple-500/[0.01] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.5)] shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(59,130,246,0.15)] transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          {/* Right Column (60% Desktop, 55% Tablet, 100% Mobile) - Complete Slide Content */}
          <motion.div 
            className="w-full md:w-[55%] lg:w-[60%] flex flex-col items-start text-left pointer-events-auto relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1.0], delay: 0.08 }}
          >
            {hasPoints && (
              <div className="absolute top-0 left-0 -translate-y-8 w-[450px] sm:w-[600px] h-[200px] rounded-full bg-blue-600/10 border border-blue-500/20 blur-xl pointer-events-none -z-10" />
            )}

            {showHeading && (
              <>
                <motion.h1 
                  className={`font-extrabold text-white mb-3 sm:mb-4 tracking-tight drop-shadow-2xl font-serif leading-tight text-left whitespace-pre-line ${headingClass}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <TypewriterText 
                    text={scene.headline} 
                    delay={0.1} 
                    showMode={headingShowMode} 
                    exactDuration={headingDuration} 
                  />
                </motion.h1>

                {/* Glowing Dots */}
                <div className="flex items-center gap-1.5 mb-4 sm:mb-6 justify-start">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <span 
                      key={i} 
                      className="w-[10px] h-1.5 rounded-sm bg-blue-400/80 shadow-[0_0_8px_#3b82f6] loading-wave-dot" 
                      style={{ animationDelay: `${i * 0.15}s`, animationDuration: '1.5s' }}
                    />
                  ))}
                </div>
              </>
            )}

            {showDescription && (
              <motion.div 
                className="text-lg sm:text-xl md:text-2xl font-normal text-slate-300 mb-6 sm:mb-8 max-w-2xl drop-shadow-md leading-relaxed text-left min-h-[1.5em]"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <TypewriterText 
                  text={scene.supportingSentence} 
                  delay={0} 
                  showMode={descriptionShowMode} 
                  exactDuration={descriptionDuration} 
                />
              </motion.div>
            )}

            {showPoints && hasPoints && scene.points && (
              <motion.div 
                className={`${scene.points.length === 5 ? 'flex flex-wrap justify-center' : 'grid'} gap-4 w-full items-stretch ${getGridClass(scene.points.length, false)}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isTextFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {scene.points.map((point, idx) => {
                  const pointData = getPointDetails(point, scene.headline);
                  const isUrl = point.includes('.com') || point.includes('.org') || point.startsWith('http');
                  const url = isUrl ? (point.startsWith('http') ? point : `https://${point}`) : null;
                  const isFive = scene.points.length === 5;

                  return (
                    <div key={idx} className={isFive ? "w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)] flex" : "h-full"}>
                      <PointCard 
                        pointData={pointData}
                        index={idx}
                        url={url}
                        isCompact={isCompact}
                      />
                    </div>
                  );
                })}
              </motion.div>
            )}

            {showPoints && children}
          </motion.div>
        </div>
      ) : (
        /* Default 1-Column Layout */
        <div className={`w-full max-w-7xl flex flex-col md:flex-row gap-8 lg:gap-12 items-center ${scene.heroExperience.heroPosition === "center" ? "justify-center" : "justify-start"}`}>
          {/* Left Content */}
          <div className={`flex-1 pointer-events-auto ${scene.heroExperience.heroPosition === "center" ? "flex flex-col items-center text-center max-w-5xl mx-auto relative" : (scene.heroExperience.heroPosition === "right" ? "flex flex-col items-start text-left max-w-2xl mr-auto" : "flex flex-col items-start text-left max-w-2xl ml-auto")}`}>
            
            {/* Glowing orb background effect behind title */}
            {hasPoints && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 w-[550px] sm:w-[750px] h-[220px] rounded-full bg-blue-600/10 border border-blue-500/20 blur-xl pointer-events-none -z-10" />
            )}

            {scene.id === 'scene_01' && showHeading && (
              <motion.img
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhERFP2JVNvb8FLdbBL524lOtWdZO6cBvWkHv8cvS-rMzMxhu36mJ4PN1Oqux0w2kTTGpDeJGJZ7fjI4c9D9wU2q8g5PiWki6hPsKVZvG-pUKgDUOc87zZsDnaZAp0rrXWXFyV-kTCvjFaZ6zBTFH8-7hj2wz8Kz_hrKD79z1avOJvSUEnQlT2D_JxRBlI/s1600/wpcc-ikon.png"
                alt="WPCC Icon"
                className="w-24 h-24 mb-6 drop-shadow-2xl"
              />
            )}

            {/* Render Chapter slides with small bold Chapter label and big title */}
            {scene.headline.startsWith('CHAPTER') ? (
              <>
                {showHeading && (
                  <motion.div 
                    className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/30 px-5 py-2 rounded-full mb-6 backdrop-blur-sm inline-block"
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 150,
                      damping: 15,
                      delay: 0.1 
                    }}
                  >
                    {scene.headline}
                  </motion.div>
                )}
                {showDescription && (
                  <>
                    <motion.h1 
                      className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 tracking-tight drop-shadow-2xl font-serif leading-tight ${scene.heroExperience.heroPosition === "center" ? "text-center" : "text-left"} min-h-[1.5em]`}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <TypewriterText 
                        text={scene.supportingSentence || ""} 
                        delay={0.1} 
                        showMode={headingShowMode} 
                        exactDuration={headingDuration} 
                      />
                    </motion.h1>

                    {/* Glowing Dots */}
                    <div className={`flex items-center gap-1.5 my-3 ${scene.heroExperience.heroPosition === "center" ? "justify-center" : "justify-start"}`}>
                      {[0, 1, 2, 3, 4, 5].map((i) => (
                        <span 
                          key={i} 
                          className="w-[10px] h-1.5 rounded-sm bg-blue-400/80 shadow-[0_0_8px_#3b82f6] loading-wave-dot" 
                          style={{ animationDelay: `${i * 0.15}s`, animationDuration: '1.5s' }}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                {showHeading && (
                  <>
                    <motion.h1 
                      className={`font-extrabold text-white mb-2 sm:mb-3 tracking-tight drop-shadow-2xl font-serif leading-tight ${scene.id === 'scene_01' ? 'whitespace-nowrap' : ''} ${scene.heroExperience.heroPosition === "center" ? "text-center" : "text-left"} ${headingClass}`}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <TypewriterText 
                        text={scene.headline} 
                        delay={0.1} 
                        showMode={headingShowMode} 
                        exactDuration={headingDuration} 
                      />
                    </motion.h1>

                    {/* Glowing Dots */}
                    <div className={`flex items-center gap-1.5 ${isCompact ? 'my-1.5 sm:my-2' : 'my-2.5 sm:my-3'} ${scene.heroExperience.heroPosition === "center" ? "justify-center" : "justify-start"}`}>
                      {[0, 1, 2, 3, 4, 5].map((i) => (
                        <span 
                          key={i} 
                          className="w-[10px] h-1.5 rounded-sm bg-blue-400/80 shadow-[0_0_8px_#3b82f6] loading-wave-dot" 
                          style={{ animationDelay: `${i * 0.15}s`, animationDuration: '1.5s' }}
                        />
                      ))}
                    </div>
                  </>
                )}

                {showDescription && (
                  <motion.div 
                    className={`text-base sm:text-lg md:text-xl font-normal text-slate-300 ${isCompact ? 'mb-3 sm:mb-4 md:mb-5' : 'mb-8 sm:mb-10'} max-w-2xl drop-shadow-md leading-relaxed ${scene.heroExperience.heroPosition === "center" ? "text-center" : "text-left"} min-h-[1.5em]`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <TypewriterText 
                      text={scene.supportingSentence} 
                      delay={0} 
                      showMode={descriptionShowMode} 
                      exactDuration={descriptionDuration} 
                    />
                  </motion.div>
                )}
              </>
            )}

            {scene.topImage && (
              <motion.div
                className="w-full max-w-4xl mx-auto aspect-video rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden mt-0 mb-6 sm:mb-8 pointer-events-auto"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img src={scene.topImage} alt={scene.headline} className="w-full h-full object-cover" />
              </motion.div>
            )}

            {childrenBeforePoints && showDescription && children}

            {showPoints && hasPoints && scene.points && (
              <motion.div 
                className={`${scene.points.length === 5 ? 'flex flex-wrap justify-center gap-4' : `grid ${isCompact ? 'gap-2 sm:gap-3 md:gap-3.5 max-w-7xl' : 'gap-4 sm:gap-5'}`} items-stretch w-full ${getGridClass(scene.points.length, !!illustration)}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isTextFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {scene.points.map((point, idx) => {
                  const pointData = getPointDetails(point, scene.headline);
                  const isUrl = point.includes('.com') || point.includes('.org') || point.startsWith('http');
                  const url = isUrl ? (point.startsWith('http') ? point : `https://${point}`) : null;
                  const isFive = scene.points.length === 5;

                  return (
                    <div key={idx} className={isFive ? "w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)] flex" : "h-full"}>
                      <PointCard 
                        pointData={pointData}
                        index={idx}
                        url={url}
                        isCompact={isCompact}
                      />
                    </div>
                  );
                })}
              </motion.div>
            )}

            {!childrenBeforePoints && showPoints && children}
          </div>
          
          {/* Right Illustration */}
          {illustration && showHeading && (
            <div className="flex-1 pointer-events-auto h-full min-h-[400px] flex items-center justify-center relative perspective-1000">
               {illustration}
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};
