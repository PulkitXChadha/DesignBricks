import React, { forwardRef, HTMLAttributes, AnchorHTMLAttributes } from 'react';
import clsx from 'clsx';
import './Typography.css';

export type TypographyColor =
  | 'primary'
  | 'secondary'
  | 'disabled'
  | 'error'
  | 'warning'
  | 'success'
  | 'info'
  | 'inherit';

export type TypographySize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

// Typography Root Component
interface TypographyRootProps extends HTMLAttributes<HTMLDivElement> {
  /** Whether to remove margins */
  withoutMargins?: boolean;
}

const TypographyRoot = forwardRef<HTMLDivElement, TypographyRootProps>(
  ({ withoutMargins, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'db-typography',
          {
            'db-typography--without-margins': withoutMargins,
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

TypographyRoot.displayName = 'Typography';

// Title Component (h1-h4)
export interface TypographyTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Heading level (1-4) */
  level?: 1 | 2 | 3 | 4;
  /** Text color */
  color?: TypographyColor;
  /** Whether to remove margins */
  withoutMargins?: boolean;
  /** Whether to truncate text with ellipsis */
  ellipsis?: boolean;
}

const Title = forwardRef<HTMLHeadingElement, TypographyTitleProps>(
  ({ level = 1, color = 'primary', withoutMargins, ellipsis, className, children, ...props }, ref) => {
    const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
    
    return React.createElement(
      Tag,
      {
        ref,
        className: clsx(
          'db-typography-title',
          `db-typography-title--level-${level}`,
          `db-typography--${color}`,
          {
            'db-typography--without-margins': withoutMargins,
            'db-typography--ellipsis': ellipsis,
          },
          className
        ),
        ...props,
      },
      children
    );
  }
);

Title.displayName = 'Typography.Title';

// Text Component
export interface TypographyTextProps extends HTMLAttributes<HTMLSpanElement> {
  /** Text size */
  size?: TypographySize;
  /** Text color */
  color?: TypographyColor;
  /** Whether text is bold */
  bold?: boolean;
  /** Whether text is disabled */
  disabled?: boolean;
  /** Whether to style as inline code */
  code?: boolean;
  /** Whether to remove margins */
  withoutMargins?: boolean;
  /** Whether to truncate text with ellipsis */
  ellipsis?: boolean;
}

const Text = forwardRef<HTMLSpanElement, TypographyTextProps>(
  ({ size = 'md', color = 'primary', bold, disabled, code, withoutMargins, ellipsis, className, children, ...props }, ref) => {
    const Component = code ? 'code' : 'span';
    
    return (
      <Component
        ref={ref}
        className={clsx(
          'db-typography-text',
          `db-typography-text--${size}`,
          `db-typography--${color}`,
          {
            'db-typography-text--bold': bold,
            'db-typography-text--disabled': disabled,
            'db-typography-text--code': code,
            'db-typography--without-margins': withoutMargins,
            'db-typography--ellipsis': ellipsis,
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

Text.displayName = 'Typography.Text';

// Paragraph Component
export interface TypographyParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  /** Text color */
  color?: TypographyColor;
  /** Whether text is disabled */
  disabled?: boolean;
  /** Whether to remove margins */
  withoutMargins?: boolean;
  /** Whether to truncate text with ellipsis */
  ellipsis?: boolean;
}

const Paragraph = forwardRef<HTMLParagraphElement, TypographyParagraphProps>(
  ({ color = 'primary', disabled, withoutMargins, ellipsis, className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={clsx(
          'db-typography-paragraph',
          `db-typography--${color}`,
          {
            'db-typography-paragraph--disabled': disabled,
            'db-typography--without-margins': withoutMargins,
            'db-typography--ellipsis': ellipsis,
          },
          className
        )}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = 'Typography.Paragraph';

// Hint Component (for secondary/helper text)
export interface TypographyHintProps extends HTMLAttributes<HTMLSpanElement> {
  /** Whether to remove margins */
  withoutMargins?: boolean;
  /** Whether text is bold */
  bold?: boolean;
  /** Whether to truncate text with ellipsis */
  ellipsis?: boolean;
}

const Hint = forwardRef<HTMLSpanElement, TypographyHintProps>(
  ({ withoutMargins, bold, ellipsis, className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={clsx(
          'db-typography-hint',
          {
            'db-typography-hint--bold': bold,
            'db-typography--without-margins': withoutMargins,
            'db-typography--ellipsis': ellipsis,
          },
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Hint.displayName = 'Typography.Hint';

// Link Component
export interface TypographyLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Whether to open link in new tab */
  openInNewTab?: boolean;
  /** Whether link is disabled */
  disabled?: boolean;
  /** Whether to truncate text with ellipsis */
  ellipsis?: boolean;
}

const Link = forwardRef<HTMLAnchorElement, TypographyLinkProps>(
  ({ openInNewTab, disabled, ellipsis, className, children, ...props }, ref) => {
    const newTabProps = openInNewTab
      ? {
          target: '_blank' as const,
          rel: 'noopener noreferrer' as const,
        }
      : {};

    return (
      <a
        ref={ref}
        className={clsx(
          'db-typography-link',
          {
            'db-typography-link--disabled': disabled,
            'db-typography--ellipsis': ellipsis,
          },
          className
        )}
        aria-disabled={disabled}
        {...props}
        {...newTabProps}
      >
        {children}
        {openInNewTab && (
          <span className="db-typography-link__icon" aria-label="(opens in new tab)">
            ↗
          </span>
        )}
      </a>
    );
  }
);

Link.displayName = 'Typography.Link';

// Compound Component Export
export const Typography = Object.assign(TypographyRoot, {
  Title,
  Text,
  Paragraph,
  Hint,
  Link,
});

export type { TypographyRootProps as TypographyProps };