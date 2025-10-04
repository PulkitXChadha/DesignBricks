import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';
import { Colors } from '../Colors';
import { colors } from '../../tokens/colors';

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

// Simple demo box component for stories using design system colors
const DemoBox = ({ children, ...props }: { children?: React.ReactNode; color?: string; height?: string }) => (
  <div
    style={{
      padding: '16px',
      backgroundColor: props.color || colors.info[100],
      borderRadius: '4px',
      minHeight: '60px',
      height: props.height,
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
        <DemoBox color={colors.success[100]}>Item 1</DemoBox>
        <DemoBox color={colors.info[100]}>Item 2</DemoBox>
        <DemoBox color={colors.pink[100]}>Item 3</DemoBox>
      </>
    ),
  },
};

export const CenteredContent: Story = {
  args: {
    justifyContent: 'center',
    alignItems: 'center',
    style: { height: '200px', width: '300px', border: `2px dashed ${colors.neutral[300]}` },
    children: <DemoBox>Centered Item</DemoBox>,
  },
};

export const SpaceBetween: Story = {
  args: {
    justifyContent: 'space-between',
    alignItems: 'center',
    style: { width: '300px', padding: '16px', border: `2px dashed ${colors.neutral[300]}` },
    children: (
      <>
        <DemoBox color={colors.success[100]}>Start</DemoBox>
        <DemoBox color={colors.info[100]}>Middle</DemoBox>
        <DemoBox color={colors.pink[100]}>End</DemoBox>
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
          <DemoBox color={colors.success[100]}>Grows to fill space</DemoBox>
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
          <DemoBox color={colors.success[100]}>Header Left</DemoBox>
          <DemoBox color={colors.pink[100]}>Header Right</DemoBox>
        </Flex>
        <Flex gap="4">
          <Flex direction="column" gap="2" style={{ flex: 1 }}>
            <DemoBox color={colors.info[100]}>Content 1</DemoBox>
            <DemoBox color={colors.info[100]}>Content 2</DemoBox>
          </Flex>
          <Flex direction="column" gap="2" style={{ width: '200px' }}>
            <DemoBox color={colors.lemon[100]}>Sidebar 1</DemoBox>
            <DemoBox color={colors.lemon[100]}>Sidebar 2</DemoBox>
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
        <DemoBox color={colors.success[400]} height="80px">Item 1 (Green)</DemoBox>
        <DemoBox color={colors.primary[400]} height="80px">Item 2 (Blue)</DemoBox>
        <DemoBox color={colors.warning[400]} height="80px">Item 3 (Orange)</DemoBox>
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
        <DemoBox color={colors.success[100]}>Item 1</DemoBox>
        <DemoBox color={colors.info[100]}>Item 2</DemoBox>
        <DemoBox color={colors.pink[100]}>Item 3</DemoBox>
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
        <Flex justifyContent="space-between" alignItems="center" style={{ padding: '16px', backgroundColor: colors.neutral[100], borderRadius: '8px' }}>
          <DemoBox color={colors.success[500]} style={{ width: '120px', height: '40px' }}>Logo</DemoBox>
          <Flex gap="3">
            <DemoBox color={colors.indigo[400]} style={{ width: '80px', height: '40px' }}>Nav 1</DemoBox>
            <DemoBox color={colors.purple[400]} style={{ width: '80px', height: '40px' }}>Nav 2</DemoBox>
            <DemoBox color={colors.warning[400]} style={{ width: '80px', height: '40px' }}>Nav 3</DemoBox>
          </Flex>
        </Flex>
        <Flex gap="4">
          <Flex direction="column" gap="3" grow={1}>
            <DemoBox color={colors.error[400]} height="120px">Main Content</DemoBox>
            <Flex gap="2">
              <DemoBox color={colors.coral[400]} height="80px" style={{ flex: 1 }}>Sub Item 1</DemoBox>
              <DemoBox color={colors.lemon[400]} height="80px" style={{ flex: 1 }}>Sub Item 2</DemoBox>
            </Flex>
          </Flex>
          <Flex direction="column" gap="2" style={{ width: '200px' }}>
            <DemoBox color={colors.turquoise[400]} height="60px">Sidebar 1</DemoBox>
            <DemoBox color={colors.turquoise[500]} height="60px">Sidebar 2</DemoBox>
            <DemoBox color={colors.turquoise[600]} height="60px">Sidebar 3</DemoBox>
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
        <DemoBox color={colors.error[400]}>Gap scales with screen size</DemoBox>
        <DemoBox color={colors.lemon[400]}>Small gap on mobile</DemoBox>
        <DemoBox color={colors.success[400]}>Medium gap on tablet</DemoBox>
        <DemoBox color={colors.primary[400]}>Large gap on desktop</DemoBox>
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

export const WithColorPalette: Story = {
  args: {
    direction: 'column',
    gap: '6',
    style: { width: '100%', maxWidth: '800px' },
    children: (
      <>
        <Colors category="primary" showHex={true} />
        <Colors category="success" showHex={true} />
        <Colors category="warning" showHex={true} />
      </>
    ),
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Demonstrates using the Colors component within Flex layouts to display multiple color palettes vertically.',
      },
    },
  },
};

export const ColorPaletteGrid: Story = {
  render: () => (
    <Flex direction="column" gap="4" style={{ width: '100%', maxWidth: '1200px' }}>
      <Flex gap="4" wrap="wrap">
        <Flex direction="column" style={{ flex: '1 1 300px' }}>
          <Colors category="primary" showHex={false} />
        </Flex>
        <Flex direction="column" style={{ flex: '1 1 300px' }}>
          <Colors category="secondary" showHex={false} />
        </Flex>
      </Flex>
      <Flex gap="4" wrap="wrap">
        <Flex direction="column" style={{ flex: '1 1 300px' }}>
          <Colors category="success" showHex={false} />
        </Flex>
        <Flex direction="column" style={{ flex: '1 1 300px' }}>
          <Colors category="error" showHex={false} />
        </Flex>
      </Flex>
    </Flex>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'A responsive grid layout using Flex to display color palettes in a 2-column layout that wraps on smaller screens.',
      },
    },
  },
};

