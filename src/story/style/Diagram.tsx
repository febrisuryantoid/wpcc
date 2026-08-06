import React from 'react';
import { motion } from 'motion/react';

export interface DiagramNode {
  id: string;
  title: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface DiagramProps {
  nodes: DiagramNode[];
}

export const Diagram: React.FC<DiagramProps> = ({ nodes }) => {
  return (
    <div className="w-full max-w-4xl mx-auto py-4">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        {nodes.map((node, index) => {
          const Icon = node.icon;
          return (
            <React.Fragment key={node.id || index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="p-4 sm:p-5 rounded-2xl border border-white/15 bg-slate-900/60 backdrop-blur-xl shadow-lg flex flex-col items-center text-center max-w-[220px] w-full"
              >
                {Icon && (
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center mb-3 text-blue-400">
                    <Icon className="w-5 h-5" />
                  </div>
                )}
                <h4 className="text-sm font-bold text-white font-sans">{node.title}</h4>
                {node.description && (
                  <p className="text-xs text-slate-300 font-sans mt-1 leading-snug">{node.description}</p>
                )}
              </motion.div>
              {index < nodes.length - 1 && (
                <div className="hidden sm:block text-blue-400 font-bold text-lg">→</div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
