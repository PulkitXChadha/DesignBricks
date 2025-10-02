/**
 * Accessibility utilities for WCAG 2.1 AA compliance
 * Provides focus management, ARIA utilities, and keyboard navigation helpers
 */

import React from 'react';

/**
 * Focus trap for modals and dialogs
 * Keeps focus within a container for keyboard navigation
 */
export class FocusTrap {
  private container: HTMLElement;
  private previousActiveElement: HTMLElement | null = null;
  private focusableElements: HTMLElement[] = [];

  constructor(container: HTMLElement) {
    this.container = container;
  }

  /**
   * Activate the focus trap
   */
  activate(): void {
    this.previousActiveElement = document.activeElement as HTMLElement;
    this.updateFocusableElements();
    this.focusFirst();
    this.container.addEventListener('keydown', this.handleKeyDown);
  }

  /**
   * Deactivate the focus trap and restore previous focus
   */
  deactivate(): void {
    this.container.removeEventListener('keydown', this.handleKeyDown);
    if (this.previousActiveElement) {
      this.previousActiveElement.focus();
    }
  }

  /**
   * Update list of focusable elements
   */
  private updateFocusableElements(): void {
    const selector = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(',');

    this.focusableElements = Array.from(
      this.container.querySelectorAll<HTMLElement>(selector)
    ).filter((el) => {
      return el.offsetParent !== null; // Filter out hidden elements
    });
  }

  /**
   * Focus the first focusable element
   */
  private focusFirst(): void {
    if (this.focusableElements.length > 0) {
      this.focusableElements[0].focus();
    }
  }

  /**
   * Handle tab key navigation
   */
  private handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key !== 'Tab') return;

    const activeElement = document.activeElement as HTMLElement;
    const currentIndex = this.focusableElements.indexOf(activeElement);

    if (event.shiftKey) {
      // Shift + Tab: move to previous element
      if (currentIndex <= 0) {
        event.preventDefault();
        this.focusableElements[this.focusableElements.length - 1]?.focus();
      }
    } else {
      // Tab: move to next element
      if (currentIndex >= this.focusableElements.length - 1) {
        event.preventDefault();
        this.focusableElements[0]?.focus();
      }
    }
  };
}

/**
 * React hook for focus trap
 */
export function useFocusTrap(isActive: boolean) {
  const containerRef = React.useRef<HTMLElement>(null);
  const focusTrapRef = React.useRef<FocusTrap | null>(null);

  React.useEffect(() => {
    if (!containerRef.current) return;

    if (isActive && !focusTrapRef.current) {
      focusTrapRef.current = new FocusTrap(containerRef.current);
      focusTrapRef.current.activate();
    } else if (!isActive && focusTrapRef.current) {
      focusTrapRef.current.deactivate();
      focusTrapRef.current = null;
    }

    return () => {
      if (focusTrapRef.current) {
        focusTrapRef.current.deactivate();
        focusTrapRef.current = null;
      }
    };
  }, [isActive]);

  return containerRef;
}

/**
 * Focus management utilities
 */
export const FocusManager = {
  /**
   * Get all focusable elements within a container
   */
  getFocusableElements(container: HTMLElement): HTMLElement[] {
    const selector = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(',');

    return Array.from(container.querySelectorAll<HTMLElement>(selector)).filter(
      (el) => el.offsetParent !== null
    );
  },

  /**
   * Move focus to the next focusable element
   */
  focusNext(current: HTMLElement, container: HTMLElement = document.body): void {
    const elements = this.getFocusableElements(container);
    const currentIndex = elements.indexOf(current);
    const nextIndex = (currentIndex + 1) % elements.length;
    elements[nextIndex]?.focus();
  },

  /**
   * Move focus to the previous focusable element
   */
  focusPrevious(current: HTMLElement, container: HTMLElement = document.body): void {
    const elements = this.getFocusableElements(container);
    const currentIndex = elements.indexOf(current);
    const prevIndex = currentIndex - 1 < 0 ? elements.length - 1 : currentIndex - 1;
    elements[prevIndex]?.focus();
  },

  /**
   * Save current focus and return a function to restore it
   */
  saveFocus(): () => void {
    const activeElement = document.activeElement as HTMLElement;
    return () => {
      if (activeElement && typeof activeElement.focus === 'function') {
        activeElement.focus();
      }
    };
  },
};

/**
 * ARIA utilities for enhanced accessibility
 */
