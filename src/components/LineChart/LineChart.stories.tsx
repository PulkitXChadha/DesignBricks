import type { Meta, StoryObj } from '@storybook/react';
import { LineChart } from './LineChart';
import { ChartAggregates } from './ChartAggregates';

/**
 * LineChart Storybook Stories
 * 
 * Stories are organized as follows:
 * - Basic Examples: Default, InteractiveTooltips
 * - Styling: AllColors, AllVariants, CurveTypes
 * - Feature Demonstrations: TooltipComparison, PerformanceDashboard
 * - Data Types: NumericData, CategoricalData
 * - Advanced: FinancialDashboard, CustomFormatting
 * - Edge Cases: EmptyState, MinimalChart, LargeChart
 */

const meta: Meta<typeof LineChart> = {
  title: 'Data Display/LineChart',
  component: LineChart,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A powerful and flexible line chart component built with D3.js integration for the Databricks Design System. 

## Features
- **Interactive Tooltips**: Rich tooltips with vertical line indicators and percentage change calculations
- **Multiple Data Types**: Support for time series, numeric, and categorical data
- **Customizable Styling**: Multiple color schemes, variants, and curve types
- **Responsive Design**: Adapts to different screen sizes and viewport constraints
- **Accessibility**: Full keyboard and screen reader support
- **Performance Optimized**: Efficient rendering with hardware acceleration
- **Aggregates Support**: Built-in statistics display with the ChartAggregates component

## Use Cases
Perfect for financial dashboards, analytics displays, performance monitoring, and any data visualization requiring trend analysis.
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
    xAxisLabel: 'Month',
    yAxisLabel: 'Revenue ($K)',
    showTooltip: true,
    showPercentageChange: true,
    color: 'primary',
    curve: 'smooth',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default LineChart with interactive tooltips enabled. Hover over data points to see detailed information with percentage change calculations.',
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
    xAxisLabel: 'Month',
    yAxisLabel: 'Sales ($)',
    showTooltip: true,
    showPercentageChange: true,
    color: 'primary',
    curve: 'smooth',
    formatY: (value: number) => `$${(value / 1000).toFixed(1)}K`,
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates interactive tooltips with vertical line indicators and percentage change calculations. Hover over any data point to see the enhanced tooltip with formatted values.',
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
      />
      <LineChart
        data={generateTimeSeriesData(8)}
        width={500}
        height={180}
        color="secondary"
        title="Secondary (Teal)"
        showTooltip={true}
      />
      <LineChart
        data={generateTimeSeriesData(8)}
        width={500}
        height={180}
        color="success"
        title="Success (Green)"
        showTooltip={true}
      />
      <LineChart
        data={generateTimeSeriesData(8)}
        width={500}
        height={180}
        color="warning"
        title="Warning (Orange)"
        showTooltip={true}
      />
      <LineChart
        data={generateTimeSeriesData(8)}
        width={500}
        height={180}
        color="error"
        title="Error (Red)"
        showTooltip={true}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows all available color schemes from the Databricks Design System. Each chart supports interactive tooltips.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <LineChart
        data={generateTimeSeriesData(8)}
        width={500}
        height={200}
        variant="default"
        title="Default Variant"
        showTooltip={true}
        color="primary"
      />
      <LineChart
        data={generateTimeSeriesData(8)}
        width={500}
        height={200}
        variant="minimal"
        title="Minimal Variant (No Grid)"
        showTooltip={true}
        color="primary"
      />
      <LineChart
        data={generateTimeSeriesData(8)}
        width={500}
        height={200}
        variant="detailed"
        title="Detailed Variant (Enhanced)"
        showTooltip={true}
        color="primary"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates different chart variants: Default (standard grid and styling), Minimal (clean, no grid), and Detailed (enhanced line thickness and point sizes).',
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
        xAxisLabel="X Value"
        yAxisLabel="Y Value"
        showTooltip={true}
        color="primary"
      />
      <LineChart
        data={generateNumericData(8)}
        width={500}
        height={200}
        curve="smooth"
        title="Smooth Curve (Cardinal Spline)"
        xAxisLabel="X Value"
        yAxisLabel="Y Value"
        showTooltip={true}
        color="secondary"
      />
      <LineChart
        data={generateNumericData(8)}
        width={500}
        height={200}
        curve="step"
        title="Step Curve (Step-After)"
        xAxisLabel="X Value"
        yAxisLabel="Y Value"
        showTooltip={true}
        color="success"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates different curve interpolation methods: Linear (straight lines between points), Smooth (curved cardinal spline), and Step (step-after pattern).',
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
    data: generateTimeSeriesData(20),
    width: 1000,
    height: 600,
    color: 'primary',
    title: 'Comprehensive Data View',
    xAxisLabel: 'Time Series',
    yAxisLabel: 'Value Metrics',
    variant: 'detailed',
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
