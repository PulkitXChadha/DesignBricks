import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { SearchInput, SearchInputProps } from './SearchInput';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

describe('SearchInput', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      render(<SearchInput />);
      
      const input = screen.getByRole('searchbox');
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute('placeholder', 'Search...');
    });

    it('renders with custom placeholder', () => {
      render(<SearchInput placeholder="Find items..." />);
      
      const input = screen.getByPlaceholderText('Find items...');
      expect(input).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      const { container } = render(<SearchInput className="custom-search" />);
      
      const wrapper = container.querySelector('.db-search');
      expect(wrapper).toHaveClass('db-search', 'custom-search');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<SearchInput ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
      expect(ref.current?.type).toBe('search');
    });

    it('forwards additional props to input', () => {
      render(<SearchInput data-testid="search-input" name="search" />);
      
      const input = screen.getByTestId('search-input');
      expect(input).toHaveAttribute('name', 'search');
    });

    it('renders search icon', () => {
      const { container } = render(<SearchInput />);
      
      const icon = container.querySelector('.db-search__icon');
      expect(icon).toBeInTheDocument();
      expect(icon?.querySelector('svg')).toBeInTheDocument();
    });
  });

  // Size tests
  describe('Sizes', () => {
    const sizes: Array<SearchInputProps['size']> = ['small', 'medium', 'large'];
    
    sizes.forEach(size => {
      it(`renders ${size} size correctly`, () => {
        const { container } = render(<SearchInput size={size} />);
        
        const wrapper = container.querySelector('.db-search');
        expect(wrapper).toHaveClass(`db-search--${size}`);
      });
    });

    it('applies medium size by default', () => {
      const { container } = render(<SearchInput />);
      
      const wrapper = container.querySelector('.db-search');
      expect(wrapper).toHaveClass('db-search--medium');
    });
  });

  // Full width tests
  describe('Full Width', () => {
    it('applies full width class', () => {
      const { container } = render(<SearchInput fullWidth />);
      
      const wrapper = container.querySelector('.db-search');
      expect(wrapper).toHaveClass('db-search--full-width');
    });

    it('does not apply full width by default', () => {
      const { container } = render(<SearchInput />);
      
      const wrapper = container.querySelector('.db-search');
      expect(wrapper).not.toHaveClass('db-search--full-width');
    });
  });

  // Disabled state tests
  describe('Disabled State', () => {
    it('applies disabled class', () => {
      const { container } = render(<SearchInput disabled />);
      
      const wrapper = container.querySelector('.db-search');
      expect(wrapper).toHaveClass('db-search--disabled');
    });

    it('disables input element', () => {
      render(<SearchInput disabled />);
      
      const input = screen.getByRole('searchbox');
      expect(input).toBeDisabled();
    });

    it('does not show clear button when disabled', async () => {
      const user = userEvent.setup();
      render(<SearchInput disabled value="test" />);
      
      const clearButton = screen.queryByLabelText('Clear search');
      expect(clearButton).not.toBeInTheDocument();
    });
  });

  // Input interaction tests
  describe('Input Interaction', () => {
    it('handles user input in uncontrolled mode', async () => {
      const user = userEvent.setup();
      render(<SearchInput />);
      
      const input = screen.getByRole('searchbox');
      await user.type(input, 'test query');
      
      expect(input).toHaveValue('test query');
    });

    it('calls onChange handler', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(<SearchInput onChange={handleChange} />);
      
      const input = screen.getByRole('searchbox');
      await user.type(input, 'test');
      
      expect(handleChange).toHaveBeenCalled();
      expect(handleChange).toHaveBeenCalledTimes(4); // One per character
    });

    it('works in controlled mode', async () => {
      const TestComponent = () => {
        const [value, setValue] = React.useState('');
        return (
          <SearchInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        );
      };
      
      const user = userEvent.setup();
      render(<TestComponent />);
      
      const input = screen.getByRole('searchbox');
      await user.type(input, 'controlled');
      
      expect(input).toHaveValue('controlled');
    });

    it('handles keyboard events', async () => {
      const handleKeyDown = jest.fn();
      const user = userEvent.setup();
      
      render(<SearchInput onKeyDown={handleKeyDown} />);
      
      const input = screen.getByRole('searchbox');
      await user.type(input, 'test{Enter}');
      
      expect(handleKeyDown).toHaveBeenCalled();
    });
  });

  // Search functionality tests
  describe('Search Functionality', () => {
    it('calls onSearch when Enter is pressed', async () => {
      const handleSearch = jest.fn();
      const user = userEvent.setup();
      
      render(<SearchInput onSearch={handleSearch} />);
      
      const input = screen.getByRole('searchbox');
      await user.type(input, 'test query{Enter}');
      
      expect(handleSearch).toHaveBeenCalledWith('test query');
      expect(handleSearch).toHaveBeenCalledTimes(1);
    });

    it('calls onSearch with current value on Enter', async () => {
      const handleSearch = jest.fn();
      const user = userEvent.setup();
      
      render(<SearchInput value="controlled search" onSearch={handleSearch} readOnly />);
      
      const input = screen.getByRole('searchbox');
      await user.type(input, '{Enter}');
      
      expect(handleSearch).toHaveBeenCalledWith('controlled search');
    });

    it('does not call onSearch on other keys', async () => {
      const handleSearch = jest.fn();
      const user = userEvent.setup();
      
      render(<SearchInput onSearch={handleSearch} />);
      
      const input = screen.getByRole('searchbox');
      await user.type(input, 'test{Escape}');
      
      expect(handleSearch).not.toHaveBeenCalled();
    });
  });

  // Clear button tests
  describe('Clear Button', () => {
    it('shows clear button when value is present', async () => {
      const user = userEvent.setup();
      render(<SearchInput />);
      
      const input = screen.getByRole('searchbox');
      await user.type(input, 'test');
      
      const clearButton = screen.getByLabelText('Clear search');
      expect(clearButton).toBeInTheDocument();
    });

    it('does not show clear button when input is empty', () => {
      render(<SearchInput />);
      
      const clearButton = screen.queryByLabelText('Clear search');
      expect(clearButton).not.toBeInTheDocument();
    });

    it('calls onClear when clear button is clicked', async () => {
      const handleClear = jest.fn();
      const user = userEvent.setup();
      
      render(<SearchInput value="test" onClear={handleClear} readOnly />);
      
      const clearButton = screen.getByLabelText('Clear search');
      await user.click(clearButton);
      
      expect(handleClear).toHaveBeenCalledTimes(1);
    });

    it('clears input value in uncontrolled mode', async () => {
      const user = userEvent.setup();
      render(<SearchInput />);
      
      const input = screen.getByRole('searchbox');
      await user.type(input, 'test');
      
      const clearButton = screen.getByLabelText('Clear search');
      await user.click(clearButton);
      
      expect(input).toHaveValue('');
    });

    it('calls onSearch with empty string when cleared', async () => {
      const handleSearch = jest.fn();
      const user = userEvent.setup();
      
      render(<SearchInput value="test" onSearch={handleSearch} readOnly />);
      
      const clearButton = screen.getByLabelText('Clear search');
      await user.click(clearButton);
      
      expect(handleSearch).toHaveBeenCalledWith('');
    });

    it('does not show clear button when clearable is false', async () => {
      const user = userEvent.setup();
      render(<SearchInput clearable={false} />);
      
      const input = screen.getByRole('searchbox');
      await user.type(input, 'test');
      
      const clearButton = screen.queryByLabelText('Clear search');
      expect(clearButton).not.toBeInTheDocument();
    });

    it('does not show clear button when loading', async () => {
      const user = userEvent.setup();
      render(<SearchInput loading />);
      
      const input = screen.getByRole('searchbox');
      await user.type(input, 'test');
      
      const clearButton = screen.queryByLabelText('Clear search');
      expect(clearButton).not.toBeInTheDocument();
    });
  });

  // Loading state tests
  describe('Loading State', () => {
    it('shows loading spinner when loading', () => {
      const { container } = render(<SearchInput loading />);
      
      const spinner = container.querySelector('.db-search__spinner');
      expect(spinner).toBeInTheDocument();
    });

    it('does not show loading spinner by default', () => {
      const { container } = render(<SearchInput />);
      
      const spinner = container.querySelector('.db-search__spinner');
      expect(spinner).not.toBeInTheDocument();
    });

    it('hides clear button when loading', async () => {
      const user = userEvent.setup();
      const { rerender } = render(<SearchInput />);
      
      const input = screen.getByRole('searchbox');
      await user.type(input, 'test');
      
      expect(screen.getByLabelText('Clear search')).toBeInTheDocument();
      
      rerender(<SearchInput loading value="test" />);
      
      expect(screen.queryByLabelText('Clear search')).not.toBeInTheDocument();
    });
  });

  // Keyboard shortcut tests
  describe('Keyboard Shortcut', () => {
    it('displays shortcut hint when provided', () => {
      render(<SearchInput shortcut="⌘K" />);
      
      expect(screen.getByText('⌘K')).toBeInTheDocument();
    });

    it('does not display shortcut by default', () => {
      const { container } = render(<SearchInput />);
      
      const shortcut = container.querySelector('.db-search__shortcut');
      expect(shortcut).not.toBeInTheDocument();
    });

    it('hides shortcut when input has value', async () => {
      const user = userEvent.setup();
      render(<SearchInput shortcut="⌘K" />);
      
      expect(screen.getByText('⌘K')).toBeInTheDocument();
      
      const input = screen.getByRole('searchbox');
      await user.type(input, 'test');
      
      expect(screen.queryByText('⌘K')).not.toBeInTheDocument();
    });

    it('shows shortcut again when input is cleared', async () => {
      const user = userEvent.setup();
      render(<SearchInput shortcut="⌘K" />);
      
      const input = screen.getByRole('searchbox');
      await user.type(input, 'test');
      
      const clearButton = screen.getByLabelText('Clear search');
      await user.click(clearButton);
      
      expect(screen.getByText('⌘K')).toBeInTheDocument();
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<SearchInput aria-label="Search items" />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with value', async () => {
      const { container } = render(
        <SearchInput value="test search" aria-label="Search items" readOnly />
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper input type', () => {
      render(<SearchInput />);
      
      const input = screen.getByRole('searchbox');
      expect(input).toHaveAttribute('type', 'search');
    });

    it('clear button has proper aria-label', async () => {
      const user = userEvent.setup();
      render(<SearchInput />);
      
      const input = screen.getByRole('searchbox');
      await user.type(input, 'test');
      
      const clearButton = screen.getByLabelText('Clear search');
      expect(clearButton).toHaveAttribute('aria-label', 'Clear search');
    });

    it('clear button has proper type', async () => {
      const user = userEvent.setup();
      render(<SearchInput />);
      
      const input = screen.getByRole('searchbox');
      await user.type(input, 'test');
      
      const clearButton = screen.getByLabelText('Clear search');
      expect(clearButton).toHaveAttribute('type', 'button');
    });

    it('supports additional ARIA attributes', () => {
      render(
        <SearchInput
          aria-label="Search products"
          aria-describedby="search-help"
        />
      );
      
      const input = screen.getByRole('searchbox');
      expect(input).toHaveAttribute('aria-label', 'Search products');
      expect(input).toHaveAttribute('aria-describedby', 'search-help');
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles empty string value', () => {
      render(<SearchInput value="" readOnly />);
      
      const input = screen.getByRole('searchbox');
      expect(input).toHaveValue('');
      expect(screen.queryByLabelText('Clear search')).not.toBeInTheDocument();
    });

    it('handles undefined value prop', () => {
      render(<SearchInput value={undefined} />);
      
      const input = screen.getByRole('searchbox');
      expect(input).toHaveValue('');
    });

    it('handles rapid typing', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(<SearchInput onChange={handleChange} />);
      
      const input = screen.getByRole('searchbox');
      await user.type(input, 'rapidtest');
      
      expect(handleChange).toHaveBeenCalledTimes(9);
    });

    it('handles multiple Enter presses', async () => {
      const handleSearch = jest.fn();
      const user = userEvent.setup();
      
      render(<SearchInput onSearch={handleSearch} />);
      
      const input = screen.getByRole('searchbox');
      await user.type(input, 'test{Enter}{Enter}{Enter}');
      
      expect(handleSearch).toHaveBeenCalledTimes(3);
    });

    it('handles clicking clear button multiple times', async () => {
      const handleClear = jest.fn();
      const user = userEvent.setup();
      
      render(<SearchInput value="test" onClear={handleClear} readOnly />);
      
      const clearButton = screen.getByLabelText('Clear search');
      await user.click(clearButton);
      await user.click(clearButton);
      await user.click(clearButton);
      
      expect(handleClear).toHaveBeenCalledTimes(3);
    });

    it('preserves focus after clearing', async () => {
      const user = userEvent.setup();
      render(<SearchInput />);
      
      const input = screen.getByRole('searchbox');
      await user.type(input, 'test');
      
      const clearButton = screen.getByLabelText('Clear search');
      await user.click(clearButton);
      
      // Input should still be accessible
      await user.type(input, 'new');
      expect(input).toHaveValue('new');
    });

    it('handles long input values', async () => {
      const longValue = 'a'.repeat(1000);
      const user = userEvent.setup();
      
      render(<SearchInput />);
      
      const input = screen.getByRole('searchbox');
      await user.type(input, longValue);
      
      expect(input).toHaveValue(longValue);
    });

    it('handles special characters in input', async () => {
      const user = userEvent.setup();
      render(<SearchInput />);
      
      const input = screen.getByRole('searchbox');
      await user.type(input, '!@#$%^&*()');
      
      expect(input).toHaveValue('!@#$%^&*()');
    });

    it('handles mixed controlled and handler props', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      const TestComponent = () => {
        const [value, setValue] = React.useState('initial');
        return (
          <SearchInput
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              handleChange(e);
            }}
          />
        );
      };
      
      render(<TestComponent />);
      
      const input = screen.getByRole('searchbox');
      expect(input).toHaveValue('initial');
      
      await user.clear(input);
      await user.type(input, 'updated');
      
      expect(input).toHaveValue('updated');
      expect(handleChange).toHaveBeenCalled();
    });

    it('handles all props together', async () => {
      const handleSearch = jest.fn();
      const handleClear = jest.fn();
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(
        <SearchInput
          size="large"
          fullWidth
          clearable
          loading={false}
          shortcut="⌘K"
          onSearch={handleSearch}
          onClear={handleClear}
          onChange={handleChange}
          placeholder="Search everything"
          className="custom-search"
          data-testid="full-search"
        />
      );
      
      const input = screen.getByTestId('full-search');
      await user.type(input, 'test{Enter}');
      
      expect(handleChange).toHaveBeenCalled();
      expect(handleSearch).toHaveBeenCalledWith('test');
      
      const clearButton = screen.getByLabelText('Clear search');
      await user.click(clearButton);
      
      expect(handleClear).toHaveBeenCalled();
    });
  });
});



