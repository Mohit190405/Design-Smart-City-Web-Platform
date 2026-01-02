import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
}

export function Input({ label, error, helperText, icon, className = '', ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm mb-1.5 text-[var(--color-neutral-700)]">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-neutral-400)]">
            {icon}
          </div>
        )}
        <input
          className={`w-full px-4 py-2.5 bg-white border rounded-lg transition-all duration-200 
            ${icon ? 'pl-10' : ''} 
            ${error 
              ? 'border-[var(--color-error)] focus:border-[var(--color-error)] focus:ring-2 focus:ring-red-100' 
              : 'border-[var(--color-neutral-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-100)]'
            } 
            disabled:bg-[var(--color-neutral-100)] disabled:cursor-not-allowed outline-none ${className}`}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-[var(--color-error)]">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1.5 text-sm text-[var(--color-neutral-500)]">{helperText}</p>
      )}
    </div>
  );
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export function TextArea({ label, error, helperText, className = '', ...props }: TextAreaProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm mb-1.5 text-[var(--color-neutral-700)]">
          {label}
        </label>
      )}
      <textarea
        className={`w-full px-4 py-2.5 bg-white border rounded-lg transition-all duration-200 
          ${error 
            ? 'border-[var(--color-error)] focus:border-[var(--color-error)] focus:ring-2 focus:ring-red-100' 
            : 'border-[var(--color-neutral-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-100)]'
          } 
          disabled:bg-[var(--color-neutral-100)] disabled:cursor-not-allowed outline-none resize-none ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1.5 text-sm text-[var(--color-error)]">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1.5 text-sm text-[var(--color-neutral-500)]">{helperText}</p>
      )}
    </div>
  );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export function Select({ label, error, options, className = '', ...props }: SelectProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm mb-1.5 text-[var(--color-neutral-700)]">
          {label}
        </label>
      )}
      <select
        className={`w-full px-4 py-2.5 bg-white border rounded-lg transition-all duration-200 
          ${error 
            ? 'border-[var(--color-error)] focus:border-[var(--color-error)] focus:ring-2 focus:ring-red-100' 
            : 'border-[var(--color-neutral-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-100)]'
          } 
          disabled:bg-[var(--color-neutral-100)] disabled:cursor-not-allowed outline-none ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1.5 text-sm text-[var(--color-error)]">{error}</p>
      )}
    </div>
  );
}
