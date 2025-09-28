import React, { forwardRef, useState, useRef, useEffect, useCallback, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import './Popover.css';

export interface PopoverProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
  /** Content to display inside the popover */
  content: React.ReactNode;
  /** Element that triggers the popover */
  trigger: React.ReactNode;
  /** Whether the popover is open (controlled) */
  open?: boolean;
  /** Default open state (uncontrolled) */
  defaultOpen?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** How the popover is triggered */
  triggerType?: 'click' | 'hover' | 'focus' | 'manual';
  /** Placement of the popover relative to trigger */
  placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 
            'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';
  /** Offset from the trigger element */
  offset?: number;
  /** Whether to show arrow pointing to trigger */
  arrow?: boolean;
  /** Whether clicking outside closes the popover */
  closeOnClickOutside?: boolean;
  /** Whether pressing escape closes the popover */
  closeOnEscape?: boolean;
  /** Whether to close when content is clicked */
  closeOnContentClick?: boolean;
  /** Delay before showing on hover (ms) */
  showDelay?: number;
  /** Delay before hiding on hover (ms) */
  hideDelay?: number;
  /** Whether popover should be modal (trap focus) */
  modal?: boolean;
  /** Portal container for rendering popover */
  portal?: boolean;
  /** Custom portal container element */
  portalContainer?: HTMLElement;
}

type Position = {
  top: number;
  left: number;
  transform: string;
};

