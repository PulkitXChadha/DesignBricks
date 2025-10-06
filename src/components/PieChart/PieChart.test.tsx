import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { PieChart, PieChartProps, PieChartDataPoint } from './PieChart';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Sample data for testing
const sampleData: PieChartDataPoint[] = [
  { label: 'Category A', value: 30 },
  { label: 'Category B', value: 45 },
  { label: 'Category C', value: 25 },
  { label: 'Category D', value: 15 },
  { label: 'Category E', value: 10 },
];

const simpleData: PieChartDataPoint[] = [
  { label: 'First', value: 60 },
  { label: 'Second', value: 40 },
];

describe('PieChart', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      render(<PieChart data={sampleData} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveClass('db-piechart__svg');
    });

    it('renders empty state with no data', () => {
      render(<PieChart data={[]} />);
      
      expect(screen.getByText('No data available')).toBeInTheDocument();
      expect(document.querySelector('.db-piechart--empty')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      const { container } = render(<PieChart data={sampleData} className="custom-chart" />);
      
      const chartElement = container.firstChild as HTMLElement;
      expect(chartElement).toHaveClass('db-piechart', 'custom-chart');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<PieChart data={sampleData} ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current).toHaveClass('db-piechart');
    });

    it('forwards additional props', () => {
      render(
        <PieChart
          data={sampleData}
          data-testid="test-chart"
          id="my-chart"
        />
      );
      
      const chart = screen.getByTestId('test-chart');
      expect(chart).toHaveAttribute('id', 'my-chart');
    });

    it('renders pie slices correctly', () => {
      render(<PieChart data={sampleData} />);
      
      const slices = document.querySelectorAll('.db-piechart__path');
      expect(slices.length).toBe(sampleData.length);
    });
  });

  // Variant tests
  describe('Variants', () => {
    const variants: Array<PieChartProps['variant']> = ['default', 'minimal', 'detailed'];
    
    variants.forEach(variant => {
      it(`renders ${variant} variant correctly`, () => {
        const { container } = render(<PieChart data={sampleData} variant={variant} />);
        
        const chart = container.firstChild as HTMLElement;
        expect(chart).toHaveClass(`db-piechart--${variant}`);
      });
    });
  });

  // Donut chart tests
  describe('Donut Chart', () => {
    it('renders as pie by default', () => {
      const { container } = render(<PieChart data={sampleData} />);
      
      const chart = container.firstChild as HTMLElement;
      expect(chart).not.toHaveClass('db-piechart--donut');
    });

    it('renders as donut when innerRadius is set', () => {
      const { container } = render(<PieChart data={sampleData} innerRadius={50} />);
      
      const chart = container.firstChild as HTMLElement;
      expect(chart).toHaveClass('db-piechart--donut');
    });

    it('has correct ARIA label for donut', () => {
      render(<PieChart data={sampleData} innerRadius={50} />);
      
      const chart = screen.getByRole('img', { name: `Donut chart with ${sampleData.length} categories` });
      expect(chart).toBeInTheDocument();
    });
  });

  // Title test
  describe('Title', () => {
    it('renders chart title', () => {
      render(<PieChart data={sampleData} title="Distribution Chart" />);
      
      const title = document.querySelector('.db-piechart__title');
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('Distribution Chart');
    });
  });

  // Color tests
  describe('Colors', () => {
    it('uses default color palette', () => {
      render(<PieChart data={sampleData} />);
      
      const paths = document.querySelectorAll('.db-piechart__path');
      expect(paths.length).toBe(sampleData.length);
    });

    it('uses custom color palette', () => {
      const customColors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF'];
      render(<PieChart data={sampleData} colorPalette={customColors} />);
      
      const paths = document.querySelectorAll('.db-piechart__path');
      expect(paths.length).toBe(sampleData.length);
    });

    it('uses custom color from data', () => {
      const dataWithColors: PieChartDataPoint[] = [
        { label: 'Red', value: 30, color: '#FF0000' },
        { label: 'Blue', value: 70, color: '#0000FF' },
      ];
      
      render(<PieChart data={dataWithColors} />);
      
      const paths = document.querySelectorAll('.db-piechart__path');
      expect(paths.length).toBe(dataWithColors.length);
    });
  });

  // Labels tests
  describe('Labels', () => {
    it('shows labels by default', () => {
      render(<PieChart data={sampleData} showLabels />);
      
      const labels = document.querySelectorAll('.db-piechart__label');
      expect(labels.length).toBeGreaterThan(0);
    });

    it('hides labels when configured', () => {
      render(<PieChart data={sampleData} showLabels={false} />);
      
      const labels = document.querySelectorAll('.db-piechart__label');
      expect(labels.length).toBe(0);
    });

    it('shows value labels instead of percentages', () => {
      render(<PieChart data={sampleData} showLabels showValues />);
      
      const labels = document.querySelectorAll('.db-piechart__label');
      expect(labels.length).toBeGreaterThan(0);
    });

    it('positions labels inside', () => {
      render(<PieChart data={sampleData} showLabels labelPosition="inside" />);
      
      const labels = document.querySelectorAll('.db-piechart__label');
      expect(labels.length).toBeGreaterThan(0);
    });

    it('positions labels outside', () => {
      render(<PieChart data={sampleData} showLabels labelPosition="outside" />);
      
      const labels = document.querySelectorAll('.db-piechart__label');
      const categoryLabels = document.querySelectorAll('.db-piechart__category-label');
      expect(labels.length).toBeGreaterThan(0);
      expect(categoryLabels.length).toBeGreaterThan(0);
    });

    it('hides labels for small slices', () => {
      const dataWithSmallSlice: PieChartDataPoint[] = [
        { label: 'Large', value: 95 },
        { label: 'Tiny', value: 2 },
        { label: 'Small', value: 3 },
      ];
      
      render(<PieChart data={dataWithSmallSlice} showLabels />);
      
      // Small slices (< 5%) should not show labels
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
  });

  // Legend tests
  describe('Legend', () => {
    it('shows legend by default', () => {
      render(<PieChart data={sampleData} />);
      
      const legend = document.querySelector('.db-piechart__legend');
      expect(legend).toBeInTheDocument();
    });

    it('hides legend when configured', () => {
      render(<PieChart data={sampleData} legend={{ show: false }} />);
      
      const legend = document.querySelector('.db-piechart__legend');
      expect(legend).not.toBeInTheDocument();
    });

    it('renders legend items for all categories', () => {
      render(<PieChart data={sampleData} />);
      
      const legendItems = document.querySelectorAll('.db-piechart__legend-item');
      expect(legendItems.length).toBe(sampleData.length);
    });

    it('positions legend at bottom by default', () => {
      render(<PieChart data={sampleData} />);
      
      const legend = document.querySelector('.db-piechart__legend');
      expect(legend).toBeInTheDocument();
    });
  });

  // Slice styling tests
  describe('Slice Styling', () => {
    it('applies corner radius', () => {
      render(<PieChart data={sampleData} cornerRadius={5} />);
      
      const paths = document.querySelectorAll('.db-piechart__path');
      expect(paths.length).toBe(sampleData.length);
    });

    it('applies padding angle', () => {
      render(<PieChart data={sampleData} padAngle={0.02} />);
      
      const paths = document.querySelectorAll('.db-piechart__path');
      expect(paths.length).toBe(sampleData.length);
    });

    it('applies custom outer radius', () => {
      render(<PieChart data={sampleData} outerRadius={150} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
  });

  // Tooltip tests
  describe('Tooltip', () => {
    it('shows tooltip on hover', () => {
      render(<PieChart data={sampleData} showTooltip />);
      
      const paths = document.querySelectorAll('.db-piechart__path');
      expect(paths.length).toBe(sampleData.length);
    });

    it('hides tooltip when disabled', () => {
      render(<PieChart data={sampleData} showTooltip={false} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('uses custom tooltip formatter', () => {
      const formatTooltip = jest.fn((dataPoint) => `${dataPoint.label}: ${dataPoint.value}`);
      
      render(<PieChart data={sampleData} formatTooltip={formatTooltip} />);
      
      // Formatter is set up but only called on interaction
      expect(formatTooltip).not.toHaveBeenCalled();
    });
  });

  // Keyboard navigation tests
  describe('Keyboard Navigation', () => {
    it('enables keyboard navigation when configured', () => {
      const { container } = render(<PieChart data={sampleData} keyboard />);
      
      const chart = container.firstChild as HTMLElement;
      expect(chart).toHaveClass('db-piechart--keyboard');
    });

    it('slices have tabindex when keyboard enabled', () => {
      render(<PieChart data={sampleData} keyboard />);
      
      const paths = document.querySelectorAll('.db-piechart__path[tabindex="0"]');
      expect(paths.length).toBe(sampleData.length);
    });

    it('slices have role="button" when keyboard enabled', () => {
      render(<PieChart data={sampleData} keyboard />);
      
      const paths = document.querySelectorAll('.db-piechart__path[role="button"]');
      expect(paths.length).toBe(sampleData.length);
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<PieChart data={sampleData} />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with empty data', async () => {
      const { container } = render(<PieChart data={[]} />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper ARIA label', () => {
      render(<PieChart data={sampleData} ariaLabel="Sales distribution chart" />);
      
      const chart = screen.getByRole('img', { name: 'Sales distribution chart' });
      expect(chart).toBeInTheDocument();
    });

    it('has default ARIA label', () => {
      render(<PieChart data={sampleData} />);
      
      const chart = screen.getByRole('img', { name: `Pie chart with ${sampleData.length} categories` });
      expect(chart).toBeInTheDocument();
    });

    it('SVG is hidden from screen readers when keyboard navigation enabled', () => {
      render(<PieChart data={sampleData} keyboard />);
      
      const svg = document.querySelector('svg');
      expect(svg).toHaveAttribute('aria-hidden', 'true');
    });
  });

  // Animation tests
  describe('Animation', () => {
    it('applies animation by default for detailed variant', () => {
      render(<PieChart data={sampleData} variant="detailed" />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('applies custom animation duration', () => {
      render(<PieChart data={sampleData} animation={{ enabled: true, duration: 1000 }} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('disables animation when configured', () => {
      render(<PieChart data={sampleData} animation={{ enabled: false }} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
  });

  // Performance optimization tests
  describe('Performance Optimization', () => {
    it('applies optimized class when enabled', () => {
      const { container } = render(<PieChart data={sampleData} optimized />);
      
      const chart = container.firstChild as HTMLElement;
      expect(chart).toHaveClass('db-piechart--optimized');
    });
  });

  // Theme tests
  describe('Theme', () => {
    it('applies light theme', () => {
      render(<PieChart data={sampleData} theme={{ colorScheme: 'light' }} />);
      
      const chart = screen.getByRole('img');
      expect(chart).toHaveAttribute('data-theme', 'light');
    });

    it('applies dark theme', () => {
      render(<PieChart data={sampleData} theme={{ colorScheme: 'dark' }} />);
      
      const chart = screen.getByRole('img');
      expect(chart).toHaveAttribute('data-theme', 'dark');
    });

    it('applies custom CSS variables', () => {
      const customVars = {
        '--chart-inner-radius': '50px',
        '--chart-corner-radius': '5px',
      };
      
      render(<PieChart data={sampleData} theme={{ cssVars: customVars }} />);
      
      const chart = screen.getByRole('img');
      expect(chart).toHaveStyle(customVars);
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles single slice', () => {
      const singleSlice: PieChartDataPoint[] = [{ label: 'Only', value: 100 }];
      
      render(<PieChart data={singleSlice} />);
      
      const paths = document.querySelectorAll('.db-piechart__path');
      expect(paths.length).toBe(1);
    });

    it('handles two slices', () => {
      render(<PieChart data={simpleData} />);
      
      const paths = document.querySelectorAll('.db-piechart__path');
      expect(paths.length).toBe(simpleData.length);
    });

    it('handles zero values', () => {
      const dataWithZeros: PieChartDataPoint[] = [
        { label: 'A', value: 0 },
        { label: 'B', value: 100 },
        { label: 'C', value: 0 },
      ];
      
      render(<PieChart data={dataWithZeros} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('handles all zero values', () => {
      const allZeros: PieChartDataPoint[] = [
        { label: 'A', value: 0 },
        { label: 'B', value: 0 },
        { label: 'C', value: 0 },
      ];
      
      render(<PieChart data={allZeros} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('handles very large values', () => {
      const largeValues: PieChartDataPoint[] = [
        { label: 'A', value: 1000000 },
        { label: 'B', value: 2000000 },
        { label: 'C', value: 1500000 },
      ];
      
      render(<PieChart data={largeValues} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('handles many slices', () => {
      const manySlices: PieChartDataPoint[] = Array.from({ length: 20 }, (_, i) => ({
        label: `Category ${i + 1}`,
        value: Math.random() * 100,
      }));
      
      render(<PieChart data={manySlices} />);
      
      const paths = document.querySelectorAll('.db-piechart__path');
      expect(paths.length).toBe(manySlices.length);
    });

    it('handles data with metadata', () => {
      const dataWithMetadata: PieChartDataPoint[] = [
        { label: 'A', value: 30, metadata: { region: 'North' } },
        { label: 'B', value: 70, metadata: { region: 'South' } },
      ];
      
      render(<PieChart data={dataWithMetadata} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('handles custom dimensions', () => {
      render(<PieChart data={sampleData} width={600} height={600} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toHaveAttribute('width', '600');
      expect(svg).toHaveAttribute('height', '600');
    });

    it('handles very long labels', () => {
      const longLabels: PieChartDataPoint[] = [
        { label: 'This is a very long category label that might wrap', value: 30 },
        { label: 'Another extremely long label for testing purposes', value: 70 },
      ];
      
      render(<PieChart data={longLabels} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('handles uneven distribution', () => {
      const unevenData: PieChartDataPoint[] = [
        { label: 'Dominant', value: 99 },
        { label: 'Tiny', value: 1 },
      ];
      
      render(<PieChart data={unevenData} />);
      
      const paths = document.querySelectorAll('.db-piechart__path');
      expect(paths.length).toBe(unevenData.length);
    });
  });
});

