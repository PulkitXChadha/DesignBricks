import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Inputs/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    labelPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Enable notifications',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Toggle label="Small toggle" size="small" />
      <Toggle label="Medium toggle" size="medium" />
      <Toggle label="Large toggle" size="large" />
    </div>
  ),
};

export const LabelPositions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Toggle label="Label on right" labelPosition="right" />
      <Toggle label="Label on left" labelPosition="left" />
    </div>
  ),
};

export const WithHelperText: Story = {
  args: {
    label: 'Enable dark mode',
    helperText: 'This will switch the interface to dark theme',
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Toggle label="Default state" />
      <Toggle label="Checked state" defaultChecked />
      <Toggle label="Disabled state" disabled />
      <Toggle label="Disabled checked" disabled defaultChecked />
      <Toggle label="Error state" error helperText="Something went wrong" />
    </div>
  ),
};

export const WithoutLabel: Story = {
  args: {},
};
