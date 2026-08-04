import React from 'react';
import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { SceneLayout } from '../components/SceneLayout';
import { InteractiveShowcaseImage } from '../components/InteractiveShowcaseImage';

export const Scene44: React.FC<SceneProps> = ({ scene, isActive, isPresentationMode = false, revealStep = 3 }) => {
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
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidIbwYvvcrYUaqJPyk0mYp7pkkTgZ6vIBOpx-PSVx4SxrshisCq6rdt4zSCC-iAylVPx4H0TqusX_GmHNCf13oMBRFqdvxRLMVt_G5IeHeTRDJM_M9LiRI_jK_ovGIjqKCAUAFlqZUUHinfSHCbi7L49BNrQBvOwf1RzZVKBLeY08qhl_D_b5YgHSWEeo/s1600/Landing%20Page.webp"
            alt={scene.headline}
            type="landing-page"
            isActive={isActive}
          />
        </motion.div>
      )}
    </SceneLayout>
  );
};
