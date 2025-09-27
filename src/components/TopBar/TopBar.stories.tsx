import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { TopBar, type UserProfile } from './TopBar';

const meta = {
  title: 'Navigation/TopBar',
  component: TopBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A flexible top navigation bar component for Databricks applications with search, notifications, and user actions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    brand: {
      control: { type: 'text' },
      description: 'Brand name or custom brand component to display. If not provided, shows official Databricks logo (full-color for light mode, white for dark mode).',
    },
    showMenuButton: {
      control: { type: 'boolean' },
      description: 'Whether to show the hamburger menu button',
    },
    searchPlaceholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the search input',
    },
    notificationCount: {
      control: { type: 'number' },
      description: 'Number of notifications to show in badge',
    },
    variant: {
      control: { type: 'radio' },
      options: ['light', 'dark'],
      description: 'Visual variant of the top bar',
    },
    height: {
      control: { type: 'number' },
      description: 'Height of the top bar in pixels',
    },
    user: {
      control: { type: 'object' },
      description: 'User profile information to display',
    },
    'user.name': {
      control: { type: 'text' },
      description: "User's full name",
    },
    'user.email': {
      control: { type: 'text' },
      description: "User's email address",
    },
    'user.role': {
      control: { type: 'text' },
      description: "User's role or title",
    },
    'user.avatar': {
      control: { type: 'text' },
      description: "URL to user's avatar image",
    },
  },
} satisfies Meta<typeof TopBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default user profiles for stories
const defaultUser: UserProfile = {
  name: 'John Doe',
  email: 'john.doe@databricks.com',
  onClick: () => alert('User profile clicked!'),
};

const adminUser: UserProfile = {
  name: 'Jane Smith',
  email: 'jane.smith@databricks.com',
  role: 'Admin',
  onClick: () => alert('Admin profile clicked!'),
};

const userWithAvatar: UserProfile = {
  name: 'Alex Johnson',
  email: 'alex.johnson@company.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format',
  onClick: () => alert('User with avatar clicked!'),
};

// Interactive Search Example
const SearchableTopBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  return (
    <TopBar
      searchValue={searchValue}
      onSearchChange={setSearchValue}
      onSearchSubmit={(value) => alert(`Searching for: ${value}`)}
      onMenuClick={() => setSidebarCollapsed(!sidebarCollapsed)}
      sidebarCollapsed={sidebarCollapsed}
      onNotificationClick={() => alert('Notifications clicked')}
      notificationCount={3}
      user={defaultUser}
    />
  );
};

export const Default: Story = {
  args: {
    showMenuButton: true,
    searchPlaceholder: 'Search data, notebooks, recents, and more...',
    notificationCount: 0,
    variant: 'light',
    height: 64,
    user: defaultUser,
  },
  render: (args) => (
    <TopBar
      {...args}
      onMenuClick={() => alert('Menu clicked')}
      onNotificationClick={() => alert('Notifications clicked')}
      onSearchSubmit={(value) => alert(`Searching: ${value}`)}
    />
  ),
};

export const WithNotifications: Story = {
  args: {
    ...Default.args,
    notificationCount: 5,
    user: defaultUser,
  },
  render: (args) => (
    <TopBar
      {...args}
      onNotificationClick={() => alert('5 new notifications')}
      onMenuClick={() => alert('Menu clicked')}
      onSearchSubmit={(value) => alert(`Searching: ${value}`)}
    />
  ),
};

export const DarkVariant: Story = {
  args: {
    ...Default.args,
    variant: 'dark',
    notificationCount: 12,
    user: defaultUser,
  },
  render: (args) => (
    <div style={{ backgroundColor: '#11171C', minHeight: '100vh' }}>
      <TopBar
        {...args}
        onMenuClick={() => alert('Menu clicked')}
        onNotificationClick={() => alert('Notifications clicked')}
        onSearchSubmit={(value) => alert(`Searching: ${value}`)}
      />
    </div>
  ),
};

export const WithUserAvatar: Story = {
  args: {
    ...Default.args,
    user: userWithAvatar,
    notificationCount: 2,
  },
  render: (args) => (
    <TopBar
      {...args}
      onMenuClick={() => alert('Menu clicked')}
      onNotificationClick={() => alert('Notifications')}
      onSearchSubmit={(value) => alert(`Searching: ${value}`)}
    />
  ),
};

export const AdminUser: Story = {
  args: {
    ...Default.args,
    user: adminUser,
    variant: 'light',
  },
  render: (args) => (
    <TopBar
      {...args}
      onMenuClick={() => alert('Menu clicked')}
      onSearchSubmit={(value) => alert(`Searching: ${value}`)}
    />
  ),
};

