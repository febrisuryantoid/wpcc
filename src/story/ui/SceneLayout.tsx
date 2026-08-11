import React from 'react';
import { motion } from 'framer-motion';
import { TypewriterText } from './TypewriterText';
import { SceneConfig, isChapterSlide, getChapterNumber } from '../types';
import { SlideAnimationProvider, useSlideAnimation } from './SlideAnimationContext';
import { PointCard } from '../style/BoxPoint';
import { getPointDetails } from '../utils/pointHelper';
import { GraduationCap } from 'lucide-react';

interface SceneLayoutProps {
  scene: SceneConfig;
  isActive: boolean;
  children?: React.ReactNode;
  illustration?: React.ReactNode;
  showPoints?: boolean;
  isCompact?: boolean;
  childrenBeforePoints?: boolean;
  hasPoints?: boolean;
  isPresentationMode?: boolean;
  revealStep?: number;
}

const extractUrl = (str: string): string | null => {
  const httpMatch = str.match(/https?:\/\/[^\s\)]+/);
  if (httpMatch) return httpMatch[0];

  const domainMatch = str.match(/(?:[a-zA-Z0-9-]+\.)+(?:com|org|net|me|info|gov|edu|id)(?:\/[^\s\)]*)?/i);
  if (domainMatch) {
    return `https://${domainMatch[0]}`;
  }
  return null;
};

