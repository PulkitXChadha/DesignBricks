import { HTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import './Card.css';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Card variant */
  variant?: 'default' | 'outlined' | 'elevated';
  /** Padding size */
  padding?: 'none' | 'small' | 'medium' | 'large';
  /** Clickable card */
  clickable?: boolean;
  /** Selected state */
  selected?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      padding = 'medium',
      clickable = false,
      selected = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'db-card',
          `db-card--${variant}`,
          `db-card--padding-${padding}`,
          {
            'db-card--clickable': clickable,
            'db-card--selected': selected,
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';