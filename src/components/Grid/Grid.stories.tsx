import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Grid, GridItem } from './Grid';
import { colors } from '../../tokens/colors';

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A powerful layout container that uses CSS Grid. Use it to build complex two-dimensional layouts with precise control over rows, columns, and positioning.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    areas: {
      control: 'object',
      description: 'Grid template areas definition',
    },
    columns: {
      control: 'object',
      description: 'Grid template columns',
    },
    rows: {
      control: 'object',
      description: 'Grid template rows',
    },
    gap: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24'],
      description: 'The gap between items',
    },
    justifyItems: {
      control: 'select',
      options: ['start', 'end', 'center', 'stretch'],
      description: 'How to align items within their grid area (inline axis)',
    },
    alignItems: {
      control: 'select',
      options: ['start', 'end', 'center', 'stretch'],
      description: 'How to align items within their grid area (block axis)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

// Demo box component for stories
const DemoBox = ({ children, ...props }: { children?: React.ReactNode; color?: string; height?: string }) => (
  <div
    style={{
      padding: '16px',
      backgroundColor: props.color || colors.primary[200],
      borderRadius: '4px',
      minHeight: props.height || '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      fontWeight: '500',
      color: colors.neutral[700],
    }}
  >
    {children}
  </div>
);

export const Default: Story = {
  args: {
    columns: ['1fr', '1fr', '1fr'],
    gap: 4,
    style: { width: '400px' },
    children: (
      <>
        <GridItem>
          <DemoBox color={colors.primary[500]}>Item 1</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.purple[500]}>Item 2</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.pink[500]}>Item 3</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.warning[500]}>Item 4</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.success[500]}>Item 5</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.turquoise[500]}>Item 6</DemoBox>
        </GridItem>
      </>
    ),
  },
};

export const BasicApplicationLayout: Story = {
  args: {
    areas: [
      'header  header',
      'sidebar content',
      'footer  footer'
    ],
    columns: ['200px', '1fr'],
    rows: ['60px', '1fr', '60px'],
    gap: 3,
    style: { width: '800px', height: '500px' },
    children: (
      <>
        <GridItem gridArea="header">
          <DemoBox color={colors.success[500]} height="100%">Header</DemoBox>
        </GridItem>
        <GridItem gridArea="sidebar">
          <DemoBox color={colors.primary[500]} height="100%">Sidebar</DemoBox>
        </GridItem>
        <GridItem gridArea="content">
          <DemoBox color={colors.warning[500]} height="100%">Content</DemoBox>
        </GridItem>
        <GridItem gridArea="footer">
          <DemoBox color={colors.error[500]} height="100%">Footer</DemoBox>
        </GridItem>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Classic application layout with header, sidebar, content, and footer areas using grid template areas.',
      },
    },
  },
};

export const DashboardLayout: Story = {
  args: {
    areas: [
      'header header header',
      'nav    main   aside',
      'nav    main   aside',
      'footer footer footer'
    ],
    columns: ['200px', '1fr', '200px'],
    rows: ['60px', '1fr', '1fr', '60px'],
    gap: 4,
    style: { width: '800px', height: '500px' },
    children: (
      <>
        <GridItem gridArea="header">
          <DemoBox color={colors.success[500]} height="100%">Header</DemoBox>
        </GridItem>
        <GridItem gridArea="nav">
          <DemoBox color={colors.primary[500]} height="100%">Navigation</DemoBox>
        </GridItem>
        <GridItem gridArea="main">
          <DemoBox color={colors.warning[500]} height="100%">Main Content</DemoBox>
        </GridItem>
        <GridItem gridArea="aside">
          <DemoBox color={colors.purple[500]} height="100%">Aside</DemoBox>
        </GridItem>
        <GridItem gridArea="footer">
          <DemoBox color={colors.error[500]} height="100%">Footer</DemoBox>
        </GridItem>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Complex dashboard layout with header, navigation, main content, aside, and footer.',
      },
    },
  },
};

export const ResponsiveCardGrid: Story = {
  args: {
    columns: ['repeat(auto-fit, minmax(200px, 1fr))'],
    gap: 4,
    style: { width: '100%', maxWidth: '800px' },
    children: (
      <>
        <GridItem>
          <DemoBox color={colors.success[500]} height="120px">Card 1</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.primary[500]} height="120px">Card 2</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.pink[500]} height="120px">Card 3</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.warning[500]} height="120px">Card 4</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.purple[500]} height="120px">Card 5</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.turquoise[500]} height="120px">Card 6</DemoBox>
        </GridItem>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Responsive card grid that automatically adjusts columns based on available space using auto-fit.',
      },
    },
  },
};

export const SpanningItems: Story = {
  args: {
    columns: ['repeat(4, 1fr)'],
    rows: ['repeat(3, 100px)'],
    gap: 3,
    style: { width: '600px' },
    children: (
      <>
        <GridItem colSpan={2}>
          <DemoBox color={colors.success[500]} height="100%">Spans 2 columns</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.primary[500]} height="100%">Item 2</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.pink[500]} height="100%">Item 3</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.warning[500]} height="100%">Item 4</DemoBox>
        </GridItem>
        <GridItem rowSpan={2}>
          <DemoBox color={colors.purple[500]} height="100%">Spans 2 rows</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.turquoise[500]} height="100%">Item 6</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.pink[500]} height="100%">Item 7</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.primary[500]} height="100%">Item 8</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.warning[500]} height="100%">Item 9</DemoBox>
        </GridItem>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of grid items spanning multiple columns and rows using colSpan and rowSpan props.',
      },
    },
  },
};

