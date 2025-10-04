import type { Meta, StoryObj } from '@storybook/react';
import { BarChart } from './BarChart';

const meta: Meta<typeof BarChart> = {
  title: 'Data Display/BarChart',
  component: BarChart,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible bar chart component built with D3.js for visualizing categorical data with vertical or horizontal bars. Supports multiple variants, tooltips, animations, and accessibility features.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: 'Array of data points with category labels and values'
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
      description: 'Color scheme for the bars'
    },
    orientation: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
      description: 'Orientation of the bars'
    },
    borderRadius: {
      control: { type: 'range', min: 0, max: 10, step: 1 },
      description: 'Border radius for bar corners'
    },
    barPadding: {
      control: { type: 'range', min: 0, max: 0.5, step: 0.05 },
      description: 'Padding between bars (0-0.5)'
    },
    showTooltip: {
      control: 'boolean',
      description: 'Enable interactive tooltips'
    },
    showValueLabels: {
      control: 'boolean',
      description: 'Show value labels on bars'
    },
    title: {
      control: 'text',
      description: 'Chart title'
    },
    stacked: {
      control: 'boolean',
      description: 'Enable stacked bars'
    },
    series: {
      control: 'object',
      description: 'Series configuration for stacked bars'
    }
  }
};

export default meta;
type Story = StoryObj<typeof BarChart>;

// Sample data for stories
const sampleData = [
  { x: 'Q1', y: 2400 },
  { x: 'Q2', y: 1398 },
  { x: 'Q3', y: 9800 },
  { x: 'Q4', y: 3908 },
  { x: 'Q5', y: 4800 },
  { x: 'Q6', y: 3800 },
  { x: 'Q7', y: 4300 }
];

const categoryData = [
  { x: 'Marketing', y: 12500 },
  { x: 'Sales', y: 8900 },
  { x: 'Engineering', y: 15200 },
  { x: 'Support', y: 6700 },
  { x: 'Operations', y: 4300 }
];

const longLabelData = [
  { x: 'Very Long Category Name', y: 4200 },
  { x: 'Another Long Label', y: 3100 },
  { x: 'Short', y: 5800 },
  { x: 'Medium Length Label', y: 2900 },
  { x: 'Extra Long Category Description', y: 6500 }
];

const largeMonthlyData = [
  { x: 'Jan', y: 4000 },
  { x: 'Feb', y: 3000 },
  { x: 'Mar', y: 5000 },
  { x: 'Apr', y: 4500 },
  { x: 'May', y: 6000 },
  { x: 'Jun', y: 5500 },
  { x: 'Jul', y: 7000 },
  { x: 'Aug', y: 6500 },
  { x: 'Sep', y: 5800 },
  { x: 'Oct', y: 6200 },
  { x: 'Nov', y: 7200 },
  { x: 'Dec', y: 8000 }
];

// Stacked bar chart data
const stackedData = [
  { x: 'Q1', product1: 2400, product2: 1500, product3: 800 },
  { x: 'Q2', product1: 1398, product2: 2000, product3: 1200 },
  { x: 'Q3', product1: 9800, product2: 1800, product3: 1000 },
  { x: 'Q4', product1: 3908, product2: 2500, product3: 1500 },
  { x: 'Q5', product1: 4800, product2: 2200, product3: 900 },
];

const stackedSeries = [
  { key: 'product1', name: 'Product A', color: 'var(--chart-primary)' },
  { key: 'product2', name: 'Product B', color: 'var(--chart-secondary)' },
  { key: 'product3', name: 'Product C', color: 'var(--chart-success)' },
];

// Define axis configurations as constants to prevent object reference changes
const customStylingXAxis = { label: 'Quarter' };
const customStylingYAxis = { label: 'Revenue ($)' };

const largeDatasetXAxis = { label: 'Month', rotateLabels: false };
const largeDatasetYAxis = { label: 'Sales ($)' };

const stackedXAxis = { label: 'Quarter' };
const stackedYAxis = { label: 'Revenue ($)' };

const longLabelXAxis = { rotateLabels: true };

export const Default: Story = {
  args: {
    data: sampleData,
    width: 600,
    height: 400,
    variant: 'default',
    color: 'primary',
    title: 'Quarterly Revenue'
  }
};

export const ColorVariants: Story = {
  args: {
    data: categoryData,
    width: 500,
    height: 350,
    color: 'primary',
    title: 'Color Variants'
  },
  parameters: {
    docs: {
      description: {
        story: 'Different color schemes available for the bar chart. Use the color control to switch between primary, secondary, success, warning, and error colors.'
      }
    }
  }
};

export const Variants: Story = {
  args: {
    data: sampleData,
    width: 600,
    height: 400,
    variant: 'default',
    title: 'Chart Variants'
  },
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants: default shows grids and full styling, minimal removes grids and simplifies axes, detailed adds more visual elements. Use the variant control to switch between them.'
      }
    }
  }
};

export const HorizontalOrientation: Story = {
  args: {
    data: categoryData,
    width: 700,
    height: 400,
    orientation: 'horizontal',
    color: 'primary',
    title: 'Horizontal Bars'
  },
  parameters: {
    docs: {
      description: {
        story: 'Bars can be oriented horizontally for different layout needs. Toggle the orientation control to switch between vertical and horizontal.'
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
    color: 'success',
    borderRadius: 6,
    barPadding: 0.2,
    showValueLabels: true,
    title: 'Custom Styling Options',
    xAxis: customStylingXAxis,
    yAxis: customStylingYAxis
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates customization options including border radius, bar padding, value labels, and axis labels. All styling options are available through the controls panel.'
      }
    }
  }
};

export const WithValueLabels: Story = {
  args: {
    data: categoryData,
    width: 600,
    height: 400,
    color: 'primary',
    showValueLabels: true,
    title: 'Bars with Value Labels'
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart displaying value labels on top of each bar. Works with both vertical and horizontal orientations.'
      }
    }
  }
};

export const LongCategoryNames: Story = {
  args: {
    data: longLabelData,
    width: 700,
    height: 450,
    color: 'warning',
    title: 'Long Category Names',
    xAxis: longLabelXAxis
  },
  parameters: {
    docs: {
      description: {
        story: 'Handling long category names with rotated labels for better readability.'
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

export const LargeDataset: Story = {
  args: {
    data: largeMonthlyData,
    width: 800,
    height: 450,
    color: 'primary',
    variant: 'detailed',
    showTooltip: true,
    title: 'Monthly Sales Data',
    xAxis: largeDatasetXAxis,
    yAxis: largeDatasetYAxis
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with a larger dataset showing monthly sales data. Hover over bars to see interactive tooltips.'
      }
    }
  }
};

export const Stacked: Story = {
  args: {
    data: stackedData,
    series: stackedSeries,
    stacked: true,
    width: 700,
    height: 450,
    variant: 'default',
    title: 'Stacked Bar Chart - Quarterly Sales by Product',
    showTooltip: true,
    xAxis: stackedXAxis,
    yAxis: stackedYAxis
  },
  parameters: {
    docs: {
      description: {
        story: 'Stacked bar chart showing multiple data series stacked together. Each color represents a different product category. Use the orientation control to switch between vertical and horizontal stacking.'
      }
    }
  }
};

