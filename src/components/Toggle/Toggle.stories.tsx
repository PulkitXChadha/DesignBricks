import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Inputs/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A Toggle (Switch) lets users turn something on or off immediately, without saving, like a light switch. 
It should only be used when the result is visible immediately, like "dark mode."

## Recommended Usage
The new Switch status props (\`activeLabel\`, \`inactiveLabel\`, and \`disabledLabel\`) improve accessibility 
and we recommend all new usages to use this standard. All three props are required for the new label layout to be shown.

## Legacy Support
The component maintains backward compatibility with the legacy label pattern using \`label\`, \`labelPosition\`, 
\`error\`, and \`helperText\` props.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the toggle',
    },
    labelPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Label position (legacy pattern)',
    },
    disabled: { 
      control: 'boolean',
      description: 'Whether the toggle is disabled',
    },
    error: { 
      control: 'boolean',
      description: 'Error state (legacy pattern)',
    },
    activeLabel: {
      control: 'text',
      description: 'Status label when toggle is active/checked (new pattern)',
    },
    inactiveLabel: {
      control: 'text',
      description: 'Status label when toggle is inactive/unchecked (new pattern)',
    },
    disabledLabel: {
      control: 'text',
      description: 'Status label when toggle is disabled (new pattern)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Enable notifications',
  },
};

// New Recommended Pattern Stories
export const RecommendedPattern: Story = {
  name: 'Recommended: With Status Labels',
  render: () => {
    const [checked, setChecked] = React.useState(false);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Toggle
          label="Enable notifications"
          activeLabel="On"
          inactiveLabel="Off"
          disabledLabel="Off (Disabled)"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <Toggle
          label="Dark mode"
          activeLabel="On"
          inactiveLabel="Off"
          disabledLabel="Off (Disabled)"
          defaultChecked
        />
        <Toggle
          label="Auto-save"
          activeLabel="On (Disabled)"
          inactiveLabel="Off (Disabled)"
          disabledLabel="Off (Disabled)"
          disabled
        />
      </div>
    );
  },
};

export const WithStatusLabelsInteractive: Story = {
  name: 'Interactive: Status Labels',
  render: () => {
    const [checked, setChecked] = React.useState(false);
    const [disabled, setDisabled] = React.useState(false);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Toggle
          label="Feature enabled"
          activeLabel="On"
          inactiveLabel="Off"
          disabledLabel={disabled ? "Off (Disabled)" : "Off"}
          checked={checked}
          disabled={disabled}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
          <button 
            onClick={() => setChecked(!checked)}
            style={{ padding: '8px 16px', cursor: 'pointer' }}
          >
            Toggle State
          </button>
          <button 
            onClick={() => setDisabled(!disabled)}
            style={{ padding: '8px 16px', cursor: 'pointer' }}
          >
            Toggle Disabled
          </button>
        </div>
      </div>
    );
  },
};

export const WithInlineContent: Story = {
  name: 'With Inline Content',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Toggle
        label="Enable with text"
        checkedChildren="ON"
        unCheckedChildren="OFF"
        defaultChecked
      />
      <Toggle
        label="Symbols"
        checkedChildren="✓"
        unCheckedChildren="✗"
      />
      <Toggle
        label="Icons"
        checkedChildren="☀"
        unCheckedChildren="☾"
        size="large"
      />
    </div>
  ),
};

// Legacy Pattern Stories
export const Sizes: Story = {
  name: 'Legacy: Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Toggle label="Small toggle" size="small" />
      <Toggle label="Medium toggle" size="medium" />
      <Toggle label="Large toggle" size="large" />
    </div>
  ),
};

export const LabelPositions: Story = {
  name: 'Legacy: Label Positions',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Toggle label="Label on right" labelPosition="right" />
      <Toggle label="Label on left" labelPosition="left" />
    </div>
  ),
};

export const WithHelperText: Story = {
  name: 'Legacy: With Helper Text',
  args: {
    label: 'Enable dark mode',
    helperText: 'This will switch the interface to dark theme',
  },
};

export const States: Story = {
  name: 'Legacy: States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Toggle label="Default state" />
      <Toggle label="Checked state" defaultChecked />
      <Toggle label="Disabled state" disabled />
      <Toggle label="Disabled checked" disabled defaultChecked />
      <Toggle label="Error state" error helperText="Something went wrong" />
    </div>
  ),
};

export const WithoutLabel: Story = {
  name: 'Without Label',
  args: {
    'aria-label': 'Toggle without visible label',
  },
};

export const ControlledExample: Story = {
  name: 'Controlled Toggle',
  render: () => {
    const [isEnabled, setIsEnabled] = React.useState(false);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Toggle
          label="Controlled toggle"
          activeLabel="Enabled"
          inactiveLabel="Disabled"
          disabledLabel="Disabled"
          checked={isEnabled}
          onChange={(e) => setIsEnabled(e.target.checked)}
        />
        <div style={{ fontSize: '14px', color: '#6B7280' }}>
          Current state: <strong>{isEnabled ? 'ON' : 'OFF'}</strong>
        </div>
        <button 
          onClick={() => setIsEnabled(!isEnabled)}
          style={{ padding: '8px 16px', cursor: 'pointer', width: 'fit-content' }}
        >
          Toggle Programmatically
        </button>
      </div>
    );
  },
};
