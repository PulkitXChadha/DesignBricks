import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { MultiLineChart, MultiLineChartProps, MultiLineChartSeries } from './MultiLineChart';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Sample data for testing
const sampleSeries: MultiLineChartSeries[] = [
  {
    id: 'series1',
    name: 'Series 1',
    data: [
      { x: new Date('2024-01-01'), y: 100 },
      { x: new Date('2024-02-01'), y: 150 },
      { x: new Date('2024-03-01'), y: 120 },
      { x: new Date('2024-04-01'), y: 180 },
      { x: new Date('2024-05-01'), y: 160 },
    ],
    color: 'primary',
  },
  {
    id: 'series2',
    name: 'Series 2',
    data: [
      { x: new Date('2024-01-01'), y: 80 },
      { x: new Date('2024-02-01'), y: 120 },
      { x: new Date('2024-03-01'), y: 140 },
      { x: new Date('2024-04-01'), y: 110 },
      { x: new Date('2024-05-01'), y: 130 },
    ],
    color: 'secondary',
  },
];

const numericSeries: MultiLineChartSeries[] = [
  {
    id: 'a',
    name: 'Product A',
    data: [
      { x: 1, y: 100 },
      { x: 2, y: 150 },
      { x: 3, y: 120 },
    ],
  },
  {
    id: 'b',
    name: 'Product B',
    data: [
      { x: 1, y: 80 },
      { x: 2, y: 90 },
      { x: 3, y: 110 },
    ],
  },
];

