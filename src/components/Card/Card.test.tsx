import userEvent from "@testing-library/user-event";
import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Card, CardProps } from './Card';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

describe('Card', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      render(<Card>Default Card</Card>);
      
      const card = screen.getByText('Default Card');
      expect(card).toBeInTheDocument();
      expect(card).toHaveClass(
        'db-card',
        'db-card--default',
        'db-card--padding-medium'
      );
      expect(card).not.toHaveClass('db-card--clickable', 'db-card--selected');
    });

    it('renders with custom className', () => {
      render(<Card className="custom-class">Card</Card>);
      
      const card = screen.getByText('Card');
      expect(card).toHaveClass('db-card', 'custom-class');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<Card ref={ref}>Card</Card>);
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current).toHaveClass('db-card');
    });

    it('forwards additional props', () => {
      render(
        <Card data-testid="card" title="Card title">
          Card
        </Card>
      );
      
      const card = screen.getByTestId('card');
      expect(card).toHaveAttribute('title', 'Card title');
    });
  });

  // Variant tests
  describe('Variants', () => {
    const variants: Array<CardProps['variant']> = ['default', 'outlined', 'elevated'];
    
    variants.forEach(variant => {
      it(`renders ${variant} variant correctly`, () => {
        render(<Card variant={variant}>Variant Card</Card>);
        
        const card = screen.getByText('Variant Card');
        expect(card).toHaveClass(`db-card--${variant}`);
      });
    });

    it('applies default variant when variant is undefined', () => {
      render(<Card variant={undefined}>Default Card</Card>);
      
      const card = screen.getByText('Default Card');
      expect(card).toHaveClass('db-card--default');
    });
  });

  // Padding tests
  describe('Padding', () => {
    const paddings: Array<CardProps['padding']> = ['none', 'small', 'medium', 'large'];
    
    paddings.forEach(padding => {
      it(`renders ${padding} padding correctly`, () => {
        render(<Card padding={padding}>Padded Card</Card>);
        
        const card = screen.getByText('Padded Card');
        expect(card).toHaveClass(`db-card--padding-${padding}`);
      });
    });

    it('applies medium padding by default', () => {
      render(<Card>Default Padding</Card>);
      
      const card = screen.getByText('Default Padding');
      expect(card).toHaveClass('db-card--padding-medium');
    });

    it('applies medium padding when padding is undefined', () => {
      render(<Card padding={undefined}>Medium Padding</Card>);
      
      const card = screen.getByText('Medium Padding');
      expect(card).toHaveClass('db-card--padding-medium');
    });
  });

  // State tests
  describe('States', () => {
    it('applies clickable class when clickable is true', () => {
      render(<Card clickable>Clickable Card</Card>);
      
      const card = screen.getByText('Clickable Card');
      expect(card).toHaveClass('db-card--clickable');
    });

    it('does not apply clickable class when clickable is false', () => {
      render(<Card clickable={false}>Non-clickable Card</Card>);
      
      const card = screen.getByText('Non-clickable Card');
      expect(card).not.toHaveClass('db-card--clickable');
    });

    it('does not apply clickable class by default', () => {
      render(<Card>Default Card</Card>);
      
      const card = screen.getByText('Default Card');
      expect(card).not.toHaveClass('db-card--clickable');
    });

    it('applies selected class when selected is true', () => {
      render(<Card selected>Selected Card</Card>);
      
      const card = screen.getByText('Selected Card');
      expect(card).toHaveClass('db-card--selected');
    });

    it('does not apply selected class when selected is false', () => {
      render(<Card selected={false}>Unselected Card</Card>);
      
      const card = screen.getByText('Unselected Card');
      expect(card).not.toHaveClass('db-card--selected');
    });

    it('does not apply selected class by default', () => {
      render(<Card>Default Card</Card>);
      
      const card = screen.getByText('Default Card');
      expect(card).not.toHaveClass('db-card--selected');
    });

    it('applies both clickable and selected classes when both are true', () => {
      render(<Card clickable selected>Interactive Card</Card>);
      
      const card = screen.getByText('Interactive Card');
      expect(card).toHaveClass('db-card--clickable', 'db-card--selected');
    });
  });

  // Content rendering tests
  describe('Content Rendering', () => {
    it('renders text content correctly', () => {
      render(<Card>Simple text content</Card>);
      
      const card = screen.getByText('Simple text content');
      expect(card).toHaveTextContent('Simple text content');
    });

    it('renders complex children correctly', () => {
      const { container } = render(
        <Card>
          <h2>Card Title</h2>
          <p>Card description with <strong>bold</strong> text.</p>
          <button>Action Button</button>
        </Card>
      );
      
      const card = container.querySelector('.db-card');
      expect(card).toHaveTextContent('Card Title');
      expect(card).toHaveTextContent('Card description with bold text.');
      
      const title = screen.getByRole('heading', { level: 2 });
      expect(title).toBeInTheDocument();
      
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      
      const boldText = card?.querySelector('strong');
      expect(boldText).toBeInTheDocument();
    });

    it('handles empty children gracefully', () => {
      const { container } = render(<Card>{null}</Card>);
      
      const card = container.querySelector('.db-card');
      expect(card).toBeInTheDocument();
      expect(card).toBeEmptyDOMElement();
    });

    it('handles undefined children gracefully', () => {
      const { container } = render(<Card>{undefined}</Card>);
      
      const card = container.querySelector('.db-card');
      expect(card).toBeInTheDocument();
    });

    it('renders multiple child elements', () => {
      const { container } = render(
        <Card>
          <div>First child</div>
          <div>Second child</div>
          <span>Third child</span>
        </Card>
      );
      
      const card = container.querySelector('.db-card');
      expect(card).toHaveTextContent('First child');
      expect(card).toHaveTextContent('Second child');
      expect(card).toHaveTextContent('Third child');
      
      expect(card?.querySelectorAll('div')).toHaveLength(2); // 2 child divs (not counting card div)
      expect(card?.querySelector('span')).toBeInTheDocument();
    });
  });

  // Event handling tests
  describe('Event Handling', () => {
    it('handles click events when clickable', async () => {
      const handleClick = jest.fn();
      render(<Card clickable onClick={handleClick}>Clickable Card</Card>);
      
      const card = screen.getByText('Clickable Card');
      await userEvent.click(card);
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('handles click events even when not marked as clickable', async () => {
      const handleClick = jest.fn();
      render(<Card onClick={handleClick}>Non-clickable Card</Card>);
      
      const card = screen.getByText('Non-clickable Card');
      await userEvent.click(card);
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('handles keyboard events', async () => {
      const handleKeyDown = jest.fn();
      const user = userEvent.setup();
      
      render(<Card onKeyDown={handleKeyDown} tabIndex={0}>Card</Card>);
      
      const card = screen.getByText('Card');
      card.focus();
      await user.keyboard('{Enter}');
      
      expect(handleKeyDown).toHaveBeenCalledTimes(1);
    });

    it('handles mouse events', async () => {
      const handleMouseEnter = jest.fn();
      const handleMouseLeave = jest.fn();
      
      render(
        <Card onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Hover Card
        </Card>
      );
      
      const card = screen.getByText('Hover Card');
      await userEvent.hover(card);
      expect(handleMouseEnter).toHaveBeenCalledTimes(1);
      
      await userEvent.unhover(card);
      expect(handleMouseLeave).toHaveBeenCalledTimes(1);
    });

    it('supports focus and blur events', () => {
      const handleFocus = jest.fn();
      const handleBlur = jest.fn();
      
      render(
        <Card onFocus={handleFocus} onBlur={handleBlur} tabIndex={0}>
          Focusable Card
        </Card>
      );
      
      const card = screen.getByText('Focusable Card');
      card.focus();
      expect(handleFocus).toHaveBeenCalledTimes(1);
      
      card.blur();
      expect(handleBlur).toHaveBeenCalledTimes(1);
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<Card>Accessible Card</Card>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with clickable state', async () => {
      const { container } = render(<Card clickable>Clickable Card</Card>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with complex content', async () => {
      const { container } = render(
        <Card>
          <h3>Card Header</h3>
          <p>Card description</p>
          <button>Card Action</button>
        </Card>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('supports ARIA attributes', () => {
      render(
        <Card
          aria-label="Custom card label"
          role="region"
          aria-describedby="card-description"
        >
          Card content
        </Card>
      );
      
      const card = screen.getByRole('region');
      expect(card).toHaveAttribute('aria-label', 'Custom card label');
      expect(card).toHaveAttribute('aria-describedby', 'card-description');
    });

    it('maintains proper semantics as generic container', () => {
      render(<Card>Semantic Card</Card>);
      
      const card = screen.getByText('Semantic Card');
      expect(card.tagName).toBe('DIV');
      expect(card).toHaveAttribute('class', expect.stringContaining('db-card'));
    });

    it('is keyboard accessible when clickable', () => {
      render(
        <Card clickable tabIndex={0}>
          Keyboard accessible card
        </Card>
      );
      
      const card = screen.getByText('Keyboard accessible card');
      expect(card).toHaveAttribute('tabIndex', '0');
      
      card.focus();
      expect(card).toHaveFocus();
    });
  });

  // Combination tests
  describe('Property Combinations', () => {
    it('applies multiple modifiers correctly', () => {
      render(
        <Card
          variant="elevated"
          padding="large"
          clickable
          selected
          className="custom-class"
        >
          Complex Card
        </Card>
      );
      
      const card = screen.getByText('Complex Card');
      expect(card).toHaveClass(
        'db-card',
        'db-card--elevated',
        'db-card--padding-large',
        'db-card--clickable',
        'db-card--selected',
        'custom-class'
      );
    });

    it('renders all variant and padding combinations', () => {
      const variants: Array<CardProps['variant']> = ['default', 'outlined', 'elevated'];
      const paddings: Array<CardProps['padding']> = ['none', 'small', 'medium', 'large'];
      
      variants.forEach(variant => {
        paddings.forEach(padding => {
          const { unmount } = render(
            <Card
              variant={variant}
              padding={padding}
              data-testid={`${variant}-${padding}`}
            >
              Test
            </Card>
          );
          
          const card = screen.getByTestId(`${variant}-${padding}`);
          expect(card).toHaveClass(`db-card--${variant}`, `db-card--padding-${padding}`);
          
          unmount();
        });
      });
    });

    it('combines clickable and selected states correctly', () => {
      const states = [
        { clickable: false, selected: false },
        { clickable: true, selected: false },
        { clickable: false, selected: true },
        { clickable: true, selected: true },
      ];
      
      states.forEach(({ clickable, selected }, index) => {
        const { unmount } = render(
          <Card
            clickable={clickable}
            selected={selected}
            data-testid={`state-${index}`}
          >
            State Test
          </Card>
        );
        
        const card = screen.getByTestId(`state-${index}`);
        
        if (clickable) {
          expect(card).toHaveClass('db-card--clickable');
        } else {
          expect(card).not.toHaveClass('db-card--clickable');
        }
        
        if (selected) {
          expect(card).toHaveClass('db-card--selected');
        } else {
          expect(card).not.toHaveClass('db-card--selected');
        }
        
        unmount();
      });
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles all props as undefined gracefully', () => {
      render(
        <Card
          variant={undefined}
          padding={undefined}
          clickable={undefined}
          selected={undefined}
        >
          Default behavior
        </Card>
      );
      
      const card = screen.getByText('Default behavior');
      expect(card).toHaveClass(
        'db-card',
        'db-card--default',
        'db-card--padding-medium'
      );
      expect(card).not.toHaveClass('db-card--clickable', 'db-card--selected');
    });

    it('handles multiple classes correctly', () => {
      render(<Card className="class1 class2 class3">Multi-class Card</Card>);
      
      const card = screen.getByText('Multi-class Card');
      expect(card).toHaveClass('db-card', 'class1', 'class2', 'class3');
    });

    it('preserves event handler context', () => {
      const context = { value: 'test' };
      const handleClick = jest.fn(function(this: typeof context, _event: any) {
        return this.value;
      });
      
      render(<Card onClick={handleClick.bind(context)}>Context Card</Card>);
      
      const card = screen.getByText('Context Card');
      card.click();
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('works with nested interactive elements', async () => {
      const cardClick = jest.fn();
      const buttonClick = jest.fn();
      
      render(
        <Card clickable onClick={cardClick}>
          <p>Card content</p>
          <button onClick={(e) => { e.stopPropagation(); buttonClick(); }}>
            Button
          </button>
        </Card>
      );
      
      const button = screen.getByRole('button');
      await userEvent.click(button);
      
      expect(buttonClick).toHaveBeenCalledTimes(1);
      expect(cardClick).not.toHaveBeenCalled(); // Should be stopped by stopPropagation
    });

    it('handles deeply nested content', () => {
      const { container } = render(
        <Card>
          <div>
            <div>
              <div>
                <span>Deeply nested content</span>
              </div>
            </div>
          </div>
        </Card>
      );
      
      const card = container.querySelector('.db-card');
      expect(card).toHaveTextContent('Deeply nested content');
      expect(card?.querySelector('span')).toBeInTheDocument();
    });
  });
});
