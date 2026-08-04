import React from 'react';
import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { SceneLayout } from '../components/SceneLayout';
import { InteractiveShowcaseImage } from '../components/InteractiveShowcaseImage';

export const Scene47: React.FC<SceneProps> = ({ scene, isActive, isPresentationMode = false, revealStep = 3 }) => {
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
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgthpYgqea4rxujp_3c7RlqXKva4ivVR8ZEBdWiLClVGq79wxPKJ02vTEmC5777fT9Yf_GuqtSTelQi9ijFzE5JRf23PCjqBb4ZY9v_z2PyiBUtd5UqYPKwcnvUX90wf6Gj9WQGs5N8xPIcOFUqo4hbqCfuRNt6Kp2JztvqftC7UjeJdfVXgIyBieDmFLU/s1600/Portfolio%20Website.webp"
            alt={scene.headline}
            type="portfolio"
            isActive={isActive}
          />
        </motion.div>
      )}
    </SceneLayout>
  );
};