export const DesignSystemShowcase: Story = {
  render: () => (
    <Flex direction="column" gap="8" style={{ width: '100%' }}>
      <Flex 
        direction="column" 
        gap="4" 
        style={{ 
          padding: '24px', 
          backgroundColor: colors.neutral[50], 
          borderRadius: '8px' 
        }}
      >
        <h2 style={{ margin: 0, color: colors.neutral[700] }}>Primary Colors</h2>
        <Colors category="primary" showHex={true} />
      </Flex>
      
      <Flex gap="4" wrap="wrap">
        <Flex 
          direction="column" 
          gap="3" 
          style={{ 
            flex: '1 1 350px',
            padding: '20px', 
            backgroundColor: colors.success[100], 
            borderRadius: '8px' 
          }}
        >
          <h3 style={{ margin: 0, color: colors.success[700] }}>Success</h3>
          <Colors category="success" showHex={true} />
        </Flex>
        
        <Flex 
          direction="column" 
          gap="3" 
          style={{ 
            flex: '1 1 350px',
            padding: '20px', 
            backgroundColor: colors.warning[100], 
            borderRadius: '8px' 
          }}
        >
          <h3 style={{ margin: 0, color: colors.warning[700] }}>Warning</h3>
          <Colors category="warning" showHex={true} />
        </Flex>
        
        <Flex 
          direction="column" 
          gap="3" 
          style={{ 
            flex: '1 1 350px',
            padding: '20px', 
            backgroundColor: colors.error[100], 
            borderRadius: '8px' 
          }}
        >
          <h3 style={{ margin: 0, color: colors.error[700] }}>Error</h3>
          <Colors category="error" showHex={true} />
        </Flex>
      </Flex>
      
      <Flex 
        direction="column" 
        gap="4" 
        style={{ 
          padding: '24px', 
          backgroundColor: colors.neutral[700], 
          borderRadius: '8px' 
        }}
      >
        <h2 style={{ margin: 0, color: colors.neutral[0] }}>Secondary Accent Colors</h2>
        <Flex gap="4" wrap="wrap">
          <Colors category="purple" showHex={false} />
          <Colors category="pink" showHex={false} />
          <Colors category="teal" showHex={false} />
          <Colors category="turquoise" showHex={false} />
        </Flex>
      </Flex>
    </Flex>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'A comprehensive showcase of the design system using Flex for complex layouts with multiple color palettes organized in different sections.',
      },
    },
  },
};
