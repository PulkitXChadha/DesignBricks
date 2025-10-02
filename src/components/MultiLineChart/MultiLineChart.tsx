import React, { HTMLAttributes, forwardRef, useEffect, useRef, useMemo, createContext, useContext, useState } from 'react';
import clsx from 'clsx';
import * as d3 from 'd3';
import './MultiLineChart.css';
import { 
  TooltipConfig, 
  ChartTooltip, 
  DefaultTooltipContent, 
  CustomTooltipProps,
  TooltipPosition 
} from '../shared/ChartTooltip';

// Chart Context for compound components
interface MultiLineChartContextValue {
  series: MultiLineChartSeries[];
  width: number;
  height: number;
  xScale?: any;
  yScale?: any;
  svgRef?: React.RefObject<SVGSVGElement>;
}

export const MultiLineChartContext = createContext<MultiLineChartContextValue | null>(null);

export const useMultiLineChart = () => {
  const context = useContext(MultiLineChartContext);
  if (!context) {
    throw new Error('useMultiLineChart must be used within a MultiLineChart component');
  }
  return context;
};

export interface MultiLineChartDataPoint {
  /** X-axis value (can be date, number, or string) */
  x: Date | number | string;
  /** Y-axis value */
  y: number;
  /** Optional label for the data point */
  label?: string;
  /** Optional metadata for the data point */
  metadata?: Record<string, any>;
}

export interface MultiLineChartSeries {
  /** Unique identifier for the series */
  id: string;
  /** Display name for the series */
  name: string;
  /** Data points for this series */
  data: MultiLineChartDataPoint[];
  /** Color scheme for this series */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral';
  /** Custom color override */
  customColor?: string;
  /** Show/hide this series */
  visible?: boolean;
  /** Line style for this series */
  strokeDasharray?: string;
  /** Line width for this series */
  strokeWidth?: number;
}

// Enhanced configuration interfaces
export interface MultiLineChartAxis {
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

export interface MultiLineChartGrid {
  /** Show grid */
  show?: boolean;
  /** Grid line style */
  strokeDasharray?: string;
  /** Grid opacity */
  opacity?: number;
}

export interface MultiLineChartTheme {
  /** Primary color scheme */
  colorScheme?: 'light' | 'dark' | 'auto';
  /** Custom CSS variables */
  cssVars?: Record<string, string>;
}

export interface MultiLineChartAnimation {
  /** Enable animations */
  enabled?: boolean;
  /** Animation duration in ms */
  duration?: number;
  /** Animation easing */
  easing?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';
}

export interface MultiLineChartLegend {
  /** Show legend */
  show?: boolean;
  /** Legend position */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /** Legend orientation */
  orientation?: 'horizontal' | 'vertical';
}

export interface MultiLineChartProps extends Omit<HTMLAttributes<HTMLDivElement>, 'data'> {
  /** Array of data series to display */
  series: MultiLineChartSeries[];
  /** Chart width */
  width?: number;
  /** Chart height */
  height?: number;
  /** Chart variant */
  variant?: 'default' | 'minimal' | 'detailed';
  /** Chart title */
  title?: string;
  /** Curve type */
  curve?: 'linear' | 'smooth' | 'step';
  
  /** X-axis configuration */
  xAxis?: MultiLineChartAxis;
  /** Y-axis configuration */
  yAxis?: MultiLineChartAxis;
  /** Grid configuration */
  grid?: MultiLineChartGrid;
  /** Theme configuration */
  theme?: MultiLineChartTheme;
  /** Animation configuration */
  animation?: MultiLineChartAnimation;
  /** Legend configuration */
  legend?: MultiLineChartLegend;
  
