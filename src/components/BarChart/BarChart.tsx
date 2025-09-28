import React, { HTMLAttributes, forwardRef, useEffect, useRef, useMemo, createContext, useContext } from 'react';
import clsx from 'clsx';
import * as d3 from 'd3';
import './BarChart.css';

// Chart Context for compound components
interface BarChartContextValue {
  data: BarChartDataPoint[];
  width: number;
  height: number;
  color: BarChartProps['color'];
  xScale?: any;
  yScale?: any;
  svgRef?: React.RefObject<SVGSVGElement>;
}

export const BarChartContext = createContext<BarChartContextValue | null>(null);

export const useBarChart = () => {
  const context = useContext(BarChartContext);
  if (!context) {
    throw new Error('useBarChart must be used within a BarChart component');
  }
  return context;
};

export interface BarChartDataPoint {
  /** Category label for the bar */
  x: string;
  /** Value for the bar height */
  y: number;
  /** Optional label for the data point */
  label?: string;
  /** Optional metadata for the data point */
  metadata?: Record<string, any>;
}

// Enhanced configuration interfaces
export interface BarChartAxis {
  /** Show axis */
  show?: boolean;
  /** Axis position */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /** Axis label */
  label?: string;
  /** Tick count */
  tickCount?: number;
  /** Custom tick formatter */
  tickFormatter?: (value: any) => string;
  /** Axis style variant */
  variant?: 'default' | 'minimal' | 'detailed';
  /** Rotate tick labels for x-axis */
  rotateLabels?: boolean;
}

export interface BarChartGrid {
  /** Show grid */
  show?: boolean;
  /** Grid line style */
  strokeDasharray?: string;
  /** Grid opacity */
  opacity?: number;
}

export interface BarChartTheme {
  /** Primary color scheme */
  colorScheme?: 'light' | 'dark' | 'auto';
  /** Custom CSS variables */
  cssVars?: Record<string, string>;
}

export interface BarChartAnimation {
  /** Enable animations */
  enabled?: boolean;
  /** Animation duration in ms */
  duration?: number;
  /** Animation easing */
  easing?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';
}

export interface BarChartResponsive {
  /** Responsive breakpoints */
  breakpoints?: {
    sm?: Partial<BarChartProps>;
    md?: Partial<BarChartProps>;
    lg?: Partial<BarChartProps>;
  };
}

export interface BarChartProps extends Omit<HTMLAttributes<HTMLDivElement>, 'data'> {
  /** Chart data points */
  data: BarChartDataPoint[];
  /** Chart width */
  width?: number;
  /** Chart height */
  height?: number;
  /** Chart variant */
  variant?: 'default' | 'minimal' | 'detailed';
  /** Color scheme */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  /** Chart title */
  title?: string;
  /** Orientation of bars */
  orientation?: 'vertical' | 'horizontal';
  /** Bar corner radius */
  borderRadius?: number;
  /** Space between bars (0-1) */
  barPadding?: number;
  
  /** X-axis configuration */
  xAxis?: BarChartAxis;
  /** Y-axis configuration */
  yAxis?: BarChartAxis;
  /** Grid configuration */
  grid?: BarChartGrid;
  /** Theme configuration */
  theme?: BarChartTheme;
  /** Animation configuration */
  animation?: BarChartAnimation;
  /** Responsive configuration */
  responsive?: BarChartResponsive;
  
  /** Show interactive tooltip on hover */
  showTooltip?: boolean;
  /** Format function for tooltip values */
  formatTooltip?: (dataPoint: BarChartDataPoint, index?: number) => string;
  /** Show value labels on bars */
  showValueLabels?: boolean;
  
  /** Enable keyboard navigation */
  keyboard?: boolean;
  /** ARIA label for accessibility */
  ariaLabel?: string;
  /** Custom CSS class for theming */
  themeClass?: string;
  /** Enable performance optimizations */
  optimized?: boolean;
  /** Debounce hover events (ms) */
  hoverDebounce?: number;
}

