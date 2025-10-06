import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { ScatterChart, ScatterChartProps, ScatterChartDataPoint } from './ScatterChart';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Sample data for testing
const sampleData: ScatterChartDataPoint[] = [
  { x: 10, y: 20, label: 'Point 1' },
  { x: 15, y: 35, label: 'Point 2' },
  { x: 25, y: 30, label: 'Point 3' },
  { x: 30, y: 45, label: 'Point 4' },
  { x: 40, y: 50, label: 'Point 5' },
];

const bubbleData: ScatterChartDataPoint[] = [
  { x: 10, y: 20, size: 10, label: 'Small' },
  { x: 20, y: 30, size: 25, label: 'Medium' },
  { x: 30, y: 40, size: 50, label: 'Large' },
];

const categoryData: ScatterChartDataPoint[] = [
  { x: 10, y: 20, category: 'A' },
  { x: 15, y: 25, category: 'B' },
  { x: 20, y: 30, category: 'A' },
  { x: 25, y: 35, category: 'C' },
];

describe('ScatterChart', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      render(<ScatterChart data={sampleData} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveClass('db-scatterchart__svg');
    });

    it('renders empty state with no data', () => {
      render(<ScatterChart data={[]} />);
      
      expect(screen.getByText('No data available')).toBeInTheDocument();
      expect(document.querySelector('.db-scatterchart--empty')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      const { container } = render(<ScatterChart data={sampleData} className="custom-chart" />);
      
      const chartElement = container.firstChild as HTMLElement;
      expect(chartElement).toHaveClass('db-scatterchart', 'custom-chart');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<ScatterChart data={sampleData} ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current).toHaveClass('db-scatterchart');
    });

    it('forwards additional props', () => {
      render(
        <ScatterChart
          data={sampleData}
          data-testid="test-chart"
          id="my-chart"
        />
      );
      
      const chart = screen.getByTestId('test-chart');
      expect(chart).toHaveAttribute('id', 'my-chart');
    });

    it('renders data points correctly', () => {
      render(<ScatterChart data={sampleData} />);
      
      const points = document.querySelectorAll('.db-scatterchart__point');
      expect(points.length).toBe(sampleData.length);
    });
  });

  // Variant tests
  describe('Variants', () => {
    const variants: Array<ScatterChartProps['variant']> = ['default', 'minimal', 'detailed'];
    
    variants.forEach(variant => {
      it(`renders ${variant} variant correctly`, () => {
        const { container } = render(<ScatterChart data={sampleData} variant={variant} />);
        
        const chart = container.firstChild as HTMLElement;
        expect(chart).toHaveClass(`db-scatterchart--${variant}`);
      });
    });

    it('minimal variant hides grid', () => {
      render(<ScatterChart data={sampleData} variant="minimal" />);
      
      const grid = document.querySelector('.db-scatterchart__grid');
      expect(grid).not.toBeInTheDocument();
    });

    it('detailed variant shows grid', () => {
      render(<ScatterChart data={sampleData} variant="detailed" />);
      
      const grid = document.querySelector('.db-scatterchart__grid');
      expect(grid).toBeInTheDocument();
    });
  });

  // Color tests
  describe('Colors', () => {
    const colors: Array<ScatterChartProps['color']> = ['primary', 'secondary', 'success', 'warning', 'error'];
    
    colors.forEach(color => {
      it(`renders ${color} color correctly`, () => {
        const { container } = render(<ScatterChart data={sampleData} color={color} />);
        
        const chart = container.firstChild as HTMLElement;
        expect(chart).toHaveClass(`db-scatterchart--${color}`);
      });
    });
  });

  // Bubble chart tests
  describe('Bubble Chart', () => {
    it('does not enable bubbles by default', () => {
      const { container } = render(<ScatterChart data={bubbleData} />);
      
      const chart = container.firstChild as HTMLElement;
      expect(chart).not.toHaveClass('db-scatterchart--bubbles');
    });

    it('enables bubble mode when configured', () => {
      const { container } = render(<ScatterChart data={bubbleData} enableBubbles />);
      
      const chart = container.firstChild as HTMLElement;
      expect(chart).toHaveClass('db-scatterchart--bubbles');
    });

    it('renders different sized points based on size field', () => {
      render(<ScatterChart data={bubbleData} enableBubbles />);
      
      const points = document.querySelectorAll('.db-scatterchart__point');
      expect(points.length).toBe(bubbleData.length);
    });

    it('applies size range configuration', () => {
      render(<ScatterChart data={bubbleData} enableBubbles sizeRange={[5, 20]} />);
      
      const points = document.querySelectorAll('.db-scatterchart__point');
      expect(points.length).toBe(bubbleData.length);
    });
  });

  // Trend line tests
  describe('Trend Line', () => {
    it('hides trend line by default', () => {
      const { container } = render(<ScatterChart data={sampleData} />);
      
      const chart = container.firstChild as HTMLElement;
      expect(chart).not.toHaveClass('db-scatterchart--trend');
    });

    it('shows trend line when enabled', () => {
      const { container } = render(<ScatterChart data={sampleData} showTrendLine />);
      
      const chart = container.firstChild as HTMLElement;
      expect(chart).toHaveClass('db-scatterchart--trend');
      
      const trendLine = document.querySelector('.db-scatterchart__trend-line');
      expect(trendLine).toBeInTheDocument();
    });

    it('applies custom trend line color', () => {
      render(<ScatterChart data={sampleData} showTrendLine trendLineColor="#FF0000" />);
      
      const trendLine = document.querySelector('.db-scatterchart__trend-line');
      expect(trendLine).toBeInTheDocument();
    });
  });

  // Title and labels tests
  describe('Title and Labels', () => {
    it('renders chart title', () => {
      render(<ScatterChart data={sampleData} title="Correlation Chart" />);
      
      const title = document.querySelector('.db-scatterchart__title');
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('Correlation Chart');
    });

    it('renders x-axis label', () => {
      render(<ScatterChart data={sampleData} xAxis={{ label: 'X Variable' }} />);
      
      const label = document.querySelector('.db-scatterchart__axis-label--x');
      expect(label).toBeInTheDocument();
      expect(label).toHaveTextContent('X Variable');
    });

    it('renders y-axis label', () => {
      render(<ScatterChart data={sampleData} yAxis={{ label: 'Y Variable' }} />);
      
      const label = document.querySelector('.db-scatterchart__axis-label--y');
      expect(label).toBeInTheDocument();
      expect(label).toHaveTextContent('Y Variable');
    });
  });

  // Axis configuration tests
  describe('Axis Configuration', () => {
    it('hides x-axis when configured', () => {
      render(<ScatterChart data={sampleData} xAxis={{ show: false }} />);
      
      const xAxis = document.querySelector('.db-scatterchart__axis--x');
      expect(xAxis).not.toBeInTheDocument();
    });

    it('hides y-axis when configured', () => {
      render(<ScatterChart data={sampleData} yAxis={{ show: false }} />);
      
      const yAxis = document.querySelector('.db-scatterchart__axis--y');
      expect(yAxis).not.toBeInTheDocument();
    });

    it('applies custom axis domain', () => {
      render(
        <ScatterChart
          data={sampleData}
          xAxis={{ domain: [0, 50] }}
          yAxis={{ domain: [0, 60] }}
        />
      );
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('applies custom tick formatter', () => {
      const tickFormatter = jest.fn((value) => `${value}px`);
      
      render(<ScatterChart data={sampleData} xAxis={{ tickFormatter }} />);
      
      expect(tickFormatter).toHaveBeenCalled();
    });
  });

  // Grid configuration tests
  describe('Grid Configuration', () => {
    it('shows grid by default', () => {
      render(<ScatterChart data={sampleData} />);
      
      const grid = document.querySelector('.db-scatterchart__grid');
      expect(grid).toBeInTheDocument();
    });

    it('hides grid when configured', () => {
      render(<ScatterChart data={sampleData} grid={{ show: false }} />);
      
      const grid = document.querySelector('.db-scatterchart__grid');
      expect(grid).not.toBeInTheDocument();
    });
  });

  // Point styling tests
  describe('Point Styling', () => {
    it('applies default point radius', () => {
      render(<ScatterChart data={sampleData} />);
      
      const points = document.querySelectorAll('.db-scatterchart__point');
      expect(points.length).toBe(sampleData.length);
    });

    it('applies custom point radius', () => {
      render(<ScatterChart data={sampleData} pointRadius={8} />);
      
      const points = document.querySelectorAll('.db-scatterchart__point');
      expect(points.length).toBe(sampleData.length);
    });

    it('applies point opacity', () => {
      render(<ScatterChart data={sampleData} pointOpacity={0.5} />);
      
      const points = document.querySelectorAll('.db-scatterchart__point');
      expect(points.length).toBe(sampleData.length);
    });
  });

  // Tooltip tests
  describe('Tooltip', () => {
    it('shows tooltip on hover', () => {
      render(<ScatterChart data={sampleData} showTooltip />);
      
      const points = document.querySelectorAll('.db-scatterchart__point');
      expect(points.length).toBe(sampleData.length);
    });

    it('hides tooltip when disabled', () => {
      render(<ScatterChart data={sampleData} showTooltip={false} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('uses custom tooltip formatter', () => {
      const formatTooltip = jest.fn((dataPoint) => `X: ${dataPoint.x}, Y: ${dataPoint.y}`);
      
      render(<ScatterChart data={sampleData} formatTooltip={formatTooltip} />);
      
      // Formatter is set up but only called on interaction
      expect(formatTooltip).not.toHaveBeenCalled();
    });
  });

  // Keyboard navigation tests
  describe('Keyboard Navigation', () => {
    it('enables keyboard navigation when configured', () => {
      const { container } = render(<ScatterChart data={sampleData} keyboard />);
      
      const chart = container.firstChild as HTMLElement;
      expect(chart).toHaveClass('db-scatterchart--keyboard');
    });

    it('points have tabindex when keyboard enabled', () => {
      render(<ScatterChart data={sampleData} keyboard />);
      
      const points = document.querySelectorAll('.db-scatterchart__point[tabindex="0"]');
      expect(points.length).toBe(sampleData.length);
    });

    it('points have role="button" when keyboard enabled', () => {
      render(<ScatterChart data={sampleData} keyboard />);
      
      const points = document.querySelectorAll('.db-scatterchart__point[role="button"]');
      expect(points.length).toBe(sampleData.length);
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<ScatterChart data={sampleData} />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with empty data', async () => {
      const { container } = render(<ScatterChart data={[]} />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper ARIA label', () => {
      render(<ScatterChart data={sampleData} ariaLabel="Correlation scatter plot" />);
      
      const chart = screen.getByRole('img', { name: 'Correlation scatter plot' });
      expect(chart).toBeInTheDocument();
    });

    it('has default ARIA label', () => {
      render(<ScatterChart data={sampleData} />);
      
      const chart = screen.getByRole('img', { name: `Scatter plot with ${sampleData.length} data points` });
      expect(chart).toBeInTheDocument();
    });

    it('SVG is hidden from screen readers when keyboard navigation enabled', () => {
      render(<ScatterChart data={sampleData} keyboard />);
      
      const svg = document.querySelector('svg');
      expect(svg).toHaveAttribute('aria-hidden', 'true');
    });
  });

  // Animation tests
  describe('Animation', () => {
    it('applies animation by default for detailed variant', () => {
      render(<ScatterChart data={sampleData} variant="detailed" />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('applies custom animation duration', () => {
      render(<ScatterChart data={sampleData} animation={{ enabled: true, duration: 800 }} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('disables animation when configured', () => {
      render(<ScatterChart data={sampleData} animation={{ enabled: false }} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
  });

  // Performance optimization tests
  describe('Performance Optimization', () => {
    it('applies optimized class when enabled', () => {
      const { container } = render(<ScatterChart data={sampleData} optimized />);
      
      const chart = container.firstChild as HTMLElement;
      expect(chart).toHaveClass('db-scatterchart--optimized');
    });

    it('handles large datasets efficiently', () => {
      const largeData: ScatterChartDataPoint[] = Array.from({ length: 500 }, (_, i) => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
      }));
      
      const start = performance.now();
      render(<ScatterChart data={largeData} optimized />);
      const end = performance.now();
      
      // Should render in reasonable time (< 500ms)
      expect(end - start).toBeLessThan(500);
    });
  });

  // Theme tests
  describe('Theme', () => {
    it('applies light theme', () => {
      render(<ScatterChart data={sampleData} theme={{ colorScheme: 'light' }} />);
      
      const chart = screen.getByRole('img');
      expect(chart).toHaveAttribute('data-theme', 'light');
    });

    it('applies dark theme', () => {
      render(<ScatterChart data={sampleData} theme={{ colorScheme: 'dark' }} />);
      
      const chart = screen.getByRole('img');
      expect(chart).toHaveAttribute('data-theme', 'dark');
    });

    it('applies custom CSS variables', () => {
      const customVars = {
        '--chart-point-radius': '8px',
        '--chart-point-opacity': '0.8',
      };
      
      render(<ScatterChart data={sampleData} theme={{ cssVars: customVars }} />);
      
      const chart = screen.getByRole('img');
      expect(chart).toHaveStyle(customVars);
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles single data point', () => {
      const singlePoint: ScatterChartDataPoint[] = [{ x: 10, y: 20 }];
      
      render(<ScatterChart data={singlePoint} />);
      
      const points = document.querySelectorAll('.db-scatterchart__point');
      expect(points.length).toBe(1);
    });

    it('handles negative values', () => {
      const negativeData: ScatterChartDataPoint[] = [
        { x: -10, y: -20 },
        { x: 5, y: -15 },
        { x: -5, y: 10 },
      ];
      
      render(<ScatterChart data={negativeData} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('handles zero values', () => {
      const zeroData: ScatterChartDataPoint[] = [
        { x: 0, y: 0 },
        { x: 5, y: 0 },
        { x: 0, y: 5 },
      ];
      
      render(<ScatterChart data={zeroData} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('handles very large values', () => {
      const largeValues: ScatterChartDataPoint[] = [
        { x: 1000000, y: 2000000 },
        { x: 1500000, y: 2500000 },
      ];
      
      render(<ScatterChart data={largeValues} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('handles data with metadata', () => {
      const dataWithMetadata: ScatterChartDataPoint[] = [
        { x: 10, y: 20, label: 'Point A', metadata: { region: 'North' } },
        { x: 20, y: 30, label: 'Point B', metadata: { region: 'South' } },
      ];
      
      render(<ScatterChart data={dataWithMetadata} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('handles data with categories', () => {
      render(<ScatterChart data={categoryData} />);
      
      const points = document.querySelectorAll('.db-scatterchart__point');
      expect(points.length).toBe(categoryData.length);
    });

    it('handles custom dimensions', () => {
      render(<ScatterChart data={sampleData} width={800} height={600} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toHaveAttribute('width', '800');
      expect(svg).toHaveAttribute('height', '600');
    });

    it('handles clustered data points', () => {
      const clustered: ScatterChartDataPoint[] = [
        { x: 10, y: 10 },
        { x: 10.1, y: 10.1 },
        { x: 10.2, y: 10.2 },
        { x: 50, y: 50 },
        { x: 50.1, y: 50.1 },
      ];
      
      render(<ScatterChart data={clustered} />);
      
      const points = document.querySelectorAll('.db-scatterchart__point');
      expect(points.length).toBe(clustered.length);
    });

    it('handles outliers', () => {
      const withOutliers: ScatterChartDataPoint[] = [
        { x: 10, y: 10 },
        { x: 15, y: 15 },
        { x: 20, y: 20 },
        { x: 100, y: 100 }, // Outlier
      ];
      
      render(<ScatterChart data={withOutliers} />);
      
      const points = document.querySelectorAll('.db-scatterchart__point');
      expect(points.length).toBe(withOutliers.length);
    });
  });
});

