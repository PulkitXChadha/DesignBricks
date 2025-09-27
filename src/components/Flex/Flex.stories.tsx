import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
  title: 'Layout/Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible layout container that uses CSS flexbox. Use it to build vertical or horizontal stacks, simple wrapping grids, and more complex layouts.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      description: 'The flex direction',
    },
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      description: 'Whether flex items should wrap',
    },
    justifyContent: {
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
      description: 'How to align items along the main axis',
    },
    alignItems: {
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
      description: 'How to align items along the cross axis',
    },
    gap: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24'],
      description: 'The gap between items',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

// Simple demo box component for stories
const DemoBox = ({ children, ...props }: { children?: React.ReactNode; color?: string }) => (
  <div
    style={{
      padding: '16px',
      backgroundColor: props.color || '#e3f2fd',
      borderRadius: '4px',
      minHeight: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      fontWeight: '500',
    }}
  >
    {children}
  </div>
);

export const Default: Story = {
  args: {
    gap: '4',
    children: (
      <>
        <DemoBox>Item 1</DemoBox>
        <DemoBox>Item 2</DemoBox>
        <DemoBox>Item 3</DemoBox>
      </>
    ),
  },
};

export const ColumnLayout: Story = {
  args: {
    direction: 'column',
    gap: '3',
    style: { width: '200px' },
    children: (
      <>
        <DemoBox color="#e8f5e8">Item 1</DemoBox>
        <DemoBox color="#e3f2fd">Item 2</DemoBox>
        <DemoBox color="#fce4ec">Item 3</DemoBox>
      </>
    ),
  },
};

export const CenteredContent: Story = {
  args: {
    justifyContent: 'center',
    alignItems: 'center',
    style: { height: '200px', width: '300px', border: '2px dashed #ccc' },
    children: <DemoBox>Centered Item</DemoBox>,
  },
};

export const SpaceBetween: Story = {
  args: {
    justifyContent: 'space-between',
    alignItems: 'center',
    style: { width: '300px', padding: '16px', border: '2px dashed #ccc' },
    children: (
      <>
        <DemoBox color="#e8f5e8">Start</DemoBox>
        <DemoBox color="#e3f2fd">Middle</DemoBox>
        <DemoBox color="#fce4ec">End</DemoBox>
      </>
    ),
  },
};

export const WrappingItems: Story = {
  args: {
    wrap: 'wrap',
    gap: '2',
    style: { width: '200px' },
    children: (
      <>
        <DemoBox>Item 1</DemoBox>
        <DemoBox>Item 2</DemoBox>
        <DemoBox>Item 3</DemoBox>
        <DemoBox>Item 4</DemoBox>
        <DemoBox>Item 5</DemoBox>
      </>
    ),
  },
};

export const FlexGrowExample: Story = {
  args: {
    gap: '2',
    style: { width: '400px' },
    children: (
      <>
        <DemoBox>Fixed</DemoBox>
        <Flex grow={1}>
          <DemoBox color="#e8f5e8">Grows to fill space</DemoBox>
        </Flex>
        <DemoBox>Fixed</DemoBox>
      </>
    ),
  },
};

export const ResponsiveLayout: Story = {
  args: {
    direction: 'column',
    gap: '4',
    style: { width: '100%', maxWidth: '600px' },
    children: (
      <>
        <Flex justifyContent="space-between" alignItems="center" gap="3">
          <DemoBox color="#e8f5e8">Header Left</DemoBox>
          <DemoBox color="#fce4ec">Header Right</DemoBox>
        </Flex>
        <Flex gap="4">
          <Flex direction="column" gap="2" style={{ flex: 1 }}>
            <DemoBox color="#e3f2fd">Content 1</DemoBox>
            <DemoBox color="#e3f2fd">Content 2</DemoBox>
          </Flex>
          <Flex direction="column" gap="2" style={{ width: '200px' }}>
            <DemoBox color="#fff3e0">Sidebar 1</DemoBox>
            <DemoBox color="#fff3e0">Sidebar 2</DemoBox>
          </Flex>
        </Flex>
      </>
    ),
  },
};

export const VerticalStack: Story = {
  args: {
    direction: 'column',
    width: '20',
    gap: '3',
    children: (
      <>
        <DemoBox color="#4ade80" height="80px">Item 1 (Green)</DemoBox>
        <DemoBox color="#3b82f6" height="80px">Item 2 (Blue)</DemoBox>
        <DemoBox color="#f59e0b" height="80px">Item 3 (Orange)</DemoBox>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'A vertical stack example using design tokens for consistent spacing and sizing.',
      },
    },
  },
};

export const ResponsiveDirection: Story = {
  args: {
    direction: { base: 'column', md: 'row' },
    gap: '4',
    style: { width: '100%', maxWidth: '800px' },
    children: (
      <>
        <DemoBox color="#e8f5e8">Item 1</DemoBox>
        <DemoBox color="#e3f2fd">Item 2</DemoBox>
        <DemoBox color="#fce4ec">Item 3</DemoBox>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Responsive direction that changes from column on mobile to row on medium screens and up.',
      },
    },
  },
};

export const NestedFlexLayouts: Story = {
  args: {
    direction: 'column',
    gap: '4',
    style: { width: '100%', maxWidth: '800px' },
    children: (
      <>
        <Flex justifyContent="space-between" alignItems="center" style={{ padding: '16px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
          <DemoBox color="#10b981" style={{ width: '120px', height: '40px' }}>Logo</DemoBox>
          <Flex gap="3">
            <DemoBox color="#6366f1" style={{ width: '80px', height: '40px' }}>Nav 1</DemoBox>
            <DemoBox color="#8b5cf6" style={{ width: '80px', height: '40px' }}>Nav 2</DemoBox>
            <DemoBox color="#f59e0b" style={{ width: '80px', height: '40px' }}>Nav 3</DemoBox>
          </Flex>
        </Flex>
        <Flex gap="4">
          <Flex direction="column" gap="3" grow={1}>
            <DemoBox color="#ef4444" height="120px">Main Content</DemoBox>
            <Flex gap="2">
              <DemoBox color="#f97316" height="80px" style={{ flex: 1 }}>Sub Item 1</DemoBox>
              <DemoBox color="#eab308" height="80px" style={{ flex: 1 }}>Sub Item 2</DemoBox>
            </Flex>
          </Flex>
          <Flex direction="column" gap="2" style={{ width: '200px' }}>
            <DemoBox color="#06b6d4" height="60px">Sidebar 1</DemoBox>
            <DemoBox color="#0891b2" height="60px">Sidebar 2</DemoBox>
            <DemoBox color="#0e7490" height="60px">Sidebar 3</DemoBox>
          </Flex>
        </Flex>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Complex nested layout demonstrating how Flex components can be combined to create sophisticated application layouts.',
      },
    },
  },
};

export const ResponsiveGaps: Story = {
  args: {
    direction: 'column',
    gap: { base: '2', md: '4', lg: '6' },
    style: { width: '100%', maxWidth: '600px' },
    children: (
      <>
        <DemoBox color="#f87171">Gap scales with screen size</DemoBox>
        <DemoBox color="#fbbf24">Small gap on mobile</DemoBox>
        <DemoBox color="#34d399">Medium gap on tablet</DemoBox>
        <DemoBox color="#60a5fa">Large gap on desktop</DemoBox>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Responsive gaps that adapt to different screen sizes - resize the browser to see the effect.',
      },
    },
  },
};