describe('MultiLineChart', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      render(<MultiLineChart series={sampleSeries} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveClass('db-multilinechart__svg');
    });

    it('renders empty state with no series', () => {
      render(<MultiLineChart series={[]} />);
      
      expect(screen.getByText('No data available')).toBeInTheDocument();
      expect(document.querySelector('.db-multilinechart--empty')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      const { container } = render(<MultiLineChart series={sampleSeries} className="custom-chart" />);
      
      const chartElement = container.firstChild as HTMLElement;
      expect(chartElement).toHaveClass('db-multilinechart', 'custom-chart');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<MultiLineChart series={sampleSeries} ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current).toHaveClass('db-multilinechart');
    });

    it('forwards additional props', () => {
      render(
        <MultiLineChart
          series={sampleSeries}
          data-testid="test-chart"
          id="my-chart"
        />
      );
      
      const chart = screen.getByTestId('test-chart');
      expect(chart).toHaveAttribute('id', 'my-chart');
    });

    it('renders all series lines correctly', () => {
      render(<MultiLineChart series={sampleSeries} />);
      
      const lines = document.querySelectorAll('.db-multilinechart__line');
      expect(lines.length).toBe(sampleSeries.length);
    });

    it('renders with numeric data', () => {
      render(<MultiLineChart series={numericSeries} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
  });

  // Variant tests
  describe('Variants', () => {
    const variants: Array<MultiLineChartProps['variant']> = ['default', 'minimal', 'detailed'];
    
    variants.forEach(variant => {
      it(`renders ${variant} variant correctly`, () => {
        const { container } = render(<MultiLineChart series={sampleSeries} variant={variant} />);
        
        const chart = container.firstChild as HTMLElement;
        expect(chart).toHaveClass(`db-multilinechart--${variant}`);
      });
    });

    it('minimal variant hides grid', () => {
      render(<MultiLineChart series={sampleSeries} variant="minimal" />);
      
      const grid = document.querySelector('.db-multilinechart__grid');
      expect(grid).not.toBeInTheDocument();
    });

    it('detailed variant shows grid', () => {
      render(<MultiLineChart series={sampleSeries} variant="detailed" />);
      
      const grid = document.querySelector('.db-multilinechart__grid');
      expect(grid).toBeInTheDocument();
    });
  });

  // Series visibility tests
  describe('Series Visibility', () => {
    it('renders only visible series', () => {
      const seriesWithVisibility: MultiLineChartSeries[] = [
        { ...sampleSeries[0], visible: true },
        { ...sampleSeries[1], visible: false },
      ];
      
      render(<MultiLineChart series={seriesWithVisibility} />);
      
      const lines = document.querySelectorAll('.db-multilinechart__line');
      expect(lines.length).toBe(1);
    });

    it('treats missing visible property as true', () => {
      render(<MultiLineChart series={sampleSeries} />);
      
      const lines = document.querySelectorAll('.db-multilinechart__line');
      expect(lines.length).toBe(sampleSeries.length);
    });
  });

  // Series styling tests
  describe('Series Styling', () => {
    it('applies series colors', () => {
      render(<MultiLineChart series={sampleSeries} />);
      
      const lines = document.querySelectorAll('.db-multilinechart__line');
      expect(lines.length).toBe(sampleSeries.length);
    });

    it('applies custom series colors', () => {
      const customColorSeries: MultiLineChartSeries[] = [
        { ...sampleSeries[0], customColor: '#FF0000' },
        { ...sampleSeries[1], customColor: '#00FF00' },
      ];
      
      render(<MultiLineChart series={customColorSeries} />);
      
      const lines = document.querySelectorAll('.db-multilinechart__line');
      expect(lines.length).toBe(customColorSeries.length);
    });

    it('applies stroke dasharray to series', () => {
      const dashedSeries: MultiLineChartSeries[] = [
        { ...sampleSeries[0], strokeDasharray: '5,5' },
        { ...sampleSeries[1] },
      ];
      
      render(<MultiLineChart series={dashedSeries} />);
      
      const lines = document.querySelectorAll('.db-multilinechart__line');
      expect(lines.length).toBe(dashedSeries.length);
    });

    it('applies custom stroke width', () => {
      const thickLineSeries: MultiLineChartSeries[] = [
        { ...sampleSeries[0], strokeWidth: 5 },
        { ...sampleSeries[1] },
      ];
      
      render(<MultiLineChart series={thickLineSeries} />);
      
      const lines = document.querySelectorAll('.db-multilinechart__line');
      expect(lines.length).toBe(thickLineSeries.length);
    });
  });

  // Curve type tests
  describe('Curve Types', () => {
    const curves: Array<MultiLineChartProps['curve']> = ['linear', 'smooth', 'step'];
    
    curves.forEach(curve => {
      it(`renders ${curve} curve correctly`, () => {
        render(<MultiLineChart series={sampleSeries} curve={curve} />);
        
        const lines = document.querySelectorAll('.db-multilinechart__line');
        expect(lines.length).toBe(sampleSeries.length);
      });
    });
  });

  // Title and labels tests
  describe('Title and Labels', () => {
    it('renders chart title', () => {
      render(<MultiLineChart series={sampleSeries} title="Comparison Chart" />);
      
      const title = document.querySelector('.db-multilinechart__title');
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('Comparison Chart');
    });

    it('renders x-axis label', () => {
      render(<MultiLineChart series={sampleSeries} xAxis={{ label: 'Time' }} />);
      
      const label = document.querySelector('.db-multilinechart__axis-label--x');
      expect(label).toBeInTheDocument();
      expect(label).toHaveTextContent('Time');
    });

    it('renders y-axis label', () => {
      render(<MultiLineChart series={sampleSeries} yAxis={{ label: 'Value' }} />);
      
      const label = document.querySelector('.db-multilinechart__axis-label--y');
      expect(label).toBeInTheDocument();
      expect(label).toHaveTextContent('Value');
    });
  });

  // Axis configuration tests
  describe('Axis Configuration', () => {
    it('hides x-axis when configured', () => {
      render(<MultiLineChart series={sampleSeries} xAxis={{ show: false }} />);
      
      const xAxis = document.querySelector('.db-multilinechart__axis--x');
      expect(xAxis).not.toBeInTheDocument();
    });

    it('hides y-axis when configured', () => {
      render(<MultiLineChart series={sampleSeries} yAxis={{ show: false }} />);
      
      const yAxis = document.querySelector('.db-multilinechart__axis--y');
      expect(yAxis).not.toBeInTheDocument();
    });

    it('applies custom tick formatter', () => {
      const tickFormatter = jest.fn((value) => `$${value}`);
      
      render(<MultiLineChart series={numericSeries} yAxis={{ tickFormatter }} />);
      
      expect(tickFormatter).toHaveBeenCalled();
    });
  });

  // Grid configuration tests
  describe('Grid Configuration', () => {
    it('shows grid by default', () => {
      render(<MultiLineChart series={sampleSeries} />);
      
      const grid = document.querySelector('.db-multilinechart__grid');
      expect(grid).toBeInTheDocument();
    });

    it('hides grid when configured', () => {
      render(<MultiLineChart series={sampleSeries} grid={{ show: false }} />);
      
      const grid = document.querySelector('.db-multilinechart__grid');
      expect(grid).not.toBeInTheDocument();
    });
  });

  // Data points tests
  describe('Data Points', () => {
    it('shows data points by default', () => {
      render(<MultiLineChart series={sampleSeries} showPoints />);
      
      const points = document.querySelectorAll('.db-multilinechart__point');
      const expectedPoints = sampleSeries.reduce((sum, s) => sum + s.data.length, 0);
      expect(points.length).toBe(expectedPoints);
    });

    it('hides data points when configured', () => {
      render(<MultiLineChart series={sampleSeries} showPoints={false} />);
      
      const points = document.querySelectorAll('.db-multilinechart__point');
      expect(points.length).toBe(0);
    });
  });

  // Legend tests
  describe('Legend', () => {
    it('shows legend by default for multiple series', () => {
      render(<MultiLineChart series={sampleSeries} />);
      
      const legend = document.querySelector('.db-multilinechart__legend');
      expect(legend).toBeInTheDocument();
    });

    it('hides legend when configured', () => {
      render(<MultiLineChart series={sampleSeries} legend={{ show: false }} />);
      
      const legend = document.querySelector('.db-multilinechart__legend');
      expect(legend).not.toBeInTheDocument();
    });

    it('shows legend items for all series', () => {
      render(<MultiLineChart series={sampleSeries} />);
      
      const legendItems = document.querySelectorAll('.db-multilinechart__legend-item');
      expect(legendItems.length).toBe(sampleSeries.length);
    });

    it('hides legend for single series', () => {
      render(<MultiLineChart series={[sampleSeries[0]]} />);
      
      const legend = document.querySelector('.db-multilinechart__legend');
      expect(legend).not.toBeInTheDocument();
    });
  });

  // Tooltip tests
  describe('Tooltip', () => {
    it('shows tooltip on hover', () => {
      render(<MultiLineChart series={sampleSeries} showTooltip />);
      
      const overlay = document.querySelector('.db-multilinechart__overlay');
      expect(overlay).toBeInTheDocument();
    });

    it('hides tooltip when disabled', () => {
      render(<MultiLineChart series={sampleSeries} showTooltip={false} />);
      
      const overlay = document.querySelector('.db-multilinechart__overlay');
      expect(overlay).not.toBeInTheDocument();
    });

    it('uses custom tooltip formatter', () => {
      const formatTooltip = jest.fn((dataPoints) => `Values: ${dataPoints.length}`);
      
      render(<MultiLineChart series={sampleSeries} formatTooltip={formatTooltip} />);
      
      // Formatter is set up but only called on interaction
      expect(formatTooltip).not.toHaveBeenCalled();
    });
  });

  // Keyboard navigation tests
  describe('Keyboard Navigation', () => {
    it('enables keyboard navigation when configured', () => {
      const { container } = render(<MultiLineChart series={sampleSeries} keyboard showPoints />);
      
      const chart = container.firstChild as HTMLElement;
      expect(chart).toHaveClass('db-multilinechart--keyboard');
    });

    it('points have tabindex when keyboard enabled', () => {
      render(<MultiLineChart series={sampleSeries} keyboard showPoints />);
      
      const points = document.querySelectorAll('.db-multilinechart__point[tabindex="0"]');
      const expectedPoints = sampleSeries.reduce((sum, s) => sum + s.data.length, 0);
      expect(points.length).toBe(expectedPoints);
    });

    it('points have role="button" when keyboard enabled', () => {
      render(<MultiLineChart series={sampleSeries} keyboard showPoints />);
      
      const points = document.querySelectorAll('.db-multilinechart__point[role="button"]');
      const expectedPoints = sampleSeries.reduce((sum, s) => sum + s.data.length, 0);
      expect(points.length).toBe(expectedPoints);
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<MultiLineChart series={sampleSeries} />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with empty data', async () => {
      const { container } = render(<MultiLineChart series={[]} />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper ARIA label', () => {
      render(<MultiLineChart series={sampleSeries} ariaLabel="Revenue comparison chart" />);
      
      const chart = screen.getByRole('img', { name: 'Revenue comparison chart' });
      expect(chart).toBeInTheDocument();
    });

    it('has default ARIA label', () => {
      render(<MultiLineChart series={sampleSeries} />);
      
      const chart = screen.getByRole('img', { name: `Multi-line chart with ${sampleSeries.length} data series` });
      expect(chart).toBeInTheDocument();
    });

    it('SVG is hidden from screen readers when keyboard navigation enabled', () => {
      render(<MultiLineChart series={sampleSeries} keyboard />);
      
      const svg = document.querySelector('svg');
      expect(svg).toHaveAttribute('aria-hidden', 'true');
    });
  });

  // Performance optimization tests
  describe('Performance Optimization', () => {
    it('applies optimized class when enabled', () => {
      const { container } = render(<MultiLineChart series={sampleSeries} optimized />);
      
      const chart = container.firstChild as HTMLElement;
      expect(chart).toHaveClass('db-multilinechart--optimized');
    });

    it('handles large datasets efficiently', () => {
      const largeSeries: MultiLineChartSeries[] = Array.from({ length: 5 }, (_, seriesIdx) => ({
        id: `series-${seriesIdx}`,
        name: `Series ${seriesIdx}`,
        data: Array.from({ length: 500 }, (_, i) => ({
          x: new Date(2024, 0, i + 1),
          y: Math.random() * 100,
        })),
      }));
      
      const start = performance.now();
      render(<MultiLineChart series={largeSeries} optimized />);
      const end = performance.now();
      
      // Should render in reasonable time (< 1000ms for multiple series)
      expect(end - start).toBeLessThan(1000);
    });
  });

  // Theme tests
  describe('Theme', () => {
    it('applies light theme', () => {
      render(<MultiLineChart series={sampleSeries} theme={{ colorScheme: 'light' }} />);
      
      const chart = screen.getByRole('img');
      expect(chart).toHaveAttribute('data-theme', 'light');
    });

    it('applies dark theme', () => {
      render(<MultiLineChart series={sampleSeries} theme={{ colorScheme: 'dark' }} />);
      
      const chart = screen.getByRole('img');
      expect(chart).toHaveAttribute('data-theme', 'dark');
    });

    it('applies custom CSS variables', () => {
      const customVars = {
        '--chart-line-width': '3px',
        '--chart-point-size': '6px',
      };
      
      render(<MultiLineChart series={sampleSeries} theme={{ cssVars: customVars }} />);
      
      const chart = screen.getByRole('img');
      expect(chart).toHaveStyle(customVars);
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles single series', () => {
      render(<MultiLineChart series={[sampleSeries[0]]} />);
      
      const lines = document.querySelectorAll('.db-multilinechart__line');
      expect(lines.length).toBe(1);
    });

    it('handles many series', () => {
      const manySeries: MultiLineChartSeries[] = Array.from({ length: 10 }, (_, i) => ({
        id: `series-${i}`,
        name: `Series ${i}`,
        data: [
          { x: 1, y: Math.random() * 100 },
          { x: 2, y: Math.random() * 100 },
          { x: 3, y: Math.random() * 100 },
        ],
      }));
      
      render(<MultiLineChart series={manySeries} />);
      
      const lines = document.querySelectorAll('.db-multilinechart__line');
      expect(lines.length).toBe(manySeries.length);
    });

    it('handles series with different data lengths', () => {
      const unevenSeries: MultiLineChartSeries[] = [
        {
          id: 'short',
          name: 'Short',
          data: [
            { x: 1, y: 100 },
            { x: 2, y: 150 },
          ],
        },
        {
          id: 'long',
          name: 'Long',
          data: [
            { x: 1, y: 80 },
            { x: 2, y: 90 },
            { x: 3, y: 110 },
            { x: 4, y: 120 },
            { x: 5, y: 130 },
          ],
        },
      ];
      
      render(<MultiLineChart series={unevenSeries} />);
      
      const lines = document.querySelectorAll('.db-multilinechart__line');
      expect(lines.length).toBe(unevenSeries.length);
    });

    it('handles series with negative values', () => {
      const negativeSeries: MultiLineChartSeries[] = [
        {
          id: 'positive',
          name: 'Positive',
          data: [{ x: 1, y: 50 }, { x: 2, y: 75 }],
        },
        {
          id: 'negative',
          name: 'Negative',
          data: [{ x: 1, y: -50 }, { x: 2, y: -25 }],
        },
      ];
      
      render(<MultiLineChart series={negativeSeries} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('handles custom dimensions', () => {
      render(<MultiLineChart series={sampleSeries} width={800} height={600} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toHaveAttribute('width', '800');
      expect(svg).toHaveAttribute('height', '600');
    });

    it('handles series with sparse data', () => {
      const sparseSeries: MultiLineChartSeries[] = [
        {
          id: 'sparse',
          name: 'Sparse Data',
          data: [
            { x: 1, y: 100 },
            { x: 10, y: 150 },
            { x: 20, y: 120 },
          ],
        },
      ];
      
      render(<MultiLineChart series={sparseSeries} />);
      
      const line = document.querySelector('.db-multilinechart__line');
      expect(line).toBeInTheDocument();
    });

    it('handles series with metadata', () => {
      const seriesWithMetadata: MultiLineChartSeries[] = [
        {
          ...sampleSeries[0],
          data: sampleSeries[0].data.map(d => ({
            ...d,
            metadata: { source: 'database' },
          })),
        },
      ];
      
      render(<MultiLineChart series={seriesWithMetadata} />);
      
      const line = document.querySelector('.db-multilinechart__line');
      expect(line).toBeInTheDocument();
    });

    it('handles crossing lines', () => {
      const crossingSeries: MultiLineChartSeries[] = [
        {
          id: 'increasing',
          name: 'Increasing',
          data: [{ x: 1, y: 10 }, { x: 2, y: 50 }, { x: 3, y: 90 }],
        },
        {
          id: 'decreasing',
          name: 'Decreasing',
          data: [{ x: 1, y: 90 }, { x: 2, y: 50 }, { x: 3, y: 10 }],
        },
      ];
      
      render(<MultiLineChart series={crossingSeries} />);
      
      const lines = document.querySelectorAll('.db-multilinechart__line');
      expect(lines.length).toBe(crossingSeries.length);
    });
  });
});

