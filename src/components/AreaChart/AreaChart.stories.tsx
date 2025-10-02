import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AreaChart } from './AreaChart';

const meta: Meta<typeof AreaChart> = {
  title: 'Data Display/AreaChart',
  component: AreaChart,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible area chart component built with D3.js for visualizing data with filled areas under curves. Supports multiple variants, tooltips, animations, and accessibility features.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: 'Array of data points with x and y values'
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
      description: 'Color scheme for the area'
    },
    curve: {
      control: 'radio',
      options: ['linear', 'smooth', 'step'],
      description: 'Curve interpolation type'
    },
    fillOpacity: {
      control: { type: 'range', min: 0.1, max: 1, step: 0.1 },
      description: 'Opacity of the filled area'
    },
    showStroke: {
      control: 'boolean',
      description: 'Show stroke line on top of area'
    },
    showPoints: {
      control: 'boolean',
      description: 'Show data points on the line'
    },
    showTooltip: {
      control: 'boolean',
      description: 'Enable interactive tooltips'
    },
    title: {
      control: 'text',
      description: 'Chart title'
    }
  }
};

export default meta;
type Story = StoryObj<typeof AreaChart>;

// Sample data for stories
const sampleData = [
  { x: new Date('2024-01'), y: 400 },
  { x: new Date('2024-02'), y: 300 },
  { x: new Date('2024-03'), y: 600 },
  { x: new Date('2024-04'), y: 800 },
  { x: new Date('2024-05'), y: 500 },
  { x: new Date('2024-06'), y: 700 },
  { x: new Date('2024-07'), y: 900 },
  { x: new Date('2024-08'), y: 750 },
  { x: new Date('2024-09'), y: 850 },
  { x: new Date('2024-10'), y: 1100 },
  { x: new Date('2024-11'), y: 950 },
  { x: new Date('2024-12'), y: 1200 }
];

const numericData = [
  { x: 0, y: 20 },
  { x: 1, y: 35 },
  { x: 2, y: 25 },
  { x: 3, y: 60 },
  { x: 4, y: 45 },
  { x: 5, y: 80 },
  { x: 6, y: 70 },
  { x: 7, y: 90 },
  { x: 8, y: 85 },
  { x: 9, y: 100 }
];

export const Default: Story = {
  args: {
    data: sampleData,
    width: 600,
    height: 400,
    variant: 'default',
    color: 'primary',
    title: 'Monthly Revenue Growth'
  }
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <AreaChart
        data={sampleData}
        width={500}
        height={180}
        color="primary"
        title="Primary Color"
        variant="default"
      />
      <AreaChart
        data={sampleData}
        width={500}
        height={180}
        color="secondary"
        title="Secondary Color"
        variant="default"
      />
      <AreaChart
        data={sampleData}
        width={500}
        height={180}
        color="success"
        title="Success Color"
        variant="default"
      />
      <AreaChart
        data={sampleData}
        width={500}
        height={180}
        color="warning"
        title="Warning Color"
        variant="default"
      />
      <AreaChart
        data={sampleData}
        width={500}
        height={180}
        color="error"
        title="Error Color"
        variant="default"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available color schemes from the Databricks Design System for area charts.'
      }
    }
  }
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3>Default Variant</h3>
        <p style={{ color: '#5F7281', fontSize: '14px', marginBottom: '16px' }}>
          Standard configuration with balanced grid and styling
        </p>
        <AreaChart
          data={sampleData}
          width={500}
          height={200}
          variant="default"
          title="Default Configuration"
          color="primary"
        />
      </div>
      
      <div>
        <h3>Minimal Variant</h3>
        <p style={{ color: '#5F7281', fontSize: '14px', marginBottom: '16px' }}>
          Clean design with no grid, minimal axes for focus on data
        </p>
        <AreaChart
          data={sampleData}
          width={500}
          height={200}
          variant="minimal"
          title="Minimal Configuration"
          color="secondary"
        />
      </div>
      
      <div>
        <h3>Detailed Variant</h3>
        <p style={{ color: '#5F7281', fontSize: '14px', marginBottom: '16px' }}>
          Enhanced styling with fine grid and detailed axes
        </p>
        <AreaChart
          data={sampleData}
          width={500}
          height={200}
          variant="detailed"
          title="Detailed Configuration"
          color="success"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the three chart variants. Each variant automatically configures grid, axes, and styling for different use cases.'
      }
    }
  }
};

export const AllCurveTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <AreaChart
        data={numericData}
        width={500}
        height={200}
        curve="linear"
        title="Linear Curve (Straight Lines)"
        color="primary"
        xAxis={{ label: "X Value" }}
        yAxis={{ label: "Y Value" }}
      />
      <AreaChart
        data={numericData}
        width={500}
        height={200}
        curve="smooth"
        title="Smooth Curve (Cardinal Spline)"
        color="secondary"
        xAxis={{ label: "X Value" }}
        yAxis={{ label: "Y Value" }}
      />
      <AreaChart
        data={numericData}
        width={500}
        height={200}
        curve="step"
        title="Step Curve (Step-After)"
        color="success"
        xAxis={{ label: "X Value" }}
        yAxis={{ label: "Y Value" }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different curve interpolation methods: linear creates straight lines, smooth creates curved lines, step creates step-like progression.'
      }
    }
  }
};

