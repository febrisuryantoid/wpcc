import React, { useEffect } from 'react';
import { storyScenes } from './story/data';
import { SLIDE_COMPONENTS } from './story/slideMap';
import { SceneLayout } from './story/ui/SceneLayout';
import { AnimatedBackgrounds } from './story/ui/AnimatedBackgrounds';
import { MotionConfig } from 'motion/react';
import { Header } from './story/ui/Header';
import { Footer } from './story/ui/Footer';
import { Printer } from 'lucide-react';

export const PrintPage: React.FC = () => {
  useEffect(() => {
    document.body.style.overflow = 'auto';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <MotionConfig transition={{ duration: 0 }} reducedMotion="always">
      {/* Floating Action Button for easy PDF export */}
      <div className="fixed top-4 right-6 z-50 no-print flex items-center gap-3 bg-slate-900/90 backdrop-blur-md border border-white/20 text-white px-4 py-2.5 rounded-full shadow-2xl">
        <span className="text-xs text-slate-300 hidden sm:inline">
          💡 Tips: Centang <strong className="text-white">"Background graphics"</strong> saat cetak PDF
        </span>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm px-4 py-1.5 rounded-full transition-colors shadow-lg cursor-pointer pointer-events-auto"
        >
          <Printer className="w-4 h-4" />
          <span>Simpan PDF / Cetak</span>
        </button>
      </div>

      <div className="w-full bg-[#000205] text-white print-mode">
        {storyScenes.map((scene, index) => {
          const Component = SLIDE_COMPONENTS[scene.id] || SceneLayout;
          
          return (
            <div key={scene.id} className="relative w-full h-screen overflow-hidden border-b border-white/10 print-slide-section">
              {/* Background per slide */}
              <div className="absolute inset-0 z-0">
                <AnimatedBackgrounds sceneIndex={index} currentScene={scene} />
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


