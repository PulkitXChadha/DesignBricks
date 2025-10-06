import userEvent from "@testing-library/user-event";
import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button, ButtonProps } from './Button';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

describe('Button', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      render(<Button>Click me</Button>);
      
      const button = screen.getByRole('button', { name: 'Click me' });
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('db-button', 'db-button--primary', 'db-button--medium');
      expect(button).not.toBeDisabled();
    });

    it('renders with custom className', () => {
      render(<Button className="custom-class">Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('db-button', 'custom-class');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLButtonElement>();
      render(<Button ref={ref}>Button</Button>);
      
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
      expect(ref.current).toHaveClass('db-button');
    });
  });

  // Variant tests
  describe('Variants', () => {
    const variants: Array<ButtonProps['variant']> = ['primary', 'secondary', 'tertiary', 'danger'];
    
    variants.forEach(variant => {
      it(`renders ${variant} variant correctly`, () => {
        render(<Button variant={variant}>Button</Button>);
        
        const button = screen.getByRole('button');
        expect(button).toHaveClass(`db-button--${variant}`);
      });
    });
  });

  // Size tests
  describe('Sizes', () => {
    const sizes: Array<ButtonProps['size']> = ['small', 'medium', 'large'];
    
    sizes.forEach(size => {
      it(`renders ${size} size correctly`, () => {
        render(<Button size={size}>Button</Button>);
        
        const button = screen.getByRole('button');
        expect(button).toHaveClass(`db-button--${size}`);
      });
    });
  });

  // State tests
  describe('States', () => {
    it('renders disabled state correctly', () => {
      render(<Button disabled>Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveClass('db-button--disabled');
    });

    it('renders loading state correctly', () => {
      render(<Button loading>Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveClass('db-button--loading');
      
      // Check for loading spinner
      const spinner = button.querySelector('.db-button__spinner');
      expect(spinner).toBeInTheDocument();
      expect(spinner).toHaveAttribute('aria-hidden', 'true');
    });

    it('renders full width correctly', () => {
      render(<Button fullWidth>Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('db-button--full-width');
    });

    it('loading state takes precedence over disabled', () => {
      render(<Button loading disabled={false}>Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveClass('db-button--loading', 'db-button--disabled');
    });
  });

  // Icon tests
  describe('Icons', () => {
    it('renders icon before text', () => {
      const icon = <span data-testid="icon-before">→</span>;
      render(<Button iconBefore={icon}>Button</Button>);
      
      const button = screen.getByRole('button');
      const iconElement = screen.getByTestId('icon-before');
      const iconWrapper = iconElement.parentElement;
      
      expect(iconWrapper).toHaveClass('db-button__icon', 'db-button__icon--before');
      expect(button).toContainElement(iconElement);
    });

    it('renders icon after text', () => {
      const icon = <span data-testid="icon-after">→</span>;
      render(<Button iconAfter={icon}>Button</Button>);
      
      const button = screen.getByRole('button');
      const iconElement = screen.getByTestId('icon-after');
      const iconWrapper = iconElement.parentElement;
      
      expect(iconWrapper).toHaveClass('db-button__icon', 'db-button__icon--after');
      expect(button).toContainElement(iconElement);
    });

    it('hides iconBefore when loading', () => {
      const icon = <span data-testid="icon-before">→</span>;
      render(<Button iconBefore={icon} loading>Button</Button>);
      
      expect(screen.queryByTestId('icon-before')).not.toBeInTheDocument();
    });

    it('shows iconAfter when loading', () => {
      const icon = <span data-testid="icon-after">→</span>;
      render(<Button iconAfter={icon} loading>Button</Button>);
      
      expect(screen.getByTestId('icon-after')).toBeInTheDocument();
    });

    it('renders both icons correctly', () => {
      const iconBefore = <span data-testid="icon-before">←</span>;
      const iconAfter = <span data-testid="icon-after">→</span>;
      
      render(
        <Button iconBefore={iconBefore} iconAfter={iconAfter}>
          Button
        </Button>
      );
      
      expect(screen.getByTestId('icon-before')).toBeInTheDocument();
      expect(screen.getByTestId('icon-after')).toBeInTheDocument();
    });
  });

  // Event handling tests
  describe('Event Handling', () => {
    it('handles click events', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      
      render(<Button onClick={handleClick}>Button</Button>);
      
      const button = screen.getByRole('button');
      await user.click(button);
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not trigger click when disabled', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      
      render(<Button onClick={handleClick} disabled>Button</Button>);
      
      const button = screen.getByRole('button');
      await user.click(button);
      
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('does not trigger click when loading', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      
      render(<Button onClick={handleClick} loading>Button</Button>);
      
      const button = screen.getByRole('button');
      await user.click(button);
      
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('handles keyboard events', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      
      render(<Button onClick={handleClick}>Button</Button>);
      
      const button = screen.getByRole('button');
      
      // Test Enter key activation
      button.focus();
      await user.keyboard('{Enter}');
      expect(handleClick).toHaveBeenCalledTimes(1);
      
      // Test that button can receive focus
      expect(button).toHaveFocus();
    });

    it('forwards additional props', () => {
      render(
        <Button data-testid="custom-button" aria-label="Custom label">
          Button
        </Button>
      );
      
      const button = screen.getByTestId('custom-button');
      expect(button).toHaveAttribute('aria-label', 'Custom label');
    });
  });

  // Content rendering tests
  describe('Content Rendering', () => {
    it('renders text content correctly', () => {
      render(<Button>Click me</Button>);
      
      const textElement = screen.getByRole('button').querySelector('.db-button__text');
      expect(textElement).toHaveTextContent('Click me');
    });

    it('renders without text when no children provided', () => {
      const icon = <span data-testid="icon">Icon</span>;
      render(<Button iconBefore={icon} />);
      
      const button = screen.getByRole('button');
      const textElement = button.querySelector('.db-button__text');
      expect(textElement).not.toBeInTheDocument();
      expect(screen.getByTestId('icon')).toBeInTheDocument();
    });

    it('renders complex children correctly', () => {
      render(
        <Button>
          <span>Complex</span> <strong>content</strong>
        </Button>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveTextContent('Complex content');
      expect(button.querySelector('span')).toBeInTheDocument();
      expect(button.querySelector('strong')).toBeInTheDocument();
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<Button>Accessible Button</Button>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations when disabled', async () => {
      const { container } = render(<Button disabled>Disabled Button</Button>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations when loading', async () => {
      const { container } = render(<Button loading>Loading Button</Button>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper button semantics', () => {
      render(<Button>Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button.tagName).toBe('BUTTON');
      // HTML buttons default to type="submit" when in forms, but have no type when standalone
      expect(button.getAttribute('type')).toBeNull();
    });

    it('supports custom button types', () => {
      render(<Button type="submit">Submit</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'submit');
    });

    it('has visible focus indicator', () => {
      render(<Button>Button</Button>);
      
      const button = screen.getByRole('button');
      button.focus();
      
      expect(button).toHaveFocus();
      // Note: CSS focus styles would be tested in visual regression tests
    });

    it('supports screen reader labels', () => {
      render(<Button aria-label="Close dialog">×</Button>);
      
      const button = screen.getByLabelText('Close dialog');
      expect(button).toBeInTheDocument();
    });

    it('loading spinner is properly hidden from screen readers', () => {
      render(<Button loading>Loading</Button>);
      
      const spinner = screen.getByRole('button').querySelector('.db-button__spinner');
      expect(spinner).toHaveAttribute('aria-hidden', 'true');
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles empty children gracefully', () => {
      render(<Button>{null}</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      
      // When children is null, the text element should not be rendered
      const textElement = button.querySelector('.db-button__text');
      expect(textElement).not.toBeInTheDocument();
    });

    it('handles undefined children gracefully', () => {
      render(<Button>{undefined}</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('applies multiple modifier classes correctly', () => {
      render(
        <Button 
          variant="danger" 
          size="large" 
          fullWidth 
          loading 
          disabled
        >
          Button
        </Button>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass(
        'db-button',
        'db-button--danger',
        'db-button--large',
        'db-button--full-width',
        'db-button--loading',
        'db-button--disabled'
      );
    });
  });
});
