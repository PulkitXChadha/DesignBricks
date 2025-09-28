import type { Meta, StoryObj } from '@storybook/react';
import { ScatterChart } from './ScatterChart';

const meta: Meta<typeof ScatterChart> = {
  title: 'Data Display/ScatterChart',
  component: ScatterChart,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible scatter plot component built with D3.js for visualizing correlations between two numerical variables. Supports bubble charts, trend lines, tooltips, and accessibility features.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: 'Array of data points with x and y numerical values'
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
      description: 'Color scheme for the points'
    },
    pointRadius: {
      control: { type: 'range', min: 2, max: 10, step: 1 },
      description: 'Radius of data points'
    },
    pointOpacity: {
      control: { type: 'range', min: 0.1, max: 1, step: 0.1 },
      description: 'Opacity of data points'
    },
    enableBubbles: {
      control: 'boolean',
      description: 'Use size field for bubble chart functionality'
    },
    showTrendLine: {
      control: 'boolean',
      description: 'Show linear trend line'
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
type Story = StoryObj<typeof ScatterChart>;

// Sample data for stories
const correlationData = [
  { x: 10, y: 20, label: 'Point A' },
  { x: 15, y: 32, label: 'Point B' },
  { x: 20, y: 28, label: 'Point C' },
  { x: 25, y: 45, label: 'Point D' },
  { x: 30, y: 38, label: 'Point E' },
  { x: 35, y: 52, label: 'Point F' },
  { x: 40, y: 58, label: 'Point G' },
  { x: 45, y: 65, label: 'Point H' },
  { x: 50, y: 72, label: 'Point I' },
  { x: 55, y: 78, label: 'Point J' }
];

const bubbleData = [
  { x: 20, y: 30, size: 15, label: 'Small Company', category: 'Tech' },
  { x: 40, y: 60, size: 25, label: 'Medium Company', category: 'Finance' },
  { x: 60, y: 45, size: 35, label: 'Large Company', category: 'Healthcare' },
  { x: 80, y: 85, size: 45, label: 'Enterprise', category: 'Tech' },
  { x: 30, y: 20, size: 10, label: 'Startup', category: 'Finance' },
  { x: 70, y: 75, size: 40, label: 'Corporation', category: 'Healthcare' },
  { x: 90, y: 55, size: 30, label: 'Business', category: 'Tech' }
];

const performanceData = [
  { x: 85, y: 92, label: 'Model A' },
  { x: 78, y: 88, label: 'Model B' },
  { x: 92, y: 95, label: 'Model C' },
  { x: 68, y: 75, label: 'Model D' },
  { x: 75, y: 82, label: 'Model E' },
  { x: 88, y: 91, label: 'Model F' },
  { x: 82, y: 87, label: 'Model G' },
  { x: 95, y: 98, label: 'Model H' }
];

export const Default: Story = {
  args: {
    data: correlationData,
    width: 600,
    height: 400,
    variant: 'default',
    color: 'primary',
    title: 'Sales vs Marketing Spend',
    xAxis: { label: 'Marketing Spend ($1000)' },
    yAxis: { label: 'Sales Revenue ($1000)' }
  }
};

export const ColorVariants: Story = {
  args: {
    data: correlationData,
    width: 500,
    height: 350,
    title: 'Color Variants'
  },
  parameters: {
    docs: {
      description: {
        story: 'Different color schemes available for the scatter plot.'
      }
    }
  }
};

export const Primary: Story = {
  args: {
    ...ColorVariants.args,
    color: 'primary',
    title: 'Primary Color'
  }
};

export const Secondary: Story = {
  args: {
    ...ColorVariants.args,
    color: 'secondary',
    title: 'Secondary Color'
  }
};

export const Success: Story = {
  args: {
    ...ColorVariants.args,
    color: 'success',
    title: 'Success Color'
  }
};

export const Warning: Story = {
  args: {
    ...ColorVariants.args,
    color: 'warning',
    title: 'Warning Color'
  }
};

export const Error: Story = {
  args: {
    ...ColorVariants.args,
    color: 'error',
    title: 'Error Color'
  }
};

export const WithTrendLine: Story = {
  args: {
    data: correlationData,
    width: 600,
    height: 400,
    color: 'primary',
    showTrendLine: true,
    title: 'Scatter Plot with Trend Line',
    xAxis: { label: 'Time (weeks)' },
    yAxis: { label: 'Performance Score' }
  },
  parameters: {
    docs: {
      description: {
        story: 'Scatter plot with linear trend line showing correlation between variables.'
      }
    }
  }
};

export const BubbleChart: Story = {
  args: {
    data: bubbleData,
    width: 700,
    height: 500,
    color: 'secondary',
    enableBubbles: true,
    sizeRange: [5, 25],
    pointOpacity: 0.7,
    title: 'Company Performance by Size',
    xAxis: { label: 'Revenue ($M)' },
    yAxis: { label: 'Growth Rate (%)' }
  },
  parameters: {
    docs: {
      description: {
        story: 'Bubble chart where point size represents a third dimension (company size).'
      }
    }
  }
};

export const HighPerformanceData: Story = {
  args: {
    data: performanceData,
    width: 600,
    height: 400,
    color: 'success',
    pointRadius: 6,
    title: 'Model Accuracy vs Precision',
    xAxis: { label: 'Accuracy (%)' },
    yAxis: { label: 'Precision (%)' }
  },
  parameters: {
    docs: {
      description: {
        story: 'Scatter plot showing model performance metrics with larger points.'
      }
    }
  }
};

export const Minimal: Story = {
  args: {
    data: correlationData,
    width: 500,
    height: 300,
    variant: 'minimal',
    color: 'primary',
    title: 'Minimal Scatter Plot'
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal variant removes grid lines and simplifies axes for cleaner appearance.'
      }
    }
  }
};

export const Detailed: Story = {
  args: {
    data: correlationData,
    width: 600,
    height: 400,
    variant: 'detailed',
    color: 'primary',
    showTrendLine: true,
    title: 'Detailed Scatter Plot'
  },
  parameters: {
    docs: {
      description: {
        story: 'Detailed variant adds more visual elements and enhanced styling.'
      }
    }
  }
};

export const CustomStyling: Story = {
  args: {
    data: bubbleData,
    width: 700,
    height: 450,
    color: 'warning',
    pointRadius: 8,
    pointOpacity: 0.8,
    enableBubbles: false,
    title: 'Custom Point Styling',
    xAxis: { label: 'X Axis' },
    yAxis: { label: 'Y Axis' }
  },
  parameters: {
    docs: {
      description: {
        story: 'Scatter plot with custom point radius and opacity settings.'
      }
    }
  }
};

export const LowOpacity: Story = {
  args: {
    data: correlationData,
    width: 500,
    height: 300,
    color: 'error',
    pointOpacity: 0.4,
    pointRadius: 6,
    title: 'Low Opacity Points'
  },
  parameters: {
    docs: {
      description: {
        story: 'Scatter plot with low opacity points, useful for overlapping data.'
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
    data: bubbleData,
    width: 700,
    height: 500,
    variant: 'detailed',
    color: 'primary',
    enableBubbles: true,
    showTrendLine: true,
    showTooltip: true,
    title: 'Interactive Scatter Plot',
    xAxis: { label: 'Performance Metric 1' },
    yAxis: { label: 'Performance Metric 2' }
  },
  parameters: {
    docs: {
      description: {
        story: 'Full-featured scatter plot with bubbles, trend line, and tooltips. Hover over points to see interactive features.'
      }
    }
  }
};
