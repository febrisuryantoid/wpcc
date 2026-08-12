import React, { useEffect } from 'react';
import { storyScenes } from './story/data';
import { SLIDE_COMPONENTS } from './story/slideMap';
import { SceneLayout } from './story/ui/SceneLayout';
import { AnimatedBackgrounds } from './story/ui/AnimatedBackgrounds';
import { MotionConfig } from 'motion/react';
import { Header } from './story/ui/Header';
import { Footer } from './story/ui/Footer';

export const PrintPage: React.FC = () => {
  useEffect(() => {
    document.body.style.overflow = 'auto';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <MotionConfig transition={{ duration: 0 }} reducedMotion="always">
      <div className="w-full bg-[#000205] text-white print-mode">
        {storyScenes.map((scene, index) => {
          const Component = SLIDE_COMPONENTS[scene.id] || SceneLayout;
          
          return (
            <div key={scene.id} className="relative w-full h-screen overflow-hidden border-b border-white/10">
              {/* Background per slide */}
              <div className="absolute inset-0 z-0">
                <AnimatedBackgrounds sceneIndex={index} currentScene={scene} />
              </div>
              
              {/* Ambient Lighting */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1] mix-blend-screen">
                <div className="w-[600px] h-[600px] bg-[#3B58E6] rounded-full opacity-[0.10] blur-[120px]" />
              </div>

              {/* Static Header without navbar links */}
              <div className="absolute top-0 left-0 right-0 z-40 pointer-events-none">
                <Header />
              </div>

              {/* Slide Content Overlay */}
              <div className="absolute inset-0 z-10 flex flex-col justify-center items-center p-2 sm:p-4 md:p-6 lg:p-10 max-w-[1800px] mx-auto w-full h-full pointer-events-none">
                <Component 
                  scene={scene} 
                  isActive={true} 
                  isPresentationMode={false}
                  revealStep={3} 
                />
              </div>

              {/* Static Footer */}
              <div className="absolute bottom-0 left-0 right-0 z-40 pointer-events-none">
                <Footer currentSceneIndex={index} totalScenes={storyScenes.length} />
              </div>
            </div>
          );
        })}
      </div>
    </MotionConfig>
  );
};

