import React, { HTMLAttributes, forwardRef, useEffect, useRef, useMemo } from 'react';
import clsx from 'clsx';
import * as d3 from 'd3';
import './LineChart.css';

export interface LineChartDataPoint {
  /** X-axis value (can be date, number, or string) */
  x: Date | number | string;
  /** Y-axis value */
  y: number;
  /** Optional label for the data point */
  label?: string;
}

export interface LineChartProps extends Omit<HTMLAttributes<HTMLDivElement>, 'data'> {
  /** Chart data points */
  data: LineChartDataPoint[];
  /** Chart width */
  width?: number;
  /** Chart height */
  height?: number;
  /** Chart variant */
  variant?: 'default' | 'minimal' | 'detailed';
  /** Color scheme */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  /** Show grid lines */
  showGrid?: boolean;
  /** Show data points */
  showPoints?: boolean;
  /** Show tooltip on hover */
  showTooltip?: boolean;
  /** X-axis label */
  xAxisLabel?: string;
  /** Y-axis label */
  yAxisLabel?: string;
  /** Chart title */
  title?: string;
  /** Curve type */
  curve?: 'linear' | 'smooth' | 'step';
  /** Margin configuration */
  margin?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
  /** Format function for X-axis values */
  formatX?: (value: any) => string;
  /** Format function for Y-axis values */
  formatY?: (value: number) => string;
  /** Format function for tooltip values */
  formatTooltip?: (dataPoint: LineChartDataPoint) => string;
  /** Show percentage change in tooltip (requires previous value) */
  showPercentageChange?: boolean;
  /** Function to calculate percentage change */
  calculatePercentageChange?: (current: LineChartDataPoint, previous: LineChartDataPoint) => number;
}

