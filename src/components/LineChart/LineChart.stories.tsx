import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LineChart } from './LineChart';
import { MultiLineChart } from '../MultiLineChart/MultiLineChart';
import { ChartAggregates } from './ChartAggregates';
import {
  LineChartContainer,
  LineChartHeader,
  LineChartLegend,
} from './LineChartCompound';

const meta: Meta<typeof LineChart> = {
  title: 'Data Display/LineChart',
  component: LineChart,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A modern line chart component built with D3.js for visualizing time series and continuous data. Supports multiple variants, curve types, interactive tooltips, and accessibility features.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: 'Array of data points with x (date/number/string) and y (number) values'
    },
    width: {
      control: { type: 'range', min: 200, max: 1200, step: 50 },
      description: 'Chart width in pixels'
    },
    height: {
      control: { type: 'range', min: 150, max: 800, step: 50 },
      description: 'Chart height in pixels'
    },
    variant: {
      control: 'radio',
      options: ['default', 'minimal', 'detailed'],
      description: 'Visual variant of the chart'
    },
    color: {
      control: 'radio',
      options: ['primary', 'secondary', 'success', 'warning', 'error'],
      description: 'Color scheme for the line and points'
    },
    curve: {
      control: 'radio',
      options: ['linear', 'smooth', 'step'],
      description: 'Line curve interpolation type'
    },
    showPoints: {
      control: 'boolean',
      description: 'Show data points on the line'
    },
    showTooltip: {
      control: 'boolean',
      description: 'Enable interactive tooltips'
    },
    showPercentageChange: {
      control: 'boolean',
      description: 'Show percentage change in tooltips'
    },
    title: {
      control: 'text',
      description: 'Chart title'
    }
  }
};

export default meta;
type Story = StoryObj<typeof LineChart>;

// Sample data
const timeSeriesData = [
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
];

const revenueData = [
  { x: new Date('2024-01-01'), y: 2250 },
  { x: new Date('2024-02-01'), y: 2180 },
  { x: new Date('2024-03-01'), y: 2420 },
  { x: new Date('2024-04-01'), y: 2680 },
  { x: new Date('2024-05-01'), y: 2890 },
  { x: new Date('2024-06-01'), y: 3100 },
  { x: new Date('2024-07-01'), y: 2950 },
  { x: new Date('2024-08-01'), y: 3200 },
  { x: new Date('2024-09-01'), y: 3400 },
];

const financialData = [
  { x: new Date('2024-01-01'), y: 22500 },
  { x: new Date('2024-01-15'), y: 24200 },
  { x: new Date('2024-02-01'), y: 23800 },
  { x: new Date('2024-02-15'), y: 25100 },
  { x: new Date('2024-03-01'), y: 24850 },
  { x: new Date('2024-03-15'), y: 26300 },
  { x: new Date('2024-03-30'), y: 24847.83 },
];

const largeDataset = Array.from({ length: 20 }, (_, i) => ({
  x: new Date(Date.UTC(2024, 0, 1 + i * 30)),
  y: Math.round((Math.sin(i * 0.5) * 20 + 50 + Math.random() * 10) * 100) / 100,
}));

// Multi-series data for multiple lines
const multiLineSeries = [
  {
    id: 'product1',
    name: 'Product A',
    color: 'primary' as const,
    data: [
      { x: new Date('2024-01-01'), y: 2400 },
      { x: new Date('2024-02-01'), y: 1398 },
      { x: new Date('2024-03-01'), y: 2800 },
      { x: new Date('2024-04-01'), y: 3908 },
      { x: new Date('2024-05-01'), y: 4800 },
    ]
  },
  {
    id: 'product2',
    name: 'Product B',
    color: 'secondary' as const,
    data: [
      { x: new Date('2024-01-01'), y: 1500 },
      { x: new Date('2024-02-01'), y: 2000 },
      { x: new Date('2024-03-01'), y: 1800 },
      { x: new Date('2024-04-01'), y: 2500 },
      { x: new Date('2024-05-01'), y: 2200 },
    ]
  },
  {
    id: 'product3',
    name: 'Product C',
    color: 'success' as const,
    data: [
      { x: new Date('2024-01-01'), y: 800 },
      { x: new Date('2024-02-01'), y: 1200 },
      { x: new Date('2024-03-01'), y: 1000 },
      { x: new Date('2024-04-01'), y: 1500 },
      { x: new Date('2024-05-01'), y: 900 },
    ]
  }
];

// Define axis configurations as constants
const defaultXAxis = { label: 'Month' };
const defaultYAxis = { label: 'Revenue ($K)' };
const customFormattingYAxis = { 
  label: 'Sales ($)',
  tickFormatter: (value: number) => `$${(value / 1000).toFixed(1)}K`
};
const largeDatasetXAxis = { label: 'Time Series', variant: 'detailed' as const, tickCount: 8 };
const largeDatasetYAxis = { label: 'Value Metrics', variant: 'detailed' as const, tickCount: 8 };

export const Default: Story = {
  args: {
    data: timeSeriesData,
    width: 700,
    height: 400,
    title: 'Monthly Revenue Trend',
    color: 'primary',
    curve: 'smooth',
    showTooltip: true,
    xAxis: defaultXAxis,
    yAxis: defaultYAxis
  }
};

export const ColorVariants: Story = {
  args: {
    data: timeSeriesData,
    width: 600,
    height: 350,
    color: 'primary',
    title: 'Color Variants',
    showTooltip: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Different color schemes available for the line chart. Use the color control to switch between primary, secondary, success, warning, and error colors.'
      }
    }
  }
};

