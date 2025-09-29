import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Collapsible } from './Collapsible';

const meta: Meta<typeof Collapsible> = {
  title: 'Navigation/Collapsible',
  component: Collapsible,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'ghost', 'bordered'],
    },
    defaultOpen: { control: 'boolean' },
    disabled: { control: 'boolean' },
    showChevron: { control: 'boolean' },
    animationDuration: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample icons
const SQLIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <circle cx="8" cy="8" r="2"/>
  </svg>
);

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
  </svg>
);

const sampleContent = (
  <div style={{ padding: '8px 0' }}>
    <div style={{ marginBottom: '8px' }}>
      <a href="#" style={{ display: 'block', padding: '4px 0', color: '#2272B4', textDecoration: 'none' }}>
        SQL Editor
      </a>
    </div>
    <div style={{ marginBottom: '8px' }}>
      <a href="#" style={{ display: 'block', padding: '4px 0', color: '#2272B4', textDecoration: 'none' }}>
        Queries
      </a>
    </div>
    <div style={{ marginBottom: '8px' }}>
      <a href="#" style={{ display: 'block', padding: '4px 0', color: '#2272B4', textDecoration: 'none' }}>
        Dashboards
      </a>
    </div>
    <div>
      <a href="#" style={{ display: 'block', padding: '4px 0', color: '#2272B4', textDecoration: 'none' }}>
        Alerts
      </a>
    </div>
  </div>
);

export const Default: Story = {
  args: {
    trigger: 'Click to expand',
    children: (
      <div style={{ padding: '12px 0' }}>
        <p>This is the collapsible content. It can contain any React elements.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    ),
  },
};

export const NavigationExample: Story = {
  render: () => (
    <div style={{ width: '250px' }}>
      <Collapsible
        trigger={
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SQLIcon />
            <span>SQL</span>
          </div>
        }
        defaultOpen={true}
      >
        {sampleContent}
      </Collapsible>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Collapsible
        trigger="Small Size"
        size="small"
        defaultOpen={true}
      >
        <div style={{ padding: '8px 0' }}>Small collapsible content</div>
      </Collapsible>
      
      <Collapsible
        trigger="Medium Size (Default)"
        size="medium"
        defaultOpen={true}
      >
        <div style={{ padding: '8px 0' }}>Medium collapsible content</div>
      </Collapsible>
      
      <Collapsible
        trigger="Large Size"
        size="large"
        defaultOpen={true}
      >
        <div style={{ padding: '8px 0' }}>Large collapsible content</div>
      </Collapsible>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Collapsible
        trigger="Default Variant"
        variant="default"
        defaultOpen={true}
      >
        <div style={{ padding: '8px 0' }}>Default styled collapsible</div>
      </Collapsible>
      
      <Collapsible
        trigger="Ghost Variant"
        variant="ghost"
        defaultOpen={true}
      >
        <div style={{ padding: '8px 0' }}>Ghost styled collapsible (minimal styling)</div>
      </Collapsible>
      
      <Collapsible
        trigger="Bordered Variant"
        variant="bordered"
        defaultOpen={true}
      >
        <div style={{ padding: '8px 0' }}>Bordered collapsible with container styling</div>
      </Collapsible>
    </div>
  ),
};

export const ControlledState: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div style={{ width: '300px' }}>
        <div style={{ marginBottom: '16px' }}>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'Close' : 'Open'} Collapsible
          </button>
          <span style={{ marginLeft: '12px', fontSize: '14px', color: '#6B7280' }}>
            State: {isOpen ? 'Open' : 'Closed'}
          </span>
        </div>
        
        <Collapsible
          trigger="Controlled Collapsible"
          open={isOpen}
          onOpenChange={setIsOpen}
        >
          <div style={{ padding: '12px 0' }}>
            This collapsible is controlled by external state.
            <br />
            The button above controls its open/closed state.
          </div>
        </Collapsible>
      </div>
    );
  },
};

export const WithoutChevron: Story = {
  args: {
    trigger: 'Collapsible without chevron icon',
    showChevron: false,
    children: (
      <div style={{ padding: '12px 0' }}>
        This collapsible doesn't show a chevron icon.
      </div>
    ),
  },
};

export const CustomChevron: Story = {
  args: {
    trigger: 'Custom chevron icon',
    chevronIcon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path fillRule="evenodd" d="M8 8.917 10.947 6 12 7.042 8 11 4 7.042 5.053 6z" clipRule="evenodd"/>
      </svg>
    ),
    children: (
      <div style={{ padding: '12px 0' }}>
        This collapsible uses a custom chevron (down arrow instead of right arrow).
      </div>
    ),
  },
};

export const Disabled: Story = {
  args: {
    trigger: 'Disabled Collapsible',
    disabled: true,
    children: (
      <div style={{ padding: '12px 0' }}>
        This content cannot be accessed because the collapsible is disabled.
      </div>
    ),
  },
};

export const SlowAnimation: Story = {
  args: {
    trigger: 'Slow Animation (1000ms)',
    animationDuration: 1000,
    children: (
      <div style={{ padding: '12px 0' }}>
        This collapsible has a slower animation duration for demonstration purposes.
        <br />
        The animation takes 1 second to complete.
      </div>
    ),
  },
};

export const ComplexContent: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <Collapsible
        trigger={
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <UserIcon />
            <span>User Management</span>
          </div>
        }
        variant="bordered"
        size="large"
      >
        <div style={{ padding: '16px 0' }}>
          <div style={{ marginBottom: '12px' }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Recent Users</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ padding: '4px 0', fontSize: '13px' }}>John Doe (john@example.com)</div>
              <div style={{ padding: '4px 0', fontSize: '13px' }}>Jane Smith (jane@example.com)</div>
              <div style={{ padding: '4px 0', fontSize: '13px' }}>Bob Johnson (bob@example.com)</div>
            </div>
          </div>
          
          <div style={{ marginBottom: '12px' }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Actions</h4>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ padding: '4px 8px', fontSize: '12px', border: '1px solid #DDE0E5', borderRadius: '4px', background: '#FFFFFF' }}>
                Add User
              </button>
              <button style={{ padding: '4px 8px', fontSize: '12px', border: '1px solid #DDE0E5', borderRadius: '4px', background: '#FFFFFF' }}>
                Manage Permissions
              </button>
            </div>
          </div>
          
          <div style={{ padding: '8px', backgroundColor: '#F6F7F9', borderRadius: '4px', fontSize: '12px', color: '#6B7280' }}>
            💡 Tip: Use keyboard shortcuts Ctrl+U to quickly add users
          </div>
        </div>
      </Collapsible>
    </div>
  ),
};

export const NestedCollapsibles: Story = {
  render: () => (
    <div style={{ width: '350px' }}>
      <Collapsible
        trigger="Level 1 - Main Section"
        variant="bordered"
        defaultOpen={true}
      >
        <div style={{ padding: '8px 0' }}>
          <div style={{ marginBottom: '8px' }}>Some content at level 1</div>
          
          <Collapsible
            trigger="Level 2 - Subsection A"
            size="small"
            defaultOpen={false}
          >
            <div style={{ padding: '8px 0', fontSize: '12px' }}>
              Content inside subsection A
              <br />
              This is nested inside the main section.
            </div>
          </Collapsible>
          
          <Collapsible
            trigger="Level 2 - Subsection B"
            size="small"
            defaultOpen={false}
          >
            <div style={{ padding: '8px 0', fontSize: '12px' }}>
              Content inside subsection B
              <br />
              Another nested collapsible section.
            </div>
          </Collapsible>
        </div>
      </Collapsible>
    </div>
  ),
};
