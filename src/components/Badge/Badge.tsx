import { HTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import './Badge.css';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Badge variant */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info' | 'new';
  /** Badge size */
  size?: 'small' | 'medium' | 'large';
  /** Dot indicator */
  dot?: boolean;
  /** Max count to display */
  max?: number;
  /** Count value */
  count?: number;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'default',
      size = 'medium',
      dot = false,
      max = 99,
      count,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const displayContent = () => {
      if (dot) return null;
      if (count !== undefined) {
        return count > max ? `${max}+` : count;
      }
      return children;
    };

    return (
      <span
        ref={ref}
        className={clsx(
          'db-badge',
          `db-badge--${variant}`,
          `db-badge--${size}`,
          {
            'db-badge--dot': dot,
          },
          className
        )}
        {...props}
      >
        {displayContent()}
      </span>
    );
  }
);

Badge.displayName = 'Badge';