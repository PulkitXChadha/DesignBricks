import React, { ReactNode, forwardRef, HTMLAttributes } from 'react';
import clsx from 'clsx';
import './PillControl.css';

export interface PillOption {
  /** Unique identifier for the option */
  value: string;
  /** Display label */
  label: ReactNode;
  /** Optional icon */
  icon?: ReactNode;
  /** Whether option is disabled */
  disabled?: boolean;
  /** Badge or count to display */
  badge?: string | number;
}

export interface PillControlProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Array of pill options */
  options: PillOption[];
  /** Currently selected value */
  value?: string;
  /** Default selected value (uncontrolled) */
  defaultValue?: string;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Name for the radio group */
  name?: string;
  /** Size of the pills */
  size?: 'small' | 'medium' | 'large';
  /** Whether the control is disabled */
  disabled?: boolean;
  /** Whether to allow deselection (no selection) */
  allowDeselect?: boolean;
  /** Full width pills */
  fullWidth?: boolean;
}

export const PillControl = forwardRef<HTMLDivElement, PillControlProps>(
  (
    {
      options,
      value: controlledValue,
      defaultValue,
      onChange,
      name,
      size = 'medium',
      disabled = false,
      allowDeselect = false,
      fullWidth = false,
      className,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(
      defaultValue || (allowDeselect ? undefined : options[0]?.value)
    );

    const currentValue = controlledValue !== undefined ? controlledValue : internalValue;
    const groupName = name || `pill-control-${Math.random().toString(36).substr(2, 9)}`;

    const handleChange = (optionValue: string, optionDisabled?: boolean) => {
      if (disabled || optionDisabled) return;

      let newValue: string | undefined = optionValue;

      // Handle deselection if allowed
      if (allowDeselect && currentValue === optionValue) {
        newValue = undefined;
      }

      if (controlledValue === undefined) {
        setInternalValue(newValue);
      }

      onChange?.(newValue || '');
    };

    const handleKeyDown = (
      event: React.KeyboardEvent<HTMLDivElement>,
      optionValue: string,
      optionDisabled?: boolean
    ) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleChange(optionValue, optionDisabled);
      }
    };

    return (
      <div
        ref={ref}
        className={clsx(
          'db-pill-control',
          `db-pill-control--${size}`,
          {
            'db-pill-control--disabled': disabled,
            'db-pill-control--full-width': fullWidth,
          },
          className
        )}
        role="radiogroup"
        {...props}
      >
        {options.map((option) => {
          const isSelected = currentValue === option.value;
          const isDisabled = disabled || option.disabled;

          return (
            <label
              key={option.value}
              className={clsx(
                'db-pill-control__option',
                {
                  'db-pill-control__option--selected': isSelected,
                  'db-pill-control__option--disabled': isDisabled,
                }
              )}
            >
              <input
                type="radio"
                name={groupName}
                value={option.value}
                checked={isSelected}
                disabled={isDisabled}
                onChange={() => handleChange(option.value, option.disabled)}
                className="db-pill-control__input"
              />
              <div
                className="db-pill-control__pill"
                role="radio"
                aria-checked={isSelected}
                aria-disabled={isDisabled}
                tabIndex={isDisabled ? -1 : 0}
                onKeyDown={(event) => handleKeyDown(event, option.value, option.disabled)}
              >
                {option.icon && (
                  <span className="db-pill-control__icon">{option.icon}</span>
                )}
                <span className="db-pill-control__label">{option.label}</span>
                {option.badge !== undefined && (
                  <span className="db-pill-control__badge">{option.badge}</span>
                )}
              </div>
            </label>
          );
        })}
      </div>
    );
  }
);

PillControl.displayName = 'PillControl';
