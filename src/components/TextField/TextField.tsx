import React, { InputHTMLAttributes, forwardRef, useState } from 'react';
import clsx from 'clsx';
import './TextField.css';

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Field label */
  label?: string;
  /** Helper text */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Field size */
  size?: 'small' | 'medium' | 'large';
  /** Full width */
  fullWidth?: boolean;
  /** Icon before input */
  iconBefore?: React.ReactNode;
  /** Icon after input */
  iconAfter?: React.ReactNode;
  /** Required field */
  required?: boolean;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      helperText,
      error,
      size = 'medium',
      fullWidth = false,
      iconBefore,
      iconAfter,
      required = false,
      disabled = false,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const [focused, setFocused] = useState(false);
    const fieldId = id || `textfield-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = Boolean(error);

    return (
      <div
        className={clsx(
          'db-textfield',
          `db-textfield--${size}`,
          {
            'db-textfield--full-width': fullWidth,
            'db-textfield--disabled': disabled,
            'db-textfield--error': hasError,
          },
          className
        )}
      >
        {label && (
          <label htmlFor={fieldId} className="db-textfield__label">
            {label}
            {required && <span className="db-textfield__required"> *</span>}
          </label>
        )}
        <div
          className={clsx('db-textfield__wrapper', {
            'db-textfield__wrapper--focused': focused,
            'db-textfield__wrapper--error': hasError,
            'db-textfield__wrapper--disabled': disabled,
          })}
        >
          {iconBefore && (
            <span className="db-textfield__icon db-textfield__icon--before">
              {iconBefore}
            </span>
          )}
          <input
            ref={ref}
            id={fieldId}
            className="db-textfield__input"
            disabled={disabled}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            aria-invalid={hasError}
            aria-describedby={
              hasError
                ? `${fieldId}-error`
                : helperText
                ? `${fieldId}-helper`
                : undefined
            }
            {...props}
          />
          {iconAfter && (
            <span className="db-textfield__icon db-textfield__icon--after">
              {iconAfter}
            </span>
          )}
        </div>
        {(helperText || error) && (
          <div
            className={clsx('db-textfield__helper', {
              'db-textfield__helper--error': hasError,
            })}
            id={hasError ? `${fieldId}-error` : `${fieldId}-helper`}
          >
            {error || helperText}
          </div>
        )}
      </div>
    );
  }
);

TextField.displayName = 'TextField';