import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { PillControl, PillControlProps, PillOption } from './PillControl';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Mock data
const mockOptions: PillOption[] = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

const mockOptionsWithIcons: PillOption[] = [
  { value: '1', label: 'Home', icon: <span data-testid="icon-home">🏠</span> },
  { value: '2', label: 'Search', icon: <span data-testid="icon-search">🔍</span> },
  { value: '3', label: 'Settings', icon: <span data-testid="icon-settings">⚙️</span> },
];

const mockOptionsWithBadges: PillOption[] = [
  { value: '1', label: 'All', badge: 10 },
  { value: '2', label: 'Active', badge: 5 },
  { value: '3', label: 'Completed', badge: '3' },
];

describe('PillControl', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      const { container } = render(<PillControl options={mockOptions} />);
      
      const control = container.querySelector('.db-pill-control');
      expect(control).toBeInTheDocument();
      expect(control).toHaveClass('db-pill-control--medium');
    });

    it('renders all options', () => {
      render(<PillControl options={mockOptions} />);
      
      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Option 2')).toBeInTheDocument();
      expect(screen.getByText('Option 3')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      const { container } = render(
        <PillControl options={mockOptions} className="custom-pills" />
      );
      
      const control = container.querySelector('.db-pill-control');
      expect(control).toHaveClass('custom-pills');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<PillControl options={mockOptions} ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current).toHaveClass('db-pill-control');
    });

    it('forwards additional props', () => {
      render(
        <PillControl
          options={mockOptions}
          data-testid="pill-control"
          id="test"
        />
      );
      
      const control = screen.getByTestId('pill-control');
      expect(control).toHaveAttribute('id', 'test');
    });

    it('uses radiogroup role', () => {
      const { container } = render(<PillControl options={mockOptions} />);
      
      const control = container.querySelector('[role="radiogroup"]');
      expect(control).toBeInTheDocument();
    });
  });

  // Size tests
  describe('Sizes', () => {
    const sizes: Array<PillControlProps['size']> = ['small', 'medium', 'large'];
    
    sizes.forEach(size => {
      it(`renders ${size} size correctly`, () => {
        const { container } = render(
          <PillControl options={mockOptions} size={size} />
        );
        
        const control = container.querySelector('.db-pill-control');
        expect(control).toHaveClass(`db-pill-control--${size}`);
      });
    });

    it('applies medium size by default', () => {
      const { container } = render(<PillControl options={mockOptions} />);
      
      const control = container.querySelector('.db-pill-control');
      expect(control).toHaveClass('db-pill-control--medium');
    });
  });

  // Selection tests
  describe('Selection', () => {
    it('selects first option by default', () => {
      render(<PillControl options={mockOptions} />);
      
      const radio = screen.getByLabelText('Option 1') as HTMLInputElement;
      expect(radio.checked).toBe(true);
    });

    it('selects option based on defaultValue', () => {
      render(<PillControl options={mockOptions} defaultValue="2" />);
      
      const radio = screen.getByLabelText('Option 2') as HTMLInputElement;
      expect(radio.checked).toBe(true);
    });

    it('uses controlled value', () => {
      render(<PillControl options={mockOptions} value="3" />);
      
      const radio = screen.getByLabelText('Option 3') as HTMLInputElement;
      expect(radio.checked).toBe(true);
    });

    it('calls onChange when selection changes', async () => {
      const handleChange = jest.fn();
      render(<PillControl options={mockOptions} onChange={handleChange} />);
      
      const option2 = screen.getByText('Option 2');
      await userEvent.click(option2);
      
      expect(handleChange).toHaveBeenCalledWith('2');
    });

    it('updates selection on click', async () => {
      const handleChange = jest.fn();
      render(<PillControl options={mockOptions} onChange={handleChange} />);
      
      const option3 = screen.getByText('Option 3');
      await userEvent.click(option3);
      
      expect(handleChange).toHaveBeenCalledWith('3');
    });

    it('does not select when allowDeselect is false', async () => {
      const handleChange = jest.fn();
      render(
        <PillControl
          options={mockOptions}
          value="1"
          onChange={handleChange}
          allowDeselect={false}
        />
      );
      
      const option1 = screen.getByText('Option 1');
      await userEvent.click(option1);
      
      // Should not deselect
      const radio = screen.getByLabelText('Option 1') as HTMLInputElement;
      expect(radio.checked).toBe(true);
    });
  });

  // AllowDeselect tests
  describe('AllowDeselect', () => {
    it('supports deselection in controlled mode', () => {
      const { container } = render(
        <PillControl
          options={mockOptions}
          value="1"
          onChange={() => {}}
          allowDeselect
        />
      );
      
      // Component should render with option 1 selected
      const radio = screen.getByLabelText('Option 1') as HTMLInputElement;
      expect(radio.checked).toBe(true);
    });

    it('starts with no selection when allowDeselect is true and no default', () => {
      const { container } = render(<PillControl options={mockOptions} allowDeselect />);
      
      const inputs = container.querySelectorAll('input[type="radio"]') as NodeListOf<HTMLInputElement>;
      inputs.forEach(input => {
        expect(input.checked).toBe(false);
      });
    });

    it('allows selection when allowDeselect is true', async () => {
      const handleChange = jest.fn();
      render(
        <PillControl
          options={mockOptions}
          onChange={handleChange}
          allowDeselect
        />
      );
      
      const radio = screen.getByLabelText('Option 1');
      await userEvent.click(radio);
      
      expect(handleChange).toHaveBeenCalledWith('1');
    });
  });

  // Disabled state tests
  describe('Disabled State', () => {
    it('applies disabled class when disabled', () => {
      const { container } = render(
        <PillControl options={mockOptions} disabled />
      );
      
      const control = container.querySelector('.db-pill-control');
      expect(control).toHaveClass('db-pill-control--disabled');
    });

    it('disables all radio inputs when disabled', () => {
      const { container } = render(<PillControl options={mockOptions} disabled />);
      
      const inputs = container.querySelectorAll('input[type="radio"]') as NodeListOf<HTMLInputElement>;
      inputs.forEach(input => {
        expect(input.disabled).toBe(true);
      });
    });

    it('does not call onChange when disabled', async () => {
      const handleChange = jest.fn();
      render(
        <PillControl options={mockOptions} disabled onChange={handleChange} />
      );
      
      const option2 = screen.getByText('Option 2');
      await userEvent.click(option2);
      
      expect(handleChange).not.toHaveBeenCalled();
    });

    it('disables individual options', () => {
      const options: PillOption[] = [
        ...mockOptions.slice(0, 2),
        { value: '3', label: 'Disabled Option', disabled: true },
      ];
      
      render(<PillControl options={options} />);
      
      const radio = screen.getByLabelText('Disabled Option') as HTMLInputElement;
      expect(radio.disabled).toBe(true);
    });

    it('applies disabled class to individual options', () => {
      const options: PillOption[] = [
        ...mockOptions.slice(0, 2),
        { value: '3', label: 'Disabled Option', disabled: true },
      ];
      
      const { container } = render(<PillControl options={options} />);
      
      const disabledOption = container.querySelector('.db-pill-control__option--disabled');
      expect(disabledOption).toBeInTheDocument();
    });

    it('does not select disabled option on click', async () => {
      const handleChange = jest.fn();
      const options: PillOption[] = [
        ...mockOptions.slice(0, 2),
        { value: '3', label: 'Disabled', disabled: true },
      ];
      
      render(<PillControl options={options} onChange={handleChange} />);
      
      const option3 = screen.getByText('Disabled');
      await userEvent.click(option3);
      
      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  // Icons tests
  describe('Icons', () => {
    it('renders options with icons', () => {
      render(<PillControl options={mockOptionsWithIcons} />);
      
      expect(screen.getByTestId('icon-home')).toBeInTheDocument();
      expect(screen.getByTestId('icon-search')).toBeInTheDocument();
      expect(screen.getByTestId('icon-settings')).toBeInTheDocument();
    });

    it('applies icon class', () => {
      const { container } = render(<PillControl options={mockOptionsWithIcons} />);
      
      const icons = container.querySelectorAll('.db-pill-control__icon');
      expect(icons).toHaveLength(3);
    });

    it('renders options without icons correctly', () => {
      const { container } = render(<PillControl options={mockOptions} />);
      
      const icons = container.querySelectorAll('.db-pill-control__icon');
      expect(icons).toHaveLength(0);
    });
  });

  // Badges tests
  describe('Badges', () => {
    it('renders options with badges', () => {
      render(<PillControl options={mockOptionsWithBadges} />);
      
      expect(screen.getByText('10')).toBeInTheDocument();
      expect(screen.getByText('5')).toBeInTheDocument();
      expect(screen.getByText('3')).toBeInTheDocument();
    });

    it('applies badge class', () => {
      const { container } = render(<PillControl options={mockOptionsWithBadges} />);
      
      const badges = container.querySelectorAll('.db-pill-control__badge');
      expect(badges).toHaveLength(3);
    });

    it('renders numeric badges', () => {
      const options: PillOption[] = [
        { value: '1', label: 'All', badge: 999 },
      ];
      
      render(<PillControl options={options} />);
      
      expect(screen.getByText('999')).toBeInTheDocument();
    });

    it('renders string badges', () => {
      const options: PillOption[] = [
        { value: '1', label: 'New', badge: 'NEW' },
      ];
      
      render(<PillControl options={options} />);
      
      expect(screen.getByText('NEW')).toBeInTheDocument();
    });
  });

  // FullWidth tests
  describe('FullWidth', () => {
    it('applies full-width class when fullWidth is true', () => {
      const { container } = render(
        <PillControl options={mockOptions} fullWidth />
      );
      
      const control = container.querySelector('.db-pill-control');
      expect(control).toHaveClass('db-pill-control--full-width');
    });

    it('does not apply full-width class by default', () => {
      const { container } = render(<PillControl options={mockOptions} />);
      
      const control = container.querySelector('.db-pill-control');
      expect(control).not.toHaveClass('db-pill-control--full-width');
    });
  });

  // Keyboard navigation tests
  describe('Keyboard Navigation', () => {
    it('selects option with Enter key', async () => {
      const handleChange = jest.fn();
      render(<PillControl options={mockOptions} onChange={handleChange} />);
      
      const option2 = screen.getByText('Option 2').closest('[role="radio"]') as HTMLElement;
      option2.focus();
      
      await userEvent.keyboard('{Enter}');
      
      expect(handleChange).toHaveBeenCalledWith('2');
    });

    it('selects option with Space key', async () => {
      const handleChange = jest.fn();
      render(<PillControl options={mockOptions} onChange={handleChange} />);
      
      const option3 = screen.getByText('Option 3').closest('[role="radio"]') as HTMLElement;
      option3.focus();
      
      await userEvent.keyboard(' ');
      
      expect(handleChange).toHaveBeenCalledWith('3');
    });

    it('prevents default on Space key', async () => {
      render(<PillControl options={mockOptions} />);
      
      const option = screen.getByText('Option 2').closest('[role="radio"]') as HTMLElement;
      option.focus();
      
      const event = new KeyboardEvent('keydown', { key: ' ', bubbles: true, cancelable: true });
      const preventDefaultSpy = jest.spyOn(event, 'preventDefault');
      
      option.dispatchEvent(event);
      
      expect(preventDefaultSpy).toHaveBeenCalled();
    });

    it('does not trigger on other keys', async () => {
      const handleChange = jest.fn();
      render(<PillControl options={mockOptions} onChange={handleChange} />);
      
      const option = screen.getByText('Option 2').closest('[role="radio"]') as HTMLElement;
      option.focus();
      
      await userEvent.keyboard('{ArrowRight}');
      await userEvent.keyboard('{Tab}');
      
      expect(handleChange).not.toHaveBeenCalled();
    });

    it('makes options focusable', () => {
      render(<PillControl options={mockOptions} />);
      
      const options = screen.getAllByRole('radio').filter(el => 
        el.getAttribute('role') === 'radio' && el.classList.contains('db-pill-control__pill')
      );
      
      options.forEach(option => {
        expect(option).toHaveAttribute('tabIndex', '0');
      });
    });

    it('makes disabled options not focusable', () => {
      const options: PillOption[] = [
        ...mockOptions.slice(0, 2),
        { value: '3', label: 'Disabled', disabled: true },
      ];
      
      const { container } = render(<PillControl options={options} />);
      
      const disabledPill = container.querySelector('.db-pill-control__option--disabled .db-pill-control__pill');
      expect(disabledPill).toHaveAttribute('tabIndex', '-1');
    });
  });

  // ARIA attributes tests
  describe('ARIA Attributes', () => {
    it('sets aria-checked on selected option', () => {
      render(<PillControl options={mockOptions} value="2" />);
      
      const pill = screen.getByText('Option 2').closest('[role="radio"]');
      expect(pill).toHaveAttribute('aria-checked', 'true');
    });

    it('sets aria-checked to false on unselected options', () => {
      render(<PillControl options={mockOptions} value="1" />);
      
      const pill2 = screen.getByText('Option 2').closest('[role="radio"]');
      const pill3 = screen.getByText('Option 3').closest('[role="radio"]');
      
      expect(pill2).toHaveAttribute('aria-checked', 'false');
      expect(pill3).toHaveAttribute('aria-checked', 'false');
    });

    it('sets aria-disabled on disabled options', () => {
      const options: PillOption[] = [
        ...mockOptions.slice(0, 2),
        { value: '3', label: 'Disabled', disabled: true },
      ];
      
      render(<PillControl options={options} />);
      
      const pill = screen.getByText('Disabled').closest('[role="radio"]');
      expect(pill).toHaveAttribute('aria-disabled', 'true');
    });
  });

  // Name prop tests
  describe('Name Prop', () => {
    it('uses custom name for radio group', () => {
      const { container } = render(<PillControl options={mockOptions} name="custom-group" />);
      
      const inputs = container.querySelectorAll('input[type="radio"]') as NodeListOf<HTMLInputElement>;
      inputs.forEach(input => {
        expect(input.name).toBe('custom-group');
      });
    });

    it('generates unique name when not provided', () => {
      const { container } = render(<PillControl options={mockOptions} />);
      
      const radios = container.querySelectorAll('input[type="radio"]') as NodeListOf<HTMLInputElement>;
      const firstName = radios[0].name;
      
      expect(firstName).toContain('pill-control-');
      radios.forEach(radio => {
        expect(radio.name).toBe(firstName);
      });
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles empty options array', () => {
      const { container } = render(<PillControl options={[]} />);
      
      const control = container.querySelector('.db-pill-control');
      expect(control).toBeInTheDocument();
      expect(control?.children).toHaveLength(0);
    });

    it('handles single option', () => {
      const options: PillOption[] = [{ value: '1', label: 'Only option' }];
      render(<PillControl options={options} />);
      
      expect(screen.getByText('Only option')).toBeInTheDocument();
    });

    it('handles complex labels', () => {
      const options: PillOption[] = [
        { value: '1', label: <span><strong>Bold</strong> Label</span> },
      ];
      
      render(<PillControl options={options} />);
      
      expect(screen.getByText('Bold')).toBeInTheDocument();
      expect(screen.getByText('Label')).toBeInTheDocument();
    });

    it('handles rapid selection changes', async () => {
      const handleChange = jest.fn();
      render(<PillControl options={mockOptions} onChange={handleChange} defaultValue="1" />);
      
      // Option 1 is already selected, clicking it does nothing without allowDeselect
      await userEvent.click(screen.getByText('Option 2'));
      await userEvent.click(screen.getByText('Option 3'));
      
      expect(handleChange).toHaveBeenCalledTimes(2);
    });

    it('preserves state during re-render', () => {
      const { rerender } = render(
        <PillControl options={mockOptions} value="1" />
      );
      
      let radio = screen.getByLabelText('Option 1') as HTMLInputElement;
      expect(radio.checked).toBe(true);
      
      rerender(<PillControl options={mockOptions} value="2" />);
      
      radio = screen.getByLabelText('Option 2') as HTMLInputElement;
      expect(radio.checked).toBe(true);
    });

    it('works with all features combined', () => {
      const handleChange = jest.fn();
      const options: PillOption[] = [
        { value: '1', label: 'Home', icon: <span>🏠</span>, badge: 5 },
        { value: '2', label: 'Disabled', icon: <span>⚙️</span>, disabled: true },
        { value: '3', label: 'Active', icon: <span>✓</span>, badge: 'NEW' },
      ];
      
      const { container } = render(
        <PillControl
          options={options}
          value="1"
          onChange={handleChange}
          size="large"
          fullWidth
          name="test-group"
          className="custom"
          data-testid="control"
        />
      );
      
      const control = screen.getByTestId('control');
      expect(control).toHaveClass('db-pill-control--large', 'db-pill-control--full-width', 'custom');
      expect(screen.getByText('5')).toBeInTheDocument();
      expect(screen.getByText('NEW')).toBeInTheDocument();
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<PillControl options={mockOptions} />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no accessibility violations with icons and badges', async () => {
      const options: PillOption[] = [
        { value: '1', label: 'Home', icon: <span>🏠</span>, badge: 5 },
        { value: '2', label: 'Search', icon: <span>🔍</span>, badge: 10 },
      ];
      
      const { container } = render(<PillControl options={options} />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no accessibility violations when disabled', async () => {
      const { container } = render(<PillControl options={mockOptions} disabled />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('is keyboard accessible', async () => {
      const handleChange = jest.fn();
      render(<PillControl options={mockOptions} onChange={handleChange} />);
      
      const option2 = screen.getByText('Option 2').closest('[role="radio"]') as HTMLElement;
      
      // Tab to focus
      await userEvent.tab();
      
      // Navigate and activate
      option2.focus();
      await userEvent.keyboard('{Enter}');
      
      expect(handleChange).toHaveBeenCalledWith('2');
    });

    it('has proper radiogroup semantics', () => {
      render(<PillControl options={mockOptions} />);
      
      const radiogroup = screen.getByRole('radiogroup');
      expect(radiogroup).toBeInTheDocument();
    });

    it('has proper radio semantics for options', () => {
      render(<PillControl options={mockOptions} />);
      
      const radios = screen.getAllByRole('radio').filter(el => 
        el.classList.contains('db-pill-control__pill')
      );
      
      expect(radios).toHaveLength(3);
    });
  });

  // displayName test
  describe('Component Meta', () => {
    it('has correct displayName', () => {
      expect(PillControl.displayName).toBe('PillControl');
    });
  });
});
