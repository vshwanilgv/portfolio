import React from 'react';
import type { AccentColor } from '@/config/content';

type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps {
  /**
   * Accent color variant
   * @default 'blue'
   */
  color?: AccentColor;
  
  /**
   * Badge size
   * @default 'md'
   */
  size?: BadgeSize;
  
  /**
   * Badge content
   */
  children: React.ReactNode;
  
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  color = 'blue',
  size = 'md',
  children,
  className = '',
}) => {
  // Base classes
  const baseClasses = 'badge inline-flex items-center font-semibold';
  
  // Color variant classes
  const colorClasses = {
    blue: 'badge-blue',
    green: 'badge-green',
    yellow: 'badge-yellow',
    cyan: 'badge-cyan',
  };
  
  // Size classes
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-xs px-3 py-1.5',
    lg: 'text-sm px-4 py-2',
  };
  
  const combinedClasses = [
    baseClasses,
    colorClasses[color],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <span className={combinedClasses}>{children}</span>;
};
