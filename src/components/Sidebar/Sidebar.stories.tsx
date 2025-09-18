import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar, SidebarItem } from './Sidebar';
import React, { useState } from 'react';

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Sidebar navigation for application layouts.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Visual variant',
      table: {
        defaultValue: { summary: 'light' },
      },
    },
    collapsed: {
      control: 'boolean',
      description: 'Collapsed state',
      table: {
        defaultValue: { summary: false },
      },
    },
    collapsible: {
      control: 'boolean',
      description: 'Allow collapse/expand',
      table: {
        defaultValue: { summary: true },
      },
    },
    width: {
      control: 'number',
      description: 'Width when expanded (px)',
      table: {
        defaultValue: { summary: 240 },
      },
    },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Icons for the examples
const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
);

const CatalogIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
  </svg>
);

const WorkflowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
  </svg>
);

const JobsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
  </svg>
);

const ModelsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
  </svg>
);

const ComputeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
  </svg>
);

const basicItems: SidebarItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: <HomeIcon />,
  },
  {
    id: 'catalog',
    label: 'Catalog',
    icon: <CatalogIcon />,
  },
  {
    id: 'workflows',
    label: 'Workflows',
    icon: <WorkflowIcon />,
    badge: '3',
  },
  {
    id: 'jobs',
    label: 'Jobs',
    icon: <JobsIcon />,
  },
  {
    id: 'models',
    label: 'Models',
    icon: <ModelsIcon />,
  },
  {
    id: 'compute',
    label: 'Compute',
    icon: <ComputeIcon />,
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <SettingsIcon />,
  },
];

export const Basic: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState('home');

    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar
          items={basicItems}
          activeItem={activeItem}
          onItemClick={(item) => setActiveItem(item.id)}
        />
        <div style={{ flex: 1, padding: '24px', backgroundColor: '#f9f9f9' }}>
          <h2>Main Content Area</h2>
          <p>Selected item: {activeItem}</p>
        </div>
      </div>
    );
  },
};

export const Dark: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState('home');

    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar
          items={basicItems}
          activeItem={activeItem}
          onItemClick={(item) => setActiveItem(item.id)}
          variant="dark"
        />
        <div style={{ flex: 1, padding: '24px', backgroundColor: '#f9f9f9' }}>
          <h2>Main Content Area</h2>
          <p>Selected item: {activeItem}</p>
        </div>
      </div>
    );
  },
};

export const WithNestedItems: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState('overview');

    const nestedItems: SidebarItem[] = [
      {
        id: 'home',
        label: 'Home',
        icon: <HomeIcon />,
      },
      {
        id: 'catalog',
        label: 'Catalog',
        icon: <CatalogIcon />,
        children: [
          { id: 'databases', label: 'Databases' },
          { id: 'schemas', label: 'Schemas' },
          { id: 'tables', label: 'Tables', badge: '12' },
        ],
      },
      {
        id: 'workflows',
        label: 'Workflows',
        icon: <WorkflowIcon />,
        children: [
          { id: 'pipelines', label: 'Pipelines' },
          { id: 'schedules', label: 'Schedules' },
          { id: 'runs', label: 'Runs', badge: 'NEW' },
        ],
      },
      {
        id: 'models',
        label: 'Models',
        icon: <ModelsIcon />,
        children: [
          { id: 'registered', label: 'Registered Models' },
          { id: 'experiments', label: 'Experiments' },
        ],
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: <SettingsIcon />,
      },
    ];

    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar
          items={nestedItems}
          activeItem={activeItem}
          onItemClick={(item) => setActiveItem(item.id)}
        />
        <div style={{ flex: 1, padding: '24px', backgroundColor: '#f9f9f9' }}>
          <h2>Main Content Area</h2>
          <p>Selected item: {activeItem}</p>
        </div>
      </div>
    );
  },
};

export const Collapsible: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState('home');
    const [collapsed, setCollapsed] = useState(false);

    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar
          items={basicItems}
          activeItem={activeItem}
          onItemClick={(item) => setActiveItem(item.id)}
          collapsed={collapsed}
          onCollapsedChange={setCollapsed}
          collapsible
        />
        <div style={{ flex: 1, padding: '24px', backgroundColor: '#f9f9f9' }}>
          <h2>Collapsible Sidebar</h2>
          <p>Click the toggle button to collapse/expand the sidebar.</p>
          <p>Selected item: {activeItem}</p>
        </div>
      </div>
    );
  },
};

export const WithHeaderAndFooter: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState('home');

    const header = (
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '4px',
          backgroundColor: '#2272B4',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '14px',
          fontWeight: 'bold',
        }}>
          DB
        </div>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Databricks</div>
          <div style={{ fontSize: '11px', color: '#6B7280' }}>Workspace</div>
        </div>
      </div>
    );

    const footer = (
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: '#EDEFF2',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <span style={{ fontSize: '12px' }}>JD</span>
        </div>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <div style={{ fontSize: '13px', fontWeight: '500' }}>John Doe</div>
          <div style={{ fontSize: '11px', color: '#6B7280' }}>john@example.com</div>
        </div>
      </div>
    );

    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar
          items={basicItems}
          activeItem={activeItem}
          onItemClick={(item) => setActiveItem(item.id)}
          header={header}
          footer={footer}
        />
        <div style={{ flex: 1, padding: '24px', backgroundColor: '#f9f9f9' }}>
          <h2>Main Content Area</h2>
          <p>Selected item: {activeItem}</p>
        </div>
      </div>
    );
  },
};

export const DisabledItems: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState('home');

    const itemsWithDisabled: SidebarItem[] = [
      {
        id: 'home',
        label: 'Home',
        icon: <HomeIcon />,
      },
      {
        id: 'catalog',
        label: 'Catalog',
        icon: <CatalogIcon />,
      },
      {
        id: 'workflows',
        label: 'Workflows (Coming Soon)',
        icon: <WorkflowIcon />,
        disabled: true,
      },
      {
        id: 'jobs',
        label: 'Jobs',
        icon: <JobsIcon />,
      },
      {
        id: 'models',
        label: 'Models (Beta)',
        icon: <ModelsIcon />,
        badge: 'BETA',
        disabled: true,
      },
      {
        id: 'compute',
        label: 'Compute',
        icon: <ComputeIcon />,
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: <SettingsIcon />,
      },
    ];

    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar
          items={itemsWithDisabled}
          activeItem={activeItem}
          onItemClick={(item) => setActiveItem(item.id)}
        />
        <div style={{ flex: 1, padding: '24px', backgroundColor: '#f9f9f9' }}>
          <h2>Sidebar with Disabled Items</h2>
          <p>Some items are disabled and cannot be selected.</p>
          <p>Selected item: {activeItem}</p>
        </div>
      </div>
    );
  },
};