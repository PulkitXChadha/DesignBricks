import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Typography } from '../Typography/Typography';
import { Button } from '../Button/Button';
import React from 'react';

const meta = {
  title: 'Data Display/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: 'Cards are surfaces that display content and actions on a single topic.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated'],
      description: 'Visual style variant',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    padding: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
      description: 'Internal padding',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    clickable: {
      control: 'boolean',
      description: 'Makes the card interactive',
      table: {
        defaultValue: { summary: false },
      },
    },
    selected: {
      control: 'boolean',
      description: 'Selected state',
      table: {
        defaultValue: { summary: false },
      },
    },
    children: {
      control: 'text',
      description: 'Card content',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler (when clickable)',
    },
  },
  args: {
    variant: 'default',
    padding: 'medium',
    children: 'Card content',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'This is a card with customizable props',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Card variant="default" style={{ width: '250px' }}>
        <Typography.Title level={3} withoutMargins>Default Card</Typography.Title>
        <Typography.Text color="secondary">
          Standard card with subtle border
        </Typography.Text>
      </Card>
      <Card variant="outlined" style={{ width: '250px' }}>
        <Typography.Title level={3} withoutMargins>Outlined Card</Typography.Title>
        <Typography.Text color="secondary">
          Card with more prominent border
        </Typography.Text>
      </Card>
      <Card variant="elevated" style={{ width: '250px' }}>
        <Typography.Title level={3} withoutMargins>Elevated Card</Typography.Title>
        <Typography.Text color="secondary">
          Card with shadow for elevation
        </Typography.Text>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different card variants for various use cases.',
      },
    },
  },
};

export const PaddingSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Card padding="none" style={{ width: '200px' }}>
        <div style={{ padding: '8px', background: '#f0f0f0' }}>
          No padding
        </div>
      </Card>
      <Card padding="small" style={{ width: '200px' }}>
        Small padding
      </Card>
      <Card padding="medium" style={{ width: '200px' }}>
        Medium padding
      </Card>
      <Card padding="large" style={{ width: '200px' }}>
        Large padding
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different padding options.',
      },
    },
  },
};

export const Clickable: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Card clickable style={{ width: '250px' }} onClick={() => alert('Card clicked!')}>
        <Typography.Title level={3} withoutMargins>Clickable Card</Typography.Title>
        <Typography.Text color="secondary">
          Click me to see the interaction
        </Typography.Text>
      </Card>
      <Card clickable selected style={{ width: '250px' }}>
        <Typography.Title level={3} withoutMargins>Selected Card</Typography.Title>
        <Typography.Text color="secondary">
          This card is in selected state
        </Typography.Text>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive cards with hover and selected states.',
      },
    },
  },
};

export const ContentExamples: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
      <Card variant="elevated">
        <Typography.Title level={2} withoutMargins>Simple Content</Typography.Title>
        <Typography.Paragraph style={{ marginTop: '8px' }}>
          A card can contain any type of content, from simple text to complex layouts.
        </Typography.Paragraph>
      </Card>

      <Card variant="elevated">
        <Typography.Text size="sm" color="secondary" bold>FEATURED</Typography.Text>
        <Typography.Title level={2} withoutMargins>With Actions</Typography.Title>
        <Typography.Text color="secondary" style={{ display: 'block', marginTop: '8px', marginBottom: '16px' }}>
          Cards can include action buttons for user interaction.
        </Typography.Text>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button variant="primary" size="small">Learn More</Button>
          <Button variant="tertiary" size="small">Dismiss</Button>
        </div>
      </Card>

      <Card variant="elevated">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#2272B4' }} />
          <div>
            <Typography.Title level={3} withoutMargins>With Avatar</Typography.Title>
            <Typography.Text size="sm" color="secondary">John Doe</Typography.Text>
          </div>
        </div>
        <Typography.Text>
          Cards can include avatars and other media elements.
        </Typography.Text>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Various content layouts within cards.',
      },
    },
  },
};

export const MetricCard: Story = {
  render: () => (
    <Card variant="elevated" style={{ maxWidth: '300px' }}>
      <Typography.Text size="sm" color="secondary" bold>TOTAL REVENUE</Typography.Text>
      <Typography.Title level={1} style={{ margin: '8px 0' }}>$45,231.89</Typography.Title>
      <Typography.Text size="sm" color="success">
        ↑ 20.1% from last month
      </Typography.Text>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Card displaying a metric or KPI.',
      },
    },
  },
};

export const ListCard: Story = {
  render: () => (
    <Card variant="default" padding="none" style={{ maxWidth: '350px' }}>
      <div style={{ padding: '16px', borderBottom: '1px solid #DDE0E5' }}>
        <Typography.Title level={3} withoutMargins>Recent Activity</Typography.Title>
      </div>
      {[
        { action: 'File uploaded', time: '2 minutes ago', icon: '📄' },
        { action: 'Query executed', time: '5 minutes ago', icon: '⚡' },
        { action: 'Report generated', time: '1 hour ago', icon: '📊' },
        { action: 'Data synced', time: '3 hours ago', icon: '🔄' },
      ].map((item, index) => (
        <div
          key={index}
          style={{
            padding: '12px 16px',
            borderBottom: index < 3 ? '1px solid #F6F7F9' : 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <span style={{ fontSize: '20px' }}>{item.icon}</span>
          <div style={{ flex: 1 }}>
            <Typography.Text>{item.action}</Typography.Text>
            <Typography.Text size="sm" color="secondary" style={{ display: 'block' }}>{item.time}</Typography.Text>
          </div>
        </div>
      ))}
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Card containing a list of items.',
      },
    },
  },
};

export const GridOfCards: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
      {[
        { title: 'Notebooks', count: 24, color: '#2272B4' },
        { title: 'Dashboards', count: 12, color: '#00AF4B' },
        { title: 'Queries', count: 156, color: '#FFC300' },
        { title: 'Models', count: 8, color: '#F53737' },
      ].map((item, index) => (
        <Card key={index} variant="elevated" clickable>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: item.color,
                marginRight: '8px',
              }}
            />
            <Typography.Text size="sm" color="secondary" bold>{item.title}</Typography.Text>
          </div>
          <Typography.Title level={2} withoutMargins>{item.count}</Typography.Title>
        </Card>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Grid layout with multiple cards.',
      },
    },
  },
};