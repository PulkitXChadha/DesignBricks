import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabPanel } from './Tabs';
import React, { useState } from 'react';

const meta = {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component: 'Tabs organize content into multiple sections and allow users to navigate between them.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      control: 'object',
      description: 'Array of tab configurations',
    },
    activeTab: {
      control: 'text',
      description: 'Currently active tab ID',
    },
    variant: {
      control: 'select',
      options: ['default', 'pills', 'underlined'],
      description: 'Visual variant',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tab size',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width tabs',
      table: {
        defaultValue: { summary: false },
      },
    },
    onChange: {
      action: 'changed',
      description: 'Tab change handler',
    },
  },
  args: {
    tabs: [
      { id: 'tab1', label: 'Tab 1' },
      { id: 'tab2', label: 'Tab 2' },
      { id: 'tab3', label: 'Tab 3' },
    ],
    variant: 'default',
    size: 'medium',
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const PlaygroundComponent = (args: any) => {
  const [activeTab, setActiveTab] = useState('tab1');
  return (
    <>
      <Tabs {...args} activeTab={activeTab} onChange={setActiveTab} />
      <TabPanel tabId="tab1" activeTab={activeTab}>
        <p>Content for Tab 1</p>
      </TabPanel>
      <TabPanel tabId="tab2" activeTab={activeTab}>
        <p>Content for Tab 2</p>
      </TabPanel>
      <TabPanel tabId="tab3" activeTab={activeTab}>
        <p>Content for Tab 3</p>
      </TabPanel>
    </>
  );
};

export const Playground: Story = {
  render: (args) => <PlaygroundComponent {...args} />,
};

const VariantsComponent = () => {
  const [activeTab1, setActiveTab1] = useState('tab1');
  const [activeTab2, setActiveTab2] = useState('tab1');
  const [activeTab3, setActiveTab3] = useState('tab1');

  const tabs = [
    { id: 'tab1', label: 'Overview' },
    { id: 'tab2', label: 'Details' },
    { id: 'tab3', label: 'Settings' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Default</h4>
        <Tabs tabs={tabs} variant="default" activeTab={activeTab1} onChange={setActiveTab1} />
      </div>
      <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Pills</h4>
        <Tabs tabs={tabs} variant="pills" activeTab={activeTab2} onChange={setActiveTab2} />
      </div>
      <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Underlined</h4>
        <Tabs tabs={tabs} variant="underlined" activeTab={activeTab3} onChange={setActiveTab3} />
      </div>
    </div>
  );
};

export const Variants: Story = {
  render: () => <VariantsComponent />,
};

export const Sizes: Story = {
  render: () => {
    const tabs = [
      { id: 'tab1', label: 'Small' },
      { id: 'tab2', label: 'Tab' },
      { id: 'tab3', label: 'Size' },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Tabs tabs={tabs} size="small" />
        <Tabs tabs={tabs} size="medium" />
        <Tabs tabs={tabs} size="large" />
      </div>
    );
  },
};

const WithIconsComponent = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h4zm5 0a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1zM2 11a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2z"/>
        </svg>
      ),
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M11 2a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zM7 4a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1zM3 7a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1z"/>
        </svg>
      ),
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
          <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z"/>
        </svg>
      ),
    },
  ];

  return (
    <>
      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      <TabPanel tabId="dashboard" activeTab={activeTab}>
        <p>Dashboard content goes here</p>
      </TabPanel>
      <TabPanel tabId="analytics" activeTab={activeTab}>
        <p>Analytics content goes here</p>
      </TabPanel>
      <TabPanel tabId="settings" activeTab={activeTab}>
        <p>Settings content goes here</p>
      </TabPanel>
    </>
  );
};

export const WithIcons: Story = {
  render: () => <WithIconsComponent />,
};

const WithBadgesComponent = () => {
  const [activeTab, setActiveTab] = useState('messages');

  const tabs = [
    { id: 'messages', label: 'Messages', badge: 5 },
    { id: 'notifications', label: 'Notifications', badge: 12 },
    { id: 'updates', label: 'Updates', badge: '99+' },
    { id: 'archived', label: 'Archived' },
  ];

  return (
    <>
      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      <TabPanel tabId="messages" activeTab={activeTab}>
        <p>You have 5 new messages</p>
      </TabPanel>
      <TabPanel tabId="notifications" activeTab={activeTab}>
        <p>12 new notifications</p>
      </TabPanel>
      <TabPanel tabId="updates" activeTab={activeTab}>
        <p>More than 99 updates available</p>
      </TabPanel>
      <TabPanel tabId="archived" activeTab={activeTab}>
        <p>Archived items</p>
      </TabPanel>
    </>
  );
};

