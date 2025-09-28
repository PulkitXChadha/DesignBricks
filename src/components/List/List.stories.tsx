import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { List } from './List';
import { ListItem } from './ListItem';

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'plain', 'divided', 'bordered'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    dense: { control: 'boolean' },
    hoverable: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample icons
const DashboardIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path fillRule="evenodd" d="M1 1.75A.75.75 0 0 1 1.75 1h12.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75zm1.5 8.75v3h4.75v-3zm0-1.5h4.75V2.5H2.5zm6.25-6.5v3h4.75v-3zm0 11V7h4.75v6.5z" clipRule="evenodd"/>
  </svg>
);

const TableIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path fillRule="evenodd" d="M1 1.75A.75.75 0 0 1 1.75 1h12.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75zm1.5.75v3h11v-3zm0 11V7H5v6.5zm4 0h3V7h-3zM11 7v6.5h2.5V7z" clipRule="evenodd"/>
  </svg>
);

const NotebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path fillRule="evenodd" d="M3 1.75A.75.75 0 0 1 3.75 1h10.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V12.5H1V11h2V8.75H1v-1.5h2V5H1V3.5h2zm1.5.75v11H6v-11zm3 0v11h6v-11z" clipRule="evenodd"/>
  </svg>
);

const basicItems = (
  <>
    <ListItem
      startContent={<DashboardIcon />}
      primary="Account Usage Dashboard v2 - DAIS"
      secondary="/Users/cody.davis@databricks.com"
      tertiary="Dashboard"
      clickable
      onClick={() => console.log('Dashboard clicked')}
    />
    <ListItem
      startContent={<TableIcon />}
      primary="usage"
      secondary="system.billing"
      tertiary="Table"
      clickable
      onClick={() => console.log('Table clicked')}
    />
    <ListItem
      startContent={<NotebookIcon />}
      primary="(MAKE A COPY) create app infra"
      secondary="/Users/luke.barnes@databricks.com/vibe-coding"
      tertiary="Notebook"
      clickable
      onClick={() => console.log('Notebook clicked')}
    />
  </>
);

export const Default: Story = {
  args: {
    children: basicItems,
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '500px' }}>
      <div>
        <h4>Default</h4>
        <List variant="default">
          {basicItems}
        </List>
      </div>
      
      <div>
        <h4>Plain</h4>
        <List variant="plain">
          {basicItems}
        </List>
      </div>
      
      <div>
        <h4>Divided</h4>
        <List variant="divided">
          {basicItems}
        </List>
      </div>
      
      <div>
        <h4>Bordered</h4>
        <List variant="bordered">
          {basicItems}
        </List>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '500px' }}>
      <div>
        <h4>Small</h4>
        <List size="small" variant="bordered">
          <ListItem
            startContent={<DashboardIcon />}
            primary="Small list item"
            secondary="Secondary text"
            tertiary="Tertiary text"
            clickable
          />
          <ListItem
            startContent={<TableIcon />}
            primary="Another small item"
            secondary="More details"
            clickable
          />
        </List>
      </div>
      
      <div>
        <h4>Medium (Default)</h4>
        <List size="medium" variant="bordered">
          <ListItem
            startContent={<DashboardIcon />}
            primary="Medium list item"
            secondary="Secondary text"
            tertiary="Tertiary text"
            clickable
          />
          <ListItem
            startContent={<TableIcon />}
            primary="Another medium item"
            secondary="More details"
            clickable
          />
        </List>
      </div>
      
      <div>
        <h4>Large</h4>
        <List size="large" variant="bordered">
          <ListItem
            startContent={<DashboardIcon />}
            primary="Large list item"
            secondary="Secondary text"
            tertiary="Tertiary text"
            clickable
          />
          <ListItem
            startContent={<TableIcon />}
            primary="Another large item"
            secondary="More details"
            clickable
          />
        </List>
      </div>
    </div>
  ),
};

export const DenseList: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <List dense variant="divided">
        <ListItem primary="Dense list item 1" secondary="Compact spacing" clickable />
        <ListItem primary="Dense list item 2" secondary="Less padding" clickable />
        <ListItem primary="Dense list item 3" secondary="More items visible" clickable />
        <ListItem primary="Dense list item 4" secondary="Efficient use of space" clickable />
        <ListItem primary="Dense list item 5" secondary="Perfect for long lists" clickable />
      </List>
    </div>
  ),
};