  /** Show data points on the lines */
  showPoints?: boolean;
  /** Enhanced tooltip configuration */
  tooltip?: TooltipConfig<Array<{ series: MultiLineChartSeries; dataPoint: MultiLineChartDataPoint; index: number }>>;
  /** @deprecated Use tooltip.enabled instead */
  showTooltip?: boolean;
  /** @deprecated Use tooltip.content instead */
  formatTooltip?: (dataPoints: Array<{ series: MultiLineChartSeries; dataPoint: MultiLineChartDataPoint; index: number }>) => string;
  /** Show percentage change in tooltip */
  showPercentageChange?: boolean;
  
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

// Default color palette for series
const DEFAULT_COLORS = {
  primary: '#2272B4',
  secondary: '#04867D', 
  success: '#3BA65E',
  warning: '#DE7921',
  error: '#E65B77',
  info: '#1890FF',
  neutral: '#8396A5',
};

const SERIES_COLORS = [
  '#2272B4', // primary
  '#04867D', // secondary
  '#3BA65E', // success
  '#DE7921', // warning
  '#E65B77', // error
  '#1890FF', // info
  '#8396A5', // neutral
  '#722ED1', // purple
  '#FA8C16', // orange
  '#13C2C2', // cyan
];

export const MultiLineChart = forwardRef<HTMLDivElement, MultiLineChartProps>(
  (
    {
      series = [],
      width = 600,
      height = 400,
      variant = 'default',
      title,
      curve = 'smooth',
      xAxis,
      yAxis,
      grid,
      theme,
      animation,
      legend,
      showPoints = true,
      tooltip,
      showTooltip = true,
      formatTooltip,
      showPercentageChange = false,
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
      dataPoints: Array<{ series: MultiLineChartSeries; dataPoint: MultiLineChartDataPoint; index: number }>;
    } | null>(null);

    // Filter visible series
    const visibleSeries = useMemo(() => 
      series.filter(s => s.visible !== false)
    , [series]);

    // Modern configuration with sensible defaults
    const mergedXAxis: MultiLineChartAxis = {
      show: true,
      position: 'bottom',
      variant: variant === 'minimal' ? 'minimal' : 'default',
      tickCount: variant === 'detailed' ? 8 : 6,
      ...xAxis,
    };

    const mergedYAxis: MultiLineChartAxis = {
      show: true,
      position: 'left',
      variant: variant === 'minimal' ? 'minimal' : 'default',
      tickCount: variant === 'detailed' ? 8 : 6,
      ...yAxis,
    };

    const mergedGrid: MultiLineChartGrid = {
      show: variant !== 'minimal',
      strokeDasharray: variant === 'detailed' ? '1,3' : '2,2',
      opacity: variant === 'detailed' ? 0.2 : 0.3,
      ...grid,
    };

    const mergedTheme: MultiLineChartTheme = {
      colorScheme: 'auto',
      cssVars: {
        '--chart-line-width': variant === 'detailed' ? '3px' : '2px',
        '--chart-point-size': variant === 'detailed' ? '6px' : '4px',
      },
      ...theme,
    };

    const mergedAnimation: MultiLineChartAnimation = {
      enabled: variant === 'detailed',
      duration: variant === 'detailed' ? 300 : 150,
      easing: 'ease-out',
      ...animation,
    };

    const mergedLegend: MultiLineChartLegend = {
      show: visibleSeries.length > 1,
      position: 'bottom',
      orientation: 'horizontal',
      ...legend,
    };

    // Merge tooltip configuration with backward compatibility
    const mergedTooltip: TooltipConfig<Array<{ series: MultiLineChartSeries; dataPoint: MultiLineChartDataPoint; index: number }>> = {
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
    };

    const defaultMargin = {
      top: title ? 40 : 20,
      right: 20,
      bottom: (mergedXAxis.label ? 60 : 40) + (mergedLegend.show && mergedLegend.position === 'bottom' ? 40 : 0),
      left: mergedYAxis.label ? 80 : 60,
    };

    const innerWidth = width - defaultMargin.left - defaultMargin.right;
    const innerHeight = height - defaultMargin.top - defaultMargin.bottom;

    // Get all data points for scale calculation
    const allDataPoints = useMemo(() => {
      return visibleSeries.flatMap(s => s.data);
    }, [visibleSeries]);

    // Memoize scales and line generator
    const { xScale, yScale, lineGenerator } = useMemo(() => {
      if (!allDataPoints.length) {
        return { xScale: null, yScale: null, lineGenerator: null };
      }

      // Determine scale types based on data
      const firstX = allDataPoints[0].x;
      const isDateScale = firstX instanceof Date;
      const isNumericScale = typeof firstX === 'number';

      let xScale: any;
      if (isDateScale) {
        xScale = d3.scaleTime()
          .domain(d3.extent(allDataPoints, d => d.x as Date) as [Date, Date])
          .range([0, innerWidth]);
      } else if (isNumericScale) {
        xScale = d3.scaleLinear()
          .domain(d3.extent(allDataPoints, d => d.x as number) as [number, number])
          .range([0, innerWidth]);
      } else {
        const uniqueXValues = Array.from(new Set(allDataPoints.map(d => d.x as string)));
        xScale = d3.scaleBand()
          .domain(uniqueXValues)
          .range([0, innerWidth])
          .padding(0.1);
      }

      const yScale = d3.scaleLinear()
        .domain(d3.extent(allDataPoints, d => d.y) as [number, number])
        .nice()
        .range([innerHeight, 0]);

      // Line generator
      const curveType = curve === 'smooth' ? d3.curveCardinal :
                       curve === 'step' ? d3.curveStepAfter :
                       d3.curveLinear;

      const lineGenerator = d3.line<MultiLineChartDataPoint>()
        .x(d => xScale(d.x) || 0)
        .y(d => yScale(d.y) || 0)
        .curve(curveType);

      return { xScale, yScale, lineGenerator };
    }, [allDataPoints, innerWidth, innerHeight, curve]);

    // Default formatters
    const defaultFormatX = useMemo(() => {
      if (mergedXAxis.tickFormatter) return mergedXAxis.tickFormatter;
      const firstX = allDataPoints[0]?.x;
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
    }, [allDataPoints, mergedXAxis.tickFormatter]);

    const defaultFormatY = mergedYAxis.tickFormatter || d3.format('.2f');

    // Get color for series
    const getSeriesColor = (series: MultiLineChartSeries, index: number) => {
      if (series.customColor) return series.customColor;
      if (series.color && DEFAULT_COLORS[series.color]) return DEFAULT_COLORS[series.color];
      return SERIES_COLORS[index % SERIES_COLORS.length];
    };

    const defaultFormatTooltip = formatTooltip || ((dataPoints: Array<{ series: MultiLineChartSeries; dataPoint: MultiLineChartDataPoint; index: number }>) => {
      if (!dataPoints.length) return '';
      
      const xFormatted = defaultFormatX(dataPoints[0].dataPoint.x);
      
      let tooltipHtml = `<div class="db-multilinechart__tooltip-content">`;
      tooltipHtml += `<div class="db-multilinechart__tooltip-date">${xFormatted}</div>`;
      
      dataPoints.forEach(({ series, dataPoint, index }, i) => {
        const yFormatted = defaultFormatY(dataPoint.y);
        const seriesColor = getSeriesColor(series, visibleSeries.indexOf(series));
        
        tooltipHtml += `<div class="db-multilinechart__tooltip-series">`;
        tooltipHtml += `<div class="db-multilinechart__tooltip-series-indicator" style="background-color: ${seriesColor}"></div>`;
        tooltipHtml += `<span class="db-multilinechart__tooltip-series-name">${series.name}:</span>`;
        tooltipHtml += `<span class="db-multilinechart__tooltip-series-value">${yFormatted}</span>`;
        tooltipHtml += `</div>`;
      });
      
      tooltipHtml += `</div>`;
      return tooltipHtml;
    });

    useEffect(() => {
      if (!svgRef.current || !visibleSeries.length || !xScale || !yScale || !lineGenerator) {
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
          .attr('class', 'db-multilinechart__grid db-multilinechart__grid--x')
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
          .attr('class', 'db-multilinechart__grid db-multilinechart__grid--y')
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
          .attr('class', `db-multilinechart__axis db-multilinechart__axis--x db-multilinechart__axis--${mergedXAxis.variant}`)
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
          .attr('class', `db-multilinechart__axis db-multilinechart__axis--y db-multilinechart__axis--${mergedYAxis.variant}`);

        const yAxisCall = d3.axisLeft(yScale);
        if (mergedYAxis.tickCount) yAxisCall.ticks(mergedYAxis.tickCount);
        if (mergedYAxis.tickFormatter) {
          yAxisCall.tickFormat((d, i) => mergedYAxis.tickFormatter!(d as number));
        } else {
          yAxisCall.tickFormat((d, i) => defaultFormatY(d as number));
        }
        
        yAxisGroup.call(yAxisCall);
      }

      // Draw lines for each series
      visibleSeries.forEach((series, seriesIndex) => {
        const seriesColor = getSeriesColor(series, seriesIndex);
        
        // Line path
        g.append('path')
          .datum(series.data)
          .attr('class', `db-multilinechart__line db-multilinechart__line--series-${seriesIndex}`)
          .attr('d', lineGenerator)
          .style('stroke', seriesColor)
          .style('stroke-width', series.strokeWidth || (variant === 'detailed' ? 3 : 2))
          .style('stroke-dasharray', series.strokeDasharray || 'none');

        // Data points
        if (showPoints) {
          const points = g.selectAll(`.db-multilinechart__point--series-${seriesIndex}`)
            .data(series.data)
            .enter()
            .append('circle')
            .attr('class', `db-multilinechart__point db-multilinechart__point--series-${seriesIndex}`)
            .attr('cx', d => xScale(d.x) || 0)
            .attr('cy', d => yScale(d.y) || 0)
            .attr('r', variant === 'detailed' ? 5 : 4)
            .style('fill', seriesColor);

          // Add keyboard navigation attributes conditionally
          if (keyboard) {
            points
              .attr('tabindex', 0)
              .attr('role', 'button')
              .attr('aria-label', (d, i) => `${series.name} data point ${i + 1}: ${defaultFormatX(d.x)}, ${defaultFormatY(d.y)}`)
              .on('focus', function(event: any, d: any) {
                const index = series.data.indexOf(d);
                if (mergedTooltip.enabled) {
                  // For keyboard focus, show tooltip at the data point position
                  const pointX = xScale!(d.x) || 0;
                  const pointY = yScale!(d.y) || 0;
                  const dataPoints = [{ series, dataPoint: d, index }];
                  setTooltipPosition({ x: pointX + defaultMargin.left, y: pointY + defaultMargin.top });
                  setTooltipData({ dataPoints });
                  setTooltipVisible(true);
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
      });

      // Enhanced tooltip functionality
      if (mergedTooltip.enabled) {
        let tooltipTimer: number | null = null;
        let hideTimer: number | null = null;
        
        // Vertical line indicator
        const verticalLine = g.append('line')
          .attr('class', 'db-multilinechart__vertical-line')
          .attr('y1', 0)
          .attr('y2', innerHeight)
          .style('opacity', 0);

        // Hover circles for each series
        const hoverCircles = visibleSeries.map((series, seriesIndex) => {
          const seriesColor = getSeriesColor(series, seriesIndex);
          return g.append('circle')
            .attr('class', `db-multilinechart__hover-circle db-multilinechart__hover-circle--series-${seriesIndex}`)
            .attr('r', 6)
            .style('fill', seriesColor)
            .style('opacity', 0);
        });

        // Invisible overlay for mouse events
        g.append('rect')
          .attr('class', 'db-multilinechart__overlay')
          .attr('width', innerWidth)
          .attr('height', innerHeight)
          .style('fill', 'none')
          .style('pointer-events', 'all')
          .on('mousemove', function(event) {
            const [mouseX] = d3.pointer(event);
            
            // Find closest data points from each series
            const closestPointsData: Array<{ series: MultiLineChartSeries; dataPoint: MultiLineChartDataPoint; index: number; distance: number }> = [];

            visibleSeries.forEach(series => {
              let closestPoint = series.data[0];
              let closestIndex = 0;
              let minDistance = Math.abs((xScale(series.data[0]?.x) || 0) - mouseX);
              
              series.data.forEach((d, i) => {
                const xPos = xScale(d.x) || 0;
                const distance = Math.abs(xPos - mouseX);
                if (distance < minDistance) {
                  minDistance = distance;
                  closestPoint = d;
                  closestIndex = i;
                }
              });

              if (closestPoint) {
                closestPointsData.push({
                  series,
                  dataPoint: closestPoint,
                  index: closestIndex,
                  distance: minDistance
                });
              }
            });

            if (closestPointsData.length > 0) {
              // Use the X position from the closest point overall
              const overallClosest = closestPointsData.reduce((prev, current) => 
                current.distance < prev.distance ? current : prev
              );
              const pointX = xScale(overallClosest.dataPoint.x) || 0;

              // Show visual indicators
              verticalLine
                .style('opacity', 1)
                .attr('x1', pointX)
                .attr('x2', pointX);

              // Show hover circles for each series at this X position
              closestPointsData.forEach(({ series, dataPoint }, index) => {
                const pointY = yScale(dataPoint.y) || 0;
                hoverCircles[visibleSeries.indexOf(series)]
                  .style('opacity', 1)
                  .attr('cx', pointX)
                  .attr('cy', pointY);
              });

              // Clear hide timer
              if (hideTimer) {
                clearTimeout(hideTimer);
                hideTimer = null;
              }

              // Apply show delay
              if (mergedTooltip.showDelay && mergedTooltip.showDelay > 0) {
                if (tooltipTimer) clearTimeout(tooltipTimer);
                tooltipTimer = window.setTimeout(() => {
                  showTooltipForData(closestPointsData, pointX + defaultMargin.left, (yScale(overallClosest.dataPoint.y) || 0) + defaultMargin.top);
                }, mergedTooltip.showDelay);
              } else {
                showTooltipForData(closestPointsData, pointX + defaultMargin.left, (yScale(overallClosest.dataPoint.y) || 0) + defaultMargin.top);
              }
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
            hoverCircles.forEach(circle => circle.style('opacity', 0));
          });
      }

      // Helper function to show tooltip
      function showTooltipForData(dataPoints: Array<{ series: MultiLineChartSeries; dataPoint: MultiLineChartDataPoint; index: number; distance: number }>, containerX: number, containerY: number) {
        // Remove the distance property for the tooltip data
        const cleanedDataPoints = dataPoints.map(({ series, dataPoint, index }) => ({ series, dataPoint, index }));
        
        // containerX and containerY are already relative to the full chart container
        setTooltipPosition({ x: containerX, y: containerY });
        setTooltipData({ dataPoints: cleanedDataPoints });
        setTooltipVisible(true);
      }

      // Axis labels
      if (mergedXAxis.label) {
        g.append('text')
          .attr('class', 'db-multilinechart__axis-label db-multilinechart__axis-label--x')
          .attr('transform', `translate(${innerWidth / 2}, ${innerHeight + 40})`)
          .style('text-anchor', 'middle')
          .text(mergedXAxis.label);
      }

      if (mergedYAxis.label) {
        g.append('text')
          .attr('class', 'db-multilinechart__axis-label db-multilinechart__axis-label--y')
          .attr('transform', 'rotate(-90)')
          .attr('y', 0 - defaultMargin.left + 20)
          .attr('x', 0 - (innerHeight / 2))
          .style('text-anchor', 'middle')
          .text(mergedYAxis.label);
      }

      // Title
      if (title) {
        svg.append('text')
          .attr('class', 'db-multilinechart__title')
          .attr('x', width / 2)
          .attr('y', 25)
          .style('text-anchor', 'middle')
          .text(title);
      }

      // Legend
      if (mergedLegend.show && visibleSeries.length > 1) {
        const legendGroup = svg.append('g')
          .attr('class', 'db-multilinechart__legend')
          .attr('transform', `translate(${defaultMargin.left}, ${height - 30})`);

        const legendItems = legendGroup.selectAll('.db-multilinechart__legend-item')
          .data(visibleSeries)
          .enter()
          .append('g')
          .attr('class', 'db-multilinechart__legend-item')
          .attr('transform', (d, i) => `translate(${i * 120}, 0)`);

        legendItems.append('line')
          .attr('x1', 0)
          .attr('x2', 15)
          .attr('y1', 0)
          .attr('y2', 0)
          .style('stroke', (d, i) => getSeriesColor(d, i))
          .style('stroke-width', 2);

        legendItems.append('text')
          .attr('x', 20)
          .attr('y', 0)
          .attr('dy', '0.32em')
          .style('font-size', '12px')
          .style('fill', '#37444F')
          .text(d => d.name);
      }

    }, [visibleSeries, width, height, xScale, yScale, lineGenerator, mergedGrid.show, showPoints, showTooltip, 
        mergedXAxis.label, mergedYAxis.label, title, defaultMargin, innerWidth, innerHeight, 
        defaultFormatX, defaultFormatY, defaultFormatTooltip, mergedLegend.show]);

    if (!visibleSeries.length) {
      return (
        <div
          ref={ref}
          className={clsx(
            'db-multilinechart',
            'db-multilinechart--empty',
            className
          )}
          {...props}
        >
          <div className="db-multilinechart__empty-state">
            <p>No data available</p>
          </div>
        </div>
      );
    }

    // Context value for compound components
    const contextValue: MultiLineChartContextValue = {
      series: visibleSeries,
      width,
      height,
      xScale,
      yScale,
      svgRef,
    };

    return (
      <MultiLineChartContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={clsx(
            'db-multilinechart',
            `db-multilinechart--${variant}`,
            {
              'db-multilinechart--optimized': optimized,
              'db-multilinechart--keyboard': keyboard,
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
          aria-label={ariaLabel || `Multi-line chart with ${visibleSeries.length} data series`}
          {...props}
        >
          <svg
            ref={svgRef}
            className="db-multilinechart__svg"
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
              className={clsx('db-multilinechart__tooltip', mergedTooltip.className)}
              role="tooltip"
              aria-live="polite"
            >
              {mergedTooltip.component ? (
                <mergedTooltip.component
                  data={tooltipData.dataPoints}
                  chartDimensions={{ width, height }}
                />
              ) : mergedTooltip.content ? (
                <div 
                  dangerouslySetInnerHTML={{ 
                    __html: mergedTooltip.content(tooltipData.dataPoints) 
                  }} 
                />
              ) : (
                <div className="db-multilinechart__tooltip-content">
                  {tooltipData.dataPoints.length > 0 && (
                    <div className="db-chart-tooltip__label">
                      {defaultFormatX(tooltipData.dataPoints[0].dataPoint.x)}
                    </div>
                  )}
                  {tooltipData.dataPoints.map(({ series, dataPoint }, index) => (
                    <DefaultTooltipContent
                      key={`${series.name}-${index}`}
                      label={series.name}
                      value={defaultFormatY(dataPoint.y)}
                      color={getSeriesColor(series, visibleSeries.indexOf(series))}
                    />
                  ))}
                </div>
              )}
            </ChartTooltip>
          )}
          {/* Legacy tooltip support */}
          {showTooltip && !mergedTooltip.enabled && (
            <div
              ref={tooltipRef}
              className="db-multilinechart__tooltip"
              role="tooltip"
              aria-live="polite"
            />
          )}
        </div>
      </MultiLineChartContext.Provider>
    );
  }
);

MultiLineChart.displayName = 'MultiLineChart';
