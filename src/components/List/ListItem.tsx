import React, { ReactNode, forwardRef, HTMLAttributes, ElementType } from 'react';
import clsx from 'clsx';

export interface ListItemProps extends Omit<HTMLAttributes<HTMLLIElement>, 'onClick'> {
  /** Content of the list item */
  children?: ReactNode;
  /** Leading icon or element */
  startContent?: ReactNode;
  /** Trailing icon or element */
  endContent?: ReactNode;
  /** Primary text */
  primary?: ReactNode;
  /** Secondary text */
  secondary?: ReactNode;
  /** Tertiary text (usually metadata like date, type, etc.) */
  tertiary?: ReactNode;
  /** Whether the item is clickable */
  clickable?: boolean;
  /** Whether the item is selected */
  selected?: boolean;
  /** Whether the item is disabled */
  disabled?: boolean;
  /** Click handler */
  onClick?: (_event: React.MouseEvent<HTMLElement>) => void;
  /** Element to render as (default: li, but can be 'a' for links) */
  as?: ElementType;
  /** Href when rendered as link */
  href?: string;
  /** Target when rendered as link */
  target?: string;
  /** Custom className for the content wrapper */
  contentClassName?: string;
}

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  (
    {
      children,
      startContent,
      endContent,
      primary,
      secondary,
      tertiary,
      clickable = false,
      selected = false,
      disabled = false,
      onClick,
      as: Component = 'li',
      href,
      target,
      contentClassName,
      className,
      ...props
    },
    ref
  ) => {
    const isInteractive = clickable || onClick || href;
    const isLink = Component === 'a' || href;

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      if (disabled) {
        event.preventDefault();
        return;
      }
      onClick?.(event);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
      if (disabled) return;
      
      if (isInteractive && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        handleClick(event as any);
      }
    };

    const componentProps = {
      ref,
      className: clsx(
        'db-list-item',
        {
          'db-list-item--interactive': isInteractive,
          'db-list-item--selected': selected,
          'db-list-item--disabled': disabled,
        },
        className
      ),
      onClick: isInteractive ? handleClick : undefined,
      onKeyDown: isInteractive ? handleKeyDown : undefined,
      tabIndex: isInteractive && !disabled ? 0 : undefined,
      role: isInteractive && !isLink ? 'button' : undefined,
      'aria-disabled': disabled ? true : undefined,
      ...(isLink && { href, target }),
      ...props,
    };

    const content = children || (
      <div className={clsx('db-list-item__content', contentClassName)}>
        {startContent && (
          <div className="db-list-item__start-content">
            {startContent}
          </div>
        )}
        
        <div className="db-list-item__text-content">
          {primary && (
            <div className="db-list-item__primary">{primary}</div>
          )}
          {secondary && (
            <div className="db-list-item__secondary">{secondary}</div>
          )}
          {tertiary && (
            <div className="db-list-item__tertiary">{tertiary}</div>
          )}
        </div>
        
        {endContent && (
          <div className="db-list-item__end-content">
            {endContent}
          </div>
        )}
      </div>
    );

    return <Component {...componentProps}>{content}</Component>;
  }
);

ListItem.displayName = 'ListItem';
