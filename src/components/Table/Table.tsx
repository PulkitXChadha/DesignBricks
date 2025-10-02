import React, { HTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import './Table.css';

export interface Column<T = any> {
  key: string;
  header: React.ReactNode;
  width?: number | string;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  render?: (_value: any, _row: T, _index: number) => React.ReactNode;
}

export interface TableProps<T = any> extends Omit<HTMLAttributes<HTMLTableElement>, 'children'> {
  /** Table columns configuration */
  columns: Column<T>[];
  /** Table data */
  data: T[];
  /** Striped rows */
  striped?: boolean;
  /** Hoverable rows */
  hoverable?: boolean;
  /** Bordered table */
  bordered?: boolean;
  /** Compact size */
  compact?: boolean;
  /** Sticky header */
  stickyHeader?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Empty state message */
  emptyMessage?: React.ReactNode;
  /** Row click handler */
  onRowClick?: (_row: T, _index: number) => void;
  /** Sort handler */
  onSort?: (_key: string, _direction: 'asc' | 'desc') => void;
  /** Current sort state */
  sortBy?: { key: string; direction: 'asc' | 'desc' };
}

const SortIcon = ({ direction }: { direction?: 'asc' | 'desc' | null }) => (
  <span className="db-table__sort-icon">
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
      <path
        d="M7 3L3.5 7h7L7 3z"
        opacity={direction === 'asc' ? 1 : 0.3}
      />
      <path
        d="M7 11l3.5-4h-7L7 11z"
        opacity={direction === 'desc' ? 1 : 0.3}
      />
    </svg>
  </span>
);

export const Table = forwardRef<HTMLTableElement, TableProps>(
  <T extends Record<string, any>>(
    {
      columns,
      data,
      striped = false,
      hoverable = true,
      bordered = false,
      compact = false,
      stickyHeader = false,
      loading = false,
      emptyMessage = 'No data available',
      onRowClick,
      onSort,
      sortBy,
      className,
      ...props
    }: TableProps<T>,
    ref: React.ForwardedRef<HTMLTableElement>
  ) => {
    const handleSort = (column: Column<T>) => {
      if (!column.sortable || !onSort) return;

      const newDirection =
        sortBy?.key === column.key && sortBy?.direction === 'asc'
          ? 'desc'
          : 'asc';

      onSort(column.key, newDirection);
    };

    const getCellValue = (row: T, column: Column<T>, index: number) => {
      const value = row[column.key];
      if (column.render) {
        return column.render(value, row, index);
      }
      return value;
    };

    return (
      <div className={clsx('db-table-wrapper', {
        'db-table-wrapper--sticky': stickyHeader,
      })}>
        <table
          ref={ref}
          className={clsx(
            'db-table',
            {
              'db-table--striped': striped,
              'db-table--hoverable': hoverable,
              'db-table--bordered': bordered,
              'db-table--compact': compact,
              'db-table--loading': loading,
            },
            className
          )}
          {...props}
        >
          <thead className="db-table__head">
            <tr className="db-table__row">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={clsx('db-table__header', {
                    'db-table__header--sortable': column.sortable,
                    [`db-table__header--${column.align}`]: column.align,
                  })}
                  style={{ width: column.width }}
                  onClick={() => column.sortable && handleSort(column)}
                >
                  <div className="db-table__header-content">
                    <span>{column.header}</span>
                    {column.sortable && (
                      <SortIcon
                        direction={
                          sortBy?.key === column.key
                            ? sortBy.direction
                            : null
                        }
                      />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="db-table__body">
            {loading ? (
              <tr className="db-table__row">
                <td
                  className="db-table__cell db-table__cell--loading"
                  colSpan={columns.length}
                >
                  <div className="db-table__loading">
                    <svg
                      className="db-table__spinner"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        strokeWidth="3"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeDasharray="60"
                        strokeDashoffset="15"
                      />
                    </svg>
                    <span>Loading...</span>
                  </div>
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr className="db-table__row">
                <td
                  className="db-table__cell db-table__cell--empty"
                  colSpan={columns.length}
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={clsx('db-table__row', {
                    'db-table__row--clickable': Boolean(onRowClick),
                  })}
                  onClick={() => onRowClick?.(row, rowIndex)}
                >
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={clsx('db-table__cell', {
                        [`db-table__cell--${column.align}`]: column.align,
                      })}
                    >
                      {getCellValue(row, column, rowIndex)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  }
);

Table.displayName = 'Table';