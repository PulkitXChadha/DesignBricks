import React, { InputHTMLAttributes, forwardRef, useState } from 'react';
import clsx from 'clsx';
import './SearchInput.css';

export interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Size variant */
  size?: 'small' | 'medium' | 'large';
  /** Full width */
  fullWidth?: boolean;
  /** Show clear button */
  clearable?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Keyboard shortcut hint */
  shortcut?: string;
  /** Search handler */
  onSearch?: (value: string) => void;
  /** Clear handler */
  onClear?: () => void;
}

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg>
);

const ClearIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg>
);

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      size = 'medium',
      fullWidth = false,
      clearable = true,
      loading = false,
      shortcut,
      onSearch,
      onClear,
      value,
      onChange,
      onKeyDown,
      disabled = false,
      className,
      placeholder = 'Search...',
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState('');
    const currentValue = value !== undefined ? value : internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(e);
    };

    const handleClear = () => {
      if (value === undefined) {
        setInternalValue('');
      }
      onClear?.();
      onSearch?.('');
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onSearch?.(currentValue as string);
      }
      onKeyDown?.(e);
    };

    const showClearButton = clearable && currentValue && !loading && !disabled;

    return (
      <div
        className={clsx(
          'db-search',
          `db-search--${size}`,
          {
            'db-search--full-width': fullWidth,
            'db-search--disabled': disabled,
          },
          className
        )}
      >
        <div className="db-search__wrapper">
          <span className="db-search__icon">
            <SearchIcon />
          </span>
          <input
            ref={ref}
            type="search"
            className="db-search__input"
            value={currentValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            placeholder={placeholder}
            {...props}
          />
          {shortcut && !currentValue && (
            <span className="db-search__shortcut">{shortcut}</span>
          )}
          {loading && (
            <span className="db-search__loading">
              <svg
                className="db-search__spinner"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="6"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeDasharray="30"
                  strokeDashoffset="10"
                />
              </svg>
            </span>
          )}
          {showClearButton && (
            <button
              className="db-search__clear"
              onClick={handleClear}
              aria-label="Clear search"
              type="button"
            >
              <ClearIcon />
            </button>
          )}
        </div>
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput';