import React, { HTMLAttributes, forwardRef, useEffect, useRef, useMemo, createContext, useContext, useState } from 'react';
import clsx from 'clsx';
import * as d3 from 'd3';
import './AreaChart.css';
import { 
  TooltipConfig, 
  ChartTooltip, 
  DefaultTooltipContent, 
  // CustomTooltipProps, // Commented out as not currently used
  TooltipPosition 
} from '../shared/ChartTooltip';

// Chart Context for compound components
interface AreaChartContextValue {
  data: AreaChartDataPoint[];
  width: number;
  height: number;
  color: AreaChartProps['color'];
  xScale?: any;
  yScale?: any;
  svgRef?: React.RefObject<SVGSVGElement>;
}

export const AreaChartContext = createContext<AreaChartContextValue | null>(null);

export const useAreaChart = () => {
  const context = useContext(AreaChartContext);
  if (!context) {
    throw new Error('useAreaChart must be used within a AreaChart component');
  }
  return context;
};

export interface AreaChartDataPoint {
  /** X-axis value (can be date, number, or string) */
  x: Date | number | string;
  /** Y-axis value */
  y: number;
  /** Optional label for the data point */
  label?: string;
  /** Optional metadata for the data point */
  metadata?: Record<string, any>;
}

// Enhanced configuration interfaces inspired by shadcn/ui patterns
export interface AreaChartAxis {
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
}

export interface AreaChartGrid {
  /** Show grid */
  show?: boolean;
  /** Grid line style */
  strokeDasharray?: string;
  /** Grid opacity */
  opacity?: number;
}

export interface AreaChartTheme {
  /** Primary color scheme */
  colorScheme?: 'light' | 'dark' | 'auto';
  /** Custom CSS variables */
  cssVars?: Record<string, string>;
}

export interface AreaChartAnimation {
  /** Enable animations */
  enabled?: boolean;
  /** Animation duration in ms */
  duration?: number;
  /** Animation easing */
  easing?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';
}

export interface AreaChartResponsive {
  /** Responsive breakpoints */
  breakpoints?: {
    sm?: Partial<AreaChartProps>;
    md?: Partial<AreaChartProps>;
    lg?: Partial<AreaChartProps>;
  };
}

export interface AreaChartProps extends Omit<HTMLAttributes<HTMLDivElement>, 'data'> {
  /** Chart data points */
  data: AreaChartDataPoint[];
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
  /** Curve type */
  curve?: 'linear' | 'smooth' | 'step';
  /** Area fill opacity */
  fillOpacity?: number;
  /** Show stroke line on top of area */
  showStroke?: boolean;
  
  /** X-axis configuration */
  xAxis?: AreaChartAxis;
  /** Y-axis configuration */
  yAxis?: AreaChartAxis;
  /** Grid configuration */
  grid?: AreaChartGrid;
  /** Theme configuration */
  theme?: AreaChartTheme;
  /** Animation configuration */
  animation?: AreaChartAnimation;
  /** Responsive configuration */
  responsive?: AreaChartResponsive;
  
