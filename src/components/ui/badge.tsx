import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Badge({ children, variant = 'neutral', size = 'md', className = '' }: BadgeProps) {
  const variantStyles = {
    success: 'bg-green-100 text-green-800 border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    error: 'bg-red-100 text-red-800 border-red-200',
    info: 'bg-blue-100 text-blue-800 border-blue-200',
    neutral: 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)] border-[var(--color-neutral-200)]',
    primary: 'bg-[var(--color-primary-100)] text-[var(--color-primary-800)] border-[var(--color-primary-200)]',
    secondary: 'bg-[var(--color-secondary-100)] text-[var(--color-secondary-800)] border-[var(--color-secondary-200)]',
  };

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  };

  return (
    <span className={`inline-flex items-center rounded-full border ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {children}
    </span>
  );
}
