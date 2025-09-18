import type { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from './SearchInput';
import React, { useState } from 'react';

const meta = {
  title: 'Components/SearchInput',
  component: SearchInput,
  parameters: {
    docs: {
      description: {
        component: 'Search input component with clear button, loading state, and keyboard shortcuts.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size variant',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width',
      table: {
        defaultValue: { summary: false },
      },
    },
    clearable: {
      control: 'boolean',
      description: 'Show clear button',
      table: {
        defaultValue: { summary: true },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
      table: {
        defaultValue: { summary: false },
      },
    },
    shortcut: {
      control: 'text',
      description: 'Keyboard shortcut hint',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
      table: {
        defaultValue: { summary: 'Search...' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: {
        defaultValue: { summary: false },
      },
    },
    onSearch: {
      action: 'searched',
      description: 'Search handler (triggered on Enter)',
    },
    onClear: {
      action: 'cleared',
      description: 'Clear handler',
    },
  },
  args: {
    size: 'medium',
    placeholder: 'Search...',
  },
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    placeholder: 'Search data, notebooks, recents, and more...',
    shortcut: '⌘ P',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <SearchInput size="small" placeholder="Small search input" />
      <SearchInput size="medium" placeholder="Medium search input" />
      <SearchInput size="large" placeholder="Large search input" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <SearchInput placeholder="Default state" />
      <SearchInput placeholder="With value" value="Databricks" />
      <SearchInput placeholder="Loading state" loading value="Searching..." />
      <SearchInput placeholder="Disabled state" disabled />
    </div>
  ),
};

export const WithShortcut: Story = {
  render: () => (
    <SearchInput
      placeholder="Quick search..."
      shortcut="⌘ K"
      style={{ width: '300px' }}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows keyboard shortcut hint when empty.',
      },
    },
  },
};

export const LoadingState: Story = {
  render: () => {
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState('');

    const handleSearch = (searchValue: string) => {
      setLoading(true);
      console.log('Searching for:', searchValue);

      // Simulate API call
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    return (
      <SearchInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onSearch={handleSearch}
        loading={loading}
        placeholder="Press Enter to search..."
        style={{ width: '300px' }}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Simulates loading state after search.',
      },
    },
  },
};

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '600px' }}>
      <SearchInput placeholder="Full width search..." fullWidth />
    </div>
  ),
};

export const NonClearable: Story = {
  render: () => (
    <SearchInput
      placeholder="No clear button..."
      clearable={false}
      value="Cannot be cleared with button"
      style={{ width: '300px' }}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Search input without clear button.',
      },
    },
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [results, setResults] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const mockData = [
      'Dashboard Analytics',
      'User Reports',
      'Sales Dashboard',
      'Product Metrics',
      'Customer Insights',
      'Revenue Analysis',
      'Performance Metrics',
      'Data Pipeline Status',
    ];

    const handleSearch = (searchValue: string) => {
      setLoading(true);

      setTimeout(() => {
        if (searchValue) {
          const filtered = mockData.filter(item =>
            item.toLowerCase().includes(searchValue.toLowerCase())
          );
          setResults(filtered);
        } else {
          setResults([]);
        }
        setLoading(false);
      }, 500);
    };

    return (
      <div style={{ width: '400px' }}>
        <SearchInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onSearch={handleSearch}
          onClear={() => {
            setValue('');
            setResults([]);
          }}
          loading={loading}
          placeholder="Search for dashboards..."
          shortcut="⌘ P"
          fullWidth
        />

        {results.length > 0 && (
          <div style={{
            marginTop: '8px',
            border: '1px solid #DDE0E5',
            borderRadius: '4px',
            backgroundColor: 'white',
            padding: '8px 0',
          }}>
            {results.map((result, index) => (
              <div
                key={index}
                style={{
                  padding: '8px 16px',
                  cursor: 'pointer',
                  fontSize: '13px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F6F7F9';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {result}
              </div>
            ))}
          </div>
        )}

        {value && results.length === 0 && !loading && (
          <div style={{
            marginTop: '8px',
            padding: '16px',
            textAlign: 'center',
            color: '#6B7280',
            fontSize: '13px',
          }}>
            No results found for "{value}"
          </div>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive search with mock results.',
      },
    },
  },
};

export const RealWorldExample: Story = {
  render: () => (
    <div style={{
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      maxWidth: '800px',
    }}>
      <h3 style={{ margin: '0 0 16px 0' }}>Databricks Search</h3>

      <SearchInput
        placeholder="Search data, notebooks, recents, and more..."
        shortcut="⌘ + P"
        fullWidth
        style={{ marginBottom: '20px' }}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
        <div style={{
          padding: '16px',
          backgroundColor: 'white',
          borderRadius: '4px',
          border: '1px solid #DDE0E5',
        }}>
          <h5 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Recent Searches</h5>
          <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '12px', color: '#6B7280' }}>
            <li>Customer data analysis</li>
            <li>Sales pipeline</li>
            <li>User activity logs</li>
          </ul>
        </div>

        <div style={{
          padding: '16px',
          backgroundColor: 'white',
          borderRadius: '4px',
          border: '1px solid #DDE0E5',
        }}>
          <h5 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Popular</h5>
          <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '12px', color: '#6B7280' }}>
            <li>Revenue dashboard</li>
            <li>ETL pipelines</li>
            <li>ML models</li>
          </ul>
        </div>

        <div style={{
          padding: '16px',
          backgroundColor: 'white',
          borderRadius: '4px',
          border: '1px solid #DDE0E5',
        }}>
          <h5 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Quick Actions</h5>
          <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '12px', color: '#6B7280' }}>
            <li>Create notebook</li>
            <li>New SQL query</li>
            <li>Import data</li>
          </ul>
        </div>
      </div>
    </div>
  ),
};