import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import './Button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  /** Button size */
  size?: 'small' | 'medium' | 'large';
  /** Full width button */
  fullWidth?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Icon before text */
  iconBefore?: React.ReactNode;
  /** Icon after text */
  iconAfter?: React.ReactNode;
  /** Disabled state */
  disabled?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      fullWidth = false,
      loading = false,
      iconBefore,
      iconAfter,
      disabled = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'db-button',
          `db-button--${variant}`,
          `db-button--${size}`,
          {
            'db-button--full-width': fullWidth,
            'db-button--loading': loading,
            'db-button--disabled': disabled || loading,
          },
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <span className="db-button__spinner" aria-hidden="true">
            <svg
              className="db-spinner"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="db-spinner__circle"
                cx="12"
                cy="12"
                r="10"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </span>
        )}
        {iconBefore && !loading && (
          <span className="db-button__icon db-button__icon--before">
            {iconBefore}
          </span>
        )}
        {children && <span className="db-button__text">{children}</span>}
        {iconAfter && (
          <span className="db-button__icon db-button__icon--after">
            {iconAfter}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';