import React, { ReactNode, CSSProperties } from 'react';
import clsx from 'clsx';
import './ChartTooltip.css';

// Enhanced tooltip configuration interfaces
export interface TooltipPosition {
  /** X coordinate */
  x: number;
  /** Y coordinate */ 
  y: number;
}

export interface TooltipOffset {
  /** Horizontal offset from data point */
  x?: number;
  /** Vertical offset from data point */
  y?: number;
}

export interface TooltipPlacement {
  /** Preferred placement relative to data point */
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
  /** Offset from the data point */
  offset?: TooltipOffset;
  /** Whether to flip placement when near edges */
  flip?: boolean;
}

export interface TooltipStyle {
  /** Custom background color */
  backgroundColor?: string;
  /** Custom text color */
  color?: string;
  /** Custom border color */
  borderColor?: string;
  /** Custom border radius */
  borderRadius?: string | number;
  /** Custom padding */
  padding?: string | number;
  /** Custom font size */
  fontSize?: string | number;
  /** Custom font weight */
  fontWeight?: string | number;
  /** Custom box shadow */
  boxShadow?: string;
  /** Maximum width */
  maxWidth?: string | number;
  /** Minimum width */
  minWidth?: string | number;
  /** Custom z-index */
  zIndex?: number;
}

export interface CustomTooltipProps<TData = any> {
  /** The data point being hovered */
  data: TData;
  /** Index of the data point */
  index?: number;
  /** Additional data (e.g., percentage for pie charts) */
  additionalData?: any;
  /** Chart dimensions for positioning calculations */
  chartDimensions?: {
    width: number;
    height: number;
  };
}

export interface TooltipConfig<TData = any> {
  /** Enable/disable tooltip */
  enabled?: boolean;
  /** Custom tooltip component */
  component?: React.ComponentType<CustomTooltipProps<TData>>;
  /** HTML content function (legacy support) */
  content?: (data: TData, index?: number, additionalData?: any) => string;
  /** Custom styling */
  style?: TooltipStyle;
  /** Positioning configuration */
  placement?: TooltipPlacement;
  /** Custom CSS class */
  className?: string;
  /** Animation duration in ms */
  animationDuration?: number;
  /** Delay before showing tooltip in ms */
  showDelay?: number;
  /** Delay before hiding tooltip in ms */
  hideDelay?: number;
}

export interface ChartTooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether tooltip is visible */
  visible: boolean;
  /** Position of the tooltip */
  position: TooltipPosition;
  /** Tooltip content */
  children: ReactNode;
  /** Custom styling */
  tooltipStyle?: TooltipStyle;
  /** Positioning configuration */
  placement?: TooltipPlacement;
  /** Animation duration */
  animationDuration?: number;
  /** Chart container dimensions for bounds checking */
  containerDimensions?: {
    width: number;
    height: number;
  };
}

