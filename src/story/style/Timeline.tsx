import React from 'react';
import { motion } from 'motion/react';

export interface TimelineStep {
  step: string | number;
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface TimelineProps {
  steps: TimelineStep[];
  currentStep?: number;
}

export const Timeline: React.FC<TimelineProps> = ({ steps, currentStep = 0 }) => {
  return (
    <div className="w-full max-w-5xl mx-auto py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative">
        {steps.map((item, index) => {
          const Icon = item.icon;
          const isActive = index <= currentStep;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`p-4 rounded-[20px] border-[1.5px] backdrop-blur-xl transition-all duration-300 flex flex-col justify-between ${
                isActive
                  ? 'bg-blue-900/30 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                  : 'bg-slate-900/40 border-white/10 text-slate-400'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="wpcc-badge px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300">
                  Step {item.step}
                </span>
                {Icon && <Icon className="w-4 h-4 text-blue-400" />}
              </div>
              <h4 className="wpcc-h4 text-white mb-1">{item.title}</h4>
              <p className="wpcc-body-small text-slate-300 leading-snug">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
