import React, { HTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import './Grid.css';

type SpacingValue = keyof typeof import('../../tokens/spacing').spacing;
type DimensionValue = SpacingValue | 'auto' | (string & {});
type GridAutoFlow = 'row' | 'column' | 'dense' | 'row dense' | 'column dense';
type JustifyItems = 'start' | 'end' | 'center' | 'stretch';
type AlignItems = 'start' | 'end' | 'center' | 'stretch';
type JustifyContent = 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly';
type AlignContent = 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly';
type BreakpointValue<T> = T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
};

export interface GridProps {
  /** Grid template areas definition */
  areas?: BreakpointValue<string[]>;
  /** Grid template columns */
  columns?: BreakpointValue<string[]>;
  /** Grid template rows */
  rows?: BreakpointValue<string[]>;
  /** Gap between items */
  gap?: BreakpointValue<SpacingValue>;
  /** Row gap between items */
  rowGap?: BreakpointValue<SpacingValue>;
  /** Column gap between items */
  columnGap?: BreakpointValue<SpacingValue>;
  /** Width of the grid container */
  width?: BreakpointValue<DimensionValue>;
  /** Height of the grid container */
  height?: BreakpointValue<DimensionValue>;
  /** Minimum width */
  minWidth?: BreakpointValue<DimensionValue>;
  /** Maximum width */
  maxWidth?: BreakpointValue<DimensionValue>;
  /** Minimum height */
  minHeight?: BreakpointValue<DimensionValue>;
  /** Maximum height */
  maxHeight?: BreakpointValue<DimensionValue>;
  /** Auto flow direction */
  autoFlow?: GridAutoFlow;
  /** Auto columns sizing */
  autoColumns?: string;
  /** Auto rows sizing */
  autoRows?: string;
  /** Justify items */
  justifyItems?: JustifyItems;
  /** Align items */
  alignItems?: AlignItems;
  /** Justify content */
  justifyContent?: JustifyContent;
  /** Align content */
  alignContent?: AlignContent;
  /** Inline grid */
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
  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
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

export const Grid = forwardRef<HTMLElement, GridProps>(
  (
    {
      areas,
      columns,
      rows,
      gap,
      rowGap,
      columnGap,
      width,
      height,
      minWidth,
      maxWidth,
      minHeight,
      maxHeight,
      autoFlow,
      autoColumns,
      autoRows,
      justifyItems = 'stretch',
      alignItems = 'stretch',
      justifyContent,
      alignContent,
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
    const resolvedAreas = getBaseValue(areas);
    const resolvedColumns = getBaseValue(columns);
    const resolvedRows = getBaseValue(rows);
    const resolvedGap = getBaseValue(gap);
    const resolvedRowGap = getBaseValue(rowGap);
    const resolvedColumnGap = getBaseValue(columnGap);
    const resolvedIsHidden = getBaseValue(isHidden, false);

    const computedStyle: React.CSSProperties = {
      ...style,
      ...(width && { width: resolveDimensionValue(getBaseValue(width)) }),
      ...(height && { height: resolveDimensionValue(getBaseValue(height)) }),
      ...(minWidth && { minWidth: resolveDimensionValue(getBaseValue(minWidth)) }),
      ...(maxWidth && { maxWidth: resolveDimensionValue(getBaseValue(maxWidth)) }),
      ...(minHeight && { minHeight: resolveDimensionValue(getBaseValue(minHeight)) }),
      ...(maxHeight && { maxHeight: resolveDimensionValue(getBaseValue(maxHeight)) }),
      ...(resolvedIsHidden && { display: 'none' }),
    };

    // Handle grid template areas
    if (resolvedAreas) {
      computedStyle.gridTemplateAreas = resolvedAreas.map(area => `"${area}"`).join(' ');
    }

    // Handle grid template columns
    if (resolvedColumns) {
      computedStyle.gridTemplateColumns = resolvedColumns.join(' ');
    }

    // Handle grid template rows
    if (resolvedRows) {
      computedStyle.gridTemplateRows = resolvedRows.join(' ');
    }

    // Handle other grid properties
    if (autoFlow) {
      computedStyle.gridAutoFlow = autoFlow;
    }
    if (autoColumns) {
      computedStyle.gridAutoColumns = autoColumns;
    }
    if (autoRows) {
      computedStyle.gridAutoRows = autoRows;
    }

    if (resolvedIsHidden) {
      return null;
    }

    return (
      <Element
        ref={ref}
        className={clsx(
          inline ? 'db-grid-inline' : 'db-grid',
          {
            [`db-grid--gap-${resolvedGap}`]: resolvedGap,
            [`db-grid--row-gap-${resolvedRowGap}`]: resolvedRowGap,
            [`db-grid--column-gap-${resolvedColumnGap}`]: resolvedColumnGap,
            [`db-grid--justify-items-${justifyItems}`]: justifyItems !== 'stretch',
            [`db-grid--align-items-${alignItems}`]: alignItems !== 'stretch',
            [`db-grid--justify-content-${justifyContent}`]: justifyContent,
            [`db-grid--align-content-${alignContent}`]: alignContent,
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

Grid.displayName = 'Grid';

// GridItem component for individual grid items
export interface GridItemProps {
  /** Grid area name */
  gridArea?: string;
  /** Grid column start */
  colStart?: number | string;
  /** Grid column end */
  colEnd?: number | string;
  /** Grid row start */
  rowStart?: number | string;
  /** Grid row end */
  rowEnd?: number | string;
  /** Grid column span */
  colSpan?: number;
  /** Grid row span */
  rowSpan?: number;
  /** Width of the grid item */
  width?: BreakpointValue<DimensionValue>;
  /** Height of the grid item */
  height?: BreakpointValue<DimensionValue>;
  /** Minimum width */
  minWidth?: BreakpointValue<DimensionValue>;
  /** Maximum width */
  maxWidth?: BreakpointValue<DimensionValue>;
  /** Minimum height */
  minHeight?: BreakpointValue<DimensionValue>;
  /** Maximum height */
  maxHeight?: BreakpointValue<DimensionValue>;
  /** Justify self */
  justifySelf?: 'start' | 'end' | 'center' | 'stretch';
  /** Align self */
  alignSelf?: 'start' | 'end' | 'center' | 'stretch';
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

export const GridItem = forwardRef<HTMLElement, GridItemProps>(
  (
    {
      gridArea,
      colStart,
      colEnd,
      rowStart,
      rowEnd,
      colSpan,
      rowSpan,
      width,
      height,
      minWidth,
      maxWidth,
      minHeight,
      maxHeight,
      justifySelf,
      alignSelf,
      isHidden,
      as: Element = 'div',
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const resolvedIsHidden = getBaseValue(isHidden, false);

    const computedStyle: React.CSSProperties = {
      ...style,
      ...(width && { width: resolveDimensionValue(getBaseValue(width)) }),
      ...(height && { height: resolveDimensionValue(getBaseValue(height)) }),
      ...(minWidth && { minWidth: resolveDimensionValue(getBaseValue(minWidth)) }),
      ...(maxWidth && { maxWidth: resolveDimensionValue(getBaseValue(maxWidth)) }),
      ...(minHeight && { minHeight: resolveDimensionValue(getBaseValue(minHeight)) }),
      ...(maxHeight && { maxHeight: resolveDimensionValue(getBaseValue(maxHeight)) }),
      ...(resolvedIsHidden && { display: 'none' }),
    };

    if (gridArea) {
      computedStyle.gridArea = gridArea;
    }

    if (colStart) {
      computedStyle.gridColumnStart = colStart;
    }
    if (colEnd) {
      computedStyle.gridColumnEnd = colEnd;
    }
    if (rowStart) {
      computedStyle.gridRowStart = rowStart;
    }
    if (rowEnd) {
      computedStyle.gridRowEnd = rowEnd;
    }

    if (colSpan) {
      computedStyle.gridColumn = `span ${colSpan}`;
    }
    if (rowSpan) {
      computedStyle.gridRow = `span ${rowSpan}`;
    }

    if (justifySelf) {
      computedStyle.justifySelf = justifySelf;
    }
    if (alignSelf) {
      computedStyle.alignSelf = alignSelf;
    }

    if (resolvedIsHidden) {
      return null;
    }

    return (
      <Element
        ref={ref}
        className={clsx('db-grid-item', className)}
        style={computedStyle}
        {...props}
      >
        {children}
      </Element>
    );
  }
);

GridItem.displayName = 'GridItem';
