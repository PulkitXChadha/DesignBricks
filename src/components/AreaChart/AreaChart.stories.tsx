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

export const ColorVariants: Story = {
  args: {
    data: sampleData,
    width: 500,
    height: 300,
    title: 'Color Variants'
  },
  parameters: {
    docs: {
      description: {
        story: 'Different color schemes available for the area chart.'
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

export const Variants: Story = {
  args: {
    data: sampleData,
    width: 600,
    height: 400,
    title: 'Chart Variants'
  },
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants: default shows grids and full styling, minimal removes grids and simplifies axes, detailed adds more visual elements.'
      }
    }
  }
};

export const Minimal: Story = {
  args: {
    ...Variants.args,
    variant: 'minimal',
    title: 'Minimal Variant'
  }
};

export const Detailed: Story = {
  args: {
    ...Variants.args,
    variant: 'detailed',
    title: 'Detailed Variant'
  }
};

export const CurveTypes: Story = {
  args: {
    data: numericData,
    width: 500,
    height: 300,
    title: 'Curve Interpolation'
  },
  parameters: {
    docs: {
      description: {
        story: 'Different curve interpolation methods: linear creates straight lines, smooth creates curved lines, step creates step-like progression.'
      }
    }
  }
};

export const Linear: Story = {
  args: {
    ...CurveTypes.args,
    curve: 'linear',
    title: 'Linear Curve'
  }
};

export const Smooth: Story = {
  args: {
    ...CurveTypes.args,
    curve: 'smooth',
    title: 'Smooth Curve'
  }
};

export const Step: Story = {
  args: {
    ...CurveTypes.args,
    curve: 'step',
    title: 'Step Curve'
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

export const WithoutStroke: Story = {
  args: {
    data: numericData,
    width: 500,
    height: 300,
    color: 'success',
    fillOpacity: 0.5,
    showStroke: false,
    title: 'Area Without Stroke Line'
  },
  parameters: {
    docs: {
      description: {
        story: 'Area chart with only the filled area visible, no stroke line on top.'
      }
    }
  }
};

export const WithDataPoints: Story = {
  args: {
    data: numericData,
    width: 500,
    height: 300,
    color: 'warning',
    showPoints: true,
    title: 'Area Chart with Data Points'
  },
  parameters: {
    docs: {
      description: {
        story: 'Area chart displaying individual data points on the curve.'
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

export const LowOpacity: Story = {
  args: {
    data: sampleData,
    width: 600,
    height: 400,
    color: 'primary',
    fillOpacity: 0.1,
    showStroke: true,
    title: 'Low Fill Opacity'
  },
  parameters: {
    docs: {
      description: {
        story: 'Area chart with very low fill opacity, emphasizing the stroke line.'
      }
    }
  }
};

export const HighOpacity: Story = {
  args: {
    data: sampleData,
    width: 600,
    height: 400,
    color: 'error',
    fillOpacity: 0.8,
    showStroke: false,
    title: 'High Fill Opacity'
  },
  parameters: {
    docs: {
      description: {
        story: 'Area chart with high fill opacity for a solid appearance.'
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
