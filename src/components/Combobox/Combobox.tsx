import React, { forwardRef, useState, useRef, useEffect, useImperativeHandle } from 'react';
import clsx from 'clsx';
import './Combobox.css';

export interface ComboboxOption {
  /** Unique value for the option */
  value: string;
  /** Display label for the option */
  label: string;
  /** Optional description */
  description?: string;
  /** Whether the option is disabled */
  disabled?: boolean;
  /** Optional icon */
  icon?: React.ReactNode;
  /** Optional category for grouping */
  category?: string;
}

export interface ComboboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onSelect'> {
  /** Options to display in the dropdown */
  options: ComboboxOption[];
  /** Current value */
  value?: string;
  /** Callback when value changes */
  onChange?: (value: string) => void;
  /** Callback when an option is selected */
  onSelect?: (option: ComboboxOption) => void;
  /** Filter function for options */
  filterOptions?: (options: ComboboxOption[], query: string) => ComboboxOption[];
  /** Whether to show all options when focused (no filtering) */
  showAllOnFocus?: boolean;
  /** Maximum number of options to display */
  maxOptions?: number;
  /** Loading state */
  loading?: boolean;
  /** Empty state message */
  emptyMessage?: string;
  /** Whether to allow creating new options */
  allowCreate?: boolean;
  /** Callback for creating new options */
  onCreate?: (value: string) => void;
}

const defaultFilterOptions = (options: ComboboxOption[], query: string): ComboboxOption[] => {
  if (!query.trim()) return options;
  
  const lowerQuery = query.toLowerCase();
  return options.filter(option => 
    option.label.toLowerCase().includes(lowerQuery) ||
    option.description?.toLowerCase().includes(lowerQuery)
  );
};

