import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Badge, BadgeProps } from './Badge';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

describe('Badge', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      render(<Badge>Badge</Badge>);
      
      const badge = screen.getByText('Badge');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('db-badge', 'db-badge--default', 'db-badge--medium');
      expect(badge.tagName).toBe('SPAN');
    });

    it('renders with custom className', () => {
      render(<Badge className="custom-class">Badge</Badge>);
      
      const badge = screen.getByText('Badge');
      expect(badge).toHaveClass('db-badge', 'custom-class');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLSpanElement>();
      render(<Badge ref={ref}>Badge</Badge>);
      
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
      expect(ref.current).toHaveClass('db-badge');
    });

    it('forwards additional props', () => {
      render(
        <Badge data-testid="custom-badge" title="Badge title">
          Badge
        </Badge>
      );
      
      const badge = screen.getByTestId('custom-badge');
      expect(badge).toHaveAttribute('title', 'Badge title');
    });
  });

  // Variant tests
  describe('Variants', () => {
    const variants: Array<BadgeProps['variant']> = [
      'default', 'primary', 'success', 'warning', 'error', 'info', 'new'
    ];
    
    variants.forEach(variant => {
      it(`renders ${variant} variant correctly`, () => {
        render(<Badge variant={variant}>Badge</Badge>);
        
        const badge = screen.getByText('Badge');
        expect(badge).toHaveClass(`db-badge--${variant}`);
      });
    });
  });

  // Size tests
  describe('Sizes', () => {
    const sizes: Array<BadgeProps['size']> = ['small', 'medium', 'large'];
    
    sizes.forEach(size => {
      it(`renders ${size} size correctly`, () => {
        render(<Badge size={size}>Badge</Badge>);
        
        const badge = screen.getByText('Badge');
        expect(badge).toHaveClass(`db-badge--${size}`);
      });
    });
  });

  // Dot mode tests
  describe('Dot Mode', () => {
    it('renders dot badge correctly', () => {
      const { container } = render(<Badge dot>Badge</Badge>);
      
      const badge = container.querySelector('.db-badge');
      expect(badge).toHaveClass('db-badge--dot');
      expect(badge).toBeEmptyDOMElement();
    });

    it('dot mode overrides children content', () => {
      const { container } = render(<Badge dot>This text should not appear</Badge>);
      
      const badge = container.querySelector('.db-badge');
      expect(badge).toBeEmptyDOMElement();
      expect(screen.queryByText('This text should not appear')).not.toBeInTheDocument();
    });

    it('dot mode overrides count content', () => {
      const { container } = render(<Badge dot count={5}>Badge</Badge>);
      
      const badge = container.querySelector('.db-badge');
      expect(badge).toBeEmptyDOMElement();
      expect(screen.queryByText('5')).not.toBeInTheDocument();
    });
  });

  // Count display tests
  describe('Count Display', () => {
    it('displays count when provided', () => {
      render(<Badge count={5}>Original Text</Badge>);
      
      const badge = screen.getByText('5');
      expect(badge).toBeInTheDocument();
      expect(screen.queryByText('Original Text')).not.toBeInTheDocument();
    });

    it('displays count with default max of 99', () => {
      render(<Badge count={150}>Badge</Badge>);
      
      const badge = screen.getByText('99+');
      expect(badge).toBeInTheDocument();
    });

    it('displays count with custom max', () => {
      render(<Badge count={250} max={200}>Badge</Badge>);
      
      const badge = screen.getByText('200+');
      expect(badge).toBeInTheDocument();
    });

    it('displays exact count when below max', () => {
      render(<Badge count={50} max={99}>Badge</Badge>);
      
      const badge = screen.getByText('50');
      expect(badge).toBeInTheDocument();
    });

    it('displays count exactly at max', () => {
      render(<Badge count={99} max={99}>Badge</Badge>);
      
      const badge = screen.getByText('99');
      expect(badge).toBeInTheDocument();
    });

    it('displays zero count', () => {
      render(<Badge count={0}>Badge</Badge>);
      
      const badge = screen.getByText('0');
      expect(badge).toBeInTheDocument();
    });

    it('count takes precedence over children', () => {
      render(<Badge count={10}>Children Text</Badge>);
      
      expect(screen.getByText('10')).toBeInTheDocument();
      expect(screen.queryByText('Children Text')).not.toBeInTheDocument();
    });
  });

  // Content rendering tests
  describe('Content Rendering', () => {
    it('renders text content when no count or dot', () => {
      render(<Badge>Badge Text</Badge>);
      
      const badge = screen.getByText('Badge Text');
      expect(badge).toBeInTheDocument();
    });

    it('renders complex children', () => {
      const { container } = render(
        <Badge>
          <span>Complex</span> <strong>Content</strong>
        </Badge>
      );
      
      const badge = container.querySelector('.db-badge');
      expect(badge).toHaveTextContent('Complex Content');
      expect(badge?.querySelector('span')).toBeInTheDocument();
      expect(badge?.querySelector('strong')).toBeInTheDocument();
    });

    it('handles empty children gracefully', () => {
      const { container } = render(<Badge>{null}</Badge>);
      
      const badge = container.querySelector('.db-badge');
      expect(badge).toBeInTheDocument();
      expect(badge).toBeEmptyDOMElement();
    });

    it('handles undefined children gracefully', () => {
      const { container } = render(<Badge>{undefined}</Badge>);
      
      const badge = container.querySelector('.db-badge');
      expect(badge).toBeInTheDocument();
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<Badge>Accessible Badge</Badge>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with count', async () => {
      const { container } = render(<Badge count={5} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations in dot mode', async () => {
      const { container } = render(<Badge dot />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('supports ARIA attributes', () => {
      render(
        <Badge 
          aria-label="Notification count" 
          role="status"
          count={5}
        />
      );
      
      const badge = screen.getByRole('status');
      expect(badge).toHaveAttribute('aria-label', 'Notification count');
    });

    it('has proper semantics as generic element', () => {
      const { container } = render(<Badge>Badge</Badge>);
      
      const badge = container.querySelector('.db-badge');
      expect(badge?.tagName).toBe('SPAN');
    });
  });

  // Edge cases and combinations
  describe('Edge Cases', () => {
    it('applies multiple classes correctly', () => {
      const { container } = render(
        <Badge 
          variant="error" 
          size="large" 
          dot
          className="custom-class"
        />
      );
      
      const badge = container.querySelector('.db-badge');
      expect(badge).toHaveClass(
        'db-badge',
        'db-badge--error',
        'db-badge--large',
        'db-badge--dot',
        'custom-class'
      );
    });

    it('handles negative count', () => {
      render(<Badge count={-5}>Badge</Badge>);
      
      const badge = screen.getByText('-5');
      expect(badge).toBeInTheDocument();
    });

    it('handles very large count', () => {
      render(<Badge count={999999} max={1000}>Badge</Badge>);
      
      const badge = screen.getByText('1000+');
      expect(badge).toBeInTheDocument();
    });

    it('handles count equal to max', () => {
      render(<Badge count={50} max={50}>Badge</Badge>);
      
      const badge = screen.getByText('50');
      expect(badge).toBeInTheDocument();
    });

    it('handles max smaller than count', () => {
      render(<Badge count={10} max={5}>Badge</Badge>);
      
      const badge = screen.getByText('5+');
      expect(badge).toBeInTheDocument();
    });

    it('renders all variant and size combinations', () => {
      const variants: Array<BadgeProps['variant']> = ['default', 'primary', 'success'];
      const sizes: Array<BadgeProps['size']> = ['small', 'medium', 'large'];
      
      variants.forEach(variant => {
        sizes.forEach(size => {
          const { unmount } = render(
            <Badge variant={variant} size={size} data-testid={`${variant}-${size}`}>
              Test
            </Badge>
          );
          
          const badge = screen.getByTestId(`${variant}-${size}`);
          expect(badge).toHaveClass(`db-badge--${variant}`, `db-badge--${size}`);
          
          unmount();
        });
      });
    });
  });
});
