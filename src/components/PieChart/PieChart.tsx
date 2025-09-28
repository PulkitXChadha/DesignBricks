import React, { HTMLAttributes, forwardRef, useEffect, useRef, useMemo, createContext, useContext } from 'react';
import clsx from 'clsx';
import * as d3 from 'd3';
import './PieChart.css';

// Chart Context for compound components
interface PieChartContextValue {
  data: PieChartDataPoint[];
  width: number;
  height: number;
  radius: number;
  svgRef?: React.RefObject<SVGSVGElement>;
}

export const PieChartContext = createContext<PieChartContextValue | null>(null);

export const usePieChart = () => {
  const context = useContext(PieChartContext);
  if (!context) {
    throw new Error('usePieChart must be used within a PieChart component');
  }
  return context;
};

export interface PieChartDataPoint {
  /** Category label */
  label: string;
  /** Value for the slice */
  value: number;
  /** Optional custom color override */
  color?: string;
  /** Optional metadata for the data point */
  metadata?: Record<string, any>;
}

// Enhanced configuration interfaces
export interface PieChartTheme {
  /** Primary color scheme */
  colorScheme?: 'light' | 'dark' | 'auto';
  /** Custom CSS variables */
  cssVars?: Record<string, string>;
}

export interface PieChartAnimation {
  /** Enable animations */
  enabled?: boolean;
  /** Animation duration in ms */
  duration?: number;
  /** Animation easing */
  easing?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';
}

export interface PieChartLegend {
  /** Show legend */
  show?: boolean;
  /** Legend position */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /** Legend orientation */
  orientation?: 'horizontal' | 'vertical';
}

export interface PieChartProps extends Omit<HTMLAttributes<HTMLDivElement>, 'data'> {
  /** Chart data points */
  data: PieChartDataPoint[];
  /** Chart width */
  width?: number;
  /** Chart height */
  height?: number;
  /** Chart variant */
  variant?: 'default' | 'minimal' | 'detailed';
  /** Chart title */
  title?: string;
  /** Inner radius for donut chart (0 for full pie) */
  innerRadius?: number;
  /** Outer radius (auto-calculated if not provided) */
  outerRadius?: number;
  /** Corner radius for rounded slices */
  cornerRadius?: number;
  /** Padding between slices */
  padAngle?: number;
  
  /** Theme configuration */
  theme?: PieChartTheme;
  /** Animation configuration */
  animation?: PieChartAnimation;
  /** Legend configuration */
  legend?: PieChartLegend;
  
  /** Show interactive tooltip on hover */
  showTooltip?: boolean;
  /** Format function for tooltip values */
  formatTooltip?: (dataPoint: PieChartDataPoint, percentage?: number) => string;
  /** Show percentage labels on slices */
  showLabels?: boolean;
  /** Show value labels instead of percentages */
  showValues?: boolean;
  /** Label position relative to slice */
  labelPosition?: 'inside' | 'outside';
  
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
  /** Custom color palette */
  colorPalette?: string[];
}

// Default color palette based on design tokens
const DEFAULT_PIE_COLORS = [
  '#2272B4', // primary
  '#04867D', // secondary
  '#3BA65E', // success
  '#DE7921', // warning
  '#E65B77', // error
  '#8A63BF', // purple
  '#B45091', // pink
  '#137DAE', // turquoise
  '#A6630C', // brown
  '#FACB66', // lemon
];

