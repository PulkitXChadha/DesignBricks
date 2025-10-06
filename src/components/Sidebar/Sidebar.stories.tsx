import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar, SidebarItem } from './Sidebar';
import { TopBar } from '../TopBar/TopBar';
import React, { useState } from 'react';

const meta = {
  title: 'Navigation/Sidebar',
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
      description: 'Collapsed state (controlled externally)',
      table: {
        defaultValue: { summary: false },
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

// Databricks specific icons
const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"/>
    <line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);

const FolderIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </svg>
);

const DatabaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);

const PipelinesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
);

const ServerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="4" rx="1" ry="1"/>
    <rect x="2" y="9" width="20" height="4" rx="1" ry="1"/>
    <rect x="2" y="15" width="20" height="4" rx="1" ry="1"/>
    <line x1="6" y1="5" x2="6" y2="5"/>
    <line x1="6" y1="11" x2="6" y2="11"/>
    <line x1="6" y1="17" x2="6" y2="17"/>
  </svg>
);

const GlobeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const ShoppingIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"/>
    <circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
);

const FileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14,2 14,8 20,8"/>
  </svg>
);

const BarChartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10"/>
    <line x1="18" y1="20" x2="18" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="16"/>
  </svg>
);

const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
);

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5,3 19,12 5,21"/>
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const LayersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12,2 2,7 12,12 22,7"/>
    <polyline points="2,17 12,22 22,17"/>
    <polyline points="2,12 12,17 22,12"/>
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
  parameters: {
    docs: {
      source: {
        code: `import { Sidebar, SidebarItem } from '@designbricks/core';
import { useState } from 'react';

const items: SidebarItem[] = [
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

function App() {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <Sidebar
      items={items}
      activeItem={activeItem}
      onItemClick={(item) => setActiveItem(item.id)}
    />
  );
}`,
      },
    },
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
  parameters: {
    docs: {
      source: {
        code: `import { Sidebar } from '@designbricks/core';

function App() {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <Sidebar
      items={items}
      activeItem={activeItem}
      onItemClick={(item) => setActiveItem(item.id)}
      variant="dark"
    />
  );
}`,
      },
    },
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
  parameters: {
    docs: {
      source: {
        code: `import { Sidebar, SidebarItem } from '@designbricks/core';

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
];

function App() {
  const [activeItem, setActiveItem] = useState('overview');

  return (
    <Sidebar
      items={nestedItems}
      activeItem={activeItem}
      onItemClick={(item) => setActiveItem(item.id)}
    />
  );
}`,
      },
    },
  },
};

export const WithExternalControl: Story = {
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
        />
        <div style={{ flex: 1, padding: '24px', backgroundColor: '#f9f9f9' }}>
          <h2>Externally Controlled Sidebar</h2>
          <p>The sidebar is controlled by an external button.</p>
          <button 
            onClick={() => setCollapsed(!collapsed)}
            style={{
              padding: '8px 16px',
              marginBottom: '16px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              backgroundColor: '#fff',
              cursor: 'pointer'
            }}
          >
            {collapsed ? 'Expand' : 'Collapse'} Sidebar
          </button>
          <p>Selected item: {activeItem}</p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'The sidebar should be controlled externally via the `collapsed` prop. Typically, this would be controlled by the TopBar menu button.',
      },
      source: {
        code: `import { Sidebar } from '@designbricks/core';

function App() {
  const [activeItem, setActiveItem] = useState('home');
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <button onClick={() => setCollapsed(!collapsed)}>
        Toggle Sidebar
      </button>
      <Sidebar
        items={items}
        activeItem={activeItem}
        onItemClick={(item) => setActiveItem(item.id)}
        collapsed={collapsed}
      />
    </>
  );
}`,
      },
    },
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
  parameters: {
    docs: {
      source: {
        code: `import { Sidebar } from '@designbricks/core';

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

function App() {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <Sidebar
      items={items}
      activeItem={activeItem}
      onItemClick={(item) => setActiveItem(item.id)}
      header={header}
      footer={footer}
    />
  );
}`,
      },
    },
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
  parameters: {
    docs: {
      source: {
        code: `import { Sidebar, SidebarItem } from '@designbricks/core';

const items: SidebarItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: <HomeIcon />,
  },
  {
    id: 'workflows',
    label: 'Workflows (Coming Soon)',
    icon: <WorkflowIcon />,
    disabled: true,
  },
  {
    id: 'models',
    label: 'Models (Beta)',
    icon: <ModelsIcon />,
    badge: 'BETA',
    disabled: true,
  },
];

function App() {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <Sidebar
      items={items}
      activeItem={activeItem}
      onItemClick={(item) => setActiveItem(item.id)}
    />
  );
}`,
      },
    },
  },
};