  /** Show data points on the line */
  showPoints?: boolean;
  /** Enhanced tooltip configuration */
  tooltip?: TooltipConfig<AreaChartDataPoint>;
  /** @deprecated Use tooltip.enabled instead */
  showTooltip?: boolean;
  /** @deprecated Use tooltip.content instead */
  formatTooltip?: (_dataPoint: AreaChartDataPoint, _index?: number) => string;
  /** Show percentage change in tooltip */
  showPercentageChange?: boolean;
  /** Function to calculate percentage change */
  calculatePercentageChange?: (_current: AreaChartDataPoint, _previous: AreaChartDataPoint) => number;
  
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

export const AreaChart = forwardRef<HTMLDivElement, AreaChartProps>(
  (
    {
      data = [],
      width = 600,
      height = 400,
      variant = 'default',
      color = 'primary',
      title,
      curve = 'smooth',
      fillOpacity = 0.3,
      showStroke = true,
      xAxis,
      yAxis,
      grid,
      theme,
      animation,
      responsive: _responsive,
      showPoints = false,
      tooltip,
      showTooltip = true,
      formatTooltip,
      showPercentageChange = false,
      calculatePercentageChange,
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
    
    // Tooltip state for new system
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition>({ x: 0, y: 0 });
    const [tooltipData, setTooltipData] = useState<{
      dataPoint: AreaChartDataPoint;
      index: number;
    } | null>(null);

    // Modern configuration with sensible defaults
    const mergedXAxis: AreaChartAxis = {
      show: true,
      position: 'bottom',
      variant: variant === 'minimal' ? 'minimal' : 'default',
      tickCount: variant === 'detailed' ? 8 : 6,
      ...xAxis,
    };

    const mergedYAxis: AreaChartAxis = {
      show: true,
      position: 'left',
      variant: variant === 'minimal' ? 'minimal' : 'default',
      tickCount: variant === 'detailed' ? 8 : 6,
      ...yAxis,
    };

    const mergedGrid: AreaChartGrid = {
      show: variant !== 'minimal',
      strokeDasharray: variant === 'detailed' ? '1,3' : '2,2',
      opacity: variant === 'detailed' ? 0.2 : 0.3,
      ...grid,
    };

    const mergedTheme: AreaChartTheme = {
      colorScheme: 'auto',
      cssVars: {
        '--chart-area-opacity': fillOpacity?.toString() || '0.3',
        '--chart-stroke-width': variant === 'detailed' ? '3px' : '2px',
        '--chart-point-size': variant === 'detailed' ? '6px' : '4px',
      },
      ...theme,
    };

    const mergedAnimation: AreaChartAnimation = {
      enabled: variant === 'detailed',
      duration: variant === 'detailed' ? 300 : 150,
      easing: 'ease-out',
      ...animation,
    };

    // Merge tooltip configuration with backward compatibility
    const mergedTooltip: TooltipConfig<AreaChartDataPoint> = useMemo(() => ({
      enabled: tooltip?.enabled !== undefined ? tooltip.enabled : showTooltip,
      component: tooltip?.component,
      content: tooltip?.content || formatTooltip,
      style: tooltip?.style,
      placement: tooltip?.placement || { placement: 'auto', offset: { x: 0, y: -10 } },
      className: tooltip?.className,
      animationDuration: tooltip?.animationDuration || 200,
      showDelay: tooltip?.showDelay || 0,
      hideDelay: tooltip?.hideDelay || 0,
      ...tooltip,
    }), [tooltip, showTooltip, formatTooltip]);

    const defaultMargin = {
      top: title ? 40 : 20,
      right: 20,
      bottom: mergedXAxis.label ? 60 : 40,
      left: mergedYAxis.label ? 80 : 60,
    };

    const innerWidth = width - defaultMargin.left - defaultMargin.right;
    const innerHeight = height - defaultMargin.top - defaultMargin.bottom;

    // Memoize scales and generators
    const { xScale, yScale, areaGenerator, lineGenerator } = useMemo(() => {
      if (!data.length) {
        return { xScale: null, yScale: null, areaGenerator: null, lineGenerator: null };
      }

      // Determine scale types based on data
      const firstX = data[0].x;
      const isDateScale = firstX instanceof Date;
      const isNumericScale = typeof firstX === 'number';

      let xScale: any;
      if (isDateScale) {
        xScale = d3.scaleTime()
          .domain(d3.extent(data, d => d.x as Date) as [Date, Date])
          .range([0, innerWidth]);
      } else if (isNumericScale) {
        xScale = d3.scaleLinear()
          .domain(d3.extent(data, d => d.x as number) as [number, number])
          .range([0, innerWidth]);
      } else {
        xScale = d3.scaleBand()
          .domain(data.map(d => d.x as string))
          .range([0, innerWidth])
          .padding(0.1);
      }

      const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.y) as number])
        .nice()
        .range([innerHeight, 0]);

      // Curve type
      const curveType = curve === 'smooth' ? d3.curveCardinal :
                       curve === 'step' ? d3.curveStepAfter :
                       d3.curveLinear;

      // Area generator
      const areaGenerator = d3.area<AreaChartDataPoint>()
        .x(d => xScale(d.x) || 0)
        .y0(innerHeight)
        .y1(d => yScale(d.y) || 0)
        .curve(curveType);

      // Line generator for stroke
      const lineGenerator = showStroke ? d3.line<AreaChartDataPoint>()
        .x(d => xScale(d.x) || 0)
        .y(d => yScale(d.y) || 0)
        .curve(curveType) : null;

      return { xScale, yScale, areaGenerator, lineGenerator };
    }, [data, innerWidth, innerHeight, curve, showStroke]);

