import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';
import React from 'react';

const meta = {
  title: 'Foundation/Typography',
  component: Typography,
  parameters: {
    docs: {
      description: {
        component: 'Typography components for consistent text rendering across the application.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption', 'overline', 'code'],
      description: 'Text style variant',
      table: {
        defaultValue: { summary: 'body1' },
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'disabled', 'error', 'warning', 'success', 'info', 'inherit'],
      description: 'Text color',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: 'Text alignment',
      table: {
        defaultValue: { summary: 'left' },
      },
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
      description: 'Font weight',
    },
    truncate: {
      control: 'boolean',
      description: 'Truncate text with ellipsis',
      table: {
        defaultValue: { summary: false },
      },
    },
    children: {
      control: 'text',
      description: 'Text content',
    },
  },
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: 'body1',
    color: 'primary',
    align: 'left',
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'Typography component with controls',
  },
};

export const Headings: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Typography variant="h1">Heading 1 - 22px/600</Typography>
      <Typography variant="h2">Heading 2 - 20px/600</Typography>
      <Typography variant="h3">Heading 3 - 18px/600</Typography>
      <Typography variant="h4">Heading 4 - 16px/600</Typography>
      <Typography variant="h5">Heading 5 - 14px/600</Typography>
      <Typography variant="h6">Heading 6 - 13px/600</Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All heading levels from h1 to h6.',
      },
    },
  },
};

export const BodyText: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Typography variant="body1">
        Body 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Typography variant="body2">
        Body 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Body text variants for regular content.',
      },
    },
  },
};

export const SpecialText: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Typography variant="caption">Caption text - Used for small print and secondary information</Typography>
      <Typography variant="overline">OVERLINE TEXT - UPPERCASE LABELS</Typography>
      <Typography variant="code">const code = "monospace font for code";</Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Special text variants for specific use cases.',
      },
    },
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Typography color="primary">Primary text color</Typography>
      <Typography color="secondary">Secondary text color</Typography>
      <Typography color="disabled">Disabled text color</Typography>
      <Typography color="error">Error text color</Typography>
      <Typography color="warning">Warning text color</Typography>
      <Typography color="success">Success text color</Typography>
      <Typography color="info">Info text color</Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available text colors.',
      },
    },
  },
};

export const Alignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <Typography align="left" style={{ background: '#f0f0f0', padding: '8px' }}>
        Left aligned text
      </Typography>
      <Typography align="center" style={{ background: '#f0f0f0', padding: '8px' }}>
        Center aligned text
      </Typography>
      <Typography align="right" style={{ background: '#f0f0f0', padding: '8px' }}>
        Right aligned text
      </Typography>
      <Typography align="justify" style={{ background: '#f0f0f0', padding: '8px' }}>
        Justified text alignment spreads the text evenly across the full width of the container.
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Text alignment options.',
      },
    },
  },
};

export const FontWeights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Typography weight="normal">Normal weight (400)</Typography>
      <Typography weight="medium">Medium weight (500)</Typography>
      <Typography weight="semibold">Semibold weight (600)</Typography>
      <Typography weight="bold">Bold weight (700)</Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different font weight options.',
      },
    },
  },
};

export const Truncation: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <Typography truncate>
        This is a very long text that will be truncated with an ellipsis when it exceeds the container width
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Text truncation with ellipsis for long content.',
      },
    },
  },
};

export const RealWorldExample: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <Typography variant="h2">Welcome to Databricks</Typography>
      <Typography variant="body1" color="secondary" style={{ marginBottom: '16px' }}>
        The lakehouse for unified data analytics and AI
      </Typography>
      <Typography variant="body2">
        Databricks combines the best of data warehouses and data lakes to offer an open and unified platform
        for data and AI. Build, test, and deploy data applications faster.
      </Typography>
      <Typography variant="caption" color="secondary" style={{ marginTop: '16px', display: 'block' }}>
        Last updated: January 2025
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A real-world example combining different typography variants.',
      },
    },
  },
};