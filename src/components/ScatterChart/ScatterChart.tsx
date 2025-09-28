import React, { HTMLAttributes, forwardRef, useEffect, useRef, useMemo, createContext, useContext } from 'react';
import clsx from 'clsx';
import * as d3 from 'd3';
import './ScatterChart.css';

// Chart Context for compound components
interface ScatterChartContextValue {
  data: ScatterChartDataPoint[];
  width: number;
  height: number;
  color: ScatterChartProps['color'];
  xScale?: any;
  yScale?: any;
  svgRef?: React.RefObject<SVGSVGElement>;
}

export const ScatterChartContext = createContext<ScatterChartContextValue | null>(null);

export const useScatterChart = () => {
  const context = useContext(ScatterChartContext);
  if (!context) {
    throw new Error('useScatterChart must be used within a ScatterChart component');
  }
  return context;
};

export interface ScatterChartDataPoint {
  /** X-axis value (numeric) */
  x: number;
  /** Y-axis value (numeric) */
  y: number;
  /** Optional size for bubble chart functionality */
  size?: number;
  /** Optional label for the data point */
  label?: string;
  /** Optional category for grouping */
  category?: string;
  /** Optional metadata for the data point */
  metadata?: Record<string, any>;
}

// Enhanced configuration interfaces
export interface ScatterChartAxis {
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
  /** Axis domain override */
  domain?: [number, number];
}

export interface ScatterChartGrid {
  /** Show grid */
  show?: boolean;
  /** Grid line style */
  strokeDasharray?: string;
  /** Grid opacity */
  opacity?: number;
}

export interface ScatterChartTheme {
  /** Primary color scheme */
  colorScheme?: 'light' | 'dark' | 'auto';
  /** Custom CSS variables */
  cssVars?: Record<string, string>;
}

export interface ScatterChartAnimation {
  /** Enable animations */
  enabled?: boolean;
  /** Animation duration in ms */
  duration?: number;
  /** Animation easing */
  easing?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';
}

export interface ScatterChartResponsive {
  /** Responsive breakpoints */
  breakpoints?: {
    sm?: Partial<ScatterChartProps>;
    md?: Partial<ScatterChartProps>;
    lg?: Partial<ScatterChartProps>;
  };
}

export interface ScatterChartProps extends Omit<HTMLAttributes<HTMLDivElement>, 'data'> {
  /** Chart data points */
  data: ScatterChartDataPoint[];
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
  /** Point radius (if not using size-based bubbles) */
  pointRadius?: number;
  /** Use size field for bubble chart */
  enableBubbles?: boolean;
  /** Size range for bubbles [min, max] */
  sizeRange?: [number, number];
  /** Point opacity */
  pointOpacity?: number;
  /** Show trend line */
  showTrendLine?: boolean;
  /** Trend line color */
  trendLineColor?: string;
  
  /** X-axis configuration */
  xAxis?: ScatterChartAxis;
  /** Y-axis configuration */
  yAxis?: ScatterChartAxis;
  /** Grid configuration */
  grid?: ScatterChartGrid;
  /** Theme configuration */
  theme?: ScatterChartTheme;
  /** Animation configuration */
  animation?: ScatterChartAnimation;
  /** Responsive configuration */
  responsive?: ScatterChartResponsive;
  
