import React, { HTMLAttributes, forwardRef, useEffect, useRef, useMemo, createContext, useContext, useState } from 'react';
import clsx from 'clsx';
import * as d3 from 'd3';
import './BarChart.css';
import { 
  TooltipConfig, 
  ChartTooltip, 
  DefaultTooltipContent, 
  TooltipPosition 
} from '../shared/ChartTooltip';

// Chart Context for compound components
interface BarChartContextValue {
  data: BarChartDataPoint[] | BarChartStackedDataPoint[];
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

export interface BarChartStackedDataPoint {
  /** Category label for the bar */
  x: string;
  /** Values for each series in the stack */
  [key: string]: string | number;
}

export interface BarChartSeries {
  /** Unique key for the series */
  key: string;
  /** Display name for the series */
  name: string;
  /** Color for the series */
  color?: string;
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
  tickFormatter?: (_value: any) => string;
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
  data: BarChartDataPoint[] | BarChartStackedDataPoint[];
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
  /** Enable stacked bars */
  stacked?: boolean;
  /** Series configuration for stacked bars */
  series?: BarChartSeries[];
  
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
  
  /** Enhanced tooltip configuration */
  tooltip?: TooltipConfig<BarChartDataPoint>;
  /** @deprecated Use tooltip.enabled instead */
  showTooltip?: boolean;
  /** @deprecated Use tooltip.content instead */
  formatTooltip?: (dataPoint: BarChartDataPoint, _index?: number) => string;
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
      stacked = false,
      series = [],
      xAxis,
      yAxis,
      grid,
      theme,
      animation,
      tooltip,
      showTooltip = true,
      formatTooltip,
      showValueLabels = false,
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
      dataPoint: BarChartDataPoint;
      index: number;
    } | null>(null);

    // Modern configuration with sensible defaults (memoized to prevent re-renders)
    const mergedXAxis: BarChartAxis = useMemo(() => ({
      show: true,
      position: orientation === 'vertical' ? 'bottom' : 'left',
      variant: variant === 'minimal' ? 'minimal' : 'default',
      rotateLabels: orientation === 'vertical' && data.length > 8,
      ...xAxis,
    }), [orientation, variant, data.length, xAxis]);

    const mergedYAxis: BarChartAxis = useMemo(() => ({
      show: true,
      position: orientation === 'vertical' ? 'left' : 'bottom',
      variant: variant === 'minimal' ? 'minimal' : 'default',
      tickCount: variant === 'detailed' ? 8 : 6,
      ...yAxis,
    }), [orientation, variant, yAxis]);

    const mergedGrid: BarChartGrid = useMemo(() => ({
      show: variant !== 'minimal',
      strokeDasharray: variant === 'detailed' ? '1,3' : '2,2',
      opacity: variant === 'detailed' ? 0.2 : 0.3,
      ...grid,
    }), [variant, grid]);

    const mergedTheme: BarChartTheme = useMemo(() => {
      const cssVars = {
        '--chart-bar-radius': `${borderRadius}px`,
        '--chart-bar-padding': barPadding.toString(),
      };
      return {
        colorScheme: 'auto' as const,
        cssVars,
        ...theme,
      };
    }, [borderRadius, barPadding, theme]);

    const mergedAnimation: BarChartAnimation = useMemo(() => ({
      enabled: variant === 'detailed',
      duration: variant === 'detailed' ? 500 : 300,
      easing: 'ease-out',
      ...animation,
    }), [variant, animation]);

    // Default color scheme for stacked bars (memoized to prevent re-renders)
    const defaultStackColors = useMemo(() => [
      'var(--chart-primary)',
      'var(--chart-secondary)',
      'var(--chart-success)',
      'var(--chart-warning)',
      'var(--chart-error)',
      'hsl(280 65% 60%)',
      'hsl(180 65% 60%)',
      'hsl(30 65% 60%)',
    ], []);

    // Default placement object (memoized to prevent recreation)
    const defaultPlacement = useMemo(() => ({ placement: 'auto' as const, offset: { x: 0, y: -10 } }), []);
    
    // Merge tooltip configuration with backward compatibility
    const mergedTooltip: TooltipConfig<BarChartDataPoint> = useMemo(() => ({
      enabled: tooltip?.enabled !== undefined ? tooltip.enabled : showTooltip,
      component: tooltip?.component,
      content: tooltip?.content || formatTooltip,
      style: tooltip?.style,
      placement: tooltip?.placement || defaultPlacement,
      className: tooltip?.className,
      animationDuration: tooltip?.animationDuration || 200,
      showDelay: tooltip?.showDelay || 0,
      hideDelay: tooltip?.hideDelay || 0,
      ...tooltip,
    }), [tooltip, showTooltip, formatTooltip, defaultPlacement]);

