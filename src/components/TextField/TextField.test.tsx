import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { TextField, TextFieldProps } from './TextField';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Mock icon components for testing
const MockIcon = ({ name }: { name: string }) => <span data-testid={`icon-${name}`}>{name}</span>;

describe('TextField', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      render(<TextField placeholder="Enter text" />);
      
      const input = screen.getByPlaceholderText('Enter text');
      expect(input).toBeInTheDocument();
      expect(input).toHaveClass('db-textfield__input');
      
      const wrapper = input.closest('.db-textfield');
      expect(wrapper).toHaveClass(
        'db-textfield',
        'db-textfield--medium'
      );
      expect(wrapper).not.toHaveClass(
        'db-textfield--full-width',
        'db-textfield--disabled',
        'db-textfield--error'
      );
    });

    it('renders with custom className', () => {
      render(<TextField className="custom-class" placeholder="Text" />);
      
      const wrapper = screen.getByPlaceholderText('Text').closest('.db-textfield');
      expect(wrapper).toHaveClass('db-textfield', 'custom-class');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<TextField ref={ref} placeholder="Text" />);
      
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
      expect(ref.current).toHaveClass('db-textfield__input');
    });

    it('forwards additional props to input', () => {
      render(
        <TextField
          placeholder="Text"
          data-testid="textfield-input"
          maxLength={100}
          autoComplete="off"
        />
      );
      
      const input = screen.getByTestId('textfield-input');
      expect(input).toHaveAttribute('maxLength', '100');
      expect(input).toHaveAttribute('autoComplete', 'off');
    });
  });

  // Size tests
  describe('Sizes', () => {
    const sizes: Array<TextFieldProps['size']> = ['small', 'medium', 'large'];
    
    sizes.forEach(size => {
      it(`renders ${size} size correctly`, () => {
        render(<TextField size={size} placeholder="Text" />);
        
        const wrapper = screen.getByPlaceholderText('Text').closest('.db-textfield');
        expect(wrapper).toHaveClass(`db-textfield--${size}`);
      });
    });

    it('applies medium size by default', () => {
      render(<TextField placeholder="Text" />);
      
      const wrapper = screen.getByPlaceholderText('Text').closest('.db-textfield');
      expect(wrapper).toHaveClass('db-textfield--medium');
    });

    it('applies medium size when size is undefined', () => {
      render(<TextField size={undefined} placeholder="Text" />);
      
      const wrapper = screen.getByPlaceholderText('Text').closest('.db-textfield');
      expect(wrapper).toHaveClass('db-textfield--medium');
    });
  });

  // Label tests
  describe('Label', () => {
    it('renders label when provided', () => {
      render(<TextField label="Username" placeholder="Enter username" />);
      
      const label = screen.getByText('Username');
      expect(label).toBeInTheDocument();
      expect(label).toHaveClass('db-textfield__label');
      
      const input = screen.getByPlaceholderText('Enter username');
      expect(label).toHaveAttribute('for', input.id);
    });

    it('does not render label when not provided', () => {
      render(<TextField placeholder="Text" />);
      
      expect(screen.queryByText(/label/i)).not.toBeInTheDocument();
    });

    it('shows required indicator when required is true', () => {
      render(<TextField label="Required Field" required placeholder="Text" />);
      
      const requiredIndicator = screen.getByText('*');
      expect(requiredIndicator).toBeInTheDocument();
      expect(requiredIndicator).toHaveClass('db-textfield__required');
    });

    it('does not show required indicator when required is false', () => {
      render(<TextField label="Optional Field" required={false} placeholder="Text" />);
      
      expect(screen.queryByText('*')).not.toBeInTheDocument();
    });

    it('generates unique IDs for label association', () => {
      render(
        <div>
          <TextField label="Field 1" placeholder="Text 1" />
          <TextField label="Field 2" placeholder="Text 2" />
        </div>
      );
      
      const input1 = screen.getByPlaceholderText('Text 1');
      const input2 = screen.getByPlaceholderText('Text 2');
      const label1 = screen.getByText('Field 1');
      const label2 = screen.getByText('Field 2');
      
      expect(input1.id).not.toBe(input2.id);
      expect(label1).toHaveAttribute('for', input1.id);
      expect(label2).toHaveAttribute('for', input2.id);
    });

    it('uses provided ID when given', () => {
      render(<TextField id="custom-id" label="Custom ID Field" placeholder="Text" />);
      
      const input = screen.getByPlaceholderText('Text');
      const label = screen.getByText('Custom ID Field');
      
      expect(input.id).toBe('custom-id');
      expect(label).toHaveAttribute('for', 'custom-id');
    });
  });

  // State tests
  describe('States', () => {
    it('applies full width class when fullWidth is true', () => {
      render(<TextField fullWidth placeholder="Text" />);
      
      const wrapper = screen.getByPlaceholderText('Text').closest('.db-textfield');
      expect(wrapper).toHaveClass('db-textfield--full-width');
    });

    it('does not apply full width class by default', () => {
      render(<TextField placeholder="Text" />);
      
      const wrapper = screen.getByPlaceholderText('Text').closest('.db-textfield');
      expect(wrapper).not.toHaveClass('db-textfield--full-width');
    });

    it('applies disabled styles when disabled is true', () => {
      render(<TextField disabled placeholder="Text" />);
      
      const input = screen.getByPlaceholderText('Text');
      const wrapper = input.closest('.db-textfield');
      const inputWrapper = wrapper?.querySelector('.db-textfield__wrapper');
      
      expect(input).toBeDisabled();
      expect(wrapper).toHaveClass('db-textfield--disabled');
      expect(inputWrapper).toHaveClass('db-textfield__wrapper--disabled');
    });

    it('does not apply disabled styles by default', () => {
      render(<TextField placeholder="Text" />);
      
      const input = screen.getByPlaceholderText('Text');
      const wrapper = input.closest('.db-textfield');
      const inputWrapper = wrapper?.querySelector('.db-textfield__wrapper');
      
      expect(input).not.toBeDisabled();
      expect(wrapper).not.toHaveClass('db-textfield--disabled');
      expect(inputWrapper).not.toHaveClass('db-textfield__wrapper--disabled');
    });
  });

  // Focus state tests
  describe('Focus State', () => {
    it('applies focus styles when input is focused', async () => {
      const user = userEvent.setup();
      render(<TextField placeholder="Text" />);
      
      const input = screen.getByPlaceholderText('Text');
      const wrapper = input.closest('.db-textfield');
      const inputWrapper = wrapper?.querySelector('.db-textfield__wrapper');
      
      // Initially not focused
      expect(inputWrapper).not.toHaveClass('db-textfield__wrapper--focused');
      
      // Focus the input
      await user.click(input);
      expect(inputWrapper).toHaveClass('db-textfield__wrapper--focused');
      
      // Blur the input
      await user.tab();
      expect(inputWrapper).not.toHaveClass('db-textfield__wrapper--focused');
    });

    it('handles programmatic focus and blur', async () => {
      render(<TextField placeholder="Text" />);
      
      const input = screen.getByPlaceholderText('Text');
      const wrapper = input.closest('.db-textfield');
      const inputWrapper = wrapper?.querySelector('.db-textfield__wrapper');
      
      // Initially not focused
      expect(inputWrapper).not.toHaveClass('db-textfield__wrapper--focused');
      
      // Use fireEvent for programmatic events to trigger React handlers
      const { fireEvent } = await import('@testing-library/react');
      
      fireEvent.focus(input);
      expect(inputWrapper).toHaveClass('db-textfield__wrapper--focused');
      
      fireEvent.blur(input);
      expect(inputWrapper).not.toHaveClass('db-textfield__wrapper--focused');
    });
  });

  // Error handling tests
  describe('Error Handling', () => {
    it('displays error message when error prop is provided', () => {
      render(<TextField error="This field is required" placeholder="Text" />);
      
      const errorMessage = screen.getByText('This field is required');
      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toHaveClass('db-textfield__helper', 'db-textfield__helper--error');
    });

    it('applies error styles when error is present', () => {
      render(<TextField error="Error message" placeholder="Text" />);
      
      const input = screen.getByPlaceholderText('Text');
      const wrapper = input.closest('.db-textfield');
      const inputWrapper = wrapper?.querySelector('.db-textfield__wrapper');
      
      expect(wrapper).toHaveClass('db-textfield--error');
      expect(inputWrapper).toHaveClass('db-textfield__wrapper--error');
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    it('associates error message with input via aria-describedby', () => {
      render(<TextField error="Error message" placeholder="Text" />);
      
      const input = screen.getByPlaceholderText('Text');
      const errorMessage = screen.getByText('Error message');
      
      expect(input).toHaveAttribute('aria-describedby', errorMessage.id);
      expect(errorMessage.id).toMatch(/.*-error$/);
    });

    it('prioritizes error over helper text', () => {
      render(
        <TextField
          error="Error message"
          helperText="Helper text"
          placeholder="Text"
        />
      );
      
      expect(screen.getByText('Error message')).toBeInTheDocument();
      expect(screen.queryByText('Helper text')).not.toBeInTheDocument();
      
      const input = screen.getByPlaceholderText('Text');
      expect(input).toHaveAttribute('aria-describedby', expect.stringMatching(/-error$/));
    });

    it('does not apply error styles when error is not present', () => {
      render(<TextField placeholder="Text" />);
      
      const input = screen.getByPlaceholderText('Text');
      const wrapper = input.closest('.db-textfield');
      const inputWrapper = wrapper?.querySelector('.db-textfield__wrapper');
      
      expect(wrapper).not.toHaveClass('db-textfield--error');
      expect(inputWrapper).not.toHaveClass('db-textfield__wrapper--error');
      expect(input).toHaveAttribute('aria-invalid', 'false');
    });
  });

  // Helper text tests
  describe('Helper Text', () => {
    it('displays helper text when provided', () => {
      render(<TextField helperText="Enter your username" placeholder="Text" />);
      
      const helperText = screen.getByText('Enter your username');
      expect(helperText).toBeInTheDocument();
      expect(helperText).toHaveClass('db-textfield__helper');
      expect(helperText).not.toHaveClass('db-textfield__helper--error');
    });

    it('associates helper text with input via aria-describedby', () => {
      render(<TextField helperText="Helper text" placeholder="Text" />);
      
      const input = screen.getByPlaceholderText('Text');
      const helperText = screen.getByText('Helper text');
      
      expect(input).toHaveAttribute('aria-describedby', helperText.id);
      expect(helperText.id).toMatch(/.*-helper$/);
    });

    it('does not render helper text when not provided', () => {
      render(<TextField placeholder="Text" />);
      
      expect(screen.queryByText(/helper/i)).not.toBeInTheDocument();
    });

    it('does not set aria-describedby when no helper text or error', () => {
      render(<TextField placeholder="Text" />);
      
      const input = screen.getByPlaceholderText('Text');
      expect(input).not.toHaveAttribute('aria-describedby');
    });
  });

  // Icon tests
  describe('Icons', () => {
    it('renders icon before input when iconBefore is provided', () => {
      render(
        <TextField
          iconBefore={<MockIcon name="search" />}
          placeholder="Search"
        />
      );
      
      const icon = screen.getByTestId('icon-search');
      expect(icon).toBeInTheDocument();
      
      const iconWrapper = icon.closest('.db-textfield__icon');
      expect(iconWrapper).toHaveClass('db-textfield__icon--before');
    });

    it('renders icon after input when iconAfter is provided', () => {
      render(
        <TextField
          iconAfter={<MockIcon name="clear" />}
          placeholder="Text"
        />
      );
      
      const icon = screen.getByTestId('icon-clear');
      expect(icon).toBeInTheDocument();
      
      const iconWrapper = icon.closest('.db-textfield__icon');
      expect(iconWrapper).toHaveClass('db-textfield__icon--after');
    });

    it('renders both icons when both are provided', () => {
      render(
        <TextField
          iconBefore={<MockIcon name="search" />}
          iconAfter={<MockIcon name="clear" />}
          placeholder="Text"
        />
      );
      
      expect(screen.getByTestId('icon-search')).toBeInTheDocument();
      expect(screen.getByTestId('icon-clear')).toBeInTheDocument();
      
      const beforeIcon = screen.getByTestId('icon-search').closest('.db-textfield__icon');
      const afterIcon = screen.getByTestId('icon-clear').closest('.db-textfield__icon');
      
      expect(beforeIcon).toHaveClass('db-textfield__icon--before');
      expect(afterIcon).toHaveClass('db-textfield__icon--after');
    });

    it('does not render icons when not provided', () => {
      render(<TextField placeholder="Text" />);
      
      const wrapper = screen.getByPlaceholderText('Text').closest('.db-textfield');
      const icons = wrapper?.querySelectorAll('.db-textfield__icon');
      
      expect(icons).toHaveLength(0);
    });
  });

  // User interaction tests
  describe('User Interaction', () => {
    it('allows typing in the input', async () => {
      const user = userEvent.setup();
      render(<TextField placeholder="Type here" />);
      
      const input = screen.getByPlaceholderText('Type here');
      await user.type(input, 'Hello World');
      
      expect(input).toHaveValue('Hello World');
    });

    it('calls onChange handler when typing', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(<TextField onChange={handleChange} placeholder="Text" />);
      
      const input = screen.getByPlaceholderText('Text');
      await user.type(input, 'test');
      
      expect(handleChange).toHaveBeenCalledTimes(4); // 4 characters
    });

    it('calls onFocus and onBlur handlers', async () => {
      const handleFocus = jest.fn();
      const handleBlur = jest.fn();
      const user = userEvent.setup();
      
      render(
        <TextField
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Text"
        />
      );
      
      const input = screen.getByPlaceholderText('Text');
      
      await user.click(input);
      expect(handleFocus).toHaveBeenCalledTimes(1);
      
      await user.tab();
      expect(handleBlur).toHaveBeenCalledTimes(1);
    });

    it('handles keyboard events', async () => {
      const handleKeyDown = jest.fn();
      const user = userEvent.setup();
      
      render(<TextField onKeyDown={handleKeyDown} placeholder="Text" />);
      
      const input = screen.getByPlaceholderText('Text');
      await user.type(input, '{Enter}');
      
      expect(handleKeyDown).toHaveBeenCalled();
    });

    it('supports controlled input', async () => {
      const TestComponent = () => {
        const [value, setValue] = React.useState('initial');
        
        return (
          <div>
            <TextField
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Controlled"
            />
            <button onClick={() => setValue('updated')}>Update</button>
          </div>
        );
      };
      
      const user = userEvent.setup();
      render(<TestComponent />);
      
      const input = screen.getByPlaceholderText('Controlled');
      expect(input).toHaveValue('initial');
      
      const button = screen.getByText('Update');
      await user.click(button);
      
      expect(input).toHaveValue('updated');
    });

    it('does not respond to interaction when disabled', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(<TextField disabled onChange={handleChange} placeholder="Disabled" />);
      
      const input = screen.getByPlaceholderText('Disabled');
      
      // Try to type - should not work
      await user.type(input, 'test');
      expect(handleChange).not.toHaveBeenCalled();
      expect(input).toHaveValue('');
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(
        <TextField
          label="Accessible Field"
          helperText="This is helper text"
          placeholder="Enter text"
        />
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with error state', async () => {
      const { container } = render(
        <TextField
          label="Error Field"
          error="This field has an error"
          placeholder="Enter text"
        />
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with icons', async () => {
      const { container } = render(
        <TextField
          label="Icon Field"
          iconBefore={<MockIcon name="search" />}
          iconAfter={<MockIcon name="clear" />}
          placeholder="Search"
        />
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('supports additional ARIA attributes', () => {
      render(
        <TextField
          placeholder="Text"
          aria-label="Custom label"
          aria-required="true"
          role="searchbox"
        />
      );
      
      const input = screen.getByPlaceholderText('Text');
      expect(input).toHaveAttribute('aria-label', 'Custom label');
      expect(input).toHaveAttribute('aria-required', 'true');
      expect(input).toHaveAttribute('role', 'searchbox');
    });

    it('maintains proper label association', () => {
      render(<TextField label="Name" placeholder="Enter name" />);
      
      const input = screen.getByLabelText('Name');
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute('placeholder', 'Enter name');
    });

    it('provides proper focus indicator', async () => {
      const user = userEvent.setup();
      render(<TextField placeholder="Focus test" />);
      
      const input = screen.getByPlaceholderText('Focus test');
      
      await user.tab();
      expect(input).toHaveFocus();
    });
  });

  // Edge cases and combinations
  describe('Property Combinations', () => {
    it('handles all props together', () => {
      render(
        <TextField
          label="Complex Field"
          helperText="This field has everything"
          size="large"
          fullWidth
          required
          iconBefore={<MockIcon name="user" />}
          iconAfter={<MockIcon name="check" />}
          placeholder="Enter data"
          className="custom-field"
        />
      );
      
      const input = screen.getByPlaceholderText('Enter data');
      const wrapper = input.closest('.db-textfield');
      
      expect(wrapper).toHaveClass(
        'db-textfield',
        'db-textfield--large',
        'db-textfield--full-width',
        'custom-field'
      );
      
      expect(screen.getByText('Complex Field')).toBeInTheDocument();
      expect(screen.getByText('*')).toBeInTheDocument(); // Required indicator
      expect(screen.getByText('This field has everything')).toBeInTheDocument();
      expect(screen.getByTestId('icon-user')).toBeInTheDocument();
      expect(screen.getByTestId('icon-check')).toBeInTheDocument();
    });

    it('handles error and disabled states together', () => {
      render(
        <TextField
          error="Field is disabled and has error"
          disabled
          placeholder="Disabled with error"
        />
      );
      
      const input = screen.getByPlaceholderText('Disabled with error');
      const wrapper = input.closest('.db-textfield');
      const inputWrapper = wrapper?.querySelector('.db-textfield__wrapper');
      
      expect(wrapper).toHaveClass('db-textfield--disabled', 'db-textfield--error');
      expect(inputWrapper).toHaveClass(
        'db-textfield__wrapper--disabled',
        'db-textfield__wrapper--error'
      );
      expect(input).toBeDisabled();
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    it('works with different input types', () => {
      const inputTypes = ['text', 'email', 'password', 'number', 'tel', 'url'];
      
      inputTypes.forEach(type => {
        const { unmount } = render(
          <TextField
            type={type as any}
            label={`${type} field`}
            placeholder={`Enter ${type}`}
          />
        );
        
        const input = screen.getByPlaceholderText(`Enter ${type}`);
        expect(input).toHaveAttribute('type', type);
        
        unmount();
      });
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles undefined and null props gracefully', () => {
      render(
        <TextField
          label={undefined}
          helperText={null as any}
          error={undefined}
          iconBefore={null}
          iconAfter={undefined}
          placeholder="Edge case"
        />
      );
      
      const input = screen.getByPlaceholderText('Edge case');
      expect(input).toBeInTheDocument();
      
      // Should not crash and should render basic input
      const wrapper = input.closest('.db-textfield');
      expect(wrapper).toHaveClass('db-textfield', 'db-textfield--medium');
    });

    it('handles empty string values properly', () => {
      render(
        <TextField
          label=""
          helperText=""
          error=""
          placeholder="Empty strings"
        />
      );
      
      const input = screen.getByPlaceholderText('Empty strings');
      expect(input).toBeInTheDocument();
      
      // Empty strings should not render elements
      expect(screen.queryByText(/helper/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
    });

    it('generates different IDs for multiple instances', () => {
      render(
        <div>
          <TextField placeholder="Field 1" />
          <TextField placeholder="Field 2" />
          <TextField placeholder="Field 3" />
        </div>
      );
      
      const inputs = [
        screen.getByPlaceholderText('Field 1'),
        screen.getByPlaceholderText('Field 2'),
        screen.getByPlaceholderText('Field 3'),
      ];
      
      const ids = inputs.map(input => input.id);
      const uniqueIds = new Set(ids);
      
      expect(uniqueIds.size).toBe(3); // All IDs should be unique
    });

    it('handles long text values', () => {
      const longText = 'a'.repeat(1000);
      
      render(
        <TextField
          label={longText}
          helperText={longText}
          placeholder="Long text"
        />
      );
      
      const input = screen.getByPlaceholderText('Long text');
      expect(input).toBeInTheDocument();
      
      // Should handle long text without crashing
      const longTextElements = screen.getAllByText(longText);
      expect(longTextElements).toHaveLength(2); // Label and helper text
      expect(longTextElements[0]).toBeInTheDocument(); // Label
      expect(longTextElements[1]).toBeInTheDocument(); // Helper text
    });
  });
});
