import type { Meta, StoryObj } from '@storybook/react';
import { PieChart } from './PieChart';

const meta: Meta<typeof PieChart> = {
  title: 'Data Display/PieChart',
  component: PieChart,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible pie chart component built with D3.js for visualizing proportional data. Supports donut charts, custom colors, legends, labels, and accessibility features.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: 'Array of data points with labels and values'
    },
    width: {
      control: { type: 'range', min: 200, max: 800, step: 50 },
      description: 'Chart width in pixels'
    },
    height: {
      control: { type: 'range', min: 200, max: 800, step: 50 },
      description: 'Chart height in pixels'
    },
    variant: {
      control: 'radio',
      options: ['default', 'minimal', 'detailed'],
      description: 'Visual variant of the chart'
    },
    innerRadius: {
      control: { type: 'range', min: 0, max: 100, step: 5 },
      description: 'Inner radius for donut chart (0 for full pie)'
    },
    cornerRadius: {
      control: { type: 'range', min: 0, max: 10, step: 1 },
      description: 'Corner radius for rounded slices'
    },
    padAngle: {
      control: { type: 'range', min: 0, max: 0.1, step: 0.01 },
      description: 'Padding between slices'
    },
    showLabels: {
      control: 'boolean',
      description: 'Show labels on slices'
    },
    showValues: {
      control: 'boolean',
      description: 'Show values instead of percentages'
    },
    labelPosition: {
      control: 'radio',
      options: ['inside', 'outside'],
      description: 'Position of labels relative to slices'
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
type Story = StoryObj<typeof PieChart>;

// Sample data for stories
const marketShareData = [
  { label: 'Chrome', value: 65.2 },
  { label: 'Safari', value: 18.8 },
  { label: 'Edge', value: 4.3 },
  { label: 'Firefox', value: 3.2 },
  { label: 'Opera', value: 2.4 },
  { label: 'Others', value: 6.1 }
];

const salesData = [
  { label: 'Q1', value: 25000 },
  { label: 'Q2', value: 32000 },
  { label: 'Q3', value: 28000 },
  { label: 'Q4', value: 35000 }
];

const categoryData = [
  { label: 'Technology', value: 45 },
  { label: 'Healthcare', value: 30 },
  { label: 'Finance', value: 15 },
  { label: 'Education', value: 10 }
];

const budgetData = [
  { label: 'Marketing', value: 15000, color: '#2272B4' },
  { label: 'Development', value: 25000, color: '#04867D' },
  { label: 'Sales', value: 12000, color: '#3BA65E' },
  { label: 'Operations', value: 8000, color: '#DE7921' }
];

export const Default: Story = {
  args: {
    data: marketShareData,
    width: 400,
    height: 400,
    variant: 'default',
    title: 'Browser Market Share'
  }
};

export const DonutChart: Story = {
  args: {
    data: salesData,
    width: 400,
    height: 400,
    innerRadius: 60,
    title: 'Quarterly Sales (Donut)',
    showValues: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Donut chart with inner radius to create a hollow center.'
      }
    }
  }
};

export const Variants: Story = {
  args: {
    data: categoryData,
    width: 400,
    height: 400,
    title: 'Chart Variants'
  },
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants: default shows full features, minimal removes legend and labels, detailed adds enhanced styling.'
      }
    }
  }
};

export const Minimal: Story = {
  args: {
    ...Variants.args,
    variant: 'minimal',
    title: 'Minimal Pie Chart'
  }
};

export const Detailed: Story = {
  args: {
    ...Variants.args,
    variant: 'detailed',
    title: 'Detailed Pie Chart'
  }
};

export const CustomColors: Story = {
  args: {
    data: budgetData,
    width: 400,
    height: 400,
    title: 'Budget Allocation',
    legend: { show: true, position: 'right', orientation: 'vertical' }
  },
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with custom colors defined in the data points.'
      }
    }
  }
};

export const WithValueLabels: Story = {
  args: {
    data: salesData,
    width: 400,
    height: 400,
    showValues: true,
    title: 'Sales by Quarter',
    labelPosition: 'outside'
  },
  parameters: {
    docs: {
      description: {
        story: 'Pie chart showing actual values instead of percentages on labels.'
      }
    }
  }
};

export const InsideLabels: Story = {
  args: {
    data: categoryData,
    width: 400,
    height: 400,
    labelPosition: 'inside',
    title: 'Inside Labels',
    innerRadius: 40
  },
  parameters: {
    docs: {
      description: {
        story: 'Donut chart with labels positioned inside the slices.'
      }
    }
  }
};

export const RoundedSlices: Story = {
  args: {
    data: salesData,
    width: 400,
    height: 400,
    cornerRadius: 5,
    padAngle: 0.02,
    title: 'Rounded Slices',
    innerRadius: 50
  },
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with rounded corners and padding between slices.'
      }
    }
  }
};

export const LargePadding: Story = {
  args: {
    data: categoryData,
    width: 400,
    height: 400,
    padAngle: 0.05,
    title: 'Separated Slices',
    innerRadius: 30
  },
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with large padding creating separated slices.'
      }
    }
  }
};

export const SmallChart: Story = {
  args: {
    data: categoryData,
    width: 250,
    height: 250,
    variant: 'minimal',
    title: 'Compact Chart'
  },
  parameters: {
    docs: {
      description: {
        story: 'Small pie chart suitable for dashboards and compact layouts.'
      }
    }
  }
};

export const LargeChart: Story = {
  args: {
    data: marketShareData,
    width: 600,
    height: 600,
    variant: 'detailed',
    title: 'Large Detailed Chart',
    cornerRadius: 3,
    legend: { show: true, position: 'bottom' }
  },
  parameters: {
    docs: {
      description: {
        story: 'Large pie chart with detailed styling and bottom legend.'
      }
    }
  }
};

export const NoLabels: Story = {
  args: {
    data: salesData,
    width: 400,
    height: 400,
    showLabels: false,
    title: 'Chart with Legend Only',
    legend: { show: true, position: 'right', orientation: 'vertical' }
  },
  parameters: {
    docs: {
      description: {
        story: 'Pie chart without slice labels, relying on legend for identification.'
      }
    }
  }
};

export const NoData: Story = {
  args: {
    data: [],
    width: 400,
    height: 400,
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
    data: marketShareData,
    width: 500,
    height: 500,
    variant: 'detailed',
    title: 'Interactive Pie Chart',
    showTooltip: true,
    cornerRadius: 2,
    padAngle: 0.01,
    legend: { show: true, position: 'bottom' }
  },
  parameters: {
    docs: {
      description: {
        story: 'Full-featured pie chart with tooltips and interactive elements. Hover over slices to see details.'
      }
    }
  }
};
