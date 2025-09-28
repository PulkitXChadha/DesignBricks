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

const smallData = [
  { x: 'A', y: 30 },
  { x: 'B', y: 80 },
  { x: 'C', y: 45 }
];

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
    title: 'Color Variants'
  },
  parameters: {
    docs: {
      description: {
        story: 'Different color schemes available for the bar chart.'
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

export const Orientations: Story = {
  args: {
    data: categoryData,
    width: 600,
    height: 400,
    title: 'Bar Orientations'
  },
  parameters: {
    docs: {
      description: {
        story: 'Bars can be oriented vertically (default) or horizontally for different layout needs.'
      }
    }
  }
};

export const Vertical: Story = {
  args: {
    ...Orientations.args,
    orientation: 'vertical',
    title: 'Vertical Bars'
  }
};

export const Horizontal: Story = {
  args: {
    ...Orientations.args,
    orientation: 'horizontal',
    title: 'Horizontal Bars',
    width: 700,
    height: 400
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
    xAxis: {
      label: 'Quarter'
    },
    yAxis: {
      label: 'Revenue ($)'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates customization options including border radius, bar padding, value labels, and axis labels.'
      }
    }
  }
};

export const WithValueLabels: Story = {
  args: {
    data: smallData,
    width: 400,
    height: 300,
    color: 'primary',
    showValueLabels: true,
    title: 'Bars with Value Labels'
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart displaying value labels on top of each bar.'
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
    xAxis: {
      rotateLabels: true
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Handling long category names with rotated labels for better readability.'
      }
    }
  }
};

export const HorizontalWithLabels: Story = {
  args: {
    data: categoryData,
    width: 600,
    height: 400,
    orientation: 'horizontal',
    color: 'secondary',
    showValueLabels: true,
    title: 'Horizontal Bars with Labels',
    xAxis: {
      label: 'Amount ($)'
    },
    yAxis: {
      label: 'Department'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Horizontal bar chart with value labels positioned next to the bars.'
      }
    }
  }
};

export const CustomPadding: Story = {
  args: {
    data: sampleData,
    width: 500,
    height: 300,
    color: 'error',
    barPadding: 0.05,
    title: 'Tight Bar Spacing'
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with minimal padding between bars for a more compact appearance.'
      }
    }
  }
};

export const RoundedBars: Story = {
  args: {
    data: categoryData,
    width: 600,
    height: 400,
    color: 'primary',
    borderRadius: 8,
    title: 'Rounded Corner Bars'
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with rounded corners for a more modern appearance.'
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
    data: [
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
    ],
    width: 800,
    height: 450,
    color: 'primary',
    variant: 'detailed',
    title: 'Monthly Sales Data',
    xAxis: {
      label: 'Month',
      rotateLabels: false
    },
    yAxis: {
      label: 'Sales ($)'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with a larger dataset showing monthly sales data.'
      }
    }
  }
};

export const InteractiveFeatures: Story = {
  args: {
    data: categoryData,
    width: 700,
    height: 450,
    variant: 'detailed',
    color: 'primary',
    title: 'Interactive Bar Chart',
    showTooltip: true,
    showValueLabels: false,
    borderRadius: 4,
    xAxis: {
      label: 'Department'
    },
    yAxis: {
      label: 'Budget ($)'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Full-featured bar chart with tooltips and detailed styling. Hover over bars to see interactive features.'
      }
    }
  }
};
