import type { Meta, StoryObj } from '@storybook/react';
import { UserAvatar } from './UserAvatar';

const meta: Meta<typeof UserAvatar> = {
  title: 'Components/UserAvatar',
  component: UserAvatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    variant: {
      control: { type: 'select' },
      options: ['circle', 'rounded', 'square'],
    },
    status: {
      control: { type: 'select' },
      options: ['online', 'offline', 'away', 'busy'],
    },
    showStatus: { control: 'boolean' },
    clickable: { control: 'boolean' },
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

export const WithoutImage: Story = {
  args: {
    name: 'Jane Smith',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <UserAvatar name="John Doe" size="xs" />
      <UserAvatar name="John Doe" size="sm" />
      <UserAvatar name="John Doe" size="md" />
      <UserAvatar name="John Doe" size="lg" />
      <UserAvatar name="John Doe" size="xl" />
      <UserAvatar name="John Doe" size="2xl" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <UserAvatar 
        name="Circle Avatar" 
        variant="circle"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
      <UserAvatar 
        name="Rounded Avatar" 
        variant="rounded"
        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
      <UserAvatar 
        name="Square Avatar" 
        variant="square"
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
    </div>
  ),
};

export const WithStatus: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <UserAvatar 
        name="Online User" 
        status="online"
        showStatus={true}
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
      <UserAvatar 
        name="Away User" 
        status="away"
        showStatus={true}
        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
      <UserAvatar 
        name="Busy User" 
        status="busy"
        showStatus={true}
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
      <UserAvatar 
        name="Offline User" 
        status="offline"
        showStatus={true}
        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
    </div>
  ),
};

export const FallbackInitials: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <UserAvatar name="John Doe" />
      <UserAvatar name="Jane Smith" />
      <UserAvatar name="Alex Johnson" />
      <UserAvatar name="Maria Garcia" />
      <UserAvatar name="David Wilson" />
      <UserAvatar name="Sarah Davis" />
    </div>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <UserAvatar 
        name="Custom Red" 
        backgroundColor="#E65B77"
        textColor="#FFFFFF"
      />
      <UserAvatar 
        name="Custom Blue" 
        backgroundColor="#4299E0"
        textColor="#FFFFFF"
      />
      <UserAvatar 
        name="Custom Green" 
        backgroundColor="#3BA65E"
        textColor="#FFFFFF"
      />
      <UserAvatar 
        name="Custom Purple" 
        backgroundColor="#8A63BF"
        textColor="#FFFFFF"
      />
    </div>
  ),
};

export const Clickable: Story = {
  args: {
    name: 'John Doe',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    clickable: true,
    onClick: () => alert('Avatar clicked!'),
  },
};

export const BrokenImage: Story = {
  args: {
    name: 'Broken Image',
    src: 'https://invalid-image-url.jpg',
    onError: () => console.log('Image failed to load'),
  },
};

export const LongNames: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <UserAvatar name="A" />
      <UserAvatar name="John" />
      <UserAvatar name="John Doe" />
      <UserAvatar name="John Michael Doe" />
      <UserAvatar name="John Michael Christopher Doe III" />
    </div>
  ),
};

export const DifferentSizesWithStatus: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <UserAvatar name="XS" size="xs" status="online" showStatus={true} />
      <UserAvatar name="SM" size="sm" status="online" showStatus={true} />
      <UserAvatar name="MD" size="md" status="online" showStatus={true} />
      <UserAvatar name="LG" size="lg" status="online" showStatus={true} />
      <UserAvatar name="XL" size="xl" status="online" showStatus={true} />
      <UserAvatar name="2XL" size="2xl" status="online" showStatus={true} />
    </div>
  ),
};
