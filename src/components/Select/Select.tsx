import React, { useState, useRef, useEffect } from 'react';
import './Select.css';

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
  group?: string;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string | number | (string | number)[];
  onChange?: (value: string | number | (string | number)[]) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  multiple?: boolean;
  searchable?: boolean;
  clearable?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'outlined' | 'filled';
  maxHeight?: number;
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  disabled = false,
  error = false,
  helperText,
  label,
  required = false,
  fullWidth = false,
  multiple = false,
  searchable = false,
  clearable = false,
  size = 'medium',
  variant = 'outlined',
  maxHeight = 300,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const selectRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Normalize value to always be an array for easier handling
  const normalizedValue = Array.isArray(value)
    ? value
    : value !== undefined && value !== null
      ? [value]
      : [];

  // Filter options based on search term
  const filteredOptions = searchTerm
    ? options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  // Group options if needed
  const groupedOptions = filteredOptions.reduce((acc, option) => {
    const group = option.group || '';
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(option);
    return acc;
  }, {} as Record<string, SelectOption[]>);

  // Get display text for current selection
  const getDisplayText = () => {
    if (normalizedValue.length === 0) {
      return '';
    }

    const selectedOptions = options.filter(opt =>
      normalizedValue.includes(opt.value)
    );

    if (multiple) {
      return selectedOptions.map(opt => opt.label).join(', ');
    }

    return selectedOptions[0]?.label || '';
  };

  // Handle option selection
  const handleSelect = (optionValue: string | number) => {
    if (multiple) {
      const newValue = normalizedValue.includes(optionValue)
        ? normalizedValue.filter(v => v !== optionValue)
        : [...normalizedValue, optionValue];
      onChange?.(newValue);
    } else {
      onChange?.(optionValue);
      setIsOpen(false);
      setSearchTerm('');
    }
  };

  // Handle clear
  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange?.(multiple ? [] : '');
    setSearchTerm('');
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen && (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown')) {
      e.preventDefault();
      setIsOpen(true);
      return;
    }

    if (!isOpen) return;

    switch (e.key) {
      case 'Escape':
        setIsOpen(false);
        setSearchTerm('');
        break;
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(prev =>
          prev < filteredOptions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(prev => prev > 0 ? prev - 1 : prev);
        break;
      case 'Enter':
        e.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < filteredOptions.length) {
          const option = filteredOptions[focusedIndex];
          if (!option.disabled) {
            handleSelect(option.value);
          }
        }
        break;
    }
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Update focused index when filtered options change
  useEffect(() => {
    setFocusedIndex(-1);
  }, [searchTerm]);

  // Scroll focused option into view
  useEffect(() => {
    if (focusedIndex >= 0 && dropdownRef.current) {
      const options = dropdownRef.current.querySelectorAll('.db-select__option');
      const focusedOption = options[focusedIndex] as HTMLElement;
      if (focusedOption) {
        focusedOption.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [focusedIndex]);

  const showClearButton = clearable && normalizedValue.length > 0 && !disabled;

  return (
    <div
      ref={selectRef}
      className={`db-select db-select--${size} db-select--${variant} ${
        fullWidth ? 'db-select--full-width' : ''
      } ${disabled ? 'db-select--disabled' : ''} ${
        error ? 'db-select--error' : ''
      } ${isOpen ? 'db-select--open' : ''}`}
    >
      {label && (
        <label className="db-select__label">
          {label}
          {required && <span className="db-select__required">*</span>}
        </label>
      )}

      <div
        className="db-select__trigger"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
        role="combobox"
        aria-expanded={isOpen}
        aria-controls={isOpen ? 'select-listbox' : undefined}
        aria-haspopup="listbox"
        aria-disabled={disabled}
      >
        {searchable && isOpen ? (
          <input
            ref={inputRef}
            type="text"
            className="db-select__search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            placeholder={getDisplayText() || placeholder}
          />
        ) : (
          <span className="db-select__value">
            {getDisplayText() || (
              <span className="db-select__placeholder">{placeholder}</span>
            )}
          </span>
        )}

        {showClearButton && (
          <button
            className="db-select__clear"
            onClick={handleClear}
            aria-label="Clear selection"
            tabIndex={-1}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M12 4L4 12M4 4L12 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        <svg
          className="db-select__arrow"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="db-select__dropdown"
          style={{ maxHeight }}
          role="listbox"
          id="select-listbox"
          aria-multiselectable={multiple}
        >
          {filteredOptions.length === 0 ? (
            <div className="db-select__empty">No options found</div>
          ) : (
            Object.entries(groupedOptions).map(([group, groupOptions]) => (
              <div key={group}>
                {group && (
                  <div className="db-select__group-label">{group}</div>
                )}
                {groupOptions.map((option, index) => {
                  const globalIndex = filteredOptions.indexOf(option);
                  const isSelected = normalizedValue.includes(option.value);
                  const isFocused = globalIndex === focusedIndex;

                  return (
                    <div
                      key={option.value}
                      className={`db-select__option ${
                        isSelected ? 'db-select__option--selected' : ''
                      } ${
                        option.disabled ? 'db-select__option--disabled' : ''
                      } ${
                        isFocused ? 'db-select__option--focused' : ''
                      }`}
                      onClick={() => !option.disabled && handleSelect(option.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          !option.disabled && handleSelect(option.value);
                        }
                      }}
                      onMouseEnter={() => setFocusedIndex(globalIndex)}
                      role="option"
                      aria-selected={isSelected}
                      aria-disabled={option.disabled}
                      tabIndex={option.disabled ? -1 : 0}
                    >
                      {multiple && (
                        <span className="db-select__checkbox">
                          {isSelected && (
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                              <path d="M10.28 2.28L4.5 8.06L1.72 5.28a.75.75 0 00-1.06 1.06l3.31 3.31a.75.75 0 001.06 0l6.31-6.31a.75.75 0 10-1.06-1.06z" />
                            </svg>
                          )}
                        </span>
                      )}
                      <span className="db-select__option-label">{option.label}</span>
                    </div>
                  );
                })}
              </div>
            ))
          )}
        </div>
      )}

      {helperText && (
        <div className="db-select__helper-text">{helperText}</div>
      )}
    </div>
  );
};