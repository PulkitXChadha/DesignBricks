import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Typography } from './Typography';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

describe('Typography', () => {
  // Root Component Tests
  describe('Typography (root)', () => {
    it('renders with default props', () => {
      render(<Typography>Root Typography</Typography>);
      
      const typography = screen.getByText('Root Typography');
      expect(typography).toBeInTheDocument();
      expect(typography).toHaveClass('db-typography');
    });

    it('renders with custom className', () => {
      render(<Typography className="custom-class">Content</Typography>);
      
      const typography = screen.getByText('Content');
      expect(typography).toHaveClass('db-typography', 'custom-class');
    });

    it('supports withoutMargins prop', () => {
      render(<Typography withoutMargins>Content</Typography>);
      
      const typography = screen.getByText('Content');
      expect(typography).toHaveClass('db-typography--without-margins');
    });
  });

  // Typography.Title Tests
  describe('Typography.Title', () => {
    it('renders h1 by default', () => {
      render(<Typography.Title>Title Text</Typography.Title>);
      
      const title = screen.getByRole('heading', { level: 1 });
      expect(title).toBeInTheDocument();
      expect(title).toHaveClass('db-typography-title', 'db-typography-title--level-1');
    });

    [1, 2, 3, 4].forEach(level => {
      it(`renders heading level ${level}`, () => {
        render(
          <Typography.Title level={level as 1 | 2 | 3 | 4}>
            Title Level {level}
          </Typography.Title>
        );
        
        const title = screen.getByRole('heading', { level });
        expect(title).toHaveClass(`db-typography-title--level-${level}`);
      });
    });

    it('applies color prop', () => {
      render(<Typography.Title color="secondary">Colored Title</Typography.Title>);
      
      const title = screen.getByText('Colored Title');
      expect(title).toHaveClass('db-typography--secondary');
    });

    it('supports withoutMargins prop', () => {
      render(<Typography.Title withoutMargins>Title</Typography.Title>);
      
      const title = screen.getByText('Title');
      expect(title).toHaveClass('db-typography--without-margins');
    });

    it('supports ellipsis prop', () => {
      render(<Typography.Title ellipsis>Long Title Text</Typography.Title>);
      
      const title = screen.getByText('Long Title Text');
      expect(title).toHaveClass('db-typography--ellipsis');
    });

    it('has no accessibility violations', async () => {
      const { container } = render(
        <Typography.Title level={2}>Accessible Title</Typography.Title>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  // Typography.Text Tests
  describe('Typography.Text', () => {
    it('renders span by default', () => {
      render(<Typography.Text>Text Content</Typography.Text>);
      
      const text = screen.getByText('Text Content');
      expect(text).toBeInTheDocument();
      expect(text.tagName).toBe('SPAN');
    });

    const sizes = ['sm', 'md', 'lg', 'xl', 'xxl'] as const;
    sizes.forEach(size => {
      it(`renders ${size} size`, () => {
        render(<Typography.Text size={size}>{size} text</Typography.Text>);
        
        const text = screen.getByText(`${size} text`);
        expect(text).toHaveClass(`db-typography-text--${size}`);
      });
    });

    it('renders md size by default', () => {
      render(<Typography.Text>Default size</Typography.Text>);
      
      const text = screen.getByText('Default size');
      expect(text).toHaveClass('db-typography-text--md');
    });

    it('applies bold prop', () => {
      render(<Typography.Text bold>Bold text</Typography.Text>);
      
      const text = screen.getByText('Bold text');
      expect(text).toHaveClass('db-typography-text--bold');
    });

    it('applies disabled prop', () => {
      render(<Typography.Text disabled>Disabled text</Typography.Text>);
      
      const text = screen.getByText('Disabled text');
      expect(text).toHaveClass('db-typography-text--disabled');
    });

    it('renders code element when code prop is true', () => {
      render(<Typography.Text code>const code = true;</Typography.Text>);
      
      const text = screen.getByText('const code = true;');
      expect(text.tagName).toBe('CODE');
      expect(text).toHaveClass('db-typography-text--code');
    });

    it('applies color prop', () => {
      render(<Typography.Text color="error">Error text</Typography.Text>);
      
      const text = screen.getByText('Error text');
      expect(text).toHaveClass('db-typography--error');
    });

    it('has no accessibility violations', async () => {
      const { container } = render(
        <Typography.Text size="lg" bold>Accessible Text</Typography.Text>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  // Typography.Paragraph Tests
  describe('Typography.Paragraph', () => {
    it('renders paragraph element', () => {
      render(<Typography.Paragraph>Paragraph text</Typography.Paragraph>);
      
      const paragraph = screen.getByText('Paragraph text');
      expect(paragraph).toBeInTheDocument();
      expect(paragraph.tagName).toBe('P');
      expect(paragraph).toHaveClass('db-typography-paragraph');
    });

    it('applies color prop', () => {
      render(
        <Typography.Paragraph color="secondary">
          Secondary paragraph
        </Typography.Paragraph>
      );
      
      const paragraph = screen.getByText('Secondary paragraph');
      expect(paragraph).toHaveClass('db-typography--secondary');
    });

    it('applies disabled prop', () => {
      render(
        <Typography.Paragraph disabled>Disabled paragraph</Typography.Paragraph>
      );
      
      const paragraph = screen.getByText('Disabled paragraph');
      expect(paragraph).toHaveClass('db-typography-paragraph--disabled');
    });

    it('supports withoutMargins prop', () => {
      render(
        <Typography.Paragraph withoutMargins>No margins</Typography.Paragraph>
      );
      
      const paragraph = screen.getByText('No margins');
      expect(paragraph).toHaveClass('db-typography--without-margins');
    });

    it('supports ellipsis prop', () => {
      render(<Typography.Paragraph ellipsis>Long text</Typography.Paragraph>);
      
      const paragraph = screen.getByText('Long text');
      expect(paragraph).toHaveClass('db-typography--ellipsis');
    });

    it('has no accessibility violations', async () => {
      const { container } = render(
        <Typography.Paragraph>Accessible paragraph</Typography.Paragraph>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  // Typography.Hint Tests
  describe('Typography.Hint', () => {
    it('renders span element', () => {
      render(<Typography.Hint>Hint text</Typography.Hint>);
      
      const hint = screen.getByText('Hint text');
      expect(hint).toBeInTheDocument();
      expect(hint.tagName).toBe('SPAN');
      expect(hint).toHaveClass('db-typography-hint');
    });

    it('applies bold prop', () => {
      render(<Typography.Hint bold>Bold hint</Typography.Hint>);
      
      const hint = screen.getByText('Bold hint');
      expect(hint).toHaveClass('db-typography-hint--bold');
    });

    it('supports withoutMargins prop', () => {
      render(<Typography.Hint withoutMargins>Hint</Typography.Hint>);
      
      const hint = screen.getByText('Hint');
      expect(hint).toHaveClass('db-typography--without-margins');
    });

    it('has no accessibility violations', async () => {
      const { container } = render(
        <Typography.Hint>Helper text</Typography.Hint>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  // Typography.Link Tests
  describe('Typography.Link', () => {
    it('renders anchor element', () => {
      render(
        <Typography.Link href="https://example.com">Link text</Typography.Link>
      );
      
      const link = screen.getByRole('link');
      expect(link).toBeInTheDocument();
      expect(link).toHaveClass('db-typography-link');
      expect(link).toHaveAttribute('href', 'https://example.com');
    });

    it('opens in new tab when openInNewTab is true', () => {
      render(
        <Typography.Link href="https://example.com" openInNewTab>
          External link
        </Typography.Link>
      );
      
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      
      // Check for new tab icon
      expect(screen.getByText('↗')).toBeInTheDocument();
    });

    it('applies disabled state', () => {
      render(
        <Typography.Link href="#" disabled>
          Disabled link
        </Typography.Link>
      );
      
      const link = screen.getByText('Disabled link');
      expect(link).toHaveClass('db-typography-link--disabled');
      expect(link).toHaveAttribute('aria-disabled', 'true');
    });

    it('supports ellipsis prop', () => {
      render(
        <Typography.Link href="#" ellipsis>
          Long link text
        </Typography.Link>
      );
      
      const link = screen.getByText('Long link text');
      expect(link).toHaveClass('db-typography--ellipsis');
    });

    it('has no accessibility violations', async () => {
      const { container } = render(
        <Typography.Link href="https://example.com">
          Accessible link
        </Typography.Link>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  // Color Tests (applies to all components)
  describe('Colors', () => {
    const colors = ['primary', 'secondary', 'disabled', 'error', 'warning', 'success', 'info'] as const;
    
    colors.forEach(color => {
      it(`Title applies ${color} color`, () => {
        render(
          <Typography.Title color={color}>{color} title</Typography.Title>
        );
        
        const title = screen.getByText(`${color} title`);
        expect(title).toHaveClass(`db-typography--${color}`);
      });

      it(`Text applies ${color} color`, () => {
        render(
          <Typography.Text color={color}>{color} text</Typography.Text>
        );
        
        const text = screen.getByText(`${color} text`);
        expect(text).toHaveClass(`db-typography--${color}`);
      });

      it(`Paragraph applies ${color} color`, () => {
        render(
          <Typography.Paragraph color={color}>{color} paragraph</Typography.Paragraph>
        );
        
        const paragraph = screen.getByText(`${color} paragraph`);
        expect(paragraph).toHaveClass(`db-typography--${color}`);
      });
    });
  });

  // Integration Tests
  describe('Integration', () => {
    it('works together in a real-world example', async () => {
      const { container } = render(
        <div>
          <Typography.Title level={1}>Main Heading</Typography.Title>
          <Typography.Paragraph>
            This is a paragraph with{' '}
            <Typography.Text bold>bold text</Typography.Text> and{' '}
            <Typography.Text code>inline code</Typography.Text>.
          </Typography.Paragraph>
          <Typography.Hint>This is a helpful hint.</Typography.Hint>
          <Typography.Link href="https://example.com" openInNewTab>
            Learn more
          </Typography.Link>
        </div>
      );

      // Check all components render
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Main Heading');
      expect(screen.getByText('bold text')).toHaveClass('db-typography-text--bold');
      expect(screen.getByText('inline code').tagName).toBe('CODE');
      expect(screen.getByText('This is a helpful hint.')).toHaveClass('db-typography-hint');
      expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');

      // Check accessibility
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  // Ref Forwarding Tests
  describe('Ref Forwarding', () => {
    it('forwards ref for Title', () => {
      const ref = React.createRef<HTMLHeadingElement>();
      render(<Typography.Title ref={ref}>Title</Typography.Title>);
      
      expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
      expect(ref.current).toHaveTextContent('Title');
    });

    it('forwards ref for Text', () => {
      const ref = React.createRef<HTMLSpanElement>();
      render(<Typography.Text ref={ref}>Text</Typography.Text>);
      
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
      expect(ref.current).toHaveTextContent('Text');
    });

    it('forwards ref for Paragraph', () => {
      const ref = React.createRef<HTMLParagraphElement>();
      render(<Typography.Paragraph ref={ref}>Paragraph</Typography.Paragraph>);
      
      expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
      expect(ref.current).toHaveTextContent('Paragraph');
    });

    it('forwards ref for Link', () => {
      const ref = React.createRef<HTMLAnchorElement>();
      render(
        <Typography.Link href="#" ref={ref}>
          Link
        </Typography.Link>
      );
      
      expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
      expect(ref.current).toHaveTextContent('Link');
    });
  });
});
