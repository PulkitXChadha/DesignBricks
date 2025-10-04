import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Overlays/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Tooltip component provides contextual information when users hover, click, or focus on an element.

## Features
- Multiple placement options (8 positions)
- Various trigger methods (hover, click, focus, manual)
- Customizable delays for showing/hiding
- Rich content support
- Automatic viewport boundary detection
- Portal-based rendering for proper z-index layering

## Accessibility
- Uses \`role="tooltip"\` for screen readers
- Respects reduced motion preferences
- Keyboard accessible with focus trigger
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'Content to display in the tooltip',
    },
    placement: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end'],
      description: 'Tooltip placement relative to trigger element',
      table: {
        defaultValue: { summary: 'top' },
      },
    },
    trigger: {
      control: { type: 'select' },
      options: ['hover', 'click', 'focus', 'manual'],
      description: 'How the tooltip is triggered',
      table: {
        defaultValue: { summary: 'hover' },
      },
    },
    showDelay: {
      control: { type: 'number', min: 0, max: 2000, step: 100 },
      description: 'Delay before showing tooltip (ms)',
      table: {
        defaultValue: { summary: '500' },
      },
    },
    hideDelay: {
      control: { type: 'number', min: 0, max: 2000, step: 100 },
      description: 'Delay before hiding tooltip (ms)',
      table: {
        defaultValue: { summary: '0' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the tooltip',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    maxWidth: {
      control: { type: 'number', min: 100, max: 500, step: 10 },
      description: 'Maximum width of tooltip',
      table: {
        defaultValue: { summary: '250' },
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates all 8 available placement positions for the tooltip.',
      },
    },
  },
};

export const TriggerMethods: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', padding: '40px' }}>
      <Tooltip content="Appears on hover (default)" trigger="hover">
        <Button>Hover Me</Button>
      </Tooltip>
      <Tooltip content="Appears on click" trigger="click">
        <Button>Click Me</Button>
      </Tooltip>
      <Tooltip content="Appears on focus" trigger="focus">
        <Button>Focus Me</Button>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tooltips can be triggered by hover (default), click, or focus events for different interaction patterns.',
      },
    },
  },
};

const ManualControlComponent = () => {
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
};

export const ManualControl: Story = {
  render: () => <ManualControlComponent />,
  parameters: {
    docs: {
      description: {
        story: 'Use the `manual` trigger to control tooltip visibility programmatically with the `open` and `onOpenChange` props.',
      },
    },
  },
};

export const WithCustomization: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '40px' }}>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Tooltip content="Shows immediately" showDelay={0}>
          <Button>No Delay</Button>
        </Tooltip>
        <Tooltip content="Shows after 1 second" showDelay={1000}>
          <Button>1s Show Delay</Button>
        </Tooltip>
        <Tooltip content="Hides after 1 second" hideDelay={1000}>
          <Button>1s Hide Delay</Button>
        </Tooltip>
      </div>
      
      <div style={{ display: 'flex', gap: '20px' }}>
        <Tooltip 
          content="This is a much longer tooltip content that demonstrates how the tooltip handles wrapping text and maintains proper spacing and readability even with multiple lines of text." 
          maxWidth={200}
        >
          <Button>Long Content</Button>
        </Tooltip>
        
        <Tooltip 
          content={
            <div>
              <strong>Rich Content</strong>
              <br />
              This tooltip contains <em>formatted</em> text
            </div>
          }
        >
          <Button>Rich Content</Button>
        </Tooltip>
        
        <Tooltip content="You won't see this" disabled>
          <Button disabled>Disabled</Button>
        </Tooltip>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Customize tooltips with delays, max width, rich content, and disabled states.',
      },
    },
  },
};
