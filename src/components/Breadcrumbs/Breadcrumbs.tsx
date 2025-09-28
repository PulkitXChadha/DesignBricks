import React, { ReactNode, HTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import './Breadcrumbs.css';

export interface BreadcrumbItem {
  /** Unique identifier for the item */
  id: string;
  /** Display text for the breadcrumb */
  label: ReactNode;
  /** Optional icon */
  icon?: ReactNode;
  /** URL for navigation (makes item clickable) */
  href?: string;
  /** Click handler (alternative to href) */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  /** Whether this item is disabled */
  disabled?: boolean;
}

export interface BreadcrumbsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /** Array of breadcrumb items */
  items: BreadcrumbItem[];
  /** Custom separator between items */
  separator?: ReactNode;
  /** Size of the breadcrumbs */
  size?: 'small' | 'medium' | 'large';
  /** Maximum number of items to display before collapsing */
  maxItems?: number;
  /** How to handle overflow when maxItems is exceeded */
  itemsBeforeCollapse?: number;
  /** How many items to show after collapse */
  itemsAfterCollapse?: number;
}

const ChevronRightIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.03033 4.96967C5.73744 4.67678 5.26256 4.67678 4.96967 4.96967C4.67678 5.26256 4.67678 5.73744 4.96967 6.03033L7.43934 8.5L4.96967 10.9697C4.67678 11.2626 4.67678 11.7374 4.96967 12.0303C5.26256 12.3232 5.73744 12.3232 6.03033 12.0303L9.03033 9.03033C9.32322 8.73744 9.32322 8.26256 9.03033 7.96967L6.03033 4.96967Z"
      fill="currentColor"
    />
  </svg>
);

export const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>(
  (
    {
      items,
      separator = <ChevronRightIcon />,
      size = 'medium',
      maxItems,
      itemsBeforeCollapse = 1,
      itemsAfterCollapse = 1,
      className,
      ...props
    },
    ref
  ) => {
    const shouldCollapse = maxItems && items.length > maxItems;
    
    let displayItems = items;
    let hasEllipsis = false;

    if (shouldCollapse) {
      const startItems = items.slice(0, itemsBeforeCollapse);
      const endItems = items.slice(-itemsAfterCollapse);
      displayItems = [...startItems, ...endItems];
      hasEllipsis = true;
    }

    const renderItem = (item: BreadcrumbItem, index: number, isLast: boolean) => {
      const content = (
        <>
          {item.icon && (
            <span className="db-breadcrumbs__icon">{item.icon}</span>
          )}
          <span className="db-breadcrumbs__text">{item.label}</span>
        </>
      );

      const itemClasses = clsx(
        'db-breadcrumbs__item',
        {
          'db-breadcrumbs__item--current': isLast,
          'db-breadcrumbs__item--disabled': item.disabled,
          'db-breadcrumbs__item--clickable': (item.href || item.onClick) && !item.disabled,
        }
      );

      if (isLast || item.disabled) {
        return (
          <span key={item.id} className={itemClasses}>
            {content}
          </span>
        );
      }

      if (item.href) {
        return (
          <a
            key={item.id}
            href={item.href}
            className={itemClasses}
            onClick={item.onClick}
          >
            {content}
          </a>
        );
      }

      if (item.onClick) {
        return (
          <button
            key={item.id}
            type="button"
            className={itemClasses}
            onClick={item.onClick}
          >
            {content}
          </button>
        );
      }

      return (
        <span key={item.id} className={itemClasses}>
          {content}
        </span>
      );
    };

    const renderEllipsis = () => (
      <span className="db-breadcrumbs__ellipsis" key="ellipsis">
        <span className="db-breadcrumbs__text">…</span>
      </span>
    );

    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={clsx(
          'db-breadcrumbs',
          `db-breadcrumbs--${size}`,
          className
        )}
        {...props}
      >
        <ol className="db-breadcrumbs__list">
          {shouldCollapse ? (
            <>
              {items.slice(0, itemsBeforeCollapse).map((item, index) => (
                <li key={item.id} className="db-breadcrumbs__list-item">
                  {renderItem(item, index, false)}
                  <span className="db-breadcrumbs__separator" aria-hidden="true">
                    {separator}
                  </span>
                </li>
              ))}
              {hasEllipsis && (
                <li className="db-breadcrumbs__list-item">
                  {renderEllipsis()}
                  <span className="db-breadcrumbs__separator" aria-hidden="true">
                    {separator}
                  </span>
                </li>
              )}
              {items.slice(-itemsAfterCollapse).map((item, index, array) => (
                <li key={item.id} className="db-breadcrumbs__list-item">
                  {renderItem(item, index, index === array.length - 1)}
                  {index !== array.length - 1 && (
                    <span className="db-breadcrumbs__separator" aria-hidden="true">
                      {separator}
                    </span>
                  )}
                </li>
              ))}
            </>
          ) : (
            displayItems.map((item, index, array) => (
              <li key={item.id} className="db-breadcrumbs__list-item">
                {renderItem(item, index, index === array.length - 1)}
                {index !== array.length - 1 && (
                  <span className="db-breadcrumbs__separator" aria-hidden="true">
                    {separator}
                  </span>
                )}
              </li>
            ))
          )}
        </ol>
      </nav>
    );
  }
);

Breadcrumbs.displayName = 'Breadcrumbs';
