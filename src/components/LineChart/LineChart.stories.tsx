import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LineChart } from './LineChart';
import { ChartAggregates } from './ChartAggregates';
import {
  LineChartContainer,
  LineChartHeader,
  LineChartLegend,
  LineChartContent
} from './LineChartCompound';

/**
 * Modern LineChart Component Stories
 * 
 * All stories demonstrate the modern configuration API using:
 * - Configuration objects (xAxis, yAxis, grid, theme, animation)
 * - Variant-based styling (default, minimal, detailed)
 * - Enhanced accessibility and performance features
 * - Compound component patterns for complex layouts
 * 
 * Stories organized by:
 * - Core Examples: Default, InteractiveTooltips
 * - Styling Variants: AllColors, AllVariants, CurveTypes  
 * - Modern Features: ModernCompoundComponents, TooltipPositioningTest
 * - Advanced Usage: FinancialDashboard, ThemeVariations
 * - Scale Testing: LargeChart, EnhancedAccessibility
 */

const meta: Meta<typeof LineChart> = {
  title: 'Data Display/LineChart',
  component: LineChart,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A modern, powerful line chart component built with D3.js for the Databricks Design System.

## Modern Architecture
- **Configuration Objects**: Use \`xAxis\`, \`yAxis\`, \`grid\`, \`theme\`, and \`animation\` objects for granular control
- **Variant System**: Choose from \`default\`, \`minimal\`, or \`detailed\` variants with automatic styling
- **Compound Components**: Compose complex layouts with \`LineChartContainer\`, \`LineChartHeader\`, etc.

## Key Features
- **Interactive Tooltips**: Rich tooltips with precise positioning and percentage change calculations
- **Performance Optimized**: Hardware acceleration, \`requestAnimationFrame\` positioning, and optimized rendering
- **Accessibility First**: Full keyboard navigation, ARIA support, and screen reader compatibility
- **Theme System**: Built-in light/dark mode support with custom CSS variable theming
- **Responsive**: Intelligent viewport boundary handling and responsive design patterns

## Modern Usage
\`\`\`tsx
<LineChart
  data={data}
  variant="detailed"
  xAxis={{ label: "Time", variant: "minimal", tickCount: 6 }}
  yAxis={{ label: "Value", tickFormatter: (val) => \`$\${val}K\` }}
  theme={{ colorScheme: "auto" }}
  animation={{ enabled: true, duration: 300 }}
  keyboard={true}
  optimized={true}
/>
\`\`\`

Perfect for modern dashboards requiring advanced data visualization with excellent UX.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      description: 'Array of data points to display',
      control: { type: 'object' },
    },
    width: {
      description: 'Chart width in pixels',
      control: { type: 'number', min: 200, max: 1200, step: 50 },
    },
    height: {
      description: 'Chart height in pixels',
      control: { type: 'number', min: 150, max: 800, step: 50 },
    },
    variant: {
      description: 'Chart display variant',
      control: { type: 'select' },
      options: ['default', 'minimal', 'detailed'],
    },
    color: {
      description: 'Color scheme for the line and points',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error'],
    },
    showGrid: {
      description: 'Show grid lines',
      control: { type: 'boolean' },
    },
    showPoints: {
      description: 'Show data points on the line',
      control: { type: 'boolean' },
    },
    showTooltip: {
      description: 'Show tooltip on hover',
      control: { type: 'boolean' },
    },
    curve: {
      description: 'Line curve type',
      control: { type: 'select' },
      options: ['linear', 'smooth', 'step'],
    },
    showPercentageChange: {
      description: 'Show percentage change in tooltips',
      control: { type: 'boolean' },
    },
    title: {
      description: 'Chart title',
      control: { type: 'text' },
    },
    xAxisLabel: {
      description: 'X-axis label',
      control: { type: 'text' },
    },
    yAxisLabel: {
      description: 'Y-axis label',
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data generators
const generateTimeSeriesData = (points: number = 12) => {
  const startDate = new Date('2024-01-01');
  return Array.from({ length: points }, (_, i) => ({
    x: new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000 * 30), // Monthly data
    y: Math.round((Math.sin(i * 0.5) * 20 + 50 + Math.random() * 10) * 100) / 100,
    label: `Point ${i + 1}`,
  }));
};

const generateNumericData = (points: number = 10) => {
  return Array.from({ length: points }, (_, i) => ({
    x: i * 2,
    y: Math.round((Math.pow(i, 1.5) + Math.random() * 10) * 100) / 100,
    label: `Value ${i}`,
  }));
};

const generateCategoricalData = () => [
  { x: 'Q1', y: 45, label: 'Q1 2024' },
  { x: 'Q2', y: 62, label: 'Q2 2024' },
  { x: 'Q3', y: 58, label: 'Q3 2024' },
  { x: 'Q4', y: 71, label: 'Q4 2024' },
];

const performanceData = [
  { x: new Date('2024-01-01'), y: 85 },
  { x: new Date('2024-02-01'), y: 92 },
  { x: new Date('2024-03-01'), y: 78 },
  { x: new Date('2024-04-01'), y: 96 },
  { x: new Date('2024-05-01'), y: 89 },
  { x: new Date('2024-06-01'), y: 94 },
  { x: new Date('2024-07-01'), y: 87 },
  { x: new Date('2024-08-01'), y: 91 },
  { x: new Date('2024-09-01'), y: 98 },
];

export const Default: Story = {
  args: {
    data: generateTimeSeriesData(12),
    width: 700,
    height: 400,
    title: 'Monthly Revenue Trend',
    color: 'primary',
    curve: 'smooth',
    showTooltip: true,
    showPercentageChange: true,
    xAxis: {
      label: 'Month',
      variant: 'default',
    },
    yAxis: {
      label: 'Revenue ($K)',
      variant: 'default',
    },
    grid: {
      show: true,
      strokeDasharray: '2,2',
      opacity: 0.3,
    },
    theme: {
      colorScheme: 'auto',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Modern LineChart with configuration objects. Uses xAxis and yAxis objects for enhanced control over chart appearance and behavior.',
      },
    },
  },
};

export const InteractiveTooltips: Story = {
  args: {
    data: [
      { x: new Date('2024-01-01'), y: 2250 },
      { x: new Date('2024-02-01'), y: 2180 },
      { x: new Date('2024-03-01'), y: 2420 },
      { x: new Date('2024-04-01'), y: 2680 },
      { x: new Date('2024-05-01'), y: 2890 },
      { x: new Date('2024-06-01'), y: 3100 },
      { x: new Date('2024-07-01'), y: 2950 },
      { x: new Date('2024-08-01'), y: 3200 },
      { x: new Date('2024-09-01'), y: 3400 },
    ],
    width: 700,
    height: 350,
    title: 'Sales Performance (Hover for Details)',
    color: 'primary',
    curve: 'smooth',
    showTooltip: true,
    showPercentageChange: true,
    xAxis: {
      label: 'Month',
      variant: 'default',
    },
    yAxis: {
      label: 'Sales ($)',
      variant: 'default',
      tickFormatter: (value: number) => `$${(value / 1000).toFixed(1)}K`,
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates interactive tooltips with modern axis configuration. Shows how to use tickFormatter in the yAxis configuration for custom value formatting.',
      },
    },
  },
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <LineChart
        data={generateTimeSeriesData(8)}
        width={500}
        height={180}
        color="primary"
        title="Primary (Default)"
        showTooltip={true}
        variant="default"
      />
      <LineChart
        data={generateTimeSeriesData(8)}
        width={500}
        height={180}
        color="secondary"
        title="Secondary (Teal)"
        showTooltip={true}
        variant="default"
      />
      <LineChart
        data={generateTimeSeriesData(8)}
        width={500}
        height={180}
        color="success"
        title="Success (Green)"
        showTooltip={true}
        variant="default"
      />
      <LineChart
        data={generateTimeSeriesData(8)}
        width={500}
        height={180}
        color="warning"
        title="Warning (Orange)"
        showTooltip={true}
        variant="default"
      />
      <LineChart
        data={generateTimeSeriesData(8)}
        width={500}
        height={180}
        color="error"
        title="Error (Red)"
        showTooltip={true}
        variant="default"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows all available color schemes from the Databricks Design System. Each chart uses the modern variant-based configuration system.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3>Default Variant</h3>
        <p style={{ color: '#5F7281', fontSize: '14px', marginBottom: '16px' }}>
          Standard configuration with balanced grid and styling
        </p>
        <LineChart
          data={generateTimeSeriesData(8)}
          width={500}
          height={200}
          variant="default"
          title="Default Configuration"
          showTooltip={true}
          color="primary"
        />
      </div>
      
      <div>
        <h3>Minimal Variant</h3>
        <p style={{ color: '#5F7281', fontSize: '14px', marginBottom: '16px' }}>
          Clean design with no grid, minimal axes for focus on data
        </p>
        <LineChart
          data={generateTimeSeriesData(8)}
          width={500}
          height={200}
          variant="minimal"
          title="Minimal Configuration"
          showTooltip={true}
          color="secondary"
        />
      </div>
      
      <div>
        <h3>Detailed Variant</h3>
        <p style={{ color: '#5F7281', fontSize: '14px', marginBottom: '16px' }}>
          Enhanced styling with thicker lines, larger points, and fine grid
        </p>
        <LineChart
          data={generateTimeSeriesData(8)}
          width={500}
          height={200}
          variant="detailed"
          title="Detailed Configuration"
          showTooltip={true}
          color="success"
          animation={{ enabled: true, duration: 300 }}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the three chart variants with modern configuration. Each variant automatically configures grid, axes, animations, and styling for different use cases.',
      },
    },
  },
};

export const CurveTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <LineChart
        data={generateNumericData(8)}
        width={500}
        height={200}
        curve="linear"
        title="Linear Curve (Straight Lines)"
        showTooltip={true}
        color="primary"
        xAxis={{ label: "X Value" }}
        yAxis={{ label: "Y Value" }}
      />
      <LineChart
        data={generateNumericData(8)}
        width={500}
        height={200}
        curve="smooth"
        title="Smooth Curve (Cardinal Spline)"
        showTooltip={true}
        color="secondary"
        xAxis={{ label: "X Value" }}
        yAxis={{ label: "Y Value" }}
      />
      <LineChart
        data={generateNumericData(8)}
        width={500}
        height={200}
        curve="step"
        title="Step Curve (Step-After)"
        showTooltip={true}
        color="success"
        xAxis={{ label: "X Value" }}
        yAxis={{ label: "Y Value" }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates different curve interpolation methods using modern axis configuration objects.',
      },
    },
  },
};

export const TooltipComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', color: '#1F272D' }}>With Interactive Tooltips</h3>
        <LineChart
          data={generateTimeSeriesData(10)}
          width={600}
          height={250}
          title="Hover over data points to see tooltips"
          showTooltip={true}
          showPercentageChange={true}
          color="primary"
          curve="smooth"
        />
      </div>
      <div>
        <h3 style={{ margin: '0 0 16px 0', color: '#1F272D' }}>Without Tooltips</h3>
        <LineChart
          data={generateTimeSeriesData(10)}
          width={600}
          height={250}
          title="Static chart with no hover interactions"
          showTooltip={false}
          color="secondary"
          curve="smooth"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Compares charts with and without tooltip functionality. Use the showTooltip boolean prop to enable or disable interactive tooltips, vertical line indicators, and hover circles.',
      },
    },
  },
};

export const PerformanceDashboard: Story = {
  args: {
    data: performanceData,
    width: 700,
    height: 400,
    color: 'primary',
    title: 'System Performance Score',
    xAxisLabel: 'Month',
    yAxisLabel: 'Performance Score (%)',
    curve: 'smooth',
    showGrid: true,
    showPoints: true,
    showTooltip: true,
    showPercentageChange: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'A complete performance monitoring dashboard with smooth curves, data points, and interactive tooltips showing performance trends over time.',
      },
    },
  },
};

export const NumericData: Story = {
  args: {
    data: generateNumericData(12),
    width: 600,
    height: 350,
    color: 'secondary',
    title: 'Growth Function',
    xAxisLabel: 'Input Value',
    yAxisLabel: 'Output Value',
    curve: 'smooth',
  },
};

export const CategoricalData: Story = {
  args: {
    data: generateCategoricalData(),
    width: 500,
    height: 300,
    color: 'success',
    title: 'Quarterly Results',
    xAxisLabel: 'Quarter',
    yAxisLabel: 'Revenue ($M)',
    curve: 'linear',
  },
};

export const MinimalChart: Story = {
  args: {
    data: generateTimeSeriesData(6),
    width: 400,
    height: 200,
    variant: 'minimal',
    color: 'primary',
    showGrid: false,
    showPoints: false,
    showTooltip: true,
  },
};

export const DetailedChart: Story = {
  args: {
    data: generateTimeSeriesData(10),
    width: 800,
    height: 500,
    variant: 'detailed',
    color: 'primary',
    title: 'Detailed Analytics View',
    xAxisLabel: 'Time Period',
    yAxisLabel: 'Metrics Value',
    showGrid: true,
    showPoints: true,
    showTooltip: true,
  },
};

export const WithoutPoints: Story = {
  args: {
    data: generateTimeSeriesData(15),
    width: 600,
    height: 300,
    color: 'warning',
    title: 'Trend Line Only',
    showPoints: false,
    curve: 'smooth',
  },
};

export const WithoutGrid: Story = {
  args: {
    data: generateTimeSeriesData(8),
    width: 600,
    height: 300,
    color: 'error',
    title: 'Clean View',
    showGrid: false,
    curve: 'smooth',
  },
};

export const SmallChart: Story = {
  args: {
    data: generateTimeSeriesData(6),
    width: 300,
    height: 150,
    color: 'primary',
    showGrid: false,
    showPoints: true,
    showTooltip: true,
    variant: 'minimal',
  },
};

export const LargeChart: Story = {
  args: {
    color: "primary",
    data: [
      {
        label: 'Point 1',
        x: new Date('2024-01-01T00:00:00.000Z'),
        y: 55.82
      },
      {
        label: 'Point 2',
        x: new Date('2024-01-31T00:00:00.000Z'),
        y: 60.97
      },
      {
        label: 'Point 3',
        x: new Date('2024-03-01T00:00:00.000Z'),
        y: 75.63
      },
      {
        label: 'Point 4',
        x: new Date('2024-03-31T00:00:00.000Z'),
        y: 73.03
      },
      {
        label: 'Point 5',
        x: new Date('2024-04-30T00:00:00.000Z'),
        y: 72.3
      },
      {
        label: 'Point 6',
        x: new Date('2024-05-30T00:00:00.000Z'),
        y: 69.97
      },
      {
        label: 'Point 7',
        x: new Date('2024-06-29T00:00:00.000Z'),
        y: 58.09
      },
      {
        label: 'Point 8',
        x: new Date('2024-07-29T00:00:00.000Z'),
        y: 44.73
      },
      {
        label: 'Point 9',
        x: new Date('2024-08-28T00:00:00.000Z'),
        y: 36.13
      },
      {
        label: 'Point 10',
        x: new Date('2024-09-27T00:00:00.000Z'),
        y: 30.88
      },
      {
        label: 'Point 11',
        x: new Date('2024-10-27T00:00:00.000Z'),
        y: 34.89
      },
      {
        label: 'Point 12',
        x: new Date('2024-11-26T00:00:00.000Z'),
        y: 43.98
      },
      {
        label: 'Point 13',
        x: new Date('2024-12-26T00:00:00.000Z'),
        y: 51.04
      },
      {
        label: 'Point 14',
        x: new Date('2025-01-25T00:00:00.000Z'),
        y: 56.25
      },
      {
        label: 'Point 15',
        x: new Date('2025-02-24T00:00:00.000Z'),
        y: 68.63
      },
      {
        label: 'Point 16',
        x: new Date('2025-03-26T00:00:00.000Z'),
        y: 76.12
      },
      {
        label: 'Point 17',
        x: new Date('2025-04-25T00:00:00.000Z'),
        y: 74.68
      },
      {
        label: 'Point 18',
        x: new Date('2025-05-25T00:00:00.000Z'),
        y: 70.2
      },
      {
        label: 'Point 19',
        x: new Date('2025-06-24T00:00:00.000Z'),
        y: 62.32
      },
      {
        label: 'Point 20',
        x: new Date('2025-07-24T00:00:00.000Z'),
        y: 57.72
      }
    ],
    height: 600,
    title: "Comprehensive Data View",
    variant: "detailed",
    width: 1000,
    xAxis: {
      label: "Time Series",
      variant: "detailed",
      tickCount: 8,
    },
    yAxis: {
      label: "Value Metrics", 
      variant: "detailed",
      tickCount: 8,
    },
    showTooltip: true,
    showPercentageChange: true,
    curve: 'smooth',
    showPoints: true,
    optimized: true,
    animation: {
      enabled: true,
      duration: 300,
      easing: 'ease-out'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Large chart demonstrating modern configuration with detailed variant. Shows enhanced styling, optimized performance, and precise tooltip positioning with the new axis configuration objects.',
      },
    },
  },
};

export const EmptyState: Story = {
  args: {
    data: [],
    width: 600,
    height: 400,
    title: 'No Data Available',
  },
};

export const CustomFormatting: Story = {
  args: {
    data: [
      { x: new Date('2024-01-01'), y: 1250.75 },
      { x: new Date('2024-02-01'), y: 1890.25 },
      { x: new Date('2024-03-01'), y: 2100.50 },
      { x: new Date('2024-04-01'), y: 1750.00 },
      { x: new Date('2024-05-01'), y: 2450.80 },
      { x: new Date('2024-06-01'), y: 2890.15 },
    ],
    width: 600,
    height: 400,
    color: 'success',
    title: 'Revenue Growth (Custom Formatting)',
    xAxisLabel: 'Month',
    yAxisLabel: 'Revenue',
    showTooltip: true,
    showPercentageChange: true,
    formatY: (value: number) => `$${(value / 1000).toFixed(1)}K`,
    formatTooltip: (dataPoint: any) => {
      const date = new Date(dataPoint.x).toLocaleDateString('en-US', { 
        month: 'short', 
        year: 'numeric' 
      });
      const value = `$${(dataPoint.y / 1000).toFixed(1)}K`;
      return `<div class="db-linechart__tooltip-content">
        <div class="db-linechart__tooltip-date">${date}</div>
        <div class="db-linechart__tooltip-value">${value}</div>
      </div>`;
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates custom formatting for both axis labels and tooltip content. Shows how to format currency values and customize the tooltip display.',
      },
    },
  },
};

export const EnhancedTooltips: Story = {
  args: {
    data: generateTimeSeriesData(12),
    width: 700,
    height: 400,
    color: 'primary',
    title: 'Enhanced Tooltips with Percentage Change',
    xAxisLabel: 'Time Period',
    yAxisLabel: 'Value',
    showPercentageChange: true,
    curve: 'smooth',
  },
};

export const FinancialDashboard: Story = {
  render: () => {
    const financialData = [
      { x: new Date('2024-01-01'), y: 22500 },
      { x: new Date('2024-01-15'), y: 24200 },
      { x: new Date('2024-02-01'), y: 23800 },
      { x: new Date('2024-02-15'), y: 25100 },
      { x: new Date('2024-03-01'), y: 24850 },
      { x: new Date('2024-03-15'), y: 26300 },
      { x: new Date('2024-03-30'), y: 24847.83 },
    ];

    return (
      <div style={{ padding: '24px', backgroundColor: '#F6F7F9', borderRadius: '12px', maxWidth: '900px' }}>
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ 
            margin: '0 0 8px 0', 
            fontSize: '14px', 
            color: '#5F7281',
            fontWeight: '400' 
          }}>
            Current Balance
          </h2>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
            <span style={{ 
              fontSize: '28px', 
              fontWeight: '700', 
              color: '#1F272D' 
            }}>
              $24,847.83
            </span>
            <span style={{ 
              fontSize: '14px', 
              color: '#3BA65E', 
              fontWeight: '500' 
            }}>
              ↗ +12.7% Last 24 hours
            </span>
          </div>
        </div>

        <ChartAggregates 
          data={financialData}
          formatValue={(value: number) => `$${(value / 1000).toFixed(1)}K`}
          metrics={[
            { label: 'Today\'s Sales', value: '$1,249', change: 8, color: 'neutral' },
            { label: 'High', value: '$26.3K', color: 'success' },
            { label: 'Low', value: '$22.5K', color: 'warning' },
            { label: 'Change', value: '+10.4%', change: 10.4, color: 'success' },
          ]}
          layout="horizontal"
        />

        <LineChart
          data={financialData}
          width={800}
          height={300}
          color="primary"
          showTooltip={true}
          showPercentageChange={true}
          curve="smooth"
          showGrid={true}
          showPoints={true}
          formatY={(value: number) => `$${(value / 1000).toFixed(1)}K`}
          formatTooltip={(dataPoint: any, index?: number) => {
            const date = new Date(dataPoint.x).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric' 
            });
            const value = `$${(dataPoint.y / 1000).toFixed(1)}K`;
            return `<div class="db-linechart__tooltip-content">
              <div class="db-linechart__tooltip-date">${date}</div>
              <div class="db-linechart__tooltip-value">${value}</div>
            </div>`;
          }}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete financial dashboard combining ChartAggregates with LineChart. Demonstrates a real-world use case with balance display, key metrics, and interactive chart with custom tooltip formatting.',
      },
    },
  },
};

export const WithAggregates: Story = {
  render: () => {
    const sampleData = generateTimeSeriesData(10);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <ChartAggregates 
          data={sampleData}
          layout="horizontal"
          showChange={true}
        />
        <LineChart
          data={sampleData}
          width={600}
          height={300}
          color="primary"
          title="Sales Performance"
          showPercentageChange={true}
        />
      </div>
    );
  },
};

export const AggregatesVariants: Story = {
  render: () => {
    const sampleData = generateTimeSeriesData(8);
    const customMetrics = [
      { label: 'Revenue', value: '$125,432', change: 15.2, color: 'success' as const },
      { label: 'Users', value: '45,231', change: -2.1, color: 'error' as const },
      { label: 'Conversion', value: '3.2%', change: 0.8, color: 'warning' as const },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div>
          <h3>Horizontal Layout</h3>
          <ChartAggregates metrics={customMetrics} layout="horizontal" />
        </div>
        
        <div>
          <h3>Vertical Layout</h3>
          <ChartAggregates metrics={customMetrics} layout="vertical" />
        </div>
        
        <div>
          <h3>Grid Layout</h3>
          <ChartAggregates metrics={customMetrics} layout="grid" />
        </div>
      </div>
    );
  },
};

export const CompoundComponentsTest: Story = {
  render: () => {
    const testData = generateTimeSeriesData(6);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <h3>Simple Compound Layout Test</h3>
        
        {/* Test standalone compound components */}
        <LineChartContainer variant="card">
          <LineChartHeader 
            title="Test Chart" 
            subtitle="Testing compound components without context issues"
          />
          
          <div style={{ padding: '16px' }}>
            <LineChart
              data={testData}
              width={500}
              height={200}
              color="primary"
              showTooltip={true}
            />
          </div>
          
          <LineChartLegend
            items={[{ label: 'Test Data', color: '#2272B4', symbol: 'line' }]}
            position="bottom"
          />
        </LineChartContainer>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Simple test to verify compound components work without context errors. This validates that compound components can be used as layout containers around LineChart.',
      },
    },
  },
};

// Modern shadcn/ui inspired compound component examples
export const ModernCompoundComponents: Story = {
  render: () => {
    const performanceData = generateTimeSeriesData(12);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {/* Card variant with compound components */}
        <LineChartContainer variant="card">
          <LineChartHeader 
            title="Performance Analytics" 
            subtitle="System performance over the last 12 months"
          />
          
          <ChartAggregates 
            data={performanceData}
            metrics={[
              { label: 'Peak', value: '94.2%', color: 'success' },
              { label: 'Average', value: '87.5%', color: 'primary' },
              { label: 'Minimum', value: '76.8%', color: 'warning' },
            ]}
            layout="horizontal"
          />
          
          <LineChart
            data={performanceData}
            width={600}
            height={300}
            color="primary"
            showTooltip={true}
            showPercentageChange={true}
            curve="smooth"
            xAxis={{ label: 'Month', variant: 'minimal' }}
            yAxis={{ label: 'Performance Score (%)', tickCount: 5 }}
            grid={{ strokeDasharray: '1,3', opacity: 0.2 }}
          />
          
          <LineChartLegend
            items={[
              { label: 'Performance Score', color: '#2272B4', symbol: 'line' }
            ]}
            position="bottom"
          />
        </LineChartContainer>

        {/* Minimal variant */}
        <LineChartContainer variant="minimal">
          <LineChartHeader title="Revenue Trend (Minimal)" />
          <LineChart
            data={performanceData.slice(0, 8)}
            width={500}
            height={200}
            variant="minimal"
            color="success"
            showTooltip={true}
            grid={{ show: false }}
            xAxis={{ show: false }}
            yAxis={{ show: false }}
          />
        </LineChartContainer>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Modern compound component examples inspired by shadcn/ui patterns. Shows how to compose complex chart layouts using LineChartContainer, LineChartHeader, and other compound components. Note: LineChart provides its own context, so compound components work as layout containers.',
      },
    },
  },
};

export const EnhancedAccessibility: Story = {
  args: {
    data: generateTimeSeriesData(8),
    width: 600,
    height: 300,
    color: 'primary',
    title: 'Accessible Line Chart',
    showTooltip: true,
    keyboard: true,
    ariaLabel: 'Monthly sales data chart showing an upward trend over 8 months',
    xAxis: { 
      label: 'Month',
      tickFormatter: (d: any) => new Date(d).toLocaleDateString('en-US', { month: 'short' })
    },
    yAxis: { 
      label: 'Sales ($)',
      tickFormatter: (d: number) => `$${d.toFixed(0)}K`
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Enhanced accessibility features including keyboard navigation (use Tab to navigate data points), ARIA labels, and screen reader support. Try using Tab key to navigate through the data points.',
      },
    },
  },
};

export const ModernConfiguration: Story = {
  args: {
    data: generateTimeSeriesData(10),
    width: 700,
    height: 350,
    color: 'primary',
    showTooltip: true,
    showPercentageChange: true,
    optimized: true,
    hoverDebounce: 50,
    xAxis: {
      label: 'Time Period',
      variant: 'detailed',
      tickCount: 6,
    },
    yAxis: {
      label: 'Value Metric',
      variant: 'detailed',
      tickCount: 8,
    },
    grid: {
      show: true,
      strokeDasharray: '2,4',
      opacity: 0.15,
    },
    theme: {
      colorScheme: 'auto',
      cssVars: {
        '--chart-line-width': '3px',
        '--chart-point-size': '6px',
      },
    },
    animation: {
      enabled: true,
      duration: 300,
      easing: 'ease-out',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Modern configuration API using the new enhanced props. Shows fine-grained control over axes, grid, theming, and animations using the new configuration objects instead of flat props.',
      },
    },
  },
};

export const TooltipPositioningTest: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3>Fixed Tooltip Positioning</h3>
        <p style={{ color: '#5F7281', fontSize: '14px', marginBottom: '16px' }}>
          This test demonstrates the corrected tooltip positioning. The tooltip should appear directly above (or below if constrained by viewport) the hovered data point with proper alignment.
        </p>
        <LineChart
          color="primary"
          data={[
            { x: new Date('2024-01-01'), y: 45 },
            { x: new Date('2024-02-01'), y: 52 },
            { x: new Date('2024-03-01'), y: 48 },
            { x: new Date('2024-04-01'), y: 61 },
            { x: new Date('2024-05-01'), y: 55 },
            { x: new Date('2024-06-01'), y: 67 },
            { x: new Date('2024-07-01'), y: 59 },
            { x: new Date('2024-08-01'), y: 73 },
            { x: new Date('2024-09-01'), y: 69 },
            { x: new Date('2024-10-01'), y: 77 },
          ]}
          width={800}
          height={400}
          title="Tooltip Positioning Test Chart"
          xAxisLabel="Date"
          yAxisLabel="Value"
          showTooltip={true}
          showPercentageChange={true}
          curve="smooth"
          variant="detailed"
        />
      </div>
      
      <div>
        <h3>Edge Case: Chart at Viewport Edge</h3>
        <p style={{ color: '#5F7281', fontSize: '14px', marginBottom: '16px' }}>
          Test tooltip behavior when chart is positioned near viewport edges.
        </p>
        <LineChart
          data={generateTimeSeriesData(8)}
          width={600}
          height={300}
          color="secondary"
          showTooltip={true}
          title="Edge Case Tooltip Test"
          curve="smooth"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dedicated test for tooltip positioning accuracy. This story verifies that tooltips appear correctly aligned with data points, addressing the misalignment issue reported. The tooltips should appear directly above the hovered point with proper viewport boundary handling.',
      },
    },
  },
};

export const ThemeVariations: Story = {
  render: () => {
    const sampleData = generateTimeSeriesData(6);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div>
          <h3>Light Theme</h3>
          <LineChart
            data={sampleData}
            width={500}
            height={200}
            color="primary"
            theme={{ colorScheme: 'light' }}
            showTooltip={true}
          />
        </div>
        
        <div style={{ backgroundColor: '#1F272D', padding: '24px', borderRadius: '8px' }}>
          <h3 style={{ color: '#FFFFFF', marginTop: 0 }}>Dark Theme</h3>
          <LineChart
            data={sampleData}
            width={500}
            height={200}
            color="secondary"
            theme={{ 
              colorScheme: 'dark',
              cssVars: {
                '--chart-bg': '#1F272D',
                '--chart-text': '#FFFFFF'
              }
            }}
            showTooltip={true}
          />
        </div>
        
        <div>
          <h3>Custom Theme</h3>
          <LineChart
            data={sampleData}
            width={500}
            height={200}
            color="success"
            theme={{
              cssVars: {
                '--chart-bg': '#f0f9ff',
                '--chart-border': '#e0f2fe',
              }
            }}
            themeClass="custom-chart-theme"
            showTooltip={true}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Theme system demonstrations including light/dark mode support and custom CSS variable theming.',
      },
    },
  },
};