export const WithTopBar: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState('workspace');
    const [collapsed, setCollapsed] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const databricksItems: SidebarItem[] = [
      {
        id: 'new',
        label: 'New',
        icon: <PlusIcon />,
      },
      {
        id: 'workspace',
        label: 'Workspace',
        icon: <FolderIcon />,
      },
      {
        id: 'recents',
        label: 'Recents',
        icon: <ClockIcon />,
      },
      {
        id: 'catalog',
        label: 'Catalog',
        icon: <DatabaseIcon />,
      },
      {
        id: 'jobs-pipelines',
        label: 'Jobs & Pipelines',
        icon: <PipelinesIcon />,
      },
      {
        id: 'compute',
        label: 'Compute',
        icon: <ServerIcon />,
      },
      {
        id: 'discover',
        label: 'Discover',
        icon: <GlobeIcon />,
      },
      {
        id: 'marketplace',
        label: 'Marketplace',
        icon: <ShoppingIcon />,
      },
      // SQL Section
      {
        id: 'sql-header',
        label: 'SQL',
        type: 'header',
      },
      {
        id: 'sql-editor',
        label: 'SQL Editor',
        icon: <FileIcon />,
      },
      {
        id: 'queries',
        label: 'Queries',
        icon: <FileIcon />,
      },
      {
        id: 'dashboards',
        label: 'Dashboards',
        icon: <BarChartIcon />,
      },
      {
        id: 'genie',
        label: 'Genie',
        icon: <PlayIcon />,
      },
      {
        id: 'alerts',
        label: 'Alerts',
        icon: <BellIcon />,
      },
      {
        id: 'query-history',
        label: 'Query History',
        icon: <ClockIcon />,
      },
      {
        id: 'sql-warehouses',
        label: 'SQL Warehouses',
        icon: <ServerIcon />,
      },
      // Data Engineering Section
      {
        id: 'data-eng-header',
        label: 'Data Engineering',
        type: 'header',
      },
      {
        id: 'job-runs',
        label: 'Job Runs',
        icon: <PipelinesIcon />,
      },
      {
        id: 'data-ingestion',
        label: 'Data Ingestion',
        icon: <DatabaseIcon />,
      },
      // AI/ML Section
      {
        id: 'aiml-header',
        label: 'AI/ML',
        type: 'header',
      },
      {
        id: 'playground',
        label: 'Playground',
        icon: <PlayIcon />,
      },
      {
        id: 'agents',
        label: 'Agents',
        icon: <UserIcon />,
        badge: 'Beta',
      },
      {
        id: 'experiments',
        label: 'Experiments',
        icon: <LayersIcon />,
      },
      {
        id: 'features',
        label: 'Features',
        icon: <LayersIcon />,
      },
      {
        id: 'models',
        label: 'Models',
        icon: <ModelsIcon />,
      },
      {
        id: 'serving',
        label: 'Serving',
        icon: <ServerIcon />,
      },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <TopBar
          showMenuButton
          onMenuClick={() => setCollapsed(!collapsed)}
          sidebarCollapsed={collapsed}
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          notificationCount={5}
          onNotificationClick={() => console.log('Notifications clicked')}
          user={{
            name: 'John Doe',
            email: 'john.doe@databricks.com',
            role: 'Data Engineer',
          }}
          variant="light"
        />
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          <Sidebar
            items={databricksItems}
            activeItem={activeItem}
            onItemClick={(item) => setActiveItem(item.id)}
            collapsed={collapsed}
            variant="light"
            width={280}
          />
          <div style={{ flex: 1, padding: '24px', backgroundColor: '#f8fafc', overflow: 'auto' }}>
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '8px', 
              padding: '24px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <h1 style={{ 
                fontSize: '24px', 
                fontWeight: '600', 
                margin: '0 0 8px 0',
                color: '#1f2937'
              }}>
                Databricks Workspace
              </h1>
              <p style={{ 
                color: '#6b7280', 
                margin: '0 0 24px 0'
              }}>
                A complete analytics platform for data teams
              </p>
              <div style={{
                padding: '16px',
                backgroundColor: '#f8fafc',
                borderRadius: '6px',
                border: '1px solid #e5e7eb'
              }}>
                <p style={{ margin: 0, fontSize: '14px', color: '#374151' }}>
                  <strong>Selected:</strong> {activeItem}
                </p>
                <p style={{ margin: '8px 0 0 0', fontSize: '14px', color: '#6b7280' }}>
                  Click the menu button in the TopBar to toggle the sidebar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Integration example showing how the TopBar menu button controls the Sidebar collapse state. This is the recommended pattern for using Sidebar with TopBar.',
      },
      source: {
        code: `import { Sidebar, TopBar } from '@designbricks/core';

const databricksItems: SidebarItem[] = [
  {
    id: 'new',
    label: 'New',
    icon: <PlusIcon />,
  },
  {
    id: 'workspace',
    label: 'Workspace',
    icon: <FolderIcon />,
  },
  {
    id: 'catalog',
    label: 'Catalog',
    icon: <DatabaseIcon />,
  },
  // SQL Section
  {
    id: 'sql-header',
    label: 'SQL',
    type: 'header',
  },
  {
    id: 'sql-editor',
    label: 'SQL Editor',
    icon: <FileIcon />,
  },
  {
    id: 'dashboards',
    label: 'Dashboards',
    icon: <BarChartIcon />,
  },
  // AI/ML Section
  {
    id: 'aiml-header',
    label: 'AI/ML',
    type: 'header',
  },
  {
    id: 'agents',
    label: 'Agents',
    icon: <UserIcon />,
    badge: 'Beta',
  },
];

function App() {
  const [activeItem, setActiveItem] = useState('workspace');
  const [collapsed, setCollapsed] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <TopBar
        showMenuButton
        onMenuClick={() => setCollapsed(!collapsed)}
        sidebarCollapsed={collapsed}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        user={{
          name: 'John Doe',
          email: 'john.doe@databricks.com',
          role: 'Data Engineer',
        }}
      />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar
          items={databricksItems}
          activeItem={activeItem}
          onItemClick={(item) => setActiveItem(item.id)}
          collapsed={collapsed}
          variant="light"
          width={280}
        />
        <main style={{ flex: 1 }}>
          {/* Your main content */}
        </main>
      </div>
    </div>
  );
}`,
      },
    },
  },
};