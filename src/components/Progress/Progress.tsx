import { HTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import './Progress.css';

export interface ProgressProps extends Omit<HTMLAttributes<HTMLDivElement>, 'value'> {
  /** Current value (0-100 for determinate) */
  value?: number;
  /** Maximum value */
  max?: number;
  /** Progress variant */
  variant?: 'linear' | 'circular';
  /** Size */
  size?: 'small' | 'medium' | 'large';
  /** Color variant */
  color?: 'primary' | 'success' | 'warning' | 'error';
  /** Show label */
  showLabel?: boolean;
  /** Indeterminate state */
  indeterminate?: boolean;
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      value = 0,
      max = 100,
      variant = 'linear',
      size = 'medium',
      color = 'primary',
      showLabel = false,
      indeterminate = false,
      className,
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    if (variant === 'circular') {
      const sizes = {
        small: { width: 32, strokeWidth: 3 },
        medium: { width: 48, strokeWidth: 4 },
        large: { width: 64, strokeWidth: 5 },
      };

      const { width, strokeWidth } = sizes[size];
      const radius = (width - strokeWidth) / 2;
      const circumference = 2 * Math.PI * radius;
      const offset = indeterminate ? 0 : circumference - (percentage / 100) * circumference;

      return (
        <div
          ref={ref}
          className={clsx(
            'db-progress',
            'db-progress--circular',
            `db-progress--${size}`,
            `db-progress--${color}`,
            {
              'db-progress--indeterminate': indeterminate,
            },
            className
          )}
          role="progressbar"
          aria-valuenow={indeterminate ? undefined : value}
          aria-valuemin={0}
          aria-valuemax={max}
          {...props}
        >
          <svg width={width} height={width}>
            <circle
              className="db-progress__circle-bg"
              cx={width / 2}
              cy={width / 2}
              r={radius}
              strokeWidth={strokeWidth}
            />
            <circle
              className="db-progress__circle-fill"
              cx={width / 2}
              cy={width / 2}
              r={radius}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              transform={`rotate(-90 ${width / 2} ${width / 2})`}
            />
          </svg>
          {showLabel && !indeterminate && (
            <span className="db-progress__label">{Math.round(percentage)}%</span>
          )}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={clsx(
          'db-progress',
          'db-progress--linear',
          `db-progress--${size}`,
          `db-progress--${color}`,
          {
            'db-progress--indeterminate': indeterminate,
          },
          className
        )}
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : value}
        aria-valuemin={0}
        aria-valuemax={max}
        {...props}
      >
        <div className="db-progress__track">
          <div
            className="db-progress__fill"
            style={indeterminate ? undefined : { width: `${percentage}%` }}
          />
        </div>
        {showLabel && !indeterminate && (
          <span className="db-progress__label">{Math.round(percentage)}%</span>
        )}
      </div>
    );
  }
);

Progress.displayName = 'Progress';

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  /** Size */
  size?: 'small' | 'medium' | 'large';
  /** Color variant */
  color?: 'primary' | 'white' | 'inherit';
}

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size = 'medium', color = 'primary', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'db-spinner',
          `db-spinner--${size}`,
          `db-spinner--${color}`,
          className
        )}
        role="status"
        aria-label="Loading"
        {...props}
      >
        <svg className="db-spinner__svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle
            className="db-spinner__circle"
            cx="12"
            cy="12"
            r="10"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>
    );
  }
);

Spinner.displayName = 'Spinner';