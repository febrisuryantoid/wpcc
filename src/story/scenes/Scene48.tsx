import React from 'react';
import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { SceneLayout } from '../components/SceneLayout';
import { InteractiveShowcaseImage } from '../components/InteractiveShowcaseImage';

export const Scene48: React.FC<SceneProps> = ({ scene, isActive, isPresentationMode = false, revealStep = 3 }) => {
  const showContent = !isPresentationMode || revealStep >= 2;

  return (
    <SceneLayout 
      scene={scene} 
      isActive={isActive}
      isPresentationMode={isPresentationMode}
      revealStep={revealStep}
      childrenBeforePoints={true}
    >
      {showContent && (
        <motion.div
          className="w-full mt-4 pointer-events-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <InteractiveShowcaseImage
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi3zFoNcaPCKnyRwjgwJ2jU2cT0imfihSwWSRTxll8uyNcWqMl7KFyZ3HZrUlCEp7mAMnys3Y-ZlVaGqB5MGVo2QuZf7owZwFSDYrWp409CEEK1mLBl_o6shJFWw1ZHGTGjyhZwPTRq9h-F_TIHNqC9cuuW1RVEHtj4yI6l3w2llnp5RINN0V11jObNepY/s1600/Portal%20Berita.webp"
            alt={scene.headline}
            type="portal-berita"
            isActive={isActive}
          />
        </motion.div>
      )}
    </SceneLayout>
  );
};
