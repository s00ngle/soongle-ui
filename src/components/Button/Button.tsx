import * as React from 'react';
import { ButtonProps, ButtonSize, ButtonVariant } from './types';

const baseStyles =
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 focus-visible:ring-primary-500',
  secondary:
    'bg-secondary-600 text-white hover:bg-secondary-700 active:bg-secondary-800 focus-visible:ring-secondary-500',
  outline:
    'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100 focus-visible:ring-primary-500',
  ghost:
    'text-primary-600 hover:bg-primary-50 active:bg-primary-100 focus-visible:ring-primary-500',
  success:
    'bg-success-600 text-white hover:bg-success-700 active:bg-success-800 focus-visible:ring-success-500',
  warning:
    'bg-warning-600 text-white hover:bg-warning-700 active:bg-warning-800 focus-visible:ring-warning-500',
  error:
    'bg-error-600 text-white hover:bg-error-700 active:bg-error-800 focus-visible:ring-error-500',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-10 px-4 text-base',
  lg: 'h-11 px-6 text-lg',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className = '', variant = 'primary', size = 'md', children, ...props },
    ref
  ) => {
    const computedClassName = [
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button ref={ref} className={computedClassName} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
