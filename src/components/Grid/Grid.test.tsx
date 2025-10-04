import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Grid, GridItem, GridProps, GridItemProps } from './Grid';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

describe('Grid', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      const { container } = render(<Grid>Content</Grid>);
      
      const grid = container.querySelector('.db-grid');
      expect(grid).toBeInTheDocument();
      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('renders children correctly', () => {
      render(
        <Grid>
          <div>Child 1</div>
          <div>Child 2</div>
          <div>Child 3</div>
        </Grid>
      );
      
      expect(screen.getByText('Child 1')).toBeInTheDocument();
      expect(screen.getByText('Child 2')).toBeInTheDocument();
      expect(screen.getByText('Child 3')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      const { container } = render(
        <Grid className="custom-grid">Content</Grid>
      );
      
      const grid = container.querySelector('.db-grid');
      expect(grid).toHaveClass('custom-grid');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLElement>();
      render(<Grid ref={ref}>Content</Grid>);
      
      expect(ref.current).toBeInstanceOf(HTMLElement);
      expect(ref.current).toHaveClass('db-grid');
    });

    it('uses div element by default', () => {
      const { container } = render(<Grid>Content</Grid>);
      
      const element = container.firstChild;
      expect(element?.nodeName).toBe('DIV');
    });
  });

  // Template columns tests
  describe('Template Columns', () => {
    it('applies column template', () => {
      const { container } = render(
        <Grid columns={['1fr', '2fr', '1fr']}>Content</Grid>
      );
      
      const grid = container.querySelector('.db-grid') as HTMLElement;
      expect(grid.style.gridTemplateColumns).toBe('1fr 2fr 1fr');
    });

    it('handles responsive column templates', () => {
      const { container } = render(
        <Grid columns={{ base: ['1fr'], md: ['1fr', '1fr'] }}>Content</Grid>
      );
      
      const grid = container.querySelector('.db-grid') as HTMLElement;
      expect(grid.style.gridTemplateColumns).toBe('1fr');
    });

    it('handles complex column patterns', () => {
      const { container } = render(
        <Grid columns={['200px', 'auto', '1fr', 'minmax(100px, 200px)']}>
          Content
        </Grid>
      );
      
      const grid = container.querySelector('.db-grid') as HTMLElement;
      expect(grid.style.gridTemplateColumns).toBe('200px auto 1fr minmax(100px, 200px)');
    });
  });

  // Template rows tests
  describe('Template Rows', () => {
    it('applies row template', () => {
      const { container } = render(
        <Grid rows={['100px', 'auto', '1fr']}>Content</Grid>
      );
      
      const grid = container.querySelector('.db-grid') as HTMLElement;
      expect(grid.style.gridTemplateRows).toBe('100px auto 1fr');
    });

    it('handles responsive row templates', () => {
      const { container } = render(
        <Grid rows={{ base: ['auto'], md: ['100px', '1fr'] }}>Content</Grid>
      );
      
      const grid = container.querySelector('.db-grid') as HTMLElement;
      expect(grid.style.gridTemplateRows).toBe('auto');
    });
  });

  // Template areas tests
  describe('Template Areas', () => {
    it('applies grid template areas', () => {
      const { container } = render(
        <Grid areas={['header header', 'sidebar main', 'footer footer']}>
          Content
        </Grid>
      );
      
      const grid = container.querySelector('.db-grid') as HTMLElement;
      expect(grid.style.gridTemplateAreas).toBe('"header header" "sidebar main" "footer footer"');
    });

    it('handles responsive areas', () => {
      const { container } = render(
        <Grid areas={{ base: ['header', 'main', 'footer'] }}>
          Content
        </Grid>
      );
      
      const grid = container.querySelector('.db-grid') as HTMLElement;
      expect(grid.style.gridTemplateAreas).toBe('"header" "main" "footer"');
    });

    it('applies complex area patterns', () => {
      const { container } = render(
        <Grid areas={['nav nav nav', 'sidebar content ads', 'sidebar footer footer']}>
          Content
        </Grid>
      );
      
      const grid = container.querySelector('.db-grid') as HTMLElement;
      expect(grid.style.gridTemplateAreas).toBe('"nav nav nav" "sidebar content ads" "sidebar footer footer"');
    });
  });

  // Gap tests
  describe('Gap', () => {
    it('applies gap class', () => {
      const { container } = render(<Grid gap="4">Content</Grid>);
      
      const grid = container.querySelector('.db-grid');
      expect(grid).toHaveClass('db-grid--gap-4');
    });

    it('applies row gap class', () => {
      const { container } = render(<Grid rowGap="2">Content</Grid>);
      
      const grid = container.querySelector('.db-grid');
      expect(grid).toHaveClass('db-grid--row-gap-2');
    });

    it('applies column gap class', () => {
      const { container } = render(<Grid columnGap="6">Content</Grid>);
      
      const grid = container.querySelector('.db-grid');
      expect(grid).toHaveClass('db-grid--column-gap-6');
    });

    it('applies both row and column gaps', () => {
      const { container } = render(
        <Grid rowGap="3" columnGap="5">Content</Grid>
      );
      
      const grid = container.querySelector('.db-grid');
      expect(grid).toHaveClass('db-grid--row-gap-3', 'db-grid--column-gap-5');
    });
  });

  // Auto flow tests
  describe('Auto Flow', () => {
    it('applies auto flow row', () => {
      const { container } = render(<Grid autoFlow="row">Content</Grid>);
      
      const grid = container.querySelector('.db-grid') as HTMLElement;
      expect(grid.style.gridAutoFlow).toBe('row');
    });

    it('applies auto flow column', () => {
      const { container } = render(<Grid autoFlow="column">Content</Grid>);
      
      const grid = container.querySelector('.db-grid') as HTMLElement;
      expect(grid.style.gridAutoFlow).toBe('column');
    });

    it('applies auto flow dense', () => {
      const { container } = render(<Grid autoFlow="dense">Content</Grid>);
      
      const grid = container.querySelector('.db-grid') as HTMLElement;
      expect(grid.style.gridAutoFlow).toBe('dense');
    });

    it('applies auto flow row dense', () => {
      const { container } = render(<Grid autoFlow="row dense">Content</Grid>);
      
      const grid = container.querySelector('.db-grid') as HTMLElement;
      expect(grid.style.gridAutoFlow).toBe('row dense');
    });
  });

  // Auto columns and rows tests
  describe('Auto Columns and Rows', () => {
    it('applies auto columns', () => {
      const { container } = render(<Grid autoColumns="minmax(100px, 1fr)">Content</Grid>);
      
      const grid = container.querySelector('.db-grid') as HTMLElement;
      expect(grid.style.gridAutoColumns).toBe('minmax(100px, 1fr)');
    });

    it('applies auto rows', () => {
      const { container } = render(<Grid autoRows="150px">Content</Grid>);
      
      const grid = container.querySelector('.db-grid') as HTMLElement;
      expect(grid.style.gridAutoRows).toBe('150px');
    });
  });

  // Justify and align tests
  describe('Justify and Align', () => {
    it('applies justify items stretch by default', () => {
      const { container } = render(<Grid>Content</Grid>);
      
      const grid = container.querySelector('.db-grid');
      expect(grid).not.toHaveClass('db-grid--justify-items-stretch');
    });

    it('applies justify items center', () => {
      const { container } = render(<Grid justifyItems="center">Content</Grid>);
      
      const grid = container.querySelector('.db-grid');
      expect(grid).toHaveClass('db-grid--justify-items-center');
    });

    it('applies align items center', () => {
      const { container } = render(<Grid alignItems="center">Content</Grid>);
      
      const grid = container.querySelector('.db-grid');
      expect(grid).toHaveClass('db-grid--align-items-center');
    });

    it('applies justify content', () => {
      const { container } = render(<Grid justifyContent="space-between">Content</Grid>);
      
      const grid = container.querySelector('.db-grid');
      expect(grid).toHaveClass('db-grid--justify-content-space-between');
    });

    it('applies align content', () => {
      const { container } = render(<Grid alignContent="space-around">Content</Grid>);
      
      const grid = container.querySelector('.db-grid');
      expect(grid).toHaveClass('db-grid--align-content-space-around');
    });
  });

  // Dimension props tests
  describe('Dimension Props', () => {
    it('applies width style', () => {
      const { container } = render(<Grid width="100%">Content</Grid>);
      
      const grid = container.querySelector('.db-grid') as HTMLElement;
      expect(grid.style.width).toBe('100%');
    });

    it('applies height style', () => {
      const { container } = render(<Grid height="500px">Content</Grid>);
      
      const grid = container.querySelector('.db-grid') as HTMLElement;
      expect(grid.style.height).toBe('500px');
    });

    it('converts spacing tokens to pixels', () => {
      const { container } = render(<Grid width="20">Content</Grid>);
      
      const grid = container.querySelector('.db-grid') as HTMLElement;
      expect(grid.style.width).toBe('80px');
    });

    it('applies min/max dimensions', () => {
      const { container } = render(
        <Grid minWidth="200px" maxWidth="1200px" minHeight="300px" maxHeight="800px">
          Content
        </Grid>
      );
      
      const grid = container.querySelector('.db-grid') as HTMLElement;
      expect(grid.style.minWidth).toBe('200px');
      expect(grid.style.maxWidth).toBe('1200px');
      expect(grid.style.minHeight).toBe('300px');
      expect(grid.style.maxHeight).toBe('800px');
    });
  });

  // Inline tests
  describe('Inline', () => {
    it('renders as inline-grid when inline is true', () => {
      const { container } = render(<Grid inline>Content</Grid>);
      
      const grid = container.querySelector('.db-grid-inline');
      expect(grid).toBeInTheDocument();
    });

    it('renders as grid by default', () => {
      const { container } = render(<Grid>Content</Grid>);
      
      const grid = container.querySelector('.db-grid');
      expect(grid).toBeInTheDocument();
      expect(container.querySelector('.db-grid-inline')).not.toBeInTheDocument();
    });
  });

  // IsHidden tests
  describe('IsHidden', () => {
    it('renders null when isHidden is true', () => {
      const { container } = render(<Grid isHidden>Content</Grid>);
      
      expect(container.firstChild).toBeNull();
    });

    it('renders when isHidden is false', () => {
      const { container } = render(<Grid isHidden={false}>Content</Grid>);
      
      const grid = container.querySelector('.db-grid');
      expect(grid).toBeInTheDocument();
    });

    it('handles responsive isHidden', () => {
      const { container } = render(
        <Grid isHidden={{ base: true }}>Content</Grid>
      );
      
      expect(container.firstChild).toBeNull();
    });
  });

  // Element type tests
  describe('Element Type', () => {
    it('renders as custom element when as prop is provided', () => {
      const { container } = render(<Grid as="section">Content</Grid>);
      
      const element = container.firstChild;
      expect(element?.nodeName).toBe('SECTION');
    });

    it('renders as article', () => {
      const { container } = render(<Grid as="article">Content</Grid>);
      
      const element = container.firstChild;
      expect(element?.nodeName).toBe('ARTICLE');
    });
  });

  // ARIA attributes tests
  describe('ARIA Attributes', () => {
    it('forwards aria-label', () => {
      render(<Grid aria-label="Grid layout">Content</Grid>);
      
      const grid = screen.getByLabelText('Grid layout');
      expect(grid).toBeInTheDocument();
    });

    it('forwards role prop', () => {
      const { container } = render(<Grid role="region">Content</Grid>);
      
      const grid = container.querySelector('[role="region"]');
      expect(grid).toBeInTheDocument();
    });
  });

  // Style prop tests
  describe('Style Prop', () => {
    it('merges custom styles with computed styles', () => {
      const { container } = render(
        <Grid style={{ backgroundColor: 'red' }} width="100%">Content</Grid>
      );
      
      const grid = container.querySelector('.db-grid') as HTMLElement;
      expect(grid.style.backgroundColor).toBe('red');
      expect(grid.style.width).toBe('100%');
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(
        <Grid>
          <div>Item 1</div>
          <div>Item 2</div>
        </Grid>
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no accessibility violations with complex layout', async () => {
      const { container } = render(
        <Grid columns={['1fr', '2fr']} gap="4">
          <div>Sidebar</div>
          <div>Main content</div>
        </Grid>
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  // Complex layout tests
  describe('Complex Layouts', () => {
    it('creates a 12-column grid', () => {
      const { container } = render(
        <Grid columns={Array(12).fill('1fr')}>Content</Grid>
      );
      
      const grid = container.querySelector('.db-grid') as HTMLElement;
      expect(grid.style.gridTemplateColumns).toBe(Array(12).fill('1fr').join(' '));
    });

    it('creates a dashboard layout', () => {
      const { container } = render(
        <Grid
          areas={['header header header', 'sidebar main main', 'footer footer footer']}
          columns={['200px', '1fr', '1fr']}
          rows={['60px', '1fr', '40px']}
          gap="4"
        >
          <GridItem gridArea="header">Header</GridItem>
          <GridItem gridArea="sidebar">Sidebar</GridItem>
          <GridItem gridArea="main">Main</GridItem>
          <GridItem gridArea="footer">Footer</GridItem>
        </Grid>
      );
      
      const grid = container.querySelector('.db-grid') as HTMLElement;
      expect(grid.style.gridTemplateAreas).toBe('"header header header" "sidebar main main" "footer footer footer"');
      expect(grid.style.gridTemplateColumns).toBe('200px 1fr 1fr');
      expect(grid.style.gridTemplateRows).toBe('60px 1fr 40px');
    });
  });

  // displayName test
  describe('Component Meta', () => {
    it('has correct displayName', () => {
      expect(Grid.displayName).toBe('Grid');
    });
  });
});

describe('GridItem', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      const { container } = render(<GridItem>Content</GridItem>);
      
      const item = container.querySelector('.db-grid-item');
      expect(item).toBeInTheDocument();
      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      const { container } = render(
        <GridItem className="custom-item">Content</GridItem>
      );
      
      const item = container.querySelector('.db-grid-item');
      expect(item).toHaveClass('custom-item');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLElement>();
      render(<GridItem ref={ref}>Content</GridItem>);
      
      expect(ref.current).toBeInstanceOf(HTMLElement);
      expect(ref.current).toHaveClass('db-grid-item');
    });
  });

  // Grid area tests
  describe('Grid Area', () => {
    it('applies grid area', () => {
      const { container } = render(<GridItem gridArea="header">Content</GridItem>);
      
      const item = container.querySelector('.db-grid-item') as HTMLElement;
      expect(item.style.gridArea).toBe('header');
    });
  });

  // Column position tests
  describe('Column Position', () => {
    it('applies column start', () => {
      const { container } = render(<GridItem colStart={1}>Content</GridItem>);
      
      const item = container.querySelector('.db-grid-item') as HTMLElement;
      expect(item.style.gridColumnStart).toBe('1');
    });

    it('applies column end', () => {
      const { container } = render(<GridItem colEnd={3}>Content</GridItem>);
      
      const item = container.querySelector('.db-grid-item') as HTMLElement;
      expect(item.style.gridColumnEnd).toBe('3');
    });

    it('applies column span', () => {
      const { container } = render(<GridItem colSpan={2}>Content</GridItem>);
      
      const item = container.querySelector('.db-grid-item') as HTMLElement;
      expect(item.style.gridColumn).toBe('span 2');
    });
  });

  // Row position tests
  describe('Row Position', () => {
    it('applies row start', () => {
      const { container } = render(<GridItem rowStart={1}>Content</GridItem>);
      
      const item = container.querySelector('.db-grid-item') as HTMLElement;
      expect(item.style.gridRowStart).toBe('1');
    });

    it('applies row end', () => {
      const { container } = render(<GridItem rowEnd={4}>Content</GridItem>);
      
      const item = container.querySelector('.db-grid-item') as HTMLElement;
      expect(item.style.gridRowEnd).toBe('4');
    });

    it('applies row span', () => {
      const { container } = render(<GridItem rowSpan={3}>Content</GridItem>);
      
      const item = container.querySelector('.db-grid-item') as HTMLElement;
      expect(item.style.gridRow).toBe('span 3');
    });
  });

  // Justify and align self tests
  describe('Justify and Align Self', () => {
    it('applies justify self', () => {
      const { container } = render(<GridItem justifySelf="center">Content</GridItem>);
      
      const item = container.querySelector('.db-grid-item') as HTMLElement;
      expect(item.style.justifySelf).toBe('center');
    });

    it('applies align self', () => {
      const { container } = render(<GridItem alignSelf="end">Content</GridItem>);
      
      const item = container.querySelector('.db-grid-item') as HTMLElement;
      expect(item.style.alignSelf).toBe('end');
    });
  });

  // Dimension props tests
  describe('Dimension Props', () => {
    it('applies width and height', () => {
      const { container } = render(
        <GridItem width="200px" height="150px">Content</GridItem>
      );
      
      const item = container.querySelector('.db-grid-item') as HTMLElement;
      expect(item.style.width).toBe('200px');
      expect(item.style.height).toBe('150px');
    });

    it('applies min/max dimensions', () => {
      const { container } = render(
        <GridItem minWidth="100px" maxWidth="300px">Content</GridItem>
      );
      
      const item = container.querySelector('.db-grid-item') as HTMLElement;
      expect(item.style.minWidth).toBe('100px');
      expect(item.style.maxWidth).toBe('300px');
    });
  });

  // IsHidden tests
  describe('IsHidden', () => {
    it('renders null when isHidden is true', () => {
      const { container } = render(<GridItem isHidden>Content</GridItem>);
      
      expect(container.firstChild).toBeNull();
    });

    it('renders when isHidden is false', () => {
      const { container } = render(<GridItem isHidden={false}>Content</GridItem>);
      
      const item = container.querySelector('.db-grid-item');
      expect(item).toBeInTheDocument();
    });
  });

  // Element type tests
  describe('Element Type', () => {
    it('renders as custom element', () => {
      const { container } = render(<GridItem as="section">Content</GridItem>);
      
      const element = container.firstChild;
      expect(element?.nodeName).toBe('SECTION');
    });
  });

  // Complex positioning tests
  describe('Complex Positioning', () => {
    it('spans multiple columns and rows', () => {
      const { container } = render(
        <GridItem colSpan={3} rowSpan={2}>Content</GridItem>
      );
      
      const item = container.querySelector('.db-grid-item') as HTMLElement;
      expect(item.style.gridColumn).toBe('span 3');
      expect(item.style.gridRow).toBe('span 2');
    });

    it('uses explicit column and row positioning', () => {
      const { container } = render(
        <GridItem colStart={2} colEnd={4} rowStart={1} rowEnd={3}>
          Content
        </GridItem>
      );
      
      const item = container.querySelector('.db-grid-item') as HTMLElement;
      expect(item.style.gridColumnStart).toBe('2');
      expect(item.style.gridColumnEnd).toBe('4');
      expect(item.style.gridRowStart).toBe('1');
      expect(item.style.gridRowEnd).toBe('3');
    });
  });

  // displayName test
  describe('Component Meta', () => {
    it('has correct displayName', () => {
      expect(GridItem.displayName).toBe('GridItem');
    });
  });
});




