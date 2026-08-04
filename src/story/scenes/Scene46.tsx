import React from 'react';
import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { SceneLayout } from '../components/SceneLayout';
import { InteractiveShowcaseImage } from '../components/InteractiveShowcaseImage';

export const Scene46: React.FC<SceneProps> = ({ scene, isActive, isPresentationMode = false, revealStep = 3 }) => {
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
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQblQzMCyYWKpeaIvKpEGRXi8LeMFHmKyZSY_s9VCaZ3iUrGk66ECqKuIW0bsfefe7XaZzB5qaFufwq_yeftCF4yUqqDsQ3Ks4JGSRviFbDdhJLDMw53j-r4xTjzRVFSwCq-3RCjdkH2vjZmWfAnHXVWxVDl1ijJ-UlIIzlMPmFBWcdZSNPDXM3Yqceo4/s1600/E-Learning.webp"
            alt={scene.headline}
            type="elearning"
            isActive={isActive}
          />
        </motion.div>
      )}
    </SceneLayout>
  );
};
