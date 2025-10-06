import React, { forwardRef, HTMLAttributes, useContext } from 'react';
import clsx from 'clsx';
import { LineChartContext } from './LineChart';

// Compound components inspired by shadcn/ui patterns

export interface LineChartHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /** Header title */
  title?: string;
  /** Header subtitle */
  subtitle?: string;
}

export const LineChartHeader = forwardRef<HTMLDivElement, LineChartHeaderProps>(
  ({ title, subtitle, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx('db-linechart__header', className)}
        {...props}
      >
        {title && <h3 className="db-linechart__title">{title}</h3>}
        {subtitle && <p className="db-linechart__subtitle">{subtitle}</p>}
        {children}
      </div>
    );
  }
);

LineChartHeader.displayName = 'LineChartHeader';

export interface LineChartLegendProps extends HTMLAttributes<HTMLDivElement> {
  /** Legend items */
  items?: Array<{
    label: string;
    color: string;
    symbol?: 'line' | 'circle' | 'square';
  }>;
  /** Legend position */
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export const LineChartLegend = forwardRef<HTMLDivElement, LineChartLegendProps>(
  ({ items = [], position = 'bottom', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'db-linechart__legend',
          `db-linechart__legend--${position}`,
          className
        )}
        {...props}
      >
        {items.map((item, index) => (
          <div key={index} className="db-linechart__legend-item">
            <div
              className={clsx(
                'db-linechart__legend-symbol',
                `db-linechart__legend-symbol--${item.symbol || 'line'}`
              )}
              style={{ backgroundColor: item.color }}
            />
            <span className="db-linechart__legend-label">{item.label}</span>
          </div>
        ))}
      </div>
    );
  }
);

LineChartLegend.displayName = 'LineChartLegend';

export interface LineChartAxisProps extends HTMLAttributes<HTMLDivElement> {
  /** Axis type */
  type: 'x' | 'y';
  /** Custom axis component */
  children?: React.ReactNode;
}

export const LineChartAxis = forwardRef<HTMLDivElement, LineChartAxisProps>(
  ({ type, className, children, ...props }, ref) => {
    // Context is optional for styling purposes
    const _chartContext = React.useContext(LineChartContext);
    
    return (
      <div
        ref={ref}
        className={clsx(
          'db-linechart__axis-container',
          `db-linechart__axis-container--${type}`,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

LineChartAxis.displayName = 'LineChartAxis';

export interface LineChartTooltipProps extends HTMLAttributes<HTMLDivElement> {
  /** Custom tooltip formatter */
  formatter?: (_dataPoint: any, _index?: number) => React.ReactNode;
  /** Tooltip variant */
  variant?: 'default' | 'compact' | 'detailed';
}

export const LineChartTooltip = forwardRef<HTMLDivElement, LineChartTooltipProps>(
  ({ formatter: _formatter, variant = 'default', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'db-linechart__tooltip-compound',
          `db-linechart__tooltip-compound--${variant}`,
          className
        )}
        {...props}
      />
    );
  }
);

LineChartTooltip.displayName = 'LineChartTooltip';

export interface LineChartGridProps extends HTMLAttributes<HTMLDivElement> {
  /** Grid type */
  type?: 'horizontal' | 'vertical' | 'both';
  /** Custom grid styling */
  strokeDasharray?: string;
  /** Grid opacity */
  opacity?: number;
}

export const LineChartGrid = forwardRef<HTMLDivElement, LineChartGridProps>(
  ({ type = 'both', strokeDasharray, opacity, className, ...props }, ref) => {
    // Context is optional for styling purposes
    const _chartContext = useContext(LineChartContext);
    
    return (
      <div
        ref={ref}
        className={clsx(
          'db-linechart__grid-compound',
          `db-linechart__grid-compound--${type}`,
          className
        )}
        style={{
          '--grid-stroke-dasharray': strokeDasharray,
          '--grid-opacity': opacity,
        } as React.CSSProperties}
        {...props}
      />
    );
  }
);

LineChartGrid.displayName = 'LineChartGrid';

export interface LineChartContentProps extends HTMLAttributes<HTMLDivElement> {
  /** Custom render function for chart content */
  children?: React.ReactNode;
}

export const LineChartContent = forwardRef<HTMLDivElement, LineChartContentProps>(
  ({ className, children, ...props }, ref) => {
    // Context is optional for styling purposes
    const _chartContext = useContext(LineChartContext);
    
    return (
      <div
        ref={ref}
        className={clsx('db-linechart__content', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

LineChartContent.displayName = 'LineChartContent';

// Container component for compound composition
export interface LineChartContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Container variant */
  variant?: 'default' | 'card' | 'minimal';
}

export const LineChartContainer = forwardRef<HTMLDivElement, LineChartContainerProps>(
  ({ variant = 'default', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'db-linechart__container',
          `db-linechart__container--${variant}`,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

LineChartContainer.displayName = 'LineChartContainer';
