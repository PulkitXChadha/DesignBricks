import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';
import { useState } from 'react';

const meta: Meta<typeof Popover> = {
  title: 'Overlays/Popover',
  component: Popover,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    triggerType: {
      control: 'select',
      options: ['click', 'hover', 'focus', 'manual'],
      description: 'How the popover is triggered',
    },
    placement: {
      control: 'select',
      options: [
        'top', 'top-start', 'top-end',
        'bottom', 'bottom-start', 'bottom-end',
        'left', 'left-start', 'left-end',
        'right', 'right-start', 'right-end'
      ],
      description: 'Placement of the popover',
    },
    arrow: {
      control: 'boolean',
      description: 'Whether to show arrow pointing to trigger',
    },
    modal: {
      control: 'boolean',
      description: 'Whether popover should be modal',
    },
    closeOnClickOutside: {
      control: 'boolean',
      description: 'Whether clicking outside closes the popover',
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Whether pressing escape closes the popover',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const SampleContent = () => (
  <div>
    <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>
      Popover Title
    </h3>
    <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#666' }}>
      This is the popover content. It can contain any React elements.
    </p>
    <div style={{ display: 'flex', gap: '8px' }}>
      <button style={{ padding: '4px 8px', fontSize: '12px', border: '1px solid #ccc', borderRadius: '4px', background: 'white', cursor: 'pointer' }}>
        Action
      </button>
      <button style={{ padding: '4px 8px', fontSize: '12px', border: '1px solid #ccc', borderRadius: '4px', background: 'white', cursor: 'pointer' }}>
        Cancel
      </button>
    </div>
  </div>
);

const TriggerButton = ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => (
  <button
    style={{
      padding: '8px 16px',
      backgroundColor: '#007acc',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '14px',
    }}
    {...props}
  >
    {children}
  </button>
);

export const Default: Story = {
  args: {
    trigger: <TriggerButton>Click me</TriggerButton>,
    content: <SampleContent />,
  },
};

export const HoverTrigger: Story = {
  args: {
    trigger: <TriggerButton>Hover me</TriggerButton>,
    content: (
      <div>
        <p style={{ margin: 0, fontSize: '14px' }}>
          This popover appears on hover!
        </p>
      </div>
    ),
    triggerType: 'hover',
    showDelay: 300,
    hideDelay: 100,
  },
};

export const FocusTrigger: Story = {
  args: {
    trigger: <input placeholder="Focus me" style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />,
    content: (
      <div>
        <p style={{ margin: 0, fontSize: '14px' }}>
          This popover appears when the input is focused.
        </p>
      </div>
    ),
    triggerType: 'focus',
  },
};

export const AllPlacements: Story = {
  render: () => {
    const placements = [
      'top', 'top-start', 'top-end',
      'bottom', 'bottom-start', 'bottom-end',
      'left', 'left-start', 'left-end',
      'right', 'right-start', 'right-end'
    ] as const;
    
    return (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        padding: '40px',
        justifyItems: 'center'
      }}>
        {placements.map(placement => (
          <Popover
            key={placement}
            trigger={<TriggerButton>{placement}</TriggerButton>}
            content={
              <div>
                <p style={{ margin: 0, fontSize: '14px' }}>
                  Placement: <strong>{placement}</strong>
                </p>
              </div>
            }
            placement={placement}
          />
        ))}
      </div>
    );
  },
};

export const WithoutArrow: Story = {
  args: {
    trigger: <TriggerButton>No arrow</TriggerButton>,
    content: (
      <div>
        <p style={{ margin: 0, fontSize: '14px' }}>
          This popover doesn't have an arrow.
        </p>
      </div>
    ),
    arrow: false,
  },
};

export const Modal: Story = {
  args: {
    trigger: <TriggerButton>Open modal popover</TriggerButton>,
    content: (
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>
          Modal Popover
        </h3>
        <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#666' }}>
          This is a modal popover with focus management.
        </p>
        <input placeholder="Try tabbing" style={{ width: '100%', padding: '4px', marginBottom: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
        <button style={{ padding: '6px 12px', backgroundColor: '#007acc', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Close
        </button>
      </div>
    ),
    modal: true,
  },
};

export const LongContent: Story = {
  args: {
    trigger: <TriggerButton>Long content</TriggerButton>,
    content: (
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>
          Scrollable Content
        </h3>
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i} style={{ margin: '0 0 8px 0', fontSize: '14px' }}>
            This is paragraph {i + 1} of the long content. The popover will show a scrollbar when content exceeds the maximum height.
          </p>
        ))}
      </div>
    ),
  },
};

export const CustomOffset: Story = {
  args: {
    trigger: <TriggerButton>Custom offset</TriggerButton>,
    content: (
      <div>
        <p style={{ margin: 0, fontSize: '14px' }}>
          This popover has a custom offset of 20px.
        </p>
      </div>
    ),
    offset: 20,
  },
};

// Interactive example showing controlled state
export const Controlled: Story = {
  render: function ControlledPopover() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Popover
          trigger={<TriggerButton>Controlled popover</TriggerButton>}
          content={
            <div>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>
                Controlled Popover
              </h3>
              <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#666' }}>
                This popover's open state is controlled externally.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                style={{ padding: '6px 12px', backgroundColor: '#007acc', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                Close from inside
              </button>
            </div>
          }
          open={isOpen}
          onOpenChange={setIsOpen}
          triggerType="manual"
        />
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ 
            padding: '8px 16px', 
            backgroundColor: isOpen ? '#dc3545' : '#28a745', 
            color: 'white', 
            border: 'none', 
            borderRadius: '6px', 
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          {isOpen ? 'Close' : 'Open'} externally
        </button>
        
        <div style={{ fontSize: '14px', color: '#666' }}>
          State: <strong>{isOpen ? 'Open' : 'Closed'}</strong>
        </div>
      </div>
    );
  },
};

// Menu-like example
export const MenuExample: Story = {
  args: {
    trigger: (
      <button style={{
        padding: '8px 16px',
        backgroundColor: 'white',
        border: '1px solid #ccc',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        Options
        <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
          <path fill="currentColor" fillRule="evenodd" d="M6 6.917L8.947 4 10 5.053 6 9 2 5.053 3.053 4z" clipRule="evenodd"/>
        </svg>
      </button>
    ),
    content: (
      <div style={{ minWidth: '160px' }}>
        {[
          { label: 'Edit', icon: '✏️' },
          { label: 'Copy', icon: '📋' },
          { label: 'Share', icon: '🔗' },
          { label: 'Delete', icon: '🗑️' },
        ].map((item, index) => (
          <button
            key={item.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              width: '100%',
              padding: '8px 12px',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              fontSize: '14px',
              textAlign: 'left',
              borderRadius: index === 0 ? '4px 4px 0 0' : index === 3 ? '0 0 4px 4px' : '0',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f5f5f5'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <span>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>
    ),
    closeOnContentClick: true,
  },
};

