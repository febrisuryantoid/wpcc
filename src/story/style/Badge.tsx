import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
  variant?: 'blue' | 'cyan' | 'purple' | 'emerald';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  icon: Icon = Sparkles,
  variant = 'blue',
  className = ''
}) => {
  const variantStyles = {
    blue: 'bg-blue-500/10 border-blue-400/20 text-blue-300',
    cyan: 'bg-cyan-500/10 border-cyan-400/20 text-cyan-300',
    purple: 'bg-purple-500/10 border-purple-400/20 text-purple-300',
    emerald: 'bg-emerald-500/10 border-emerald-400/20 text-emerald-300',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border wpcc-badge backdrop-blur-md shadow-sm ${variantStyles[variant]} ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5" />}
      <span>{children}</span>
    </motion.div>
  );
};
