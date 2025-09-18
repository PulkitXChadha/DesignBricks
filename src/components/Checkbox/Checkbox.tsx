import React, { InputHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import './Checkbox.css';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label for the checkbox */
  label?: string;
  /** Size of the checkbox */
  size?: 'small' | 'medium' | 'large';
  /** Error state */
  error?: boolean;
  /** Indeterminate state */
  indeterminate?: boolean;
  /** Helper text */
  helperText?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      size = 'medium',
      error = false,
      indeterminate = false,
      helperText,
      disabled = false,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    React.useEffect(() => {
      if (ref && 'current' in ref && ref.current) {
        ref.current.indeterminate = indeterminate;
      }
    }, [indeterminate, ref]);

    return (
      <div
        className={clsx(
          'db-checkbox',
          `db-checkbox--${size}`,
          {
            'db-checkbox--error': error,
            'db-checkbox--disabled': disabled,
          },
          className
        )}
      >
        <label htmlFor={checkboxId} className="db-checkbox__wrapper">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            className="db-checkbox__input"
            disabled={disabled}
            {...props}
          />
          <span className="db-checkbox__box">
            <svg
              className="db-checkbox__checkmark"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 4.5L4.5 8L11 1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className="db-checkbox__indeterminate"
              viewBox="0 0 12 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          {label && <span className="db-checkbox__label">{label}</span>}
        </label>
        {helperText && (
          <div className="db-checkbox__helper">{helperText}</div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';