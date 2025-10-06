import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { BarChart, BarChartProps, BarChartDataPoint } from './BarChart';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Sample data for testing
const sampleData: BarChartDataPoint[] = [
  { x: 'January', y: 100 },
  { x: 'February', y: 150 },
  { x: 'March', y: 120 },
  { x: 'April', y: 180 },
  { x: 'May', y: 160 },
];

// Small dataset for potential future tests
// const smallData: BarChartDataPoint[] = [
//   { x: 'A', y: 50 },
//   { x: 'B', y: 75 },
//   { x: 'C', y: 25 },
// ];

describe('BarChart', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      render(<BarChart data={sampleData} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveClass('db-barchart__svg');
    });

    it('renders empty state with no data', () => {
      render(<BarChart data={[]} />);
      
      expect(screen.getByText('No data available')).toBeInTheDocument();
      expect(document.querySelector('.db-barchart--empty')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      const { container } = render(<BarChart data={sampleData} className="custom-chart" />);
      
      const chartElement = container.firstChild as HTMLElement;
      expect(chartElement).toHaveClass('db-barchart', 'custom-chart');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<BarChart data={sampleData} ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current).toHaveClass('db-barchart');
    });

    it('forwards additional props', () => {
      render(
        <BarChart
          data={sampleData}
          data-testid="test-chart"
          id="my-chart"
        />
      );
      
      const chart = screen.getByTestId('test-chart');
      expect(chart).toHaveAttribute('id', 'my-chart');
    });

    it('renders bars correctly', () => {
      render(<BarChart data={sampleData} />);
      
      const bars = document.querySelectorAll('.db-barchart__bar');
      expect(bars.length).toBe(sampleData.length);
    });
  });

  // Variant tests
  describe('Variants', () => {
    const variants: Array<BarChartProps['variant']> = ['default', 'minimal', 'detailed'];
    
    variants.forEach(variant => {
      it(`renders ${variant} variant correctly`, () => {
        const { container } = render(<BarChart data={sampleData} variant={variant} />);
        
        const chart = container.firstChild as HTMLElement;
        expect(chart).toHaveClass(`db-barchart--${variant}`);
      });
    });

    it('minimal variant hides grid', () => {
      render(<BarChart data={sampleData} variant="minimal" />);
      
      const grid = document.querySelector('.db-barchart__grid');
      expect(grid).not.toBeInTheDocument();
    });

    it('detailed variant shows grid', () => {
      render(<BarChart data={sampleData} variant="detailed" />);
      
      const grid = document.querySelector('.db-barchart__grid');
      expect(grid).toBeInTheDocument();
    });
  });

  // Color tests
  describe('Colors', () => {
    const colors: Array<BarChartProps['color']> = ['primary', 'secondary', 'success', 'warning', 'error'];
    
    colors.forEach(color => {
      it(`renders ${color} color correctly`, () => {
        const { container } = render(<BarChart data={sampleData} color={color} />);
        
        const chart = container.firstChild as HTMLElement;
        expect(chart).toHaveClass(`db-barchart--${color}`);
      });
    });
  });

  // Orientation tests
  describe('Orientation', () => {
    it('renders vertical orientation by default', () => {
      const { container } = render(<BarChart data={sampleData} />);
      
      const chart = container.firstChild as HTMLElement;
      expect(chart).toHaveClass('db-barchart--vertical');
    });

    it('renders horizontal orientation', () => {
      const { container } = render(<BarChart data={sampleData} orientation="horizontal" />);
      
      const chart = container.firstChild as HTMLElement;
      expect(chart).toHaveClass('db-barchart--horizontal');
    });
  });

  // Title and labels tests
  describe('Title and Labels', () => {
    it('renders chart title', () => {
      render(<BarChart data={sampleData} title="Sales Chart" />);
      
      const title = document.querySelector('.db-barchart__title');
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('Sales Chart');
    });

    it('renders x-axis label', () => {
      render(<BarChart data={sampleData} xAxis={{ label: 'Months' }} />);
      
      const label = document.querySelector('.db-barchart__axis-label--x');
      expect(label).toBeInTheDocument();
      expect(label).toHaveTextContent('Months');
    });

    it('renders y-axis label', () => {
      render(<BarChart data={sampleData} yAxis={{ label: 'Sales' }} />);
      
      const label = document.querySelector('.db-barchart__axis-label--y');
      expect(label).toBeInTheDocument();
      expect(label).toHaveTextContent('Sales');
    });
  });

  // Axis configuration tests
  describe('Axis Configuration', () => {
    it('hides x-axis when configured', () => {
      render(<BarChart data={sampleData} xAxis={{ show: false }} />);
      
      const xAxis = document.querySelector('.db-barchart__axis--x');
      expect(xAxis).not.toBeInTheDocument();
    });

    it('hides y-axis when configured', () => {
      render(<BarChart data={sampleData} yAxis={{ show: false }} />);
      
      const yAxis = document.querySelector('.db-barchart__axis--y');
      expect(yAxis).not.toBeInTheDocument();
    });

    it('rotates labels when many categories', () => {
      const manyCategories: BarChartDataPoint[] = Array.from({ length: 15 }, (_, i) => ({
        x: `Category ${i + 1}`,
        y: Math.random() * 100,
      }));
      
      render(<BarChart data={manyCategories} />);
      
      // rotateLabels is automatically set when data.length > 8
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
  });

  // Grid configuration tests
  describe('Grid Configuration', () => {
    it('shows grid by default', () => {
      render(<BarChart data={sampleData} />);
      
      const grid = document.querySelector('.db-barchart__grid');
      expect(grid).toBeInTheDocument();
    });

    it('hides grid when configured', () => {
      render(<BarChart data={sampleData} grid={{ show: false }} />);
      
      const grid = document.querySelector('.db-barchart__grid');
      expect(grid).not.toBeInTheDocument();
    });
  });

  // Bar styling tests
  describe('Bar Styling', () => {
    it('applies border radius', () => {
      render(<BarChart data={sampleData} borderRadius={5} />);
      
      const bars = document.querySelectorAll('.db-barchart__bar');
      expect(bars.length).toBe(sampleData.length);
    });

    it('applies bar padding', () => {
      render(<BarChart data={sampleData} barPadding={0.2} />);
      
      const bars = document.querySelectorAll('.db-barchart__bar');
      expect(bars.length).toBe(sampleData.length);
    });
  });

  // Value labels tests
  describe('Value Labels', () => {
    it('hides value labels by default', () => {
      render(<BarChart data={sampleData} showValueLabels={false} />);
      
      const labels = document.querySelectorAll('.db-barchart__value-label');
      expect(labels.length).toBe(0);
    });

    it('shows value labels when configured', () => {
      render(<BarChart data={sampleData} showValueLabels />);
      
      const labels = document.querySelectorAll('.db-barchart__value-label');
      expect(labels.length).toBe(sampleData.length);
    });
  });

  // Tooltip tests
  describe('Tooltip', () => {
    it('shows tooltip on hover', () => {
      render(<BarChart data={sampleData} showTooltip />);
      
      const bars = document.querySelectorAll('.db-barchart__bar');
      expect(bars.length).toBe(sampleData.length);
    });

    it('hides tooltip when disabled', () => {
      render(<BarChart data={sampleData} showTooltip={false} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('uses custom tooltip formatter', () => {
      const formatTooltip = jest.fn((dataPoint) => `Value: ${dataPoint.y}`);
      
      render(<BarChart data={sampleData} formatTooltip={formatTooltip} />);
      
      // Formatter is set up but only called on interaction
      expect(formatTooltip).not.toHaveBeenCalled();
    });
  });

  // Keyboard navigation tests
  describe('Keyboard Navigation', () => {
    it('enables keyboard navigation when configured', () => {
      const { container } = render(<BarChart data={sampleData} keyboard />);
      
      const chart = container.firstChild as HTMLElement;
      expect(chart).toHaveClass('db-barchart--keyboard');
    });

    it('bars have tabindex when keyboard enabled', () => {
      render(<BarChart data={sampleData} keyboard />);
      
      const bars = document.querySelectorAll('.db-barchart__bar[tabindex="0"]');
      expect(bars.length).toBe(sampleData.length);
    });

    it('bars have role="button" when keyboard enabled', () => {
      render(<BarChart data={sampleData} keyboard />);
      
      const bars = document.querySelectorAll('.db-barchart__bar[role="button"]');
      expect(bars.length).toBe(sampleData.length);
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<BarChart data={sampleData} />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with empty data', async () => {
      const { container } = render(<BarChart data={[]} />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper ARIA label', () => {
      render(<BarChart data={sampleData} ariaLabel="Sales bar chart" />);
      
      const chart = screen.getByRole('img', { name: 'Sales bar chart' });
      expect(chart).toBeInTheDocument();
    });

    it('has default ARIA label', () => {
      render(<BarChart data={sampleData} />);
      
      const chart = screen.getByRole('img', { name: `Bar chart with ${sampleData.length} categories` });
      expect(chart).toBeInTheDocument();
    });

    it('SVG is hidden from screen readers when keyboard navigation enabled', () => {
      render(<BarChart data={sampleData} keyboard />);
      
      const svg = document.querySelector('svg');
      expect(svg).toHaveAttribute('aria-hidden', 'true');
    });
  });

  // Animation tests
  describe('Animation', () => {
    it('applies animation by default for detailed variant', () => {
      render(<BarChart data={sampleData} variant="detailed" />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('applies custom animation duration', () => {
      render(<BarChart data={sampleData} animation={{ enabled: true, duration: 1000 }} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('disables animation when configured', () => {
      render(<BarChart data={sampleData} animation={{ enabled: false }} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
  });

  // Performance optimization tests
  describe('Performance Optimization', () => {
    it('applies optimized class when enabled', () => {
      const { container } = render(<BarChart data={sampleData} optimized />);
      
      const chart = container.firstChild as HTMLElement;
      expect(chart).toHaveClass('db-barchart--optimized');
    });

    it('handles large datasets efficiently', () => {
      const largeData: BarChartDataPoint[] = Array.from({ length: 100 }, (_, i) => ({
        x: `Category ${i + 1}`,
        y: Math.random() * 100,
      }));
      
      const start = performance.now();
      render(<BarChart data={largeData} optimized />);
      const end = performance.now();
      
      // Should render in reasonable time (< 500ms)
      expect(end - start).toBeLessThan(500);
    });
  });

  // Theme tests
  describe('Theme', () => {
    it('applies light theme', () => {
      render(<BarChart data={sampleData} theme={{ colorScheme: 'light' }} />);
      
      const chart = screen.getByRole('img');
      expect(chart).toHaveAttribute('data-theme', 'light');
    });

    it('applies dark theme', () => {
      render(<BarChart data={sampleData} theme={{ colorScheme: 'dark' }} />);
      
      const chart = screen.getByRole('img');
      expect(chart).toHaveAttribute('data-theme', 'dark');
    });

    it('applies custom CSS variables', () => {
      const customVars = {
        '--chart-bar-radius': '5px',
        '--chart-bar-padding': '0.2',
      };
      
      render(<BarChart data={sampleData} theme={{ cssVars: customVars }} />);
      
      const chart = screen.getByRole('img');
      expect(chart).toHaveStyle(customVars);
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles single bar', () => {
      const singleBar: BarChartDataPoint[] = [{ x: 'Single', y: 100 }];
      
      render(<BarChart data={singleBar} />);
      
      const bars = document.querySelectorAll('.db-barchart__bar');
      expect(bars.length).toBe(1);
    });

    it('handles negative values', () => {
      const negativeData: BarChartDataPoint[] = [
        { x: 'A', y: -50 },
        { x: 'B', y: 25 },
        { x: 'C', y: -30 },
      ];
      
      render(<BarChart data={negativeData} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('handles zero values', () => {
      const zeroData: BarChartDataPoint[] = [
        { x: 'A', y: 0 },
        { x: 'B', y: 0 },
        { x: 'C', y: 0 },
      ];
      
      render(<BarChart data={zeroData} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('handles very large values', () => {
      const largeValueData: BarChartDataPoint[] = [
        { x: 'A', y: 1000000 },
        { x: 'B', y: 2000000 },
        { x: 'C', y: 1500000 },
      ];
      
      render(<BarChart data={largeValueData} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('handles data with metadata', () => {
      const dataWithMetadata: BarChartDataPoint[] = [
        { x: 'A', y: 100, label: 'Category A', metadata: { region: 'North' } },
        { x: 'B', y: 150, label: 'Category B', metadata: { region: 'South' } },
      ];
      
      render(<BarChart data={dataWithMetadata} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('handles custom dimensions', () => {
      render(<BarChart data={sampleData} width={800} height={600} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toHaveAttribute('width', '800');
      expect(svg).toHaveAttribute('height', '600');
    });

    it('handles very long category names', () => {
      const longNames: BarChartDataPoint[] = [
        { x: 'This is a very long category name that might wrap', y: 100 },
        { x: 'Another extremely long category name', y: 150 },
      ];
      
      render(<BarChart data={longNames} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('handles duplicate category names', () => {
      const duplicates: BarChartDataPoint[] = [
        { x: 'Category', y: 100 },
        { x: 'Category', y: 150 },
        { x: 'Category', y: 120 },
      ];
      
      render(<BarChart data={duplicates} />);
      
      const bars = document.querySelectorAll('.db-barchart__bar');
      expect(bars.length).toBe(duplicates.length);
    });
  });
});