    // Default formatters
    const defaultFormatX = useMemo(() => {
      if (mergedXAxis.tickFormatter) return mergedXAxis.tickFormatter;
      const firstX = data[0]?.x;
      if (firstX instanceof Date) {
        const timeFormatter = d3.timeFormat('%b %d');
        return (value: any) => {
          if (value instanceof Date) {
            return timeFormatter(value);
          }
          return String(value);
        };
      }
      if (typeof firstX === 'number') {
        const numberFormatter = d3.format('.2f');
        return (value: any) => {
          if (typeof value === 'number') {
            return numberFormatter(value);
          }
          return String(value);
        };
      }
      return (value: any) => String(value);
    }, [data, mergedXAxis.tickFormatter]);

    const defaultFormatY = mergedYAxis.tickFormatter || d3.format('.2f');

    const defaultFormatTooltip = formatTooltip || ((dataPoint: AreaChartDataPoint, index?: number) => {
      const xFormatted = defaultFormatX(dataPoint.x);
      const yFormatted = defaultFormatY(dataPoint.y);
      
      let tooltipHtml = `<div class="db-areachart__tooltip-content">`;
      tooltipHtml += `<div class="db-areachart__tooltip-date">${xFormatted}</div>`;
      tooltipHtml += `<div class="db-areachart__tooltip-value">${yFormatted}</div>`;
      
      if (showPercentageChange && index !== undefined && index > 0) {
        const previousPoint = data[index - 1];
        let percentageChange = 0;
        
        if (calculatePercentageChange) {
          percentageChange = calculatePercentageChange(dataPoint, previousPoint);
        } else {
          // Default percentage change calculation
          percentageChange = ((dataPoint.y - previousPoint.y) / previousPoint.y) * 100;
        }
        
        const isPositive = percentageChange >= 0;
        const changeClass = isPositive ? 'positive' : 'negative';
        const changeSymbol = isPositive ? '+' : '';
        
        tooltipHtml += `<div class="db-areachart__tooltip-change db-areachart__tooltip-change--${changeClass}">`;
        tooltipHtml += `${changeSymbol}${percentageChange.toFixed(1)}%`;
        tooltipHtml += `</div>`;
      }
      
      tooltipHtml += `</div>`;
      return tooltipHtml;
    });