export const LogoComparison: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Comparison showing the official Databricks logos for light (full-color) and dark (white) themes.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Light Mode */}
      <div>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '16px', fontWeight: '600' }}>Light Mode (Full Color Logo)</h3>
        <TopBar
          variant="light"
          user={defaultUser}
          onMenuClick={() => alert('Light mode menu')}
          onSearchSubmit={(value) => alert(`Light mode search: ${value}`)}
        />
      </div>
      
      {/* Dark Mode */}
      <div style={{ backgroundColor: '#11171C', padding: '20px', borderRadius: '8px' }}>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '16px', fontWeight: '600', color: 'white' }}>Dark Mode (Official White Logo)</h3>
        <TopBar
          variant="dark"
          user={defaultUser}
          onMenuClick={() => alert('Dark mode menu')}
          onSearchSubmit={(value) => alert(`Dark mode search: ${value}`)}
        />
      </div>
    </div>
  ),
};

export const WithTextBrand: Story = {
  args: {
    ...Default.args,
    brand: 'Databricks Analytics',
    user: defaultUser,
  },
  render: (args) => (
    <TopBar
      {...args}
      onMenuClick={() => alert('Menu clicked')}
      onSearchSubmit={(value) => alert(`Searching: ${value}`)}
    />
  ),
};

export const WithCustomBrand: Story = {
  args: {
    ...Default.args,
    user: {
      name: 'Jane Smith',
      email: 'jane.smith@company.com',
      onClick: () => alert('Custom brand user clicked!'),
    },
  },
  render: (args) => (
    <TopBar
      {...args}
      brand={
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>DB</span>
          </div>
          <span style={{ fontWeight: '700', fontSize: '18px', color: '#1F272D' }}>
            My Analytics Platform
          </span>
        </div>
      }
      onMenuClick={() => alert('Menu clicked')}
      onSearchSubmit={(value) => alert(`Searching: ${value}`)}
    />
  ),
};

export const WithCustomActions: Story = {
  args: {
    ...Default.args,
    notificationCount: 2,
    user: defaultUser,
  },
  render: (args) => (
    <TopBar
      {...args}
      actions={
        <div style={{ display: 'flex', gap: '4px' }}>
          <button
            style={{
              padding: '8px 12px',
              border: '1px solid #4299E0',
              backgroundColor: 'transparent',
              color: '#4299E0',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            Settings
          </button>
          <button
            style={{
              padding: '8px 12px',
              border: 'none',
              backgroundColor: '#4299E0',
              color: 'white',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            Create
          </button>
        </div>
      }
      onNotificationClick={() => alert('Notifications')}
      onMenuClick={() => alert('Menu clicked')}
      onSearchSubmit={(value) => alert(`Searching: ${value}`)}
    />
  ),
};

export const Minimal: Story = {
  args: {
    showMenuButton: false,
    variant: 'light',
    user: {
      name: 'John Doe',
      initials: 'JD',
      onClick: () => alert('Minimal user clicked!'),
    },
  },
  render: (args) => (
    <TopBar
      {...args}
      onSearchSubmit={(value) => alert(`Searching: ${value}`)}
    />
  ),
};

export const WithCustomContent: Story = {
  args: {
    ...Default.args,
    user: defaultUser,
  },
  render: (args) => (
    <TopBar
      {...args}
      onMenuClick={() => alert('Menu clicked')}
      onSearchSubmit={(value) => alert(`Searching: ${value}`)}
    >
      <div style={{ padding: '12px 0', borderTop: '1px solid #E8ECF0' }}>
        <div style={{ display: 'flex', gap: '16px', fontSize: '14px' }}>
          <span style={{ color: '#4299E0', cursor: 'pointer' }}>Dashboards</span>
          <span style={{ color: '#8396A5', cursor: 'pointer' }}>SQL Editor</span>
          <span style={{ color: '#8396A5', cursor: 'pointer' }}>Alerts</span>
          <span style={{ color: '#8396A5', cursor: 'pointer' }}>Data Sources</span>
        </div>
      </div>
    </TopBar>
  ),
};

export const Responsive: Story = {
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: { width: '375px', height: '667px' },
        },
        tablet: {
          name: 'Tablet',
          styles: { width: '768px', height: '1024px' },
        },
      },
      defaultViewport: 'mobile',
    },
  },
  args: {
    ...Default.args,
    notificationCount: 3,
    user: {
      name: 'John Doe',
      initials: 'JD',
      onClick: () => alert('Responsive user clicked!'),
    },
  },
  render: (args) => (
    <TopBar
      {...args}
      onMenuClick={() => alert('Menu clicked')}
      onNotificationClick={() => alert('Notifications')}
      onSearchSubmit={(value) => alert(`Searching: ${value}`)}
    />
  ),
};

export const Interactive: Story = {
  render: () => <SearchableTopBar />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive example with search functionality and sidebar toggle.',
      },
    },
  },
};