export const BarChart = forwardRef<HTMLDivElement, BarChartProps>(
  (
    {
      data = [],
      width = 600,
      height = 400,
      variant = 'default',
      color = 'primary',
      title,
      orientation = 'vertical',
      borderRadius = 2,
      barPadding = 0.1,
      xAxis,
      yAxis,
      grid,
      theme,
      animation,
      responsive,
      showTooltip = true,
      formatTooltip,
      showValueLabels = false,
      keyboard = false,
      ariaLabel,
      themeClass,
      optimized = false,
      hoverDebounce = 0,
      className,
      ...props
    },
    ref
  ) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);

    // Modern configuration with sensible defaults
    const mergedXAxis: BarChartAxis = {
      show: true,
      position: orientation === 'vertical' ? 'bottom' : 'left',
      variant: variant === 'minimal' ? 'minimal' : 'default',
      rotateLabels: orientation === 'vertical' && data.length > 8,
      ...xAxis,
    };

    const mergedYAxis: BarChartAxis = {
      show: true,
      position: orientation === 'vertical' ? 'left' : 'bottom',
      variant: variant === 'minimal' ? 'minimal' : 'default',
      tickCount: variant === 'detailed' ? 8 : 6,
      ...yAxis,
    };

    const mergedGrid: BarChartGrid = {
      show: variant !== 'minimal',
      strokeDasharray: variant === 'detailed' ? '1,3' : '2,2',
      opacity: variant === 'detailed' ? 0.2 : 0.3,
      ...grid,
    };

    const mergedTheme: BarChartTheme = {
      colorScheme: 'auto',
      cssVars: {
        '--chart-bar-radius': `${borderRadius}px`,
        '--chart-bar-padding': barPadding.toString(),
      },
      ...theme,
    };

    const mergedAnimation: BarChartAnimation = {
      enabled: variant === 'detailed',
      duration: variant === 'detailed' ? 500 : 300,
      easing: 'ease-out',
      ...animation,
    };

    const defaultMargin = {
      top: title ? 40 : 20,
      right: orientation === 'horizontal' ? 60 : 20,
      bottom: (mergedXAxis.label ? 60 : 40) + (mergedXAxis.rotateLabels ? 20 : 0),
      left: (mergedYAxis.label ? 80 : 60) + (orientation === 'horizontal' ? 20 : 0),
    };

    const innerWidth = width - defaultMargin.left - defaultMargin.right;
    const innerHeight = height - defaultMargin.top - defaultMargin.bottom;

    // Memoize scales
    const { xScale, yScale } = useMemo(() => {
      if (!data.length) {
        return { xScale: null, yScale: null };
      }

      let xScale: any;
      let yScale: any;

      if (orientation === 'vertical') {
        // X-axis: categories (band scale)
        xScale = d3.scaleBand()
          .domain(data.map(d => d.x))
          .range([0, innerWidth])
          .padding(barPadding);

        // Y-axis: values (linear scale)
        yScale = d3.scaleLinear()
          .domain([0, d3.max(data, d => d.y) as number])
          .nice()
          .range([innerHeight, 0]);
      } else {
        // Horizontal orientation
        // X-axis: values (linear scale)
        xScale = d3.scaleLinear()
          .domain([0, d3.max(data, d => d.y) as number])
          .nice()
          .range([0, innerWidth]);

        // Y-axis: categories (band scale)
        yScale = d3.scaleBand()
          .domain(data.map(d => d.x))
          .range([0, innerHeight])
          .padding(barPadding);
      }

      return { xScale, yScale };
    }, [data, innerWidth, innerHeight, orientation, barPadding]);

    // Default formatters
    const defaultFormatX = mergedXAxis.tickFormatter || ((value: any) => String(value));
    const defaultFormatY = mergedYAxis.tickFormatter || d3.format('.2s');

    const defaultFormatTooltip = formatTooltip || ((dataPoint: BarChartDataPoint, index?: number) => {
      const categoryFormatted = dataPoint.x;
      const valueFormatted = d3.format('.2s')(dataPoint.y);
      
      let tooltipHtml = `<div class="db-barchart__tooltip-content">`;
      tooltipHtml += `<div class="db-barchart__tooltip-category">${categoryFormatted}</div>`;
      tooltipHtml += `<div class="db-barchart__tooltip-value">${valueFormatted}</div>`;
      tooltipHtml += `</div>`;
      return tooltipHtml;
    });

    useEffect(() => {
      if (!svgRef.current || !data.length || !xScale || !yScale) {
        return;
      }

      const svg = d3.select(svgRef.current);
      svg.selectAll('*').remove();

      const g = svg.append('g')
        .attr('transform', `translate(${defaultMargin.left},${defaultMargin.top})`);

      // Grid lines
      if (mergedGrid.show) {
        if (orientation === 'vertical') {
          // Y-axis grid for vertical bars
          g.append('g')
            .attr('class', 'db-barchart__grid db-barchart__grid--y')
            .call(d3.axisLeft(yScale)
              .tickSize(-innerWidth)
              .tickFormat(() => '')
            )
            .selectAll('line')
            .style('stroke-dasharray', mergedGrid.strokeDasharray || '2,2')
            .style('opacity', mergedGrid.opacity || 0.3);
        } else {
          // X-axis grid for horizontal bars
          g.append('g')
            .attr('class', 'db-barchart__grid db-barchart__grid--x')
            .attr('transform', `translate(0,${innerHeight})`)
            .call(d3.axisBottom(xScale)
              .tickSize(-innerHeight)
              .tickFormat(() => '')
            )
            .selectAll('line')
            .style('stroke-dasharray', mergedGrid.strokeDasharray || '2,2')
            .style('opacity', mergedGrid.opacity || 0.3);
        }
      }

      // X-axis
      if (mergedXAxis.show) {
        const xAxisGroup = g.append('g')
          .attr('class', `db-barchart__axis db-barchart__axis--x db-barchart__axis--${mergedXAxis.variant}`)
          .attr('transform', `translate(0,${innerHeight})`);

        const xAxisCall = orientation === 'vertical' ? d3.axisBottom(xScale) : d3.axisBottom(xScale).ticks(mergedXAxis.tickCount || 6);
        
        xAxisCall.tickFormat((d, i) => {
          if (orientation === 'vertical') {
            return defaultFormatX(d);
          } else {
            return defaultFormatY(d as number);
          }
        });
        
        const xAxis = xAxisGroup.call(xAxisCall);

        // Rotate labels if needed
        if (mergedXAxis.rotateLabels && orientation === 'vertical') {
          xAxis.selectAll('text')
            .style('text-anchor', 'end')
            .attr('dx', '-.8em')
            .attr('dy', '.15em')
            .attr('transform', 'rotate(-45)');
        }
      }

      // Y-axis
      if (mergedYAxis.show) {
        const yAxisGroup = g.append('g')
          .attr('class', `db-barchart__axis db-barchart__axis--y db-barchart__axis--${mergedYAxis.variant}`);

        const yAxisCall = orientation === 'vertical' ? d3.axisLeft(yScale).ticks(mergedYAxis.tickCount || 6) : d3.axisLeft(yScale);
        
        yAxisCall.tickFormat((d, i) => {
          if (orientation === 'vertical') {
            return defaultFormatY(d as number);
          } else {
            return defaultFormatX(d);
          }
        });
        
        yAxisGroup.call(yAxisCall);
      }

      // Bars
      const bars = g.selectAll('.db-barchart__bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', `db-barchart__bar db-barchart__bar--${color}`)
        .style('rx', borderRadius)
        .style('ry', borderRadius);

      if (orientation === 'vertical') {
        bars
          .attr('x', d => xScale(d.x) || 0)
          .attr('width', xScale.bandwidth())
          .attr('y', innerHeight)
          .attr('height', 0)
          .transition()
          .duration(mergedAnimation.enabled ? (mergedAnimation.duration || 300) : 0)
          .attr('y', d => yScale(d.y) || 0)
          .attr('height', d => innerHeight - (yScale(d.y) || 0));
      } else {
        bars
          .attr('x', 0)
          .attr('width', 0)
          .attr('y', d => yScale(d.x) || 0)
          .attr('height', yScale.bandwidth())
          .transition()
          .duration(mergedAnimation.enabled ? (mergedAnimation.duration || 300) : 0)
          .attr('width', d => xScale(d.y) || 0);
      }

      // Value labels
      if (showValueLabels) {
        const labels = g.selectAll('.db-barchart__value-label')
          .data(data)
          .enter()
          .append('text')
          .attr('class', 'db-barchart__value-label')
          .style('font-size', '12px')
          .style('fill', '#37444F')
          .style('font-weight', '500')
          .style('text-anchor', orientation === 'vertical' ? 'middle' : 'start');

        if (orientation === 'vertical') {
          labels
            .attr('x', d => (xScale(d.x) || 0) + xScale.bandwidth() / 2)
            .attr('y', d => (yScale(d.y) || 0) - 5)
            .text(d => d3.format('.2s')(d.y));
        } else {
          labels
            .attr('x', d => (xScale(d.y) || 0) + 5)
            .attr('y', d => (yScale(d.x) || 0) + yScale.bandwidth() / 2)
            .attr('dy', '0.35em')
            .text(d => d3.format('.2s')(d.y));
        }
      }

      // Add keyboard navigation attributes conditionally
      if (keyboard) {
        bars
          .attr('tabindex', 0)
          .attr('role', 'button')
          .attr('aria-label', (d, i) => `${d.x}: ${d3.format('.2s')(d.y)}`)
          .on('focus', function(event: any, d: any) {
            const index = data.indexOf(d);
            if (showTooltip && tooltipRef.current) {
              // Show tooltip on keyboard focus
              const tooltipContent = defaultFormatTooltip(d, index);
              const tooltip = d3.select(tooltipRef.current);
              tooltip.style('opacity', 1).html(tooltipContent);
            }
          })
          .on('blur', function() {
            if (tooltipRef.current) {
              d3.select(tooltipRef.current).style('opacity', 0);
            }
          });
      }

      // Tooltip functionality
      if (showTooltip && tooltipRef.current) {
        const tooltip = d3.select(tooltipRef.current);
        let tooltipTimer: number | null = null;

        bars
          .on('mouseenter', function(event, d) {
            const index = data.indexOf(d);
            const tooltipContent = defaultFormatTooltip(d, index);
            
            tooltip
              .style('opacity', 1)
              .html(tooltipContent);

            // Highlight bar
            d3.select(this).classed('db-barchart__bar--hover', true);

            // Position tooltip
            if (tooltipRef.current && svgRef.current) {
              const tooltipNode = tooltipRef.current;
              const rect = this.getBoundingClientRect();
              const containerRect = svgRef.current.getBoundingClientRect();

              if (tooltipTimer) window.cancelAnimationFrame(tooltipTimer);

              tooltipTimer = window.requestAnimationFrame(() => {
                tooltipNode.style.position = 'absolute';
                tooltipNode.style.visibility = 'hidden';
                tooltipNode.style.opacity = '0';

                const tooltipWidth = tooltipNode.offsetWidth;
                const tooltipHeight = tooltipNode.offsetHeight;

                let left: number;
                let top: number;

                if (orientation === 'vertical') {
                  left = rect.left - containerRect.left + rect.width / 2 - tooltipWidth / 2;
                  top = rect.top - containerRect.top - tooltipHeight - 10;
                } else {
                  left = rect.right - containerRect.left + 10;
                  top = rect.top - containerRect.top + rect.height / 2 - tooltipHeight / 2;
                }

                const padding = 10;
                
                if (left < padding) {
                  left = padding;
                } else if (left + tooltipWidth > width - padding) {
                  left = width - tooltipWidth - padding;
                }

                if (top < padding) {
                  if (orientation === 'vertical') {
                    top = rect.bottom - containerRect.top + 10;
                  } else {
                    top = padding;
                  }
                }

                tooltipNode.style.left = `${left}px`;
                tooltipNode.style.top = `${top}px`;
                tooltipNode.style.visibility = 'visible';
                tooltipNode.style.opacity = '1';
              });
            }
          })
          .on('mouseleave', function() {
            if (tooltipTimer) {
              window.cancelAnimationFrame(tooltipTimer);
              tooltipTimer = null;
            }

            tooltip.style('opacity', 0);
            if (tooltipRef.current) {
              tooltipRef.current.style.opacity = '0';
              tooltipRef.current.style.visibility = 'hidden';
            }
            
            // Remove highlight
            d3.select(this).classed('db-barchart__bar--hover', false);
          });
      }

      // Axis labels
      if (mergedXAxis.label) {
        g.append('text')
          .attr('class', 'db-barchart__axis-label db-barchart__axis-label--x')
          .attr('transform', `translate(${innerWidth / 2}, ${innerHeight + (mergedXAxis.rotateLabels ? 60 : 40)})`)
          .style('text-anchor', 'middle')
          .text(mergedXAxis.label);
      }

      if (mergedYAxis.label) {
        g.append('text')
          .attr('class', 'db-barchart__axis-label db-barchart__axis-label--y')
          .attr('transform', 'rotate(-90)')
          .attr('y', 0 - defaultMargin.left + 20)
          .attr('x', 0 - (innerHeight / 2))
          .style('text-anchor', 'middle')
          .text(mergedYAxis.label);
      }

      // Title
      if (title) {
        svg.append('text')
          .attr('class', 'db-barchart__title')
          .attr('x', width / 2)
          .attr('y', 25)
          .style('text-anchor', 'middle')
          .text(title);
      }

    }, [data, width, height, xScale, yScale, orientation, borderRadius, mergedGrid.show, showValueLabels,
        showTooltip, color, mergedXAxis.label, mergedXAxis.rotateLabels, mergedYAxis.label, title,
        defaultMargin, innerWidth, innerHeight, defaultFormatX, defaultFormatY, defaultFormatTooltip,
        mergedAnimation.enabled, mergedAnimation.duration]);

    if (!data.length) {
      return (
        <div
          ref={ref}
          className={clsx(
            'db-barchart',
            'db-barchart--empty',
            className
          )}
          {...props}
        >
          <div className="db-barchart__empty-state">
            <p>No data available</p>
          </div>
        </div>
      );
    }

    // Context value for compound components
    const contextValue: BarChartContextValue = {
      data,
      width,
      height,
      color,
      xScale,
      yScale,
      svgRef,
    };

    return (
      <BarChartContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={clsx(
            'db-barchart',
            `db-barchart--${variant}`,
            `db-barchart--${color}`,
            `db-barchart--${orientation}`,
            {
              'db-barchart--optimized': optimized,
              'db-barchart--keyboard': keyboard,
            },
            themeClass,
            className
          )}
          data-theme={mergedTheme.colorScheme !== 'auto' ? mergedTheme.colorScheme : undefined}
          style={{
            ...mergedTheme.cssVars,
            ...(props.style || {}),
          } as React.CSSProperties}
          role="img"
          aria-label={ariaLabel || `Bar chart with ${data.length} categories`}
          tabIndex={keyboard ? 0 : undefined}
          {...props}
        >
          <svg
            ref={svgRef}
            className="db-barchart__svg"
            width={width}
            height={height}
            role="presentation"
            aria-hidden={keyboard}
          />
          {showTooltip && (
            <div
              ref={tooltipRef}
              className="db-barchart__tooltip"
              role="tooltip"
              aria-live="polite"
            />
          )}
        </div>
      </BarChartContext.Provider>
    );
  }
);

BarChart.displayName = 'BarChart';
