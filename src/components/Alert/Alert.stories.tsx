import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import React from 'react';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: 'Alerts provide contextual feedback messages for user actions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    severity: {
      control: 'select',
      options: ['success', 'info', 'warning', 'error'],
      description: 'Alert severity level',
      table: {
        defaultValue: { summary: 'info' },
      },
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'standard'],
      description: 'Visual variant',
      table: {
        defaultValue: { summary: 'standard' },
      },
    },
    title: {
      control: 'text',
      description: 'Alert title',
    },
    children: {
      control: 'text',
      description: 'Alert message',
    },
    onClose: {
      action: 'closed',
      description: 'Close handler - shows X button when provided',
    },
  },
  args: {
    severity: 'info',
    variant: 'standard',
    children: 'This is an alert message',
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    title: 'Alert Title',
    children: 'This is an alert message with controls to customize.',
    onClose: () => console.log('Alert closed'),
  },
};

export const Severities: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Alert severity="success">
        Success! Your changes have been saved.
      </Alert>
      <Alert severity="info">
        Info: This is an informational message.
      </Alert>
      <Alert severity="warning">
        Warning: Please review before proceeding.
      </Alert>
      <Alert severity="error">
        Error: Something went wrong. Please try again.
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different severity levels for various use cases.',
      },
    },
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Alert severity="info" variant="standard">
        Standard variant with subtle background
      </Alert>
      <Alert severity="info" variant="outlined">
        Outlined variant with border
      </Alert>
      <Alert severity="info" variant="filled">
        Filled variant with solid background
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants.',
      },
    },
  },
};

export const WithTitle: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Alert severity="success" title="Success">
        Your account has been created successfully.
      </Alert>
      <Alert severity="info" title="Information">
        New features are now available in your dashboard.
      </Alert>
      <Alert severity="warning" title="Warning">
        Your session will expire in 5 minutes.
      </Alert>
      <Alert severity="error" title="Error">
        Failed to connect to the database.
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Alerts with titles for better context.',
      },
    },
  },
};

export const Dismissible: Story = {
  render: () => {
    const [alerts, setAlerts] = React.useState([
      { id: 1, severity: 'success' as const, message: 'File uploaded successfully' },
      { id: 2, severity: 'info' as const, message: 'Processing your request...' },
      { id: 3, severity: 'warning' as const, message: 'Low disk space detected' },
      { id: 4, severity: 'error' as const, message: 'Network connection lost' },
    ]);

    const handleClose = (id: number) => {
      setAlerts(alerts.filter(alert => alert.id !== id));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {alerts.map(alert => (
          <Alert
            key={alert.id}
            severity={alert.severity}
            onClose={() => handleClose(alert.id)}
          >
            {alert.message}
          </Alert>
        ))}
        {alerts.length === 0 && (
          <Alert severity="info">All alerts have been dismissed</Alert>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Dismissible alerts with close functionality.',
      },
    },
  },
};

export const AllVariantsBySeverity: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {(['success', 'info', 'warning', 'error'] as const).map(severity => (
        <div key={severity} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h4 style={{ margin: '0', textTransform: 'capitalize' }}>{severity}</h4>
          <Alert severity={severity} variant="standard">
            Standard {severity} alert
          </Alert>
          <Alert severity={severity} variant="outlined">
            Outlined {severity} alert
          </Alert>
          <Alert severity={severity} variant="filled">
            Filled {severity} alert
          </Alert>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All combinations of severities and variants.',
      },
    },
  },
};

export const CustomIcon: Story = {
  render: () => (
    <Alert
      severity="info"
      icon={
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 7a1 1 0 012 0v4a1 1 0 01-2 0V7zm1 6a1 1 0 100 2 1 1 0 000-2z"/>
        </svg>
      }
    >
      Alert with a custom icon
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Alert with a custom icon.',
      },
    },
  },
};

export const NoIcon: Story = {
  render: () => (
    <Alert severity="info" icon={null}>
      Alert without an icon for a cleaner look
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Alert without an icon.',
      },
    },
  },
};

export const LongContent: Story = {
  render: () => (
    <Alert
      severity="info"
      title="System Maintenance Notice"
      onClose={() => {}}
    >
      We will be performing scheduled maintenance on our systems from 2:00 AM to 6:00 AM EST on Saturday.
      During this time, some services may be temporarily unavailable. We apologize for any inconvenience
      this may cause and appreciate your patience. If you have any urgent issues, please contact our
      support team at support@example.com.
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Alert with long content.',
      },
    },
  },
};