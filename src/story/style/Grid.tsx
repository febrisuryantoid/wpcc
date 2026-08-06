import React from 'react';
import { motion } from 'motion/react';

export interface GridCardItem {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  badge?: string;
}

export interface GridProps {
  items: GridCardItem[];
  columns?: 4 | 6 | 8;
}

export const Grid: React.FC<GridProps> = ({ items, columns = 4 }) => {
  const gridClass = 
    columns === 8 
      ? 'grid-cols-2 sm:grid-cols-4 lg:grid-cols-8'
      : columns === 6
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';

  return (
    <div className={`grid ${gridClass} gap-4 w-full max-w-6xl mx-auto`}>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="wpcc-card rounded-[24px] border-[1.5px] border-white/15 bg-slate-900/50 backdrop-blur-xl flex flex-col justify-between hover:border-blue-400/50 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                {Icon && (
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-400">
                    <Icon className="w-5 h-5" />
                  </div>
                )}
                {item.badge && (
                  <span className="wpcc-badge px-2 py-0.5 rounded-full bg-blue-500/20 text-cyan-300">
                    {item.badge}
                  </span>
                )}
              </div>
              <h4 className="wpcc-h4 text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h4>
              <p className="wpcc-body-small text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