export const LineChart = forwardRef<HTMLDivElement, LineChartProps>(
  (
    {
      data = [],
      width = 600,
      height = 400,
      variant = 'default',
      color = 'primary',
      showGrid = true,
      showPoints = true,
      showTooltip = true,
      xAxisLabel,
      yAxisLabel,
      title,
      curve = 'smooth',
      margin = {},
      formatX,
      formatY,
      formatTooltip,
      showPercentageChange = false,
      calculatePercentageChange,
      className,
      ...props
    },
    ref
  ) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);

    const defaultMargin = {
      top: title ? 40 : 20,
      right: 20,
      bottom: xAxisLabel ? 60 : 40,
      left: yAxisLabel ? 80 : 60,
      ...margin,
    };

    const innerWidth = width - defaultMargin.left - defaultMargin.right;
    const innerHeight = height - defaultMargin.top - defaultMargin.bottom;

    // Memoize scales and line generator
    const { xScale, yScale, lineGenerator } = useMemo(() => {
      if (!data.length) {
        return { xScale: null, yScale: null, lineGenerator: null };
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
        .domain(d3.extent(data, d => d.y) as [number, number])
        .nice()
        .range([innerHeight, 0]);

      // Line generator
      const curveType = curve === 'smooth' ? d3.curveCardinal :
                       curve === 'step' ? d3.curveStepAfter :
                       d3.curveLinear;

      const lineGenerator = d3.line<LineChartDataPoint>()
        .x(d => xScale(d.x) || 0)
        .y(d => yScale(d.y) || 0)
        .curve(curveType);

      return { xScale, yScale, lineGenerator };
    }, [data, innerWidth, innerHeight, curve]);

    // Default formatters
    const defaultFormatX = useMemo(() => {
      if (formatX) return formatX;
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
    }, [data, formatX]);

    const defaultFormatY = formatY || d3.format('.2f');

    const defaultFormatTooltip = formatTooltip || ((dataPoint: LineChartDataPoint, index?: number) => {
      const xFormatted = defaultFormatX(dataPoint.x);
      const yFormatted = defaultFormatY(dataPoint.y);
      
      let tooltipHtml = `<div class="db-linechart__tooltip-content">`;
      tooltipHtml += `<div class="db-linechart__tooltip-date">${xFormatted}</div>`;
      tooltipHtml += `<div class="db-linechart__tooltip-value">${yFormatted}</div>`;
      
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
        
        tooltipHtml += `<div class="db-linechart__tooltip-change db-linechart__tooltip-change--${changeClass}">`;
        tooltipHtml += `${changeSymbol}${percentageChange.toFixed(1)}%`;
        tooltipHtml += `</div>`;
      }
      
      tooltipHtml += `</div>`;
      return tooltipHtml;
    });

    useEffect(() => {
      if (!svgRef.current || !data.length || !xScale || !yScale || !lineGenerator) {
        return;
      }

      const svg = d3.select(svgRef.current);
      svg.selectAll('*').remove();

      const g = svg.append('g')
        .attr('transform', `translate(${defaultMargin.left},${defaultMargin.top})`);

      // Grid lines
      if (showGrid) {
        // X-axis grid
        g.append('g')
          .attr('class', 'db-linechart__grid db-linechart__grid--x')
          .attr('transform', `translate(0,${innerHeight})`)
          .call(d3.axisBottom(xScale)
            .tickSize(-innerHeight)
            .tickFormat(() => '')
          );

        // Y-axis grid
        g.append('g')
          .attr('class', 'db-linechart__grid db-linechart__grid--y')
          .call(d3.axisLeft(yScale)
            .tickSize(-innerWidth)
            .tickFormat(() => '')
          );
      }

      // X-axis
      g.append('g')
        .attr('class', 'db-linechart__axis db-linechart__axis--x')
        .attr('transform', `translate(0,${innerHeight})`)
        .call(d3.axisBottom(xScale).tickFormat((d, i) => defaultFormatX(d)));

      // Y-axis
      g.append('g')
        .attr('class', 'db-linechart__axis db-linechart__axis--y')
        .call(d3.axisLeft(yScale).tickFormat((d, i) => defaultFormatY(d as number)));

      // Line path
      g.append('path')
        .datum(data)
        .attr('class', `db-linechart__line db-linechart__line--${color}`)
        .attr('d', lineGenerator);

      // Data points
      if (showPoints) {
        g.selectAll('.db-linechart__point')
          .data(data)
          .enter()
          .append('circle')
          .attr('class', `db-linechart__point db-linechart__point--${color}`)
          .attr('cx', d => xScale(d.x) || 0)
          .attr('cy', d => yScale(d.y) || 0)
          .attr('r', 4);
      }

      // Tooltip functionality
      if (showTooltip && tooltipRef.current) {
        const tooltip = d3.select(tooltipRef.current);
        let tooltipTimer: number | null = null;
        
        // Vertical line indicator
        const verticalLine = g.append('line')
          .attr('class', 'db-linechart__vertical-line')
          .attr('y1', 0)
          .attr('y2', innerHeight)
          .style('opacity', 0);

        // Hover circle
        const hoverCircle = g.append('circle')
          .attr('class', `db-linechart__hover-circle db-linechart__hover-circle--${color}`)
          .attr('r', 6)
          .style('opacity', 0);

        // Invisible overlay for mouse events
        g.append('rect')
          .attr('class', 'db-linechart__overlay')
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

            // Show vertical line
            verticalLine
              .style('opacity', 1)
              .attr('x1', pointX)
              .attr('x2', pointX);

            // Show hover circle
            hoverCircle
              .style('opacity', 1)
              .attr('cx', pointX)
              .attr('cy', pointY);

            // Show tooltip
            const tooltipContent = defaultFormatTooltip(closestPoint, closestIndex);
            tooltip
              .style('opacity', 1)
              .html(tooltipContent);

            // Position tooltip using direct mouse coordinates
            if (tooltipRef.current) {
              const tooltipNode = tooltipRef.current;
              
              // Show tooltip immediately to get dimensions
              tooltipNode.style.visibility = 'visible';
              tooltipNode.style.opacity = '1';
              tooltipNode.style.position = 'fixed';
              
              // Clear any existing positioning
              if (tooltipTimer) window.cancelAnimationFrame(tooltipTimer);
              
              tooltipTimer = window.requestAnimationFrame(() => {
                // Get mouse position in viewport coordinates
                const mouseClientX = event.clientX;
                const mouseClientY = event.clientY;
                
                // Get tooltip dimensions
                const tooltipRect = tooltipNode.getBoundingClientRect();
                const tooltipWidth = tooltipRect.width;
                const tooltipHeight = tooltipRect.height;
                
                // Position tooltip above mouse cursor, centered
                let left = mouseClientX - (tooltipWidth / 2);
                let top = mouseClientY - tooltipHeight - 10;
                
                // Viewport bounds
                const padding = 10;
                
                // Keep horizontal bounds
                if (left < padding) {
                  left = padding;
                } else if (left + tooltipWidth > window.innerWidth - padding) {
                  left = window.innerWidth - tooltipWidth - padding;
                }
                
                // Keep vertical bounds
                if (top < padding) {
                  top = mouseClientY + 10; // Show below mouse
                }
                
                // Set final position
                tooltipNode.style.left = `${left}px`;
                tooltipNode.style.top = `${top}px`;
              });
            }
          })
          .on('mouseout', () => {
            // Clear any pending tooltip positioning
            if (tooltipTimer) {
              window.cancelAnimationFrame(tooltipTimer);
              tooltipTimer = null;
            }
            
            tooltip.style('opacity', 0);
            if (tooltipRef.current) {
              tooltipRef.current.style.opacity = '0';
              tooltipRef.current.style.visibility = 'hidden';
            }
            verticalLine.style('opacity', 0);
            hoverCircle.style('opacity', 0);
          });
      }

      // Axis labels
      if (xAxisLabel) {
        g.append('text')
          .attr('class', 'db-linechart__axis-label db-linechart__axis-label--x')
          .attr('transform', `translate(${innerWidth / 2}, ${innerHeight + defaultMargin.bottom - 10})`)
          .style('text-anchor', 'middle')
          .text(xAxisLabel);
      }

      if (yAxisLabel) {
        g.append('text')
          .attr('class', 'db-linechart__axis-label db-linechart__axis-label--y')
          .attr('transform', 'rotate(-90)')
          .attr('y', 0 - defaultMargin.left + 20)
          .attr('x', 0 - (innerHeight / 2))
          .style('text-anchor', 'middle')
          .text(yAxisLabel);
      }

      // Title
      if (title) {
        svg.append('text')
          .attr('class', 'db-linechart__title')
          .attr('x', width / 2)
          .attr('y', 25)
          .style('text-anchor', 'middle')
          .text(title);
      }

    }, [data, width, height, xScale, yScale, lineGenerator, showGrid, showPoints, showTooltip, 
        color, xAxisLabel, yAxisLabel, title, defaultMargin, innerWidth, innerHeight, 
        defaultFormatX, defaultFormatY, defaultFormatTooltip, showPercentageChange, calculatePercentageChange]);

    if (!data.length) {
      return (
        <div
          ref={ref}
          className={clsx(
            'db-linechart',
            'db-linechart--empty',
            className
          )}
          {...props}
        >
          <div className="db-linechart__empty-state">
            <p>No data available</p>
          </div>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={clsx(
          'db-linechart',
          `db-linechart--${variant}`,
          `db-linechart--${color}`,
          className
        )}
        {...props}
      >
        <svg
          ref={svgRef}
          className="db-linechart__svg"
          width={width}
          height={height}
        />
        {showTooltip && (
          <div
            ref={tooltipRef}
            className="db-linechart__tooltip"
          />
        )}
      </div>
    );
  }
);

LineChart.displayName = 'LineChart';