    useEffect(() => {
      if (!svgRef.current || !data.length || !xScale || !yScale || !areaGenerator) {
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
          .attr('class', 'db-areachart__grid db-areachart__grid--x')
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
          .attr('class', 'db-areachart__grid db-areachart__grid--y')
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
          .attr('class', `db-areachart__axis db-areachart__axis--x db-areachart__axis--${mergedXAxis.variant}`)
          .attr('transform', `translate(0,${innerHeight})`);

        const xAxisCall = d3.axisBottom(xScale);
        if (mergedXAxis.tickCount) xAxisCall.ticks(mergedXAxis.tickCount);
        if (mergedXAxis.tickFormatter) {
          xAxisCall.tickFormat((d, i) => mergedXAxis.tickFormatter!(d));
        } else {
          xAxisCall.tickFormat((d, i) => defaultFormatX(d));
        }
        
        xAxisGroup.call(xAxisCall);
      }

      // Y-axis
      if (mergedYAxis.show) {
        const yAxisGroup = g.append('g')
          .attr('class', `db-areachart__axis db-areachart__axis--y db-areachart__axis--${mergedYAxis.variant}`);

        const yAxisCall = d3.axisLeft(yScale);
        if (mergedYAxis.tickCount) yAxisCall.ticks(mergedYAxis.tickCount);
        if (mergedYAxis.tickFormatter) {
          yAxisCall.tickFormat((d, i) => mergedYAxis.tickFormatter!(d as number));
        } else {
          yAxisCall.tickFormat((d, i) => defaultFormatY(d as number));
        }
        
        yAxisGroup.call(yAxisCall);
      }

      // Area path
      g.append('path')
        .datum(data)
        .attr('class', `db-areachart__area db-areachart__area--${color}`)
        .attr('d', areaGenerator)
        .style('opacity', fillOpacity);

      // Stroke line
      if (showStroke && lineGenerator) {
        g.append('path')
          .datum(data)
          .attr('class', `db-areachart__stroke db-areachart__stroke--${color}`)
          .attr('d', lineGenerator);
      }

      // Data points
      if (showPoints) {
        const points = g.selectAll('.db-areachart__point')
          .data(data)
          .enter()
          .append('circle')
          .attr('class', `db-areachart__point db-areachart__point--${color}`)
          .attr('cx', d => xScale(d.x) || 0)
          .attr('cy', d => yScale(d.y) || 0)
          .attr('r', variant === 'detailed' ? 5 : 4);

        // Add keyboard navigation attributes conditionally
        if (keyboard) {
          points
            .attr('tabindex', 0)
            .attr('role', 'button')
            .attr('aria-label', (d, i) => `Data point ${i + 1}: ${defaultFormatX(d.x)}, ${defaultFormatY(d.y)}`)
            .on('focus', function(event: any, d: any) {
              const index = data.indexOf(d);
              if (mergedTooltip.enabled) {
                // For keyboard focus, show tooltip at the data point position
                const pointX = xScale!(d.x) || 0;
                const pointY = yScale!(d.y) || 0;
                showTooltipForData(d, index, pointX, pointY);
              }
            })
            .on('blur', function() {
              if (mergedTooltip.enabled) {
                setTooltipVisible(false);
                setTooltipData(null);
              }
            });
        }
      }

      // Enhanced tooltip functionality
      if (mergedTooltip.enabled) {
        let tooltipTimer: number | null = null;
        let hideTimer: number | null = null;
        
        // Vertical line indicator
        const verticalLine = g.append('line')
          .attr('class', 'db-areachart__vertical-line')
          .attr('y1', 0)
          .attr('y2', innerHeight)
          .style('opacity', 0);

        // Hover circle
        const hoverCircle = g.append('circle')
          .attr('class', `db-areachart__hover-circle db-areachart__hover-circle--${color}`)
          .attr('r', 6)
          .style('opacity', 0);

        // Invisible overlay for mouse events
        g.append('rect')
          .attr('class', 'db-areachart__overlay')
          .attr('width', innerWidth)
          .attr('height', innerHeight)
          .style('fill', 'none')
          .style('pointer-events', 'all')
          .on('mousemove', function(event) {
            const [mouseX] = d3.pointer(event);
            
            // Find closest data point
            let closestPoint = data[0];
            let closestIndex = 0;
            let minDistance = Math.abs((xScale(data[0].x) || 0) - mouseX);
            
            data.forEach((d, i) => {
              const xPos = xScale(d.x) || 0;
              const distance = Math.abs(xPos - mouseX);
              if (distance < minDistance) {
                minDistance = distance;
                closestPoint = d;
                closestIndex = i;
              }
            });

            const pointX = xScale(closestPoint.x) || 0;
            const pointY = yScale(closestPoint.y) || 0;

            // Show visual indicators
            verticalLine
              .style('opacity', 1)
              .attr('x1', pointX)
              .attr('x2', pointX);

            hoverCircle
              .style('opacity', 1)
              .attr('cx', pointX)
              .attr('cy', pointY);

            // Clear hide timer
            if (hideTimer) {
              clearTimeout(hideTimer);
              hideTimer = null;
            }

            // Apply show delay
            if (mergedTooltip.showDelay && mergedTooltip.showDelay > 0) {
              if (tooltipTimer) clearTimeout(tooltipTimer);
              tooltipTimer = window.setTimeout(() => {
                showTooltipForData(closestPoint, closestIndex, pointX, pointY);
              }, mergedTooltip.showDelay);
            } else {
              showTooltipForData(closestPoint, closestIndex, pointX, pointY);
            }
          })
          .on('mouseout', () => {
            // Clear show timer
            if (tooltipTimer) {
              clearTimeout(tooltipTimer);
              tooltipTimer = null;
            }

            // Apply hide delay
            if (mergedTooltip.hideDelay && mergedTooltip.hideDelay > 0) {
              hideTimer = window.setTimeout(() => {
                setTooltipVisible(false);
                setTooltipData(null);
              }, mergedTooltip.hideDelay);
            } else {
              setTooltipVisible(false);
              setTooltipData(null);
            }
            
            verticalLine.style('opacity', 0);
            hoverCircle.style('opacity', 0);
          });
      }

      // Helper function to show tooltip
      function showTooltipForData(dataPoint: AreaChartDataPoint, index: number, svgX: number, svgY: number) {
        // Convert SVG coordinates to container coordinates by adding the margins
        const containerX = svgX + defaultMargin.left;
        const containerY = svgY + defaultMargin.top;
        setTooltipPosition({ x: containerX, y: containerY });
        setTooltipData({ dataPoint, index });
        setTooltipVisible(true);
      }

      // Axis labels
      if (mergedXAxis.label) {
        g.append('text')
          .attr('class', 'db-areachart__axis-label db-areachart__axis-label--x')
          .attr('transform', `translate(${innerWidth / 2}, ${innerHeight + defaultMargin.bottom - 10})`)
          .style('text-anchor', 'middle')
          .text(mergedXAxis.label);
      }

      if (mergedYAxis.label) {
        g.append('text')
          .attr('class', 'db-areachart__axis-label db-areachart__axis-label--y')
          .attr('transform', 'rotate(-90)')
          .attr('y', 0 - defaultMargin.left + 20)
          .attr('x', 0 - (innerHeight / 2))
          .style('text-anchor', 'middle')
          .text(mergedYAxis.label);
      }

      // Title
      if (title) {
        svg.append('text')
          .attr('class', 'db-areachart__title')
          .attr('x', width / 2)
          .attr('y', 25)
          .style('text-anchor', 'middle')
          .text(title);
      }

    }, [data, width, height, xScale, yScale, areaGenerator, lineGenerator, mergedGrid.show, showPoints, mergedTooltip, showStroke,
        color, mergedXAxis.label, mergedYAxis.label, title, defaultMargin, innerWidth, innerHeight, fillOpacity,
        defaultFormatX, defaultFormatY, defaultFormatTooltip, showPercentageChange, calculatePercentageChange]);

