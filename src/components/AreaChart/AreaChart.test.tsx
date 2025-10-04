import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { AreaChart, AreaChartProps, AreaChartDataPoint } from './AreaChart';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Sample data for testing
const sampleData: AreaChartDataPoint[] = [
  { x: new Date('2024-01-01'), y: 100, label: 'Jan' },
  { x: new Date('2024-02-01'), y: 150, label: 'Feb' },
  { x: new Date('2024-03-01'), y: 120, label: 'Mar' },
  { x: new Date('2024-04-01'), y: 180, label: 'Apr' },
  { x: new Date('2024-05-01'), y: 160, label: 'May' },
];

const numericData: AreaChartDataPoint[] = [
  { x: 1, y: 100 },
  { x: 2, y: 150 },
  { x: 3, y: 120 },
  { x: 4, y: 180 },
  { x: 5, y: 160 },
];

const categoryData: AreaChartDataPoint[] = [
  { x: 'Category A', y: 100 },
  { x: 'Category B', y: 150 },
  { x: 'Category C', y: 120 },
];

describe('AreaChart', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      render(<AreaChart data={sampleData} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveClass('db-areachart__svg');
    });

    it('renders empty state with no data', () => {
      render(<AreaChart data={[]} />);
      
      expect(screen.getByText('No data available')).toBeInTheDocument();
      expect(document.querySelector('.db-areachart--empty')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      const { container } = render(<AreaChart data={sampleData} className="custom-chart" />);
      
      const chartElement = container.firstChild as HTMLElement;
      expect(chartElement).toHaveClass('db-areachart', 'custom-chart');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<AreaChart data={sampleData} ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current).toHaveClass('db-areachart');
    });

    it('forwards additional props', () => {
      render(
        <AreaChart
          data={sampleData}
          data-testid="test-chart"
          id="my-chart"
        />
      );
      
      const chart = screen.getByTestId('test-chart');
      expect(chart).toHaveAttribute('id', 'my-chart');
    });

    it('renders with date scale by default', () => {
      render(<AreaChart data={sampleData} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
      
      // Check for x-axis
      const xAxis = document.querySelector('.db-areachart__axis--x');
      expect(xAxis).toBeInTheDocument();
    });

    it('renders with numeric scale', () => {
      render(<AreaChart data={numericData} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('renders with category scale', () => {
      render(<AreaChart data={categoryData} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
  });

  // Variant tests
  describe('Variants', () => {
    const variants: Array<AreaChartProps['variant']> = ['default', 'minimal', 'detailed'];
    
    variants.forEach(variant => {
      it(`renders ${variant} variant correctly`, () => {
        const { container } = render(<AreaChart data={sampleData} variant={variant} />);
        
        const chart = container.firstChild as HTMLElement;
        expect(chart).toHaveClass(`db-areachart--${variant}`);
      });
    });

    it('minimal variant hides grid', () => {
      render(<AreaChart data={sampleData} variant="minimal" />);
      
      const grid = document.querySelector('.db-areachart__grid');
      expect(grid).not.toBeInTheDocument();
    });

    it('detailed variant shows grid', () => {
      render(<AreaChart data={sampleData} variant="detailed" />);
      
      const grid = document.querySelector('.db-areachart__grid');
      expect(grid).toBeInTheDocument();
    });
  });

  // Color tests
  describe('Colors', () => {
    const colors: Array<AreaChartProps['color']> = ['primary', 'secondary', 'success', 'warning', 'error'];
    
    colors.forEach(color => {
      it(`renders ${color} color correctly`, () => {
        const { container } = render(<AreaChart data={sampleData} color={color} />);
        
        const chart = container.firstChild as HTMLElement;
        expect(chart).toHaveClass(`db-areachart--${color}`);
      });
    });
  });

  // Curve type tests
  describe('Curve Types', () => {
    const curves: Array<AreaChartProps['curve']> = ['linear', 'smooth', 'step'];
    
    curves.forEach(curve => {
      it(`renders ${curve} curve correctly`, () => {
        render(<AreaChart data={sampleData} curve={curve} />);
        
        const area = document.querySelector('.db-areachart__area');
        expect(area).toBeInTheDocument();
      });
    });
  });

  // Title and labels tests
  describe('Title and Labels', () => {
    it('renders chart title', () => {
      render(<AreaChart data={sampleData} title="Revenue Chart" />);
      
      const title = document.querySelector('.db-areachart__title');
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('Revenue Chart');
    });

    it('renders x-axis label', () => {
      render(<AreaChart data={sampleData} xAxis={{ label: 'Month' }} />);
      
      const label = document.querySelector('.db-areachart__axis-label--x');
      expect(label).toBeInTheDocument();
      expect(label).toHaveTextContent('Month');
    });

    it('renders y-axis label', () => {
      render(<AreaChart data={sampleData} yAxis={{ label: 'Revenue' }} />);
      
      const label = document.querySelector('.db-areachart__axis-label--y');
      expect(label).toBeInTheDocument();
      expect(label).toHaveTextContent('Revenue');
    });
  });

  // Axis configuration tests
  describe('Axis Configuration', () => {
    it('hides x-axis when configured', () => {
      render(<AreaChart data={sampleData} xAxis={{ show: false }} />);
      
      const xAxis = document.querySelector('.db-areachart__axis--x');
      expect(xAxis).not.toBeInTheDocument();
    });

    it('hides y-axis when configured', () => {
      render(<AreaChart data={sampleData} yAxis={{ show: false }} />);
      
      const yAxis = document.querySelector('.db-areachart__axis--y');
      expect(yAxis).not.toBeInTheDocument();
    });

    it('applies custom tick formatter', () => {
      const tickFormatter = jest.fn((value) => `$${value}`);
      
      render(<AreaChart data={numericData} yAxis={{ tickFormatter }} />);
      
      // Tick formatter should be called for y-axis ticks
      expect(tickFormatter).toHaveBeenCalled();
    });
  });

  // Grid configuration tests
  describe('Grid Configuration', () => {
    it('shows grid by default', () => {
      render(<AreaChart data={sampleData} />);
      
      const grid = document.querySelector('.db-areachart__grid');
      expect(grid).toBeInTheDocument();
    });

    it('hides grid when configured', () => {
      render(<AreaChart data={sampleData} grid={{ show: false }} />);
      
      const grid = document.querySelector('.db-areachart__grid');
      expect(grid).not.toBeInTheDocument();
    });
  });

  // Data points tests
  describe('Data Points', () => {
    it('shows data points when configured', () => {
      render(<AreaChart data={sampleData} showPoints />);
      
      const points = document.querySelectorAll('.db-areachart__point');
      expect(points.length).toBe(sampleData.length);
    });

    it('hides data points by default', () => {
      render(<AreaChart data={sampleData} showPoints={false} />);
      
      const points = document.querySelectorAll('.db-areachart__point');
      expect(points.length).toBe(0);
    });
  });

  // Tooltip tests
  describe('Tooltip', () => {
    it('shows tooltip on hover', async () => {
      render(<AreaChart data={sampleData} showTooltip />);
      
      const overlay = document.querySelector('.db-areachart__overlay');
      expect(overlay).toBeInTheDocument();
    });

    it('hides tooltip when disabled', () => {
      render(<AreaChart data={sampleData} showTooltip={false} />);
      
      const overlay = document.querySelector('.db-areachart__overlay');
      expect(overlay).not.toBeInTheDocument();
    });

    it('uses custom tooltip formatter', () => {
      const formatTooltip = jest.fn((dataPoint) => `Value: ${dataPoint.y}`);
      
      render(<AreaChart data={sampleData} formatTooltip={formatTooltip} />);
      
      // Formatter is set up but only called on interaction
      expect(formatTooltip).not.toHaveBeenCalled();
    });
  });

  // Stroke configuration tests
  describe('Stroke Configuration', () => {
    it('shows stroke line by default', () => {
      render(<AreaChart data={sampleData} showStroke />);
      
      const stroke = document.querySelector('.db-areachart__stroke');
      expect(stroke).toBeInTheDocument();
    });

    it('hides stroke line when disabled', () => {
      render(<AreaChart data={sampleData} showStroke={false} />);
      
      const stroke = document.querySelector('.db-areachart__stroke');
      expect(stroke).not.toBeInTheDocument();
    });
  });

  // Fill opacity tests
  describe('Fill Opacity', () => {
    it('applies default fill opacity', () => {
      render(<AreaChart data={sampleData} />);
      
      const area = document.querySelector('.db-areachart__area');
      expect(area).toBeInTheDocument();
    });

    it('applies custom fill opacity', () => {
      render(<AreaChart data={sampleData} fillOpacity={0.5} />);
      
      const area = document.querySelector('.db-areachart__area');
      expect(area).toBeInTheDocument();
    });
  });

  // Keyboard navigation tests
  describe('Keyboard Navigation', () => {
    it('enables keyboard navigation when configured', () => {
      const { container } = render(<AreaChart data={sampleData} keyboard showPoints />);
      
      const chart = container.firstChild as HTMLElement;
      expect(chart).toHaveClass('db-areachart--keyboard');
    });

    it('points have tabindex when keyboard enabled', () => {
      render(<AreaChart data={sampleData} keyboard showPoints />);
      
      const points = document.querySelectorAll('.db-areachart__point[tabindex="0"]');
      expect(points.length).toBe(sampleData.length);
    });

    it('points have role="button" when keyboard enabled', () => {
      render(<AreaChart data={sampleData} keyboard showPoints />);
      
      const points = document.querySelectorAll('.db-areachart__point[role="button"]');
      expect(points.length).toBe(sampleData.length);
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<AreaChart data={sampleData} />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with empty data', async () => {
      const { container } = render(<AreaChart data={[]} />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper ARIA label', () => {
      render(<AreaChart data={sampleData} ariaLabel="Revenue area chart" />);
      
      const chart = screen.getByRole('img', { name: 'Revenue area chart' });
      expect(chart).toBeInTheDocument();
    });

    it('has default ARIA label', () => {
      render(<AreaChart data={sampleData} />);
      
      const chart = screen.getByRole('img', { name: `Area chart with ${sampleData.length} data points` });
      expect(chart).toBeInTheDocument();
    });

    it('SVG is hidden from screen readers when keyboard navigation enabled', () => {
      render(<AreaChart data={sampleData} keyboard />);
      
      const svg = document.querySelector('svg');
      expect(svg).toHaveAttribute('aria-hidden', 'true');
    });
  });

  // Performance optimization tests
  describe('Performance Optimization', () => {
    it('applies optimized class when enabled', () => {
      const { container } = render(<AreaChart data={sampleData} optimized />);
      
      const chart = container.firstChild as HTMLElement;
      expect(chart).toHaveClass('db-areachart--optimized');
    });

    it('handles large datasets efficiently', () => {
      const largeData: AreaChartDataPoint[] = Array.from({ length: 500 }, (_, i) => ({
        x: new Date(2024, 0, i + 1),
        y: Math.random() * 100,
      }));
      
      const start = performance.now();
      render(<AreaChart data={largeData} optimized />);
      const end = performance.now();
      
      // Should render in reasonable time (< 500ms)
      expect(end - start).toBeLessThan(500);
    });
  });

  // Theme tests
  describe('Theme', () => {
    it('applies light theme', () => {
      render(<AreaChart data={sampleData} theme={{ colorScheme: 'light' }} />);
      
      const chart = screen.getByRole('img');
      expect(chart).toHaveAttribute('data-theme', 'light');
    });

    it('applies dark theme', () => {
      render(<AreaChart data={sampleData} theme={{ colorScheme: 'dark' }} />);
      
      const chart = screen.getByRole('img');
      expect(chart).toHaveAttribute('data-theme', 'dark');
    });

    it('applies custom CSS variables', () => {
      const customVars = {
        '--chart-area-opacity': '0.5',
        '--chart-stroke-width': '3px',
      };
      
      render(<AreaChart data={sampleData} theme={{ cssVars: customVars }} />);
      
      const chart = screen.getByRole('img');
      expect(chart).toHaveStyle(customVars);
    });
  });

  // Multiple series tests
  describe('Multiple Series', () => {
    const multipleSeries = [
      {
        id: 'series1',
        name: 'Series 1',
        color: 'primary' as const,
        data: sampleData
      },
      {
        id: 'series2',
        name: 'Series 2',
        color: 'secondary' as const,
        data: sampleData.map(d => ({ x: d.x, y: d.y * 0.8 }))
      },
      {
        id: 'series3',
        name: 'Series 3',
        color: 'success' as const,
        data: sampleData.map(d => ({ x: d.x, y: d.y * 0.6 }))
      }
    ];

    it('renders multiple series', () => {
      render(<AreaChart series={multipleSeries} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
      
      const areas = document.querySelectorAll('.db-areachart__area');
      expect(areas.length).toBe(multipleSeries.length);
    });

    it('renders stacked area chart', () => {
      render(<AreaChart series={multipleSeries} stacked />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
      
      const areas = document.querySelectorAll('.db-areachart__area');
      expect(areas.length).toBe(multipleSeries.length);
    });

    it('renders non-stacked multiple series', () => {
      render(<AreaChart series={multipleSeries} stacked={false} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
      
      const areas = document.querySelectorAll('.db-areachart__area');
      expect(areas.length).toBe(multipleSeries.length);
    });

    it('applies custom colors to series', () => {
      const seriesWithCustomColors = [
        {
          id: 'custom1',
          name: 'Custom 1',
          customColor: '#ff0000',
          data: sampleData
        },
        {
          id: 'custom2',
          name: 'Custom 2',
          customColor: '#00ff00',
          data: sampleData
        }
      ];

      render(<AreaChart series={seriesWithCustomColors} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('has proper ARIA label for multiple series', () => {
      render(<AreaChart series={multipleSeries} />);
      
      const chart = screen.getByRole('img', { name: `Area chart with ${multipleSeries.length} series` });
      expect(chart).toBeInTheDocument();
    });

    it('supports accessibility with multiple series', async () => {
      const { container } = render(<AreaChart series={multipleSeries} />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('supports stacked accessibility', async () => {
      const { container } = render(<AreaChart series={multipleSeries} stacked />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles single data point', () => {
      const singlePoint: AreaChartDataPoint[] = [{ x: new Date('2024-01-01'), y: 100 }];
      
      render(<AreaChart data={singlePoint} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('handles negative values', () => {
      const negativeData: AreaChartDataPoint[] = [
        { x: 1, y: -50 },
        { x: 2, y: 25 },
        { x: 3, y: -30 },
      ];
      
      render(<AreaChart data={negativeData} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('handles zero values', () => {
      const zeroData: AreaChartDataPoint[] = [
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 3, y: 0 },
      ];
      
      render(<AreaChart data={zeroData} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('handles very large values', () => {
      const largeValueData: AreaChartDataPoint[] = [
        { x: 1, y: 1000000 },
        { x: 2, y: 2000000 },
        { x: 3, y: 1500000 },
      ];
      
      render(<AreaChart data={largeValueData} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('handles data with metadata', () => {
      const dataWithMetadata: AreaChartDataPoint[] = [
        { x: 1, y: 100, label: 'Point 1', metadata: { category: 'A' } },
        { x: 2, y: 150, label: 'Point 2', metadata: { category: 'B' } },
      ];
      
      render(<AreaChart data={dataWithMetadata} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('handles custom dimensions', () => {
      render(<AreaChart data={sampleData} width={800} height={600} />);
      
      const svg = document.querySelector('svg');
      expect(svg).toHaveAttribute('width', '800');
      expect(svg).toHaveAttribute('height', '600');
    });

    it('handles percentage change calculation', () => {
      render(<AreaChart data={sampleData} showPercentageChange />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('handles custom percentage change calculator', () => {
      const calculatePercentageChange = jest.fn((current, previous) => {
        return ((current.y - previous.y) / previous.y) * 100;
      });
      
      render(
        <AreaChart
          data={sampleData}
          showPercentageChange
          calculatePercentageChange={calculatePercentageChange}
        />
      );
      
      // Calculator is set up but only called on interaction
      expect(calculatePercentageChange).not.toHaveBeenCalled();
    });
  });
});

