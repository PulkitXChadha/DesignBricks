import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    maxItems: { control: 'number' },
    itemsBeforeCollapse: { control: 'number' },
    itemsAfterCollapse: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample icons for stories
const HomeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
  </svg>
);

const FolderIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h4.672a2 2 0 0 1 2 2l-.04.87a1.99 1.99 0 0 1-.342 1.311l-1.446 2.169a1 1 0 0 1-.831.448H1.5a1 1 0 0 1-.946-1.316l1.394-4.182a1 1 0 0 1 .946-.684H15v-.5a.5.5 0 0 0-.5-.5H9.828a.5.5 0 0 1-.354-.146L8.646 2.5A.5.5 0 0 0 8.293 2.354L7.465 1.5H2.5a.5.5 0 0 0-.5.5v.5h13z"/>
    <path d="m1.719 4.058.686 2.057h11.19l-.686-2.057H1.72z"/>
  </svg>
);

const basicItems = [
  { id: '1', label: 'Home', icon: <HomeIcon />, href: '/' },
  { id: '2', label: 'Products', href: '/products' },
  { id: '3', label: 'Electronics', href: '/products/electronics' },
  { id: '4', label: 'Laptops' },
];

export const Default: Story = {
  args: {
    items: basicItems,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '500px' }}>
      <div>
        <h4>Small</h4>
        <Breadcrumbs items={basicItems} size="small" />
      </div>
      <div>
        <h4>Medium (Default)</h4>
        <Breadcrumbs items={basicItems} size="medium" />
      </div>
      <div>
        <h4>Large</h4>
        <Breadcrumbs items={basicItems} size="large" />
      </div>
    </div>
  ),
};

export const WithClickHandlers: Story = {
  render: () => (
    <Breadcrumbs
      items={[
        { 
          id: '1', 
          label: 'Home', 
          icon: <HomeIcon />, 
          onClick: () => alert('Home clicked') 
        },
        { 
          id: '2', 
          label: 'Workspace', 
          icon: <FolderIcon />, 
          onClick: () => alert('Workspace clicked') 
        },
        { id: '3', label: 'Current Page' },
      ]}
    />
  ),
};

export const WithCollapse: Story = {
  render: () => {
    const longItems = [
      { id: '1', label: 'Root', icon: <HomeIcon />, href: '/' },
      { id: '2', label: 'Level 1', href: '/level1' },
      { id: '3', label: 'Level 2', href: '/level1/level2' },
      { id: '4', label: 'Level 3', href: '/level1/level2/level3' },
      { id: '5', label: 'Level 4', href: '/level1/level2/level3/level4' },
      { id: '6', label: 'Level 5', href: '/level1/level2/level3/level4/level5' },
      { id: '7', label: 'Current Page' },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '600px' }}>
        <div>
          <h4>No Collapse (Full breadcrumbs)</h4>
          <Breadcrumbs items={longItems} />
        </div>
        <div>
          <h4>Collapsed (maxItems: 4)</h4>
          <Breadcrumbs
            items={longItems}
            maxItems={4}
            itemsBeforeCollapse={1}
            itemsAfterCollapse={2}
          />
        </div>
        <div>
          <h4>Collapsed (maxItems: 3, equal distribution)</h4>
          <Breadcrumbs
            items={longItems}
            maxItems={3}
            itemsBeforeCollapse={1}
            itemsAfterCollapse={1}
          />
        </div>
      </div>
    );
  },
};

export const CustomSeparator: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '500px' }}>
      <div>
        <h4>Default Separator (Chevron)</h4>
        <Breadcrumbs items={basicItems} />
      </div>
      <div>
        <h4>Slash Separator</h4>
        <Breadcrumbs items={basicItems} separator="/" />
      </div>
      <div>
        <h4>Bullet Separator</h4>
        <Breadcrumbs items={basicItems} separator="•" />
      </div>
      <div>
        <h4>Arrow Separator</h4>
        <Breadcrumbs items={basicItems} separator="→" />
      </div>
    </div>
  ),
};

export const WithDisabledItems: Story = {
  args: {
    items: [
      { id: '1', label: 'Home', icon: <HomeIcon />, href: '/' },
      { id: '2', label: 'Restricted Area', disabled: true },
      { id: '3', label: 'Accessible Page', href: '/page' },
      { id: '4', label: 'Current Page' },
    ],
  },
};

export const OnlyText: Story = {
  args: {
    items: [
      { id: '1', label: 'Dashboard' },
      { id: '2', label: 'Analytics' },
      { id: '3', label: 'Reports' },
      { id: '4', label: 'Monthly Sales' },
    ],
  },
};

export const SingleItem: Story = {
  args: {
    items: [
      { id: '1', label: 'Current Page' },
    ],
  },
};
