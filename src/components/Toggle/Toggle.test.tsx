import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Toggle, ToggleProps } from './Toggle';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

describe('Toggle', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      render(<Toggle />);
      
      const toggle = screen.getByRole('checkbox');
      expect(toggle).toBeInTheDocument();
      expect(toggle).not.toBeChecked();
      expect(toggle).not.toBeDisabled();
      expect(toggle).toHaveClass('db-toggle__input');
      
      const wrapper = toggle.closest('.db-toggle');
      expect(wrapper).toHaveClass('db-toggle', 'db-toggle--medium');
    });

    it('renders with custom className', () => {
      render(<Toggle className="custom-toggle" />);
      
      const wrapper = screen.getByRole('checkbox').closest('.db-toggle');
      expect(wrapper).toHaveClass('db-toggle', 'custom-toggle');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<Toggle ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
      expect(ref.current).toHaveAttribute('type', 'checkbox');
    });

    it('forwards additional props to input', () => {
      render(<Toggle data-testid="toggle-input" name="my-toggle" />);
      
      const toggle = screen.getByTestId('toggle-input');
      expect(toggle).toBeInTheDocument();
      expect(toggle).toHaveAttribute('name', 'my-toggle');
    });

    it('generates unique IDs for multiple instances', () => {
      render(
        <>
          <Toggle label="Toggle 1" />
          <Toggle label="Toggle 2" />
        </>
      );
      
      const toggles = screen.getAllByRole('checkbox');
      expect(toggles[0].id).not.toBe(toggles[1].id);
      expect(toggles[0].labels![0]).toHaveAttribute('for', toggles[0].id);
      expect(toggles[1].labels![0]).toHaveAttribute('for', toggles[1].id);
    });

    it('uses provided ID when given', () => {
      render(<Toggle id="my-custom-id" label="Custom ID" />);
      
      const toggle = screen.getByLabelText('Custom ID');
      expect(toggle).toHaveAttribute('id', 'my-custom-id');
    });
  });

  // Size tests
  describe('Sizes', () => {
    const sizes: Array<ToggleProps['size']> = ['small', 'medium', 'large'];
    
    sizes.forEach(size => {
      it(`renders ${size} size correctly`, () => {
        render(<Toggle size={size} />);
        
        const wrapper = screen.getByRole('checkbox').closest('.db-toggle');
        expect(wrapper).toHaveClass(`db-toggle--${size}`);
      });
    });

    it('applies medium size by default', () => {
      render(<Toggle />);
      
      const wrapper = screen.getByRole('checkbox').closest('.db-toggle');
      expect(wrapper).toHaveClass('db-toggle--medium');
    });

    it('applies medium size when size is undefined', () => {
      render(<Toggle size={undefined} />);
      
      const wrapper = screen.getByRole('checkbox').closest('.db-toggle');
      expect(wrapper).toHaveClass('db-toggle--medium');
    });
  });

  // Label tests
  describe('Label', () => {
    it('renders label when provided', () => {
      render(<Toggle label="Test Label" />);
      
      const label = screen.getByText('Test Label');
      expect(label).toBeInTheDocument();
      expect(label).toHaveClass('db-toggle__label');
    });

    it('does not render label when not provided', () => {
      render(<Toggle />);
      
      expect(document.querySelector('.db-toggle__label')).not.toBeInTheDocument();
    });

    it('associates label with toggle correctly', () => {
      render(<Toggle label="Test Label" />);
      
      const toggle = screen.getByLabelText('Test Label');
      expect(toggle).toBeInTheDocument();
      expect(toggle).toHaveAttribute('type', 'checkbox');
    });

    it('renders label on the right by default', () => {
      render(<Toggle label="Right Label" />);
      
      const wrapper = screen.getByRole('checkbox').closest('.db-toggle');
      expect(wrapper).not.toHaveClass('db-toggle--label-left');
      
      const label = screen.getByText('Right Label');
      expect(label).toHaveClass('db-toggle__label');
    });

    it('renders label on the left when labelPosition is left', () => {
      render(<Toggle label="Left Label" labelPosition="left" />);
      
      const wrapper = screen.getByRole('checkbox').closest('.db-toggle');
      expect(wrapper).toHaveClass('db-toggle--label-left');
      
      const label = screen.getByText('Left Label');
      expect(label).toHaveClass('db-toggle__label');
    });

    it('renders label on the right when labelPosition is right', () => {
      render(<Toggle label="Right Label" labelPosition="right" />);
      
      const wrapper = screen.getByRole('checkbox').closest('.db-toggle');
      expect(wrapper).not.toHaveClass('db-toggle--label-left');
    });

    it('does not render label when label is empty string', () => {
      render(<Toggle label="" />);
      
      const labelElement = document.querySelector('.db-toggle__label');
      expect(labelElement).not.toBeInTheDocument();
    });

    it('renders long labels correctly', () => {
      const longLabel = 'This is a very long toggle label that might wrap to multiple lines and should be handled gracefully by the component layout';
      render(<Toggle label={longLabel} />);
      
      expect(screen.getByText(longLabel)).toBeInTheDocument();
    });
  });

  // States tests
  describe('States', () => {
    it('applies error styles when error is true', () => {
      render(<Toggle error />);
      
      const wrapper = screen.getByRole('checkbox').closest('.db-toggle');
      expect(wrapper).toHaveClass('db-toggle--error');
    });

    it('does not apply error styles by default', () => {
      render(<Toggle />);
      
      const wrapper = screen.getByRole('checkbox').closest('.db-toggle');
      expect(wrapper).not.toHaveClass('db-toggle--error');
    });

    it('applies disabled styles when disabled is true', () => {
      render(<Toggle disabled />);
      
      const toggle = screen.getByRole('checkbox');
      const wrapper = toggle.closest('.db-toggle');
      
      expect(toggle).toBeDisabled();
      expect(wrapper).toHaveClass('db-toggle--disabled');
    });

    it('does not apply disabled styles by default', () => {
      render(<Toggle />);
      
      const toggle = screen.getByRole('checkbox');
      const wrapper = toggle.closest('.db-toggle');
      
      expect(toggle).not.toBeDisabled();
      expect(wrapper).not.toHaveClass('db-toggle--disabled');
    });

    it('handles checked state correctly', () => {
      render(<Toggle checked readOnly />);
      
      const toggle = screen.getByRole('checkbox');
      expect(toggle).toBeChecked();
    });

    it('handles unchecked state correctly', () => {
      render(<Toggle checked={false} readOnly />);
      
      const toggle = screen.getByRole('checkbox');
      expect(toggle).not.toBeChecked();
    });
  });

  // Helper text tests
  describe('Helper Text', () => {
    it('renders helper text when provided', () => {
      render(<Toggle helperText="Helpful text" />);
      
      const helper = screen.getByText('Helpful text');
      expect(helper).toBeInTheDocument();
      expect(helper).toHaveClass('db-toggle__helper');
    });

    it('does not render helper text when not provided', () => {
      render(<Toggle />);
      
      expect(document.querySelector('.db-toggle__helper')).not.toBeInTheDocument();
    });

    it('renders helper text with label', () => {
      render(<Toggle label="Label" helperText="Helpful text" />);
      
      const label = screen.getByText('Label');
      const helperText = screen.getByText('Helpful text');
      
      expect(label).toBeInTheDocument();
      expect(helperText).toBeInTheDocument();
    });

    it('does not render helper text when helperText is empty string', () => {
      render(<Toggle helperText="" />);
      
      const helperElement = document.querySelector('.db-toggle__helper');
      expect(helperElement).not.toBeInTheDocument();
    });

    it('renders long helper text correctly', () => {
      const longHelperText = 'This is a very long helper text that provides detailed instructions about what toggling this switch means and what actions will be taken as a result of the user\'s selection.';
      render(<Toggle helperText={longHelperText} />);
      
      expect(screen.getByText(longHelperText)).toBeInTheDocument();
    });
  });

  // User interaction tests
  describe('User Interaction', () => {
    it('can be clicked to toggle state', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(<Toggle onChange={handleChange} />);
      
      const toggle = screen.getByRole('checkbox');
      
      expect(toggle).not.toBeChecked();
      await user.click(toggle);
      expect(toggle).toBeChecked();
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith(expect.objectContaining({
        target: expect.objectContaining({ checked: true }),
      }));
      
      await user.click(toggle);
      expect(toggle).not.toBeChecked();
      expect(handleChange).toHaveBeenCalledTimes(2);
      expect(handleChange).toHaveBeenCalledWith(expect.objectContaining({
        target: expect.objectContaining({ checked: false }),
      }));
    });

    it('can be toggled by clicking the label', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(<Toggle label="Clickable Label" onChange={handleChange} />);
      
      const label = screen.getByText('Clickable Label');
      const toggle = screen.getByRole('checkbox');
      
      expect(toggle).not.toBeChecked();
      await user.click(label);
      expect(toggle).toBeChecked();
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('supports keyboard interaction', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(<Toggle onChange={handleChange} />);
      
      const toggle = screen.getByRole('checkbox');
      
      // Focus and use Space key to toggle
      toggle.focus();
      expect(toggle).toHaveFocus();
      await user.keyboard(' '); // Space character toggles checkbox
      expect(toggle).toBeChecked();
      expect(handleChange).toHaveBeenCalledTimes(1);
      
      // Space again to untoggle
      await user.keyboard(' ');
      expect(toggle).not.toBeChecked();
      expect(handleChange).toHaveBeenCalledTimes(2);
    });

    it('does not respond to interaction when disabled', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(<Toggle disabled onChange={handleChange} />);
      
      const toggle = screen.getByRole('checkbox');
      
      await user.click(toggle);
      expect(toggle).not.toBeChecked();
      expect(handleChange).not.toHaveBeenCalled();
    });

    it('calls onFocus and onBlur handlers', async () => {
      const handleFocus = jest.fn();
      const handleBlur = jest.fn();
      const user = userEvent.setup();
      
      render(<Toggle onFocus={handleFocus} onBlur={handleBlur} />);
      
      const toggle = screen.getByRole('checkbox');
      
      await user.tab();
      expect(toggle).toHaveFocus();
      expect(handleFocus).toHaveBeenCalledTimes(1);
      
      await user.tab(); // Tab away
      expect(toggle).not.toHaveFocus();
      expect(handleBlur).toHaveBeenCalledTimes(1);
    });

    it('supports controlled state', async () => {
      const TestComponent = () => {
        const [checked, setChecked] = React.useState(false);
        
        return (
          <div>
            <Toggle
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              label="Controlled toggle"
            />
            <button onClick={() => setChecked(!checked)}>
              Toggle
            </button>
          </div>
        );
      };
      
      const user = userEvent.setup();
      render(<TestComponent />);
      
      const toggle = screen.getByRole('checkbox');
      const button = screen.getByText('Toggle');
      
      expect(toggle).not.toBeChecked();
      
      await user.click(button);
      expect(toggle).toBeChecked();
      
      await user.click(button);
      expect(toggle).not.toBeChecked();
    });

    it('handles rapid clicks correctly', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(<Toggle onChange={handleChange} />);
      
      const toggle = screen.getByRole('checkbox');
      
      await user.click(toggle);
      await user.click(toggle);
      await user.click(toggle);
      
      expect(handleChange).toHaveBeenCalledTimes(3);
    });
  });

  // Visual elements tests
  describe('Visual Elements', () => {
    it('renders toggle visual elements', () => {
      render(<Toggle />);
      
      expect(document.querySelector('.db-toggle__track')).toBeInTheDocument();
      expect(document.querySelector('.db-toggle__slider')).toBeInTheDocument();
      expect(document.querySelector('.db-toggle__thumb')).toBeInTheDocument();
    });

    it('has proper wrapper structure', () => {
      render(<Toggle label="Test" />);
      
      const wrapper = document.querySelector('.db-toggle__wrapper');
      expect(wrapper).toBeInTheDocument();
      expect(wrapper).toContainElement(screen.getByRole('checkbox'));
      expect(wrapper).toContainElement(document.querySelector('.db-toggle__track'));
      expect(wrapper).toContainElement(screen.getByText('Test'));
    });

    it('renders track containing input and slider', () => {
      render(<Toggle />);
      
      const track = document.querySelector('.db-toggle__track');
      const input = screen.getByRole('checkbox');
      const slider = document.querySelector('.db-toggle__slider');
      
      expect(track).toContainElement(input);
      expect(track).toContainElement(slider);
    });

    it('renders thumb inside slider', () => {
      render(<Toggle />);
      
      const slider = document.querySelector('.db-toggle__slider');
      const thumb = document.querySelector('.db-toggle__thumb');
      
      expect(slider).toContainElement(thumb);
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<Toggle label="Accessible toggle" />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations when disabled', async () => {
      const { container } = render(<Toggle label="Disabled toggle" disabled />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations when in error state', async () => {
      const { container } = render(<Toggle label="Error toggle" error />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with all features', async () => {
      const { container } = render(
        <Toggle
          label="Full featured toggle"
          helperText="This is helper text"
          error
        />
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper label association', () => {
      render(<Toggle id="unique-id" label="Associated Label" />);
      
      const toggle = screen.getByRole('checkbox');
      const labelElement = screen.getByText('Associated Label').closest('label');
      
      expect(toggle).toHaveAttribute('id', 'unique-id');
      expect(labelElement).toHaveAttribute('for', 'unique-id');
    });

    it('supports additional ARIA attributes', () => {
      render(<Toggle label="ARIA toggle" aria-describedby="hint-text" />);
      
      const toggle = screen.getByRole('checkbox');
      expect(toggle).toHaveAttribute('aria-describedby', 'hint-text');
    });

    it('is keyboard accessible', async () => {
      const user = userEvent.setup();
      
      render(<Toggle label="Keyboard test" />);
      
      const toggle = screen.getByRole('checkbox');
      await user.tab();
      expect(toggle).toHaveFocus();
    });

    it('announces state changes to screen readers', async () => {
      const user = userEvent.setup();
      
      render(<Toggle label="Screen reader test" />);
      
      const toggle = screen.getByRole('checkbox');
      expect(toggle).not.toBeChecked();
      
      await user.click(toggle);
      expect(toggle).toBeChecked();
      
      // Native checkbox inputs manage their own checked state for screen readers
      expect(toggle).toHaveProperty('checked', true);
    });

    it('maintains semantic structure', () => {
      render(<Toggle label="Semantic test" helperText="Helper" />);
      
      const toggle = screen.getByRole('checkbox');
      const label = screen.getByText('Semantic test');
      const helper = screen.getByText('Helper');
      
      expect(toggle.tagName).toBe('INPUT');
      expect(toggle).toHaveAttribute('type', 'checkbox');
      expect(label.tagName).toBe('SPAN');
      expect(helper.tagName).toBe('DIV');
    });
  });

  // Property combinations tests
  describe('Property Combinations', () => {
    it('handles all props together', () => {
      render(
        <Toggle
          label="Combined Toggle"
          size="large"
          error
          helperText="Combined helper text"
          disabled
          labelPosition="left"
          className="combined-class"
          id="combined-id"
          data-testid="combined-toggle"
        />
      );
      
      const toggle = screen.getByTestId('combined-toggle');
      const wrapper = toggle.closest('.db-toggle');
      
      expect(wrapper).toHaveClass(
        'db-toggle--large',
        'db-toggle--error',
        'db-toggle--disabled',
        'db-toggle--label-left',
        'combined-class'
      );
      expect(toggle).toBeDisabled();
      expect(toggle).toHaveAttribute('id', 'combined-id');
      expect(screen.getByText('Combined Toggle')).toBeInTheDocument();
      expect(screen.getByText('Combined helper text')).toBeInTheDocument();
    });

    it('renders all size combinations correctly', () => {
      const { rerender } = render(<Toggle size="small" />);
      expect(screen.getByRole('checkbox').closest('.db-toggle')).toHaveClass('db-toggle--small');
      
      rerender(<Toggle size="medium" />);
      expect(screen.getByRole('checkbox').closest('.db-toggle')).toHaveClass('db-toggle--medium');
      
      rerender(<Toggle size="large" />);
      expect(screen.getByRole('checkbox').closest('.db-toggle')).toHaveClass('db-toggle--large');
    });

    it('handles error and disabled states together', () => {
      render(<Toggle label="Error & Disabled" error disabled />);
      
      const wrapper = screen.getByRole('checkbox').closest('.db-toggle');
      expect(wrapper).toHaveClass('db-toggle--error', 'db-toggle--disabled');
      expect(screen.getByRole('checkbox')).toBeDisabled();
    });

    it('renders both label positions correctly', () => {
      const { rerender } = render(<Toggle label="Label" labelPosition="left" />);
      let wrapper = screen.getByRole('checkbox').closest('.db-toggle');
      expect(wrapper).toHaveClass('db-toggle--label-left');
      
      rerender(<Toggle label="Label" labelPosition="right" />);
      wrapper = screen.getByRole('checkbox').closest('.db-toggle');
      expect(wrapper).not.toHaveClass('db-toggle--label-left');
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles undefined props gracefully', () => {
      render(
        <Toggle
          label={undefined}
          size={undefined}
          error={undefined}
          helperText={undefined}
          disabled={undefined}
          labelPosition={undefined}
          className={undefined}
          id={undefined}
        />
      );
      
      const toggle = screen.getByRole('checkbox');
      const wrapper = toggle.closest('.db-toggle');
      
      expect(wrapper).toBeInTheDocument();
      expect(wrapper).toHaveClass('db-toggle--medium'); // Default size
      expect(wrapper).not.toHaveClass('db-toggle--error', 'db-toggle--disabled', 'db-toggle--label-left');
      expect(document.querySelector('.db-toggle__label')).not.toBeInTheDocument();
      expect(document.querySelector('.db-toggle__helper')).not.toBeInTheDocument();
    });

    it('handles empty string values properly', () => {
      render(
        <Toggle
          label=""
          helperText=""
          className=""
        />
      );
      
      const toggle = screen.getByRole('checkbox');
      expect(toggle).toBeInTheDocument();
      
      const labelElement = document.querySelector('.db-toggle__label');
      const helperElement = document.querySelector('.db-toggle__helper');
      
      // Empty strings are falsy, so these elements won't render
      expect(labelElement).not.toBeInTheDocument();
      expect(helperElement).not.toBeInTheDocument();
    });

    it('handles multiple class names correctly', () => {
      render(<Toggle className="class1 class2 class3" />);
      
      const wrapper = screen.getByRole('checkbox').closest('.db-toggle');
      expect(wrapper).toHaveClass('db-toggle', 'class1', 'class2', 'class3');
    });

    it('preserves event handler context', async () => {
      const context = { value: 'test-context' };
      const handleChange = jest.fn(function(this: typeof context, _event: React.ChangeEvent<HTMLInputElement>) {
        return this.value;
      });
      const user = userEvent.setup();
      
      render(<Toggle onChange={handleChange.bind(context)} />);
      
      const toggle = screen.getByRole('checkbox');
      await user.click(toggle);
      
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveReturnedWith('test-context');
    });

    it('works with complex label content', () => {
      const complexLabel = 'I agree to the Terms of Service and Privacy Policy. This toggle accepts text labels only.';
      
      render(<Toggle label={complexLabel} />);
      
      const toggle = screen.getByRole('checkbox');
      const label = screen.getByText(complexLabel);
      
      expect(toggle).toBeInTheDocument();
      expect(label).toBeInTheDocument();
      expect(label).toHaveClass('db-toggle__label');
    });

    it('handles toggle state changes correctly', async () => {
      const TestComponent = () => {
        const [checked, setChecked] = React.useState(false);
        
        return (
          <div>
            <Toggle
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              label="State test"
            />
            <button onClick={() => setChecked(true)}>Set True</button>
            <button onClick={() => setChecked(false)}>Set False</button>
          </div>
        );
      };
      
      const user = userEvent.setup();
      render(<TestComponent />);
      
      const toggle = screen.getByRole('checkbox');
      const setTrueButton = screen.getByText('Set True');
      const setFalseButton = screen.getByText('Set False');
      
      expect(toggle).not.toBeChecked();
      
      await user.click(setTrueButton);
      expect(toggle).toBeChecked();
      
      await user.click(setFalseButton);
      expect(toggle).not.toBeChecked();
    });

    it('handles label position changes correctly', () => {
      const { rerender } = render(<Toggle label="Test" labelPosition="right" />);
      let wrapper = screen.getByRole('checkbox').closest('.db-toggle');
      expect(wrapper).not.toHaveClass('db-toggle--label-left');
      
      rerender(<Toggle label="Test" labelPosition="left" />);
      wrapper = screen.getByRole('checkbox').closest('.db-toggle');
      expect(wrapper).toHaveClass('db-toggle--label-left');
      
      rerender(<Toggle label="Test" labelPosition="right" />);
      wrapper = screen.getByRole('checkbox').closest('.db-toggle');
      expect(wrapper).not.toHaveClass('db-toggle--label-left');
    });

    it('handles special characters in labels', () => {
      const specialLabel = 'Toggle & Test <> "Quotes"';
      
      render(<Toggle label={specialLabel} />);
      
      expect(screen.getByText('Toggle & Test <> "Quotes"')).toBeInTheDocument();
    });

    it('maintains ID consistency across re-renders', () => {
      const { rerender } = render(<Toggle id="consistent-id" label="Test" />);
      let toggle = screen.getByRole('checkbox');
      const originalId = toggle.id;
      
      rerender(<Toggle id="consistent-id" label="Test" checked />);
      toggle = screen.getByRole('checkbox');
      
      expect(toggle.id).toBe(originalId);
      expect(toggle.id).toBe('consistent-id');
    });
  });
});
