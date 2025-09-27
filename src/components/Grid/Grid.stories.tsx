import type { Meta, StoryObj } from '@storybook/react';
import { Grid, GridItem } from './Grid';

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
      backgroundColor: props.color || '#e3f2fd',
      borderRadius: '4px',
      minHeight: props.height || '60px',
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
    columns: ['1fr', '1fr', '1fr'],
    gap: '4',
    style: { width: '400px' },
    children: (
      <>
        <DemoBox>Item 1</DemoBox>
        <DemoBox>Item 2</DemoBox>
        <DemoBox>Item 3</DemoBox>
        <DemoBox>Item 4</DemoBox>
        <DemoBox>Item 5</DemoBox>
        <DemoBox>Item 6</DemoBox>
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
    gap: '3',
    style: { width: '600px', height: '400px' },
    children: (
      <>
        <GridItem gridArea="header">
          <DemoBox color="#e8f5e8">Header</DemoBox>
        </GridItem>
        <GridItem gridArea="sidebar">
          <DemoBox color="#e3f2fd" height="200px">Sidebar</DemoBox>
        </GridItem>
        <GridItem gridArea="content">
          <DemoBox color="#fce4ec" height="200px">Content</DemoBox>
        </GridItem>
        <GridItem gridArea="footer">
          <DemoBox color="#fff3e0">Footer</DemoBox>
        </GridItem>
      </>
    ),
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
    gap: '4',
    style: { width: '800px', height: '500px' },
    children: (
      <>
        <GridItem gridArea="header">
          <DemoBox color="#e8f5e8">Header</DemoBox>
        </GridItem>
        <GridItem gridArea="nav">
          <DemoBox color="#e3f2fd" height="300px">Navigation</DemoBox>
        </GridItem>
        <GridItem gridArea="main">
          <DemoBox color="#fce4ec" height="300px">Main Content</DemoBox>
        </GridItem>
        <GridItem gridArea="aside">
          <DemoBox color="#fff3e0" height="300px">Aside</DemoBox>
        </GridItem>
        <GridItem gridArea="footer">
          <DemoBox color="#f3e5f5">Footer</DemoBox>
        </GridItem>
      </>
    ),
  },
};

export const CardGrid: Story = {
  args: {
    columns: ['repeat(auto-fit, minmax(200px, 1fr))'],
    gap: '4',
    style: { width: '600px' },
    children: (
      <>
        <DemoBox color="#e8f5e8" height="120px">Card 1</DemoBox>
        <DemoBox color="#e3f2fd" height="120px">Card 2</DemoBox>
        <DemoBox color="#fce4ec" height="120px">Card 3</DemoBox>
        <DemoBox color="#fff3e0" height="120px">Card 4</DemoBox>
        <DemoBox color="#f3e5f5" height="120px">Card 5</DemoBox>
        <DemoBox color="#e0f2f1" height="120px">Card 6</DemoBox>
      </>
    ),
  },
};

export const SpanningItems: Story = {
  args: {
    columns: ['repeat(4, 1fr)'],
    rows: ['repeat(3, 100px)'],
    gap: '3',
    style: { width: '500px' },
    children: (
      <>
        <GridItem colSpan={2}>
          <DemoBox color="#e8f5e8">Spans 2 columns</DemoBox>
        </GridItem>
        <DemoBox color="#e3f2fd">Item 2</DemoBox>
        <DemoBox color="#fce4ec">Item 3</DemoBox>
        <DemoBox color="#fff3e0">Item 4</DemoBox>
        <GridItem rowSpan={2}>
          <DemoBox color="#f3e5f5" height="180px">Spans 2 rows</DemoBox>
        </GridItem>
        <DemoBox color="#e0f2f1">Item 6</DemoBox>
        <DemoBox color="#fce4ec">Item 7</DemoBox>
        <DemoBox color="#e3f2fd">Item 8</DemoBox>
        <DemoBox color="#fff3e0">Item 9</DemoBox>
      </>
    ),
  },
};

export const CenteredItems: Story = {
  args: {
    columns: ['repeat(3, 1fr)'],
    justifyItems: 'center',
    alignItems: 'center',
    gap: '4',
    style: { width: '400px', height: '200px' },
    children: (
      <>
        <DemoBox color="#e8f5e8" style={{ width: '80px', height: '40px' }}>Small</DemoBox>
        <DemoBox color="#e3f2fd" style={{ width: '100px', height: '60px' }}>Medium</DemoBox>
        <DemoBox color="#fce4ec" style={{ width: '120px', height: '80px' }}>Large</DemoBox>
      </>
    ),
  },
};

