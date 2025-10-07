import React, { 
  ReactNode, 
  useState, 
  useRef, 
  useEffect,
  useCallback, 
  forwardRef,
  HTMLAttributes,
  KeyboardEvent,
  MouseEvent 
} from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import './Dropdown.css';

export interface DropdownItem {
  /** Unique identifier */
  id: string;
  /** Display label */
  label: ReactNode;
  /** Optional icon */
  icon?: ReactNode;
  /** Optional description */
  description?: ReactNode;
  /** Whether item is disabled */
  disabled?: boolean;
  /** Whether to show a divider after this item */
  divider?: boolean;
  /** Click handler */
  onClick?: (_item: DropdownItem) => void;
  /** Item variant */
  variant?: 'default' | 'danger' | 'success';
}

export interface DropdownProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect' | 'content'> {
  /** Trigger element */
  children: ReactNode;
  /** Array of dropdown items */
  items?: DropdownItem[];
  /** Custom dropdown content */
  content?: ReactNode;
  /** Whether dropdown is open (controlled) */
  open?: boolean;
  /** Open state change handler */
  onOpenChange?: (_open: boolean) => void;
  /** Item selection handler */
  onSelect?: (_item: DropdownItem) => void;
  /** Dropdown placement */
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end' | 'left' | 'right';
  /** Dropdown trigger */
  trigger?: 'click' | 'hover' | 'manual';
  /** Whether to close on item selection */
  closeOnSelect?: boolean;
  /** Custom dropdown width */
  width?: number | string;
  /** Max height before scrolling */
  maxHeight?: number | string;
  /** Disable dropdown */
  disabled?: boolean;
  /** Offset from trigger */
  offset?: number;
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      children,
      items = [],
      content,
      open: controlledOpen,
      onOpenChange,
      onSelect,
      placement = 'bottom-start',
      trigger = 'click',
      closeOnSelect = true,
      width = 'auto',
      maxHeight = 300,
      disabled = false,
      offset = 4,
      className,
      ...props
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [focusedIndex, setFocusedIndex] = useState(-1);
    
    const triggerRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLElement | null)[]>([]);
    
    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
    const isManual = trigger === 'manual';

    const updatePosition = useCallback(() => {
      if (!triggerRef.current || !dropdownRef.current || !isOpen) return;

      const triggerRect = triggerRef.current.getBoundingClientRect();
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const viewport = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      let top = 0;
      let left = 0;

      switch (placement) {
        case 'bottom-start':
          top = triggerRect.bottom + offset;
          left = triggerRect.left;
          break;
        case 'bottom-end':
          top = triggerRect.bottom + offset;
          left = triggerRect.right - dropdownRect.width;
          break;
        case 'top-start':
          top = triggerRect.top - dropdownRect.height - offset;
          left = triggerRect.left;
          break;
        case 'top-end':
          top = triggerRect.top - dropdownRect.height - offset;
          left = triggerRect.right - dropdownRect.width;
          break;
        case 'left':
          top = triggerRect.top + (triggerRect.height - dropdownRect.height) / 2;
          left = triggerRect.left - dropdownRect.width - offset;
          break;
        case 'right':
          top = triggerRect.top + (triggerRect.height - dropdownRect.height) / 2;
          left = triggerRect.right + offset;
          break;
      }

      // Keep dropdown within viewport
      left = Math.max(8, Math.min(left, viewport.width - dropdownRect.width - 8));
      top = Math.max(8, Math.min(top, viewport.height - dropdownRect.height - 8));

      setPosition({ top, left });
    }, [isOpen, placement, offset]);

    const openDropdown = useCallback(() => {
      if (disabled || isManual) return;
      
      const newOpen = true;
      if (controlledOpen === undefined) {
        setInternalOpen(newOpen);
      }
      onOpenChange?.(newOpen);
      setFocusedIndex(-1);
    }, [disabled, isManual, controlledOpen, onOpenChange]);

    const closeDropdown = useCallback(() => {
      if (disabled || isManual) return;
      
      const newOpen = false;
      if (controlledOpen === undefined) {
        setInternalOpen(newOpen);
      }
      onOpenChange?.(newOpen);
      setFocusedIndex(-1);
    }, [disabled, isManual, controlledOpen, onOpenChange]);

    const toggleDropdown = () => {
      if (isOpen) {
        closeDropdown();
      } else {
        openDropdown();
      }
    };

    const handleItemClick = (item: DropdownItem, event: MouseEvent) => {
      if (item.disabled) return;
      
      event.preventDefault();
      event.stopPropagation();
      
      item.onClick?.(item);
      onSelect?.(item);
      
      if (closeOnSelect) {
        closeDropdown();
      }
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      if (!isOpen) {
        if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
          event.preventDefault();
          openDropdown();
        }
        return;
      }

      const selectableItems = items.filter(item => !item.disabled);
      
      switch (event.key) {
        case 'Escape':
          event.preventDefault();
          closeDropdown();
          triggerRef.current?.focus();
          break;
        case 'ArrowDown':
          event.preventDefault();
          setFocusedIndex(prev => {
            const newIndex = prev < selectableItems.length - 1 ? prev + 1 : 0;
            itemRefs.current[newIndex]?.focus();
            return newIndex;
          });
          break;
        case 'ArrowUp':
          event.preventDefault();
          setFocusedIndex(prev => {
            const newIndex = prev > 0 ? prev - 1 : selectableItems.length - 1;
            itemRefs.current[newIndex]?.focus();
            return newIndex;
          });
          break;
        case 'Enter':
          event.preventDefault();
          if (focusedIndex >= 0 && selectableItems[focusedIndex]) {
            const item = selectableItems[focusedIndex];
            item.onClick?.(item);
            onSelect?.(item);
            if (closeOnSelect) {
              closeDropdown();
            }
          }
          break;
      }
    };

    // Click outside handler
    useEffect(() => {
      if (!isOpen) return;

      const handleClickOutside = (event: Event) => {
        if (
          triggerRef.current?.contains(event.target as Node) ||
          dropdownRef.current?.contains(event.target as Node)
        ) {
          return;
        }
        closeDropdown();
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, closeDropdown]);

    // Position update
    useEffect(() => {
      if (isOpen) {
        updatePosition();
        
        const handleResize = () => updatePosition();
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleResize);
        
        return () => {
          window.removeEventListener('resize', handleResize);
          window.removeEventListener('scroll', handleResize);
        };
      }
      return undefined;
    }, [isOpen, placement, updatePosition]);

    const triggerProps = {
      ...(trigger === 'click' && {
        onClick: toggleDropdown,
      }),
      ...(trigger === 'hover' && {
        onMouseEnter: openDropdown,
        onMouseLeave: closeDropdown,
      }),
    };

    const dropdownContent = isOpen && !disabled ? (
      createPortal(
        <div
          ref={dropdownRef}
          className={clsx(
            'db-dropdown',
            `db-dropdown--${placement}`,
            className
          )}
          style={{
            position: 'fixed',
            top: position.top,
            left: position.left,
            width,
            maxHeight,
            zIndex: 1500,
          }}
          role="menu"
          tabIndex={-1}
          onKeyDown={handleKeyDown}
        >
          <div className="db-dropdown__content">
            {content ? (
              content
            ) : (
              <ul className="db-dropdown__list" role="none">
                {items.map((item, index) => (
                  <li key={item.id} role="none">
                    <button
                      ref={(el) => (itemRefs.current[index] = el)}
                      type="button"
                      role="menuitem"
                      className={clsx(
                        'db-dropdown__item',
                        `db-dropdown__item--${item.variant || 'default'}`,
                        {
                          'db-dropdown__item--disabled': item.disabled,
                          'db-dropdown__item--focused': index === focusedIndex,
                        }
                      )}
                      disabled={item.disabled}
                      onClick={(event) => handleItemClick(item, event)}
                      onFocus={() => setFocusedIndex(index)}
                    >
                      {item.icon && (
                        <span className="db-dropdown__item-icon">{item.icon}</span>
                      )}
                      <div className="db-dropdown__item-content">
                        <span className="db-dropdown__item-label">{item.label}</span>
                        {item.description && (
                          <span className="db-dropdown__item-description">
                            {item.description}
                          </span>
                        )}
                      </div>
                    </button>
                    {item.divider && <div className="db-dropdown__divider" />}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>,
        document.body
      )
    ) : null;

    return (
      <div
        ref={ref}
        className={clsx(
          'db-dropdown__trigger',
          {
            'db-dropdown__trigger--open': isOpen,
            'db-dropdown__trigger--disabled': disabled,
          }
        )}
        {...props}
      >
        <div
          ref={triggerRef}
          tabIndex={disabled ? -1 : 0}
          role="button"
          aria-haspopup="menu"
          aria-expanded={isOpen}
          aria-disabled={disabled}
          onKeyDown={handleKeyDown}
          {...triggerProps}
        >
          {children}
        </div>
        {dropdownContent}
      </div>
    );
  }
);

Dropdown.displayName = 'Dropdown';