    const defaultMargin = useMemo(() => ({
      top: title ? 40 : 20,
      right: orientation === 'horizontal' ? 60 : 20,
      bottom: (mergedXAxis.label ? 60 : 40) + (mergedXAxis.rotateLabels ? 20 : 0),
      left: (mergedYAxis.label ? 80 : 60) + (orientation === 'horizontal' ? 20 : 0),
    }), [title, orientation, mergedXAxis.label, mergedXAxis.rotateLabels, mergedYAxis.label]);

    const innerWidth = useMemo(
      () => width - defaultMargin.left - defaultMargin.right,
      [width, defaultMargin]
    );
    
    const innerHeight = useMemo(
      () => height - defaultMargin.top - defaultMargin.bottom,
      [height, defaultMargin]
    );

    // Memoize scales and stacked data
    const { xScale, yScale, stackedData, seriesKeys } = useMemo(() => {
      if (!data.length) {
        return { xScale: null, yScale: null, stackedData: null, seriesKeys: [] };
      }

      let xScale: any;
      let yScale: any;
      let stackedData: d3.Series<any, string>[] | null = null;
      let seriesKeys: string[] = [];

      if (stacked && series.length > 0) {
        // Stacked bar chart mode
        seriesKeys = series.map(s => s.key);
        
        // Create stack generator
        const stack = d3.stack<any, string>()
          .keys(seriesKeys)
          .order(d3.stackOrderNone)
          .offset(d3.stackOffsetNone);

        stackedData = stack(data as any);

        // Calculate max value for stacked data
        const maxValue = d3.max(stackedData, (layer: any) => 
          d3.max(layer, (d: any) => d[1] as number)
        ) || 0;

        if (orientation === 'vertical') {
          // X-axis: categories (band scale)
          xScale = d3.scaleBand()
            .domain(data.map(d => d.x))
            .range([0, innerWidth])
            .padding(barPadding);

          // Y-axis: values (linear scale)
          yScale = d3.scaleLinear()
            .domain([0, maxValue])
            .nice()
            .range([innerHeight, 0]);
        } else {
          // Horizontal orientation
          // X-axis: values (linear scale)
          xScale = d3.scaleLinear()
            .domain([0, maxValue])
            .nice()
            .range([0, innerWidth]);

          // Y-axis: categories (band scale)
          yScale = d3.scaleBand()
            .domain(data.map(d => d.x))
            .range([0, innerHeight])
            .padding(barPadding);
        }
      } else {
        // Regular bar chart mode
        const regularData = data as BarChartDataPoint[];
        if (orientation === 'vertical') {
          // X-axis: categories (band scale)
          xScale = d3.scaleBand()
            .domain(data.map(d => d.x))
            .range([0, innerWidth])
            .padding(barPadding);

          // Y-axis: values (linear scale)
          yScale = d3.scaleLinear()
            .domain([0, d3.max(regularData, d => d.y) || 0])
            .nice()
            .range([innerHeight, 0]);
        } else {
          // Horizontal orientation
          // X-axis: values (linear scale)
          xScale = d3.scaleLinear()
            .domain([0, d3.max(regularData, d => d.y) || 0])
            .nice()
            .range([0, innerWidth]);

          // Y-axis: categories (band scale)
          yScale = d3.scaleBand()
            .domain(data.map(d => d.x))
            .range([0, innerHeight])
            .padding(barPadding);
        }
      }

      return { xScale, yScale, stackedData, seriesKeys };
    }, [data, innerWidth, innerHeight, orientation, barPadding, stacked, series]);

    // Default formatters (memoized to prevent re-renders)
    const defaultFormatX = useMemo(
      () => mergedXAxis.tickFormatter || ((value: any) => String(value)),
      [mergedXAxis.tickFormatter]
    );
    
    const defaultFormatY = useMemo(
      () => mergedYAxis.tickFormatter || d3.format('.2s'),
      [mergedYAxis.tickFormatter]
    );

    // Default tooltip formatter (uses formatTooltip if provided)
    useMemo(
      () => formatTooltip || ((_dataPoint: BarChartDataPoint) => {
        const categoryFormatted = dataPoint.x;
        const valueFormatted = d3.format('.2s')(dataPoint.y);
        
        let tooltipHtml = `<div class="db-barchart__tooltip-content">`;
        tooltipHtml += `<div class="db-barchart__tooltip-category">${categoryFormatted}</div>`;
        tooltipHtml += `<div class="db-barchart__tooltip-value">${valueFormatted}</div>`;
        tooltipHtml += `</div>`;
        return tooltipHtml;
      }),
      [formatTooltip]
    );

