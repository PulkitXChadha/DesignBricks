import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end'],
    },
    trigger: {
      control: { type: 'select' },
      options: ['hover', 'click', 'focus', 'manual'],
    },
    showDelay: { control: 'number' },
    hideDelay: { control: 'number' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'This is a helpful tooltip',
    children: <Button>Hover me</Button>,
  },
};

export const Placements: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '80px' }}>
      <Tooltip content="Top start" placement="top-start">
        <Button>Top Start</Button>
      </Tooltip>
      <Tooltip content="Top center" placement="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip content="Top end" placement="top-end">
        <Button>Top End</Button>
      </Tooltip>
      
      <Tooltip content="Left side" placement="left">
        <Button>Left</Button>
      </Tooltip>
      <div /> {/* Empty space for center */}
      <Tooltip content="Right side" placement="right">
        <Button>Right</Button>
      </Tooltip>
      
      <Tooltip content="Bottom start" placement="bottom-start">
        <Button>Bottom Start</Button>
      </Tooltip>
      <Tooltip content="Bottom center" placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip content="Bottom end" placement="bottom-end">
        <Button>Bottom End</Button>
      </Tooltip>
    </div>
  ),
};

export const Triggers: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', padding: '40px' }}>
      <Tooltip content="Appears on hover (default)" trigger="hover">
        <Button>Hover</Button>
      </Tooltip>
      <Tooltip content="Appears on click" trigger="click">
        <Button>Click</Button>
      </Tooltip>
      <Tooltip content="Appears on focus" trigger="focus">
        <Button>Focus</Button>
      </Tooltip>
    </div>
  ),
};

export const ManualControl: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    
    return (
      <div style={{ padding: '40px' }}>
        <Tooltip 
          content="This tooltip is manually controlled" 
          trigger="manual" 
          open={open}
          onOpenChange={setOpen}
        >
          <Button onClick={() => setOpen(!open)}>
            {open ? 'Hide' : 'Show'} Tooltip
          </Button>
        </Tooltip>
      </div>
    );
  },
};

export const WithDelay: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', padding: '40px' }}>
      <Tooltip content="Shows immediately" showDelay={0}>
        <Button>No Delay</Button>
      </Tooltip>
      <Tooltip content="Shows after 1 second" showDelay={1000}>
        <Button>1s Delay</Button>
      </Tooltip>
      <Tooltip content="Hides after 1 second" hideDelay={1000}>
        <Button>Hide Delay</Button>
      </Tooltip>
    </div>
  ),
};

export const LongContent: Story = {
  args: {
    content: 'This is a much longer tooltip content that demonstrates how the tooltip handles wrapping text and maintains proper spacing and readability even with multiple lines of text.',
    maxWidth: 200,
    children: <Button>Long Content</Button>,
  },
};

export const DisabledTooltip: Story = {
  args: {
    content: "You won't see this",
    disabled: true,
    children: <Button disabled>Disabled Button</Button>,
  },
};

export const InteractiveContent: Story = {
  args: {
    content: (
      <div>
        <strong>Interactive Tooltip</strong>
        <br />
        This tooltip contains rich content
      </div>
    ),
    children: <Button>Rich Content</Button>,
  },
};
