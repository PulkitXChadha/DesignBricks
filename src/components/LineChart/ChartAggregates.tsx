import React, { HTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import { LineChartDataPoint } from './LineChart';

export interface AggregateMetric {
  /** Label for the metric */
  label: string;
  /** Value of the metric */
  value: string | number;
  /** Optional change percentage */
  change?: number;
  /** Color variant for the metric */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral';
}

export interface ChartAggregatesProps extends HTMLAttributes<HTMLDivElement> {
  /** Array of metrics to display */
  metrics?: AggregateMetric[];
  /** Auto-calculate metrics from data */
  data?: LineChartDataPoint[];
  /** Format function for values */
  formatValue?: (value: number) => string;
  /** Layout variant */
  layout?: 'horizontal' | 'vertical' | 'grid';
  /** Show change percentages */
  showChange?: boolean;
}

export const ChartAggregates = forwardRef<HTMLDivElement, ChartAggregatesProps>(
  (
    {
      metrics,
      data = [],
      formatValue = (value: number) => value.toLocaleString(),
      layout = 'horizontal',
      showChange = true,
      className,
      ...props
    },
    ref
  ) => {
    // Auto-calculate metrics from data if not provided
    const calculatedMetrics: AggregateMetric[] = React.useMemo(() => {
      if (metrics) return metrics;
      
      if (!data.length) return [];
      
      const values = data.map(d => d.y);
      const high = Math.max(...values);
      const low = Math.min(...values);
      
      // Calculate change from first to last point
      const firstValue = data[0].y;
      const lastValue = data[data.length - 1].y;
      const change = ((lastValue - firstValue) / firstValue) * 100;
      
      return [
        {
          label: 'High',
          value: formatValue(high),
          color: 'success' as const,
        },
        {
          label: 'Low', 
          value: formatValue(low),
          color: 'error' as const,
        },
        {
          label: 'Change',
          value: formatValue(lastValue),
          change,
          color: change >= 0 ? 'success' as const : 'error' as const,
        },
      ];
    }, [metrics, data, formatValue]);

    if (!calculatedMetrics.length) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={clsx(
          'db-chart-aggregates',
          `db-chart-aggregates--${layout}`,
          className
        )}
        {...props}
      >
        {calculatedMetrics.map((metric, index) => (
          <div
            key={index}
            className={clsx(
              'db-chart-aggregates__metric',
              metric.color && `db-chart-aggregates__metric--${metric.color}`
            )}
          >
            <div className="db-chart-aggregates__label">
              {metric.label}:
            </div>
            <div className="db-chart-aggregates__value">
              {metric.value}
            </div>
            {showChange && metric.change !== undefined && (
              <div
                className={clsx(
                  'db-chart-aggregates__change',
                  {
                    'db-chart-aggregates__change--positive': metric.change >= 0,
                    'db-chart-aggregates__change--negative': metric.change < 0,
                  }
                )}
              >
                {metric.change >= 0 ? '+' : ''}{metric.change.toFixed(2)}%
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
);

ChartAggregates.displayName = 'ChartAggregates';