export const WithSelection: Story = {
  render: () => {
    const [selectedId, setSelectedId] = useState('item2');
    
    const items = [
      { id: 'item1', title: 'First Item', description: 'Description for first item' },
      { id: 'item2', title: 'Second Item', description: 'Description for second item' },
      { id: 'item3', title: 'Third Item', description: 'Description for third item' },
      { id: 'item4', title: 'Fourth Item', description: 'This item is disabled', disabled: true },
    ];
    
    return (
      <div style={{ width: '400px' }}>
        <List variant="bordered">
          {items.map((item) => (
            <ListItem
              key={item.id}
              primary={item.title}
              secondary={item.description}
              selected={selectedId === item.id}
              disabled={item.disabled}
              clickable={!item.disabled}
              onClick={() => !item.disabled && setSelectedId(item.id)}
            />
          ))}
        </List>
        <div style={{ marginTop: '12px', fontSize: '14px', color: '#6B7280' }}>
          Selected: {selectedId}
        </div>
      </div>
    );
  },
};

export const WithEndContent: Story = {
  render: () => (
    <div style={{ width: '500px' }}>
      <List variant="divided">
        <ListItem
          startContent={<DashboardIcon />}
          primary="Dashboard with Actions"
          secondary="Click the button to perform action"
          endContent={
            <button 
              style={{ 
                padding: '4px 8px', 
                fontSize: '12px', 
                border: '1px solid #DDE0E5', 
                borderRadius: '4px',
                background: '#FFFFFF',
                cursor: 'pointer'
              }}
              onClick={(e) => {
                e.stopPropagation();
                alert('Action clicked!');
              }}
            >
              Action
            </button>
          }
          clickable
          onClick={() => console.log('Item clicked')}
        />
        <ListItem
          startContent={<TableIcon />}
          primary="Item with Badge"
          secondary="This item has a status badge"
          endContent={
            <span style={{
              padding: '2px 8px',
              fontSize: '11px',
              backgroundColor: '#3BA65E',
              color: '#FFFFFF',
              borderRadius: '12px',
              fontWeight: '600'
            }}>
              Active
            </span>
          }
          clickable
        />
        <ListItem
          startContent={<NotebookIcon />}
          primary="Item with Metadata"
          secondary="Additional information on the right"
          endContent={
            <div style={{ textAlign: 'right', fontSize: '12px', color: '#9EA3AD' }}>
              <div>2 hours ago</div>
              <div>Modified</div>
            </div>
          }
          clickable
        />
      </List>
    </div>
  ),
};

export const AsLinks: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <List variant="bordered">
        <ListItem
          as="a"
          href="https://databricks.com"
          target="_blank"
          startContent={<DashboardIcon />}
          primary="External Link"
          secondary="Opens in new tab"
          tertiary="https://databricks.com"
          endContent="↗"
        />
        <ListItem
          as="a"
          href="/dashboard"
          startContent={<TableIcon />}
          primary="Internal Link"
          secondary="Navigate within app"
          tertiary="/dashboard"
        />
        <ListItem
          as="a"
          href="/notebooks"
          startContent={<NotebookIcon />}
          primary="Another Internal Link"
          secondary="Another page"
          tertiary="/notebooks"
        />
      </List>
    </div>
  ),
};

export const CustomContent: Story = {
  render: () => (
    <div style={{ width: '500px' }}>
      <List variant="bordered">
        <ListItem>
          <div style={{ padding: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              backgroundColor: '#4299E0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontWeight: '600'
            }}>
              JD
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: '500', marginBottom: '2px' }}>John Doe</div>
              <div style={{ fontSize: '13px', color: '#6B7280' }}>john.doe@company.com</div>
              <div style={{ fontSize: '12px', color: '#9EA3AD', marginTop: '4px' }}>
                Last active: 2 hours ago
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ 
                padding: '4px 12px', 
                fontSize: '12px', 
                border: '1px solid #2272B4',
                borderRadius: '4px',
                background: '#FFFFFF',
                color: '#2272B4',
                cursor: 'pointer'
              }}>
                Message
              </button>
              <button style={{ 
                padding: '4px 12px', 
                fontSize: '12px', 
                border: '1px solid #DDE0E5',
                borderRadius: '4px',
                background: '#FFFFFF',
                cursor: 'pointer'
              }}>
                More
              </button>
            </div>
          </div>
        </ListItem>
      </List>
    </div>
  ),
};

export const NonHoverable: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <List variant="divided" hoverable={false}>
        <ListItem primary="Non-hoverable item 1" secondary="Hover effects disabled" clickable />
        <ListItem primary="Non-hoverable item 2" secondary="No background change on hover" clickable />
        <ListItem primary="Non-hoverable item 3" secondary="Static appearance" clickable />
      </List>
    </div>
  ),
};