    useEffect(() => {
      if (!svgRef.current || !data.length || !xScale || !yScale) {
        return;
      }

      // Define tooltip handlers inside useEffect to avoid them being dependencies
      const showTooltipForData = (event: MouseEvent, dataPoint: BarChartDataPoint, index: number) => {
        if (!svgRef.current) return;
        
        const rect = (event.target as Element).getBoundingClientRect();
        const containerRect = svgRef.current.getBoundingClientRect();
        
        let svgX: number;
        let svgY: number;

        if (orientation === 'vertical') {
          svgX = rect.left - containerRect.left + rect.width / 2;
          svgY = rect.top - containerRect.top;
        } else {
          svgX = rect.right - containerRect.left;
          svgY = rect.top - containerRect.top + rect.height / 2;
        }

        const containerX = svgX + defaultMargin.left;
        const containerY = svgY + defaultMargin.top;

        setTooltipPosition({ x: containerX, y: containerY });
        setTooltipData({ dataPoint, index });
        setTooltipVisible(true);
      };

      const showStackedTooltip = (event: MouseEvent, category: string, seriesName: string, value: number) => {
        if (!svgRef.current) return;
        
        const rect = (event.target as Element).getBoundingClientRect();
        const containerRect = svgRef.current.getBoundingClientRect();
        
        let svgX: number;
        let svgY: number;

        if (orientation === 'vertical') {
          svgX = rect.left - containerRect.left + rect.width / 2;
          svgY = rect.top - containerRect.top;
        } else {
          svgX = rect.right - containerRect.left;
          svgY = rect.top - containerRect.top + rect.height / 2;
        }

        const containerX = svgX + defaultMargin.left;
        const containerY = svgY + defaultMargin.top;

        setTooltipPosition({ x: containerX, y: containerY });
        setTooltipData({ 
          dataPoint: { x: `${category} - ${seriesName}`, y: value } as BarChartDataPoint, 
          index: 0 
        });
        setTooltipVisible(true);
      };

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
        
        xAxisCall.tickFormat((d) => {
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
        
        yAxisCall.tickFormat((d) => {
          if (orientation === 'vertical') {
            return defaultFormatY(d as number);
          } else {
            return defaultFormatX(d);
          }
        });
        
        yAxisGroup.call(yAxisCall);
      }

      // Bars - Regular or Stacked
      if (stacked && stackedData && series.length > 0) {
        // Render stacked bars
        const layers = g.selectAll('.db-barchart__layer')
          .data(stackedData)
          .enter()
          .append('g')
          .attr('class', 'db-barchart__layer')
          .attr('fill', (d, i) => series[i]?.color || defaultStackColors[i % defaultStackColors.length]);

        const bars = layers.selectAll('rect')
          .data((d: any) => d)
          .enter()
          .append('rect')
          .attr('class', 'db-barchart__bar db-barchart__bar--stacked')
          .style('rx', borderRadius)
          .style('ry', borderRadius);

        if (orientation === 'vertical') {
          bars
            .attr('x', (d: any) => xScale((d.data as any).x) || 0)
            .attr('width', xScale.bandwidth())
            .attr('y', innerHeight)
            .attr('height', 0)
            .transition()
            .duration(mergedAnimation.enabled ? (mergedAnimation.duration || 300) : 0)
            .attr('y', (d: any) => yScale(d[1]) || 0)
            .attr('height', (d: any) => yScale(d[0]) - yScale(d[1]));
        } else {
          bars
            .attr('x', 0)
            .attr('width', 0)
            .attr('y', (d: any) => yScale((d.data as any).x) || 0)
            .attr('height', yScale.bandwidth())
            .transition()
            .duration(mergedAnimation.enabled ? (mergedAnimation.duration || 300) : 0)
            .attr('x', (d: any) => xScale(d[0]) || 0)
            .attr('width', (d: any) => xScale(d[1]) - xScale(d[0]));
        }

        // Enhanced tooltip for stacked bars
        if (mergedTooltip.enabled) {
          bars
            .on('mouseenter', function(event, d: any) {
              const category = (d.data as any).x;
              const parentElement = this.parentNode as Element;
              const seriesKey = (d3.select(parentElement).datum() as any).key;
              const seriesInfo = series.find(s => s.key === seriesKey);
              const value = d.data[seriesKey];
              
              // Highlight bar
              d3.select(this).classed('db-barchart__bar--hover', true);

              // Show tooltip with custom content for stacked data
              showStackedTooltip(event, category, seriesInfo?.name || seriesKey, value);
            })
            .on('mouseleave', function() {
              d3.select(this).classed('db-barchart__bar--hover', false);
              setTooltipVisible(false);
              setTooltipData(null);
            });
        }

        // Keyboard navigation for stacked bars
        if (keyboard) {
          bars
            .attr('tabindex', 0)
            .attr('role', 'button')
            .attr('aria-label', (d: any) => {
              const category = (d.data as any).x;
              const seriesKey = (d3.select((d as any).parentNode).datum() as any).key;
              const seriesInfo = series.find(s => s.key === seriesKey);
              const value = d.data[seriesKey];
              return `${category}: ${seriesInfo?.name || seriesKey} - ${d3.format('.2s')(value)}`;
            });
        }
      } else {
        // Render regular bars
        const bars = g.selectAll('.db-barchart__bar')
          .data(data as BarChartDataPoint[])
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

        // Enhanced tooltip functionality for regular bars
        if (mergedTooltip.enabled) {
          let tooltipTimer: number | null = null;
          let hideTimer: number | null = null;

          bars
            .on('mouseenter', function(event, d) {
              const index = (data as BarChartDataPoint[]).indexOf(d);
              
              // Clear any existing timers
              if (hideTimer) {
                clearTimeout(hideTimer);
                hideTimer = null;
              }

              // Apply show delay
              if (mergedTooltip.showDelay && mergedTooltip.showDelay > 0) {
                tooltipTimer = window.setTimeout(() => {
                  showTooltipForData(event, d, index);
                }, mergedTooltip.showDelay);
              } else {
                showTooltipForData(event, d, index);
              }

              // Highlight bar
              d3.select(this).classed('db-barchart__bar--hover', true);
            })
            .on('mouseleave', function() {
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
              
              // Remove highlight
              d3.select(this).classed('db-barchart__bar--hover', false);
            });
        }

        // Keyboard navigation for regular bars
        if (keyboard) {
          bars
            .attr('tabindex', 0)
            .attr('role', 'button')
            .attr('aria-label', (d) => `${d.x}: ${d3.format('.2s')(d.y)}`)
            .on('focus', function(event: any, d: any) {
              const index = (data as BarChartDataPoint[]).indexOf(d);
              if (mergedTooltip.enabled) {
                // For keyboard focus, show tooltip at the center of the bar
                const rect = this.getBoundingClientRect();
                const containerRect = svgRef.current?.getBoundingClientRect();
                if (containerRect) {
                  const x = rect.left - containerRect.left + rect.width / 2;
                  const y = rect.top - containerRect.top + rect.height / 2;
                  setTooltipPosition({ x, y });
                  setTooltipData({ dataPoint: d, index });
                  setTooltipVisible(true);
                }
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

      // Value labels (only for non-stacked bars currently)
      if (showValueLabels && !stacked) {
        const labels = g.selectAll('.db-barchart__value-label')
          .data(data as BarChartDataPoint[])
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
      // Core data and dimensions
      data, width, height,
      // Scales (memoized)
      xScale, yScale, stackedData, seriesKeys,
      // Chart configuration
      stacked, series, orientation, color,
      // Visual properties
      borderRadius, showValueLabels, title,
      // Axis configuration
      mergedXAxis.show, mergedXAxis.label, mergedXAxis.rotateLabels, mergedXAxis.variant, mergedXAxis.tickCount,
      mergedYAxis.show, mergedYAxis.label, mergedYAxis.variant, mergedYAxis.tickCount,
      // Grid and animation
      mergedGrid.show, mergedGrid.strokeDasharray, mergedGrid.opacity,
      mergedAnimation.enabled, mergedAnimation.duration,
      // Interaction
      keyboard,
      // Memoized values (stable unless their dependencies change)
      defaultMargin, defaultFormatX, defaultFormatY, defaultStackColors, mergedTooltip.enabled,
      // Tooltip config for delays and behavior
      mergedTooltip.showDelay, mergedTooltip.hideDelay,
      // NOTE: Tooltip handler functions are now defined INSIDE useEffect
      // This prevents the chart from being redrawn on every hover/tooltip interaction
      // State setters (setTooltipVisible, setTooltipData, setTooltipPosition) are stable and don't trigger re-renders
    ]);

    // Context value for compound components (memoized to prevent re-renders)
    const contextValue: BarChartContextValue = useMemo(() => ({
      data,
      width,
      height,
      color,
      xScale,
      yScale,
      svgRef,
    }), [data, width, height, color, xScale, yScale]);

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
          {...props}
        >
          <svg
            ref={svgRef}
            className="db-barchart__svg"
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
              className={clsx('db-barchart__tooltip', mergedTooltip.className)}
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
                  label={tooltipData.dataPoint.x}
                  value={d3.format('.2s')(tooltipData.dataPoint.y)}
                  color={`var(--chart-${color})`}
                />
              )}
            </ChartTooltip>
          )}
          {/* Legacy tooltip support */}
          {showTooltip && !mergedTooltip.enabled && (
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