export const AutoFitColumns: Story = {
  args: {
    columns: ['repeat(auto-fit, minmax(150px, 1fr))'],
    gap: '3',
    style: { width: '500px' },
    children: (
      <>
        <DemoBox color="#e8f5e8">Auto 1</DemoBox>
        <DemoBox color="#e3f2fd">Auto 2</DemoBox>
        <DemoBox color="#fce4ec">Auto 3</DemoBox>
        <DemoBox color="#fff3e0">Auto 4</DemoBox>
        <DemoBox color="#f3e5f5">Auto 5</DemoBox>
      </>
    ),
  },
};

export const ApplicationLayout: Story = {
  args: {
    areas: [
      'header  header',
      'sidebar content',
      'footer  footer'
    ],
    columns: ['1fr', '3fr'],
    rows: ['10', 'auto', '10'],
    height: '24',
    gap: '3',
    children: (
      <>
        <GridItem gridArea="header">
          <DemoBox color="#4ade80" height="40px">Header</DemoBox>
        </GridItem>
        <GridItem gridArea="sidebar">
          <DemoBox color="#3b82f6" height="200px">Sidebar</DemoBox>
        </GridItem>
        <GridItem gridArea="content">
          <DemoBox color="#f59e0b" height="200px">Content</DemoBox>
        </GridItem>
        <GridItem gridArea="footer">
          <DemoBox color="#ef4444" height="40px">Footer</DemoBox>
        </GridItem>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Classic application layout with header, sidebar, content, and footer areas.',
      },
    },
  },
};

export const ResponsiveGridAreas: Story = {
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
    gap: '3',
    style: { width: '100%', minHeight: '500px' },
    children: (
      <>
        <GridItem gridArea="header">
          <DemoBox color="#10b981" height="60px">Header</DemoBox>
        </GridItem>
        <GridItem gridArea="nav">
          <DemoBox color="#3b82f6" height="300px">Navigation</DemoBox>
        </GridItem>
        <GridItem gridArea="content">
          <DemoBox color="#f59e0b" height="300px">Main Content</DemoBox>
        </GridItem>
        <GridItem gridArea="aside" isHidden={{ base: true, lg: false }}>
          <DemoBox color="#8b5cf6" height="300px">Aside (Hidden on mobile)</DemoBox>
        </GridItem>
        <GridItem gridArea="footer">
          <DemoBox color="#ef4444" height="60px">Footer</DemoBox>
        </GridItem>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Responsive grid that adapts its layout based on screen size - from single column on mobile to complex three-column layout on desktop.',
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
    gap: '4',
    style: { width: '800px', height: '500px' },
    children: (
      <>
        <GridItem gridArea="header">
          <DemoBox color="#10b981">Header Navigation</DemoBox>
        </GridItem>
        <GridItem gridArea="nav">
          <DemoBox color="#3b82f6">
            <div style={{ padding: '16px' }}>
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
          <DemoBox color="#f59e0b">
            <div style={{ padding: '16px', height: '100%' }}>
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
          <DemoBox color="#8b5cf6">
            <div style={{ padding: '16px' }}>
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
          <DemoBox color="#ef4444">Footer Content</DemoBox>
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

export const ResponsiveCardGrid: Story = {
  args: {
    columns: {
      base: ['1fr'],
      sm: ['repeat(2, 1fr)'],
      md: ['repeat(3, 1fr)'],
      lg: ['repeat(4, 1fr)']
    },
    gap: { base: '3', md: '4' },
    style: { width: '100%' },
    children: (
      <>
        <DemoBox color="#f87171" height="120px">Card 1</DemoBox>
        <DemoBox color="#fbbf24" height="120px">Card 2</DemoBox>
        <DemoBox color="#34d399" height="120px">Card 3</DemoBox>
        <DemoBox color="#60a5fa" height="120px">Card 4</DemoBox>
        <DemoBox color="#a78bfa" height="120px">Card 5</DemoBox>
        <DemoBox color="#f472b6" height="120px">Card 6</DemoBox>
        <DemoBox color="#fb7185" height="120px">Card 7</DemoBox>
        <DemoBox color="#fcd34d" height="120px">Card 8</DemoBox>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Responsive card grid that adapts from single column on mobile to multiple columns on larger screens.',
      },
    },
  },
};
