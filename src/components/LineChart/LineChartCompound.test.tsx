import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';
import {
  LineChartHeader,
  LineChartLegend,
  LineChartAxis,
  LineChartTooltip,
  LineChartGrid,
  LineChartContent,
  LineChartContainer,
} from './LineChartCompound';

expect.extend(toHaveNoViolations);

describe('LineChartCompound Components', () => {
  describe('LineChartHeader', () => {
    it('renders with title', () => {
      render(<LineChartHeader title="Sales Chart" />);
      
      expect(screen.getByText('Sales Chart')).toBeInTheDocument();
      expect(screen.getByText('Sales Chart').tagName).toBe('H3');
    });

    it('renders with subtitle', () => {
      render(<LineChartHeader subtitle="Monthly revenue data" />);
      
      expect(screen.getByText('Monthly revenue data')).toBeInTheDocument();
      expect(screen.getByText('Monthly revenue data').tagName).toBe('P');
    });

    it('renders with both title and subtitle', () => {
      render(
        <LineChartHeader 
          title="Sales Chart" 
          subtitle="Monthly revenue data" 
        />
      );
      
      expect(screen.getByText('Sales Chart')).toBeInTheDocument();
      expect(screen.getByText('Monthly revenue data')).toBeInTheDocument();
    });

    it('renders children', () => {
      render(
        <LineChartHeader>
          <div data-testid="custom-content">Custom Header Content</div>
        </LineChartHeader>
      );
      
      expect(screen.getByTestId('custom-content')).toBeInTheDocument();
    });

    it('renders with title and children', () => {
      render(
        <LineChartHeader title="Chart Title">
          <div data-testid="actions">Actions</div>
        </LineChartHeader>
      );
      
      expect(screen.getByText('Chart Title')).toBeInTheDocument();
      expect(screen.getByTestId('actions')).toBeInTheDocument();
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<LineChartHeader ref={ref} title="Test" />);
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('applies custom className', () => {
      const { container } = render(
        <LineChartHeader title="Test" className="custom-header" />
      );
      
      const header = container.querySelector('.db-linechart__header');
      expect(header).toHaveClass('custom-header');
    });

    it('forwards additional props', () => {
      render(
        <LineChartHeader 
          title="Test" 
          data-testid="header" 
          role="banner"
        />
      );
      
      const header = screen.getByTestId('header');
      expect(header).toHaveAttribute('role', 'banner');
    });

    it('has correct displayName', () => {
      expect(LineChartHeader.displayName).toBe('LineChartHeader');
    });

    it('should not have accessibility violations', async () => {
      const { container } = render(
        <LineChartHeader 
          title="Chart Title" 
          subtitle="Chart Subtitle" 
        />
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('LineChartLegend', () => {
    const legendItems = [
      { label: 'Series 1', color: '#FF6B6B', symbol: 'line' as const },
      { label: 'Series 2', color: '#4ECDC4', symbol: 'circle' as const },
      { label: 'Series 3', color: '#45B7D1', symbol: 'square' as const },
    ];

    it('renders legend items', () => {
      render(<LineChartLegend items={legendItems} />);
      
      expect(screen.getByText('Series 1')).toBeInTheDocument();
      expect(screen.getByText('Series 2')).toBeInTheDocument();
      expect(screen.getByText('Series 3')).toBeInTheDocument();
    });

    it('applies item colors as background', () => {
      const { container } = render(<LineChartLegend items={legendItems} />);
      
      const symbols = container.querySelectorAll('.db-linechart__legend-symbol');
      expect(symbols[0]).toHaveStyle({ backgroundColor: '#FF6B6B' });
      expect(symbols[1]).toHaveStyle({ backgroundColor: '#4ECDC4' });
      expect(symbols[2]).toHaveStyle({ backgroundColor: '#45B7D1' });
    });

    it('applies correct symbol classes', () => {
      const { container } = render(<LineChartLegend items={legendItems} />);
      
      const symbols = container.querySelectorAll('.db-linechart__legend-symbol');
      expect(symbols[0]).toHaveClass('db-linechart__legend-symbol--line');
      expect(symbols[1]).toHaveClass('db-linechart__legend-symbol--circle');
      expect(symbols[2]).toHaveClass('db-linechart__legend-symbol--square');
    });

    it('uses line symbol by default', () => {
      const itemsWithoutSymbol = [
        { label: 'Default', color: '#000000' },
      ];
      
      const { container } = render(<LineChartLegend items={itemsWithoutSymbol} />);
      
      const symbol = container.querySelector('.db-linechart__legend-symbol');
      expect(symbol).toHaveClass('db-linechart__legend-symbol--line');
    });

    it('renders with bottom position by default', () => {
      const { container } = render(<LineChartLegend items={legendItems} />);
      
      const legend = container.querySelector('.db-linechart__legend');
      expect(legend).toHaveClass('db-linechart__legend--bottom');
    });

    it('renders with top position', () => {
      const { container } = render(
        <LineChartLegend items={legendItems} position="top" />
      );
      
      const legend = container.querySelector('.db-linechart__legend');
      expect(legend).toHaveClass('db-linechart__legend--top');
    });

    it('renders with left position', () => {
      const { container } = render(
        <LineChartLegend items={legendItems} position="left" />
      );
      
      const legend = container.querySelector('.db-linechart__legend');
      expect(legend).toHaveClass('db-linechart__legend--left');
    });

    it('renders with right position', () => {
      const { container } = render(
        <LineChartLegend items={legendItems} position="right" />
      );
      
      const legend = container.querySelector('.db-linechart__legend');
      expect(legend).toHaveClass('db-linechart__legend--right');
    });

    it('handles empty items array', () => {
      const { container } = render(<LineChartLegend items={[]} />);
      
      const legend = container.querySelector('.db-linechart__legend');
      expect(legend).toBeInTheDocument();
      expect(legend?.children.length).toBe(0);
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<LineChartLegend ref={ref} items={legendItems} />);
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('applies custom className', () => {
      const { container } = render(
        <LineChartLegend items={legendItems} className="custom-legend" />
      );
      
      const legend = container.querySelector('.db-linechart__legend');
      expect(legend).toHaveClass('custom-legend');
    });

    it('has correct displayName', () => {
      expect(LineChartLegend.displayName).toBe('LineChartLegend');
    });

    it('should not have accessibility violations', async () => {
      const { container } = render(<LineChartLegend items={legendItems} />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('LineChartAxis', () => {
    it('renders x-axis', () => {
      const { container } = render(<LineChartAxis type="x" />);
      
      const axis = container.querySelector('.db-linechart__axis-container--x');
      expect(axis).toBeInTheDocument();
    });

    it('renders y-axis', () => {
      const { container } = render(<LineChartAxis type="y" />);
      
      const axis = container.querySelector('.db-linechart__axis-container--y');
      expect(axis).toBeInTheDocument();
    });

    it('renders children', () => {
      render(
        <LineChartAxis type="x">
          <div data-testid="custom-axis">Custom Axis</div>
        </LineChartAxis>
      );
      
      expect(screen.getByTestId('custom-axis')).toBeInTheDocument();
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<LineChartAxis ref={ref} type="x" />);
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('applies custom className', () => {
      const { container } = render(
        <LineChartAxis type="x" className="custom-axis" />
      );
      
      const axis = container.querySelector('.db-linechart__axis-container');
      expect(axis).toHaveClass('custom-axis');
    });

    it('has correct displayName', () => {
      expect(LineChartAxis.displayName).toBe('LineChartAxis');
    });

    it('should not have accessibility violations', async () => {
      const { container } = render(<LineChartAxis type="x" />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('LineChartTooltip', () => {
    it('renders with default variant', () => {
      const { container } = render(<LineChartTooltip />);
      
      const tooltip = container.querySelector('.db-linechart__tooltip-compound');
      expect(tooltip).toHaveClass('db-linechart__tooltip-compound--default');
    });

    it('renders with compact variant', () => {
      const { container } = render(<LineChartTooltip variant="compact" />);
      
      const tooltip = container.querySelector('.db-linechart__tooltip-compound');
      expect(tooltip).toHaveClass('db-linechart__tooltip-compound--compact');
    });

    it('renders with detailed variant', () => {
      const { container } = render(<LineChartTooltip variant="detailed" />);
      
      const tooltip = container.querySelector('.db-linechart__tooltip-compound');
      expect(tooltip).toHaveClass('db-linechart__tooltip-compound--detailed');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<LineChartTooltip ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('applies custom className', () => {
      const { container } = render(
        <LineChartTooltip className="custom-tooltip" />
      );
      
      const tooltip = container.querySelector('.db-linechart__tooltip-compound');
      expect(tooltip).toHaveClass('custom-tooltip');
    });

    it('forwards additional props', () => {
      const { container } = render(
        <LineChartTooltip data-testid="tooltip" />
      );
      
      const tooltip = container.querySelector('[data-testid="tooltip"]');
      expect(tooltip).toBeInTheDocument();
    });

    it('has correct displayName', () => {
      expect(LineChartTooltip.displayName).toBe('LineChartTooltip');
    });

    it('should not have accessibility violations', async () => {
      const { container } = render(<LineChartTooltip />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('LineChartGrid', () => {
    it('renders with both grid type by default', () => {
      const { container } = render(<LineChartGrid />);
      
      const grid = container.querySelector('.db-linechart__grid-compound');
      expect(grid).toHaveClass('db-linechart__grid-compound--both');
    });

    it('renders with horizontal grid type', () => {
      const { container } = render(<LineChartGrid type="horizontal" />);
      
      const grid = container.querySelector('.db-linechart__grid-compound');
      expect(grid).toHaveClass('db-linechart__grid-compound--horizontal');
    });

    it('renders with vertical grid type', () => {
      const { container } = render(<LineChartGrid type="vertical" />);
      
      const grid = container.querySelector('.db-linechart__grid-compound');
      expect(grid).toHaveClass('db-linechart__grid-compound--vertical');
    });

    it('applies custom strokeDasharray', () => {
      const { container } = render(<LineChartGrid strokeDasharray="4,4" />);
      
      const grid = container.querySelector('.db-linechart__grid-compound') as HTMLElement;
      expect(grid.style.getPropertyValue('--grid-stroke-dasharray')).toBe('4,4');
    });

    it('applies custom opacity', () => {
      const { container } = render(<LineChartGrid opacity={0.5} />);
      
      const grid = container.querySelector('.db-linechart__grid-compound') as HTMLElement;
      expect(grid.style.getPropertyValue('--grid-opacity')).toBe('0.5');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<LineChartGrid ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('applies custom className', () => {
      const { container } = render(
        <LineChartGrid className="custom-grid" />
      );
      
      const grid = container.querySelector('.db-linechart__grid-compound');
      expect(grid).toHaveClass('custom-grid');
    });

    it('has correct displayName', () => {
      expect(LineChartGrid.displayName).toBe('LineChartGrid');
    });

    it('should not have accessibility violations', async () => {
      const { container } = render(<LineChartGrid />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('LineChartContent', () => {
    it('renders children', () => {
      render(
        <LineChartContent>
          <div data-testid="chart-content">Chart Content</div>
        </LineChartContent>
      );
      
      expect(screen.getByTestId('chart-content')).toBeInTheDocument();
    });

    it('renders with correct class', () => {
      const { container } = render(<LineChartContent />);
      
      const content = container.querySelector('.db-linechart__content');
      expect(content).toBeInTheDocument();
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<LineChartContent ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('applies custom className', () => {
      const { container } = render(
        <LineChartContent className="custom-content" />
      );
      
      const content = container.querySelector('.db-linechart__content');
      expect(content).toHaveClass('custom-content');
    });

    it('forwards additional props', () => {
      render(
        <LineChartContent data-testid="content" role="region">
          Content
        </LineChartContent>
      );
      
      const content = screen.getByTestId('content');
      expect(content).toHaveAttribute('role', 'region');
    });

    it('has correct displayName', () => {
      expect(LineChartContent.displayName).toBe('LineChartContent');
    });

    it('should not have accessibility violations', async () => {
      const { container } = render(
        <LineChartContent>
          <div>Content</div>
        </LineChartContent>
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('LineChartContainer', () => {
    it('renders with default variant', () => {
      const { container } = render(<LineChartContainer />);
      
      const chartContainer = container.querySelector('.db-linechart__container');
      expect(chartContainer).toHaveClass('db-linechart__container--default');
    });

    it('renders with card variant', () => {
      const { container } = render(<LineChartContainer variant="card" />);
      
      const chartContainer = container.querySelector('.db-linechart__container');
      expect(chartContainer).toHaveClass('db-linechart__container--card');
    });

    it('renders with minimal variant', () => {
      const { container } = render(<LineChartContainer variant="minimal" />);
      
      const chartContainer = container.querySelector('.db-linechart__container');
      expect(chartContainer).toHaveClass('db-linechart__container--minimal');
    });

    it('renders children', () => {
      render(
        <LineChartContainer>
          <div data-testid="chart-children">Chart Components</div>
        </LineChartContainer>
      );
      
      expect(screen.getByTestId('chart-children')).toBeInTheDocument();
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<LineChartContainer ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('applies custom className', () => {
      const { container } = render(
        <LineChartContainer className="custom-container" />
      );
      
      const chartContainer = container.querySelector('.db-linechart__container');
      expect(chartContainer).toHaveClass('custom-container');
    });

    it('forwards additional props', () => {
      render(
        <LineChartContainer data-testid="container" role="region">
          Container
        </LineChartContainer>
      );
      
      const chartContainer = screen.getByTestId('container');
      expect(chartContainer).toHaveAttribute('role', 'region');
    });

    it('has correct displayName', () => {
      expect(LineChartContainer.displayName).toBe('LineChartContainer');
    });

    it('should not have accessibility violations', async () => {
      const { container } = render(
        <LineChartContainer>
          <div>Container Content</div>
        </LineChartContainer>
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Compound Component Composition', () => {
    it('all components can be composed together', () => {
      const legendItems = [
        { label: 'Data', color: '#FF6B6B' },
      ];

      render(
        <LineChartContainer variant="card">
          <LineChartHeader 
            title="Sales Data" 
            subtitle="Q4 2024"
          />
          <LineChartLegend items={legendItems} position="top" />
          <LineChartContent>
            <LineChartGrid type="both" />
            <LineChartAxis type="x" />
            <LineChartAxis type="y" />
          </LineChartContent>
          <LineChartTooltip variant="detailed" />
        </LineChartContainer>
      );

      expect(screen.getByText('Sales Data')).toBeInTheDocument();
      expect(screen.getByText('Q4 2024')).toBeInTheDocument();
      expect(screen.getByText('Data')).toBeInTheDocument();
    });

    it('components work independently', () => {
      const { rerender } = render(<LineChartHeader title="Test 1" />);
      expect(screen.getByText('Test 1')).toBeInTheDocument();

      rerender(<LineChartLegend items={[{ label: 'Test 2', color: '#000' }]} />);
      expect(screen.getByText('Test 2')).toBeInTheDocument();

      rerender(<LineChartContent><div>Test 3</div></LineChartContent>);
      expect(screen.getByText('Test 3')).toBeInTheDocument();
    });
  });
});

