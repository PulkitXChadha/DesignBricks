import React, { HTMLAttributes, forwardRef, useEffect, useRef, useMemo, useCallback, createContext, useContext, useState } from 'react';
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

export interface AreaChartSeries {
  /** Unique identifier for the series */
  id: string;
  /** Display name for the series */
  name: string;
  /** Data points for this series */
  data: AreaChartDataPoint[];
  /** Color override for this specific series */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  /** Custom hex color */
  customColor?: string;
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
  tickFormatter?: (_value: any) => string;
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
  /** Chart data points (for single series) */
  data?: AreaChartDataPoint[];
  /** Multiple series data (for stacked or multi-series charts) */
  series?: AreaChartSeries[];
  /** Enable stacked layout for multiple series */
  stacked?: boolean;
  /** Chart width */
  width?: number;
  /** Chart height */
  height?: number;
  /** Chart variant */
  variant?: 'default' | 'minimal' | 'detailed';
  /** Color scheme (for single series) */
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
      series,
      stacked = false,
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
      seriesData?: Array<{ name: string; value: number; color: string }>;
    } | null>(null);

    // Normalize data to series format
    const normalizedSeries = useMemo<AreaChartSeries[]>(() => {
      if (series && series.length > 0) {
        return series;
      }
      if (data && data.length > 0) {
        return [{
          id: 'default',
          name: 'Series 1',
          data,
          color,
        }];
      }
      return [];
    }, [series, data, color]);

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

    // Animation configuration (currently not used in rendering)
    // const mergedAnimation: AreaChartAnimation = {
    //   enabled: variant === 'detailed',
    //   duration: variant === 'detailed' ? 300 : 150,
    //   easing: 'ease-out',
    //   ...animation,
    // };

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

    const defaultMargin = useMemo(() => ({
      top: title ? 40 : 20,
      right: 20,
      bottom: mergedXAxis.label ? 60 : 40,
      left: mergedYAxis.label ? 80 : 60,
    }), [title, mergedXAxis.label, mergedYAxis.label]);

    const innerWidth = width - defaultMargin.left - defaultMargin.right;
    const innerHeight = height - defaultMargin.top - defaultMargin.bottom;

    // Prepare stacked data if needed
    const stackedData = useMemo(() => {
      if (!stacked || normalizedSeries.length === 0) return null;
      
      // Get all unique x values across all series
      const allXValues = Array.from(
        new Set(normalizedSeries.flatMap(s => s.data.map(d => d.x)))
      ).sort((a, b) => {
        if (a instanceof Date && b instanceof Date) return a.getTime() - b.getTime();
        if (typeof a === 'number' && typeof b === 'number') return a - b;
        return String(a).localeCompare(String(b));
      });

      // Create a data structure for d3.stack
      const stackData = allXValues.map(x => {
        const point: any = { x };
        normalizedSeries.forEach((s) => {
          const dataPoint = s.data.find(d => d.x === x);
          point[s.id] = dataPoint ? dataPoint.y : 0;
        });
        return point;
      });

      // Use d3.stack to calculate cumulative positions
      const stack = d3.stack()
        .keys(normalizedSeries.map(s => s.id))
        .order(d3.stackOrderNone)
        .offset(d3.stackOffsetNone);

      return stack(stackData);
    }, [stacked, normalizedSeries]);

    // Memoize scales and generators
    const { xScale, yScale, areaGenerators, lineGenerators } = useMemo(() => {
      if (normalizedSeries.length === 0) {
        return { xScale: null, yScale: null, areaGenerators: [], lineGenerators: [] };
      }

      const allData = normalizedSeries.flatMap(s => s.data);
      
      // Determine scale types based on data
      const firstX = allData[0]?.x;
      const isDateScale = firstX instanceof Date;
      const isNumericScale = typeof firstX === 'number';

      let xScale: any;
      if (isDateScale) {
        xScale = d3.scaleTime()
          .domain(d3.extent(allData, d => d.x as Date) as [Date, Date])
          .range([0, innerWidth]);
      } else if (isNumericScale) {
        xScale = d3.scaleLinear()
          .domain(d3.extent(allData, d => d.x as number) as [number, number])
          .range([0, innerWidth]);
      } else {
        const uniqueX = Array.from(new Set(allData.map(d => d.x as string)));
        xScale = d3.scaleBand()
          .domain(uniqueX)
          .range([0, innerWidth])
          .padding(0.1);
      }

      // Calculate Y domain based on stacked or regular data
      let yMax: number;
      if (stacked && stackedData) {
        // For stacked, find max of cumulative values
        yMax = d3.max(stackedData[stackedData.length - 1], d => d[1]) as number;
      } else {
        // For regular, find max across all series
        yMax = d3.max(allData, d => d.y) as number;
      }

      const yScale = d3.scaleLinear()
        .domain([0, yMax])
        .nice()
        .range([innerHeight, 0]);

      // Curve type
      const curveType = curve === 'smooth' ? d3.curveCardinal :
                       curve === 'step' ? d3.curveStepAfter :
                       d3.curveLinear;

      // Create area and line generators for each series
      const areaGenerators = normalizedSeries.map((_series) => {
        if (stacked && stackedData) {
          // For stacked areas, use the stacked data
          return d3.area<any>()
            .x((d: any) => xScale(d.data.x) || 0)
            .y0((d: any) => yScale(d[0]) || 0)
            .y1((d: any) => yScale(d[1]) || 0)
            .curve(curveType);
        } else {
          // For non-stacked areas
          return d3.area<AreaChartDataPoint>()
            .x(d => xScale(d.x) || 0)
            .y0(innerHeight)
            .y1(d => yScale(d.y) || 0)
            .curve(curveType);
        }
      });

      // Line generators for stroke
      const lineGenerators = showStroke ? normalizedSeries.map((_series) => {
        if (stacked && stackedData) {
          return d3.line<any>()
            .x((d: any) => xScale(d.data.x) || 0)
            .y((d: any) => yScale(d[1]) || 0)
            .curve(curveType);
        } else {
          return d3.line<AreaChartDataPoint>()
            .x(d => xScale(d.x) || 0)
            .y(d => yScale(d.y) || 0)
            .curve(curveType);
        }
      }) : [];

      return { xScale, yScale, areaGenerators, lineGenerators };
    }, [normalizedSeries, innerWidth, innerHeight, curve, showStroke, stacked, stackedData]);

    // Color mapping helper
    const getSeriesColor = useCallback((series: AreaChartSeries) => {
      if (series.customColor) return series.customColor;
      const colorScheme = series.color || 'primary';
      return colorScheme;
    }, []);

    // Default formatters
    const defaultFormatX = useMemo(() => {
      if (mergedXAxis.tickFormatter) return mergedXAxis.tickFormatter;
      const firstX = normalizedSeries[0]?.data[0]?.x;
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
    }, [mergedXAxis.tickFormatter, normalizedSeries]);

    const defaultFormatY = mergedYAxis.tickFormatter || d3.format('.2f');

    const defaultFormatTooltip = useMemo(() => formatTooltip || ((dataPoint: AreaChartDataPoint, _index?: number) => {
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
    }), [formatTooltip, defaultFormatX, defaultFormatY]);

    useEffect(() => {
      if (!svgRef.current || normalizedSeries.length === 0 || !xScale || !yScale || areaGenerators.length === 0) {
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
          xAxisCall.tickFormat((d) => mergedXAxis.tickFormatter!(d));
        } else {
          xAxisCall.tickFormat((d) => defaultFormatX(d));
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
          yAxisCall.tickFormat((d) => mergedYAxis.tickFormatter!(d as number));
        } else {
          yAxisCall.tickFormat((d) => defaultFormatY(d as number));
        }
        
        yAxisGroup.call(yAxisCall);
      }

      // Render areas for each series
      normalizedSeries.forEach((series, idx) => {
        const seriesColor = getSeriesColor(series);
        const areaGen = areaGenerators[idx];
        const lineGen = lineGenerators[idx];
        const seriesData = stacked && stackedData ? stackedData[idx] : series.data;

        // Area path
        const areaPath = g.append('path')
          .datum(seriesData)
          .attr('class', `db-areachart__area db-areachart__area--${seriesColor}`)
          .attr('d', areaGen as any)
          .style('opacity', fillOpacity);
        
        if (series.customColor) {
          areaPath.style('fill', series.customColor);
        }

        // Stroke line
        if (showStroke && lineGen) {
          const strokePath = g.append('path')
            .datum(seriesData)
            .attr('class', `db-areachart__stroke db-areachart__stroke--${seriesColor}`)
            .attr('d', lineGen as any);
          
          if (series.customColor) {
            strokePath.style('stroke', series.customColor);
          }
        }

        // Data points for non-stacked charts
        if (showPoints && !stacked) {
          const points = g.selectAll(`.db-areachart__point--series-${idx}`)
            .data(series.data)
            .enter()
            .append('circle')
            .attr('class', `db-areachart__point db-areachart__point--${seriesColor} db-areachart__point--series-${idx}`)
            .attr('cx', d => xScale(d.x) || 0)
            .attr('cy', d => yScale(d.y) || 0)
            .attr('r', variant === 'detailed' ? 5 : 4);
          
          if (series.customColor) {
            points.style('fill', series.customColor);
          }

          // Add keyboard navigation attributes conditionally
          if (keyboard) {
            points
              .attr('tabindex', 0)
              .attr('role', 'button')
              .attr('aria-label', (d, i) => `${series.name}: Data point ${i + 1}: ${defaultFormatX(d.x)}, ${defaultFormatY(d.y)}`)
              .on('focus', function(event: any, d: any) {
                const index = series.data.indexOf(d);
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
      });

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

        // Hover circles for each series
        const hoverCircles = normalizedSeries.map((series) => {
          const seriesColor = getSeriesColor(series);
          const circle = g.append('circle')
            .attr('class', `db-areachart__hover-circle db-areachart__hover-circle--${seriesColor}`)
            .attr('r', 6)
            .style('opacity', 0);
          
          if (series.customColor) {
            circle.style('fill', series.customColor);
          }
          
          return circle;
        });

        // Invisible overlay for mouse events
        g.append('rect')
          .attr('class', 'db-areachart__overlay')
          .attr('width', innerWidth)
          .attr('height', innerHeight)
          .style('fill', 'none')
          .style('pointer-events', 'all')
          .on('mousemove', function(event) {
            const [mouseX] = d3.pointer(event);
            
            // Find closest x value across all series
            const firstSeries = normalizedSeries[0];
            if (!firstSeries || !firstSeries.data.length) return;
            
            let closestPoint = firstSeries.data[0];
            let closestIndex = 0;
            let minDistance = Math.abs((xScale(firstSeries.data[0].x) || 0) - mouseX);
            
            firstSeries.data.forEach((d, i) => {
              const xPos = xScale(d.x) || 0;
              const distance = Math.abs(xPos - mouseX);
              if (distance < minDistance) {
                minDistance = distance;
                closestPoint = d;
                closestIndex = i;
              }
            });

            const pointX = xScale(closestPoint.x) || 0;

            // Collect all series values at this x position
            const allSeriesData = normalizedSeries.map((series) => {
              const dataPoint = series.data.find(d => d.x === closestPoint.x) || 
                               series.data[closestIndex];
              const yValue = dataPoint ? dataPoint.y : 0;
              const seriesColor = getSeriesColor(series);
              return {
                name: series.name,
                value: yValue,
                color: series.customColor || `var(--chart-${seriesColor})`,
                point: dataPoint,
              };
            });

            // Calculate display position (use top series for single hover circle)
            const topSeriesY = yScale(allSeriesData[allSeriesData.length - 1].value) || 0;

            // Show visual indicators
            verticalLine
              .style('opacity', 1)
              .attr('x1', pointX)
              .attr('x2', pointX);

            // Show hover circles for each series
            allSeriesData.forEach((seriesData, idx) => {
              if (seriesData.point) {
                hoverCircles[idx]
                  .style('opacity', 1)
                  .attr('cx', pointX)
                  .attr('cy', yScale(seriesData.value) || 0);
              }
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
                showTooltipForData(closestPoint, closestIndex, pointX, topSeriesY, allSeriesData);
              }, mergedTooltip.showDelay);
            } else {
              showTooltipForData(closestPoint, closestIndex, pointX, topSeriesY, allSeriesData);
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
      function showTooltipForData(
        dataPoint: AreaChartDataPoint, 
        index: number, 
        svgX: number, 
        svgY: number,
        allSeriesData?: Array<{ name: string; value: number; color: string; point?: AreaChartDataPoint }>
      ) {
        // Convert SVG coordinates to container coordinates by adding the margins
        const containerX = svgX + defaultMargin.left;
        const containerY = svgY + defaultMargin.top;
        setTooltipPosition({ x: containerX, y: containerY });
        setTooltipData({ 
          dataPoint, 
          index,
          seriesData: allSeriesData?.map(s => ({ name: s.name, value: s.value, color: s.color }))
        });
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

    }, [normalizedSeries, width, height, xScale, yScale, areaGenerators, lineGenerators, mergedGrid.show, mergedGrid.opacity, mergedGrid.strokeDasharray, showPoints, mergedTooltip, showStroke,
        color, mergedXAxis.label, mergedXAxis.show, mergedXAxis.tickCount, mergedXAxis.tickFormatter, mergedXAxis.variant, mergedYAxis.label, mergedYAxis.show, mergedYAxis.tickCount, mergedYAxis.tickFormatter, mergedYAxis.variant, title, defaultMargin, innerWidth, innerHeight, fillOpacity,
        defaultFormatX, defaultFormatY, defaultFormatTooltip, showPercentageChange, calculatePercentageChange, stacked, stackedData, getSeriesColor, keyboard, variant]);

    if (normalizedSeries.length === 0) {
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
      data: normalizedSeries[0]?.data || [],
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
          aria-label={ariaLabel || (normalizedSeries.length > 1 
            ? `Area chart with ${normalizedSeries.length} series` 
            : `Area chart with ${normalizedSeries[0]?.data.length || 0} data points`)}
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
              ) : tooltipData.seriesData && tooltipData.seriesData.length > 1 ? (
                <div className="db-areachart__tooltip-content">
                  <div className="db-areachart__tooltip-date">{defaultFormatX(tooltipData.dataPoint.x)}</div>
                  {tooltipData.seriesData.map((series, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                      <div style={{ 
                        width: '12px', 
                        height: '12px', 
                        borderRadius: '2px', 
                        backgroundColor: series.color 
                      }} />
                      <span style={{ fontSize: '12px', color: 'var(--chart-muted-foreground)' }}>
                        {series.name}:
                      </span>
                      <span style={{ fontSize: '14px', fontWeight: 600 }}>
                        {defaultFormatY(series.value)}
                      </span>
                    </div>
                  ))}
                </div>
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
