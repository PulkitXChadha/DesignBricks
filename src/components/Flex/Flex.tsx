import React, { forwardRef } from 'react';
import clsx from 'clsx';
import './Flex.css';

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';
type JustifyContent = 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'flex-start' | 'flex-end';
type AlignItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch' | 'flex-start' | 'flex-end';
type AlignContent = 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'stretch' | 'flex-start' | 'flex-end';
type SpacingValue = keyof typeof import('../../tokens/spacing').spacing;
type DimensionValue = SpacingValue | 'auto' | (string & {});
type BreakpointValue<T> = T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
};

export interface FlexProps {
  /** Flex direction */
  direction?: BreakpointValue<FlexDirection>;
  /** Flex wrap */
  wrap?: BreakpointValue<FlexWrap>;
  /** Justify content (main axis alignment) */
  justifyContent?: BreakpointValue<JustifyContent>;
  /** Align items (cross axis alignment) */
  alignItems?: BreakpointValue<AlignItems>;
  /** Align content (cross axis alignment for wrapped lines) */
  alignContent?: BreakpointValue<AlignContent>;
  /** Gap between items */
  gap?: BreakpointValue<SpacingValue>;
  /** Row gap between items */
  rowGap?: BreakpointValue<SpacingValue>;
  /** Column gap between items */
  columnGap?: BreakpointValue<SpacingValue>;
  /** Width of the flex container */
  width?: BreakpointValue<DimensionValue>;
  /** Height of the flex container */
  height?: BreakpointValue<DimensionValue>;
  /** Minimum width */
  minWidth?: BreakpointValue<DimensionValue>;
  /** Maximum width */
  maxWidth?: BreakpointValue<DimensionValue>;
  /** Minimum height */
  minHeight?: BreakpointValue<DimensionValue>;
  /** Maximum height */
  maxHeight?: BreakpointValue<DimensionValue>;
  /** Flex grow */
  grow?: boolean | number;
  /** Flex shrink */
  shrink?: boolean | number;
  /** Flex basis */
  basis?: string;
  /** Inline flex */
  inline?: boolean;
  /** Whether the element is hidden */
  isHidden?: BreakpointValue<boolean>;
  /** Element type to render */
  as?: React.ElementType;
  /** Children */
  children?: React.ReactNode;
  /** CSS class name */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** ARIA role */
  role?: string;
  /** ARIA label for accessibility */
  'aria-label'?: string;
  /** ARIA labelledby for accessibility */
  'aria-labelledby'?: string;
  /** ARIA describedby for accessibility */
  'aria-describedby'?: string;
}

// Utility function to get the base value from responsive props
function getBaseValue<T>(value: BreakpointValue<T> | undefined, defaultValue?: T): T | undefined {
  if (value === undefined) return defaultValue;
  if (typeof value === 'object' && value !== null) {
    return (value as any).base ?? Object.values(value)[0] ?? defaultValue;
  }
  return value as T;
}

// Utility function to resolve dimension values
function resolveDimensionValue(value: DimensionValue | undefined): string | undefined {
  if (value === undefined) return undefined;
  if (typeof value === 'string' && (value === 'auto' || value.includes('px') || value.includes('%') || value.includes('fr') || value.includes('rem') || value.includes('em'))) {
    return value;
  }
  // Map spacing tokens to pixel values
  const spacingMap: Record<string, string> = {
    '0': '0',
    'px': '1px',
    '0.5': '2px',
    '1': '4px',
    '1.5': '6px',
    '2': '8px',
    '2.5': '10px',
    '3': '12px',
    '3.5': '14px',
    '4': '16px',
    '5': '20px',
    '6': '24px',
    '7': '28px',
    '8': '32px',
    '9': '36px',
    '10': '40px',
    '11': '44px',
    '12': '48px',
    '14': '56px',
    '16': '64px',
    '20': '80px',
    '24': '96px',
    '28': '112px',
    '32': '128px',
  };
  return spacingMap[String(value)] || String(value);
}

export const Flex = forwardRef<HTMLElement, FlexProps>(
  (
    {
      direction = 'row',
      wrap = 'nowrap',
      justifyContent = 'flex-start',
      alignItems = 'stretch',
      alignContent = 'stretch',
      gap,
      rowGap,
      columnGap,
      width,
      height,
      minWidth,
      maxWidth,
      minHeight,
      maxHeight,
      grow,
      shrink,
      basis,
      inline = false,
      isHidden,
      as: Element = 'div',
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    // Resolve responsive values to their base values for now
    // In a full implementation, this would use media queries or CSS-in-JS
    const resolvedDirection = getBaseValue(direction, 'row');
    const resolvedWrap = getBaseValue(wrap, 'nowrap');
    const resolvedJustifyContent = getBaseValue(justifyContent, 'flex-start');
    const resolvedAlignItems = getBaseValue(alignItems, 'stretch');
    const resolvedAlignContent = getBaseValue(alignContent, 'stretch');
    const resolvedGap = getBaseValue(gap);
    const resolvedRowGap = getBaseValue(rowGap);
    const resolvedColumnGap = getBaseValue(columnGap);
    const resolvedIsHidden = getBaseValue(isHidden, false);

    const computedStyle: React.CSSProperties = {
      ...style,
      ...(grow !== undefined && { flexGrow: typeof grow === 'boolean' ? (grow ? 1 : 0) : grow }),
      ...(shrink !== undefined && { flexShrink: typeof shrink === 'boolean' ? (shrink ? 1 : 0) : shrink }),
      ...(basis && { flexBasis: basis }),
      ...(width && { width: resolveDimensionValue(getBaseValue(width)) }),
      ...(height && { height: resolveDimensionValue(getBaseValue(height)) }),
      ...(minWidth && { minWidth: resolveDimensionValue(getBaseValue(minWidth)) }),
      ...(maxWidth && { maxWidth: resolveDimensionValue(getBaseValue(maxWidth)) }),
      ...(minHeight && { minHeight: resolveDimensionValue(getBaseValue(minHeight)) }),
      ...(maxHeight && { maxHeight: resolveDimensionValue(getBaseValue(maxHeight)) }),
      ...(resolvedIsHidden && { display: 'none' }),
    };

    if (resolvedIsHidden) {
      return null;
    }

    return (
      <Element
        ref={ref}
        className={clsx(
          inline ? 'db-flex-inline' : 'db-flex',
          resolvedDirection && `db-flex--direction-${resolvedDirection}`,
          resolvedWrap && `db-flex--wrap-${resolvedWrap}`,
          resolvedJustifyContent && `db-flex--justify-${resolvedJustifyContent.replace('flex-', '')}`,
          resolvedAlignItems && `db-flex--align-items-${resolvedAlignItems.replace('flex-', '')}`,
          resolvedAlignContent && `db-flex--align-content-${resolvedAlignContent.replace('flex-', '')}`,
          {
            [`db-flex--gap-${resolvedGap}`]: resolvedGap,
            [`db-flex--row-gap-${resolvedRowGap}`]: resolvedRowGap,
            [`db-flex--column-gap-${resolvedColumnGap}`]: resolvedColumnGap,
          },
          className
        )}
        style={computedStyle}
        {...props}
      >
        {children}
      </Element>
    );
  }
);

Flex.displayName = 'Flex';