const getGridClass = (count: number, hasIllustration: boolean) => {
  if (hasIllustration) {
    if (count > 4) return 'grid-cols-2 sm:grid-cols-2 w-full';
    return 'grid-cols-1 sm:grid-cols-2 w-full max-w-md';
  } else {
    if (count === 1) return 'grid-cols-1 w-full max-w-sm mx-auto';
    if (count === 2) return 'grid-cols-1 sm:grid-cols-2 w-full max-w-3xl mx-auto';
    if (count === 3) return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl mx-auto';
    if (count === 4) return 'grid-cols-1 sm:grid-cols-2 w-full max-w-4xl mx-auto';
    if (count === 5) return 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full max-w-6xl mx-auto';
    if (count === 6) return 'grid-cols-2 sm:grid-cols-3 w-full max-w-5xl mx-auto';
    return 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-full max-w-6xl mx-auto';
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
  children, 
  illustration,
  showPoints = true,
  isCompact = false,
  childrenBeforePoints = false,
  hasPoints = scene.points && scene.points.length > 0
}) => {
  const { 
    headingDuration, 
    descriptionDuration, 
    isTextFinished,
    headingShowMode,
    descriptionShowMode
  } = useSlideAnimation();
  
  const showHeading = true;
  const showDescription = !!scene.supportingSentence;

  const isHtmlOrCss = scene.id === 'scene_19' || scene.id === 'scene_22' || scene.id === 'scene_23';
  const hasSideImage = !!scene.sideImage;
  const isChapter = isChapterSlide(scene.id);
  const isExceptedSlide = scene.id === 'scene_01' || scene.id === 'scene_02';
  
  const baseHeadingClass = isChapter ? 'wpcc-h2 font-bold tracking-[-0.02em]' : 'wpcc-h3 font-bold tracking-[-0.02em]';
  const headingClass = isHtmlOrCss 
    ? `${baseHeadingClass} whitespace-nowrap overflow-hidden text-ellipsis`
    : baseHeadingClass;

  const HeadingTag = scene.id === 'scene_01' ? motion.h1 : motion.h2;

  const getHeadingWhitespaceClass = (text: string) => {
    if (!text) return '';
    if (text.includes('\n')) return 'whitespace-pre-line';
    return 'whitespace-normal md:whitespace-nowrap';
  };

  return (
    <motion.div 
      className={`absolute inset-0 flex flex-col items-center justify-center my-auto pt-16 sm:pt-20 md:pt-24 px-[25px] pb-20 sm:pb-24 z-10 pointer-events-none overflow-y-auto h-full max-h-screen w-full`}
      initial={{ opacity: 0, scale: 0.96, filter: 'blur(10px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(10px)' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {hasSideImage ? (
        /* Modern 2-Column Layout for slides with sideImage */
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center justify-between flex-1 w-full min-h-0">
          {/* Left Column (40% Desktop, 45% Tablet, 100% Mobile) - Portrait Image */}
          <motion.div 
            className="w-full md:w-[45%] lg:w-[40%] shrink-0 flex items-center justify-center pointer-events-auto"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.215, 0.61, 0.355, 1.0] }}
          >
            <div className="relative flex items-center justify-center w-full max-w-[280px] sm:max-w-[360px] md:max-w-none">
              <img 
                src={scene.sideImage} 
                alt={scene.headline}
                className="w-full max-h-[40vh] sm:max-h-[50vh] md:max-h-[75vh] aspect-[4/5] object-contain rounded-xl border border-white/[0.08] bg-gradient-to-br from-blue-500/[0.02] to-purple-500/[0.01] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.5)] shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(59,130,246,0.15)] transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          {/* Right Column (60% Desktop, 55% Tablet, 100% Mobile) - Complete Slide Content */}
          <motion.div 
            className={`w-full md:w-[55%] lg:w-[60%] flex flex-col ${isExceptedSlide ? 'items-start text-left' : 'items-center md:items-start text-center md:text-left'} pointer-events-auto relative justify-start sm:justify-center mt-4 sm:mt-0`}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1.0], delay: 0.08 }}
          >
            {hasPoints && (
              <div className="absolute top-0 left-0 -translate-y-8 w-[450px] sm:w-[600px] h-[200px] rounded-full bg-blue-600/10 border border-blue-500/20 blur-xl pointer-events-none -z-10" />
            )}

            {showHeading && (
              <>
                <HeadingTag 
                  className={`font-bold text-white mb-2 sm:mb-3 md:mb-4 tracking-[-0.02em] drop-shadow-sm font-serif leading-[1.15] ${isExceptedSlide ? 'text-left' : 'text-center md:text-left'} ${getHeadingWhitespaceClass(scene.headline)} ${headingClass}`}
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
                </HeadingTag>

                {/* Animated line bar directly under heading */}
                <motion.div 
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="flex items-center justify-center md:justify-start w-full max-w-md mx-auto md:mx-0 wpcc-divide-container"
                >
                  <div className="md:hidden h-[1px] flex-1 bg-gradient-to-r from-transparent to-cyan-500/40" />
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] inline-block animate-pulse shrink-0 mx-3 md:ml-0 md:mr-4" />
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-cyan-500/40 md:bg-gradient-to-r md:from-cyan-500/40 md:to-transparent" />
                </motion.div>

                {showDescription && scene.supportingSentence && (
                  <motion.p 
                    className={`wpcc-body-large wpcc-slide-desc mb-4 sm:mb-6 max-w-xl ${isExceptedSlide ? 'text-left' : 'text-center md:text-left'}`}
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
                  </motion.p>
                )}
              </>
            )}

            {childrenBeforePoints && showDescription && children}

            {showPoints && hasPoints && scene.points && (
              <motion.div 
                className={`${scene.points.length === 5 ? 'grid grid-cols-2 md:grid-cols-6 gap-2 sm:gap-3 md:gap-4 items-stretch w-full max-w-5xl mx-auto md:auto-rows-fr' : `grid gap-2 sm:gap-3 md:gap-4 max-w-7xl mx-auto`} items-stretch w-full ${scene.points.length !== 5 ? getGridClass(scene.points.length, !!illustration) : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isTextFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {scene.points.map((point, idx) => {
                  const pointData = getPointDetails(point, scene.headline);
                  const url = extractUrl(point);
                  const isFive = scene.points.length === 5;
                  
                  let layoutClass = "h-full";
                  let cardLayoutType: 'vertical' | 'horizontal' = 'vertical';
                  
                  if (isFive) {
                    if (idx < 3) {
                      layoutClass = "col-span-1 md:col-span-2 flex w-full h-full flex-col"; 
                      cardLayoutType = 'vertical';
                    } else {
                      layoutClass = "col-span-1 md:col-span-3 flex w-full h-full flex-col"; 
                      cardLayoutType = 'horizontal';
                    }
                  } else if (scene.points.length === 4) {
                    cardLayoutType = 'horizontal';
                  }

                  return (
                    <div key={idx} className={isFive ? `${layoutClass} items-stretch` : "h-full"}>
                      <PointCard 
                        pointData={pointData}
                        index={idx}
                        url={url}
                        isCompact={isCompact}
                        layoutType={cardLayoutType}
                      />
                    </div>
                  );
                })}
              </motion.div>
            )}

            {!childrenBeforePoints && showPoints && children}
          </motion.div>
        </div>
      ) : (
        /* Standard Layout for most slides */
        <div className={`w-full max-w-7xl flex flex-col ${illustration ? 'md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12' : 'items-center'} flex-1 w-full min-h-0`}>
          <div className={`flex flex-col ${illustration ? 'w-full md:w-1/2 text-left' : (isChapter ? 'w-full items-center text-center' : (isExceptedSlide ? 'w-full items-center text-center' : 'w-full items-center text-center'))} pointer-events-auto flex-1 w-full justify-center my-auto mt-2 sm:mt-0`}>
            
            {hasPoints && (
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-blue-600/5 border border-blue-500/10 blur-3xl pointer-events-none -z-10`} />
            )}

            {isChapter ? (
              <>
                {showHeading && (
                  <motion.h3 
                    className="text-xs sm:text-sm md:text-base font-bold tracking-[0.15em] text-blue-400 bg-blue-500/10 border border-blue-500/20 px-4.5 py-1.5 rounded-full mb-4 sm:mb-6 backdrop-blur-sm shadow-[0_4px_12px_rgba(59,130,246,0.1)] inline-block uppercase font-sans mx-auto"
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 150,
                      damping: 15,
                      delay: 0.1 
                    }}
                  >
                    {getChapterNumber(scene.id)}
                  </motion.h3>
                )}
                {showDescription && (
                  <>
                    <HeadingTag 
                      className={`font-bold text-white mb-2 drop-shadow-sm text-center max-w-4xl mx-auto ${getHeadingWhitespaceClass(scene.headline)} ${headingClass}`}
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
                    </HeadingTag>

                    {/* Divider line with glowing dot in the center */}
                    <motion.div 
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="flex items-center justify-center w-full max-w-lg mx-auto wpcc-divide-container"
                    >
                      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-cyan-500/40" />
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] mx-4 inline-block animate-pulse" />
                      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-cyan-500/40" />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.8 }}
                      className="flex flex-col items-center justify-center text-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl border border-blue-500/30 bg-blue-950/25 backdrop-blur-md max-w-3xl shadow-[0_0_30px_rgba(59,130,246,0.15)] pointer-events-auto mx-auto w-full"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-blue-500/40 bg-blue-500/15 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)] mx-auto">
                        {(() => {
                          const IconComponent = getPointDetails(scene.headline).icon;
                          return <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />;
                        })()}
                      </div>
                      <p className="wpcc-slide-desc text-xs sm:text-base md:text-lg leading-[1.6] text-center font-sans font-normal m-0 w-full max-w-2xl mx-auto">
                        <TypewriterText 
                          text={scene.supportingSentence || ""} 
                          delay={0.1} 
                          showMode={descriptionShowMode} 
                          exactDuration={descriptionDuration} 
                        />
                      </p>
                    </motion.div>
                  </>
                )}
              </>
            ) : (
              <>
                {showHeading && (
                  <>
                    <HeadingTag 
                      className={`font-bold text-white mb-2 sm:mb-3 md:mb-4 tracking-[-0.02em] drop-shadow-sm ${scene.heroExperience.heroPosition === "center" ? "text-center" : (isExceptedSlide ? "text-left" : "text-center sm:text-left")} ${getHeadingWhitespaceClass(scene.headline)} ${headingClass}`}
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
                    </HeadingTag>

                    {/* Divider line with glowing dot */}
                    <motion.div 
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.15 }}
                      className={`flex items-center w-full wpcc-divide-container ${scene.heroExperience.heroPosition === "center" ? "justify-center max-w-lg mx-auto" : "justify-center sm:justify-start max-w-md mx-auto sm:mx-0"}`}
                    >
                      <div className="sm:hidden h-[1px] flex-1 bg-gradient-to-r from-transparent to-cyan-500/40" />
                      {scene.heroExperience.heroPosition === "center" && (
                        <div className="hidden sm:block h-[1px] flex-1 bg-gradient-to-r from-transparent to-cyan-500/40" />
                      )}
                      <span className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] inline-block animate-pulse shrink-0 ${scene.heroExperience.heroPosition === "center" ? "mx-3 sm:mx-4" : "mx-3 sm:ml-0 sm:mr-4"}`} />
                      <div className={`h-[1px] flex-1 ${scene.heroExperience.heroPosition === "center" ? "bg-gradient-to-l from-transparent to-cyan-500/40" : "bg-gradient-to-l from-transparent to-cyan-500/40 sm:bg-gradient-to-r sm:from-cyan-500/40 sm:to-transparent"}`} />
                    </motion.div>
                  </>
                )}
                {showDescription && (
                  <motion.div 
                    className={`wpcc-body-large wpcc-slide-desc mb-4 sm:mb-6 max-w-2xl ${scene.heroExperience.heroPosition === "center" ? "text-center" : (isExceptedSlide ? "text-left" : "text-center sm:text-left")}`}
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
                className="w-full max-w-3xl mx-auto aspect-video rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden mb-4 sm:mb-5 pointer-events-auto"
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
                className={`${scene.points.length === 5 ? 'grid grid-cols-2 md:grid-cols-6 gap-2 sm:gap-3 md:gap-4 items-stretch w-full max-w-5xl mx-auto md:auto-rows-fr' : `grid gap-2 sm:gap-3 md:gap-4 max-w-7xl mx-auto`} items-stretch w-full ${scene.points.length !== 5 ? getGridClass(scene.points.length, !!illustration) : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isTextFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {scene.points.map((point, idx) => {
                  const pointData = getPointDetails(point, scene.headline);
                  const url = extractUrl(point);
                  const isFive = scene.points.length === 5;
                  
                  let layoutClass = "h-full";
                  let cardLayoutType: 'vertical' | 'horizontal' = 'vertical';
                  
                  if (isFive) {
                    if (idx < 3) {
                      layoutClass = "col-span-1 md:col-span-2 flex w-full h-full flex-col"; 
                      cardLayoutType = 'vertical';
                    } else {
                      layoutClass = "col-span-1 md:col-span-3 flex w-full h-full flex-col"; 
                      cardLayoutType = 'horizontal';
                    }
                  } else if (scene.points.length === 4) {
                    cardLayoutType = 'horizontal';
                  }

                  return (
                    <div key={idx} className={isFive ? `${layoutClass} items-stretch` : "h-full"}>
                      <PointCard 
                        pointData={pointData}
                        index={idx}
                        url={url}
                        isCompact={isCompact}
                        layoutType={cardLayoutType}
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
            <div className="flex-1 pointer-events-auto h-full flex items-center justify-center relative perspective-1000"> 
              {illustration}
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};
