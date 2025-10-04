import type { Meta, StoryObj } from '@storybook/react';
import { Notification } from './Notification';
import { useState } from 'react';

const meta: Meta<typeof Notification> = {
  title: 'Feedback/Notification',
  component: Notification,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'The visual style variant of the notification',
    },
    title: {
      control: 'text',
      description: 'The title of the notification',
    },
    closable: {
      control: 'boolean',
      description: 'Whether the notification can be dismissed',
    },
    children: {
      control: 'text',
      description: 'The description/content of the notification',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Notification Title',
    children: 'This is a default notification message with some helpful information.',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    children: 'Your data has been synchronized successfully.',
    closable: true,
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success!',
    children: 'Your changes have been saved successfully.',
    closable: true,
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    children: 'Your session will expire in 5 minutes. Please save your work.',
    closable: true,
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    children: 'Failed to save changes. Please try again or contact support.',
    closable: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px' }}>
      <Notification variant="info" title="Info" closable>
        This is an informational message.
      </Notification>
      <Notification variant="success" title="Success" closable>
        Operation completed successfully.
      </Notification>
      <Notification variant="warning" title="Warning" closable>
        Please review your settings.
      </Notification>
      <Notification variant="error" title="Error" closable>
        Something went wrong.
      </Notification>
    </div>
  ),
};

export const WithoutTitle: Story = {
  args: {
    variant: 'info',
    children: 'This notification only has a description without a title.',
    closable: true,
  },
};

export const WithCustomIcon: Story = {
  args: {
    variant: 'info',
    title: 'Custom Icon',
    children: 'This notification uses a custom icon.',
    closable: true,
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
        <path
          fill="currentColor"
          d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1.5A5.5 5.5 0 1 1 8 2a5.5 5.5 0 0 1 0 11z"
        />
        <path fill="currentColor" d="M8 5.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 5.5z" />
        <path fill="currentColor" d="M8 3.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z" />
      </svg>
    ),
  },
};

// Interactive example showing how to handle close events
export const Interactive: Story = {
  render: function InteractiveNotification() {
    const [notifications, setNotifications] = useState([
      { id: 1, variant: 'info' as const, title: 'Info', message: 'This is an info notification.' },
      { id: 2, variant: 'success' as const, title: 'Success', message: 'This is a success notification.' },
      { id: 3, variant: 'warning' as const, title: 'Warning', message: 'This is a warning notification.' },
    ]);

    const removeNotification = (id: number) => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    };

    const addNotification = () => {
      const variants = ['info', 'success', 'warning', 'error'] as const;
      const variant = variants[Math.floor(Math.random() * variants.length)];
      const id = Date.now();
      setNotifications(prev => [...prev, {
        id,
        variant,
        title: `New ${variant}`,
        message: `This is a new ${variant} notification.`
      }]);
    };

    return (
      <div style={{ maxWidth: '500px' }}>
        <button
          onClick={addNotification}
          style={{
            padding: '8px 16px',
            marginBottom: '16px',
            backgroundColor: '#007acc',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Add Notification
        </button>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {notifications.map(notification => (
            <Notification
              key={notification.id}
              variant={notification.variant}
              title={notification.title}
              closable
              onClose={() => removeNotification(notification.id)}
            >
              {notification.message}
            </Notification>
          ))}
        </div>
        {notifications.length === 0 && (
          <p style={{ color: '#666', fontStyle: 'italic' }}>
            All notifications have been dismissed. Click "Add Notification" to create new ones.
          </p>
        )}
      </div>
    );
  },
};

