import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { PillControl } from './PillControl';

const meta: Meta<typeof PillControl> = {
  title: 'Inputs/PillControl',
  component: PillControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    allowDeselect: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample icons
const SuggestedIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path fillRule="evenodd" d="M7.25 0v2h1.5V0zM16 7.25h-2v1.5h2zM0 7.25h2v1.5H0zM13.127 1.813l-1.415 1.414 1.061 1.06 1.414-1.414zM2.874 1.813l1.414 1.414-1.06 1.06-1.415-1.414z"/>
    <path fillRule="evenodd" d="M3.25 8.221C3.25 5.61 5.382 3.5 8 3.5s4.75 2.109 4.75 4.721a4.7 4.7 0 0 1-.985 2.879c-.754.973-1.33 1.776-1.33 2.644v1.506a.75.75 0 0 1-.75.75h-3.37a.75.75 0 0 1-.75-.75v-1.506c0-.868-.576-1.67-1.33-2.644A4.7 4.7 0 0 1 3.25 8.22M8 5C6.2 5 4.75 6.447 4.75 8.221c0 .738.25 1.417.67 1.96l.044.056c.284.366.612.789.897 1.263h3.278c.285-.474.613-.897.897-1.263l.043-.056c.422-.543.671-1.222.671-1.96C11.25 6.447 9.8 5 8 5m-.934 8.744c0-.256-.03-.504-.081-.744h2.03q-.079.36-.08.744v.756h-1.87z" clipRule="evenodd"/>
  </svg>
);

const FavoritesIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path fillRule="evenodd" d="M7.995 0a.75.75 0 0 1 .714.518l1.459 4.492h4.723a.75.75 0 0 1 .44 1.356l-3.82 2.776 1.459 4.492a.75.75 0 0 1-1.154.838l-3.82-2.776-3.821 2.776a.75.75 0 0 1-1.154-.838L4.48 9.142.66 6.366A.75.75 0 0 1 1.1 5.01h4.723L7.282.518A.75.75 0 0 1 7.995 0m0 3.177-.914 2.814a.75.75 0 0 1-.713.519h-2.96l2.394 1.739a.75.75 0 0 1 .273.839l-.915 2.814 2.394-1.74a.75.75 0 0 1 .882 0l2.394 1.74-.914-2.814a.75.75 0 0 1 .272-.839l2.394-1.74H9.623a.75.75 0 0 1-.713-.518z" clipRule="evenodd"/>
  </svg>
);

const PopularIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M1 1v13.25c0 .414.336.75.75.75H15v-1.5H2.5V1z"/>
    <path d="m15.03 5.03-1.06-1.06L9.5 8.44 7 5.94 3.47 9.47l1.06 1.06L7 8.06l2.5 2.5z"/>
  </svg>
);

const basicOptions = [
  {
    value: 'suggested',
    label: 'Suggested',
    icon: <SuggestedIcon />,
  },
  {
    value: 'favorites',
    label: 'Favorites',
    icon: <FavoritesIcon />,
  },
  {
    value: 'popular',
    label: 'Popular',
    icon: <PopularIcon />,
  },
];

export const Default: Story = {
  args: {
    options: basicOptions,
    defaultValue: 'popular',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
      <div>
        <h4>Small</h4>
        <PillControl options={basicOptions} size="small" defaultValue="suggested" />
      </div>
      <div>
        <h4>Medium (Default)</h4>
        <PillControl options={basicOptions} size="medium" defaultValue="favorites" />
      </div>
      <div>
        <h4>Large</h4>
        <PillControl options={basicOptions} size="large" defaultValue="popular" />
      </div>
    </div>
  ),
};

export const WithBadges: Story = {
  args: {
    options: [
      {
        value: 'all',
        label: 'All',
        badge: 42,
      },
      {
        value: 'active',
        label: 'Active',
        badge: 12,
      },
      {
        value: 'pending',
        label: 'Pending',
        badge: 3,
      },
      {
        value: 'archived',
        label: 'Archived',
        badge: 27,
      },
    ],
    defaultValue: 'active',
  },
};

const ControlledComponent = () => {
  const [value, setValue] = useState('favorites');
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <strong>Selected: {value}</strong>
      </div>
      <PillControl
        options={basicOptions}
        value={value}
        onChange={setValue}
      />
      <div style={{ display: 'flex', gap: '8px' }}>
        <button onClick={() => setValue('suggested')}>Select Suggested</button>
        <button onClick={() => setValue('favorites')}>Select Favorites</button>
        <button onClick={() => setValue('popular')}>Select Popular</button>
      </div>
    </div>
  );
};

export const Controlled: Story = {
  render: () => <ControlledComponent />,
};

const WithDeselectionComponent = () => {
  const [value, setValue] = useState('favorites');
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <strong>Selected: {value || 'None'}</strong>
      </div>
      <PillControl
        options={basicOptions}
        value={value}
        onChange={setValue}
        allowDeselect={true}
      />
      <p style={{ fontSize: '14px', color: '#6B7280' }}>
        Click the same option twice to deselect it
      </p>
    </div>
  );
};

export const WithDeselection: Story = {
  render: () => <WithDeselectionComponent />,
};

export const DisabledOptions: Story = {
  args: {
    options: [
      {
        value: 'enabled1',
        label: 'Enabled Option',
        icon: <SuggestedIcon />,
      },
      {
        value: 'disabled',
        label: 'Disabled Option',
        icon: <FavoritesIcon />,
        disabled: true,
      },
      {
        value: 'enabled2',
        label: 'Another Enabled',
        icon: <PopularIcon />,
      },
    ],
    defaultValue: 'enabled1',
  },
};

export const DisabledControl: Story = {
  args: {
    options: basicOptions,
    defaultValue: 'suggested',
    disabled: true,
  },
};

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <PillControl
        options={basicOptions}
        defaultValue="favorites"
        fullWidth={true}
      />
    </div>
  ),
};

export const TextOnly: Story = {
  args: {
    options: [
      { value: 'all', label: 'All Items' },
      { value: 'recent', label: 'Recent' },
      { value: 'shared', label: 'Shared with me' },
      { value: 'trash', label: 'Trash' },
    ],
    defaultValue: 'recent',
  },
};

export const LongLabels: Story = {
  render: () => (
    <div style={{ width: '600px' }}>
      <PillControl
        options={[
          { value: 'option1', label: 'Short' },
          { value: 'option2', label: 'Medium length option' },
          { value: 'option3', label: 'This is a very long option label that might wrap' },
          { value: 'option4', label: 'Another long descriptive option name' },
        ]}
        defaultValue="option2"
        fullWidth={true}
      />
    </div>
  ),
};

export const ManyOptions: Story = {
  args: {
    options: Array.from({ length: 8 }, (_, i) => ({
      value: `option${i + 1}`,
      label: `Option ${i + 1}`,
      badge: Math.floor(Math.random() * 20) + 1,
    })),
    defaultValue: 'option3',
  },
};
