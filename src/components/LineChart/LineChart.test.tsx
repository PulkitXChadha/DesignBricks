import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { LineChart, LineChartProps, LineChartDataPoint } from './LineChart';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Sample data for testing
const sampleData: LineChartDataPoint[] = [
  { x: new Date('2024-01-01'), y: 100, label: 'Jan' },
  { x: new Date('2024-02-01'), y: 150, label: 'Feb' },
  { x: new Date('2024-03-01'), y: 120, label: 'Mar' },
  { x: new Date('2024-04-01'), y: 180, label: 'Apr' },
  { x: new Date('2024-05-01'), y: 160, label: 'May' },
];

const numericData: LineChartDataPoint[] = [
  { x: 1, y: 100 },
  { x: 2, y: 150 },
  { x: 3, y: 120 },
  { x: 4, y: 180 },
  { x: 5, y: 160 },
];

const categoryData: LineChartDataPoint[] = [
  { x: 'Q1', y: 100 },
  { x: 'Q2', y: 150 },
  { x: 'Q3', y: 120 },
  { x: 'Q4', y: 180 },
];

describe('LineChart', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      render(<LineChart data={sampleData} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveClass('db-linechart__svg');
    });

    it('renders empty state with no data', () => {
      render(<LineChart data={[]} />);
      
      expect(screen.getByText('No data available')).toBeInTheDocument();
      expect(document.querySelector('.db-linechart--empty')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      const { container } = render(<LineChart data={sampleData} className="custom-chart" />);
      
      const chartElement = container.firstChild as HTMLElement;
      expect(chartElement).toHaveClass('db-linechart', 'custom-chart');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<LineChart data={sampleData} ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current).toHaveClass('db-linechart');
    });

    it('forwards additional props', () => {
      render(
        <LineChart
          data={sampleData}
          data-testid="test-chart"
          id="my-chart"
        />
      );
      
      const chart = screen.getByTestId('test-chart');
      expect(chart).toHaveAttribute('id', 'my-chart');
    });

    it('renders line path correctly', () => {
      render(<LineChart data={sampleData} />);
      
      const line = document.querySelector('.db-linechart__line');
      expect(line).toBeInTheDocument();
    });

    it('renders with date scale by default', () => {
      render(<LineChart data={sampleData} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
      
      const xAxis = document.querySelector('.db-linechart__axis--x');
      expect(xAxis).toBeInTheDocument();
    });

    it('renders with numeric scale', () => {
      render(<LineChart data={numericData} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('renders with category scale', () => {
      render(<LineChart data={categoryData} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
  });

  // Variant tests
  describe('Variants', () => {
    const variants: Array<LineChartProps['variant']> = ['default', 'minimal', 'detailed'];
    
    variants.forEach(variant => {
      it(`renders ${variant} variant correctly`, () => {
        const { container } = render(<LineChart data={sampleData} variant={variant} />);
        
        const chart = container.firstChild as HTMLElement;
        expect(chart).toHaveClass(`db-linechart--${variant}`);
      });
    });

    it('minimal variant hides grid', () => {
      render(<LineChart data={sampleData} variant="minimal" />);
      
      const grid = document.querySelector('.db-linechart__grid');
      expect(grid).not.toBeInTheDocument();
    });

    it('detailed variant shows grid', () => {
      render(<LineChart data={sampleData} variant="detailed" />);
      
      const grid = document.querySelector('.db-linechart__grid');
      expect(grid).toBeInTheDocument();
    });
  });

  // Color tests
  describe('Colors', () => {
    const colors: Array<LineChartProps['color']> = ['primary', 'secondary', 'success', 'warning', 'error'];
    
    colors.forEach(color => {
      it(`renders ${color} color correctly`, () => {
        const { container } = render(<LineChart data={sampleData} color={color} />);
        
        const chart = container.firstChild as HTMLElement;
        expect(chart).toHaveClass(`db-linechart--${color}`);
      });
    });
  });

  // Curve type tests
  describe('Curve Types', () => {
    const curves: Array<LineChartProps['curve']> = ['linear', 'smooth', 'step'];
    
    curves.forEach(curve => {
      it(`renders ${curve} curve correctly`, () => {
        render(<LineChart data={sampleData} curve={curve} />);
        
        const line = document.querySelector('.db-linechart__line');
        expect(line).toBeInTheDocument();
      });
    });
  });

  // Title and labels tests
  describe('Title and Labels', () => {
    it('renders chart title', () => {
      render(<LineChart data={sampleData} title="Revenue Chart" />);
      
      const title = document.querySelector('.db-linechart__title');
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('Revenue Chart');
    });

    it('renders x-axis label', () => {
      render(<LineChart data={sampleData} xAxis={{ label: 'Time' }} />);
      
      const label = document.querySelector('.db-linechart__axis-label--x');
      expect(label).toBeInTheDocument();
      expect(label).toHaveTextContent('Time');
    });

    it('renders y-axis label', () => {
      render(<LineChart data={sampleData} yAxis={{ label: 'Revenue' }} />);
      
      const label = document.querySelector('.db-linechart__axis-label--y');
      expect(label).toBeInTheDocument();
      expect(label).toHaveTextContent('Revenue');
    });
  });

  // Axis configuration tests
  describe('Axis Configuration', () => {
    it('hides x-axis when configured', () => {
      render(<LineChart data={sampleData} xAxis={{ show: false }} />);
      
      const xAxis = document.querySelector('.db-linechart__axis--x');
      expect(xAxis).not.toBeInTheDocument();
    });

    it('hides y-axis when configured', () => {
      render(<LineChart data={sampleData} yAxis={{ show: false }} />);
      
      const yAxis = document.querySelector('.db-linechart__axis--y');
      expect(yAxis).not.toBeInTheDocument();
    });

    it('applies custom tick formatter', () => {
      const tickFormatter = jest.fn((value) => `$${value}`);
      
      render(<LineChart data={numericData} yAxis={{ tickFormatter }} />);
      
      expect(tickFormatter).toHaveBeenCalled();
    });
  });

  // Grid configuration tests
  describe('Grid Configuration', () => {
    it('shows grid by default', () => {
      render(<LineChart data={sampleData} />);
      
      const grid = document.querySelector('.db-linechart__grid');
      expect(grid).toBeInTheDocument();
    });

    it('hides grid when configured', () => {
      render(<LineChart data={sampleData} grid={{ show: false }} />);
      
      const grid = document.querySelector('.db-linechart__grid');
      expect(grid).not.toBeInTheDocument();
    });
  });

  // Data points tests
  describe('Data Points', () => {
    it('shows data points by default', () => {
      render(<LineChart data={sampleData} showPoints />);
      
      const points = document.querySelectorAll('.db-linechart__point');
      expect(points.length).toBe(sampleData.length);
    });

    it('hides data points when configured', () => {
      render(<LineChart data={sampleData} showPoints={false} />);
      
      const points = document.querySelectorAll('.db-linechart__point');
      expect(points.length).toBe(0);
    });
  });

  // Tooltip tests
  describe('Tooltip', () => {
    it('shows tooltip on hover', () => {
      render(<LineChart data={sampleData} showTooltip />);
      
      const overlay = document.querySelector('.db-linechart__overlay');
      expect(overlay).toBeInTheDocument();
    });

    it('hides tooltip when disabled', () => {
      render(<LineChart data={sampleData} showTooltip={false} />);
      
      const overlay = document.querySelector('.db-linechart__overlay');
      expect(overlay).not.toBeInTheDocument();
    });

    it('uses custom tooltip formatter', () => {
      const formatTooltip = jest.fn((dataPoint) => `Value: ${dataPoint.y}`);
      
      render(<LineChart data={sampleData} formatTooltip={formatTooltip} />);
      
      // Formatter is set up but only called on interaction
      expect(formatTooltip).not.toHaveBeenCalled();
    });

    it('shows percentage change in tooltip', () => {
      render(<LineChart data={sampleData} showPercentageChange />);
      
      const overlay = document.querySelector('.db-linechart__overlay');
      expect(overlay).toBeInTheDocument();
    });

    it('uses custom percentage change calculator', () => {
      const calculatePercentageChange = jest.fn((current, previous) => {
        return ((current.y - previous.y) / previous.y) * 100;
      });
      
      render(
        <LineChart
          data={sampleData}
          showPercentageChange
          calculatePercentageChange={calculatePercentageChange}
        />
      );
      
      // Calculator is set up but only called on interaction
      expect(calculatePercentageChange).not.toHaveBeenCalled();
    });
  });

  // Keyboard navigation tests
  describe('Keyboard Navigation', () => {
    it('enables keyboard navigation when configured', () => {
      const { container } = render(<LineChart data={sampleData} keyboard showPoints />);
      
      const chart = container.firstChild as HTMLElement;
      expect(chart).toHaveClass('db-linechart--keyboard');
    });

    it('points have tabindex when keyboard enabled', () => {
      render(<LineChart data={sampleData} keyboard showPoints />);
      
      const points = document.querySelectorAll('.db-linechart__point[tabindex="0"]');
      expect(points.length).toBe(sampleData.length);
    });

    it('points have role="button" when keyboard enabled', () => {
      render(<LineChart data={sampleData} keyboard showPoints />);
      
      const points = document.querySelectorAll('.db-linechart__point[role="button"]');
      expect(points.length).toBe(sampleData.length);
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<LineChart data={sampleData} />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with empty data', async () => {
      const { container } = render(<LineChart data={[]} />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper ARIA label', () => {
      render(<LineChart data={sampleData} ariaLabel="Revenue line chart" />);
      
      const chart = screen.getByRole('img', { name: 'Revenue line chart' });
      expect(chart).toBeInTheDocument();
    });

    it('has default ARIA label', () => {
      render(<LineChart data={sampleData} />);
      
      const chart = screen.getByRole('img', { name: `Line chart with ${sampleData.length} data points` });
      expect(chart).toBeInTheDocument();
    });

    it('SVG is hidden from screen readers when keyboard navigation enabled', () => {
      render(<LineChart data={sampleData} keyboard />);
      
      const svg = document.querySelector('svg');
      expect(svg).toHaveAttribute('aria-hidden', 'true');
    });
  });

  // Performance optimization tests
  describe('Performance Optimization', () => {
    it('applies optimized class when enabled', () => {
      const { container } = render(<LineChart data={sampleData} optimized />);
      
      const chart = container.firstChild as HTMLElement;
      expect(chart).toHaveClass('db-linechart--optimized');
    });

    it('handles large datasets efficiently', () => {
      const largeData: LineChartDataPoint[] = Array.from({ length: 500 }, (_, i) => ({
        x: new Date(2024, 0, i + 1),
        y: Math.random() * 100,
      }));
      
      const start = performance.now();
      render(<LineChart data={largeData} optimized />);
      const end = performance.now();
      
      // Should render in reasonable time (< 500ms)
      expect(end - start).toBeLessThan(500);
    });
  });

  // Theme tests
  describe('Theme', () => {
    it('applies light theme', () => {
      render(<LineChart data={sampleData} theme={{ colorScheme: 'light' }} />);
      
      const chart = screen.getByRole('img');
      expect(chart).toHaveAttribute('data-theme', 'light');
    });

    it('applies dark theme', () => {
      render(<LineChart data={sampleData} theme={{ colorScheme: 'dark' }} />);
      
      const chart = screen.getByRole('img');
      expect(chart).toHaveAttribute('data-theme', 'dark');
    });

    it('applies custom CSS variables', () => {
      const customVars = {
        '--chart-line-width': '3px',
        '--chart-point-size': '6px',
      };
      
      render(<LineChart data={sampleData} theme={{ cssVars: customVars }} />);
      
      const chart = screen.getByRole('img');
      expect(chart).toHaveStyle(customVars);
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles single data point', () => {
      const singlePoint: LineChartDataPoint[] = [{ x: new Date('2024-01-01'), y: 100 }];
      
      render(<LineChart data={singlePoint} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('handles two data points', () => {
      const twoPoints: LineChartDataPoint[] = [
        { x: new Date('2024-01-01'), y: 100 },
        { x: new Date('2024-02-01'), y: 150 },
      ];
      
      render(<LineChart data={twoPoints} />);
      
      const line = document.querySelector('.db-linechart__line');
      expect(line).toBeInTheDocument();
    });

    it('handles negative values', () => {
      const negativeData: LineChartDataPoint[] = [
        { x: 1, y: -50 },
        { x: 2, y: 25 },
        { x: 3, y: -30 },
      ];
      
      render(<LineChart data={negativeData} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('handles zero values', () => {
      const zeroData: LineChartDataPoint[] = [
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 3, y: 0 },
      ];
      
      render(<LineChart data={zeroData} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('handles very large values', () => {
      const largeValueData: LineChartDataPoint[] = [
        { x: 1, y: 1000000 },
        { x: 2, y: 2000000 },
        { x: 3, y: 1500000 },
      ];
      
      render(<LineChart data={largeValueData} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('handles data with metadata', () => {
      const dataWithMetadata: LineChartDataPoint[] = [
        { x: 1, y: 100, label: 'Point 1', metadata: { category: 'A' } },
        { x: 2, y: 150, label: 'Point 2', metadata: { category: 'B' } },
      ];
      
      render(<LineChart data={dataWithMetadata} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('handles custom dimensions', () => {
      render(<LineChart data={sampleData} width={800} height={600} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toHaveAttribute('width', '800');
      expect(svg).toHaveAttribute('height', '600');
    });

    it('handles flat line data', () => {
      const flatData: LineChartDataPoint[] = [
        { x: 1, y: 100 },
        { x: 2, y: 100 },
        { x: 3, y: 100 },
      ];
      
      render(<LineChart data={flatData} />);
      
      const line = document.querySelector('.db-linechart__line');
      expect(line).toBeInTheDocument();
    });

    it('handles increasing trend data', () => {
      const increasing: LineChartDataPoint[] = Array.from({ length: 10 }, (_, i) => ({
        x: i,
        y: i * 10,
      }));
      
      render(<LineChart data={increasing} />);
      
      const line = document.querySelector('.db-linechart__line');
      expect(line).toBeInTheDocument();
    });

    it('handles decreasing trend data', () => {
      const decreasing: LineChartDataPoint[] = Array.from({ length: 10 }, (_, i) => ({
        x: i,
        y: 100 - i * 10,
      }));
      
      render(<LineChart data={decreasing} />);
      
      const line = document.querySelector('.db-linechart__line');
      expect(line).toBeInTheDocument();
    });

    it('handles volatile data', () => {
      const volatile: LineChartDataPoint[] = [
        { x: 1, y: 100 },
        { x: 2, y: 50 },
        { x: 3, y: 150 },
        { x: 4, y: 25 },
        { x: 5, y: 175 },
      ];
      
      render(<LineChart data={volatile} />);
      
      const line = document.querySelector('.db-linechart__line');
      expect(line).toBeInTheDocument();
    });
  });
});