export const PieChart = forwardRef<HTMLDivElement, PieChartProps>(
  (
    {
      data = [],
      width = 400,
      height = 400,
      variant = 'default',
      title,
      innerRadius = 0,
      outerRadius,
      cornerRadius = 0,
      padAngle = 0,
      theme,
      animation,
      legend,
      showTooltip = true,
      formatTooltip,
      showLabels = true,
      showValues = false,
      labelPosition = 'outside',
      keyboard = false,
      ariaLabel,
      themeClass,
      optimized = false,
      hoverDebounce = 0,
      colorPalette = DEFAULT_PIE_COLORS,
      className,
      ...props
    },
    ref
  ) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);

    // Modern configuration with sensible defaults
    const mergedTheme: PieChartTheme = {
      colorScheme: 'auto',
      cssVars: {
        '--chart-inner-radius': `${innerRadius}px`,
        '--chart-corner-radius': `${cornerRadius}px`,
      },
      ...theme,
    };

    const mergedAnimation: PieChartAnimation = {
      enabled: variant === 'detailed',
      duration: variant === 'detailed' ? 800 : 500,
      easing: 'ease-out',
      ...animation,
    };

    const mergedLegend: PieChartLegend = {
      show: variant !== 'minimal',
      position: 'bottom',
      orientation: 'horizontal',
      ...legend,
    };

    const defaultMargin = {
      top: title ? 40 : 20,
      right: 20,
      bottom: (mergedLegend.show && mergedLegend.position === 'bottom' ? 60 : 20),
      left: 20,
    };

    const innerWidth = width - defaultMargin.left - defaultMargin.right;
    const innerHeight = height - defaultMargin.top - defaultMargin.bottom;
    
    const radius = outerRadius || Math.min(innerWidth, innerHeight) / 2 - 10;
    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;

    // Memoize processed data and generators
    const { pieData, arc, labelArc, totalValue, colorScale } = useMemo(() => {
      if (!data.length) {
        return { pieData: [], arc: null, labelArc: null, totalValue: 0, colorScale: null };
      }

      const totalValue = d3.sum(data, d => d.value);

      // Create pie layout
      const pie = d3.pie<PieChartDataPoint>()
        .value(d => d.value)
        .sort(null)
        .padAngle(padAngle);

      const pieData = pie(data);

      // Create arc generators
      const arc = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(radius)
        .cornerRadius(cornerRadius);

      const labelArc = d3.arc()
        .innerRadius(labelPosition === 'inside' ? 
          (innerRadius + radius) / 2 : 
          radius + 20)
        .outerRadius(labelPosition === 'inside' ? 
          (innerRadius + radius) / 2 : 
          radius + 20);

      // Color scale
      const colorScale = d3.scaleOrdinal<string>()
        .domain(data.map(d => d.label))
        .range(colorPalette);

      return { pieData, arc, labelArc, totalValue, colorScale };
    }, [data, radius, innerRadius, cornerRadius, padAngle, labelPosition, colorPalette]);

    const defaultFormatTooltip = formatTooltip || ((dataPoint: PieChartDataPoint, percentage?: number) => {
      let tooltipHtml = `<div class="db-piechart__tooltip-content">`;
      tooltipHtml += `<div class="db-piechart__tooltip-label">${dataPoint.label}</div>`;
      tooltipHtml += `<div class="db-piechart__tooltip-value">${d3.format(',')(dataPoint.value)}</div>`;
      if (percentage !== undefined) {
        tooltipHtml += `<div class="db-piechart__tooltip-percentage">${percentage.toFixed(1)}%</div>`;
      }
      tooltipHtml += `</div>`;
      return tooltipHtml;
    });

    useEffect(() => {
      if (!svgRef.current || !data.length || !arc || !colorScale) {
        return;
      }

      const svg = d3.select(svgRef.current);
      svg.selectAll('*').remove();

      const g = svg.append('g')
        .attr('transform', `translate(${defaultMargin.left + centerX},${defaultMargin.top + centerY})`);

      // Create slices
      const slices = g.selectAll('.db-piechart__slice')
        .data(pieData)
        .enter()
        .append('g')
        .attr('class', 'db-piechart__slice');

      const paths = slices.append('path')
        .attr('class', 'db-piechart__path')
        .attr('fill', d => d.data.color || colorScale(d.data.label) || '#2272B4')
        .attr('stroke', '#FFFFFF')
        .attr('stroke-width', 2);

      // Animation
      if (mergedAnimation.enabled) {
        paths
          .attr('d', arc.startAngle(0).endAngle(0) as any)
          .transition()
          .duration(mergedAnimation.duration || 500)
          .delay((d, i) => i * 100)
          .attrTween('d', function(d: any) {
            const interpolate = d3.interpolate(
              { startAngle: 0, endAngle: 0 },
              { startAngle: d.startAngle, endAngle: d.endAngle }
            );
            return function(t) {
              return arc(interpolate(t) as any) as string;
            };
          });
      } else {
        paths.attr('d', arc as any);
      }

      // Labels
      if (showLabels && labelArc) {
        const labels = slices.append('text')
          .attr('class', 'db-piechart__label')
          .attr('transform', d => `translate(${labelArc.centroid(d as any)})`)
          .attr('dy', '0.35em')
          .style('text-anchor', 'middle')
          .style('font-size', '12px')
          .style('font-weight', '500')
          .style('fill', labelPosition === 'inside' ? '#FFFFFF' : '#37444F')
          .style('pointer-events', 'none')
          .text(d => {
            const percentage = (d.value / totalValue) * 100;
            if (percentage < 5) return ''; // Hide labels for small slices
            
            if (showValues) {
              return d3.format(',')(d.data.value);
            } else {
              return `${percentage.toFixed(1)}%`;
            }
          });

        // Add category labels for outside positioning
        if (labelPosition === 'outside') {
          slices.append('text')
            .attr('class', 'db-piechart__category-label')
            .attr('transform', d => {
              const pos = labelArc.centroid(d as any);
              pos[0] = pos[0] * 1.3; // Move further out
              pos[1] = pos[1] * 1.3;
              return `translate(${pos})`;
            })
            .attr('dy', '-0.5em')
            .style('text-anchor', 'middle')
            .style('font-size', '11px')
            .style('font-weight', '400')
            .style('fill', '#5F7281')
            .style('pointer-events', 'none')
            .text(d => {
              const percentage = (d.value / totalValue) * 100;
              return percentage < 5 ? '' : d.data.label;
            });
        }
      }

      // Add keyboard navigation attributes conditionally
      if (keyboard) {
        paths
          .attr('tabindex', 0)
          .attr('role', 'button')
          .attr('aria-label', (d, i) => {
            const percentage = (d.value / totalValue) * 100;
            return `${d.data.label}: ${d3.format(',')(d.data.value)} (${percentage.toFixed(1)}%)`;
          })
          .on('focus', function(event: any, d: any) {
            if (showTooltip && tooltipRef.current) {
              const percentage = (d.value / totalValue) * 100;
              const tooltipContent = defaultFormatTooltip(d.data, percentage);
              const tooltip = d3.select(tooltipRef.current);
              tooltip.style('opacity', 1).html(tooltipContent);
            }
            
            // Highlight slice
            d3.select(this).style('filter', 'brightness(1.1)');
          })
          .on('blur', function() {
            if (tooltipRef.current) {
              d3.select(tooltipRef.current).style('opacity', 0);
            }
            
            // Remove highlight
            d3.select(this).style('filter', 'none');
          });
      }

      // Tooltip functionality
      if (showTooltip && tooltipRef.current) {
        const tooltip = d3.select(tooltipRef.current);
        let tooltipTimer: number | null = null;

        paths
          .on('mouseenter', function(event, d) {
            const percentage = (d.value / totalValue) * 100;
            const tooltipContent = defaultFormatTooltip(d.data, percentage);
            
            tooltip
              .style('opacity', 1)
              .html(tooltipContent);

            // Highlight slice
            d3.select(this)
              .style('filter', 'brightness(1.1)')
              .style('stroke-width', 3);

            // Position tooltip
            if (tooltipRef.current && svgRef.current) {
              const tooltipNode = tooltipRef.current;
              const [x, y] = d3.pointer(event, svgRef.current);

              if (tooltipTimer) window.cancelAnimationFrame(tooltipTimer);

              tooltipTimer = window.requestAnimationFrame(() => {
                tooltipNode.style.position = 'absolute';
                tooltipNode.style.visibility = 'hidden';
                tooltipNode.style.opacity = '0';

                const tooltipWidth = tooltipNode.offsetWidth;
                const tooltipHeight = tooltipNode.offsetHeight;

                let left = x - tooltipWidth / 2;
                let top = y - tooltipHeight - 15;

                const padding = 10;

                if (left < padding) {
                  left = padding;
                } else if (left + tooltipWidth > width - padding) {
                  left = width - tooltipWidth - padding;
                }

                if (top < padding) {
                  top = y + 15;
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
            d3.select(this)
              .style('filter', 'none')
              .style('stroke-width', 2);
          });
      }

      // Legend
      if (mergedLegend.show) {
        const legendGroup = svg.append('g')
          .attr('class', 'db-piechart__legend');

        const legendItems = legendGroup.selectAll('.db-piechart__legend-item')
          .data(data)
          .enter()
          .append('g')
          .attr('class', 'db-piechart__legend-item');

        const legendSpacing = 140;
        const itemsPerRow = Math.floor(width / legendSpacing);

        legendItems
          .attr('transform', (d, i) => {
            if (mergedLegend.orientation === 'horizontal') {
              const x = (i % itemsPerRow) * legendSpacing;
              const y = Math.floor(i / itemsPerRow) * 20;
              return `translate(${x}, ${height - 40 + y})`;
            } else {
              return `translate(10, ${30 + i * 25})`;
            }
          });

        legendItems.append('rect')
          .attr('width', 12)
          .attr('height', 12)
          .attr('fill', d => d.color || colorScale(d.label) || '#2272B4');

        legendItems.append('text')
          .attr('x', 18)
          .attr('y', 6)
          .attr('dy', '0.35em')
          .style('font-size', '12px')
          .style('fill', '#37444F')
          .text(d => d.label);
      }

      // Title
      if (title) {
        svg.append('text')
          .attr('class', 'db-piechart__title')
          .attr('x', width / 2)
          .attr('y', 25)
          .style('text-anchor', 'middle')
          .text(title);
      }

    }, [data, width, height, radius, innerRadius, arc, labelArc, colorScale, totalValue,
        showLabels, showValues, labelPosition, showTooltip, mergedLegend.show, title,
        defaultMargin, centerX, centerY, defaultFormatTooltip, mergedAnimation.enabled, mergedAnimation.duration]);

    if (!data.length) {
      return (
        <div
          ref={ref}
          className={clsx(
            'db-piechart',
            'db-piechart--empty',
            className
          )}
          {...props}
        >
          <div className="db-piechart__empty-state">
            <p>No data available</p>
          </div>
        </div>
      );
    }

    // Context value for compound components
    const contextValue: PieChartContextValue = {
      data,
      width,
      height,
      radius,
      svgRef,
    };

    const isDonut = innerRadius > 0;

    return (
      <PieChartContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={clsx(
            'db-piechart',
            `db-piechart--${variant}`,
            {
              'db-piechart--donut': isDonut,
              'db-piechart--optimized': optimized,
              'db-piechart--keyboard': keyboard,
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
          aria-label={ariaLabel || `${isDonut ? 'Donut' : 'Pie'} chart with ${data.length} categories`}
          tabIndex={keyboard ? 0 : undefined}
          {...props}
        >
          <svg
            ref={svgRef}
            className="db-piechart__svg"
            width={width}
            height={height}
            role="presentation"
            aria-hidden={keyboard}
          />
          {showTooltip && (
            <div
              ref={tooltipRef}
              className="db-piechart__tooltip"
              role="tooltip"
              aria-live="polite"
            />
          )}
        </div>
      </PieChartContext.Provider>
    );
  }
);

PieChart.displayName = 'PieChart';