export const CustomStyling: Story = {
  args: {
    data: sampleData,
    width: 600,
    height: 400,
    variant: 'default',
    color: 'primary',
    fillOpacity: 0.6,
    showStroke: true,
    showPoints: true,
    title: 'Custom Styling Options',
    xAxis: {
      label: 'Month'
    },
    yAxis: {
      label: 'Revenue ($)'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates customization options including fill opacity, stroke visibility, data points, and axis labels.'
      }
    }
  }
};

export const StylingOptions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3>With Stroke and Data Points</h3>
        <AreaChart
          data={numericData}
          width={500}
          height={180}
          color="primary"
          showStroke={true}
          showPoints={true}
          fillOpacity={0.6}
          title="Full Styling"
        />
      </div>
      
      <div>
        <h3>Area Only (No Stroke)</h3>
        <AreaChart
          data={numericData}
          width={500}
          height={180}
          color="secondary"
          showStroke={false}
          showPoints={false}
          fillOpacity={0.5}
          title="Area Without Stroke Line"
        />
      </div>
      
      <div>
        <h3>Low Opacity with Stroke</h3>
        <AreaChart
          data={numericData}
          width={500}
          height={180}
          color="warning"
          showStroke={true}
          showPoints={false}
          fillOpacity={0.1}
          title="Subtle Fill with Emphasis on Line"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Various styling options including stroke visibility, data points, and fill opacity combinations.'
      }
    }
  }
};

export const NumericData: Story = {
  args: {
    data: numericData,
    width: 500,
    height: 300,
    color: 'secondary',
    title: 'Numeric X-Axis Data',
    xAxis: {
      label: 'Time (hours)'
    },
    yAxis: {
      label: 'Value'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Area chart with numeric values on the X-axis instead of dates.'
      }
    }
  }
};

export const NoData: Story = {
  args: {
    data: [],
    width: 500,
    height: 300,
    title: 'No Data State'
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty state when no data is provided to the chart.'
      }
    }
  }
};

export const InteractiveFeatures: Story = {
  args: {
    data: sampleData,
    width: 700,
    height: 450,
    variant: 'detailed',
    color: 'primary',
    title: 'Interactive Area Chart',
    showTooltip: true,
    showPercentageChange: true,
    xAxis: {
      label: 'Time Period'
    },
    yAxis: {
      label: 'Growth Metrics'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Full-featured area chart with tooltips, percentage change indicators, and detailed styling. Hover over the chart to see interactive features.'
      }
    }
  }
};

export const StackedAreaChart: Story = {
  args: {
    series: [
      {
        id: 'series1',
        name: 'Product A',
        color: 'primary',
        data: sampleData.map(d => ({ x: d.x, y: d.y * 0.6 }))
      },
      {
        id: 'series2',
        name: 'Product B',
        color: 'secondary',
        data: sampleData.map(d => ({ x: d.x, y: d.y * 0.8 }))
      },
      {
        id: 'series3',
        name: 'Product C',
        color: 'success',
        data: sampleData.map(d => ({ x: d.x, y: d.y * 0.5 }))
      }
    ],
    stacked: true,
    width: 700,
    height: 450,
    title: 'Stacked Revenue by Product',
    xAxis: {
      label: 'Month'
    },
    yAxis: {
      label: 'Total Revenue ($)'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Stacked area chart showing cumulative values across multiple series. Each series is stacked on top of the previous one, useful for showing part-to-whole relationships over time.'
      }
    }
  }
};

export const MultiSeriesNonStacked: Story = {
  args: {
    series: [
      {
        id: 'mobile',
        name: 'Mobile',
        color: 'primary',
        data: [
          { x: new Date('2024-01'), y: 300 },
          { x: new Date('2024-02'), y: 350 },
          { x: new Date('2024-03'), y: 400 },
          { x: new Date('2024-04'), y: 450 },
          { x: new Date('2024-05'), y: 500 },
          { x: new Date('2024-06'), y: 550 },
        ]
      },
      {
        id: 'desktop',
        name: 'Desktop',
        color: 'secondary',
        data: [
          { x: new Date('2024-01'), y: 500 },
          { x: new Date('2024-02'), y: 480 },
          { x: new Date('2024-03'), y: 520 },
          { x: new Date('2024-04'), y: 510 },
          { x: new Date('2024-05'), y: 530 },
          { x: new Date('2024-06'), y: 540 },
        ]
      },
      {
        id: 'tablet',
        name: 'Tablet',
        color: 'warning',
        data: [
          { x: new Date('2024-01'), y: 200 },
          { x: new Date('2024-02'), y: 210 },
          { x: new Date('2024-03'), y: 230 },
          { x: new Date('2024-04'), y: 250 },
          { x: new Date('2024-05'), y: 260 },
          { x: new Date('2024-06'), y: 280 },
        ]
      }
    ],
    stacked: false,
    width: 700,
    height: 450,
    title: 'Traffic by Device Type',
    fillOpacity: 0.2,
    showStroke: true,
    xAxis: {
      label: 'Month'
    },
    yAxis: {
      label: 'Visitors'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple overlapping area series without stacking. Each series maintains its own baseline, useful for comparing independent metrics.'
      }
    }
  }
};