export const WithBadges: Story = {
  render: () => <WithBadgesComponent />,
};

const DisabledTabComponent = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = [
    { id: 'tab1', label: 'Active Tab' },
    { id: 'tab2', label: 'Disabled Tab', disabled: true },
    { id: 'tab3', label: 'Another Tab' },
  ];

  return (
    <>
      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      <TabPanel tabId="tab1" activeTab={activeTab}>
        <p>This tab is active and clickable</p>
      </TabPanel>
      <TabPanel tabId="tab2" activeTab={activeTab}>
        <p>This content won&apos;t be shown as the tab is disabled</p>
      </TabPanel>
      <TabPanel tabId="tab3" activeTab={activeTab}>
        <p>This tab is also clickable</p>
      </TabPanel>
    </>
  );
};

export const DisabledTab: Story = {
  render: () => <DisabledTabComponent />,
};

const FullWidthComponent = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = [
    { id: 'tab1', label: 'First' },
    { id: 'tab2', label: 'Second' },
    { id: 'tab3', label: 'Third' },
    { id: 'tab4', label: 'Fourth' },
  ];

  return (
    <div style={{ width: '600px' }}>
      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} fullWidth />
      <TabPanel tabId="tab1" activeTab={activeTab}>
        <p>Full width tabs stretch to fill the container</p>
      </TabPanel>
      <TabPanel tabId="tab2" activeTab={activeTab}>
        <p>Each tab gets equal width</p>
      </TabPanel>
      <TabPanel tabId="tab3" activeTab={activeTab}>
        <p>Useful for responsive layouts</p>
      </TabPanel>
      <TabPanel tabId="tab4" activeTab={activeTab}>
        <p>Works with any number of tabs</p>
      </TabPanel>
    </div>
  );
};

export const FullWidth: Story = {
  render: () => <FullWidthComponent />,
};

const RealWorldExampleComponent = () => {
  const [activeTab, setActiveTab] = useState('sql');

  const tabs = [
    { id: 'sql', label: 'SQL Editor' },
    { id: 'queries', label: 'Queries', badge: 3 },
    { id: 'dashboards', label: 'Dashboards' },
    { id: 'alerts', label: 'Alerts', badge: 1 },
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <h3 style={{ margin: '0 0 16px 0' }}>Data Analysis</h3>
      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} variant="default" />

      <div style={{ backgroundColor: 'white', padding: '20px', marginTop: '16px', borderRadius: '4px' }}>
        <TabPanel tabId="sql" activeTab={activeTab}>
          <h4 style={{ margin: '0 0 12px 0' }}>SQL Editor</h4>
          <p>Write and execute SQL queries against your data warehouse.</p>
          <div style={{ backgroundColor: '#f0f0f0', padding: '12px', borderRadius: '4px', fontFamily: 'monospace', fontSize: '12px' }}>
            SELECT * FROM users<br />
            WHERE created_at &gt; &apos;2024-01-01&apos;<br />
            ORDER BY created_at DESC<br />
            LIMIT 100;
          </div>
        </TabPanel>

        <TabPanel tabId="queries" activeTab={activeTab}>
          <h4 style={{ margin: '0 0 12px 0' }}>Recent Queries</h4>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            <li>User activity analysis</li>
            <li>Revenue by month</li>
            <li>Product performance metrics</li>
          </ul>
        </TabPanel>

        <TabPanel tabId="dashboards" activeTab={activeTab}>
          <h4 style={{ margin: '0 0 12px 0' }}>Dashboards</h4>
          <p>Create and manage visual dashboards for your data.</p>
        </TabPanel>

        <TabPanel tabId="alerts" activeTab={activeTab}>
          <h4 style={{ margin: '0 0 12px 0' }}>Active Alerts</h4>
          <p>1 alert triggered: Database connection timeout</p>
        </TabPanel>
      </div>
    </div>
  );
};

export const RealWorldExample: Story = {
  render: () => <RealWorldExampleComponent />,
};