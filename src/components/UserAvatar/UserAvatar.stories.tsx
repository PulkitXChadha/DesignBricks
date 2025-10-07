/* eslint-disable no-console */
import type { Meta, StoryObj } from '@storybook/react';
import { UserAvatar } from './UserAvatar';

const meta: Meta<typeof UserAvatar> = {
  title: 'Foundation/UserAvatar',
  component: UserAvatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Displays user profile images with fallback to initials. Supports various sizes, shapes, and status indicators.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Size of the avatar',
    },
    variant: {
      control: { type: 'select' },
      options: ['circle', 'rounded', 'square'],
      description: 'Shape variant of the avatar',
    },
    status: {
      control: { type: 'select' },
      options: ['online', 'offline', 'away', 'busy'],
      description: 'Status indicator type',
    },
    showStatus: { 
      control: 'boolean',
      description: 'Whether to display status indicator',
    },
    clickable: { 
      control: 'boolean',
      description: 'Whether the avatar is clickable',
    },
    backgroundColor: {
      control: 'color',
      description: 'Custom background color for initials',
    },
    textColor: {
      control: 'color',
      description: 'Custom text color for initials',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'John Doe',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
};

export const WithInitials: Story = {
  args: {
    name: 'Jane Smith',
  },
  parameters: {
    docs: {
      description: {
        story: 'When no image is provided, the avatar displays initials with an auto-generated background color.',
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <UserAvatar name="Extra Small" size="xs" />
        <span style={{ fontSize: '12px', color: '#666' }}>xs</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <UserAvatar name="Small" size="sm" />
        <span style={{ fontSize: '12px', color: '#666' }}>sm</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <UserAvatar name="Medium" size="md" />
        <span style={{ fontSize: '12px', color: '#666' }}>md</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <UserAvatar name="Large" size="lg" />
        <span style={{ fontSize: '12px', color: '#666' }}>lg</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <UserAvatar name="Extra Large" size="xl" />
        <span style={{ fontSize: '12px', color: '#666' }}>xl</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <UserAvatar name="2X Large" size="2xl" />
        <span style={{ fontSize: '12px', color: '#666' }}>2xl</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatars are available in six sizes: xs, sm, md (default), lg, xl, and 2xl.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <UserAvatar 
          name="Circle Avatar" 
          variant="circle"
          size="lg"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <span style={{ fontSize: '12px', color: '#666' }}>circle</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <UserAvatar 
          name="Rounded Avatar" 
          variant="rounded"
          size="lg"
          src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <span style={{ fontSize: '12px', color: '#666' }}>rounded</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <UserAvatar 
          name="Square Avatar" 
          variant="square"
          size="lg"
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <span style={{ fontSize: '12px', color: '#666' }}>square</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Three shape variants are available: circle (default), rounded, and square.',
      },
    },
  },
};

export const WithStatusIndicators: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <UserAvatar 
          name="Online User" 
          status="online"
          showStatus={true}
          size="lg"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <span style={{ fontSize: '12px', color: '#666' }}>online</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <UserAvatar 
          name="Away User" 
          status="away"
          showStatus={true}
          size="lg"
          src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <span style={{ fontSize: '12px', color: '#666' }}>away</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <UserAvatar 
          name="Busy User" 
          status="busy"
          showStatus={true}
          size="lg"
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <span style={{ fontSize: '12px', color: '#666' }}>busy</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <UserAvatar 
          name="Offline User" 
          status="offline"
          showStatus={true}
          size="lg"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <span style={{ fontSize: '12px', color: '#666' }}>offline</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Status indicators can be displayed in the bottom-right corner to show user availability. Available statuses: online, away, busy, and offline.',
      },
    },
  },
};

export const AutoGeneratedColors: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
      <UserAvatar name="Alice Brown" size="lg" />
      <UserAvatar name="Bob Chen" size="lg" />
      <UserAvatar name="Carol Davis" size="lg" />
      <UserAvatar name="David Evans" size="lg" />
      <UserAvatar name="Emma Foster" size="lg" />
      <UserAvatar name="Frank Garcia" size="lg" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'When no image is provided, avatars automatically generate a consistent color based on the user\'s name.',
      },
    },
  },
};

export const CustomColors: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <UserAvatar 
        name="Custom Red" 
        backgroundColor="#E65B77"
        textColor="#FFFFFF"
        size="lg"
      />
      <UserAvatar 
        name="Custom Blue" 
        backgroundColor="#4299E0"
        textColor="#FFFFFF"
        size="lg"
      />
      <UserAvatar 
        name="Custom Green" 
        backgroundColor="#3BA65E"
        textColor="#FFFFFF"
        size="lg"
      />
      <UserAvatar 
        name="Custom Purple" 
        backgroundColor="#8A63BF"
        textColor="#FFFFFF"
        size="lg"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Override the auto-generated colors with custom backgroundColor and textColor props.',
      },
    },
  },
};

export const InteractiveAvatar: Story = {
  args: {
    name: 'John Doe',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    size: 'lg',
    clickable: true,
    onClick: () => alert('Avatar clicked!'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Avatars can be made clickable with hover effects and keyboard support. Set clickable={true} and provide an onClick handler.',
      },
    },
  },
};

export const ImageFallback: Story = {
  args: {
    name: 'Broken Image',
    src: 'https://invalid-image-url.jpg',
    size: 'lg',
    onError: () => console.log('Image failed to load'),
  },
  parameters: {
    docs: {
      description: {
        story: 'When an image fails to load, the avatar gracefully falls back to displaying initials.',
      },
    },
  },
};

export const NameVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <UserAvatar name="A" size="lg" />
        <span style={{ fontSize: '12px', color: '#666' }}>Single letter</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <UserAvatar name="John" size="lg" />
        <span style={{ fontSize: '12px', color: '#666' }}>One name</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <UserAvatar name="Jane Smith" size="lg" />
        <span style={{ fontSize: '12px', color: '#666' }}>Two names</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <UserAvatar name="John Michael Doe" size="lg" />
        <span style={{ fontSize: '12px', color: '#666' }}>Three names</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Initials are extracted from the name prop. The component handles single letters, one word, or multiple words, always displaying up to two letters.',
      },
    },
  },
};
