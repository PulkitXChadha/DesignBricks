import React, { InputHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import './Toggle.css';

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label for the toggle */
  label?: string;
  /** Size of the toggle */
  size?: 'small' | 'medium' | 'large';
  /** Error state */
  error?: boolean;
  /** Helper text */
  helperText?: string;
  /** Label position */
  labelPosition?: 'left' | 'right';
}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      label,
      size = 'medium',
      error = false,
      helperText,
      disabled = false,
      labelPosition = 'right',
      className,
      id,
      ...props
    },
    ref
  ) => {
    const toggleId = id || `toggle-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div
        className={clsx(
          'db-toggle',
          `db-toggle--${size}`,
          {
            'db-toggle--error': error,
            'db-toggle--disabled': disabled,
            'db-toggle--label-left': labelPosition === 'left',
          },
          className
        )}
      >
        <label htmlFor={toggleId} className="db-toggle__wrapper">
          {label && labelPosition === 'left' && (
            <span className="db-toggle__label">{label}</span>
          )}
          <div className="db-toggle__track">
            <input
              ref={ref}
              type="checkbox"
              id={toggleId}
              className="db-toggle__input"
              disabled={disabled}
              {...props}
            />
            <span className="db-toggle__slider">
              <span className="db-toggle__thumb" />
            </span>
          </div>
          {label && labelPosition === 'right' && (
            <span className="db-toggle__label">{label}</span>
          )}
        </label>
        {helperText && (
          <div className="db-toggle__helper">{helperText}</div>
        )}
      </div>
    );
  }
);

Toggle.displayName = 'Toggle';
