import React, { InputHTMLAttributes, forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import './Toggle.css';

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label for the toggle (legacy support) */
  label?: string;
  /** Size of the toggle */
  size?: 'small' | 'medium' | 'large';
  /** Error state (legacy support) */
  error?: boolean;
  /** Helper text (legacy support) */
  helperText?: string;
  /** Label position (legacy support) */
  labelPosition?: 'left' | 'right';
  /** Status label when toggle is active/checked (recommended for accessibility) */
  activeLabel?: ReactNode;
  /** Status label when toggle is inactive/unchecked (recommended for accessibility) */
  inactiveLabel?: ReactNode;
  /** Status label when toggle is disabled (recommended for accessibility) */
  disabledLabel?: ReactNode;
  /** Content displayed inside toggle when checked */
  checkedChildren?: ReactNode;
  /** Content displayed inside toggle when unchecked */
  unCheckedChildren?: ReactNode;
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
      activeLabel,
      inactiveLabel,
      disabledLabel,
      checkedChildren,
      unCheckedChildren,
      className,
      id,
      checked,
      defaultChecked,
      ...props
    },
    ref
  ) => {
    const toggleId = id || `toggle-${Math.random().toString(36).substr(2, 9)}`;
    
    // Use new label pattern if all three status labels are provided
    const useNewLabelPattern = activeLabel && inactiveLabel && disabledLabel;
    
    // Determine which status label to show
    const getStatusLabel = () => {
      if (disabled && disabledLabel) {
        return disabledLabel;
      }
      if (checked && activeLabel) {
        return activeLabel;
      }
      if (!checked && inactiveLabel) {
        return inactiveLabel;
      }
      return null;
    };
    
    const statusLabel = getStatusLabel();

    return (
      <div
        className={clsx(
          'db-toggle',
          `db-toggle--${size}`,
          {
            'db-toggle--error': error,
            'db-toggle--disabled': disabled,
            'db-toggle--label-left': labelPosition === 'left',
            'db-toggle--new-pattern': useNewLabelPattern,
          },
          className
        )}
      >
        <label htmlFor={toggleId} className="db-toggle__wrapper">
          {/* Legacy label pattern - left side */}
          {label && labelPosition === 'left' && !useNewLabelPattern && (
            <span className="db-toggle__label">{label}</span>
          )}
          
          {/* New label pattern - main label */}
          {useNewLabelPattern && label && (
            <span className="db-toggle__label db-toggle__label--main">{label}</span>
          )}
          
          <div className="db-toggle__track">
            <input
              ref={ref}
              type="checkbox"
              id={toggleId}
              className="db-toggle__input"
              disabled={disabled}
              {...(checked !== undefined ? { checked } : { defaultChecked })}
              aria-checked={checked}
              {...props}
            />
            <span className="db-toggle__slider">
              <span className="db-toggle__thumb" />
              {/* Content inside toggle */}
              {checkedChildren && checked && (
                <span className="db-toggle__content db-toggle__content--checked" aria-hidden="true">
                  {checkedChildren}
                </span>
              )}
              {unCheckedChildren && !checked && (
                <span className="db-toggle__content db-toggle__content--unchecked" aria-hidden="true">
                  {unCheckedChildren}
                </span>
              )}
            </span>
          </div>
          
          {/* Legacy label pattern - right side */}
          {label && labelPosition === 'right' && !useNewLabelPattern && (
            <span className="db-toggle__label">{label}</span>
          )}
          
          {/* New label pattern - status label */}
          {useNewLabelPattern && statusLabel && (
            <span className="db-toggle__status-label" aria-live="polite">
              {statusLabel}
            </span>
          )}
        </label>
        
        {/* Legacy helper text */}
        {helperText && !useNewLabelPattern && (
          <div className="db-toggle__helper">{helperText}</div>
        )}
      </div>
    );
  }
);

Toggle.displayName = 'Toggle';