export const AriaUtils = {
  /**
   * Generate a unique ID for ARIA relationships
   */
  generateId(prefix: string = 'aria'): string {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
  },

  /**
   * Create ARIA label props
   */
  createAriaLabel(label: string): { 'aria-label': string } {
    return { 'aria-label': label };
  },

  /**
   * Create ARIA described-by props
   */
  createAriaDescribedBy(id: string): { 'aria-describedby': string } {
    return { 'aria-describedby': id };
  },

  /**
   * Create ARIA labelled-by props
   */
  createAriaLabelledBy(id: string): { 'aria-labelledby': string } {
    return { 'aria-labelledby': id };
  },

  /**
   * Create live region announcement
   */
  announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  },
};

/**
 * Keyboard navigation utilities
 */
export const KeyboardUtils = {
  /**
   * Check if key is an arrow key
   */
  isArrowKey(key: string): boolean {
    return ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key);
  },

  /**
   * Check if key is an action key (Enter or Space)
   */
  isActionKey(key: string): boolean {
    return key === 'Enter' || key === ' ';
  },

  /**
   * Handle roving tabindex navigation
   */
  handleRovingTabIndex(
    event: React.KeyboardEvent,
    items: HTMLElement[],
    currentIndex: number,
    orientation: 'horizontal' | 'vertical' = 'horizontal'
  ): number | null {
    const { key } = event;
    let newIndex: number | null = null;

    if (orientation === 'horizontal') {
      if (key === 'ArrowLeft') newIndex = currentIndex - 1;
      if (key === 'ArrowRight') newIndex = currentIndex + 1;
    } else {
      if (key === 'ArrowUp') newIndex = currentIndex - 1;
      if (key === 'ArrowDown') newIndex = currentIndex + 1;
    }

    if (key === 'Home') newIndex = 0;
    if (key === 'End') newIndex = items.length - 1;

    if (newIndex !== null) {
      event.preventDefault();
      // Wrap around
      if (newIndex < 0) newIndex = items.length - 1;
      if (newIndex >= items.length) newIndex = 0;

      // Update tabindex
      items.forEach((item, index) => {
        item.setAttribute('tabindex', index === newIndex ? '0' : '-1');
      });

      items[newIndex]?.focus();
      return newIndex;
    }

    return null;
  },
};

/**
 * React hook for keyboard navigation
 */
export function useKeyboardNavigation(
  items: React.RefObject<HTMLElement>[],
  orientation: 'horizontal' | 'vertical' = 'horizontal'
) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      const elements = items
        .map((ref) => ref.current)
        .filter((el): el is HTMLElement => el !== null);

      const newIndex = KeyboardUtils.handleRovingTabIndex(
        event,
        elements,
        currentIndex,
        orientation
      );

      if (newIndex !== null) {
        setCurrentIndex(newIndex);
      }
    },
    [items, currentIndex, orientation]
  );

  return { currentIndex, handleKeyDown, setCurrentIndex };
}

/**
 * React hook for accessible announcements
 */
export function useAnnouncement() {
  const announce = React.useCallback(
    (message: string, priority: 'polite' | 'assertive' = 'polite') => {
      AriaUtils.announce(message, priority);
    },
    []
  );

  return announce;
}

/**
 * Check if reduced motion is preferred
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * React hook for reduced motion preference
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = React.useState(prefersReducedMotion());

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => setPrefersReduced(mediaQuery.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  return prefersReduced;
}

/**
 * Check if high contrast mode is enabled
 */
export function isHighContrastMode(): boolean {
  if (typeof window === 'undefined') return false;
  return (
    window.matchMedia('(prefers-contrast: high)').matches ||
    window.matchMedia('(-ms-high-contrast: active)').matches
  );
}

/**
 * React hook for high contrast mode
 */
export function useHighContrastMode(): boolean {
  const [isHighContrast, setIsHighContrast] = React.useState(isHighContrastMode());

  React.useEffect(() => {
    const mediaQueries = [
      window.matchMedia('(prefers-contrast: high)'),
      window.matchMedia('(-ms-high-contrast: active)'),
    ];

    const handleChange = () => setIsHighContrast(isHighContrastMode());

    mediaQueries.forEach((mq) => {
      if (mq.addEventListener) {
        mq.addEventListener('change', handleChange);
      } else {
        mq.addListener(handleChange);
      }
    });

    return () => {
      mediaQueries.forEach((mq) => {
        if (mq.removeEventListener) {
          mq.removeEventListener('change', handleChange);
        } else {
          mq.removeListener(handleChange);
        }
      });
    };
  }, []);

  return isHighContrast;
}

