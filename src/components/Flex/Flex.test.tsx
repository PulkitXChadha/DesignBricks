import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Flex } from './Flex';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

describe('Flex', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      const { container } = render(<Flex>Content</Flex>);
      
      const flex = container.querySelector('.db-flex');
      expect(flex).toBeInTheDocument();
      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('renders children correctly', () => {
      render(
        <Flex>
          <div>Child 1</div>
          <div>Child 2</div>
        </Flex>
      );
      
      expect(screen.getByText('Child 1')).toBeInTheDocument();
      expect(screen.getByText('Child 2')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      const { container } = render(
        <Flex className="custom-flex">Content</Flex>
      );
      
      const flex = container.querySelector('.db-flex');
      expect(flex).toHaveClass('custom-flex');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLElement>();
      render(<Flex ref={ref}>Content</Flex>);
      
      expect(ref.current).toBeInstanceOf(HTMLElement);
      expect(ref.current).toHaveClass('db-flex');
    });

    it('uses div element by default', () => {
      const { container } = render(<Flex>Content</Flex>);
      
      const element = container.firstChild;
      expect(element?.nodeName).toBe('DIV');
    });
  });

  // Direction tests
  describe('Direction', () => {
    const directions: Array<'row' | 'column' | 'row-reverse' | 'column-reverse'> = 
      ['row', 'column', 'row-reverse', 'column-reverse'];
    
    directions.forEach(direction => {
      it(`renders ${direction} direction correctly`, () => {
        const { container } = render(
          <Flex direction={direction}>Content</Flex>
        );
        
        const flex = container.querySelector('.db-flex');
        expect(flex).toHaveClass(`db-flex--direction-${direction}`);
      });
    });

    it('applies row direction by default', () => {
      const { container } = render(<Flex>Content</Flex>);
      
      const flex = container.querySelector('.db-flex');
      expect(flex).toHaveClass('db-flex--direction-row');
    });

    it('handles responsive direction prop', () => {
      const { container } = render(
        <Flex direction={{ base: 'column', md: 'row' }}>Content</Flex>
      );
      
      const flex = container.querySelector('.db-flex');
      expect(flex).toHaveClass('db-flex--direction-column');
    });
  });

  // Wrap tests
  describe('Wrap', () => {
    const wraps: Array<'wrap' | 'nowrap' | 'wrap-reverse'> = 
      ['wrap', 'nowrap', 'wrap-reverse'];
    
    wraps.forEach(wrap => {
      it(`renders ${wrap} correctly`, () => {
        const { container } = render(
          <Flex wrap={wrap}>Content</Flex>
        );
        
        const flex = container.querySelector('.db-flex');
        expect(flex).toHaveClass(`db-flex--wrap-${wrap}`);
      });
    });

    it('applies nowrap by default', () => {
      const { container } = render(<Flex>Content</Flex>);
      
      const flex = container.querySelector('.db-flex');
      expect(flex).toHaveClass('db-flex--wrap-nowrap');
    });
  });

  // JustifyContent tests
  describe('JustifyContent', () => {
    it('renders start justification', () => {
      const { container } = render(
        <Flex justifyContent="start">Content</Flex>
      );
      
      const flex = container.querySelector('.db-flex');
      expect(flex).toHaveClass('db-flex--justify-start');
    });

    it('renders center justification', () => {
      const { container } = render(
        <Flex justifyContent="center">Content</Flex>
      );
      
      const flex = container.querySelector('.db-flex');
      expect(flex).toHaveClass('db-flex--justify-center');
    });

    it('renders space-between justification', () => {
      const { container } = render(
        <Flex justifyContent="space-between">Content</Flex>
      );
      
      const flex = container.querySelector('.db-flex');
      expect(flex).toHaveClass('db-flex--justify-space-between');
    });

    it('strips flex- prefix from values', () => {
      const { container } = render(
        <Flex justifyContent="flex-start">Content</Flex>
      );
      
      const flex = container.querySelector('.db-flex');
      expect(flex).toHaveClass('db-flex--justify-start');
    });
  });

  // AlignItems tests
  describe('AlignItems', () => {
    it('renders center alignment', () => {
      const { container } = render(
        <Flex alignItems="center">Content</Flex>
      );
      
      const flex = container.querySelector('.db-flex');
      expect(flex).toHaveClass('db-flex--align-items-center');
    });

    it('renders stretch alignment by default', () => {
      const { container } = render(<Flex>Content</Flex>);
      
      const flex = container.querySelector('.db-flex');
      expect(flex).toHaveClass('db-flex--align-items-stretch');
    });

    it('renders baseline alignment', () => {
      const { container } = render(
        <Flex alignItems="baseline">Content</Flex>
      );
      
      const flex = container.querySelector('.db-flex');
      expect(flex).toHaveClass('db-flex--align-items-baseline');
    });
  });

  // Gap tests
  describe('Gap', () => {
    it('applies gap class', () => {
      const { container } = render(
        <Flex gap="4">Content</Flex>
      );
      
      const flex = container.querySelector('.db-flex');
      expect(flex).toHaveClass('db-flex--gap-4');
    });

    it('applies row gap class', () => {
      const { container } = render(
        <Flex rowGap="2">Content</Flex>
      );
      
      const flex = container.querySelector('.db-flex');
      expect(flex).toHaveClass('db-flex--row-gap-2');
    });

    it('applies column gap class', () => {
      const { container } = render(
        <Flex columnGap="6">Content</Flex>
      );
      
      const flex = container.querySelector('.db-flex');
      expect(flex).toHaveClass('db-flex--column-gap-6');
    });
  });

  // Dimension props tests
  describe('Dimension Props', () => {
    it('applies width style', () => {
      const { container } = render(
        <Flex width="100%">Content</Flex>
      );
      
      const flex = container.querySelector('.db-flex') as HTMLElement;
      expect(flex.style.width).toBe('100%');
    });

    it('applies height style', () => {
      const { container } = render(
        <Flex height="200px">Content</Flex>
      );
      
      const flex = container.querySelector('.db-flex') as HTMLElement;
      expect(flex.style.height).toBe('200px');
    });

    it('converts spacing tokens to pixels', () => {
      const { container } = render(
        <Flex width="4">Content</Flex>
      );
      
      const flex = container.querySelector('.db-flex') as HTMLElement;
      expect(flex.style.width).toBe('16px');
    });

    it('applies minWidth', () => {
      const { container } = render(
        <Flex minWidth="200px">Content</Flex>
      );
      
      const flex = container.querySelector('.db-flex') as HTMLElement;
      expect(flex.style.minWidth).toBe('200px');
    });

    it('applies maxWidth', () => {
      const { container } = render(
        <Flex maxWidth="800px">Content</Flex>
      );
      
      const flex = container.querySelector('.db-flex') as HTMLElement;
      expect(flex.style.maxWidth).toBe('800px');
    });

    it('applies minHeight', () => {
      const { container } = render(
        <Flex minHeight="100px">Content</Flex>
      );
      
      const flex = container.querySelector('.db-flex') as HTMLElement;
      expect(flex.style.minHeight).toBe('100px');
    });

    it('applies maxHeight', () => {
      const { container } = render(
        <Flex maxHeight="500px">Content</Flex>
      );
      
      const flex = container.querySelector('.db-flex') as HTMLElement;
      expect(flex.style.maxHeight).toBe('500px');
    });
  });

  // Flex properties tests
  describe('Flex Properties', () => {
    it('applies flex grow as boolean', () => {
      const { container } = render(
        <Flex grow>Content</Flex>
      );
      
      const flex = container.querySelector('.db-flex') as HTMLElement;
      expect(flex.style.flexGrow).toBe('1');
    });

    it('applies flex grow as number', () => {
      const { container } = render(
        <Flex grow={2}>Content</Flex>
      );
      
      const flex = container.querySelector('.db-flex') as HTMLElement;
      expect(flex.style.flexGrow).toBe('2');
    });

    it('applies flex shrink as boolean', () => {
      const { container } = render(
        <Flex shrink>Content</Flex>
      );
      
      const flex = container.querySelector('.db-flex') as HTMLElement;
      expect(flex.style.flexShrink).toBe('1');
    });

    it('applies flex shrink as number', () => {
      const { container } = render(
        <Flex shrink={0}>Content</Flex>
      );
      
      const flex = container.querySelector('.db-flex') as HTMLElement;
      expect(flex.style.flexShrink).toBe('0');
    });

    it('applies flex basis', () => {
      const { container } = render(
        <Flex basis="50%">Content</Flex>
      );
      
      const flex = container.querySelector('.db-flex') as HTMLElement;
      expect(flex.style.flexBasis).toBe('50%');
    });
  });

  // Inline tests
  describe('Inline', () => {
    it('renders as inline-flex when inline is true', () => {
      const { container } = render(
        <Flex inline>Content</Flex>
      );
      
      const flex = container.querySelector('.db-flex-inline');
      expect(flex).toBeInTheDocument();
    });

    it('renders as flex by default', () => {
      const { container } = render(<Flex>Content</Flex>);
      
      const flex = container.querySelector('.db-flex');
      expect(flex).toBeInTheDocument();
      expect(container.querySelector('.db-flex-inline')).not.toBeInTheDocument();
    });
  });

  // IsHidden tests
  describe('IsHidden', () => {
    it('renders null when isHidden is true', () => {
      const { container } = render(
        <Flex isHidden>Content</Flex>
      );
      
      expect(container.firstChild).toBeNull();
    });

    it('renders when isHidden is false', () => {
      const { container } = render(
        <Flex isHidden={false}>Content</Flex>
      );
      
      const flex = container.querySelector('.db-flex');
      expect(flex).toBeInTheDocument();
    });

    it('renders when isHidden is not provided', () => {
      const { container } = render(<Flex>Content</Flex>);
      
      const flex = container.querySelector('.db-flex');
      expect(flex).toBeInTheDocument();
    });
  });

  // Element type tests
  describe('Element Type', () => {
    it('renders as custom element when as prop is provided', () => {
      const { container } = render(
        <Flex as="section">Content</Flex>
      );
      
      const element = container.firstChild;
      expect(element?.nodeName).toBe('SECTION');
    });

    it('renders as span when as="span"', () => {
      const { container } = render(
        <Flex as="span">Content</Flex>
      );
      
      const element = container.firstChild;
      expect(element?.nodeName).toBe('SPAN');
    });

    it('renders as article', () => {
      const { container } = render(
        <Flex as="article">Content</Flex>
      );
      
      const element = container.firstChild;
      expect(element?.nodeName).toBe('ARTICLE');
    });
  });

  // ARIA attributes tests
  describe('ARIA Attributes', () => {
    it('forwards aria-label', () => {
      render(<Flex aria-label="Test container">Content</Flex>);
      
      const flex = screen.getByLabelText('Test container');
      expect(flex).toBeInTheDocument();
    });

    it('forwards aria-labelledby', () => {
      render(
        <div>
          <h1 id="title">Title</h1>
          <Flex aria-labelledby="title">Content</Flex>
        </div>
      );
      
      const flex = document.querySelector('[aria-labelledby="title"]');
      expect(flex).toBeInTheDocument();
    });

    it('forwards role prop', () => {
      const { container } = render(
        <Flex role="navigation">Content</Flex>
      );
      
      const flex = container.querySelector('[role="navigation"]');
      expect(flex).toBeInTheDocument();
    });
  });

  // Style prop tests
  describe('Style Prop', () => {
    it('merges custom styles with computed styles', () => {
      const { container } = render(
        <Flex style={{ backgroundColor: 'red' }} grow>Content</Flex>
      );
      
      const flex = container.querySelector('.db-flex') as HTMLElement;
      expect(flex.style.backgroundColor).toBe('red');
      expect(flex.style.flexGrow).toBe('1');
    });

    it('allows custom CSS properties', () => {
      const { container } = render(
        <Flex style={{ padding: '10px', margin: '5px' }}>Content</Flex>
      );
      
      const flex = container.querySelector('.db-flex') as HTMLElement;
      expect(flex.style.padding).toBe('10px');
      expect(flex.style.margin).toBe('5px');
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles empty children', () => {
      const { container } = render(<Flex />);
      
      const flex = container.querySelector('.db-flex');
      expect(flex).toBeInTheDocument();
    });

    it('handles null children', () => {
      const { container } = render(<Flex>{null}</Flex>);
      
      const flex = container.querySelector('.db-flex');
      expect(flex).toBeInTheDocument();
    });

    it('handles multiple children', () => {
      render(
        <Flex>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Flex>
      );
      
      expect(screen.getByText('1')).toBeInTheDocument();
      expect(screen.getByText('2')).toBeInTheDocument();
      expect(screen.getByText('3')).toBeInTheDocument();
    });

    it('works with all props combined', () => {
      const { container } = render(
        <Flex
          direction="column"
          wrap="wrap"
          justifyContent="center"
          alignItems="center"
          gap="4"
          width="100%"
          height="500px"
          grow
          shrink={false}
          basis="auto"
          inline={false}
          as="section"
          className="custom"
          style={{ padding: '20px' }}
          data-testid="flex"
        >
          Content
        </Flex>
      );
      
      const flex = screen.getByTestId('flex');
      expect(flex.nodeName).toBe('SECTION');
      expect(flex).toHaveClass('db-flex', 'custom');
      expect((flex as HTMLElement).style.width).toBe('100%');
      expect((flex as HTMLElement).style.height).toBe('500px');
      expect((flex as HTMLElement).style.padding).toBe('20px');
    });

    it('preserves props during re-render', () => {
      const { rerender } = render(
        <Flex direction="row">Original</Flex>
      );
      
      expect(screen.getByText('Original')).toBeInTheDocument();
      
      rerender(
        <Flex direction="column">Updated</Flex>
      );
      
      expect(screen.queryByText('Original')).not.toBeInTheDocument();
      expect(screen.getByText('Updated')).toBeInTheDocument();
    });
  });

  // Responsive values tests
  describe('Responsive Values', () => {
    it('uses base value from responsive prop', () => {
      const { container } = render(
        <Flex direction={{ base: 'column' }}>Content</Flex>
      );
      
      const flex = container.querySelector('.db-flex');
      expect(flex).toHaveClass('db-flex--direction-column');
    });

    it('uses first value when no base is provided', () => {
      const { container } = render(
        <Flex direction={{ md: 'row' }}>Content</Flex>
      );
      
      const flex = container.querySelector('.db-flex');
      expect(flex).toHaveClass('db-flex--direction-row');
    });

    it('handles responsive gap values', () => {
      const { container } = render(
        <Flex gap={{ base: '4', md: '8' }}>Content</Flex>
      );
      
      const flex = container.querySelector('.db-flex');
      expect(flex).toHaveClass('db-flex--gap-4');
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(
        <Flex>
          <div>Item 1</div>
          <div>Item 2</div>
        </Flex>
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no accessibility violations with semantic element', async () => {
      const { container } = render(
        <Flex as="nav" aria-label="Navigation">
          <a href="/">Home</a>
          <a href="/about">About</a>
        </Flex>
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no accessibility violations with complex layout', async () => {
      const { container } = render(
        <Flex direction="column" gap="4">
          <Flex justifyContent="space-between">
            <div>Left</div>
            <div>Right</div>
          </Flex>
          <Flex alignItems="center" gap="2">
            <span>Content</span>
          </Flex>
        </Flex>
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  // Nesting tests
  describe('Nesting', () => {
    it('allows nesting Flex components', () => {
      render(
        <Flex direction="column">
          <Flex direction="row">
            <div>Nested 1</div>
            <div>Nested 2</div>
          </Flex>
        </Flex>
      );
      
      expect(screen.getByText('Nested 1')).toBeInTheDocument();
      expect(screen.getByText('Nested 2')).toBeInTheDocument();
    });

    it('maintains independent styling for nested Flex', () => {
      const { container } = render(
        <Flex direction="column" data-testid="outer">
          <Flex direction="row" data-testid="inner">
            Content
          </Flex>
        </Flex>
      );
      
      const outer = screen.getByTestId('outer');
      const inner = screen.getByTestId('inner');
      
      expect(outer).toHaveClass('db-flex--direction-column');
      expect(inner).toHaveClass('db-flex--direction-row');
    });
  });

  // displayName test
  describe('Component Meta', () => {
    it('has correct displayName', () => {
      expect(Flex.displayName).toBe('Flex');
    });
  });
});




