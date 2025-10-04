import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Dropdown } from './Dropdown';
import { Button } from '../Button';

const meta: Meta<typeof Dropdown> = {
  title: 'Overlays/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: { type: 'select' },
      options: ['bottom-start', 'bottom-end', 'top-start', 'top-end', 'left', 'right'],
    },
    trigger: {
      control: { type: 'select' },
      options: ['click', 'hover', 'manual'],
    },
    closeOnSelect: { control: 'boolean' },
    disabled: { control: 'boolean' },
    width: { control: 'text' },
    maxHeight: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample icons
const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
  </svg>
);

const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
  </svg>
);

const LogoutIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
    <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
  </svg>
);

const basicItems = [
  {
    id: '1',
    label: 'Profile',
    icon: <UserIcon />,
    onClick: (item) => console.log('Clicked:', item.label),
  },
  {
    id: '2',
    label: 'Settings',
    icon: <SettingsIcon />,
    onClick: (item) => console.log('Clicked:', item.label),
  },
  {
    id: '3',
    label: 'Logout',
    icon: <LogoutIcon />,
    variant: 'danger' as const,
    onClick: (item) => console.log('Clicked:', item.label),
  },
];

export const Default: Story = {
  args: {
    items: basicItems,
    children: <Button>Click me</Button>,
  },
};

export const Placements: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '100px' }}>
      <Dropdown items={basicItems} placement="top-start">
        <Button>Top Start</Button>
      </Dropdown>
      <Dropdown items={basicItems} placement="top-end">
        <Button>Top End</Button>
      </Dropdown>
      <div /> {/* Empty space */}
      
      <Dropdown items={basicItems} placement="left">
        <Button>Left</Button>
      </Dropdown>
      <div /> {/* Empty space */}
      <Dropdown items={basicItems} placement="right">
        <Button>Right</Button>
      </Dropdown>
      
      <Dropdown items={basicItems} placement="bottom-start">
        <Button>Bottom Start</Button>
      </Dropdown>
      <Dropdown items={basicItems} placement="bottom-end">
        <Button>Bottom End</Button>
      </Dropdown>
      <div /> {/* Empty space */}
    </div>
  ),
};

export const Triggers: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', padding: '40px' }}>
      <Dropdown items={basicItems} trigger="click">
        <Button>Click Trigger</Button>
      </Dropdown>
      <Dropdown items={basicItems} trigger="hover">
        <Button>Hover Trigger</Button>
      </Dropdown>
    </div>
  ),
};

export const WithDescriptions: Story = {
  args: {
    items: [
      {
        id: '1',
        label: 'Profile',
        description: 'View and edit your profile',
        icon: <UserIcon />,
      },
      {
        id: '2',
        label: 'Settings',
        description: 'Configure your preferences',
        icon: <SettingsIcon />,
      },
      { id: 'divider1', label: '', divider: true },
      {
        id: '3',
        label: 'Logout',
        description: 'Sign out of your account',
        icon: <LogoutIcon />,
        variant: 'danger' as const,
      },
    ],
    children: <Button>User Menu</Button>,
  },
};

export const ItemVariants: Story = {
  args: {
    items: [
      { id: '1', label: 'Default Item' },
      { id: '2', label: 'Success Item', variant: 'success' as const },
      { id: '3', label: 'Danger Item', variant: 'danger' as const },
      { id: '4', label: 'Disabled Item', disabled: true },
    ],
    children: <Button>Item Variants</Button>,
  },
};

export const ManualControl: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    
    return (
      <div style={{ padding: '40px' }}>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
          <Button onClick={() => setOpen(!open)}>
            {open ? 'Close' : 'Open'} Dropdown
          </Button>
        </div>
        
        <Dropdown
          items={basicItems}
          trigger="manual"
          open={open}
          onOpenChange={setOpen}
        >
          <Button>Manually Controlled</Button>
        </Dropdown>
      </div>
    );
  },
};

export const CustomContent: Story = {
  args: {
    content: (
      <div style={{ padding: '16px', minWidth: '200px' }}>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Custom Content</h4>
        <p style={{ margin: '0 0 12px 0', fontSize: '12px', color: '#6B7280' }}>
          You can put any custom content here
        </p>
        <Button size="small" style={{ width: '100%' }}>
          Action Button
        </Button>
      </div>
    ),
    children: <Button>Custom Content</Button>,
  },
};

export const LongList: Story = {
  args: {
    items: Array.from({ length: 20 }, (_, i) => ({
      id: `item-${i}`,
      label: `Menu Item ${i + 1}`,
      icon: i % 3 === 0 ? <UserIcon /> : undefined,
    })),
    maxHeight: 200,
    children: <Button>Long List</Button>,
  },
};

export const DisabledDropdown: Story = {
  args: {
    items: basicItems,
    disabled: true,
    children: <Button disabled>Disabled Dropdown</Button>,
  },
};
