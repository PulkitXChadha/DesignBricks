import type { Meta, StoryObj } from '@storybook/react';
import { Table, Column } from './Table';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
import React, { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  lastLogin: string;
}

const meta = {
  title: 'Data Display/Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component: 'Tables display sets of data organized in rows and columns.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    striped: {
      control: 'boolean',
      description: 'Striped rows',
      table: {
        defaultValue: { summary: false },
      },
    },
    hoverable: {
      control: 'boolean',
      description: 'Hoverable rows',
      table: {
        defaultValue: { summary: true },
      },
    },
    bordered: {
      control: 'boolean',
      description: 'Bordered table',
      table: {
        defaultValue: { summary: false },
      },
    },
    compact: {
      control: 'boolean',
      description: 'Compact size',
      table: {
        defaultValue: { summary: false },
      },
    },
    stickyHeader: {
      control: 'boolean',
      description: 'Sticky header',
      table: {
        defaultValue: { summary: false },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
      table: {
        defaultValue: { summary: false },
      },
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active', lastLogin: '2024-01-15 09:30' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'active', lastLogin: '2024-01-15 14:22' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer', status: 'inactive', lastLogin: '2024-01-10 11:45' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'pending', lastLogin: '2024-01-14 16:18' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Admin', status: 'active', lastLogin: '2024-01-15 08:00' },
];

const columns: Column<User>[] = [
  { key: 'id', header: 'ID', width: 60 },
  { key: 'name', header: 'Name' },
  { key: 'email', header: 'Email' },
  { key: 'role', header: 'Role', width: 100 },
  { key: 'status', header: 'Status', width: 120 },
  { key: 'lastLogin', header: 'Last Login', width: 150 },
];

export const Basic: Story = {
  args: {
    columns,
    data: sampleData,
  },
};

export const Striped: Story = {
  args: {
    columns,
    data: sampleData,
    striped: true,
  },
};

export const Bordered: Story = {
  args: {
    columns,
    data: sampleData,
    bordered: true,
  },
};

export const Compact: Story = {
  args: {
    columns,
    data: sampleData,
    compact: true,
  },
};

export const Loading: Story = {
  args: {
    columns,
    data: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
    emptyMessage: 'No users found. Try adjusting your filters.',
  },
};

export const WithCustomRender: Story = {
  render: () => {
    const customColumns: Column<User>[] = [
      { key: 'id', header: 'ID', width: 60, align: 'center' },
      { key: 'name', header: 'Name', render: (value) => <strong>{value}</strong> },
      { key: 'email', header: 'Email' },
      { key: 'role', header: 'Role', width: 100 },
      {
        key: 'status',
        header: 'Status',
        width: 120,
        render: (value) => {
          const variants = {
            active: 'success' as const,
            inactive: 'error' as const,
            pending: 'warning' as const,
          };
          return <Badge variant={variants[value as keyof typeof variants]}>{value}</Badge>;
        },
      },
      { key: 'lastLogin', header: 'Last Login', width: 150 },
    ];

    return <Table columns={customColumns} data={sampleData} />;
  },
};

const SortableComponent = () => {
  const [data, setData] = useState(sampleData);
  const [sortBy, setSortBy] = useState<{ key: string; direction: 'asc' | 'desc' } | undefined>();

  const handleSort = (key: string, direction: 'asc' | 'desc') => {
      setSortBy({ key, direction });

      const sorted = [...data].sort((a, b) => {
        const aValue = a[key as keyof User];
        const bValue = b[key as keyof User];

        if (aValue < bValue) return direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return direction === 'asc' ? 1 : -1;
        return 0;
      });

      setData(sorted);
    };

    const sortableColumns: Column<User>[] = [
      { key: 'id', header: 'ID', width: 60, sortable: true },
      { key: 'name', header: 'Name', sortable: true },
      { key: 'email', header: 'Email', sortable: true },
      { key: 'role', header: 'Role', width: 100, sortable: true },
      { key: 'status', header: 'Status', width: 120 },
      { key: 'lastLogin', header: 'Last Login', width: 150, sortable: true },
    ];

    return (
      <Table
        columns={sortableColumns}
        data={data}
        onSort={handleSort}
        sortBy={sortBy}
      />
  );
};

export const Sortable: Story = {
  render: () => <SortableComponent />,
};

const ClickableComponent = () => {
  const [selected, setSelected] = useState<User | null>(null);

  return (
      <>
        <Table
          columns={columns}
          data={sampleData}
          onRowClick={(row) => setSelected(row)}
          hoverable
        />
        {selected && (
          <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>
            <strong>Selected User:</strong> {selected.name} ({selected.email})
          </div>
        )}
    </>
  );
};

export const Clickable: Story = {
  render: () => <ClickableComponent />,
};

export const StickyHeader: Story = {
  render: () => {
    const manyRows = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: ['Admin', 'Editor', 'Viewer'][i % 3],
      status: (['active', 'inactive', 'pending'] as const)[i % 3],
      lastLogin: `2024-01-${String(15 - (i % 10)).padStart(2, '0')} 12:00`,
    }));

    return (
      <div style={{ height: '400px' }}>
        <Table
          columns={columns}
          data={manyRows}
          stickyHeader
          striped
        />
      </div>
    );
  },
};

export const WithActions: Story = {
  render: () => {
    const actionsColumn: Column<User> = {
      key: 'actions',
      header: 'Actions',
      width: 150,
      align: 'center',
      render: () => (
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
          <Button size="small" variant="tertiary">Edit</Button>
          <Button size="small" variant="tertiary">Delete</Button>
        </div>
      ),
    };

    const columnsWithActions = [...columns, actionsColumn];

    return <Table columns={columnsWithActions} data={sampleData} />;
  },
};

export const DataTable: Story = {
  render: () => {
    const dataColumns: Column[] = [
      { key: 'metric', header: 'Metric', width: 200 },
      { key: 'value', header: 'Value', align: 'right' },
      { key: 'change', header: 'Change', align: 'right', render: (value) => (
        <span style={{ color: value > 0 ? '#00AF4B' : '#F53737' }}>
          {value > 0 ? '+' : ''}{value}%
        </span>
      )},
      { key: 'trend', header: 'Trend', align: 'center', render: () => (
        <span style={{ color: '#2272B4' }}>📈</span>
      )},
    ];

    const metricsData = [
      { metric: 'Total Revenue', value: '$45,231.89', change: 20.1, trend: 'up' },
      { metric: 'Active Users', value: '2,543', change: 15.3, trend: 'up' },
      { metric: 'Conversion Rate', value: '3.2%', change: -5.4, trend: 'down' },
      { metric: 'Avg. Session Duration', value: '4m 32s', change: 8.7, trend: 'up' },
      { metric: 'Bounce Rate', value: '42.3%', change: -2.1, trend: 'down' },
    ];

    return (
      <Table
        columns={dataColumns}
        data={metricsData}
        striped
        compact
      />
    );
  },
};