export const AlignmentExample: Story = {
  args: {
    columns: ['repeat(3, 1fr)'],
    justifyItems: 'center',
    alignItems: 'center',
    gap: 4,
    style: { width: '500px', height: '200px' },
    children: (
      <>
        <GridItem>
          <div style={{ width: '80px', height: '40px', padding: '16px', backgroundColor: colors.success[500], borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '500', color: 'white' }}>Small</div>
        </GridItem>
        <GridItem>
          <div style={{ width: '100px', height: '60px', padding: '16px', backgroundColor: colors.primary[500], borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '500', color: 'white' }}>Medium</div>
        </GridItem>
        <GridItem>
          <div style={{ width: '120px', height: '80px', padding: '16px', backgroundColor: colors.purple[500], borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '500', color: 'white' }}>Large</div>
        </GridItem>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid items centered within their cells using justifyItems and alignItems properties.',
      },
    },
  },
};

export const AutoFitColumns: Story = {
  args: {
    columns: ['repeat(auto-fit, minmax(150px, 1fr))'],
    gap: 3,
    style: { width: '500px' },
    children: (
      <>
        <GridItem>
          <DemoBox color={colors.success[500]}>Auto 1</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.primary[500]}>Auto 2</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.pink[500]}>Auto 3</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.warning[500]}>Auto 4</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.purple[500]}>Auto 5</DemoBox>
        </GridItem>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Responsive columns that automatically fit and wrap based on container width.',
      },
    },
  },
};

export const ResponsiveLayout: Story = {
  args: {
    areas: {
      base: [
        'header',
        'nav',
        'content',
        'footer'
      ],
      md: [
        'header   header',
        'nav      content',
        'nav      content',
        'footer   footer'
      ],
      lg: [
        'header header  header',
        'nav    content aside',
        'nav    content aside',
        'footer footer  footer'
      ]
    },
    columns: {
      md: ['12', '1fr'],
      lg: ['12', '1fr', '12']
    },
    gap: 3,
    style: { width: '100%', minHeight: '500px' },
    children: (
      <>
        <GridItem gridArea="header">
          <DemoBox color={colors.success[500]} height="60px">Header</DemoBox>
        </GridItem>
        <GridItem gridArea="nav">
          <DemoBox color={colors.primary[500]} height="300px">Navigation</DemoBox>
        </GridItem>
        <GridItem gridArea="content">
          <DemoBox color={colors.warning[500]} height="300px">Main Content</DemoBox>
        </GridItem>
        <GridItem gridArea="aside" isHidden={{ base: true, lg: false }}>
          <DemoBox color={colors.purple[500]} height="300px">Aside (Hidden on mobile)</DemoBox>
        </GridItem>
        <GridItem gridArea="footer">
          <DemoBox color={colors.error[500]} height="60px">Footer</DemoBox>
        </GridItem>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Responsive grid that adapts layout based on screen size - single column on mobile, two columns on tablet, three columns on desktop.',
      },
    },
  },
};

export const NestedGridWithFlex: Story = {
  args: {
    areas: [
      'header header header',
      'nav    main   aside',
      'footer footer footer'
    ],
    columns: ['200px', '1fr', '200px'],
    rows: ['60px', '1fr', '60px'],
    gap: 4,
    style: { width: '800px', height: '500px' },
    children: (
      <>
        <GridItem gridArea="header">
          <DemoBox color={colors.success[500]} height="100%">Header Navigation</DemoBox>
        </GridItem>
        <GridItem gridArea="nav">
          <DemoBox color={colors.primary[500]} height="100%">
            <div style={{ padding: '16px', height: '100%', boxSizing: 'border-box' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold', color: 'white' }}>Navigation</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ padding: '8px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '4px' }}>Nav 1</div>
                <div style={{ padding: '8px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '4px' }}>Nav 2</div>
                <div style={{ padding: '8px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '4px' }}>Nav 3</div>
              </div>
            </div>
          </DemoBox>
        </GridItem>
        <GridItem gridArea="main">
          <DemoBox color={colors.warning[500]} height="100%">
            <div style={{ padding: '16px', height: '100%', boxSizing: 'border-box' }}>
              <div style={{ marginBottom: '16px', fontWeight: 'bold', color: 'white' }}>Main Content Area</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', height: 'calc(100% - 40px)' }}>
                <div style={{ padding: '12px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '4px' }}>Content 1</div>
                <div style={{ padding: '12px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '4px' }}>Content 2</div>
                <div style={{ padding: '12px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '4px', gridColumn: 'span 2' }}>Full Width Content</div>
              </div>
            </div>
          </DemoBox>
        </GridItem>
        <GridItem gridArea="aside">
          <DemoBox color={colors.purple[500]} height="100%">
            <div style={{ padding: '16px', height: '100%', boxSizing: 'border-box' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold', color: 'white' }}>Sidebar</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ padding: '8px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '4px', fontSize: '12px' }}>Widget 1</div>
                <div style={{ padding: '8px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '4px', fontSize: '12px' }}>Widget 2</div>
                <div style={{ padding: '8px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '4px', fontSize: '12px' }}>Widget 3</div>
              </div>
            </div>
          </DemoBox>
        </GridItem>
        <GridItem gridArea="footer">
          <DemoBox color={colors.error[500]} height="100%">Footer Content</DemoBox>
        </GridItem>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Complex layout demonstrating how Grid and Flex can be combined, with nested layouts within grid areas.',
      },
    },
  },
};

