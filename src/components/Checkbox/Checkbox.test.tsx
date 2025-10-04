import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Checkbox, CheckboxProps } from './Checkbox';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

describe('Checkbox', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      render(<Checkbox />);
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeInTheDocument();
      expect(checkbox).toHaveClass('db-checkbox__input');
      expect(checkbox).toHaveAttribute('type', 'checkbox');
      
      const wrapper = checkbox.closest('.db-checkbox');
      expect(wrapper).toHaveClass(
        'db-checkbox',
        'db-checkbox--medium'
      );
      expect(wrapper).not.toHaveClass(
        'db-checkbox--error',
        'db-checkbox--disabled'
      );
    });

    it('renders with custom className', () => {
      render(<Checkbox className="custom-checkbox" />);
      
      const wrapper = screen.getByRole('checkbox').closest('.db-checkbox');
      expect(wrapper).toHaveClass('db-checkbox', 'custom-checkbox');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<Checkbox ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
      expect(ref.current).toHaveAttribute('type', 'checkbox');
      expect(ref.current).toHaveClass('db-checkbox__input');
    });

    it('forwards additional props to input', () => {
      render(
        <Checkbox
          data-testid="checkbox-input"
          name="test-checkbox"
          value="test-value"
        />
      );
      
      const checkbox = screen.getByTestId('checkbox-input');
      expect(checkbox).toHaveAttribute('name', 'test-checkbox');
      expect(checkbox).toHaveAttribute('value', 'test-value');
    });

    it('generates unique IDs for multiple instances', () => {
      render(
        <div>
          <Checkbox label="First" />
          <Checkbox label="Second" />
          <Checkbox label="Third" />
        </div>
      );
      
      const checkboxes = screen.getAllByRole('checkbox');
      const ids = checkboxes.map(cb => cb.id);
      const uniqueIds = new Set(ids);
      
      expect(uniqueIds.size).toBe(3); // All IDs should be unique
      expect(ids.every(id => id.startsWith('checkbox-'))).toBe(true);
    });

    it('uses provided ID when given', () => {
      render(<Checkbox id="custom-id" label="Custom ID" />);
      
      const checkbox = screen.getByRole('checkbox');
      const label = screen.getByText('Custom ID');
      
      expect(checkbox.id).toBe('custom-id');
      expect(label.closest('label')).toHaveAttribute('for', 'custom-id');
    });
  });

  // Size tests
  describe('Sizes', () => {
    const sizes: Array<CheckboxProps['size']> = ['small', 'medium', 'large'];
    
    sizes.forEach(size => {
      it(`renders ${size} size correctly`, () => {
        render(<Checkbox size={size} />);
        
        const wrapper = screen.getByRole('checkbox').closest('.db-checkbox');
        expect(wrapper).toHaveClass(`db-checkbox--${size}`);
      });
    });

    it('applies medium size by default', () => {
      render(<Checkbox />);
      
      const wrapper = screen.getByRole('checkbox').closest('.db-checkbox');
      expect(wrapper).toHaveClass('db-checkbox--medium');
    });

    it('applies medium size when size is undefined', () => {
      render(<Checkbox size={undefined} />);
      
      const wrapper = screen.getByRole('checkbox').closest('.db-checkbox');
      expect(wrapper).toHaveClass('db-checkbox--medium');
    });
  });

  // Label tests
  describe('Label', () => {
    it('renders label when provided', () => {
      render(<Checkbox label="Accept terms and conditions" />);
      
      const label = screen.getByText('Accept terms and conditions');
      const checkbox = screen.getByRole('checkbox');
      
      expect(label).toBeInTheDocument();
      expect(label).toHaveClass('db-checkbox__label');
      expect(label.closest('label')).toHaveAttribute('for', checkbox.id);
    });

    it('does not render label when not provided', () => {
      render(<Checkbox />);
      
      const labelElement = document.querySelector('.db-checkbox__label');
      expect(labelElement).not.toBeInTheDocument();
    });

    it('associates label with checkbox correctly', () => {
      render(<Checkbox label="Test Label" />);
      
      const checkbox = screen.getByLabelText('Test Label');
      expect(checkbox).toBeInTheDocument();
      expect(checkbox).toHaveAttribute('type', 'checkbox');
    });

    it('does not render label when label is empty string', () => {
      render(<Checkbox label="" />);
      
      const labelElement = document.querySelector('.db-checkbox__label');
      expect(labelElement).not.toBeInTheDocument();
    });

    it('renders long labels correctly', () => {
      const longLabel = 'This is a very long checkbox label that might wrap to multiple lines and should be handled gracefully by the component layout';
      
      render(<Checkbox label={longLabel} />);
      
      const label = screen.getByText(longLabel);
      expect(label).toBeInTheDocument();
      expect(label).toHaveClass('db-checkbox__label');
    });
  });

  // State tests
  describe('States', () => {
    it('applies error styles when error is true', () => {
      render(<Checkbox error />);
      
      const wrapper = screen.getByRole('checkbox').closest('.db-checkbox');
      expect(wrapper).toHaveClass('db-checkbox--error');
    });

    it('does not apply error styles by default', () => {
      render(<Checkbox />);
      
      const wrapper = screen.getByRole('checkbox').closest('.db-checkbox');
      expect(wrapper).not.toHaveClass('db-checkbox--error');
    });

    it('applies disabled styles when disabled is true', () => {
      render(<Checkbox disabled />);
      
      const checkbox = screen.getByRole('checkbox');
      const wrapper = checkbox.closest('.db-checkbox');
      
      expect(checkbox).toBeDisabled();
      expect(wrapper).toHaveClass('db-checkbox--disabled');
    });

    it('does not apply disabled styles by default', () => {
      render(<Checkbox />);
      
      const checkbox = screen.getByRole('checkbox');
      const wrapper = checkbox.closest('.db-checkbox');
      
      expect(checkbox).not.toBeDisabled();
      expect(wrapper).not.toHaveClass('db-checkbox--disabled');
    });

    it('handles checked state correctly', () => {
      render(<Checkbox checked onChange={() => {}} />);
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeChecked();
    });

    it('handles unchecked state correctly', () => {
      render(<Checkbox checked={false} onChange={() => {}} />);
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();
    });
  });

  // Indeterminate state tests
  describe('Indeterminate State', () => {
    it('sets indeterminate property on input element', async () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<Checkbox ref={ref} indeterminate />);
      
      await waitFor(() => {
        expect(ref.current?.indeterminate).toBe(true);
      });
    });

    it('removes indeterminate property when false', async () => {
      const ref = React.createRef<HTMLInputElement>();
      const { rerender } = render(<Checkbox ref={ref} indeterminate />);
      
      await waitFor(() => {
        expect(ref.current?.indeterminate).toBe(true);
      });
      
      rerender(<Checkbox ref={ref} indeterminate={false} />);
      
      await waitFor(() => {
        expect(ref.current?.indeterminate).toBe(false);
      });
    });

    it('updates indeterminate state when prop changes', async () => {
      const ref = React.createRef<HTMLInputElement>();
      const { rerender } = render(<Checkbox ref={ref} indeterminate={false} />);
      
      expect(ref.current?.indeterminate).toBe(false);
      
      rerender(<Checkbox ref={ref} indeterminate={true} />);
      
      await waitFor(() => {
        expect(ref.current?.indeterminate).toBe(true);
      });
    });

    it('handles indeterminate without ref gracefully', () => {
      // Should not crash when ref is not available
      expect(() => {
        render(<Checkbox indeterminate />);
      }).not.toThrow();
    });
  });

  // Helper text tests
  describe('Helper Text', () => {
    it('renders helper text when provided', () => {
      render(<Checkbox helperText="Check this box to agree" />);
      
      const helperText = screen.getByText('Check this box to agree');
      expect(helperText).toBeInTheDocument();
      expect(helperText).toHaveClass('db-checkbox__helper');
    });

    it('does not render helper text when not provided', () => {
      render(<Checkbox />);
      
      const helperElement = document.querySelector('.db-checkbox__helper');
      expect(helperElement).not.toBeInTheDocument();
    });

    it('renders helper text with label', () => {
      render(
        <Checkbox
          label="Accept terms"
          helperText="By checking this box, you agree to our terms"
        />
      );
      
      const label = screen.getByText('Accept terms');
      const helperText = screen.getByText('By checking this box, you agree to our terms');
      
      expect(label).toBeInTheDocument();
      expect(helperText).toBeInTheDocument();
    });

    it('does not render helper text when helperText is empty string', () => {
      render(<Checkbox helperText="" />);
      
      const helperElement = document.querySelector('.db-checkbox__helper');
      expect(helperElement).not.toBeInTheDocument();
    });

    it('renders long helper text correctly', () => {
      const longHelperText = 'This is a very long helper text that provides detailed instructions about what checking this checkbox means and what actions will be taken as a result of the user\'s selection.';
      
      render(<Checkbox helperText={longHelperText} />);
      
      const helperText = screen.getByText(longHelperText);
      expect(helperText).toBeInTheDocument();
      expect(helperText).toHaveClass('db-checkbox__helper');
    });
  });

  // User interaction tests
  describe('User Interaction', () => {
    it('can be clicked to toggle state', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(<Checkbox onChange={handleChange} />);
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();
      
      await user.click(checkbox);
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({ checked: true })
        })
      );
    });

    it('can be toggled by clicking the label', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(<Checkbox label="Click me" onChange={handleChange} />);
      
      const label = screen.getByText('Click me');
      const checkbox = screen.getByRole('checkbox');
      
      expect(checkbox).not.toBeChecked();
      
      await user.click(label);
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('supports keyboard interaction', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(<Checkbox onChange={handleChange} />);
      
      const checkbox = screen.getByRole('checkbox');
      checkbox.focus();
      
      expect(checkbox).toHaveFocus();
      
      await user.keyboard(' ');
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('does not respond to interaction when disabled', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(<Checkbox disabled onChange={handleChange} />);
      
      const checkbox = screen.getByRole('checkbox');
      
      await user.click(checkbox);
      expect(handleChange).not.toHaveBeenCalled();
      expect(checkbox).not.toBeChecked();
    });

    it('calls onFocus and onBlur handlers', async () => {
      const handleFocus = jest.fn();
      const handleBlur = jest.fn();
      const user = userEvent.setup();
      
      render(
        <Checkbox onFocus={handleFocus} onBlur={handleBlur} />
      );
      
      const checkbox = screen.getByRole('checkbox');
      
      await user.click(checkbox);
      expect(handleFocus).toHaveBeenCalledTimes(1);
      
      await user.tab();
      expect(handleBlur).toHaveBeenCalledTimes(1);
    });

    it('supports controlled state', async () => {
      const TestComponent = () => {
        const [checked, setChecked] = React.useState(false);
        
        return (
          <div>
            <Checkbox
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              label="Controlled checkbox"
            />
            <button onClick={() => setChecked(!checked)}>
              Toggle
            </button>
          </div>
        );
      };
      
      const user = userEvent.setup();
      render(<TestComponent />);
      
      const checkbox = screen.getByRole('checkbox');
      const button = screen.getByText('Toggle');
      
      expect(checkbox).not.toBeChecked();
      
      await user.click(button);
      expect(checkbox).toBeChecked();
      
      await user.click(button);
      expect(checkbox).not.toBeChecked();
    });

    it('handles rapid clicks correctly', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(<Checkbox onChange={handleChange} />);
      
      const checkbox = screen.getByRole('checkbox');
      
      // Rapid clicks
      await user.click(checkbox);
      await user.click(checkbox);
      await user.click(checkbox);
      
      expect(handleChange).toHaveBeenCalledTimes(3);
    });
  });

  // Visual elements tests
  describe('Visual Elements', () => {
    it('renders checkbox visual elements', () => {
      render(<Checkbox />);
      
      const checkboxBox = document.querySelector('.db-checkbox__box');
      expect(checkboxBox).toBeInTheDocument();
      
      const checkmark = document.querySelector('.db-checkbox__checkmark');
      expect(checkmark).toBeInTheDocument();
      expect(checkmark?.tagName).toBe('svg');
      
      const indeterminateIcon = document.querySelector('.db-checkbox__indeterminate');
      expect(indeterminateIcon).toBeInTheDocument();
      expect(indeterminateIcon?.tagName).toBe('svg');
    });

    it('has proper wrapper structure', () => {
      render(<Checkbox label="Test" />);
      
      const wrapper = document.querySelector('.db-checkbox__wrapper');
      expect(wrapper).toBeInTheDocument();
      expect(wrapper?.tagName).toBe('LABEL');
      
      const input = wrapper?.querySelector('.db-checkbox__input');
      const box = wrapper?.querySelector('.db-checkbox__box');
      const label = wrapper?.querySelector('.db-checkbox__label');
      
      expect(input).toBeInTheDocument();
      expect(box).toBeInTheDocument();
      expect(label).toBeInTheDocument();
    });

    it('contains SVG icons with proper attributes', () => {
      render(<Checkbox />);
      
      const checkmark = document.querySelector('.db-checkbox__checkmark');
      expect(checkmark).toHaveAttribute('viewBox', '0 0 12 10');
      expect(checkmark).toHaveAttribute('fill', 'none');
      
      const indeterminateIcon = document.querySelector('.db-checkbox__indeterminate');
      expect(indeterminateIcon).toHaveAttribute('viewBox', '0 0 12 2');
      expect(indeterminateIcon).toHaveAttribute('fill', 'none');
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(
        <Checkbox label="Accessible checkbox" helperText="Helper text" />
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations when disabled', async () => {
      const { container } = render(
        <Checkbox label="Disabled checkbox" disabled />
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations when in error state', async () => {
      const { container } = render(
        <Checkbox label="Error checkbox" error helperText="Error message" />
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations when indeterminate', async () => {
      const { container } = render(
        <Checkbox label="Indeterminate checkbox" indeterminate />
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper label association', () => {
      render(<Checkbox label="Terms and conditions" />);
      
      const checkbox = screen.getByLabelText('Terms and conditions');
      expect(checkbox).toBeInTheDocument();
      expect(checkbox).toHaveAttribute('type', 'checkbox');
    });

    it('supports additional ARIA attributes', () => {
      render(
        <Checkbox
          label="ARIA checkbox"
          aria-describedby="checkbox-description"
          aria-required="true"
        />
      );
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('aria-describedby', 'checkbox-description');
      expect(checkbox).toHaveAttribute('aria-required', 'true');
    });

    it('is keyboard accessible', () => {
      render(<Checkbox label="Keyboard accessible" />);
      
      const checkbox = screen.getByRole('checkbox');
      checkbox.focus();
      expect(checkbox).toHaveFocus();
    });

    it('announces state changes to screen readers', async () => {
      const user = userEvent.setup();
      render(<Checkbox label="Screen reader test" />);
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();
      
      await user.click(checkbox);
      expect(checkbox).toBeChecked();
      
      // Native checkbox inputs manage their own checked state for screen readers
      expect(checkbox).toHaveProperty('checked', true);
    });

    it('maintains semantic structure', () => {
      render(<Checkbox label="Semantic test" helperText="Helper" />);
      
      const checkbox = screen.getByRole('checkbox');
      const label = screen.getByText('Semantic test');
      
      expect(checkbox.tagName).toBe('INPUT');
      expect(checkbox).toHaveAttribute('type', 'checkbox');
      expect(label.closest('label')).toHaveAttribute('for', checkbox.id);
    });
  });

  // Property combinations tests
  describe('Property Combinations', () => {
    it('handles all props together', () => {
      const handleChange = jest.fn();
      
      render(
        <Checkbox
          label="Complex checkbox"
          size="large"
          error
          disabled
          indeterminate
          helperText="This checkbox has all properties"
          className="custom-checkbox"
          onChange={handleChange}
        />
      );
      
      const checkbox = screen.getByRole('checkbox');
      const wrapper = checkbox.closest('.db-checkbox');
      
      expect(wrapper).toHaveClass(
        'db-checkbox',
        'db-checkbox--large',
        'db-checkbox--error',
        'db-checkbox--disabled',
        'custom-checkbox'
      );
      
      expect(screen.getByText('Complex checkbox')).toBeInTheDocument();
      expect(screen.getByText('This checkbox has all properties')).toBeInTheDocument();
      expect(checkbox).toBeDisabled();
    });

    it('renders all size combinations correctly', () => {
      const sizes: Array<CheckboxProps['size']> = ['small', 'medium', 'large'];
      
      sizes.forEach(size => {
        const { unmount } = render(
          <Checkbox
            size={size}
            label={`${size} checkbox`}
            data-testid={`checkbox-${size}`}
          />
        );
        
        const wrapper = screen.getByTestId(`checkbox-${size}`).closest('.db-checkbox');
        expect(wrapper).toHaveClass(`db-checkbox--${size}`);
        
        unmount();
      });
    });

    it('handles error and disabled states together', () => {
      render(<Checkbox error disabled label="Error disabled" />);
      
      const checkbox = screen.getByRole('checkbox');
      const wrapper = checkbox.closest('.db-checkbox');
      
      expect(wrapper).toHaveClass('db-checkbox--error', 'db-checkbox--disabled');
      expect(checkbox).toBeDisabled();
    });

    it('handles indeterminate with other states', async () => {
      const ref = React.createRef<HTMLInputElement>();
      render(
        <Checkbox
          ref={ref}
          indeterminate
          error
          size="large"
          label="Indeterminate with states"
        />
      );
      
      const wrapper = screen.getByRole('checkbox').closest('.db-checkbox');
      expect(wrapper).toHaveClass('db-checkbox--large', 'db-checkbox--error');
      
      await waitFor(() => {
        expect(ref.current?.indeterminate).toBe(true);
      });
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles undefined and null props gracefully', () => {
      render(
        <Checkbox
          label={undefined}
          size={undefined}
          error={undefined}
          disabled={undefined}
          indeterminate={undefined}
          helperText={undefined}
        />
      );
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeInTheDocument();
      
      const wrapper = checkbox.closest('.db-checkbox');
      expect(wrapper).toHaveClass('db-checkbox', 'db-checkbox--medium');
    });

    it('handles empty string values properly', () => {
      render(
        <Checkbox
          label=""
          helperText=""
          className=""
        />
      );
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeInTheDocument();
      
      const labelElement = document.querySelector('.db-checkbox__label');
      const helperElement = document.querySelector('.db-checkbox__helper');
      
      // Empty strings are falsy, so these elements won't render
      expect(labelElement).not.toBeInTheDocument();
      expect(helperElement).not.toBeInTheDocument();
    });

    it('handles multiple class names correctly', () => {
      render(<Checkbox className="class1 class2 class3" />);
      
      const wrapper = screen.getByRole('checkbox').closest('.db-checkbox');
      expect(wrapper).toHaveClass('db-checkbox', 'class1', 'class2', 'class3');
    });

    it('preserves event handler context', () => {
      const context = { value: 'test-context' };
      const handleChange = jest.fn(function(_this: typeof context) {
        return _this.value;
      });
      
      render(<Checkbox onChange={handleChange.bind(context)} />);
      
      const checkbox = screen.getByRole('checkbox');
      checkbox.click();
      
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('works with complex label strings', () => {
      const complexLabel = 'I agree to the Terms of Service and Privacy Policy. This checkbox accepts text labels only.';
      
      render(<Checkbox label={complexLabel} />);
      
      const checkbox = screen.getByRole('checkbox');
      const label = screen.getByText(complexLabel);
      
      expect(checkbox).toBeInTheDocument();
      expect(label).toBeInTheDocument();
      expect(label).toHaveClass('db-checkbox__label');
    });

    it('handles ref updates correctly', async () => {
      const TestComponent = () => {
        const [indeterminate, setIndeterminate] = React.useState(false);
        const ref = React.useRef<HTMLInputElement>(null);
        
        return (
          <div>
            <Checkbox ref={ref} indeterminate={indeterminate} />
            <button onClick={() => setIndeterminate(!indeterminate)}>
              Toggle Indeterminate
            </button>
          </div>
        );
      };
      
      render(<TestComponent />);
      
      const button = screen.getByText('Toggle Indeterminate');
      const checkbox = screen.getByRole('checkbox');
      
      button.click();
      
      await waitFor(() => {
        // Check that indeterminate property is set
        expect(checkbox).toHaveProperty('indeterminate', true);
      });
    });
  });
});
