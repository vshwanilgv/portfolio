import React from 'react';
import { LucideIcon } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style variant
   * @default 'primary'
   */
  variant?: ButtonVariant;
  
  size?: ButtonSize;
  
  icon?: LucideIcon;

  iconRight?: LucideIcon;
  
  /**
   * Full width button
   * @default false
   */
  fullWidth?: boolean;
  
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconRight: IconRight,
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'btn hover-lift';
  
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'bg-transparent hover:bg-white/5 text-slate-300 hover:text-white',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const iconSize = {
    sm: 16,
    md: 20,
    lg: 24,
  };
  
  const combinedClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    widthClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={combinedClasses} {...props}>
      {Icon && <Icon size={iconSize[size]} />}
      <span>{children}</span>
      {IconRight && <IconRight size={iconSize[size]} />}
    </button>
  );
};
