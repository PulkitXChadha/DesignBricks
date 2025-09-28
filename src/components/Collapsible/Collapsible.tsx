import React, { ReactNode, useState, useRef, useEffect, forwardRef, HTMLAttributes } from 'react';
import clsx from 'clsx';
import './Collapsible.css';

export interface CollapsibleProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Trigger element (usually title/header) */
  trigger: ReactNode;
  /** Content to show/hide */
  children: ReactNode;
  /** Whether initially open */
  defaultOpen?: boolean;
  /** Controlled open state */
  open?: boolean;
  /** Open state change handler */
  onOpenChange?: (open: boolean) => void;
  /** Whether disabled */
  disabled?: boolean;
  /** Custom chevron icon */
  chevronIcon?: ReactNode;
  /** Whether to show chevron icon */
  showChevron?: boolean;
  /** Size variant */
  size?: 'small' | 'medium' | 'large';
  /** Trigger styling variant */
  variant?: 'default' | 'ghost' | 'bordered';
  /** Animation duration in ms */
  animationDuration?: number;
}

const ChevronIcon = () => (
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
      d="M8.917 8 6 5.053 7.042 4 11 8l-3.958 4L6 10.947z"
      fill="currentColor"
    />
  </svg>
);

export const Collapsible = forwardRef<HTMLDivElement, CollapsibleProps>(
  (
    {
      trigger,
      children,
      defaultOpen = false,
      open: controlledOpen,
      onOpenChange,
      disabled = false,
      chevronIcon = <ChevronIcon />,
      showChevron = true,
      size = 'medium',
      variant = 'default',
      animationDuration = 200,
      className,
      ...props
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const [isAnimating, setIsAnimating] = useState(false);
    const [height, setHeight] = useState<number | 'auto'>('auto');
    
    const contentRef = useRef<HTMLDivElement>(null);
    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
    
    const toggle = () => {
      if (disabled) return;
      
      const newOpen = !isOpen;
      
      if (controlledOpen === undefined) {
        setInternalOpen(newOpen);
      }
      
      onOpenChange?.(newOpen);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggle();
      }
    };

    useEffect(() => {
      if (!contentRef.current) return;
      
      const content = contentRef.current;
      const actualHeight = content.scrollHeight;
      
      if (isOpen) {
        // Opening animation
        setIsAnimating(true);
        setHeight(0);
        
        // Force reflow
        content.offsetHeight;
        
        setHeight(actualHeight);
        
        const timer = setTimeout(() => {
          setHeight('auto');
          setIsAnimating(false);
        }, animationDuration);
        
        return () => clearTimeout(timer);
      } else {
        // Closing animation
        setIsAnimating(true);
        setHeight(actualHeight);
        
        // Force reflow
        content.offsetHeight;
        
        setHeight(0);
        
        const timer = setTimeout(() => {
          setIsAnimating(false);
        }, animationDuration);
        
        return () => clearTimeout(timer);
      }
    }, [isOpen, animationDuration]);

    return (
      <div
        ref={ref}
        className={clsx(
          'db-collapsible',
          `db-collapsible--${size}`,
          `db-collapsible--${variant}`,
          {
            'db-collapsible--open': isOpen,
            'db-collapsible--disabled': disabled,
            'db-collapsible--animating': isAnimating,
          },
          className
        )}
        {...props}
      >
        <button
          type="button"
          className="db-collapsible__trigger"
          onClick={toggle}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          aria-expanded={isOpen}
          aria-controls={`collapsible-content-${Math.random().toString(36).substr(2, 9)}`}
        >
          <div className="db-collapsible__trigger-content">
            {trigger}
          </div>
          {showChevron && (
            <div
              className={clsx('db-collapsible__chevron', {
                'db-collapsible__chevron--rotated': isOpen,
              })}
            >
              {chevronIcon}
            </div>
          )}
        </button>
        
        <div
          ref={contentRef}
          className={clsx('db-collapsible__content', {
            'db-collapsible__content--open': isOpen,
          })}
          style={{
            height: isAnimating || !isOpen ? height : 'auto',
            overflow: isAnimating ? 'hidden' : 'visible',
            transition: isAnimating 
              ? `height ${animationDuration}ms cubic-bezier(0.4, 0, 0.2, 1)` 
              : 'none',
          }}
          aria-hidden={!isOpen}
        >
          <div className="db-collapsible__content-inner">
            {children}
          </div>
        </div>
      </div>
    );
  }
);

Collapsible.displayName = 'Collapsible';