const getPosition = (placement: string, triggerRect: DOMRect, popoverRect: DOMRect, offset: number): Position => {
  const positions: Record<string, Position> = {
    'top': {
      top: triggerRect.top - popoverRect.height - offset,
      left: triggerRect.left + (triggerRect.width - popoverRect.width) / 2,
      transform: 'none',
    },
    'top-start': {
      top: triggerRect.top - popoverRect.height - offset,
      left: triggerRect.left,
      transform: 'none',
    },
    'top-end': {
      top: triggerRect.top - popoverRect.height - offset,
      left: triggerRect.right - popoverRect.width,
      transform: 'none',
    },
    'bottom': {
      top: triggerRect.bottom + offset,
      left: triggerRect.left + (triggerRect.width - popoverRect.width) / 2,
      transform: 'none',
    },
    'bottom-start': {
      top: triggerRect.bottom + offset,
      left: triggerRect.left,
      transform: 'none',
    },
    'bottom-end': {
      top: triggerRect.bottom + offset,
      left: triggerRect.right - popoverRect.width,
      transform: 'none',
    },
    'left': {
      top: triggerRect.top + (triggerRect.height - popoverRect.height) / 2,
      left: triggerRect.left - popoverRect.width - offset,
      transform: 'none',
    },
    'left-start': {
      top: triggerRect.top,
      left: triggerRect.left - popoverRect.width - offset,
      transform: 'none',
    },
    'left-end': {
      top: triggerRect.bottom - popoverRect.height,
      left: triggerRect.left - popoverRect.width - offset,
      transform: 'none',
    },
    'right': {
      top: triggerRect.top + (triggerRect.height - popoverRect.height) / 2,
      left: triggerRect.right + offset,
      transform: 'none',
    },
    'right-start': {
      top: triggerRect.top,
      left: triggerRect.right + offset,
      transform: 'none',
    },
    'right-end': {
      top: triggerRect.bottom - popoverRect.height,
      left: triggerRect.right + offset,
      transform: 'none',
    },
  };

  return positions[placement] || positions['bottom'];
};

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  ({
    content,
    trigger,
    open: controlledOpen,
    defaultOpen = false,
    onOpenChange,
    triggerType = 'click',
    placement = 'bottom',
    offset = 8,
    arrow = true,
    closeOnClickOutside = true,
    closeOnEscape = true,
    closeOnContentClick = false,
    showDelay = 0,
    hideDelay = 0,
    modal = false,
    portal = true,
    portalContainer,
    className,
    ...props
  }, ref) => {
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const [position, setPosition] = useState<Position>({ top: 0, left: 0, transform: 'none' });
    const [arrowPosition, setArrowPosition] = useState<{ top?: number; left?: number; transform?: string }>({});
    
    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
    
    const triggerRef = useRef<HTMLDivElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);
    const showTimeoutRef = useRef<NodeJS.Timeout>();
    const hideTimeoutRef = useRef<NodeJS.Timeout>();
    const previousFocusRef = useRef<HTMLElement>();
    
    const setOpen = useCallback((open: boolean) => {
      if (controlledOpen === undefined) {
        setInternalOpen(open);
      }
      onOpenChange?.(open);
    }, [controlledOpen, onOpenChange]);
    
    const show = useCallback(() => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
      
      if (showDelay > 0) {
        showTimeoutRef.current = setTimeout(() => setOpen(true), showDelay);
      } else {
        setOpen(true);
      }
    }, [setOpen, showDelay]);
    
    const hide = useCallback(() => {
      if (showTimeoutRef.current) {
        clearTimeout(showTimeoutRef.current);
      }
      
      if (hideDelay > 0) {
        hideTimeoutRef.current = setTimeout(() => setOpen(false), hideDelay);
      } else {
        setOpen(false);
      }
    }, [setOpen, hideDelay]);
    
    const toggle = useCallback(() => {
      if (isOpen) {
        hide();
      } else {
        show();
      }
    }, [isOpen, show, hide]);
    
    // Calculate position when open
    useEffect(() => {
      if (!isOpen || !triggerRef.current || !popoverRef.current) return;
      
      const updatePosition = () => {
        const triggerRect = triggerRef.current!.getBoundingClientRect();
        const popoverRect = popoverRef.current!.getBoundingClientRect();
        
        let pos = getPosition(placement, triggerRect, popoverRect, offset);
        
        // Adjust for viewport bounds
        const viewport = { width: window.innerWidth, height: window.innerHeight };
        
        if (pos.left < 0) pos.left = 8;
        if (pos.left + popoverRect.width > viewport.width) {
          pos.left = viewport.width - popoverRect.width - 8;
        }
        if (pos.top < 0) pos.top = 8;
        if (pos.top + popoverRect.height > viewport.height) {
          pos.top = viewport.height - popoverRect.height - 8;
        }
        
        setPosition(pos);
        
        // Calculate arrow position if needed
        if (arrow) {
          const arrowSize = 8;
          const triggerCenter = {
            x: triggerRect.left + triggerRect.width / 2,
            y: triggerRect.top + triggerRect.height / 2,
          };
          
          if (placement.startsWith('top') || placement.startsWith('bottom')) {
            const arrowLeft = Math.max(
              arrowSize,
              Math.min(
                popoverRect.width - arrowSize,
                triggerCenter.x - pos.left
              )
            );
            setArrowPosition({ left: arrowLeft });
          } else {
            const arrowTop = Math.max(
              arrowSize,
              Math.min(
                popoverRect.height - arrowSize,
                triggerCenter.y - pos.top
              )
            );
            setArrowPosition({ top: arrowTop });
          }
        }
      };
      
      updatePosition();
      
      const resizeObserver = new ResizeObserver(updatePosition);
      resizeObserver.observe(popoverRef.current);
      window.addEventListener('scroll', updatePosition, true);
      window.addEventListener('resize', updatePosition);
      
      return () => {
        resizeObserver.disconnect();
        window.removeEventListener('scroll', updatePosition, true);
        window.removeEventListener('resize', updatePosition);
      };
    }, [isOpen, placement, offset, arrow]);
    
    // Handle click outside
    useEffect(() => {
      if (!isOpen || !closeOnClickOutside) return;
      
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;
        if (
          triggerRef.current && !triggerRef.current.contains(target) &&
          popoverRef.current && !popoverRef.current.contains(target)
        ) {
          hide();
        }
      };
      
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, closeOnClickOutside, hide]);
    
    // Handle escape key
    useEffect(() => {
      if (!isOpen || !closeOnEscape) return;
      
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          hide();
        }
      };
      
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, closeOnEscape, hide]);
    
    // Handle focus management for modal
    useEffect(() => {
      if (!isOpen || !modal) return;
      
      previousFocusRef.current = document.activeElement as HTMLElement;
      
      // Focus first focusable element in popover
      const focusableElements = popoverRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements && focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
      
      return () => {
        if (previousFocusRef.current) {
          previousFocusRef.current.focus();
        }
      };
    }, [isOpen, modal]);
    
    // Forward ref to trigger element
    useImperativeHandle(ref, () => triggerRef.current!, []);
    
    // Trigger event handlers
    const triggerProps = {
      ...(triggerType === 'click' && {
        onClick: toggle,
      }),
      ...(triggerType === 'hover' && {
        onMouseEnter: show,
        onMouseLeave: hide,
      }),
      ...(triggerType === 'focus' && {
        onFocus: show,
        onBlur: hide,
      }),
    };
    
    const popoverContent = (
      <div
        ref={popoverRef}
        className={clsx(
          'db-popover',
          `db-popover--${placement}`,
          {
            'db-popover--with-arrow': arrow,
            'db-popover--modal': modal,
          },
          className
        )}
        style={{
          position: 'fixed',
          top: position.top,
          left: position.left,
          transform: position.transform,
          zIndex: modal ? 1050 : 1000,
        }}
        onClick={closeOnContentClick ? hide : undefined}
        {...props}
      >
        {arrow && (
          <div
            className="db-popover__arrow"
            style={arrowPosition}
          />
        )}
        <div className="db-popover__content">
          {content}
        </div>
      </div>
    );
    
    const renderPopover = () => {
      if (!portal) return popoverContent;
      
      const container = portalContainer || document.body;
      return ReactDOM.createPortal(popoverContent, container);
    };
    
    return (
      <div
        ref={triggerRef}
        className="db-popover-trigger"
        {...triggerProps}
      >
        {trigger}
        {isOpen && renderPopover()}
      </div>
    );
  }
);

Popover.displayName = 'Popover';

