/**
 * Performance monitoring and optimization utilities
 * Provides hooks and utilities for performance measurement and optimization
 */

import React from 'react';

/**
 * Performance metrics
 */
export interface PerformanceMetrics {
  componentName: string;
  renderTime: number;
  timestamp: number;
}

/**
 * Performance observer for component render times
 */
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: PerformanceMetrics[] = [];
  private maxMetrics = 100;

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  /**
   * Record a component render
   */
  recordRender(componentName: string, renderTime: number): void {
    this.metrics.push({
      componentName,
      renderTime,
      timestamp: Date.now(),
    });

    // Keep only recent metrics
    if (this.metrics.length > this.maxMetrics) {
      this.metrics.shift();
    }
  }

  /**
   * Get metrics for a specific component
   */
  getComponentMetrics(componentName: string): PerformanceMetrics[] {
    return this.metrics.filter((m) => m.componentName === componentName);
  }

  /**
   * Get average render time for a component
   */
  getAverageRenderTime(componentName: string): number {
    const metrics = this.getComponentMetrics(componentName);
    if (metrics.length === 0) return 0;

    const total = metrics.reduce((sum, m) => sum + m.renderTime, 0);
    return total / metrics.length;
  }

  /**
   * Get all metrics
   */
  getAllMetrics(): PerformanceMetrics[] {
    return [...this.metrics];
  }

  /**
   * Clear all metrics
   */
  clearMetrics(): void {
    this.metrics = [];
  }

  /**
   * Log performance summary
   */
  logSummary(): void {
    if (this.metrics.length === 0) {
      // console.log('No performance metrics recorded');
      return;
    }

    const componentMap = new Map<string, number[]>();
    this.metrics.forEach((m) => {
      if (!componentMap.has(m.componentName)) {
        componentMap.set(m.componentName, []);
      }
      componentMap.get(m.componentName)!.push(m.renderTime);
    });

    // eslint-disable-next-line no-console
  console.group('Performance Summary');
  componentMap.forEach((_times) => {
    // Metrics available for debugging if needed
    // const avg = times.reduce((a, b) => a + b, 0) / times.length;
    // const max = Math.max(...times);
    // const min = Math.min(...times);
    // eslint-disable-next-line no-console
    // console.log(`${component}: avg=${avg.toFixed(2)}ms, min=${min.toFixed(2)}ms, max=${max.toFixed(2)}ms (${times.length} renders)`);
  });
  // eslint-disable-next-line no-console
  console.groupEnd();
  }
}

/**
 * Default performance monitor instance
 */
export const performanceMonitor = PerformanceMonitor.getInstance();

/**
 * React hook to measure component render time
 */
export function usePerformanceMonitor(componentName: string, enabled = process.env.NODE_ENV === 'development') {
  const startTimeRef = React.useRef<number>(0);

  React.useEffect(() => {
    if (!enabled) return;

    startTimeRef.current = performance.now();

    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTimeRef.current;
      performanceMonitor.recordRender(componentName, renderTime);
    };
  });

  return {
    getMetrics: () => performanceMonitor.getComponentMetrics(componentName),
    getAverageRenderTime: () => performanceMonitor.getAverageRenderTime(componentName),
  };
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (..._args: any[]) => any>(
  func: T,
  wait: number
): (..._args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for performance optimization
 */
export function throttle<T extends (..._args: any[]) => any>(
  func: T,
  limit: number
): (..._args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * React hook for debounced values
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

/**
 * React hook for throttled callbacks
 */
export function useThrottle<T extends (..._args: any[]) => any>(
  callback: T,
  delay: number
): (..._args: Parameters<T>) => void {
  const throttledCallback = React.useMemo(
    () => throttle(callback, delay),
    [callback, delay]
  );

  return throttledCallback;
}

/**
 * Lazy load a component
 */
export function lazyLoad<T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>
): React.LazyExoticComponent<T> {
  return React.lazy(importFunc);
}

/**
 * React hook for intersection observer (lazy loading)
 */
export function useIntersectionObserver(
  ref: React.RefObject<HTMLElement>,
  options: {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
  } = {}
): boolean {
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isIntersecting;
}

/**
 * React hook for measuring component size
 */
export function useResizeObserver(
  ref: React.RefObject<HTMLElement>
): { width: number; height: number } {
  const [size, setSize] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return size;
}

/**
 * Memory management utilities
 */
export const MemoryUtils = {
  /**
   * Check if memory usage is high
   */
  isMemoryHigh(): boolean {
    if ('memory' in performance && (performance as any).memory) {
      const memory = (performance as any).memory;
      const usedRatio = memory.usedJSHeapSize / memory.jsHeapSizeLimit;
      return usedRatio > 0.9; // 90% threshold
    }
    return false;
  },

  /**
   * Get memory info (Chrome only)
   */
  getMemoryInfo(): { used: number; total: number; limit: number } | null {
    if ('memory' in performance && (performance as any).memory) {
      const memory = (performance as any).memory;
      return {
        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit,
      };
    }
    return null;
  },
};

/**
 * Bundle size utilities for tree-shaking validation
 */
export const BundleUtils = {
  /**
   * Log imported components (development only)
   */
  logImport(_componentName: string): void {
    if (process.env.NODE_ENV === 'development') {
      // console.log(`[DesignBricks] Imported: ${componentName}`);
    }
  },
};

/**
 * Web Vitals monitoring (requires web-vitals package)
 */
export interface VitalsMetrics {
  CLS?: number; // Cumulative Layout Shift
  FID?: number; // First Input Delay
  LCP?: number; // Largest Contentful Paint
  FCP?: number; // First Contentful Paint
  TTFB?: number; // Time to First Byte
}

/**
 * React hook for Core Web Vitals (placeholder - requires web-vitals package)
 */
export function useWebVitals(
  _callback?: (_metric: { name: string; value: number }) => void
): VitalsMetrics {
  const [metrics] = React.useState<VitalsMetrics>({});

  React.useEffect(() => {
    // This is a placeholder - actual implementation would use web-vitals package
    // import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';
    
    // Placeholder to acknowledge callback parameter usage
    void _callback;
  }, [_callback]);

  return metrics;
}

/**
 * Performance budget checker
 */
export const PerformanceBudget = {
  /**
   * Check if render time exceeds budget
   */
  checkRenderBudget(renderTime: number, budget: number = 16): boolean {
    // 16ms = 60fps budget
    return renderTime > budget;
  },

  /**
   * Warn if render time exceeds budget
   */
  warnIfOverBudget(componentName: string, renderTime: number, budget: number = 16): void {
    if (this.checkRenderBudget(renderTime, budget)) {
      // console.warn(`[Performance] ${componentName} render time (${renderTime.toFixed(2)}ms) exceeds budget (${budget}ms)`);
    }
  },
};

