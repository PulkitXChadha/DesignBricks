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
        'db-textfield--default'
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

    it('applies default size', () => {
      render(<TextField placeholder="Text" />);
      
      const wrapper = screen.getByPlaceholderText('Text').closest('.db-textfield');
      expect(wrapper).toHaveClass('db-textfield--default');
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
    const sizes: Array<TextFieldProps['size']> = ['small', 'default'];
    
    sizes.forEach(size => {
      it(`renders ${size} size correctly`, () => {
        render(<TextField size={size} placeholder="Text" />);
        
        const wrapper = screen.getByPlaceholderText('Text').closest('.db-textfield');
        expect(wrapper).toHaveClass(`db-textfield--${size}`);
      });
    });

    it('applies default size by default', () => {
      render(<TextField placeholder="Text" />);
      
      const wrapper = screen.getByPlaceholderText('Text').closest('.db-textfield');
      expect(wrapper).toHaveClass('db-textfield--default');
    });

    it('applies default size when size is undefined', () => {
      render(<TextField size={undefined} placeholder="Text" />);
      
      const wrapper = screen.getByPlaceholderText('Text').closest('.db-textfield');
      expect(wrapper).toHaveClass('db-textfield--default');
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

    it('shows optional indicator when optional is true', () => {
      render(<TextField label="Optional Field" optional placeholder="Text" />);
      
      const optionalIndicator = screen.getByText('(optional)');
      expect(optionalIndicator).toBeInTheDocument();
      expect(optionalIndicator).toHaveClass('db-textfield__optional');
    });

    it('does not show required indicator when required is false', () => {
      render(<TextField label="Optional Field" required={false} placeholder="Text" />);
      
      expect(screen.queryByText('*')).not.toBeInTheDocument();
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

    it('applies readonly styles when readOnly is true', () => {
      render(<TextField readOnly placeholder="Text" value="Read-only value" />);
      
      const input = screen.getByPlaceholderText('Text');
      const wrapper = input.closest('.db-textfield');
      const inputWrapper = wrapper?.querySelector('.db-textfield__wrapper');
      
      expect(input).toHaveAttribute('readonly');
      expect(wrapper).toHaveClass('db-textfield--readonly');
      expect(inputWrapper).toHaveClass('db-textfield__wrapper--readonly');
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

  // Validation handling tests
  describe('Validation', () => {
    it('displays error message when validation state is error', () => {
      render(<TextField validationState="error" message="This field is required" placeholder="Text" />);
      
      const errorMessage = screen.getByText('This field is required');
      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toHaveClass('db-textfield__message', 'db-textfield__message--error');
    });

    it('displays warning message when validation state is warning', () => {
      render(<TextField validationState="warning" message="Warning message" placeholder="Text" />);
      
      const warningMessage = screen.getByText('Warning message');
      expect(warningMessage).toBeInTheDocument();
      expect(warningMessage).toHaveClass('db-textfield__message', 'db-textfield__message--warning');
    });

    it('displays success message when validation state is success', () => {
      render(<TextField validationState="success" message="Success message" placeholder="Text" />);
      
      const successMessage = screen.getByText('Success message');
      expect(successMessage).toBeInTheDocument();
      expect(successMessage).toHaveClass('db-textfield__message', 'db-textfield__message--success');
    });

    it('applies error styles when validation state is error', () => {
      render(<TextField validationState="error" message="Error message" placeholder="Text" />);
      
      const input = screen.getByPlaceholderText('Text');
      const wrapper = input.closest('.db-textfield');
      const inputWrapper = wrapper?.querySelector('.db-textfield__wrapper');
      
      expect(wrapper).toHaveClass('db-textfield--error');
      expect(inputWrapper).toHaveClass('db-textfield__wrapper--error');
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    it('associates message with input via aria-describedby', () => {
      render(<TextField message="Error message" validationState="error" placeholder="Text" />);
      
      const input = screen.getByPlaceholderText('Text');
      const message = screen.getByText('Error message');
      
      expect(input).toHaveAttribute('aria-describedby');
      expect(input.getAttribute('aria-describedby')).toContain(message.id);
    });

    it('does not apply error styles when validation state is not set', () => {
      render(<TextField placeholder="Text" />);
      
      const input = screen.getByPlaceholderText('Text');
      const wrapper = input.closest('.db-textfield');
      const inputWrapper = wrapper?.querySelector('.db-textfield__wrapper');
      
      expect(wrapper).not.toHaveClass('db-textfield--error');
      expect(inputWrapper).not.toHaveClass('db-textfield__wrapper--error');
      expect(input).not.toHaveAttribute('aria-invalid');
    });
  });

  // Description text tests
  describe('Description Text', () => {
    it('displays description text when provided', () => {
      render(<TextField description="Enter your username" placeholder="Text" />);
      
      const description = screen.getByText('Enter your username');
      expect(description).toBeInTheDocument();
      expect(description).toHaveClass('db-textfield__description');
    });

    it('associates description with input via aria-describedby', () => {
      render(<TextField description="Helper text" placeholder="Text" />);
      
      const input = screen.getByPlaceholderText('Text');
      const description = screen.getByText('Helper text');
      
      expect(input).toHaveAttribute('aria-describedby');
      expect(input.getAttribute('aria-describedby')).toContain(description.id);
    });

    it('does not render description text when not provided', () => {
      render(<TextField placeholder="Text" />);
      
      expect(screen.queryByText(/description/i)).not.toBeInTheDocument();
    });

    it('message takes precedence over description', () => {
      render(
        <TextField
          message="Error message"
          validationState="error"
          description="Helper text"
          placeholder="Text"
        />
      );
      
      expect(screen.getByText('Error message')).toBeInTheDocument();
      expect(screen.queryByText('Helper text')).not.toBeInTheDocument();
    });
  });

  // Prefix and Suffix tests
  describe('Prefix and Suffix', () => {
    it('renders prefix content when provided', () => {
      render(
        <TextField
          prefix={<MockIcon name="search" />}
          placeholder="Search"
        />
      );
      
      const icon = screen.getByTestId('icon-search');
      expect(icon).toBeInTheDocument();
      
      const iconWrapper = icon.closest('.db-textfield__prefix');
      expect(iconWrapper).toBeInTheDocument();
    });

    it('renders suffix content when provided', () => {
      render(
        <TextField
          suffix={<MockIcon name="clear" />}
          placeholder="Text"
        />
      );
      
      const icon = screen.getByTestId('icon-clear');
      expect(icon).toBeInTheDocument();
      
      const iconWrapper = icon.closest('.db-textfield__suffix');
      expect(iconWrapper).toBeInTheDocument();
    });

    it('renders both prefix and suffix when both are provided', () => {
      render(
        <TextField
          prefix={<MockIcon name="search" />}
          suffix={<MockIcon name="clear" />}
          placeholder="Text"
        />
      );
      
      expect(screen.getByTestId('icon-search')).toBeInTheDocument();
      expect(screen.getByTestId('icon-clear')).toBeInTheDocument();
      
      const beforeIcon = screen.getByTestId('icon-search').closest('.db-textfield__prefix');
      const afterIcon = screen.getByTestId('icon-clear').closest('.db-textfield__suffix');
      
      expect(beforeIcon).toBeInTheDocument();
      expect(afterIcon).toBeInTheDocument();
    });

    it('does not render prefix/suffix when not provided', () => {
      render(<TextField placeholder="Text" />);
      
      const wrapper = screen.getByPlaceholderText('Text').closest('.db-textfield');
      const prefixes = wrapper?.querySelectorAll('.db-textfield__prefix');
      const suffixes = wrapper?.querySelectorAll('.db-textfield__suffix');
      
      expect(prefixes).toHaveLength(0);
      expect(suffixes).toHaveLength(0);
    });
  });

  // Clear button tests
  describe('Clear Button', () => {
    it('shows clear button when showClear is true and input has value', () => {
      render(<TextField showClear value="test" onChange={() => {}} placeholder="Text" />);
      
      const clearButton = screen.getByLabelText('Clear input');
      expect(clearButton).toBeInTheDocument();
      expect(clearButton).toHaveClass('db-textfield__clear');
    });

    it('does not show clear button when showClear is false', () => {
      render(<TextField showClear={false} value="test" onChange={() => {}} placeholder="Text" />);
      
      expect(screen.queryByLabelText('Clear input')).not.toBeInTheDocument();
    });

    it('does not show clear button when input is empty', () => {
      render(<TextField showClear value="" onChange={() => {}} placeholder="Text" />);
      
      expect(screen.queryByLabelText('Clear input')).not.toBeInTheDocument();
    });

    it('calls onClear when clear button is clicked', async () => {
      const onClear = jest.fn();
      const user = userEvent.setup();
      
      render(<TextField showClear value="test" onClear={onClear} onChange={() => {}} placeholder="Text" />);
      
      const clearButton = screen.getByLabelText('Clear input');
      await user.click(clearButton);
      
      expect(onClear).toHaveBeenCalledTimes(1);
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

    it('calls onPressEnter when Enter key is pressed', async () => {
      const handlePressEnter = jest.fn();
      const user = userEvent.setup();
      
      render(<TextField onPressEnter={handlePressEnter} placeholder="Text" />);
      
      const input = screen.getByPlaceholderText('Text');
      await user.type(input, '{Enter}');
      
      expect(handlePressEnter).toHaveBeenCalledTimes(1);
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
          description="This is helper text"
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
          validationState="error"
          message="This field has an error"
          placeholder="Enter text"
        />
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with prefix and suffix', async () => {
      const { container } = render(
        <TextField
          label="Icon Field"
          prefix={<MockIcon name="search" />}
          suffix={<MockIcon name="clear" />}
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
          description="This field has everything"
          size="default"
          fullWidth
          required
          prefix={<MockIcon name="user" />}
          suffix={<MockIcon name="check" />}
          placeholder="Enter data"
          className="custom-field"
        />
      );
      
      const input = screen.getByPlaceholderText('Enter data');
      const wrapper = input.closest('.db-textfield');
      
      expect(wrapper).toHaveClass(
        'db-textfield',
        'db-textfield--default',
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
          validationState="error"
          message="Field is disabled and has error"
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
          description={null as any}
          message={undefined}
          prefix={null}
          suffix={undefined}
          placeholder="Edge case"
        />
      );
      
      const input = screen.getByPlaceholderText('Edge case');
      expect(input).toBeInTheDocument();
      
      // Should not crash and should render basic input
      const wrapper = input.closest('.db-textfield');
      expect(wrapper).toHaveClass('db-textfield', 'db-textfield--default');
    });

    it('handles empty string values properly', () => {
      render(
        <TextField
          label=""
          description=""
          message=""
          placeholder="Empty strings"
        />
      );
      
      const input = screen.getByPlaceholderText('Empty strings');
      expect(input).toBeInTheDocument();
    });
  });
});