export const ChartTooltip: React.FC<ChartTooltipProps> = ({
  visible,
  position,
  children,
  tooltipStyle = {},
  placement = {},
  animationDuration = 200,
  containerDimensions,
  className,
  style: htmlStyle,
  ...props
}) => {
  const {
    placement: preferredPlacement = 'auto',
    offset = { x: 0, y: -10 },
    flip = true
  } = placement || {};

  // Calculate actual position with offset and placement
  const calculatePosition = (): CSSProperties => {
    let { x, y } = position;
    const { x: offsetX = 0, y: offsetY = -10 } = offset;

    // Auto-placement logic when near container edges
    if (preferredPlacement === 'auto' && containerDimensions && flip) {
      const tooltipEstimatedWidth = 240; // More realistic estimate
      const tooltipEstimatedHeight = 80; // More realistic estimate
      const padding = 12;
      
      // Account for transform: translateX(-50%) in boundary calculations
      const halfTooltipWidth = tooltipEstimatedWidth / 2;

      // Check boundaries and adjust positioning
      let finalX = x + offsetX;
      let finalY = y + offsetY;
      let transformX = '-50%'; // Default centering

      // Check horizontal boundaries first to determine positioning strategy
      const centeredLeft = finalX - halfTooltipWidth;
      const centeredRight = finalX + halfTooltipWidth;

      if (centeredRight > containerDimensions.width - padding) {
        // Position tooltip to the left of the data point
        finalX = x - Math.abs(offsetX);
        transformX = '-100%'; // Right-align tooltip to the data point
      } else if (centeredLeft < padding) {
        // Position tooltip to the right of the data point
        finalX = x + Math.abs(offsetX);
        transformX = '0%'; // Left-align tooltip to the data point
      }

      // Check bottom edge overflow
      if (finalY + tooltipEstimatedHeight > containerDimensions.height - padding) {
        // Position tooltip above the data point
        finalY = y - tooltipEstimatedHeight - Math.abs(offsetY);
      }

      // Check top edge overflow
      if (finalY < padding) {
        // Position tooltip below the data point
        finalY = y + Math.abs(offsetY) + 12;
      }

      // Final boundary enforcement based on transform
      if (transformX === '-50%') {
        // Centered tooltip - ensure it doesn't overflow on either side
        const leftBound = halfTooltipWidth + padding;
        const rightBound = containerDimensions.width - halfTooltipWidth - padding;
        finalX = Math.max(leftBound, Math.min(finalX, rightBound));
      } else if (transformX === '0%') {
        // Left-aligned tooltip - ensure right edge doesn't overflow
        const rightBound = containerDimensions.width - tooltipEstimatedWidth - padding;
        finalX = Math.max(padding, Math.min(finalX, rightBound));
      } else if (transformX === '-100%') {
        // Right-aligned tooltip - ensure left edge doesn't overflow
        finalX = Math.max(tooltipEstimatedWidth + padding, Math.min(finalX, containerDimensions.width - padding));
      }
      
      // For Y: ensure tooltip doesn't go outside top/bottom edges  
      finalY = Math.max(padding, Math.min(finalY, containerDimensions.height - tooltipEstimatedHeight - padding));

      const baseStyle: CSSProperties = {
        position: 'absolute',
        left: `${finalX}px`,
        top: `${finalY}px`,
        transform: `translateX(${transformX})`,
        opacity: visible ? 1 : 0,
        visibility: visible ? 'visible' : 'hidden',
        pointerEvents: 'none',
        zIndex: tooltipStyle?.zIndex || 1000,
        transition: `opacity ${animationDuration}ms ease-in-out, visibility ${animationDuration}ms ease-in-out`,
      };

      // Apply custom styles
      const customStyle: CSSProperties = {
        backgroundColor: tooltipStyle?.backgroundColor,
        color: tooltipStyle?.color,
        borderColor: tooltipStyle?.borderColor,
        borderRadius: tooltipStyle?.borderRadius,
        padding: tooltipStyle?.padding,
        fontSize: tooltipStyle?.fontSize,
        fontWeight: tooltipStyle?.fontWeight,
        boxShadow: tooltipStyle?.boxShadow,
        maxWidth: tooltipStyle?.maxWidth,
        minWidth: tooltipStyle?.minWidth,
      };

      return { ...baseStyle, ...customStyle, ...htmlStyle };
    }

    // Fallback for non-auto placement or when flip is disabled
    const baseStyle: CSSProperties = {
      position: 'absolute',
      left: `${x + offsetX}px`,
      top: `${y + offsetY}px`,
      transform: 'translateX(-50%)', // Center horizontally by default
      opacity: visible ? 1 : 0,
      visibility: visible ? 'visible' : 'hidden',
      pointerEvents: 'none',
      zIndex: tooltipStyle?.zIndex || 1000,
      transition: `opacity ${animationDuration}ms ease-in-out, visibility ${animationDuration}ms ease-in-out`,
    };

    // Apply custom styles
    const customStyle: CSSProperties = {
      backgroundColor: tooltipStyle?.backgroundColor,
      color: tooltipStyle?.color,
      borderColor: tooltipStyle?.borderColor,
      borderRadius: tooltipStyle?.borderRadius,
      padding: tooltipStyle?.padding,
      fontSize: tooltipStyle?.fontSize,
      fontWeight: tooltipStyle?.fontWeight,
      boxShadow: tooltipStyle?.boxShadow,
      maxWidth: tooltipStyle?.maxWidth,
      minWidth: tooltipStyle?.minWidth,
    };

    return { ...baseStyle, ...customStyle, ...htmlStyle };
  };

  return (
    <div
      className={clsx('db-chart-tooltip', className)}
      style={calculatePosition()}
      {...props}
    >
      {children}
    </div>
  );
};

ChartTooltip.displayName = 'ChartTooltip';

// Default tooltip content components for backward compatibility
export interface DefaultTooltipContentProps {
  label?: string;
  value: string | number;
  category?: string;
  color?: string;
  percentage?: number;
  additionalInfo?: ReactNode;
}

export const DefaultTooltipContent: React.FC<DefaultTooltipContentProps> = ({
  label,
  value,
  category,
  color,
  percentage,
  additionalInfo
}) => {
  return (
    <div className="db-chart-tooltip__content">
      {label && (
        <div className="db-chart-tooltip__label">{label}</div>
      )}
      {category && (
        <div className="db-chart-tooltip__category">{category}</div>
      )}
      <div className="db-chart-tooltip__value-container">
        {color && (
          <div 
            className="db-chart-tooltip__color-indicator"
            style={{ backgroundColor: color }}
          />
        )}
        <div className="db-chart-tooltip__value">{value}</div>
        {percentage !== undefined && (
          <div className="db-chart-tooltip__percentage">({percentage.toFixed(1)}%)</div>
        )}
      </div>
      {additionalInfo}
    </div>
  );
};

DefaultTooltipContent.displayName = 'DefaultTooltipContent';
