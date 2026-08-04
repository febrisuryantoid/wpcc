import React from 'react';
import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { SceneLayout } from '../components/SceneLayout';
import { InteractiveShowcaseImage } from '../components/InteractiveShowcaseImage';

export const Scene45: React.FC<SceneProps> = ({ scene, isActive, isPresentationMode = false, revealStep = 3 }) => {
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
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWCi8H7qSY6-g3v7iTsIGT99o1vM1VGIf-Iqzg05FIm2rL5J-Phyy1G42o5GDZk88T4eNpsHl5OuyjZSYo-xpjiWpa1UayHajtFu7rIA6iCPqlaRJufHloJzwpT3-gRZ0Q8PBf02xZgdnfOQuvd5e5rSNcztLXHPYr6W8lGzBwIHPmZK_Ma3BvX1wxWmQ/s1600/E-Commerce.webp"
            alt={scene.headline}
            type="ecommerce"
            isActive={isActive}
          />
        </motion.div>
      )}
    </SceneLayout>
  );
};
