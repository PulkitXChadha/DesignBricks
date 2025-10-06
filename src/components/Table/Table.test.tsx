import userEvent from "@testing-library/user-event";
import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Table, TableProps, Column } from './Table';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Sample data for testing
interface TestData {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

const sampleData: TestData[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
];

const sampleColumns: Column<TestData>[] = [
  { key: 'id', header: 'ID' },
  { key: 'name', header: 'Name' },
  { key: 'email', header: 'Email' },
  { key: 'role', header: 'Role' },
  { key: 'status', header: 'Status' },
];

describe('Table', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      render(<Table columns={sampleColumns} data={sampleData} />);
      
      const table = screen.getByRole('table');
      expect(table).toBeInTheDocument();
      expect(table).toHaveClass('db-table', 'db-table--hoverable');
    });

    it('renders all column headers', () => {
      render(<Table columns={sampleColumns} data={sampleData} />);
      
      expect(screen.getByText('ID')).toBeInTheDocument();
      expect(screen.getByText('Name')).toBeInTheDocument();
      expect(screen.getByText('Email')).toBeInTheDocument();
      expect(screen.getByText('Role')).toBeInTheDocument();
      expect(screen.getByText('Status')).toBeInTheDocument();
    });

    it('renders all data rows', () => {
      render(<Table columns={sampleColumns} data={sampleData} />);
      
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('jane@example.com')).toBeInTheDocument();
      expect(screen.getByText('Bob Johnson')).toBeInTheDocument();
      
      const rows = screen.getAllByRole('row');
      // Header row + 3 data rows
      expect(rows).toHaveLength(4);
    });

    it('renders with custom className', () => {
      render(<Table columns={sampleColumns} data={sampleData} className="custom-table" />);
      
      const table = screen.getByRole('table');
      expect(table).toHaveClass('db-table', 'custom-table');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLTableElement>();
      render(<Table columns={sampleColumns} data={sampleData} ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLTableElement);
      expect(ref.current?.tagName).toBe('TABLE');
    });

    it('forwards additional props', () => {
      render(
        <Table
          columns={sampleColumns}
          data={sampleData}
          data-testid="test-table"
          id="my-table"
        />
      );
      
      const table = screen.getByTestId('test-table');
      expect(table).toHaveAttribute('id', 'my-table');
    });

    it('has proper table semantics', () => {
      render(<Table columns={sampleColumns} data={sampleData} />);
      
      const table = screen.getByRole('table');
      expect(table.querySelector('thead')).toBeInTheDocument();
      expect(table.querySelector('tbody')).toBeInTheDocument();
      
      const headers = screen.getAllByRole('columnheader');
      expect(headers).toHaveLength(5);
      
      const cells = screen.getAllByRole('cell');
      expect(cells.length).toBeGreaterThan(0);
    });
  });

  // Column configuration tests
  describe('Column Configuration', () => {
    it('applies column width styles', () => {
      const columnsWithWidth: Column<TestData>[] = [
        { key: 'id', header: 'ID', width: 50 },
        { key: 'name', header: 'Name', width: '200px' },
      ];
      
      render(<Table columns={columnsWithWidth} data={sampleData} />);
      
      const headers = screen.getAllByRole('columnheader');
      // Style objects convert numbers to pixels
      expect(headers[0]).toHaveStyle({ width: '50px' });
      expect(headers[1]).toHaveStyle({ width: '200px' });
    });

    it('applies column alignment', () => {
      const columnsWithAlign: Column<TestData>[] = [
        { key: 'id', header: 'ID', align: 'center' },
        { key: 'name', header: 'Name', align: 'right' },
        { key: 'email', header: 'Email', align: 'left' },
      ];
      
      render(<Table columns={columnsWithAlign} data={sampleData} />);
      
      const headers = screen.getAllByRole('columnheader');
      expect(headers[0]).toHaveClass('db-table__header--center');
      expect(headers[1]).toHaveClass('db-table__header--right');
      expect(headers[2]).toHaveClass('db-table__header--left');
    });

    it('uses custom render function', () => {
      const columnsWithRender: Column<TestData>[] = [
        { key: 'id', header: 'ID' },
        {
          key: 'status',
          header: 'Status',
          render: (value) => (
            <span className={`status-${value.toLowerCase()}`}>
              {value.toUpperCase()}
            </span>
          ),
        },
      ];
      
      render(<Table columns={columnsWithRender} data={sampleData} />);
      
      // Multiple rows have "ACTIVE" status, so use getAllByText
      const activeElements = screen.getAllByText('ACTIVE');
      expect(activeElements.length).toBeGreaterThan(0);
      expect(screen.getByText('INACTIVE')).toBeInTheDocument();
      expect(document.querySelector('.status-active')).toBeInTheDocument();
      expect(document.querySelector('.status-inactive')).toBeInTheDocument();
    });

    it('passes value, row, and index to render function', () => {
      const renderSpy = jest.fn((value, row, index) => `${value}-${row.name}-${index}`);
      
      const columnsWithRender: Column<TestData>[] = [
        { key: 'role', header: 'Role', render: renderSpy },
      ];
      
      render(<Table columns={columnsWithRender} data={sampleData} />);
      
      expect(renderSpy).toHaveBeenCalledTimes(3);
      expect(renderSpy).toHaveBeenCalledWith('Admin', sampleData[0], 0);
      expect(renderSpy).toHaveBeenCalledWith('User', sampleData[1], 1);
    });
  });

  // Style variants tests
  describe('Style Variants', () => {
    it('applies striped styling', () => {
      render(<Table columns={sampleColumns} data={sampleData} striped />);
      
      const table = screen.getByRole('table');
      expect(table).toHaveClass('db-table--striped');
    });

    it('applies hoverable styling by default', () => {
      render(<Table columns={sampleColumns} data={sampleData} />);
      
      const table = screen.getByRole('table');
      expect(table).toHaveClass('db-table--hoverable');
    });

    it('removes hoverable styling when set to false', () => {
      render(<Table columns={sampleColumns} data={sampleData} hoverable={false} />);
      
      const table = screen.getByRole('table');
      expect(table).not.toHaveClass('db-table--hoverable');
    });

    it('applies bordered styling', () => {
      render(<Table columns={sampleColumns} data={sampleData} bordered />);
      
      const table = screen.getByRole('table');
      expect(table).toHaveClass('db-table--bordered');
    });

    it('applies compact styling', () => {
      render(<Table columns={sampleColumns} data={sampleData} compact />);
      
      const table = screen.getByRole('table');
      expect(table).toHaveClass('db-table--compact');
    });

    it('applies multiple style variants together', () => {
      render(
        <Table
          columns={sampleColumns}
          data={sampleData}
          striped
          bordered
          compact
          hoverable
        />
      );
      
      const table = screen.getByRole('table');
      expect(table).toHaveClass(
        'db-table--striped',
        'db-table--bordered',
        'db-table--compact',
        'db-table--hoverable'
      );
    });
  });

  // Sticky header tests
  describe('Sticky Header', () => {
    it('applies sticky header class to wrapper', () => {
      const { container } = render(
        <Table columns={sampleColumns} data={sampleData} stickyHeader />
      );
      
      const wrapper = container.querySelector('.db-table-wrapper');
      expect(wrapper).toHaveClass('db-table-wrapper--sticky');
    });

    it('does not apply sticky header class by default', () => {
      const { container } = render(
        <Table columns={sampleColumns} data={sampleData} />
      );
      
      const wrapper = container.querySelector('.db-table-wrapper');
      expect(wrapper).not.toHaveClass('db-table-wrapper--sticky');
    });
  });

  // Loading state tests
  describe('Loading State', () => {
    it('shows loading indicator when loading', () => {
      render(<Table columns={sampleColumns} data={sampleData} loading />);
      
      expect(screen.getByText('Loading...')).toBeInTheDocument();
      expect(document.querySelector('.db-table__spinner')).toBeInTheDocument();
    });

    it('applies loading class to table', () => {
      render(<Table columns={sampleColumns} data={sampleData} loading />);
      
      const table = screen.getByRole('table');
      expect(table).toHaveClass('db-table--loading');
    });

    it('hides data rows when loading', () => {
      render(<Table columns={sampleColumns} data={sampleData} loading />);
      
      expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
      expect(screen.queryByText('jane@example.com')).not.toBeInTheDocument();
    });

    it('loading cell spans all columns', () => {
      render(<Table columns={sampleColumns} data={sampleData} loading />);
      
      const loadingCell = document.querySelector('.db-table__cell--loading');
      expect(loadingCell).toHaveAttribute('colspan', '5');
    });
  });

  // Empty state tests
  describe('Empty State', () => {
    it('shows default empty message when no data', () => {
      render(<Table columns={sampleColumns} data={[]} />);
      
      expect(screen.getByText('No data available')).toBeInTheDocument();
    });

    it('shows custom empty message', () => {
      render(
        <Table
          columns={sampleColumns}
          data={[]}
          emptyMessage="No users found"
        />
      );
      
      expect(screen.getByText('No users found')).toBeInTheDocument();
    });

    it('shows custom empty message as React element', () => {
      render(
        <Table
          columns={sampleColumns}
          data={[]}
          emptyMessage={
            <div>
              <strong>No Data</strong>
              <p>Try adding some items</p>
            </div>
          }
        />
      );
      
      expect(screen.getByText('No Data')).toBeInTheDocument();
      expect(screen.getByText('Try adding some items')).toBeInTheDocument();
    });

    it('empty cell spans all columns', () => {
      render(<Table columns={sampleColumns} data={[]} />);
      
      const emptyCell = document.querySelector('.db-table__cell--empty');
      expect(emptyCell).toHaveAttribute('colspan', '5');
    });

    it('does not show empty message when loading', () => {
      render(<Table columns={sampleColumns} data={[]} loading />);
      
      expect(screen.queryByText('No data available')).not.toBeInTheDocument();
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  });

  // Sorting tests
  describe('Sorting', () => {
    it('shows sort icon for sortable columns', () => {
      const sortableColumns: Column<TestData>[] = [
        { key: 'name', header: 'Name', sortable: true },
        { key: 'email', header: 'Email', sortable: false },
      ];
      
      render(<Table columns={sortableColumns} data={sampleData} />);
      
      const headers = screen.getAllByRole('columnheader');
      expect(headers[0]).toHaveClass('db-table__header--sortable');
      expect(headers[1]).not.toHaveClass('db-table__header--sortable');
      
      const sortIcons = document.querySelectorAll('.db-table__sort-icon');
      expect(sortIcons).toHaveLength(1);
    });

    it('calls onSort when sortable column is clicked', async () => {
      const handleSort = jest.fn();
      const sortableColumns: Column<TestData>[] = [
        { key: 'name', header: 'Name', sortable: true },
      ];
      const user = userEvent.setup();
      
      render(
        <Table
          columns={sortableColumns}
          data={sampleData}
          onSort={handleSort}
        />
      );
      
      const nameHeader = screen.getByText('Name');
      await user.click(nameHeader);
      
      expect(handleSort).toHaveBeenCalledTimes(1);
      expect(handleSort).toHaveBeenCalledWith('name', 'asc');
    });

    it('toggles sort direction on repeated clicks', async () => {
      const handleSort = jest.fn();
      const sortableColumns: Column<TestData>[] = [
        { key: 'name', header: 'Name', sortable: true },
      ];
      const user = userEvent.setup();
      
      const { rerender } = render(
        <Table
          columns={sortableColumns}
          data={sampleData}
          onSort={handleSort}
          sortBy={{ key: 'name', direction: 'asc' }}
        />
      );
      
      const nameHeader = screen.getByText('Name');
      await user.click(nameHeader);
      
      expect(handleSort).toHaveBeenCalledWith('name', 'desc');
      
      rerender(
        <Table
          columns={sortableColumns}
          data={sampleData}
          onSort={handleSort}
          sortBy={{ key: 'name', direction: 'desc' }}
        />
      );
      
      await user.click(nameHeader);
      expect(handleSort).toHaveBeenCalledWith('name', 'asc');
    });

    it('does not call onSort for non-sortable columns', async () => {
      const handleSort = jest.fn();
      const user = userEvent.setup();
      
      render(
        <Table
          columns={sampleColumns}
          data={sampleData}
          onSort={handleSort}
        />
      );
      
      const idHeader = screen.getByText('ID');
      await user.click(idHeader);
      
      expect(handleSort).not.toHaveBeenCalled();
    });

    it('does not call onSort when onSort is not provided', async () => {
      const sortableColumns: Column<TestData>[] = [
        { key: 'name', header: 'Name', sortable: true },
      ];
      const user = userEvent.setup();
      
      render(<Table columns={sortableColumns} data={sampleData} />);
      
      const nameHeader = screen.getByText('Name');
      
      // Should not crash
      await expect(user.click(nameHeader)).resolves.not.toThrow();
    });

    it('shows correct sort icon direction', () => {
      const sortableColumns: Column<TestData>[] = [
        { key: 'name', header: 'Name', sortable: true },
      ];
      
      const { rerender } = render(
        <Table
          columns={sortableColumns}
          data={sampleData}
          sortBy={{ key: 'name', direction: 'asc' }}
        />
      );
      
      let sortIcon = document.querySelector('.db-table__sort-icon svg');
      expect(sortIcon?.querySelector('path:first-child')).toHaveAttribute('opacity', '1');
      expect(sortIcon?.querySelector('path:last-child')).toHaveAttribute('opacity', '0.3');
      
      rerender(
        <Table
          columns={sortableColumns}
          data={sampleData}
          sortBy={{ key: 'name', direction: 'desc' }}
        />
      );
      
      sortIcon = document.querySelector('.db-table__sort-icon svg');
      expect(sortIcon?.querySelector('path:first-child')).toHaveAttribute('opacity', '0.3');
      expect(sortIcon?.querySelector('path:last-child')).toHaveAttribute('opacity', '1');
    });
  });

  // Row interaction tests
  describe('Row Interaction', () => {
    it('applies clickable class when onRowClick is provided', () => {
      const handleRowClick = jest.fn();
      
      render(
        <Table
          columns={sampleColumns}
          data={sampleData}
          onRowClick={handleRowClick}
        />
      );
      
      const dataRows = screen.getAllByRole('row').slice(1); // Skip header row
      dataRows.forEach(row => {
        expect(row).toHaveClass('db-table__row--clickable');
      });
    });

    it('calls onRowClick when row is clicked', async () => {
      const handleRowClick = jest.fn();
      const user = userEvent.setup();
      
      render(
        <Table
          columns={sampleColumns}
          data={sampleData}
          onRowClick={handleRowClick}
        />
      );
      
      const firstDataRow = screen.getAllByRole('row')[1]; // Skip header
      await user.click(firstDataRow);
      
      expect(handleRowClick).toHaveBeenCalledTimes(1);
      expect(handleRowClick).toHaveBeenCalledWith(sampleData[0], 0);
    });

    it('does not apply clickable class when onRowClick is not provided', () => {
      render(<Table columns={sampleColumns} data={sampleData} />);
      
      const dataRows = screen.getAllByRole('row').slice(1);
      dataRows.forEach(row => {
        expect(row).not.toHaveClass('db-table__row--clickable');
      });
    });

    it('calls onRowClick with correct row data and index', async () => {
      const handleRowClick = jest.fn();
      const user = userEvent.setup();
      
      render(
        <Table
          columns={sampleColumns}
          data={sampleData}
          onRowClick={handleRowClick}
        />
      );
      
      const rows = screen.getAllByRole('row').slice(1);
      
      await user.click(rows[0]);
      expect(handleRowClick).toHaveBeenCalledWith(sampleData[0], 0);
      
      await user.click(rows[2]);
      expect(handleRowClick).toHaveBeenCalledWith(sampleData[2], 2);
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(
        <Table columns={sampleColumns} data={sampleData} />
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations when empty', async () => {
      const { container } = render(
        <Table columns={sampleColumns} data={[]} />
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations when loading', async () => {
      const { container } = render(
        <Table columns={sampleColumns} data={sampleData} loading />
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with all features', async () => {
      const sortableColumns: Column<TestData>[] = [
        { key: 'name', header: 'Name', sortable: true },
        { key: 'email', header: 'Email' },
      ];
      
      const { container } = render(
        <Table
          columns={sortableColumns}
          data={sampleData}
          striped
          bordered
          compact
          stickyHeader
          onRowClick={() => {}}
          onSort={() => {}}
          sortBy={{ key: 'name', direction: 'asc' }}
        />
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('uses proper table semantics', () => {
      render(<Table columns={sampleColumns} data={sampleData} />);
      
      const table = screen.getByRole('table');
      expect(table).toBeInTheDocument();
      
      const columnHeaders = screen.getAllByRole('columnheader');
      expect(columnHeaders.length).toBe(5);
      
      const cells = screen.getAllByRole('cell');
      expect(cells.length).toBe(15); // 3 rows * 5 columns
    });

    it('supports additional ARIA attributes', () => {
      render(
        <Table
          columns={sampleColumns}
          data={sampleData}
          aria-label="User data table"
          aria-describedby="table-description"
        />
      );
      
      const table = screen.getByRole('table');
      expect(table).toHaveAttribute('aria-label', 'User data table');
      expect(table).toHaveAttribute('aria-describedby', 'table-description');
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles empty columns array', () => {
      render(<Table columns={[]} data={sampleData} />);
      
      const table = screen.getByRole('table');
      expect(table).toBeInTheDocument();
      
      const columnHeaders = screen.queryAllByRole('columnheader');
      expect(columnHeaders).toHaveLength(0);
    });

    it('handles empty data array', () => {
      render(<Table columns={sampleColumns} data={[]} />);
      
      const table = screen.getByRole('table');
      expect(table).toBeInTheDocument();
      expect(screen.getByText('No data available')).toBeInTheDocument();
    });

    it('handles single column', () => {
      const singleColumn: Column<TestData>[] = [
        { key: 'name', header: 'Name' },
      ];
      
      render(<Table columns={singleColumn} data={sampleData} />);
      
      const columnHeaders = screen.getAllByRole('columnheader');
      expect(columnHeaders).toHaveLength(1);
    });

    it('handles single row', () => {
      render(<Table columns={sampleColumns} data={[sampleData[0]]} />);
      
      const rows = screen.getAllByRole('row');
      expect(rows).toHaveLength(2); // Header + 1 data row
    });

    it('handles large datasets', () => {
      const largeData = Array.from({ length: 100 }, (_, i) => ({
        id: i,
        name: `User ${i}`,
        email: `user${i}@example.com`,
        role: i % 2 === 0 ? 'Admin' : 'User',
        status: 'Active',
      }));
      
      render(<Table columns={sampleColumns} data={largeData} />);
      
      const rows = screen.getAllByRole('row');
      expect(rows).toHaveLength(101); // Header + 100 data rows
    });

    it('handles complex header content', () => {
      const complexColumns: Column<TestData>[] = [
        {
          key: 'name',
          header: (
            <div>
              <strong>User Name</strong>
              <span> (Full)</span>
            </div>
          ),
        },
      ];
      
      render(<Table columns={complexColumns} data={sampleData} />);
      
      expect(screen.getByText('User Name')).toBeInTheDocument();
      expect(screen.getByText('(Full)')).toBeInTheDocument();
    });

    it('handles missing keys in data', () => {
      const dataWithMissingKeys = [
        { id: 1, name: 'John' }, // Missing email, role, status
      ];
      
      render(<Table columns={sampleColumns} data={dataWithMissingKeys} />);
      
      expect(screen.getByText('John')).toBeInTheDocument();
      
      const cells = screen.getAllByRole('cell');
      // Should render cells even if values are undefined
      expect(cells.length).toBe(5);
    });

    it('handles multiple class names correctly', () => {
      render(
        <Table
          columns={sampleColumns}
          data={sampleData}
          className="class1 class2 class3"
        />
      );
      
      const table = screen.getByRole('table');
      expect(table).toHaveClass('db-table', 'class1', 'class2', 'class3');
    });

    it('handles rapid state changes', () => {
      const { rerender } = render(
        <Table columns={sampleColumns} data={sampleData} loading />
      );
      
      expect(screen.getByText('Loading...')).toBeInTheDocument();
      
      rerender(<Table columns={sampleColumns} data={[]} />);
      expect(screen.getByText('No data available')).toBeInTheDocument();
      
      rerender(<Table columns={sampleColumns} data={sampleData} />);
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    it('preserves context in event handlers', async () => {
      const context = { value: 'test-context' };
      const handleRowClick = jest.fn(function(this: typeof context, _row: TestData, _index: number) {
        return this.value;
      });
      const user = userEvent.setup();
      
      render(
        <Table
          columns={sampleColumns}
          data={sampleData}
          onRowClick={handleRowClick.bind(context)}
        />
      );
      
      const firstDataRow = screen.getAllByRole('row')[1];
      await user.click(firstDataRow);
      
      expect(handleRowClick).toHaveBeenCalledTimes(1);
      expect(handleRowClick).toHaveReturnedWith('test-context');
    });
  });
});
