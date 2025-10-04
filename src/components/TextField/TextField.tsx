import React, { InputHTMLAttributes, forwardRef, useState, KeyboardEvent, useId } from 'react';
import clsx from 'clsx';
import './TextField.css';

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  /** Field label */
  label?: React.ReactNode;
  /** Description text (helper text displayed below input) */
  description?: React.ReactNode;
  /** Validation state */
  validationState?: 'error' | 'warning' | 'success';
  /** Error message displayed below input when validationState is 'error' */
  message?: React.ReactNode;
  /** Field size - Databricks standard sizes */
  size?: 'small' | 'default';
  /** Full width */
  fullWidth?: boolean;
  /** Prefix content (icon or text before input) */
  prefix?: React.ReactNode;
  /** Suffix content (icon or text after input) */
  suffix?: React.ReactNode;
  /** Required field indicator */
  required?: boolean;
  /** Read-only state (focusable but not editable) */
  readOnly?: boolean;
  /** Optional field indicator */
  optional?: boolean;
  /** Show clear button when input has value */
  showClear?: boolean;
  /** Callback when clear button is clicked */
  onClear?: () => void;
  /** Callback when Enter key is pressed */
  onPressEnter?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      description,
      validationState,
      message,
      size = 'default',
      fullWidth = false,
      prefix,
      suffix,
      required = false,
      disabled = false,
      readOnly = false,
      optional = false,
      showClear = false,
      onClear,
      onPressEnter,
      className,
      id: providedId,
      value,
      onKeyDown,
      onChange,
      ...props
    },
    ref
  ) => {
    const [focused, setFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(value ?? '');
    const generatedId = useId();
    const id = providedId || generatedId;
    
    const isError = validationState === 'error';
    const isWarning = validationState === 'warning';
    const isSuccess = validationState === 'success';
    const currentValue = value !== undefined ? value : internalValue;
    const showClearButton = showClear && currentValue && !disabled && !readOnly;

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && onPressEnter) {
        onPressEnter(e);
      }
      onKeyDown?.(e);
    };

    const handleClear = () => {
      setInternalValue('');
      onClear?.();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (value === undefined) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);
    };

    const descriptionId = description ? `${id}-description` : undefined;
    const messageId = message ? `${id}-message` : undefined;
    const ariaDescribedBy = [descriptionId, messageId].filter(Boolean).join(' ') || undefined;

    return (
      <div
        className={clsx(
          'db-textfield',
          `db-textfield--${size}`,
          {
            'db-textfield--full-width': fullWidth,
            'db-textfield--disabled': disabled,
            'db-textfield--readonly': readOnly,
            'db-textfield--error': isError,
            'db-textfield--warning': isWarning,
            'db-textfield--success': isSuccess,
          },
          className
        )}
      >
        {label && (
          <label htmlFor={id} className="db-textfield__label">
            {label}
            {required && <span className="db-textfield__required" aria-label="required"> *</span>}
            {optional && <span className="db-textfield__optional"> (optional)</span>}
          </label>
        )}
        <div
          className={clsx('db-textfield__wrapper', {
            'db-textfield__wrapper--focused': focused,
            'db-textfield__wrapper--error': isError,
            'db-textfield__wrapper--warning': isWarning,
            'db-textfield__wrapper--success': isSuccess,
            'db-textfield__wrapper--disabled': disabled,
            'db-textfield__wrapper--readonly': readOnly,
          })}
        >
          {prefix && (
            <span className="db-textfield__prefix" aria-hidden="true">
              {prefix}
            </span>
          )}
          <input
            ref={ref}
            id={id}
            className="db-textfield__input"
            disabled={disabled}
            readOnly={readOnly}
            value={currentValue}
            required={required}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            aria-invalid={isError || undefined}
            aria-describedby={ariaDescribedBy}
            {...props}
          />
          {showClearButton && (
            <button
              type="button"
              className="db-textfield__clear"
              onClick={handleClear}
              aria-label="Clear input"
              tabIndex={-1}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                <path d="M6 4.586L9.293 1.293a1 1 0 111.414 1.414L7.414 6l3.293 3.293a1 1 0 01-1.414 1.414L6 7.414l-3.293 3.293a1 1 0 01-1.414-1.414L4.586 6 1.293 2.707a1 1 0 011.414-1.414L6 4.586z"/>
              </svg>
            </button>
          )}
          {suffix && (
            <span className="db-textfield__suffix" aria-hidden="true">
              {suffix}
            </span>
          )}
        </div>
        {description && !message && (
          <div
            className="db-textfield__description"
            id={descriptionId}
          >
            {description}
          </div>
        )}
        {message && (
          <div
            className={clsx('db-textfield__message', {
              'db-textfield__message--error': isError,
              'db-textfield__message--warning': isWarning,
              'db-textfield__message--success': isSuccess,
            })}
            id={messageId}
            role={isError ? 'alert' : undefined}
          >
            {message}
          </div>
        )}
      </div>
    );
  }
);

TextField.displayName = 'TextField';