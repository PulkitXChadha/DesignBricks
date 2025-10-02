import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Combobox, ComboboxProps, ComboboxOption } from './Combobox';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Mock data
const mockOptions: ComboboxOption[] = [
  { value: '1', label: 'Apple', description: 'A red fruit' },
  { value: '2', label: 'Banana', description: 'A yellow fruit' },
  { value: '3', label: 'Cherry', description: 'A small red fruit' },
  { value: '4', label: 'Date', description: 'A sweet brown fruit' },
  { value: '5', label: 'Elderberry', description: 'A dark purple fruit' },
];

const mockOptionsWithCategories: ComboboxOption[] = [
  { value: '1', label: 'Apple', category: 'Fruits' },
  { value: '2', label: 'Carrot', category: 'Vegetables' },
  { value: '3', label: 'Banana', category: 'Fruits' },
  { value: '4', label: 'Broccoli', category: 'Vegetables' },
];

const mockOptionsWithIcons: ComboboxOption[] = [
  { value: '1', label: 'Home', icon: <span data-testid="icon-home">🏠</span> },
  { value: '2', label: 'Search', icon: <span data-testid="icon-search">🔍</span> },
];

describe('Combobox', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      const { container } = render(<Combobox options={mockOptions} />);
      
      const combobox = container.querySelector('.db-combobox');
      expect(combobox).toBeInTheDocument();
    });

    it('renders input with placeholder', () => {
      render(<Combobox options={mockOptions} placeholder="Select fruit" />);
      
      expect(screen.getByPlaceholderText('Select fruit')).toBeInTheDocument();
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<Combobox options={mockOptions} ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });

    it('applies custom className', () => {
      const { container } = render(
        <Combobox options={mockOptions} className="custom-combobox" />
      );
      
      const combobox = container.querySelector('.db-combobox');
      expect(combobox).toHaveClass('custom-combobox');
    });

    it('uses default placeholder', () => {
      render(<Combobox options={mockOptions} />);
      
      expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    });
  });

  // Input value tests
  describe('Input Value', () => {
    it('displays controlled value', () => {
      render(<Combobox options={mockOptions} value="Apple" />);
      
      const input = screen.getByRole('combobox') as HTMLInputElement;
      expect(input.value).toBe('Apple');
    });

    it('updates on input change', async () => {
      const handleChange = jest.fn();
      render(<Combobox options={mockOptions} onChange={handleChange} />);
      
      const input = screen.getByRole('combobox');
      await userEvent.type(input, 'App');
      
      expect(handleChange).toHaveBeenCalledWith('App');
    });

    it('clears input value', async () => {
      render(<Combobox options={mockOptions} value="Apple" />);
      
      const input = screen.getByRole('combobox');
      await userEvent.clear(input);
      
      expect((input as HTMLInputElement).value).toBe('');
    });
  });

  // Dropdown behavior tests
  describe('Dropdown Behavior', () => {
    it('opens dropdown on focus', async () => {
      const { container } = render(<Combobox options={mockOptions} />);
      
      const input = screen.getByRole('combobox');
      await userEvent.click(input);
      
      await waitFor(() => {
        const list = container.querySelector('.db-combobox__list');
        expect(list).toBeInTheDocument();
      });
    });

    it('closes dropdown on Escape', async () => {
      const { container } = render(<Combobox options={mockOptions} />);
      
      const input = screen.getByRole('combobox');
      await userEvent.click(input);
      
      await waitFor(() => {
        expect(container.querySelector('.db-combobox__list')).toBeInTheDocument();
      });
      
      await userEvent.keyboard('{Escape}');
      
      await waitFor(() => {
        expect(container.querySelector('.db-combobox__list')).not.toBeInTheDocument();
      });
    });

    it('closes dropdown on Tab', async () => {
      const { container } = render(<Combobox options={mockOptions} />);
      
      const input = screen.getByRole('combobox');
      await userEvent.click(input);
      
      await userEvent.keyboard('{Tab}');
      
      await waitFor(() => {
        expect(container.querySelector('.db-combobox__list')).not.toBeInTheDocument();
      });
    });

    it('closes dropdown on option selection', async () => {
      const { container } = render(<Combobox options={mockOptions} />);
      
      const input = screen.getByRole('combobox');
      await userEvent.click(input);
      
      await waitFor(() => {
        expect(screen.getByText('Apple')).toBeInTheDocument();
      });
      
      await userEvent.click(screen.getByText('Apple'));
      
      await waitFor(() => {
        expect(container.querySelector('.db-combobox__list')).not.toBeInTheDocument();
      });
    });
  });

  // Filtering tests
  describe('Filtering', () => {
    it('filters options based on input', async () => {
      render(<Combobox options={mockOptions} />);
      
      const input = screen.getByRole('combobox');
      await userEvent.type(input, 'app');
      
      await waitFor(() => {
        expect(screen.getByText('Apple')).toBeInTheDocument();
        expect(screen.queryByText('Banana')).not.toBeInTheDocument();
      });
    });

    it('filters by label', async () => {
      render(<Combobox options={mockOptions} />);
      
      const input = screen.getByRole('combobox');
      await userEvent.type(input, 'ban');
      
      await waitFor(() => {
        expect(screen.getByText('Banana')).toBeInTheDocument();
        expect(screen.queryByText('Apple')).not.toBeInTheDocument();
      });
    });

    it('filters by description', async () => {
      render(<Combobox options={mockOptions} />);
      
      const input = screen.getByRole('combobox');
      await userEvent.type(input, 'yellow');
      
      await waitFor(() => {
        expect(screen.getByText('Banana')).toBeInTheDocument();
      });
    });

    it('shows all options when showAllOnFocus is true', async () => {
      render(<Combobox options={mockOptions} showAllOnFocus />);
      
      const input = screen.getByRole('combobox');
      await userEvent.click(input);
      
      await waitFor(() => {
        expect(screen.getByText('Apple')).toBeInTheDocument();
        expect(screen.getByText('Banana')).toBeInTheDocument();
      });
    });

    it('respects maxOptions limit', async () => {
      render(<Combobox options={mockOptions} maxOptions={3} />);
      
      const input = screen.getByRole('combobox');
      await userEvent.click(input);
      await userEvent.type(input, 'a');
      
      await waitFor(() => {
        const options = screen.getAllByRole('option');
        expect(options.length).toBeLessThanOrEqual(3);
      });
    });

    it('uses custom filter function', async () => {
      const customFilter = jest.fn((options, query) => 
        options.filter(o => o.value === query)
      );
      
      render(<Combobox options={mockOptions} filterOptions={customFilter} />);
      
      const input = screen.getByRole('combobox');
      await userEvent.type(input, '1');
      
      await waitFor(() => {
        expect(customFilter).toHaveBeenCalled();
      });
    });
  });

  // Selection tests
  describe('Selection', () => {
    it('calls onSelect when option is clicked', async () => {
      const handleSelect = jest.fn();
      render(<Combobox options={mockOptions} onSelect={handleSelect} />);
      
      const input = screen.getByRole('combobox');
      await userEvent.click(input);
      
      await waitFor(() => {
        expect(screen.getByText('Apple')).toBeInTheDocument();
      });
      
      await userEvent.click(screen.getByText('Apple'));
      
      expect(handleSelect).toHaveBeenCalledWith(mockOptions[0]);
    });

    it('updates input value on selection', async () => {
      render(<Combobox options={mockOptions} />);
      
      const input = screen.getByRole('combobox') as HTMLInputElement;
      await userEvent.click(input);
      
      await waitFor(() => {
        expect(screen.getByText('Banana')).toBeInTheDocument();
      });
      
      await userEvent.click(screen.getByText('Banana'));
      
      await waitFor(() => {
        expect(input.value).toBe('Banana');
      });
    });

    it('does not select disabled options', async () => {
      const disabledOptions: ComboboxOption[] = [
        ...mockOptions.slice(0, 1),
        { ...mockOptions[1], disabled: true },
      ];
      
      const handleSelect = jest.fn();
      render(<Combobox options={disabledOptions} onSelect={handleSelect} />);
      
      const input = screen.getByRole('combobox');
      await userEvent.click(input);
      
      await waitFor(() => {
        expect(screen.getByText('Banana')).toBeInTheDocument();
      });
      
      await userEvent.click(screen.getByText('Banana'));
      
      expect(handleSelect).not.toHaveBeenCalled();
    });
  });

  // Keyboard navigation tests
  describe('Keyboard Navigation', () => {
    it('opens dropdown on ArrowDown', async () => {
      const { container } = render(<Combobox options={mockOptions} />);
      
      const input = screen.getByRole('combobox');
      input.focus();
      
      await userEvent.keyboard('{ArrowDown}');
      
      await waitFor(() => {
        expect(container.querySelector('.db-combobox__list')).toBeInTheDocument();
      });
    });

    it('navigates options with ArrowDown', async () => {
      const { container } = render(<Combobox options={mockOptions} />);
      
      const input = screen.getByRole('combobox');
      await userEvent.click(input);
      
      await waitFor(() => {
        expect(screen.getByText('Apple')).toBeInTheDocument();
      });
      
      await userEvent.keyboard('{ArrowDown}');
      
      const highlightedOption = container.querySelector('.db-combobox__option--highlighted');
      expect(highlightedOption).toBeInTheDocument();
    });

    it('navigates options with ArrowUp', async () => {
      const { container } = render(<Combobox options={mockOptions} />);
      
      const input = screen.getByRole('combobox');
      await userEvent.click(input);
      
      await waitFor(() => {
        expect(screen.getByText('Apple')).toBeInTheDocument();
      });
      
      await userEvent.keyboard('{ArrowDown}{ArrowDown}{ArrowUp}');
      
      const options = container.querySelectorAll('.db-combobox__option');
      expect(options.length).toBeGreaterThan(0);
    });

    it('selects highlighted option on Enter', async () => {
      const handleSelect = jest.fn();
      render(<Combobox options={mockOptions} onSelect={handleSelect} />);
      
      const input = screen.getByRole('combobox');
      await userEvent.click(input);
      
      await waitFor(() => {
        expect(screen.getByText('Apple')).toBeInTheDocument();
      });
      
      await userEvent.keyboard('{ArrowDown}{Enter}');
      
      await waitFor(() => {
        expect(handleSelect).toHaveBeenCalled();
      });
    });

    it('opens dropdown on Enter when closed', async () => {
      const { container } = render(<Combobox options={mockOptions} />);
      
      const input = screen.getByRole('combobox');
      input.focus();
      
      await userEvent.keyboard('{Enter}');
      
      await waitFor(() => {
        expect(container.querySelector('.db-combobox__list')).toBeInTheDocument();
      });
    });
  });

  // Loading state tests
  describe('Loading State', () => {
    it('shows loading indicator when loading', async () => {
      render(<Combobox options={mockOptions} loading />);
      
      const input = screen.getByRole('combobox');
      await userEvent.click(input);
      
      await waitFor(() => {
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
      });
    });

    it('hides options when loading', async () => {
      render(<Combobox options={mockOptions} loading />);
      
      const input = screen.getByRole('combobox');
      await userEvent.click(input);
      
      await waitFor(() => {
        expect(screen.queryByText('Apple')).not.toBeInTheDocument();
      });
    });
  });

  // Empty state tests
  describe('Empty State', () => {
    it('shows default empty message when no options match', async () => {
      render(<Combobox options={mockOptions} />);
      
      const input = screen.getByRole('combobox');
      await userEvent.type(input, 'xyz');
      
      await waitFor(() => {
        expect(screen.getByText('No options found')).toBeInTheDocument();
      });
    });

    it('shows custom empty message', async () => {
      render(<Combobox options={mockOptions} emptyMessage="Nothing here!" />);
      
      const input = screen.getByRole('combobox');
      await userEvent.type(input, 'xyz');
      
      await waitFor(() => {
        expect(screen.getByText('Nothing here!')).toBeInTheDocument();
      });
    });
  });

  // AllowCreate tests
  describe('AllowCreate Feature', () => {
    it('shows create option when no matches and allowCreate is true', async () => {
      render(<Combobox options={mockOptions} allowCreate />);
      
      const input = screen.getByRole('combobox');
      await userEvent.type(input, 'New Item');
      
      await waitFor(() => {
        expect(screen.getByText(/create/i)).toBeInTheDocument();
      });
    });

    it('calls onCreate when creating new option', async () => {
      const handleCreate = jest.fn();
      render(<Combobox options={mockOptions} allowCreate onCreate={handleCreate} />);
      
      const input = screen.getByRole('combobox');
      await userEvent.type(input, 'New Item{Enter}');
      
      await waitFor(() => {
        expect(handleCreate).toHaveBeenCalledWith('New Item');
      });
    });

    it('does not show create option when matches exist', async () => {
      render(<Combobox options={mockOptions} allowCreate />);
      
      const input = screen.getByRole('combobox');
      await userEvent.type(input, 'App');
      
      await waitFor(() => {
        expect(screen.getByText('Apple')).toBeInTheDocument();
        expect(screen.queryByText(/create/i)).not.toBeInTheDocument();
      });
    });
  });

  // Option rendering tests
  describe('Option Rendering', () => {
    it('renders option labels', async () => {
      render(<Combobox options={mockOptions} />);
      
      const input = screen.getByRole('combobox');
      await userEvent.click(input);
      
      await waitFor(() => {
        expect(screen.getByText('Apple')).toBeInTheDocument();
        expect(screen.getByText('Banana')).toBeInTheDocument();
      });
    });

    it('renders option descriptions', async () => {
      render(<Combobox options={mockOptions} />);
      
      const input = screen.getByRole('combobox');
      await userEvent.click(input);
      
      await waitFor(() => {
        expect(screen.getByText('A red fruit')).toBeInTheDocument();
      });
    });

    it('renders option icons', async () => {
      render(<Combobox options={mockOptionsWithIcons} />);
      
      const input = screen.getByRole('combobox');
      await userEvent.click(input);
      
      await waitFor(() => {
        expect(screen.getByTestId('icon-home')).toBeInTheDocument();
        expect(screen.getByTestId('icon-search')).toBeInTheDocument();
      });
    });

    it('applies disabled class to disabled options', async () => {
      const disabledOptions: ComboboxOption[] = [
        mockOptions[0],
        { ...mockOptions[1], disabled: true },
      ];
      
      const { container } = render(<Combobox options={disabledOptions} />);
      
      const input = screen.getByRole('combobox');
      await userEvent.click(input);
      
      await waitFor(() => {
        const disabledOption = container.querySelector('.db-combobox__option--disabled');
        expect(disabledOption).toBeInTheDocument();
      });
    });
  });

  // Disabled state tests
  describe('Disabled State', () => {
    it('disables input when disabled prop is true', () => {
      render(<Combobox options={mockOptions} disabled />);
      
      const input = screen.getByRole('combobox');
      expect(input).toBeDisabled();
    });

    it('does not open dropdown when disabled', async () => {
      const { container } = render(<Combobox options={mockOptions} disabled />);
      
      const input = screen.getByRole('combobox');
      await userEvent.click(input);
      
      expect(container.querySelector('.db-combobox__list')).not.toBeInTheDocument();
    });
  });

  // Click outside tests
  describe('Click Outside', () => {
    it('closes dropdown when clicking outside', async () => {
      const { container } = render(
        <div>
          <Combobox options={mockOptions} />
          <button>Outside</button>
        </div>
      );
      
      const input = screen.getByRole('combobox');
      await userEvent.click(input);
      
      await waitFor(() => {
        expect(container.querySelector('.db-combobox__list')).toBeInTheDocument();
      });
      
      await userEvent.click(screen.getByText('Outside'));
      
      await waitFor(() => {
        expect(container.querySelector('.db-combobox__list')).not.toBeInTheDocument();
      });
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles empty options array', async () => {
      render(<Combobox options={[]} />);
      
      const input = screen.getByRole('combobox');
      await userEvent.click(input);
      
      await waitFor(() => {
        expect(screen.getByText('No options found')).toBeInTheDocument();
      });
    });

    it('handles rapid input changes', async () => {
      const handleChange = jest.fn();
      render(<Combobox options={mockOptions} onChange={handleChange} />);
      
      const input = screen.getByRole('combobox');
      await userEvent.type(input, 'abc');
      
      expect(handleChange).toHaveBeenCalledTimes(3);
    });

    it('handles option with no description', async () => {
      const options: ComboboxOption[] = [
        { value: '1', label: 'Test' },
      ];
      
      render(<Combobox options={options} />);
      
      const input = screen.getByRole('combobox');
      await userEvent.click(input);
      
      await waitFor(() => {
        expect(screen.getByText('Test')).toBeInTheDocument();
      });
    });

    it('preserves input value during re-render', () => {
      const { rerender } = render(<Combobox options={mockOptions} value="Apple" />);
      
      let input = screen.getByRole('combobox') as HTMLInputElement;
      expect(input.value).toBe('Apple');
      
      rerender(<Combobox options={mockOptions} value="Banana" />);
      
      input = screen.getByRole('combobox') as HTMLInputElement;
      expect(input.value).toBe('Banana');
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Combobox options={mockOptions} />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper combobox role', () => {
      render(<Combobox options={mockOptions} />);
      
      const input = screen.getByRole('combobox');
      expect(input).toBeInTheDocument();
    });

    it('has proper aria-expanded attribute', async () => {
      render(<Combobox options={mockOptions} />);
      
      const input = screen.getByRole('combobox');
      expect(input).toHaveAttribute('aria-expanded', 'false');
      
      await userEvent.click(input);
      
      await waitFor(() => {
        expect(input).toHaveAttribute('aria-expanded', 'true');
      });
    });

    it('provides accessible option roles', async () => {
      render(<Combobox options={mockOptions} />);
      
      const input = screen.getByRole('combobox');
      await userEvent.click(input);
      
      await waitFor(() => {
        const options = screen.getAllByRole('option');
        expect(options.length).toBeGreaterThan(0);
      });
    });

    it('is keyboard navigable', async () => {
      render(<Combobox options={mockOptions} />);
      
      const input = screen.getByRole('combobox');
      await userEvent.tab();
      
      expect(input).toHaveFocus();
      
      await userEvent.keyboard('{ArrowDown}');
      
      await waitFor(() => {
        expect(screen.getByText('Apple')).toBeInTheDocument();
      });
    });
  });

  // displayName test
  describe('Component Meta', () => {
    it('has correct displayName', () => {
      expect(Combobox.displayName).toBe('Combobox');
    });
  });
});



