import React from 'react';
import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { SceneLayout } from '../components/SceneLayout';
import { InteractiveShowcaseImage } from '../components/InteractiveShowcaseImage';

export const Scene43: React.FC<SceneProps> = ({ scene, isActive, isPresentationMode = false, revealStep = 3 }) => {
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
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjC6F0Uv5s8FIiNj6vYLSC0vCe6soHLM3NCPu4Uq9blq0-WqUK9utd2jjTx6IVrWVgQoQD_qBmnAcCFRDLkKmvtar8nwC3CRuTBY8_h-97Z_k_90-4Z-RYQ8a50CtHPOf0ilM2JYGGvblXHY55gEQJuKGYl4l2QP5-vLQfEMNm4hhLbuAPIrR12fPgp8a8/s1600/Website%20Company%20Profile.webp"
            alt={scene.headline}
            type="company-profile"
            isActive={isActive}
          />
        </motion.div>
      )}
    </SceneLayout>
  );
};
