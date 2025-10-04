import type { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from './SearchInput';
import React, { useState } from 'react';

const meta = {
  title: 'Inputs/SearchInput',
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

const LoadingStateComponent = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  const handleSearch = (_searchValue: string) => {
    setLoading(true);
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
};

export const LoadingState: Story = {
  render: () => <LoadingStateComponent />,
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

const InteractiveComponent = () => {
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
              role="button"
              tabIndex={0}
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
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  // Handle selection
                }
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
          No results found for &quot;{value}&quot;
        </div>
      )}
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveComponent />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive search with mock results.',
      },
    },
  },
};

const RealWorldExampleComponent = () => {
  const [value, setValue] = useState('');
  const [results, setResults] = useState<Array<{ title: string; type: string; path: string }>>([]);
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);

    const mockData = [
      { title: 'Customer data analysis', type: 'Notebook', path: '/Workspace/Analytics' },
      { title: 'Sales pipeline dashboard', type: 'Dashboard', path: '/Workspace/Sales' },
      { title: 'User activity logs', type: 'Table', path: '/data/logs' },
      { title: 'Revenue dashboard', type: 'Dashboard', path: '/Workspace/Finance' },
      { title: 'ETL pipelines config', type: 'Notebook', path: '/Workspace/Data Engineering' },
      { title: 'ML model training', type: 'Notebook', path: '/Workspace/ML' },
      { title: 'Product metrics query', type: 'Query', path: '/Workspace/Product' },
      { title: 'Customer segmentation', type: 'Notebook', path: '/Workspace/Analytics' },
    ];

    const recentSearches = ['Customer data analysis', 'Sales pipeline', 'User activity logs'];
    const popularItems = ['Revenue dashboard', 'ETL pipelines', 'ML models'];
    const quickActions = ['Create notebook', 'New SQL query', 'Import data'];

    const handleSearch = (searchValue: string) => {
      if (!searchValue.trim()) {
        setResults([]);
        setShowSuggestions(true);
        return;
      }

      setLoading(true);
      setShowSuggestions(false);

      setTimeout(() => {
        const filtered = mockData.filter(item =>
          item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.type.toLowerCase().includes(searchValue.toLowerCase())
        );
        setResults(filtered);
        setLoading(false);
      }, 500);
    };

    const handleClear = () => {
      setValue('');
      setResults([]);
      setShowSuggestions(true);
    };

    return (
      <div style={{
        padding: '20px',
        backgroundColor: '#F6F7F9',
        borderRadius: '8px',
        maxWidth: '900px',
        minHeight: '400px',
      }}>
        <h3 style={{ 
          margin: '0 0 20px 0',
          fontSize: '18px',
          fontWeight: 600,
          color: '#1F2937'
        }}>
          Databricks Search
        </h3>

        <SearchInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onSearch={handleSearch}
          onClear={handleClear}
          placeholder="Search data, notebooks, recents, and more..."
          shortcut="⌘ + P"
          loading={loading}
          fullWidth
          style={{ marginBottom: '20px' }}
        />

        {showSuggestions && !value && (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '16px' 
          }}>
            <div style={{
              padding: '20px',
              backgroundColor: 'white',
              borderRadius: '6px',
              border: '1px solid #DDE0E5',
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
            }}>
              <h5 style={{ 
                margin: '0 0 12px 0', 
                fontSize: '14px',
                fontWeight: 600,
                color: '#374151'
              }}>
                Recent Searches
              </h5>
              <div style={{ 
                margin: 0, 
                padding: 0,
              }}>
                {recentSearches.map((item, index) => (
                  <button 
                    key={index}
                    type="button"
                    style={{
                      width: '100%',
                      padding: '8px 0',
                      fontSize: '13px',
                      color: '#6B7280',
                      cursor: 'pointer',
                      border: 'none',
                      background: 'none',
                      textAlign: 'left',
                      borderBottom: index < recentSearches.length - 1 ? '1px solid #F3F4F6' : 'none',
                    }}
                    onClick={() => {
                      setValue(item);
                      handleSearch(item);
                    }}
                  >
                    🔍 {item}
                  </button>
                ))}
              </div>
            </div>

            <div style={{
              padding: '20px',
              backgroundColor: 'white',
              borderRadius: '6px',
              border: '1px solid #DDE0E5',
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
            }}>
              <h5 style={{ 
                margin: '0 0 12px 0', 
                fontSize: '14px',
                fontWeight: 600,
                color: '#374151'
              }}>
                Popular
              </h5>
              <div style={{ 
                margin: 0, 
                padding: 0,
              }}>
                {popularItems.map((item, index) => (
                  <button 
                    key={index}
                    type="button"
                    style={{
                      width: '100%',
                      padding: '8px 0',
                      fontSize: '13px',
                      color: '#6B7280',
                      cursor: 'pointer',
                      border: 'none',
                      background: 'none',
                      textAlign: 'left',
                      borderBottom: index < popularItems.length - 1 ? '1px solid #F3F4F6' : 'none',
                    }}
                    onClick={() => {
                      setValue(item);
                      handleSearch(item);
                    }}
                  >
                    ⭐ {item}
                  </button>
                ))}
              </div>
            </div>

            <div style={{
              padding: '20px',
              backgroundColor: 'white',
              borderRadius: '6px',
              border: '1px solid #DDE0E5',
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
            }}>
              <h5 style={{ 
                margin: '0 0 12px 0', 
                fontSize: '14px',
                fontWeight: 600,
                color: '#374151'
              }}>
                Quick Actions
              </h5>
              <ul style={{ 
                margin: 0, 
                padding: 0,
                listStyle: 'none',
              }}>
                {quickActions.map((item, index) => (
                  <li 
                    key={index}
                    style={{
                      padding: '8px 0',
                      fontSize: '13px',
                      color: '#6B7280',
                      cursor: 'pointer',
                      borderBottom: index < quickActions.length - 1 ? '1px solid #F3F4F6' : 'none',
                    }}
                  >
                    ⚡ {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {!showSuggestions && results.length > 0 && (
          <div style={{
            backgroundColor: 'white',
            borderRadius: '6px',
            border: '1px solid #DDE0E5',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          }}>
            <div style={{
              padding: '12px 16px',
              borderBottom: '1px solid #E5E7EB',
              fontSize: '13px',
              fontWeight: 600,
              color: '#6B7280',
            }}>
              {results.length} {results.length === 1 ? 'result' : 'results'} found
            </div>
            {results.map((result, index) => (
              <div
                key={index}
                role="button"
                tabIndex={0}
                style={{
                  padding: '16px',
                  borderBottom: index < results.length - 1 ? '1px solid #F3F4F6' : 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F9FAFB';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    // Handle selection
                  }
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}>
                  <span style={{
                    fontSize: '20px',
                  }}>
                    {result.type === 'Notebook' ? '📓' : 
                     result.type === 'Dashboard' ? '📊' :
                     result.type === 'Table' ? '📋' : '🔍'}
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#1F2937',
                      marginBottom: '4px',
                    }}>
                      {result.title}
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: '#6B7280',
                    }}>
                      {result.type} • {result.path}
                    </div>
                  </div>
                  <span style={{
                    fontSize: '12px',
                    padding: '4px 8px',
                    backgroundColor: '#F3F4F6',
                    color: '#6B7280',
                    borderRadius: '4px',
                    fontWeight: 500,
                  }}>
                    {result.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {!showSuggestions && value && results.length === 0 && !loading && (
          <div style={{
            backgroundColor: 'white',
            borderRadius: '6px',
            border: '1px solid #DDE0E5',
            padding: '48px 24px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
            <div style={{
              fontSize: '16px',
              fontWeight: 500,
              color: '#374151',
              marginBottom: '8px',
            }}>
              No results found
            </div>
            <div style={{
              fontSize: '14px',
              color: '#6B7280',
            }}>
              Try searching for notebooks, dashboards, or tables
            </div>
          </div>
        )}
      </div>
    );
};

export const RealWorldExample: Story = {
  render: () => <RealWorldExampleComponent />,
  parameters: {
    docs: {
      description: {
        story: 'Complete search experience with suggestions, results, and loading states - similar to Databricks workspace search.',
      },
    },
  },
};