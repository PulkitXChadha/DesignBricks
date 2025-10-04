import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MultiLineChart, MultiLineChartSeries } from './MultiLineChart';

/**
 * Modern MultiLineChart Component Stories
 * 
 * A powerful multi-line chart component for visualizing multiple data series simultaneously.
 * Built with D3.js for the Databricks Design System.
 * 
 * ## Key Features
 * - **Multiple Data Series**: Display multiple lines on the same chart with automatic color assignment
 * - **Interactive Legend**: Click to show/hide series, automatically positioned
 * - **Enhanced Tooltips**: Show data from all series at the hovered X position
 * - **Automatic Colors**: Smart color assignment with 10+ predefined colors
 * - **Series Customization**: Custom colors, line styles, and visibility controls
 * - **All LineChart Features**: Inherits all advanced features from the base LineChart component
 * 
 * Perfect for comparing trends, analyzing multiple metrics, and creating comprehensive dashboards.
 */

const meta: Meta<typeof MultiLineChart> = {
  title: 'Data Display/MultiLineChart',
  component: MultiLineChart,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A modern, powerful multi-line chart component for visualizing multiple data series simultaneously.

## Key Features
- **Multiple Data Series**: Display multiple lines with automatic color assignment and legend
- **Enhanced Interactivity**: Tooltips show data from all series at the hovered position
- **Flexible Data Structure**: Each series has its own name, data, and styling options
- **Smart Legends**: Automatically positioned legends with series identification
- **Performance Optimized**: Efficient rendering for multiple series with large datasets

## Usage
\`\`\`tsx
<MultiLineChart
  series={[
    {
      id: 'sales',
      name: 'Sales',
      data: salesData,
      color: 'primary'
    },
    {
      id: 'profit',
      name: 'Profit',
      data: profitData,
      color: 'success'
    }
  ]}
  legend={{ show: true, position: 'bottom' }}
  showTooltip={true}
/>
\`\`\`

Perfect for comparing multiple metrics, trend analysis, and comprehensive data visualization.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    series: {
      description: 'Array of data series to display',
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
    curve: {
      description: 'Line curve type',
      control: { type: 'select' },
      options: ['linear', 'smooth', 'step'],
    },
    showPoints: {
      description: 'Show data points on the lines',
      control: { type: 'boolean' },
    },
    showTooltip: {
      description: 'Show tooltip on hover',
      control: { type: 'boolean' },
    },
    title: {
      description: 'Chart title',
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data generators
const generateTimeSeriesData = (points: number = 12, baseValue: number = 50, volatility: number = 20) => {
  const startDate = new Date('2024-01-01');
  return Array.from({ length: points }, (_, i) => ({
    x: new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000 * 30), // Monthly data
    y: Math.round((Math.sin(i * 0.5) * volatility + baseValue + Math.random() * 10) * 100) / 100,
    label: `Point ${i + 1}`,
  }));
};

const generateNumericData = (points: number = 10, multiplier: number = 1, offset: number = 0) => {
  return Array.from({ length: points }, (_, i) => ({
    x: i * 2,
    y: Math.round((Math.pow(i, 1.3) * multiplier + offset + Math.random() * 5) * 100) / 100,
    label: `Value ${i}`,
  }));
};

// Sample series data
// const _salesData = generateTimeSeriesData(12, 80, 15);
const profitData = generateTimeSeriesData(12, 45, 12);
const revenueData = generateTimeSeriesData(12, 120, 25);

const performanceMetrics: MultiLineChartSeries[] = [
  {
    id: 'cpu',
    name: 'CPU Usage',
    data: generateTimeSeriesData(10, 65, 15),
    color: 'primary',
  },
  {
    id: 'memory',
    name: 'Memory Usage', 
    data: generateTimeSeriesData(10, 45, 10),
    color: 'secondary',
  },
  {
    id: 'disk',
    name: 'Disk I/O',
    data: generateTimeSeriesData(10, 30, 8),
    color: 'warning',
  },
];

const financialSeries: MultiLineChartSeries[] = [
  {
    id: 'revenue',
    name: 'Revenue',
    data: revenueData,
    color: 'primary',
  },
  {
    id: 'profit',
    name: 'Profit',
    data: profitData,
    color: 'success',
  },
  {
    id: 'expenses',
    name: 'Expenses',
    data: generateTimeSeriesData(12, 75, 10),
    color: 'error',
  },
];

export const Default: Story = {
  args: {
    series: [
      {
        id: 'series1',
        name: 'Series 1',
        data: generateTimeSeriesData(12, 60, 15),
        color: 'primary',
      },
      {
        id: 'series2', 
        name: 'Series 2',
        data: generateTimeSeriesData(12, 40, 12),
        color: 'secondary',
      },
    ],
    width: 700,
    height: 400,
    title: 'Multi-Line Chart Example',
    curve: 'smooth',
    showTooltip: true,
    showPoints: true,
    xAxis: {
      label: 'Time Period',
      variant: 'default',
    },
    yAxis: {
      label: 'Value',
      variant: 'default',
    },
    grid: {
      show: true,
      strokeDasharray: '2,2',
      opacity: 0.3,
    },
    legend: {
      show: true,
      position: 'bottom',
    },
  },
};

export const PerformanceMonitoring: Story = {
  args: {
    series: performanceMetrics,
    width: 800,
    height: 400,
    title: 'System Performance Metrics',
    curve: 'smooth',
    showTooltip: true,
    showPoints: true,
    xAxis: {
      label: 'Time',
      variant: 'default',
    },
    yAxis: {
      label: 'Usage (%)',
      variant: 'default',
      tickFormatter: (value: number) => `${value}%`,
    },
    legend: {
      show: true,
      position: 'bottom',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'System performance monitoring dashboard showing CPU, Memory, and Disk I/O metrics over time. Demonstrates automatic color assignment and legend generation.',
      },
    },
  },
};

export const FinancialDashboard: Story = {
  args: {
    series: financialSeries,
    width: 800,
    height: 450,
    title: 'Financial Performance Overview',
    curve: 'smooth',
    showTooltip: true,
    showPercentageChange: true,
    xAxis: {
      label: 'Month',
      variant: 'detailed',
    },
    yAxis: {
      label: 'Amount ($K)',
      variant: 'detailed',
      tickFormatter: (value: number) => `$${value}K`,
    },
    legend: {
      show: true,
      position: 'bottom',
    },
    variant: 'detailed',
  },
  parameters: {
    docs: {
      description: {
        story: 'Financial dashboard comparing Revenue, Profit, and Expenses. Uses the detailed variant with enhanced styling and custom Y-axis formatting.',
      },
    },
  },
};

export const MultipleSeriesColors: Story = {
  render: () => {
    const multiColorSeries: MultiLineChartSeries[] = [
      {
        id: 'primary',
        name: 'Primary',
        data: generateTimeSeriesData(8, 60, 10),
        color: 'primary',
      },
      {
        id: 'secondary',
        name: 'Secondary',
        data: generateTimeSeriesData(8, 50, 8),
        color: 'secondary',
      },
      {
        id: 'success',
        name: 'Success',
        data: generateTimeSeriesData(8, 45, 12),
        color: 'success',
      },
      {
        id: 'warning',
        name: 'Warning',
        data: generateTimeSeriesData(8, 55, 15),
        color: 'warning',
      },
      {
        id: 'error',
        name: 'Error',
        data: generateTimeSeriesData(8, 40, 8),
        color: 'error',
      },
      {
        id: 'info',
        name: 'Info',
        data: generateTimeSeriesData(8, 65, 10),
        color: 'info',
      },
    ];

    return (
      <MultiLineChart
        series={multiColorSeries}
        width={900}
        height={400}
        title="All Available Colors"
        curve="smooth"
        showTooltip={true}
        showPoints={true}
        legend={{
          show: true,
          position: 'bottom',
        }}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates all available color options for series. Shows automatic color assignment and legend with multiple series.',
      },
    },
  },
};

export const CustomColors: Story = {
  args: {
    series: [
      {
        id: 'custom1',
        name: 'Custom Purple',
        data: generateTimeSeriesData(10, 60, 12),
        customColor: '#8B5CF6',
      },
      {
        id: 'custom2',
        name: 'Custom Orange',
        data: generateTimeSeriesData(10, 45, 10),
        customColor: '#F59E0B',
      },
      {
        id: 'custom3',
        name: 'Custom Pink',
        data: generateTimeSeriesData(10, 55, 8),
        customColor: '#EC4899',
      },
    ],
    width: 700,
    height: 350,
    title: 'Custom Color Series',
    showTooltip: true,
    legend: {
      show: true,
      position: 'bottom',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom colors using the customColor property. Override the default color palette with any hex color.',
      },
    },
  },
};

export const LineStyleVariations: Story = {
  args: {
    series: [
      {
        id: 'solid',
        name: 'Solid Line',
        data: generateTimeSeriesData(10, 60, 10),
        color: 'primary',
      },
      {
        id: 'dashed',
        name: 'Dashed Line',
        data: generateTimeSeriesData(10, 45, 8),
        color: 'secondary',
        strokeDasharray: '5,5',
      },
      {
        id: 'dotted',
        name: 'Dotted Line',
        data: generateTimeSeriesData(10, 55, 12),
        color: 'success',
        strokeDasharray: '2,2',
      },
      {
        id: 'thick',
        name: 'Thick Line',
        data: generateTimeSeriesData(10, 35, 8),
        color: 'warning',
        strokeWidth: 4,
      },
    ],
    width: 700,
    height: 350,
    title: 'Line Style Variations',
    showTooltip: true,
    legend: {
      show: true,
      position: 'bottom',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Different line styles using strokeDasharray and strokeWidth properties. Useful for distinguishing series in black and white prints.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => {
    const sampleSeries: MultiLineChartSeries[] = [
      {
        id: 'metric1',
        name: 'Metric 1',
        data: generateTimeSeriesData(8, 60, 12),
        color: 'primary',
      },
      {
        id: 'metric2',
        name: 'Metric 2',
        data: generateTimeSeriesData(8, 45, 10),
        color: 'secondary',
      },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <h3>Default Variant</h3>
          <MultiLineChart
            series={sampleSeries}
            width={500}
            height={200}
            variant="default"
            title="Default Configuration"
            showTooltip={true}
          />
        </div>
        
        <div>
          <h3>Minimal Variant</h3>
          <MultiLineChart
            series={sampleSeries}
            width={500}
            height={200}
            variant="minimal"
            title="Minimal Configuration"
            showTooltip={true}
          />
        </div>
        
        <div>
          <h3>Detailed Variant</h3>
          <MultiLineChart
            series={sampleSeries}
            width={500}
            height={200}
            variant="detailed"
            title="Detailed Configuration"
            showTooltip={true}
            animation={{ enabled: true, duration: 300 }}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the three chart variants: default (balanced), minimal (clean), and detailed (enhanced styling).',
      },
    },
  },
};

export const CurveTypes: Story = {
  render: () => {
    const curveSeries: MultiLineChartSeries[] = [
      {
        id: 'data1',
        name: 'Data Series 1',
        data: generateNumericData(8, 1.5, 20),
        color: 'primary',
      },
      {
        id: 'data2',
        name: 'Data Series 2',
        data: generateNumericData(8, 1.2, 15),
        color: 'secondary',
      },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <MultiLineChart
          series={curveSeries}
          width={500}
          height={200}
          curve="linear"
          title="Linear Curves"
          showTooltip={true}
        />
        <MultiLineChart
          series={curveSeries}
          width={500}
          height={200}
          curve="smooth"
          title="Smooth Curves"
          showTooltip={true}
        />
        <MultiLineChart
          series={curveSeries}
          width={500}
          height={200}
          curve="step"
          title="Step Curves"
          showTooltip={true}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Different curve interpolation methods: linear (straight lines), smooth (cardinal spline), and step (step-after).',
      },
    },
  },
};

export const LegendPositions: Story = {
  render: () => {
    const legendSeries: MultiLineChartSeries[] = [
      {
        id: 'alpha',
        name: 'Alpha',
        data: generateTimeSeriesData(6, 60, 10),
        color: 'primary',
      },
      {
        id: 'beta',
        name: 'Beta',
        data: generateTimeSeriesData(6, 45, 8),
        color: 'secondary',
      },
      {
        id: 'gamma',
        name: 'Gamma',
        data: generateTimeSeriesData(6, 55, 12),
        color: 'success',
      },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <h3>Bottom Legend</h3>
          <MultiLineChart
            series={legendSeries}
            width={600}
            height={200}
            title="Legend at Bottom"
            legend={{ show: true, position: 'bottom' }}
          />
        </div>
        
        <div>
          <h3>Top Legend</h3>
          <MultiLineChart
            series={legendSeries}
            width={600}
            height={200}
            title="Legend at Top"
            legend={{ show: true, position: 'top' }}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Legend positioning options. The legend automatically appears when there are multiple series.',
      },
    },
  },
};

export const LargeDataset: Story = {
  args: {
    series: [
      {
        id: 'trend1',
        name: 'Primary Trend',
        data: generateTimeSeriesData(24, 100, 20),
        color: 'primary',
      },
      {
        id: 'trend2',
        name: 'Secondary Trend',
        data: generateTimeSeriesData(24, 80, 15),
        color: 'secondary',
      },
      {
        id: 'trend3',
        name: 'Tertiary Trend',
        data: generateTimeSeriesData(24, 60, 18),
        color: 'success',
      },
      {
        id: 'trend4',
        name: 'Quaternary Trend',
        data: generateTimeSeriesData(24, 70, 12),
        color: 'warning',
      },
    ],
    width: 1000,
    height: 500,
    title: 'Large Dataset Performance',
    variant: 'detailed',
    showTooltip: true,
    optimized: true,
    xAxis: {
      label: 'Time Period (24 months)',
      variant: 'detailed',
    },
    yAxis: {
      label: 'Value',
      variant: 'detailed',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Large dataset with 4 series and 24 data points each. Demonstrates performance with optimized rendering enabled.',
      },
    },
  },
};

export const EmptyState: Story = {
  args: {
    series: [],
    width: 600,
    height: 400,
    title: 'No Data Available',
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty state when no series data is provided.',
      },
    },
  },
};

export const SingleSeries: Story = {
  args: {
    series: [
      {
        id: 'single',
        name: 'Single Series',
        data: generateTimeSeriesData(12, 60, 15),
        color: 'primary',
      },
    ],
    width: 600,
    height: 300,
    title: 'Single Series (Legend Hidden)',
    showTooltip: true,
    legend: {
      show: false, // Legend automatically hidden for single series
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Single series example. Legend is automatically hidden when only one series is present.',
      },
    },
  },
};

export const VisibilityControl: Story = {
  args: {
    series: [
      {
        id: 'visible1',
        name: 'Always Visible',
        data: generateTimeSeriesData(10, 60, 12),
        color: 'primary',
        visible: true,
      },
      {
        id: 'hidden',
        name: 'Hidden Series',
        data: generateTimeSeriesData(10, 45, 10),
        color: 'secondary',
        visible: false, // This series won't be rendered
      },
      {
        id: 'visible2',
        name: 'Also Visible',
        data: generateTimeSeriesData(10, 55, 8),
        color: 'success',
        visible: true,
      },
    ],
    width: 600,
    height: 300,
    title: 'Series Visibility Control',
    showTooltip: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Controlling series visibility with the visible property. Hidden series are not rendered or included in calculations.',
      },
    },
  },
};

export const NumericData: Story = {
  args: {
    series: [
      {
        id: 'function1',
        name: 'f(x) = x²',
        data: generateNumericData(10, 2, 5),
        color: 'primary',
      },
      {
        id: 'function2',
        name: 'f(x) = x^1.5',
        data: generateNumericData(10, 1.5, 10),
        color: 'secondary',
      },
    ],
    width: 600,
    height: 350,
    title: 'Mathematical Functions',
    curve: 'smooth',
    xAxis: {
      label: 'X Value',
    },
    yAxis: {
      label: 'Y Value',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Numeric data example showing mathematical functions with smooth curves.',
      },
    },
  },
};

export const AccessibilityFeatures: Story = {
  args: {
    series: [
      {
        id: 'accessible1',
        name: 'Metric A',
        data: generateTimeSeriesData(8, 60, 10),
        color: 'primary',
      },
      {
        id: 'accessible2',
        name: 'Metric B',
        data: generateTimeSeriesData(8, 45, 8),
        color: 'secondary',
      },
    ],
    width: 600,
    height: 300,
    title: 'Accessible Multi-Line Chart',
    showTooltip: true,
    keyboard: true,
    ariaLabel: 'Multi-line chart comparing Metric A and Metric B over 8 time periods',
    xAxis: { 
      label: 'Time Period',
      tickFormatter: (d: any) => new Date(d).toLocaleDateString('en-US', { month: 'short' })
    },
    yAxis: { 
      label: 'Value',
      tickFormatter: (d: number) => `${d.toFixed(0)}`
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Enhanced accessibility features including keyboard navigation (Tab through data points), ARIA labels, and screen reader support.',
      },
    },
  },
};

export const TooltipCustomization: Story = {
  args: {
    series: [
      {
        id: 'sales',
        name: 'Sales',
        data: [
          { x: new Date('2024-01-01'), y: 1250.75 },
          { x: new Date('2024-02-01'), y: 1890.25 },
          { x: new Date('2024-03-01'), y: 2100.50 },
          { x: new Date('2024-04-01'), y: 1750.00 },
          { x: new Date('2024-05-01'), y: 2450.80 },
        ],
        color: 'primary',
      },
      {
        id: 'costs',
        name: 'Costs',
        data: [
          { x: new Date('2024-01-01'), y: 850.25 },
          { x: new Date('2024-02-01'), y: 1200.50 },
          { x: new Date('2024-03-01'), y: 1400.75 },
          { x: new Date('2024-04-01'), y: 1100.00 },
          { x: new Date('2024-05-01'), y: 1600.30 },
        ],
        color: 'error',
      },
    ],
    width: 600,
    height: 350,
    title: 'Revenue vs Costs (Custom Formatting)',
    showTooltip: true,
    formatTooltip: (dataPoints: Array<{ series: any; dataPoint: any; index: number }>) => {
      if (!dataPoints.length) return '';
      
      const date = new Date(dataPoints[0].dataPoint.x).toLocaleDateString('en-US', { 
        month: 'short', 
        year: 'numeric' 
      });
      
      let tooltipHtml = `<div class="db-multilinechart__tooltip-content">`;
      tooltipHtml += `<div class="db-multilinechart__tooltip-date">${date}</div>`;
      
      dataPoints.forEach(({ series, dataPoint }) => {
        const value = `$${(dataPoint.y / 1000).toFixed(1)}K`;
        const seriesColor = series.color === 'primary' ? '#2272B4' : '#E65B77';
        
        tooltipHtml += `<div class="db-multilinechart__tooltip-series">`;
        tooltipHtml += `<div class="db-multilinechart__tooltip-series-indicator" style="background-color: ${seriesColor}"></div>`;
        tooltipHtml += `<span class="db-multilinechart__tooltip-series-name">${series.name}:</span>`;
        tooltipHtml += `<span class="db-multilinechart__tooltip-series-value">${value}</span>`;
        tooltipHtml += `</div>`;
      });
      
      // Calculate profit
      const salesValue = dataPoints.find(d => d.series.id === 'sales')?.dataPoint.y || 0;
      const costsValue = dataPoints.find(d => d.series.id === 'costs')?.dataPoint.y || 0;
      const profit = salesValue - costsValue;
      const profitFormatted = `$${(profit / 1000).toFixed(1)}K`;
      
      tooltipHtml += `<div style="border-top: 1px solid #445461; margin-top: 8px; padding-top: 8px;">`;
      tooltipHtml += `<div class="db-multilinechart__tooltip-series">`;
      tooltipHtml += `<span class="db-multilinechart__tooltip-series-name">Profit:</span>`;
      tooltipHtml += `<span class="db-multilinechart__tooltip-series-value" style="color: ${profit >= 0 ? '#3BA65E' : '#E65B77'}">${profitFormatted}</span>`;
      tooltipHtml += `</div>`;
      tooltipHtml += `</div>`;
      
      tooltipHtml += `</div>`;
      return tooltipHtml;
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom tooltip formatting with calculated metrics. Shows sales, costs, and computed profit in a formatted tooltip.',
      },
    },
  },
};

export const ComparisonDashboard: Story = {
  render: () => {
    const comparisonData: MultiLineChartSeries[] = [
      {
        id: 'q1_2024',
        name: '2024 Q1',
        data: [
          { x: 'Jan', y: 45 },
          { x: 'Feb', y: 52 },
          { x: 'Mar', y: 48 },
        ],
        color: 'primary',
      },
      {
        id: 'q1_2023',
        name: '2023 Q1',
        data: [
          { x: 'Jan', y: 38 },
          { x: 'Feb', y: 45 },
          { x: 'Mar', y: 41 },
        ],
        color: 'secondary',
        strokeDasharray: '4,4', // Dashed line for previous year
      },
      {
        id: 'target',
        name: 'Target',
        data: [
          { x: 'Jan', y: 50 },
          { x: 'Feb', y: 50 },
          { x: 'Mar', y: 50 },
        ],
        color: 'warning',
        strokeDasharray: '2,2', // Dotted line for target
      },
    ];

    return (
      <div style={{ padding: '24px', backgroundColor: '#F6F7F9', borderRadius: '12px' }}>
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ margin: '0 0 8px 0', fontSize: '18px', color: '#1F272D' }}>
            Quarterly Performance Comparison
          </h2>
          <p style={{ margin: 0, fontSize: '14px', color: '#5F7281' }}>
            Comparing Q1 performance across years with target benchmarks
          </p>
        </div>

        <MultiLineChart
          series={comparisonData}
          width={700}
          height={350}
          curve="linear"
          showTooltip={true}
          showPoints={true}
          variant="default"
          xAxis={{
            label: 'Month',
            variant: 'default',
          }}
          yAxis={{
            label: 'Performance Score',
            variant: 'default',
            tickFormatter: (value: number) => `${value}`,
          }}
          legend={{
            show: true,
            position: 'bottom',
          }}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Year-over-year comparison dashboard with target benchmarks. Uses different line styles to distinguish between current year, previous year, and targets.',
      },
    },
  },
};