export const Variants: Story = {
  args: {
    data: timeSeriesData,
    width: 600,
    height: 400,
    variant: 'default',
    title: 'Chart Variants',
    showTooltip: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants: default shows grids and full styling, minimal removes grids and simplifies axes, detailed adds enhanced visual elements. Use the variant control to switch between them.'
      }
    }
  }
};

export const CurveTypes: Story = {
  args: {
    data: timeSeriesData,
    width: 600,
    height: 350,
    curve: 'linear',
    title: 'Curve Types',
    showTooltip: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Different curve interpolation methods: linear (straight lines), smooth (cardinal spline), and step (step-after). Use the curve control to switch between them.'
      }
    }
  }
};

export const WithTooltips: Story = {
  args: {
    data: revenueData,
    width: 700,
    height: 400,
    title: 'Sales Performance (Hover for Details)',
    color: 'primary',
    curve: 'smooth',
    showTooltip: true,
    showPercentageChange: true,
    xAxis: defaultXAxis,
    yAxis: customFormattingYAxis
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive tooltips with percentage change indicators. Hover over data points to see detailed information including value changes from the previous point.'
      }
    }
  }
};

export const CustomFormatting: Story = {
  args: {
    data: revenueData,
    width: 600,
    height: 400,
    color: 'success',
    title: 'Revenue Growth (Custom Formatting)',
    showTooltip: true,
    showPercentageChange: true,
    xAxis: defaultXAxis,
    yAxis: customFormattingYAxis,
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
        story: 'Custom formatting for axis labels and tooltip content. Demonstrates using tickFormatter for axis values and custom tooltip HTML formatting.'
      }
    }
  }
};

export const WithAggregates: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px', backgroundColor: '#F6F7F9', borderRadius: '12px', maxWidth: '850px' }}>
        <ChartAggregates 
          data={financialData}
          formatValue={(value: number) => `$${(value / 1000).toFixed(1)}K`}
          metrics={[
            { label: 'High', value: '$26.3K', color: 'success' },
            { label: 'Low', value: '$22.5K', color: 'warning' },
            { label: 'Avg', value: '$24.5K', color: 'primary' },
          ]}
          layout="horizontal"
        />
        <LineChart
          data={financialData}
          width={800}
          height={300}
          color="primary"
          title="Financial Dashboard"
          showTooltip={true}
          showPercentageChange={true}
          curve="smooth"
          xAxis={{ label: 'Date' }}
          yAxis={{ label: 'Value ($)', tickFormatter: (value: number) => `$${(value / 1000).toFixed(1)}K` }}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Combining ChartAggregates with LineChart for a complete dashboard view. Shows key metrics alongside the trend visualization.'
      }
    }
  }
};

export const CompoundComponents: Story = {
  render: () => {
    return (
      <LineChartContainer variant="card">
        <LineChartHeader 
          title="Performance Analytics" 
          subtitle="System performance over the last 10 months"
        />
        
        <div style={{ padding: '16px' }}>
          <LineChart
            data={timeSeriesData}
            width={600}
            height={300}
            color="primary"
            showTooltip={true}
            curve="smooth"
            xAxis={{ label: 'Month', variant: 'minimal' }}
            yAxis={{ label: 'Performance Score (%)', tickCount: 5 }}
          />
        </div>
        
        <LineChartLegend
          items={[
            { label: 'Performance Score', color: '#2272B4', symbol: 'line' }
          ]}
          position="bottom"
        />
      </LineChartContainer>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Compound component pattern for composing complex chart layouts. Use LineChartContainer, LineChartHeader, and LineChartLegend to create structured chart presentations.'
      }
    }
  }
};

export const EnhancedAccessibility: Story = {
  args: {
    data: timeSeriesData,
    width: 600,
    height: 300,
    color: 'primary',
    title: 'Accessible Line Chart',
    showTooltip: true,
    keyboard: true,
    ariaLabel: 'Monthly sales data chart showing performance trends over 10 months',
    xAxis: { 
      label: 'Month',
      tickFormatter: (d: any) => new Date(d).toLocaleDateString('en-US', { month: 'short' })
    },
    yAxis: { 
      label: 'Value',
      tickFormatter: (d: number) => `${d.toFixed(0)}`
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Enhanced accessibility features including keyboard navigation (Tab to navigate data points), ARIA labels, and screen reader support.'
      }
    }
  }
};

export const LargeDataset: Story = {
  args: {
    data: largeDataset,
    width: 1000,
    height: 600,
    color: 'primary',
    title: 'Large Dataset Performance',
    variant: 'detailed',
    showTooltip: true,
    showPercentageChange: true,
    curve: 'smooth',
    showPoints: true,
    optimized: true,
    xAxis: largeDatasetXAxis,
    yAxis: largeDatasetYAxis,
    animation: {
      enabled: true,
      duration: 300,
      easing: 'ease-out'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Large chart with 20 data points demonstrating performance optimization and detailed variant styling. Uses optimized rendering for smooth interactions.'
      }
    }
  }
};

export const MultipleLines: Story = {
  render: () => (
    <MultiLineChart
      series={multiLineSeries}
      width={700}
      height={450}
      variant="default"
      title="Multi-Line Chart - Product Sales Comparison"
      showTooltip={true}
      curve="smooth"
      xAxis={{ label: 'Month' }}
      yAxis={{ label: 'Sales ($)' }}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple lines on the same chart for comparing different data series. Each line represents a different product category with distinct colors and interactive tooltips.'
      }
    }
  }
};

export const EmptyState: Story = {
  args: {
    data: [],
    width: 600,
    height: 400,
    title: 'No Data Available'
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty state when no data is provided to the chart.'
      }
    }
  }
};
