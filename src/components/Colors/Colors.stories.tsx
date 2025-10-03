import type { Meta, StoryObj } from '@storybook/react';
import { Colors } from './Colors';
import React from 'react';

const meta = {
  title: 'Foundation/Colors',
  component: Colors,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'The official Databricks Design System color palette with primary blue, semantic colors (success green, warning yellow, error red), and secondary accent colors.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    category: {
      control: 'select',
      options: ['primary', 'secondary', 'neutral', 'success', 'warning', 'error', 'info', 'brown', 'coral', 'indigo', 'lemon', 'lime', 'pink', 'purple', 'teal', 'turquoise'],
      description: 'Category of colors to display',
    },
    showHex: {
      control: 'boolean',
      description: 'Whether to show hex values for each color',
      table: {
        defaultValue: { summary: true },
      },
    },
    showAll: {
      control: 'boolean',
      description: 'Whether to show all color categories',
      table: {
        defaultValue: { summary: false },
      },
    },
  },
  args: {
    showHex: true,
    showAll: false,
  },
} satisfies Meta<typeof Colors>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllColors: Story = {
  args: {
    showAll: true,
    showHex: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete Databricks design system color palette showing all primary, semantic, and secondary color categories.',
      },
    },
  },
};

export const BrandColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.125rem', fontWeight: 600 }}>
          Primary Brand Colors
        </h3>
        <p style={{ margin: '0 0 2rem 0', color: '#5F7281', fontSize: '0.875rem' }}>
          Core brand colors with full shade ranges. Primary Blue (#4299E0) and Secondary Teal (#04867D) are the main brand colors.
        </p>
      </div>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ textAlign: 'center' }}>
          <div 
            style={{ 
              width: '120px', 
              height: '120px', 
              backgroundColor: '#4299E0', 
              borderRadius: '8px',
              border: '1px solid #E8ECF0',
              marginBottom: '0.5rem'
            }} 
          />
          <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>Primary Blue</div>
          <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#5F7281' }}>#4299E0</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div 
            style={{ 
              width: '120px', 
              height: '120px', 
              backgroundColor: '#04867D', 
              borderRadius: '8px',
              border: '1px solid #E8ECF0',
              marginBottom: '0.5rem'
            }} 
          />
          <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>Secondary Teal</div>
          <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#5F7281' }}>#04867D</div>
        </div>
      </div>
      <Colors category="primary" showHex={true} />
      <Colors category="secondary" showHex={true} />
      <Colors category="neutral" showHex={true} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Primary and secondary brand colors with their complete shade ranges, plus neutral grays for text, borders, and backgrounds.',
      },
    },
  },
};

export const SemanticColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.125rem', fontWeight: 600 }}>
          Semantic Colors
        </h3>
        <p style={{ margin: '0 0 2rem 0', color: '#5F7281', fontSize: '0.875rem' }}>
          Colors used for feedback states and messages throughout the UI.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <Colors category="success" showHex={true} />
        <Colors category="warning" showHex={true} />
        <Colors category="error" showHex={true} />
        <Colors category="info" showHex={true} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Semantic colors for success, warning, error, and info states used in alerts, notifications, and feedback messages.',
      },
    },
  },
};

export const ExtendedPalette: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.125rem', fontWeight: 600 }}>
          Extended Color Palette
        </h3>
        <p style={{ margin: '0 0 2rem 0', color: '#5F7281', fontSize: '0.875rem' }}>
          Official secondary colors for tags, status badges, illustrations, and supplementary UI elements.
        </p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <Colors category="brown" showHex={true} />
        <Colors category="coral" showHex={true} />
        <Colors category="indigo" showHex={true} />
        <Colors category="lemon" showHex={true} />
        <Colors category="lime" showHex={true} />
        <Colors category="pink" showHex={true} />
        <Colors category="purple" showHex={true} />
        <Colors category="teal" showHex={true} />
        <Colors category="turquoise" showHex={true} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Official extended color palette for supplementary UI elements, status indicators, and creative accents.',
      },
    },
  },
};

export const ColorUsageExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px' }}>
      <div>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.125rem', fontWeight: 600 }}>
          Color Usage Examples
        </h3>
        <p style={{ margin: '0 0 2rem 0', color: '#5F6368', fontSize: '0.875rem' }}>
          Examples of how to use the Databricks color palette in different UI contexts.
        </p>
      </div>
      
      {/* Button Examples */}
      <div>
        <h4 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: 600 }}>Buttons</h4>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button style={{ 
            backgroundColor: '#4299E0', 
            color: 'white', 
            border: 'none', 
            padding: '8px 16px', 
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            Primary Button
          </button>
          <button style={{ 
            backgroundColor: 'transparent', 
            color: '#4299E0', 
            border: '1px solid #4299E0', 
            padding: '8px 16px', 
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            Secondary Button
          </button>
          <button style={{ 
            backgroundColor: '#04867D', 
            color: 'white', 
            border: 'none', 
            padding: '8px 16px', 
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            Teal Button
          </button>
          {/* DuBois secondary colors examples */}
          <button style={{ 
            backgroundColor: '#8A63BF', 
            color: 'white', 
            border: 'none', 
            padding: '8px 16px', 
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            Purple Button
          </button>
          <button style={{ 
            backgroundColor: '#3BA65E', 
            color: 'white', 
            border: 'none', 
            padding: '8px 16px', 
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            Green Button
          </button>
        </div>
      </div>

      {/* Alert Examples */}
      <div>
        <h4 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: 600 }}>Alerts</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ 
            padding: '12px', 
            backgroundColor: '#F3FCF6', 
            border: '1px solid #3BA65E', 
            borderRadius: '4px',
            color: '#115026'
          }}>
            Success: Operation completed successfully
          </div>
          <div style={{ 
            padding: '12px', 
            backgroundColor: '#FFF9EB', 
            border: '1px solid #DE7921', 
            borderRadius: '4px',
            color: '#93320B'
          }}>
            Warning: Please review your settings
          </div>
          <div style={{ 
            padding: '12px', 
            backgroundColor: '#FFF5F7', 
            border: '1px solid #E65B77', 
            borderRadius: '4px',
            color: '#9E102C'
          }}>
            Error: Something went wrong
          </div>
          <div style={{ 
            padding: '12px', 
            backgroundColor: '#F0F8FF', 
            border: '1px solid #4299E0', 
            borderRadius: '4px',
            color: '#0E538B'
          }}>
            Info: Here's some helpful information
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Practical examples showing how to apply the color palette in common UI patterns.',
      },
    },
  },
};
