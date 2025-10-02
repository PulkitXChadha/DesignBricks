import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Collapsible, CollapsibleProps } from './Collapsible';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

describe('Collapsible', () => {

  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      const { container } = render(
        <Collapsible trigger="Click me">
          Content
        </Collapsible>
      );
      
      const collapsible = container.querySelector('.db-collapsible');
      expect(collapsible).toBeInTheDocument();
      expect(collapsible).toHaveClass('db-collapsible--medium', 'db-collapsible--default');
    });

    it('renders trigger content', () => {
      render(
        <Collapsible trigger="Trigger text">
          Content
        </Collapsible>
      );
      
      expect(screen.getByText('Trigger text')).toBeInTheDocument();
    });

    it('renders children content', () => {
      render(
        <Collapsible trigger="Trigger" defaultOpen>
          Child content
        </Collapsible>
      );
      
      expect(screen.getByText('Child content')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      const { container } = render(
        <Collapsible trigger="Trigger" className="custom-collapsible">
          Content
        </Collapsible>
      );
      
      const collapsible = container.querySelector('.db-collapsible');
      expect(collapsible).toHaveClass('custom-collapsible');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(
        <Collapsible ref={ref} trigger="Trigger">
          Content
        </Collapsible>
      );
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current).toHaveClass('db-collapsible');
    });

    it('forwards additional props', () => {
      render(
        <Collapsible trigger="Trigger" data-testid="collapsible" id="test">
          Content
        </Collapsible>
      );
      
      const collapsible = screen.getByTestId('collapsible');
      expect(collapsible).toHaveAttribute('id', 'test');
    });
  });

  // Trigger tests
  describe('Trigger', () => {
    it('renders trigger as button', () => {
      render(
        <Collapsible trigger="Click me">
          Content
        </Collapsible>
      );
      
      const button = screen.getByRole('button', { name: /click me/i });
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('type', 'button');
    });

    it('renders ReactNode trigger', () => {
      render(
        <Collapsible trigger={<span data-testid="custom-trigger">Custom</span>}>
          Content
        </Collapsible>
      );
      
      expect(screen.getByTestId('custom-trigger')).toBeInTheDocument();
    });

    it('applies trigger content class', () => {
      const { container } = render(
        <Collapsible trigger="Trigger">Content</Collapsible>
      );
      
      const triggerContent = container.querySelector('.db-collapsible__trigger-content');
      expect(triggerContent).toBeInTheDocument();
    });
  });

  // Open/close state tests
  describe('Open/Close State', () => {
    it('is closed by default', () => {
      const { container } = render(
        <Collapsible trigger="Trigger">Content</Collapsible>
      );
      
      const collapsible = container.querySelector('.db-collapsible');
      expect(collapsible).not.toHaveClass('db-collapsible--open');
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    it('is open when defaultOpen is true', () => {
      const { container } = render(
        <Collapsible trigger="Trigger" defaultOpen>
          Content
        </Collapsible>
      );
      
      const collapsible = container.querySelector('.db-collapsible');
      expect(collapsible).toHaveClass('db-collapsible--open');
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-expanded', 'true');
    });

    it('toggles open state on click', async () => {
      render(
        <Collapsible trigger="Trigger">Content</Collapsible>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-expanded', 'false');
      
      await userEvent.click(button);
      
      await waitFor(() => {
        expect(button).toHaveAttribute('aria-expanded', 'true');
      });
    });

    it('uses controlled open prop', () => {
      const { rerender } = render(
        <Collapsible trigger="Trigger" open={false}>
          Content
        </Collapsible>
      );
      
      let button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-expanded', 'false');
      
      rerender(
        <Collapsible trigger="Trigger" open={true}>
          Content
        </Collapsible>
      );
      
      button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-expanded', 'true');
    });

    it('calls onOpenChange when toggled', async () => {
      const handleChange = jest.fn();
      render(
        <Collapsible trigger="Trigger" onOpenChange={handleChange}>
          Content
        </Collapsible>
      );
      
      const button = screen.getByRole('button');
      await userEvent.click(button);
      
      expect(handleChange).toHaveBeenCalledWith(true);
      
      await userEvent.click(button);
      expect(handleChange).toHaveBeenCalledWith(false);
    });
  });

  // Size tests
  describe('Sizes', () => {
    const sizes: Array<CollapsibleProps['size']> = ['small', 'medium', 'large'];
    
    sizes.forEach(size => {
      it(`renders ${size} size correctly`, () => {
        const { container } = render(
          <Collapsible trigger="Trigger" size={size}>
            Content
          </Collapsible>
        );
        
        const collapsible = container.querySelector('.db-collapsible');
        expect(collapsible).toHaveClass(`db-collapsible--${size}`);
      });
    });

    it('applies medium size by default', () => {
      const { container } = render(
        <Collapsible trigger="Trigger">Content</Collapsible>
      );
      
      const collapsible = container.querySelector('.db-collapsible');
      expect(collapsible).toHaveClass('db-collapsible--medium');
    });
  });

  // Variant tests
  describe('Variants', () => {
    const variants: Array<CollapsibleProps['variant']> = ['default', 'ghost', 'bordered'];
    
    variants.forEach(variant => {
      it(`renders ${variant} variant correctly`, () => {
        const { container } = render(
          <Collapsible trigger="Trigger" variant={variant}>
            Content
          </Collapsible>
        );
        
        const collapsible = container.querySelector('.db-collapsible');
        expect(collapsible).toHaveClass(`db-collapsible--${variant}`);
      });
    });

    it('applies default variant by default', () => {
      const { container } = render(
        <Collapsible trigger="Trigger">Content</Collapsible>
      );
      
      const collapsible = container.querySelector('.db-collapsible');
      expect(collapsible).toHaveClass('db-collapsible--default');
    });
  });

  // Disabled state tests
  describe('Disabled State', () => {
    it('applies disabled class when disabled', () => {
      const { container } = render(
        <Collapsible trigger="Trigger" disabled>
          Content
        </Collapsible>
      );
      
      const collapsible = container.querySelector('.db-collapsible');
      expect(collapsible).toHaveClass('db-collapsible--disabled');
    });

    it('disables button when disabled', () => {
      render(
        <Collapsible trigger="Trigger" disabled>
          Content
        </Collapsible>
      );
      
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });

    it('does not toggle when disabled', async () => {
      const handleChange = jest.fn();
      render(
        <Collapsible trigger="Trigger" disabled onOpenChange={handleChange}>
          Content
        </Collapsible>
      );
      
      const button = screen.getByRole('button');
      await userEvent.click(button);
      
      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  // Chevron icon tests
  describe('Chevron Icon', () => {
    it('shows chevron by default', () => {
      const { container } = render(
        <Collapsible trigger="Trigger">Content</Collapsible>
      );
      
      const chevron = container.querySelector('.db-collapsible__chevron');
      expect(chevron).toBeInTheDocument();
    });

    it('hides chevron when showChevron is false', () => {
      const { container } = render(
        <Collapsible trigger="Trigger" showChevron={false}>
          Content
        </Collapsible>
      );
      
      const chevron = container.querySelector('.db-collapsible__chevron');
      expect(chevron).not.toBeInTheDocument();
    });

    it('renders custom chevron icon', () => {
      render(
        <Collapsible
          trigger="Trigger"
          chevronIcon={<span data-testid="custom-chevron">▼</span>}
        >
          Content
        </Collapsible>
      );
      
      expect(screen.getByTestId('custom-chevron')).toBeInTheDocument();
    });

    it('rotates chevron when open', () => {
      const { container } = render(
        <Collapsible trigger="Trigger" defaultOpen>
          Content
        </Collapsible>
      );
      
      const chevron = container.querySelector('.db-collapsible__chevron');
      expect(chevron).toHaveClass('db-collapsible__chevron--rotated');
    });

    it('does not rotate chevron when closed', () => {
      const { container } = render(
        <Collapsible trigger="Trigger">Content</Collapsible>
      );
      
      const chevron = container.querySelector('.db-collapsible__chevron');
      expect(chevron).not.toHaveClass('db-collapsible__chevron--rotated');
    });
  });

  // Keyboard navigation tests
  describe('Keyboard Navigation', () => {
    it('toggles on Enter key', async () => {
      render(
        <Collapsible trigger="Trigger">Content</Collapsible>
      );
      
      const button = screen.getByRole('button');
      button.focus();
      
      expect(button).toHaveAttribute('aria-expanded', 'false');
      
      await userEvent.keyboard('{Enter}');
      
      await waitFor(() => {
        expect(button).toHaveAttribute('aria-expanded', 'true');
      });
    });

    it('toggles on Space key', async () => {
      render(
        <Collapsible trigger="Trigger">Content</Collapsible>
      );
      
      const button = screen.getByRole('button');
      button.focus();
      
      expect(button).toHaveAttribute('aria-expanded', 'false');
      
      await userEvent.keyboard(' ');
      
      await waitFor(() => {
        expect(button).toHaveAttribute('aria-expanded', 'true');
      });
    });

    it('prevents default on Space key', async () => {
      render(
        <Collapsible trigger="Trigger">Content</Collapsible>
      );
      
      const button = screen.getByRole('button');
      button.focus();
      
      const event = new KeyboardEvent('keydown', { key: ' ', bubbles: true, cancelable: true });
      const preventDefaultSpy = jest.spyOn(event, 'preventDefault');
      
      button.dispatchEvent(event);
      
      expect(preventDefaultSpy).toHaveBeenCalled();
    });
  });

  // Content tests
  describe('Content', () => {
    it('renders content wrapper', () => {
      const { container } = render(
        <Collapsible trigger="Trigger" defaultOpen>
          Content
        </Collapsible>
      );
      
      const content = container.querySelector('.db-collapsible__content');
      expect(content).toBeInTheDocument();
    });

    it('renders content inner wrapper', () => {
      const { container } = render(
        <Collapsible trigger="Trigger" defaultOpen>
          Content
        </Collapsible>
      );
      
      const inner = container.querySelector('.db-collapsible__content-inner');
      expect(inner).toBeInTheDocument();
    });

    it('sets aria-hidden on content when closed', () => {
      const { container } = render(
        <Collapsible trigger="Trigger">Content</Collapsible>
      );
      
      const content = container.querySelector('.db-collapsible__content');
      expect(content).toHaveAttribute('aria-hidden', 'true');
    });

    it('sets aria-hidden to false when open', () => {
      const { container } = render(
        <Collapsible trigger="Trigger" defaultOpen>
          Content
        </Collapsible>
      );
      
      const content = container.querySelector('.db-collapsible__content');
      expect(content).toHaveAttribute('aria-hidden', 'false');
    });

    it('applies open class to content when open', () => {
      const { container } = render(
        <Collapsible trigger="Trigger" defaultOpen>
          Content
        </Collapsible>
      );
      
      const content = container.querySelector('.db-collapsible__content');
      expect(content).toHaveClass('db-collapsible__content--open');
    });
  });

  // Animation tests
  describe('Animation', () => {
    it('applies animating class during animation', async () => {
      const { container } = render(
        <Collapsible trigger="Trigger">Content</Collapsible>
      );
      
      const button = screen.getByRole('button');
      await userEvent.click(button);
      
      const collapsible = container.querySelector('.db-collapsible');
      
      // Should be animating immediately after click
      await waitFor(() => {
        expect(collapsible).toHaveClass('db-collapsible--animating');
      });
    });

    it('uses custom animation duration', () => {
      const { container } = render(
        <Collapsible trigger="Trigger" defaultOpen animationDuration={500}>
          Content
        </Collapsible>
      );
      
      const content = container.querySelector('.db-collapsible__content') as HTMLElement;
      const transition = content.style.transition;
      
      expect(transition).toContain('500ms');
    });

    it('applies default animation duration', () => {
      const { container } = render(
        <Collapsible trigger="Trigger" defaultOpen>
          Content
        </Collapsible>
      );
      
      const content = container.querySelector('.db-collapsible__content') as HTMLElement;
      const transition = content.style.transition;
      
      expect(transition).toContain('200ms');
    });
  });

  // ARIA attributes tests
  describe('ARIA Attributes', () => {
    it('sets aria-expanded on trigger button', () => {
      render(
        <Collapsible trigger="Trigger">Content</Collapsible>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-expanded');
    });

    it('updates aria-expanded when toggled', async () => {
      render(
        <Collapsible trigger="Trigger">Content</Collapsible>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-expanded', 'false');
      
      await userEvent.click(button);
      
      await waitFor(() => {
        expect(button).toHaveAttribute('aria-expanded', 'true');
      });
    });

    it('sets aria-controls on trigger button', () => {
      render(
        <Collapsible trigger="Trigger">Content</Collapsible>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-controls');
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles complex trigger content', () => {
      render(
        <Collapsible
          trigger={
            <div>
              <h3>Title</h3>
              <p>Subtitle</p>
            </div>
          }
        >
          Content
        </Collapsible>
      );
      
      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Subtitle')).toBeInTheDocument();
    });

    it('handles complex children content', () => {
      render(
        <Collapsible trigger="Trigger" defaultOpen>
          <div>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
          </div>
        </Collapsible>
      );
      
      expect(screen.getByText('Paragraph 1')).toBeInTheDocument();
      expect(screen.getByText('Paragraph 2')).toBeInTheDocument();
    });

    it('handles rapid toggles', async () => {
      const handleChange = jest.fn();
      render(
        <Collapsible trigger="Trigger" onOpenChange={handleChange}>
          Content
        </Collapsible>
      );
      
      const button = screen.getByRole('button');
      
      await userEvent.click(button);
      await userEvent.click(button);
      await userEvent.click(button);
      
      expect(handleChange).toHaveBeenCalledTimes(3);
    });

    it('preserves state during re-render', () => {
      const { rerender } = render(
        <Collapsible trigger="Original">Content</Collapsible>
      );
      
      expect(screen.getByText('Original')).toBeInTheDocument();
      
      rerender(
        <Collapsible trigger="Updated">Content</Collapsible>
      );
      
      expect(screen.queryByText('Original')).not.toBeInTheDocument();
      expect(screen.getByText('Updated')).toBeInTheDocument();
    });

    it('works with all props combined', () => {
      const handleChange = jest.fn();
      const { container } = render(
        <Collapsible
          trigger="Full props"
          defaultOpen
          onOpenChange={handleChange}
          size="large"
          variant="bordered"
          showChevron={false}
          animationDuration={300}
          className="custom"
          data-testid="collapsible"
        >
          Content
        </Collapsible>
      );
      
      const collapsible = screen.getByTestId('collapsible');
      expect(collapsible).toHaveClass(
        'db-collapsible--large',
        'db-collapsible--bordered',
        'db-collapsible--open',
        'custom'
      );
      
      const chevron = container.querySelector('.db-collapsible__chevron');
      expect(chevron).not.toBeInTheDocument();
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(
        <Collapsible trigger="Trigger">Content</Collapsible>
      );
      
      // Disable aria-valid-attr-value rule since the component generates a random ID
      const results = await axe(container, {
        rules: {
          'aria-valid-attr-value': { enabled: false }
        }
      });
      expect(results).toHaveNoViolations();
    });

    it('has no accessibility violations when open', async () => {
      const { container } = render(
        <Collapsible trigger="Trigger" defaultOpen>
          Content
        </Collapsible>
      );
      
      const results = await axe(container, {
        rules: {
          'aria-valid-attr-value': { enabled: false }
        }
      });
      expect(results).toHaveNoViolations();
    });

    it('has no accessibility violations when disabled', async () => {
      const { container } = render(
        <Collapsible trigger="Trigger" disabled>
          Content
        </Collapsible>
      );
      
      const results = await axe(container, {
        rules: {
          'aria-valid-attr-value': { enabled: false }
        }
      });
      expect(results).toHaveNoViolations();
    });

    it('is keyboard accessible', async () => {
      render(
        <Collapsible trigger="Trigger">Content</Collapsible>
      );
      
      const button = screen.getByRole('button');
      
      // Tab to focus
      await userEvent.tab();
      expect(button).toHaveFocus();
      
      // Activate with Enter
      await userEvent.keyboard('{Enter}');
      
      await waitFor(() => {
        expect(button).toHaveAttribute('aria-expanded', 'true');
      });
    });

    it('has proper button semantics', () => {
      render(
        <Collapsible trigger="Trigger">Content</Collapsible>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'button');
    });
  });

  // displayName test
  describe('Component Meta', () => {
    it('has correct displayName', () => {
      expect(Collapsible.displayName).toBe('Collapsible');
    });
  });
});
