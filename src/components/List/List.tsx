import React, { ReactNode, forwardRef, HTMLAttributes } from 'react';
import clsx from 'clsx';
import './List.css';

export interface ListProps extends HTMLAttributes<HTMLUListElement> {
  /** List items */
  children: ReactNode;
  /** List variant */
  variant?: 'default' | 'plain' | 'divided' | 'bordered';
  /** Size of list items */
  size?: 'small' | 'medium' | 'large';
  /** Whether list items are dense (less padding) */
  dense?: boolean;
  /** Whether list is hoverable */
  hoverable?: boolean;
}

export const List = forwardRef<HTMLUListElement, ListProps>(
  (
    {
      children,
      variant = 'default',
      size = 'medium',
      dense = false,
      hoverable = true,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <ul
        ref={ref}
        className={clsx(
          'db-list',
          `db-list--${variant}`,
          `db-list--${size}`,
          {
            'db-list--dense': dense,
            'db-list--hoverable': hoverable,
          },
          className
        )}
        {...props}
      >
        {children}
      </ul>
    );
  }
);

List.displayName = 'List';
