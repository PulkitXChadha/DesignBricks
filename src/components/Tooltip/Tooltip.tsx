import React, { ReactNode, useState, useRef, useEffect, forwardRef } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import './Tooltip.css';

export interface TooltipProps {
  /** Content to display in the tooltip */
  content: ReactNode;
  /** Element that triggers the tooltip */
  children: ReactNode;
  /** Tooltip placement */
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
  /** How the tooltip is triggered */
  trigger?: 'hover' | 'click' | 'focus' | 'manual';
  /** Whether tooltip is visible (for manual trigger) */
  open?: boolean;
  /** Delay before showing tooltip (ms) */
  showDelay?: number;
  /** Delay before hiding tooltip (ms) */
  hideDelay?: number;
  /** Disable the tooltip */
  disabled?: boolean;
  /** Custom className for tooltip content */
  className?: string;
  /** Callback when tooltip visibility changes */
  onOpenChange?: (_open: boolean) => void;
  /** Max width of tooltip */
  maxWidth?: number | string;
  /** Custom z-index */
  zIndex?: number;
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      content,
      children,
      placement = 'top',
      trigger = 'hover',
      open: controlledOpen,
      showDelay = 500,
      hideDelay = 0,
      disabled = false,
      className,
      onOpenChange,
      maxWidth = 250,
      zIndex = 1700,
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const triggerRef = useRef<HTMLDivElement | null>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const showTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
    const hideTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
    
    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
    const isManual = trigger === 'manual';

    const updatePosition = () => {
      if (!triggerRef.current || !tooltipRef.current || !isOpen) return;

      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const viewport = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      let top = 0;
      let left = 0;
      const gap = 8;

      switch (placement) {
        case 'top':
          top = triggerRect.top - tooltipRect.height - gap;
          left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
          break;
        case 'top-start':
          top = triggerRect.top - tooltipRect.height - gap;
          left = triggerRect.left;
          break;
        case 'top-end':
          top = triggerRect.top - tooltipRect.height - gap;
          left = triggerRect.right - tooltipRect.width;
          break;
        case 'bottom':
          top = triggerRect.bottom + gap;
          left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
          break;
        case 'bottom-start':
          top = triggerRect.bottom + gap;
          left = triggerRect.left;
          break;
        case 'bottom-end':
          top = triggerRect.bottom + gap;
          left = triggerRect.right - tooltipRect.width;
          break;
        case 'left':
          top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
          left = triggerRect.left - tooltipRect.width - gap;
          break;
        case 'right':
          top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
          left = triggerRect.right + gap;
          break;
      }

      // Keep tooltip within viewport bounds
      left = Math.max(gap, Math.min(left, viewport.width - tooltipRect.width - gap));
      top = Math.max(gap, Math.min(top, viewport.height - tooltipRect.height - gap));

      setPosition({ top, left });
    };

    const show = () => {
      if (disabled || isManual) return;
      
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = undefined;
      }

      showTimeoutRef.current = setTimeout(() => {
        const newOpen = true;
        if (controlledOpen === undefined) {
          setInternalOpen(newOpen);
        }
        onOpenChange?.(newOpen);
      }, showDelay);
    };

    const hide = () => {
      if (disabled || isManual) return;

      if (showTimeoutRef.current) {
        clearTimeout(showTimeoutRef.current);
        showTimeoutRef.current = undefined;
      }

      hideTimeoutRef.current = setTimeout(() => {
        const newOpen = false;
        if (controlledOpen === undefined) {
          setInternalOpen(newOpen);
        }
        onOpenChange?.(newOpen);
      }, hideDelay);
    };

    const handleClick = () => {
      if (trigger !== 'click' || disabled) return;
      
      const newOpen = !isOpen;
      if (controlledOpen === undefined) {
        setInternalOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    };

    useEffect(() => {
      if (isOpen) {
        updatePosition();
        
        const handleResize = () => updatePosition();
        const handleScroll = () => updatePosition();
        
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
        
        return () => {
          window.removeEventListener('resize', handleResize);
          window.removeEventListener('scroll', handleScroll);
        };
      }
      return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen, placement]);

    useEffect(() => {
      return () => {
        if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      };
    }, []);

    // Combine external ref with internal trigger ref
    const combinedRef = (node: HTMLDivElement | null) => {
      triggerRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
    };

    const triggerProps = {
      ...(trigger === 'hover' && {
        onMouseEnter: show,
        onMouseLeave: hide,
      }),
      ...(trigger === 'focus' && {
        onFocus: show,
        onBlur: hide,
      }),
      ...(trigger === 'click' && {
        onClick: handleClick,
      }),
    };

    const tooltipContent = isOpen && !disabled ? (
      createPortal(
        <div
          ref={tooltipRef}
          className={clsx(
            'db-tooltip',
            `db-tooltip--${placement}`,
            className
          )}
          style={{
            position: 'fixed',
            top: position.top,
            left: position.left,
            maxWidth,
            zIndex,
          }}
          role="tooltip"
          aria-hidden={!isOpen}
        >
          <div className="db-tooltip__content">
            {content}
          </div>
          <div className="db-tooltip__arrow" />
        </div>,
        document.body
      )
    ) : null;

    return (
      <>
        <div
          ref={combinedRef}
          className="db-tooltip__trigger"
          {...triggerProps}
        >
          {children}
        </div>
        {tooltipContent}
      </>
    );
  }
);

Tooltip.displayName = 'Tooltip';