  /** Show interactive tooltip on hover */
  showTooltip?: boolean;
  /** Format function for tooltip values */
  formatTooltip?: (dataPoint: ScatterChartDataPoint, index?: number) => string;
  
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

export const ScatterChart = forwardRef<HTMLDivElement, ScatterChartProps>(
  (
    {
      data = [],
      width = 600,
      height = 400,
      variant = 'default',
      color = 'primary',
      title,
      pointRadius = 4,
      enableBubbles = false,
      sizeRange = [3, 15],
      pointOpacity = 0.7,
      showTrendLine = false,
      trendLineColor,
      xAxis,
      yAxis,
      grid,
      theme,
      animation,
      responsive,
      showTooltip = true,
      formatTooltip,
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
    const mergedXAxis: ScatterChartAxis = {
      show: true,
      position: 'bottom',
      variant: variant === 'minimal' ? 'minimal' : 'default',
      tickCount: variant === 'detailed' ? 8 : 6,
      ...xAxis,
    };

    const mergedYAxis: ScatterChartAxis = {
      show: true,
      position: 'left',
      variant: variant === 'minimal' ? 'minimal' : 'default',
      tickCount: variant === 'detailed' ? 8 : 6,
      ...yAxis,
    };

    const mergedGrid: ScatterChartGrid = {
      show: variant !== 'minimal',
      strokeDasharray: variant === 'detailed' ? '1,3' : '2,2',
      opacity: variant === 'detailed' ? 0.2 : 0.3,
      ...grid,
    };

    const mergedTheme: ScatterChartTheme = {
      colorScheme: 'auto',
      cssVars: {
        '--chart-point-radius': `${pointRadius}px`,
        '--chart-point-opacity': pointOpacity.toString(),
      },
      ...theme,
    };

    const mergedAnimation: ScatterChartAnimation = {
      enabled: variant === 'detailed',
      duration: variant === 'detailed' ? 600 : 400,
      easing: 'ease-out',
      ...animation,
    };

    const defaultMargin = {
      top: title ? 40 : 20,
      right: 20,
      bottom: mergedXAxis.label ? 60 : 40,
      left: mergedYAxis.label ? 80 : 60,
    };

    const innerWidth = width - defaultMargin.left - defaultMargin.right;
    const innerHeight = height - defaultMargin.top - defaultMargin.bottom;

    // Memoize scales and trend line
    const { xScale, yScale, sizeScale, trendLineData } = useMemo(() => {
      if (!data.length) {
        return { xScale: null, yScale: null, sizeScale: null, trendLineData: null };
      }

      // X-scale (linear)
      const xExtent = mergedXAxis.domain || d3.extent(data, d => d.x) as [number, number];
      const xScale = d3.scaleLinear()
        .domain(xExtent)
        .nice()
        .range([0, innerWidth]);

      // Y-scale (linear)
      const yExtent = mergedYAxis.domain || d3.extent(data, d => d.y) as [number, number];
      const yScale = d3.scaleLinear()
        .domain(yExtent)
        .nice()
        .range([innerHeight, 0]);

      // Size scale for bubbles
      let sizeScale = null;
      if (enableBubbles && data.some(d => d.size !== undefined)) {
        const sizeExtent = d3.extent(data, d => d.size || 1) as [number, number];
        sizeScale = d3.scaleSqrt()
          .domain(sizeExtent)
          .range(sizeRange);
      }

      // Calculate trend line if needed
      let trendLineData = null;
      if (showTrendLine) {
        // Simple linear regression
        const n = data.length;
        const sumX = d3.sum(data, d => d.x);
        const sumY = d3.sum(data, d => d.y);
        const sumXY = d3.sum(data, d => d.x * d.y);
        const sumXX = d3.sum(data, d => d.x * d.x);

        const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
        const intercept = (sumY - slope * sumX) / n;

        const xMin = xExtent[0];
        const xMax = xExtent[1];
        trendLineData = [
          { x: xMin, y: slope * xMin + intercept },
          { x: xMax, y: slope * xMax + intercept }
        ];
      }

      return { xScale, yScale, sizeScale, trendLineData };
    }, [data, innerWidth, innerHeight, enableBubbles, sizeRange, showTrendLine, mergedXAxis.domain, mergedYAxis.domain]);

    // Default formatters
    const defaultFormatX = mergedXAxis.tickFormatter || d3.format('.2f');
    const defaultFormatY = mergedYAxis.tickFormatter || d3.format('.2f');

    const defaultFormatTooltip = formatTooltip || ((dataPoint: ScatterChartDataPoint, index?: number) => {
      const xFormatted = defaultFormatX(dataPoint.x);
      const yFormatted = defaultFormatY(dataPoint.y);
      
      let tooltipHtml = `<div class="db-scatterchart__tooltip-content">`;
      if (dataPoint.label) {
        tooltipHtml += `<div class="db-scatterchart__tooltip-label">${dataPoint.label}</div>`;
      }
      if (dataPoint.category) {
        tooltipHtml += `<div class="db-scatterchart__tooltip-category">${dataPoint.category}</div>`;
      }
      tooltipHtml += `<div class="db-scatterchart__tooltip-coordinates">`;
      tooltipHtml += `<span class="db-scatterchart__tooltip-x">X: ${xFormatted}</span>`;
      tooltipHtml += `<span class="db-scatterchart__tooltip-y">Y: ${yFormatted}</span>`;
      tooltipHtml += `</div>`;
      if (enableBubbles && dataPoint.size) {
        tooltipHtml += `<div class="db-scatterchart__tooltip-size">Size: ${d3.format('.2f')(dataPoint.size)}</div>`;
      }
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
        // X-axis grid
        g.append('g')
          .attr('class', 'db-scatterchart__grid db-scatterchart__grid--x')
          .attr('transform', `translate(0,${innerHeight})`)
          .call(d3.axisBottom(xScale)
            .tickSize(-innerHeight)
            .tickFormat(() => '')
          )
          .selectAll('line')
          .style('stroke-dasharray', mergedGrid.strokeDasharray || '2,2')
          .style('opacity', mergedGrid.opacity || 0.3);

        // Y-axis grid
        g.append('g')
          .attr('class', 'db-scatterchart__grid db-scatterchart__grid--y')
          .call(d3.axisLeft(yScale)
            .tickSize(-innerWidth)
            .tickFormat(() => '')
          )
          .selectAll('line')
          .style('stroke-dasharray', mergedGrid.strokeDasharray || '2,2')
          .style('opacity', mergedGrid.opacity || 0.3);
      }

      // X-axis
      if (mergedXAxis.show) {
        const xAxisGroup = g.append('g')
          .attr('class', `db-scatterchart__axis db-scatterchart__axis--x db-scatterchart__axis--${mergedXAxis.variant}`)
          .attr('transform', `translate(0,${innerHeight})`);

        const xAxisCall = d3.axisBottom(xScale);
        if (mergedXAxis.tickCount) xAxisCall.ticks(mergedXAxis.tickCount);
        xAxisCall.tickFormat((d, i) => defaultFormatX(d as number));
        
        xAxisGroup.call(xAxisCall);
      }

      // Y-axis
      if (mergedYAxis.show) {
        const yAxisGroup = g.append('g')
          .attr('class', `db-scatterchart__axis db-scatterchart__axis--y db-scatterchart__axis--${mergedYAxis.variant}`);

        const yAxisCall = d3.axisLeft(yScale);
        if (mergedYAxis.tickCount) yAxisCall.ticks(mergedYAxis.tickCount);
        yAxisCall.tickFormat((d, i) => defaultFormatY(d as number));
        
        yAxisGroup.call(yAxisCall);
      }

      // Trend line
      if (showTrendLine && trendLineData) {
        const lineGenerator = d3.line<{x: number; y: number}>()
          .x(d => xScale(d.x) || 0)
          .y(d => yScale(d.y) || 0);

        g.append('path')
          .datum(trendLineData)
          .attr('class', 'db-scatterchart__trend-line')
          .attr('d', lineGenerator)
          .style('stroke', trendLineColor || '#8396A5')
          .style('stroke-width', 2)
          .style('stroke-dasharray', '4,4')
          .style('fill', 'none')
          .style('opacity', 0.8);
      }

      // Data points
      const points = g.selectAll('.db-scatterchart__point')
        .data(data)
        .enter()
        .append('circle')
        .attr('class', `db-scatterchart__point db-scatterchart__point--${color}`)
        .attr('cx', d => xScale(d.x) || 0)
        .attr('cy', d => yScale(d.y) || 0)
        .attr('r', d => {
          if (enableBubbles && sizeScale && d.size !== undefined) {
            return sizeScale(d.size);
          }
          return pointRadius;
        })
        .style('opacity', pointOpacity);

      // Animation
      if (mergedAnimation.enabled) {
        points
          .style('opacity', 0)
          .transition()
          .delay((d, i) => i * 20)
          .duration(mergedAnimation.duration || 400)
          .style('opacity', pointOpacity);
      }

      // Add keyboard navigation attributes conditionally
      if (keyboard) {
        points
          .attr('tabindex', 0)
          .attr('role', 'button')
          .attr('aria-label', (d, i) => {
            const xFormatted = defaultFormatX(d.x);
            const yFormatted = defaultFormatY(d.y);
            return `Data point ${i + 1}: X=${xFormatted}, Y=${yFormatted}${d.label ? `, ${d.label}` : ''}`;
          })
          .on('focus', function(event: any, d: any) {
            const index = data.indexOf(d);
            if (showTooltip && tooltipRef.current) {
              // Show tooltip on keyboard focus
              const tooltipContent = defaultFormatTooltip(d, index);
              const tooltip = d3.select(tooltipRef.current);
              tooltip.style('opacity', 1).html(tooltipContent);
            }
            
            // Highlight point
            d3.select(this)
              .style('stroke', '#2272B4')
              .style('stroke-width', 2);
          })
          .on('blur', function() {
            if (tooltipRef.current) {
              d3.select(tooltipRef.current).style('opacity', 0);
            }
            
            // Remove highlight
            d3.select(this)
              .style('stroke', 'none');
          });
      }

      // Tooltip functionality
      if (showTooltip && tooltipRef.current) {
        const tooltip = d3.select(tooltipRef.current);
        let tooltipTimer: number | null = null;

        points
          .on('mouseenter', function(event, d) {
            const index = data.indexOf(d);
            const tooltipContent = defaultFormatTooltip(d, index);
            
            tooltip
              .style('opacity', 1)
              .html(tooltipContent);

            // Highlight point
            d3.select(this)
              .style('stroke', '#FFFFFF')
              .style('stroke-width', 2)
              .transition()
              .duration(150)
              .attr('r', enableBubbles && sizeScale && d.size !== undefined ? 
                (sizeScale(d.size) || 0) + 2 : pointRadius + 2);

            // Position tooltip
            if (tooltipRef.current && svgRef.current) {
              const tooltipNode = tooltipRef.current;
              const pointX = xScale(d.x) || 0;
              const pointY = yScale(d.y) || 0;

              if (tooltipTimer) window.cancelAnimationFrame(tooltipTimer);

              tooltipTimer = window.requestAnimationFrame(() => {
                tooltipNode.style.position = 'absolute';
                tooltipNode.style.visibility = 'hidden';
                tooltipNode.style.opacity = '0';

                const tooltipWidth = tooltipNode.offsetWidth;
                const tooltipHeight = tooltipNode.offsetHeight;

                const svgX = pointX + defaultMargin.left;
                const svgY = pointY + defaultMargin.top;

                let left = svgX - tooltipWidth / 2;
                let top = svgY - tooltipHeight - 15;
                let isTooltipBelow = false;

                const padding = 10;

                if (left < padding) {
                  left = padding;
                } else if (left + tooltipWidth > width - padding) {
                  left = width - tooltipWidth - padding;
                }

                if (top < padding) {
                  top = svgY + 15;
                  isTooltipBelow = true;
                }

                if (top + tooltipHeight > height - padding) {
                  top = height - tooltipHeight - padding;
                }

                tooltipNode.classList.toggle('tooltip-below', isTooltipBelow);

                tooltipNode.style.left = `${left}px`;
                tooltipNode.style.top = `${top}px`;
                tooltipNode.style.visibility = 'visible';
                tooltipNode.style.opacity = '1';
              });
            }
          })
          .on('mouseleave', function(event, d) {
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
            d3.select(this)
              .style('stroke', 'none')
              .transition()
              .duration(150)
              .attr('r', enableBubbles && sizeScale && d.size !== undefined ? 
                sizeScale(d.size) || pointRadius : pointRadius);
          });
      }

      // Axis labels
      if (mergedXAxis.label) {
        g.append('text')
          .attr('class', 'db-scatterchart__axis-label db-scatterchart__axis-label--x')
          .attr('transform', `translate(${innerWidth / 2}, ${innerHeight + defaultMargin.bottom - 10})`)
          .style('text-anchor', 'middle')
          .text(mergedXAxis.label);
      }

      if (mergedYAxis.label) {
        g.append('text')
          .attr('class', 'db-scatterchart__axis-label db-scatterchart__axis-label--y')
          .attr('transform', 'rotate(-90)')
          .attr('y', 0 - defaultMargin.left + 20)
          .attr('x', 0 - (innerHeight / 2))
          .style('text-anchor', 'middle')
          .text(mergedYAxis.label);
      }

      // Title
      if (title) {
        svg.append('text')
          .attr('class', 'db-scatterchart__title')
          .attr('x', width / 2)
          .attr('y', 25)
          .style('text-anchor', 'middle')
          .text(title);
      }

    }, [data, width, height, xScale, yScale, sizeScale, trendLineData, mergedGrid.show, showTrendLine,
        enableBubbles, pointRadius, pointOpacity, showTooltip, color, mergedXAxis.label, mergedYAxis.label,
        title, defaultMargin, innerWidth, innerHeight, defaultFormatX, defaultFormatY, defaultFormatTooltip,
        mergedAnimation.enabled, mergedAnimation.duration, trendLineColor]);

    if (!data.length) {
      return (
        <div
          ref={ref}
          className={clsx(
            'db-scatterchart',
            'db-scatterchart--empty',
            className
          )}
          {...props}
        >
          <div className="db-scatterchart__empty-state">
            <p>No data available</p>
          </div>
        </div>
      );
    }

    // Context value for compound components
    const contextValue: ScatterChartContextValue = {
      data,
      width,
      height,
      color,
      xScale,
      yScale,
      svgRef,
    };

    return (
      <ScatterChartContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={clsx(
            'db-scatterchart',
            `db-scatterchart--${variant}`,
            `db-scatterchart--${color}`,
            {
              'db-scatterchart--bubbles': enableBubbles,
              'db-scatterchart--trend': showTrendLine,
              'db-scatterchart--optimized': optimized,
              'db-scatterchart--keyboard': keyboard,
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
          aria-label={ariaLabel || `Scatter plot with ${data.length} data points`}
          tabIndex={keyboard ? 0 : undefined}
          {...props}
        >
          <svg
            ref={svgRef}
            className="db-scatterchart__svg"
            width={width}
            height={height}
            role="presentation"
            aria-hidden={keyboard}
          />
          {showTooltip && (
            <div
              ref={tooltipRef}
              className="db-scatterchart__tooltip"
              role="tooltip"
              aria-live="polite"
            />
          )}
        </div>
      </ScatterChartContext.Provider>
    );
  }
);

ScatterChart.displayName = 'ScatterChart';
