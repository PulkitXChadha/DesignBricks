import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';
import React from 'react';

const meta = {
  title: 'Foundation/Typography',
  component: Typography,
  parameters: {
    docs: {
      description: {
        component: `
Typography components for consistent text rendering based on Databricks Design System.

## Compound Components
- \`Typography.Title\` - Headings (h1-h4)
- \`Typography.Text\` - General text with size variants
- \`Typography.Paragraph\` - Paragraph text
- \`Typography.Hint\` - Secondary/helper text  
- \`Typography.Link\` - Links with new tab support

## Features
- Size system: sm (12px), md (13px), lg (18px), xl (22px), xxl (32px)
- Color variants: primary, secondary, disabled, error, warning, success, info
- \`withoutMargins\` prop to remove default margins
- \`ellipsis\` prop for text truncation
- \`bold\` prop for bold text
- \`code\` prop for inline code styling
        `.trim(),
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// Title Component Stories
export const Titles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography.Title level={1}>Title Level 1 - 32px / 40px line-height</Typography.Title>
      <Typography.Title level={2}>Title Level 2 - 22px / 28px line-height</Typography.Title>
      <Typography.Title level={3}>Title Level 3 - 18px / 24px line-height</Typography.Title>
      <Typography.Title level={4}>Title Level 4 - 13px / 20px line-height</Typography.Title>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Typography.Title renders semantic heading elements (h1-h4) with Databricks design system sizing.',
      },
    },
  },
};

export const TitleWithColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Typography.Title level={2} color="primary">Primary Title</Typography.Title>
      <Typography.Title level={2} color="secondary">Secondary Title</Typography.Title>
      <Typography.Title level={2} color="error">Error Title</Typography.Title>
      <Typography.Title level={2} color="success">Success Title</Typography.Title>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Titles with different color variants.',
      },
    },
  },
};

// Text Component Stories
export const TextSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Typography.Text size="sm">Small text (12px / 16px)</Typography.Text>
      <Typography.Text size="md">Medium text (13px / 20px) - Default</Typography.Text>
      <Typography.Text size="lg">Large text (18px / 24px)</Typography.Text>
      <Typography.Text size="xl">Extra large text (22px / 28px)</Typography.Text>
      <Typography.Text size="xxl">Extra extra large text (32px / 40px)</Typography.Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Typography.Text with Databricks size system: sm, md, lg, xl, xxl.',
      },
    },
  },
};

export const TextVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Typography.Text>Regular text</Typography.Text>
      <Typography.Text bold>Bold text (600 weight)</Typography.Text>
      <Typography.Text code>const code = "inline code";</Typography.Text>
      <Typography.Text disabled>Disabled text</Typography.Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different text variants including bold, code, and disabled states.',
      },
    },
  },
};

export const TextColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Typography.Text color="primary">Primary text color</Typography.Text>
      <Typography.Text color="secondary">Secondary text color</Typography.Text>
      <Typography.Text color="disabled">Disabled text color</Typography.Text>
      <Typography.Text color="error">Error text color</Typography.Text>
      <Typography.Text color="warning">Warning text color</Typography.Text>
      <Typography.Text color="success">Success text color</Typography.Text>
      <Typography.Text color="info">Info text color</Typography.Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Text with semantic color variants.',
      },
    },
  },
};

// Paragraph Component Stories
export const Paragraphs: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <Typography.Paragraph>
        The Databricks Data Intelligence Platform empowers teams to tackle enterprise data and AI initiatives — from 
        BI and data warehousing to generative AI — by unifying their data, analytics and governance.
      </Typography.Paragraph>
      <Typography.Paragraph color="secondary">
        Built on an open lakehouse architecture that combines the best of data lakes and data warehouses, 
        the platform provides a unified approach to data management, analytics and AI.
      </Typography.Paragraph>
      <Typography.Paragraph withoutMargins>
        This paragraph has no margins (withoutMargins prop).
      </Typography.Paragraph>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Typography.Paragraph for body content with proper spacing.',
      },
    },
  },
};

// Hint Component Stories
export const Hints: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <Typography.Text>Email Address</Typography.Text>
        <Typography.Hint>We'll never share your email with anyone else.</Typography.Hint>
      </div>
      <div>
        <Typography.Text>Password</Typography.Text>
        <Typography.Hint bold>Must be at least 8 characters long.</Typography.Hint>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Typography.Hint for secondary information and form helper text.',
      },
    },
  },
};

// Link Component Stories
export const Links: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <Typography.Link href="https://databricks.com">
          Regular link
        </Typography.Link>
      </div>
      <div>
        <Typography.Link href="https://docs.databricks.com" openInNewTab>
          Documentation (opens in new tab)
        </Typography.Link>
      </div>
      <div>
        <Typography.Link href="#" disabled>
          Disabled link
        </Typography.Link>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Typography.Link with openInNewTab support and accessibility features.',
      },
    },
  },
};

// Utility Stories
export const WithoutMargins: Story = {
  render: () => (
    <div style={{ border: '1px solid #ccc', padding: '16px' }}>
      <Typography.Title level={2} withoutMargins>Title without margins</Typography.Title>
      <Typography.Paragraph withoutMargins>Paragraph without margins</Typography.Paragraph>
      <Typography.Text withoutMargins>Text without margins</Typography.Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All components support withoutMargins prop to remove default spacing.',
      },
    },
  },
};

export const Ellipsis: Story = {
  render: () => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Typography.Title level={3} ellipsis>
        This is a very long title that will be truncated with ellipsis when it exceeds container width
      </Typography.Title>
      <Typography.Text ellipsis>
        This is a very long text that will be truncated with an ellipsis when it exceeds the container width
      </Typography.Text>
      <Typography.Paragraph ellipsis>
        This is a very long paragraph that will be truncated with an ellipsis when it exceeds the container width
      </Typography.Paragraph>
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

// Real World Example
export const RealWorldExample: Story = {
  render: () => (
    <div style={{ maxWidth: '700px', padding: '24px' }}>
      <Typography.Title level={1}>Welcome to Databricks</Typography.Title>
      <Typography.Text size="lg" color="secondary">
        The Data Intelligence Platform
      </Typography.Text>
      
      <div style={{ marginTop: '24px' }}>
        <Typography.Title level={2}>Unify Your Data, Analytics and AI</Typography.Title>
        <Typography.Paragraph>
          The Databricks Data Intelligence Platform empowers teams to tackle enterprise data and AI initiatives — 
          from BI and data warehousing to generative AI — by unifying their data, analytics and governance.
        </Typography.Paragraph>
        
        <Typography.Paragraph>
          Built on an open lakehouse architecture that combines the best of data lakes and data warehouses, 
          the platform provides a unified approach to data management, analytics and AI. Learn more in our{' '}
          <Typography.Link href="https://docs.databricks.com" openInNewTab>
            documentation
          </Typography.Link>.
        </Typography.Paragraph>
      </div>
      
      <div style={{ marginTop: '24px', padding: '16px', background: '#F6F7F9', borderRadius: '8px' }}>
        <Typography.Text bold>Quick Start</Typography.Text>
        <Typography.Hint>
          Get started with Databricks in minutes. Follow our{' '}
          <Typography.Link href="https://docs.databricks.com/getting-started" openInNewTab>
            quick start guide
          </Typography.Link>{' '}
          to set up your first workspace.
        </Typography.Hint>
      </div>
      
      <Typography.Hint style={{ marginTop: '24px' }}>
        Last updated: October 2025
      </Typography.Hint>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A comprehensive example showcasing all typography components working together.',
      },
    },
  },
};