export const Combobox = forwardRef<HTMLInputElement, ComboboxProps>(
  ({
    options = [],
    value = '',
    onChange,
    onSelect,
    filterOptions = defaultFilterOptions,
    showAllOnFocus = false,
    maxOptions = 10,
    loading = false,
    emptyMessage = 'No options found',
    allowCreate = false,
    onCreate,
    className,
    placeholder = 'Search...',
    disabled,
    ...props
  }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState(value);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const [focusedByMouse, setFocusedByMouse] = useState(false);
    
    const containerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    
    // Filter options based on input value
    const filteredOptions = showAllOnFocus && !inputValue.trim() 
      ? options.slice(0, maxOptions)
      : filterOptions(options, inputValue).slice(0, maxOptions);
    
    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      setHighlightedIndex(-1);
      setIsOpen(true);
      onChange?.(newValue);
    };
    
    // Handle option selection
    const handleSelect = (option: ComboboxOption) => {
      if (option.disabled) return;
      
      setInputValue(option.label);
      setIsOpen(false);
      setHighlightedIndex(-1);
      onSelect?.(option);
      onChange?.(option.value);
    };
    
    // Handle keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (!isOpen) {
        if (e.key === 'ArrowDown' || e.key === 'Enter') {
          setIsOpen(true);
          setHighlightedIndex(0);
          e.preventDefault();
        }
        return;
      }
      
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setHighlightedIndex(prev => 
            prev < filteredOptions.length - 1 ? prev + 1 : 0
          );
          setFocusedByMouse(false);
          break;
        case 'ArrowUp':
          e.preventDefault();
          setHighlightedIndex(prev => 
            prev > 0 ? prev - 1 : filteredOptions.length - 1
          );
          setFocusedByMouse(false);
          break;
        case 'Enter':
          e.preventDefault();
          if (highlightedIndex >= 0 && filteredOptions[highlightedIndex]) {
            handleSelect(filteredOptions[highlightedIndex]);
          } else if (allowCreate && inputValue.trim() && filteredOptions.length === 0) {
            onCreate?.(inputValue.trim());
            setIsOpen(false);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setHighlightedIndex(-1);
          inputRef.current?.blur();
          break;
        case 'Tab':
          setIsOpen(false);
          break;
      }
    };
    
    // Handle clicks outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    
    // Update input value when prop changes
    useEffect(() => {
      setInputValue(value);
    }, [value]);
    
    // Forward ref to input element
    useImperativeHandle(ref, () => inputRef.current!, []);
    
    // Group options by category
    const groupedOptions = filteredOptions.reduce((acc, option, index) => {
      const category = option.category || 'default';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push({ option, index });
      return acc;
    }, {} as Record<string, { option: ComboboxOption; index: number }[]>);
    
    const showCreateOption = allowCreate && inputValue.trim() && filteredOptions.length === 0 && !loading;
    
    return (
      <div ref={containerRef} className={clsx('db-combobox', className)}>
        <div className="db-combobox__input-wrapper">
          <input
            {...props}
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              if (showAllOnFocus) setIsOpen(true);
            }}
            onClick={() => setIsOpen(true)}
            placeholder={placeholder}
            disabled={disabled}
            className="db-combobox__input"
            role="combobox"
            aria-expanded={isOpen}
            aria-controls={isOpen ? 'combobox-listbox' : undefined}
            aria-haspopup="listbox"
            aria-autocomplete="list"
            autoComplete="off"
          />
          <div className="db-combobox__chevron">
            <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M6 6.917L8.947 4 10 5.053 6 9 2 5.053 3.053 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        
        {isOpen && (
          <div className="db-combobox__dropdown">
            <ul
              ref={listRef}
              role="listbox"
              id="combobox-listbox"
              className="db-combobox__list"
            >
              {loading ? (
                <li className="db-combobox__loading">
                  <div className="db-combobox__spinner" />
                  Loading...
                </li>
              ) : (
                <>
                  {Object.entries(groupedOptions).map(([category, items]) => (
                    <React.Fragment key={category}>
                      {category !== 'default' && items.length > 0 && (
                        <li className="db-combobox__category">
                          {category}
                        </li>
                      )}
                      {items.map(({ option, index }) => (
                        <li
                          key={option.value}
                          role="option"
                          aria-selected={highlightedIndex === index}
                          className={clsx(
                            'db-combobox__option',
                            {
                              'db-combobox__option--highlighted': highlightedIndex === index && !focusedByMouse,
                              'db-combobox__option--disabled': option.disabled,
                            }
                          )}
                          onClick={() => handleSelect(option)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              handleSelect(option);
                            }
                          }}
                          onMouseEnter={() => {
                            setHighlightedIndex(index);
                            setFocusedByMouse(true);
                          }}
                          tabIndex={option.disabled ? -1 : 0}
                        >
                          {option.icon && (
                            <div className="db-combobox__option-icon">
                              {option.icon}
                            </div>
                          )}
                          <div className="db-combobox__option-content">
                            <div className="db-combobox__option-label">
                              {option.label}
                            </div>
                            {option.description && (
                              <div className="db-combobox__option-description">
                                {option.description}
                              </div>
                            )}
                          </div>
                        </li>
                      ))}
                    </React.Fragment>
                  ))}
                  
                  {showCreateOption && (
                    <li
                      role="option"
                      className="db-combobox__create-option"
                      onClick={() => {
                        onCreate?.(inputValue.trim());
                        setIsOpen(false);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          onCreate?.(inputValue.trim());
                          setIsOpen(false);
                        }
                      }}
                      tabIndex={0}
                      aria-selected={false}
                    >
                      <div className="db-combobox__option-icon">
                        <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M6.75 5.25V1h-1.5v4.25H1v1.5h4.25V11h1.5V6.75H11v-1.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="db-combobox__option-content">
                        <div className="db-combobox__option-label">
                          Create "{inputValue}"
                        </div>
                      </div>
                    </li>
                  )}
                  
                  {!loading && filteredOptions.length === 0 && !showCreateOption && (
                    <li className="db-combobox__empty">
                      {emptyMessage}
                    </li>
                  )}
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    );
  }
);

Combobox.displayName = 'Combobox';

