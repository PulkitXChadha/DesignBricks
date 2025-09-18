import React, { HTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import './Typography.css';

type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline'
  | 'code';

type TypographyColor =
  | 'primary'
  | 'secondary'
  | 'disabled'
  | 'error'
  | 'warning'
  | 'success'
  | 'info'
  | 'inherit';

type TypographyAlign = 'left' | 'center' | 'right' | 'justify';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  /** Typography variant */
  variant?: TypographyVariant;
  /** Text color */
  color?: TypographyColor;
  /** Text alignment */
  align?: TypographyAlign;
  /** Truncate text with ellipsis */
  truncate?: boolean;
  /** Font weight */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  /** Custom component/element */
  as?: keyof JSX.IntrinsicElements;
}

const variantMapping: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
  overline: 'span',
  code: 'code',
};

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  (
    {
      variant = 'body1',
      color = 'primary',
      align = 'left',
      truncate = false,
      weight,
      as,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const Component = as || variantMapping[variant];

    return (
      <Component
        ref={ref as any}
        className={clsx(
          'db-typography',
          `db-typography--${variant}`,
          `db-typography--${color}`,
          `db-typography--${align}`,
          weight && `db-typography--${weight}`,
          {
            'db-typography--truncate': truncate,
          },
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';