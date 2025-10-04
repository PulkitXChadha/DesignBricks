import type { Meta, StoryObj } from '@storybook/react';
import { Grid, GridItem } from './Grid';

const meta: Meta<typeof GridItem> = {
  title: 'Layout/GridItem',
  component: GridItem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A component for individual items within a Grid. Use it to control positioning, spanning, and alignment of specific grid items.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    gridArea: {
      control: 'text',
      description: 'Named grid area to place the item',
    },
    colSpan: {
      control: 'number',
      description: 'Number of columns the item should span',
    },
    rowSpan: {
      control: 'number',
      description: 'Number of rows the item should span',
    },
    colStart: {
      control: 'text',
      description: 'Grid column start position',
    },
    colEnd: {
      control: 'text',
      description: 'Grid column end position',
    },
    rowStart: {
      control: 'text',
      description: 'Grid row start position',
    },
    rowEnd: {
      control: 'text',
      description: 'Grid row end position',
    },
    justifySelf: {
      control: 'select',
      options: ['start', 'end', 'center', 'stretch'],
      description: 'How to align the item within its grid area (inline axis)',
    },
    alignSelf: {
      control: 'select',
      options: ['start', 'end', 'center', 'stretch'],
      description: 'How to align the item within its grid area (block axis)',
    },
  },
  decorators: [
    (Story) => (
      <Grid columns={['repeat(4, 1fr)']} rows={['repeat(3, 80px)']} gap="2" style={{ width: '400px' }}>
        <div style={{ backgroundColor: '#f5f5f5', padding: '8px', borderRadius: '4px', fontSize: '12px' }}>Grid Item 1</div>
        <div style={{ backgroundColor: '#f5f5f5', padding: '8px', borderRadius: '4px', fontSize: '12px' }}>Grid Item 2</div>
        <div style={{ backgroundColor: '#f5f5f5', padding: '8px', borderRadius: '4px', fontSize: '12px' }}>Grid Item 3</div>
        <div style={{ backgroundColor: '#f5f5f5', padding: '8px', borderRadius: '4px', fontSize: '12px' }}>Grid Item 4</div>
        <Story />
        <div style={{ backgroundColor: '#f5f5f5', padding: '8px', borderRadius: '4px', fontSize: '12px' }}>Grid Item 6</div>
        <div style={{ backgroundColor: '#f5f5f5', padding: '8px', borderRadius: '4px', fontSize: '12px' }}>Grid Item 7</div>
        <div style={{ backgroundColor: '#f5f5f5', padding: '8px', borderRadius: '4px', fontSize: '12px' }}>Grid Item 8</div>
      </Grid>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof GridItem>;

// Demo content component
const DemoContent = ({ children, highlight = false }: { children?: React.ReactNode; highlight?: boolean }) => (
  <div
    style={{
      padding: '16px',
      backgroundColor: highlight ? '#e3f2fd' : '#f0f0f0',
      borderRadius: '4px',
      fontSize: '14px',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60px',
      border: highlight ? '2px solid #1976d2' : 'none',
    }}
  >
    {children}
  </div>
);

export const Default: Story = {
  args: {
    children: <DemoContent highlight>Default GridItem</DemoContent>,
  },
};

export const ColumnSpan: Story = {
  args: {
    colSpan: 2,
    children: <DemoContent highlight>Spans 2 Columns</DemoContent>,
  },
};

export const RowSpan: Story = {
  args: {
    rowSpan: 2,
    children: <DemoContent highlight>Spans 2 Rows</DemoContent>,
  },
};

export const ColumnAndRowSpan: Story = {
  args: {
    colSpan: 2,
    rowSpan: 2,
    children: <DemoContent highlight>Spans 2x2</DemoContent>,
  },
  decorators: [
    (Story) => (
      <Grid columns={['repeat(4, 1fr)']} rows={['repeat(4, 80px)']} gap="2" style={{ width: '400px' }}>
        <div style={{ backgroundColor: '#f5f5f5', padding: '8px', borderRadius: '4px', fontSize: '12px' }}>Item 1</div>
        <div style={{ backgroundColor: '#f5f5f5', padding: '8px', borderRadius: '4px', fontSize: '12px' }}>Item 2</div>
        <Story />
        <div style={{ backgroundColor: '#f5f5f5', padding: '8px', borderRadius: '4px', fontSize: '12px' }}>Item 4</div>
        <div style={{ backgroundColor: '#f5f5f5', padding: '8px', borderRadius: '4px', fontSize: '12px' }}>Item 5</div>
        <div style={{ backgroundColor: '#f5f5f5', padding: '8px', borderRadius: '4px', fontSize: '12px' }}>Item 6</div>
        <div style={{ backgroundColor: '#f5f5f5', padding: '8px', borderRadius: '4px', fontSize: '12px' }}>Item 7</div>
        <div style={{ backgroundColor: '#f5f5f5', padding: '8px', borderRadius: '4px', fontSize: '12px' }}>Item 8</div>
      </Grid>
    ),
  ],
};

export const JustifyCenter: Story = {
  args: {
    justifySelf: 'center',
    children: <DemoContent highlight>Centered</DemoContent>,
  },
};

export const AlignCenter: Story = {
  args: {
    alignSelf: 'center',
    children: <DemoContent highlight>Aligned Center</DemoContent>,
  },
};

export const SpecificPosition: Story = {
  args: {
    colStart: 2,
    colEnd: 4,
    rowStart: 1,
    rowEnd: 3,
    children: <DemoContent highlight>Position 2-4, 1-3</DemoContent>,
  },
  decorators: [
    (Story) => (
      <Grid columns={['repeat(4, 1fr)']} rows={['repeat(3, 80px)']} gap="2" style={{ width: '400px' }}>
        <div style={{ backgroundColor: '#f5f5f5', padding: '8px', borderRadius: '4px', fontSize: '12px' }}>Item 1</div>
        <div style={{ backgroundColor: '#f5f5f5', padding: '8px', borderRadius: '4px', fontSize: '12px' }}>Item 2</div>
        <div style={{ backgroundColor: '#f5f5f5', padding: '8px', borderRadius: '4px', fontSize: '12px' }}>Item 3</div>
        <div style={{ backgroundColor: '#f5f5f5', padding: '8px', borderRadius: '4px', fontSize: '12px' }}>Item 4</div>
        <Story />
      </Grid>
    ),
  ],
};
