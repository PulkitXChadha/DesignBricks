import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { Button } from '../Button/Button';
import React from 'react';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Badges are used to highlight status, counts, or labels in a compact format.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info', 'new'],
      description: 'Badge variant',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Badge size',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    dot: {
      control: 'boolean',
      description: 'Show as dot indicator',
      table: {
        defaultValue: { summary: false },
      },
    },
    count: {
      control: 'number',
      description: 'Count value to display',
    },
    max: {
      control: 'number',
      description: 'Maximum count before showing +',
      table: {
        defaultValue: { summary: 99 },
      },
    },
    children: {
      control: 'text',
      description: 'Badge content',
    },
  },
  args: {
    variant: 'default',
    size: 'medium',
    children: 'Badge',
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'Badge',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="new">New</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Badge size="small">Small</Badge>
      <Badge size="medium">Medium</Badge>
      <Badge size="large">Large</Badge>
    </div>
  ),
};

export const WithCount: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Badge count={5} variant="primary" />
      <Badge count={42} variant="error" />
      <Badge count={99} variant="warning" />
      <Badge count={150} max={99} variant="success" />
      <Badge count={1000} max={999} variant="info" />
    </div>
  ),
};

export const DotIndicator: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Badge dot size="small" variant="error" />
      <Badge dot size="medium" variant="success" />
      <Badge dot size="large" variant="warning" />
    </div>
  ),
};

export const WithButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Button>
        Inbox <Badge count={5} variant="primary" style={{ marginLeft: '8px' }} />
      </Button>
      <Button>
        Notifications <Badge dot variant="error" style={{ marginLeft: '8px' }} />
      </Button>
      <Button variant="secondary">
        Updates <Badge variant="new">New</Badge>
      </Button>
    </div>
  ),
};

export const StatusBadges: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>Server Status:</span>
        <Badge variant="success">Online</Badge>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>Build Status:</span>
        <Badge variant="warning">Building</Badge>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>Deploy Status:</span>
        <Badge variant="error">Failed</Badge>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>Feature Status:</span>
        <Badge variant="info">Beta</Badge>
      </div>
    </div>
  ),
};

export const RealWorldExample: Story = {
  render: () => (
    <div style={{
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      maxWidth: '400px'
    }}>
      <div style={{ marginBottom: '16px' }}>
        <h4 style={{ margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
          Jobs & Pipelines <Badge variant="new">New</Badge>
        </h4>
        <p style={{ margin: 0, fontSize: '13px', color: '#666' }}>
          Manage your data workflows
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{
          padding: '12px',
          backgroundColor: 'white',
          borderRadius: '4px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span>Active Jobs</span>
          <Badge count={12} variant="primary" />
        </div>

        <div style={{
          padding: '12px',
          backgroundColor: 'white',
          borderRadius: '4px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span>Failed Runs</span>
          <Badge count={3} variant="error" />
        </div>

        <div style={{
          padding: '12px',
          backgroundColor: 'white',
          borderRadius: '4px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span>Pending Tasks</span>
          <Badge count={45} variant="warning" />
        </div>
      </div>
    </div>
  ),
};