    if (!data.length) {
      return (
        <div
          ref={ref}
          className={clsx(
            'db-areachart',
            'db-areachart--empty',
            className
          )}
          {...props}
        >
          <div className="db-areachart__empty-state">
            <p>No data available</p>
          </div>
        </div>
      );
    }

    // Context value for compound components
    const contextValue: AreaChartContextValue = {
      data,
      width,
      height,
      color,
      xScale,
      yScale,
      svgRef,
    };

    return (
      <AreaChartContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={clsx(
            'db-areachart',
            `db-areachart--${variant}`,
            `db-areachart--${color}`,
            {
              'db-areachart--optimized': optimized,
              'db-areachart--keyboard': keyboard,
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
          aria-label={ariaLabel || `Area chart with ${data.length} data points`}
          {...props}
        >
          <svg
            ref={svgRef}
            className="db-areachart__svg"
            width={width}
            height={height}
            role="presentation"
            aria-hidden="true"
          />
          {mergedTooltip.enabled && tooltipData && (
            <ChartTooltip
              visible={tooltipVisible}
              position={tooltipPosition}
              tooltipStyle={mergedTooltip.style}
              placement={mergedTooltip.placement}
              animationDuration={mergedTooltip.animationDuration}
              containerDimensions={{ width, height }}
              className={clsx('db-areachart__tooltip', mergedTooltip.className)}
              role="tooltip"
              aria-live="polite"
            >
              {mergedTooltip.component ? (
                <mergedTooltip.component
                  data={tooltipData.dataPoint}
                  index={tooltipData.index}
                  chartDimensions={{ width, height }}
                />
              ) : mergedTooltip.content ? (
                <div 
                  dangerouslySetInnerHTML={{ 
                    __html: mergedTooltip.content(
                      tooltipData.dataPoint, 
                      tooltipData.index
                    ) 
                  }} 
                />
              ) : (
                <DefaultTooltipContent
                  label={defaultFormatX(tooltipData.dataPoint.x)}
                  value={defaultFormatY(tooltipData.dataPoint.y)}
                  color={`var(--chart-${color})`}
                />
              )}
            </ChartTooltip>
          )}
          {/* Legacy tooltip support */}
          {showTooltip && !mergedTooltip.enabled && (
            <div
              ref={tooltipRef}
              className="db-areachart__tooltip"
              role="tooltip"
              aria-live="polite"
            />
          )}
        </div>
      </AreaChartContext.Provider>
    );
  }
);

AreaChart.displayName = 'AreaChart';
