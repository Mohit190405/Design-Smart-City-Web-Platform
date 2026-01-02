import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantStyles = {
    primary: 'bg-[var(--color-primary-600)] text-white hover:bg-[var(--color-primary-700)] active:bg-[var(--color-primary-800)] shadow-sm',
    secondary: 'bg-[var(--color-secondary-600)] text-white hover:bg-[var(--color-secondary-700)] active:bg-[var(--color-secondary-800)] shadow-sm',
    accent: 'bg-[var(--color-accent-500)] text-white hover:bg-[var(--color-accent-600)] active:bg-[var(--color-accent-700)] shadow-sm',
    ghost: 'bg-transparent text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)] active:bg-[var(--color-neutral-200)]',
    danger: 'bg-[var(--color-error)] text-white hover:bg-red-600 active:bg-red-700 shadow-sm',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
