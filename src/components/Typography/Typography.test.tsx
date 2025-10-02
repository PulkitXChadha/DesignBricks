import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Typography, TypographyProps } from './Typography';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

describe('Typography', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      render(<Typography>Default Typography</Typography>);
      
      const typography = screen.getByText('Default Typography');
      expect(typography).toBeInTheDocument();
      expect(typography).toHaveClass(
        'db-typography',
        'db-typography--body1',
        'db-typography--primary',
        'db-typography--left'
      );
      expect(typography.tagName).toBe('P');
    });

    it('renders with custom className', () => {
      render(<Typography className="custom-class">Typography</Typography>);
      
      const typography = screen.getByText('Typography');
      expect(typography).toHaveClass('db-typography', 'custom-class');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLParagraphElement>();
      render(<Typography ref={ref}>Typography</Typography>);
      
      expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
      expect(ref.current).toHaveClass('db-typography');
    });

    it('forwards additional props', () => {
      render(
        <Typography data-testid="typography" title="Typography title">
          Typography
        </Typography>
      );
      
      const typography = screen.getByTestId('typography');
      expect(typography).toHaveAttribute('title', 'Typography title');
    });
  });

  // Variant tests
  describe('Variants', () => {
    const headingVariants: Array<TypographyProps['variant']> = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    
    headingVariants.forEach(variant => {
      it(`renders ${variant} variant with correct HTML element`, () => {
        render(<Typography variant={variant}>Heading Text</Typography>);
        
        const typography = screen.getByText('Heading Text');
        expect(typography).toHaveClass(`db-typography--${variant}`);
        expect(typography.tagName).toBe(variant?.toUpperCase());
      });

      it(`${variant} variant has proper heading role`, () => {
        render(<Typography variant={variant}>Heading Text</Typography>);
        
        const typography = screen.getByRole('heading');
        expect(typography).toBeInTheDocument();
      });
    });

    it('renders body1 variant with paragraph element', () => {
      render(<Typography variant="body1">Body text</Typography>);
      
      const typography = screen.getByText('Body text');
      expect(typography).toHaveClass('db-typography--body1');
      expect(typography.tagName).toBe('P');
    });

    it('renders body2 variant with paragraph element', () => {
      render(<Typography variant="body2">Body text</Typography>);
      
      const typography = screen.getByText('Body text');
      expect(typography).toHaveClass('db-typography--body2');
      expect(typography.tagName).toBe('P');
    });

    it('renders caption variant with span element', () => {
      render(<Typography variant="caption">Caption text</Typography>);
      
      const typography = screen.getByText('Caption text');
      expect(typography).toHaveClass('db-typography--caption');
      expect(typography.tagName).toBe('SPAN');
    });

    it('renders overline variant with span element', () => {
      render(<Typography variant="overline">Overline text</Typography>);
      
      const typography = screen.getByText('Overline text');
      expect(typography).toHaveClass('db-typography--overline');
      expect(typography.tagName).toBe('SPAN');
    });

    it('renders code variant with code element', () => {
      render(<Typography variant="code">const code = true;</Typography>);
      
      const typography = screen.getByText('const code = true;');
      expect(typography).toHaveClass('db-typography--code');
      expect(typography.tagName).toBe('CODE');
    });
  });

  // Color tests
  describe('Colors', () => {
    const colors: Array<TypographyProps['color']> = [
      'primary', 'secondary', 'disabled', 'error', 'warning', 'success', 'info', 'inherit'
    ];
    
    colors.forEach(color => {
      it(`renders ${color} color correctly`, () => {
        render(<Typography color={color}>Colored text</Typography>);
        
        const typography = screen.getByText('Colored text');
        expect(typography).toHaveClass(`db-typography--${color}`);
      });
    });
  });

  // Alignment tests
  describe('Text Alignment', () => {
    const alignments: Array<TypographyProps['align']> = ['left', 'center', 'right', 'justify'];
    
    alignments.forEach(align => {
      it(`renders ${align} alignment correctly`, () => {
        render(<Typography align={align}>Aligned text</Typography>);
        
        const typography = screen.getByText('Aligned text');
        expect(typography).toHaveClass(`db-typography--${align}`);
      });
    });
  });

  // Font weight tests
  describe('Font Weight', () => {
    const weights: Array<TypographyProps['weight']> = ['normal', 'medium', 'semibold', 'bold'];
    
    weights.forEach(weight => {
      it(`renders ${weight} weight correctly`, () => {
        render(<Typography weight={weight}>Weighted text</Typography>);
        
        const typography = screen.getByText('Weighted text');
        expect(typography).toHaveClass(`db-typography--${weight}`);
      });
    });

    it('does not add weight class when weight is undefined', () => {
      render(<Typography>No weight text</Typography>);
      
      const typography = screen.getByText('No weight text');
      expect(typography.className).not.toMatch(/db-typography--normal|db-typography--medium|db-typography--semibold|db-typography--bold/);
    });
  });

  // Truncate tests
  describe('Text Truncation', () => {
    it('applies truncate class when truncate is true', () => {
      render(<Typography truncate>Long text that should be truncated</Typography>);
      
      const typography = screen.getByText('Long text that should be truncated');
      expect(typography).toHaveClass('db-typography--truncate');
    });

    it('does not apply truncate class when truncate is false', () => {
      render(<Typography truncate={false}>Normal text</Typography>);
      
      const typography = screen.getByText('Normal text');
      expect(typography).not.toHaveClass('db-typography--truncate');
    });

    it('does not apply truncate class by default', () => {
      render(<Typography>Default text</Typography>);
      
      const typography = screen.getByText('Default text');
      expect(typography).not.toHaveClass('db-typography--truncate');
    });
  });

  // Custom element tests
  describe('Custom Element (as prop)', () => {
    it('renders custom element when as prop is provided', () => {
      render(<Typography as="div">Custom div element</Typography>);
      
      const typography = screen.getByText('Custom div element');
      expect(typography.tagName).toBe('DIV');
      expect(typography).toHaveClass('db-typography');
    });

    it('overrides default variant mapping with as prop', () => {
      render(<Typography variant="h1" as="span">Custom span heading</Typography>);
      
      const typography = screen.getByText('Custom span heading');
      expect(typography.tagName).toBe('SPAN');
      expect(typography).toHaveClass('db-typography--h1');
      // Should not have heading role since it's rendered as span
      expect(typography).not.toHaveRole('heading');
    });

    it('renders semantic button when as="button"', () => {
      render(<Typography as="button">Button text</Typography>);
      
      const typography = screen.getByRole('button');
      expect(typography).toHaveTextContent('Button text');
      expect(typography.tagName).toBe('BUTTON');
    });

    it('renders semantic link when as="a"', () => {
      render(<Typography as="a" href="https://example.com">Link text</Typography>);
      
      const typography = screen.getByRole('link');
      expect(typography).toHaveTextContent('Link text');
      expect(typography).toHaveAttribute('href', 'https://example.com');
    });
  });

  // Content rendering tests
  describe('Content Rendering', () => {
    it('renders text content correctly', () => {
      render(<Typography>Simple text content</Typography>);
      
      const typography = screen.getByText('Simple text content');
      expect(typography).toHaveTextContent('Simple text content');
    });

    it('renders complex children correctly', () => {
      const { container } = render(
        <Typography>
          <strong>Bold</strong> and <em>italic</em> text
        </Typography>
      );
      
      const typography = container.querySelector('.db-typography');
      expect(typography).toHaveTextContent('Bold and italic text');
      expect(typography?.querySelector('strong')).toBeInTheDocument();
      expect(typography?.querySelector('em')).toBeInTheDocument();
    });

    it('handles empty children gracefully', () => {
      const { container } = render(<Typography>{null}</Typography>);
      
      const typography = container.querySelector('.db-typography');
      expect(typography).toBeInTheDocument();
      expect(typography).toHaveTextContent('');
    });

    it('handles undefined children gracefully', () => {
      const { container } = render(<Typography>{undefined}</Typography>);
      
      const typography = container.querySelector('.db-typography');
      expect(typography).toBeInTheDocument();
      expect(typography).toHaveTextContent('');
    });

    it('renders numbers correctly', () => {
      render(<Typography>{42}</Typography>);
      
      const typography = screen.getByText('42');
      expect(typography).toBeInTheDocument();
    });

    it('renders zero correctly', () => {
      render(<Typography>{0}</Typography>);
      
      const typography = screen.getByText('0');
      expect(typography).toBeInTheDocument();
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<Typography>Accessible text</Typography>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with headings', async () => {
      const { container } = render(
        <div>
          <Typography variant="h1">Main Heading</Typography>
          <Typography variant="h2">Section Heading</Typography>
          <Typography variant="body1">Body text content</Typography>
        </div>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with colors', async () => {
      const { container } = render(
        <div>
          <Typography color="error">Error message</Typography>
          <Typography color="warning">Warning message</Typography>
          <Typography color="success">Success message</Typography>
        </div>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('supports ARIA attributes', () => {
      render(
        <Typography 
          aria-label="Custom label" 
          role="status"
          aria-live="polite"
        >
          Status message
        </Typography>
      );
      
      const typography = screen.getByRole('status');
      expect(typography).toHaveAttribute('aria-label', 'Custom label');
      expect(typography).toHaveAttribute('aria-live', 'polite');
    });

    it('maintains proper heading hierarchy', () => {
      render(
        <div>
          <Typography variant="h1">Level 1 Heading</Typography>
          <Typography variant="h2">Level 2 Heading</Typography>
          <Typography variant="h3">Level 3 Heading</Typography>
        </div>
      );
      
      const headings = screen.getAllByRole('heading');
      expect(headings).toHaveLength(3);
      expect(headings[0].tagName).toBe('H1');
      expect(headings[1].tagName).toBe('H2');
      expect(headings[2].tagName).toBe('H3');
    });

    it('code variant is accessible', async () => {
      const { container } = render(
        <Typography variant="code">
          const example = &apos;accessible code&apos;;
        </Typography>
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
      
      const codeElement = container.querySelector('code');
      expect(codeElement).toBeInTheDocument();
    });
  });

  // Combination tests
  describe('Property Combinations', () => {
    it('applies multiple modifiers correctly', () => {
      render(
        <Typography 
          variant="h2" 
          color="error" 
          align="center" 
          weight="bold" 
          truncate
          className="custom-class"
        >
          Complex Typography
        </Typography>
      );
      
      const typography = screen.getByRole('heading');
      expect(typography).toHaveClass(
        'db-typography',
        'db-typography--h2',
        'db-typography--error',
        'db-typography--center',
        'db-typography--bold',
        'db-typography--truncate',
        'custom-class'
      );
    });

    it('combines variant and custom element correctly', () => {
      render(<Typography variant="code" as="pre">Preformatted code</Typography>);
      
      const typography = screen.getByText('Preformatted code');
      expect(typography.tagName).toBe('PRE');
      expect(typography).toHaveClass('db-typography--code');
    });

    it('renders all color and variant combinations', () => {
      const variants: Array<TypographyProps['variant']> = ['h1', 'body1', 'caption'];
      const colors: Array<TypographyProps['color']> = ['primary', 'error', 'success'];
      
      variants.forEach(variant => {
        colors.forEach(color => {
          const { unmount } = render(
            <Typography 
              variant={variant} 
              color={color} 
              data-testid={`${variant}-${color}`}
            >
              Test
            </Typography>
          );
          
          const typography = screen.getByTestId(`${variant}-${color}`);
          expect(typography).toHaveClass(`db-typography--${variant}`, `db-typography--${color}`);
          
          unmount();
        });
      });
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles all props as undefined gracefully', () => {
      render(
        <Typography 
          variant={undefined} 
          color={undefined} 
          align={undefined}
          weight={undefined}
          truncate={undefined}
        >
          Default behavior
        </Typography>
      );
      
      const typography = screen.getByText('Default behavior');
      expect(typography).toHaveClass(
        'db-typography',
        'db-typography--body1',
        'db-typography--primary',
        'db-typography--left'
      );
      expect(typography).not.toHaveClass('db-typography--truncate');
    });

    it('handles complex nested content', () => {
      render(
        <Typography variant="body1">
          This is <Typography variant="code" as="span">inline code</Typography> within text.
        </Typography>
      );
      
      const outerTypography = screen.getByText(/This is.*within text/);
      const innerTypography = screen.getByText('inline code');
      
      expect(outerTypography).toHaveClass('db-typography--body1');
      expect(innerTypography).toHaveClass('db-typography--code');
      expect(innerTypography.tagName).toBe('SPAN');
    });

    it('preserves event handlers', () => {
      const handleClick = jest.fn();
      render(<Typography onClick={handleClick}>Clickable text</Typography>);
      
      const typography = screen.getByText('Clickable text');
      typography.click();
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