// Complete Layout Integration Example
const CompleteLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [notificationCount, setNotificationCount] = useState(3);

  const sidebarItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'dashboards', label: 'Dashboards', icon: '📊' },
    { id: 'sql-editor', label: 'SQL Editor', icon: '📝' },
    { id: 'data-sources', label: 'Data Sources', icon: '🗄️' },
    { id: 'alerts', label: 'Alerts', icon: '🔔', badge: '2' },
    {
      id: 'admin',
      label: 'Administration',
      icon: '⚙️',
      children: [
        { id: 'users', label: 'Users', icon: '👥' },
        { id: 'permissions', label: 'Permissions', icon: '🔐' },
        { id: 'settings', label: 'Settings', icon: '⚙️' },
      ],
    },
  ];

  const handleNotificationClick = () => {
    alert(`${notificationCount} notifications`);
    setNotificationCount(0);
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* TopBar */}
      <TopBar
        brand="Databricks Analytics"
        showMenuButton={true}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onSearchSubmit={(value) => alert(`Searching for: ${value}`)}
        onMenuClick={() => setSidebarCollapsed(!sidebarCollapsed)}
        sidebarCollapsed={sidebarCollapsed}
        onNotificationClick={handleNotificationClick}
        notificationCount={notificationCount}
        actions={
          <button
            style={{
              padding: '6px 12px',
              border: 'none',
              backgroundColor: '#4299E0',
              color: 'white',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
            }}
          >
            Create
          </button>
        }
        user={defaultUser}
      />

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Sidebar */}
        <div
          style={{
            width: sidebarCollapsed ? '64px' : '240px',
            transition: 'width 0.2s ease',
            borderRight: '1px solid #E8ECF0',
            backgroundColor: '#F6F7F9',
          }}
        >
          <div style={{ padding: '16px 12px' }}>
            <div
              style={{
                fontSize: '12px',
                fontWeight: '600',
                color: '#8396A5',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '8px',
                display: sidebarCollapsed ? 'none' : 'block',
              }}
            >
              Navigation
            </div>
            {sidebarItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '8px 12px',
                  marginBottom: '2px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  color: '#445461',
                  transition: 'background-color 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#E8ECF0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
                title={sidebarCollapsed ? item.label : undefined}
              >
                <span style={{ fontSize: '16px', width: '20px', textAlign: 'center' }}>
                  {item.icon}
                </span>
                {!sidebarCollapsed && (
                  <>
                    <span style={{ flex: 1 }}>{item.label}</span>
                    {item.badge && (
                      <span
                        style={{
                          backgroundColor: '#E65B77',
                          color: 'white',
                          fontSize: '11px',
                          padding: '2px 6px',
                          borderRadius: '10px',
                          fontWeight: '600',
                        }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div
          style={{
            flex: 1,
            padding: '24px',
            backgroundColor: '#FFFFFF',
            overflow: 'auto',
          }}
        >
          <div style={{ maxWidth: '800px' }}>
            <h1 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', color: '#1F272D' }}>
              Dashboard Overview
            </h1>
            <p style={{ fontSize: '16px', color: '#445461', lineHeight: '1.5', marginBottom: '24px' }}>
              Welcome to your Databricks Analytics workspace. This layout demonstrates how the TopBar component
              integrates seamlessly with the sidebar navigation to provide a complete application framework.
            </p>

            <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {/* Sample Cards */}
              {[
                { title: 'Active Dashboards', value: '12', change: '+2 this week' },
                { title: 'SQL Queries', value: '247', change: '+15% this month' },
                { title: 'Data Sources', value: '8', change: 'All healthy' },
                { title: 'Team Members', value: '23', change: '3 new users' },
              ].map((card, index) => (
                <div
                  key={index}
                  style={{
                    padding: '20px',
                    border: '1px solid #E8ECF0',
                    borderRadius: '8px',
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <h3 style={{ fontSize: '14px', color: '#8396A5', marginBottom: '8px', fontWeight: '500' }}>
                    {card.title}
                  </h3>
                  <div style={{ fontSize: '24px', fontWeight: '600', color: '#1F272D', marginBottom: '4px' }}>
                    {card.value}
                  </div>
                  <div style={{ fontSize: '12px', color: '#3BA65E', fontWeight: '500' }}>
                    {card.change}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '32px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: '#1F272D' }}>
                Integration Features
              </h2>
              <ul style={{ fontSize: '14px', color: '#445461', lineHeight: '1.6' }}>
                <li><strong>Responsive Design:</strong> The layout adapts to different screen sizes automatically</li>
                <li><strong>Sidebar Toggle:</strong> Click the hamburger menu to collapse/expand the sidebar</li>
                <li><strong>Global Search:</strong> Use the search bar to find data, notebooks, and more</li>
                <li><strong>Notifications:</strong> Real-time notification badge with click handling</li>
                <li><strong>User Context:</strong> Integrated user profile section</li>
                <li><strong>Custom Actions:</strong> Extensible action buttons for application-specific features</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CompleteLayoutIntegration: Story = {
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Complete application layout showing TopBar integration with sidebar navigation and main content area.',
      },
    },
  },
  render: () => <CompleteLayout />,
};
