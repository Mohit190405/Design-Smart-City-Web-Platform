interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'white' | 'neutral';
}

export function LoadingSpinner({ size = 'md', color = 'primary' }: LoadingSpinnerProps) {
  const sizeStyles = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-2',
    lg: 'w-12 h-12 border-3',
  };

  const colorStyles = {
    primary: 'border-[var(--color-primary-600)] border-t-transparent',
    white: 'border-white border-t-transparent',
    neutral: 'border-[var(--color-neutral-600)] border-t-transparent',
  };

  return (
    <div className={`${sizeStyles[size]} ${colorStyles[color]} rounded-full animate-spin`}></div>
  );
}

export function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[var(--color-neutral-50)]">
      <div className="text-center">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-[var(--color-neutral-600)]">Loading...</p>
      </div>
    </div>
  );
}
