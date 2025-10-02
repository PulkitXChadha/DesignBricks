# DesignBricks Real-World Examples

This directory contains complete, production-ready examples demonstrating how to build real applications with DesignBricks.

## 📚 Available Examples

1. **[User Dashboard](#user-dashboard)** - Complete admin dashboard with data tables, charts, and user management
2. **[E-commerce Product Catalog](#e-commerce-product-catalog)** - Product listing with filters, search, and cart
3. **[Data Analytics Dashboard](#data-analytics-dashboard)** - Interactive charts and data visualization
4. **[Settings Panel](#settings-panel)** - Comprehensive settings UI with forms and preferences
5. **[Authentication Flow](#authentication-flow)** - Login, register, and password reset flows

## Running Examples

Each example is a standalone React application. To run an example:

```bash
cd examples/<example-name>
npm install
npm start
```

## Examples

### User Dashboard

A complete admin dashboard showcasing:
- User management table with search and filters
- Real-time statistics cards
- Navigation sidebar
- User profile management
- Role-based access control UI

**Key Components Used:**
- `Table`, `Card`, `Badge`, `UserAvatar`, `Dropdown`, `SearchInput`, `Modal`

**Location:** `examples/user-dashboard/`

---

### E-commerce Product Catalog

A modern e-commerce interface featuring:
- Product grid with images and prices
- Advanced filtering and search
- Shopping cart functionality
- Product detail modal
- Responsive layout

**Key Components Used:**
- `Grid`, `Card`, `Button`, `Badge`, `Modal`, `SearchInput`, `Checkbox`, `Select`

**Location:** `examples/ecommerce-catalog/`

---

### Data Analytics Dashboard

Interactive data visualization dashboard:
- Multiple chart types (line, bar, pie, area)
- Date range selectors
- Real-time data updates
- Export functionality
- Responsive charts

**Key Components Used:**
- `LineChart`, `BarChart`, `PieChart`, `AreaChart`, `Card`, `Select`, `Button`

**Location:** `examples/analytics-dashboard/`

---

### Settings Panel

Comprehensive settings interface:
- Profile settings with avatar upload
- Account preferences
- Notification settings
- Security options
- Theme customization

**Key Components Used:**
- `TextField`, `Toggle`, `Select`, `Button`, `Alert`, `Checkbox`, `UserAvatar`

**Location:** `examples/settings-panel/`

---

### Authentication Flow

Complete authentication UI:
- Login form with validation
- Registration with password strength
- Password reset flow
- Social login buttons
- Remember me functionality

**Key Components Used:**
- `TextField`, `Button`, `Checkbox`, `Alert`, `Card`, `Typography`

**Location:** `examples/auth-flow/`

---

## Learning Path

If you're new to DesignBricks, we recommend following this learning path:

1. **Start with Authentication Flow** - Learn basic form handling and validation
2. **Move to Settings Panel** - Explore advanced form patterns and state management
3. **Try User Dashboard** - Understand complex data display and interactions
4. **Build E-commerce Catalog** - Master grid layouts and filtering
5. **Create Analytics Dashboard** - Implement data visualization with charts

## Code Snippets

### Example 1: Complete User Dashboard

```tsx
// examples/user-dashboard/src/App.tsx
import React, { useState } from 'react';
import {
  Sidebar,
  TopBar,
  Card,
  Typography,
  Table,
  Badge,
  UserAvatar,
  SearchInput,
  Button,
  Modal,
  TextField,
  Select,
} from 'designbricks';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'viewer';
  status: 'active' | 'inactive';
  avatar?: string;
}

function UserDashboard() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user', status: 'active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'viewer', status: 'inactive' },
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleSaveUser = (updatedUser: User) => {
    setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
    setIsModalOpen(false);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar Navigation */}
      <Sidebar>
        <Sidebar.Header>
          <Typography variant="h5">Admin Panel</Typography>
        </Sidebar.Header>
        <Sidebar.Nav>
          <Sidebar.Item active icon="dashboard">Dashboard</Sidebar.Item>
          <Sidebar.Item icon="users">Users</Sidebar.Item>
          <Sidebar.Item icon="settings">Settings</Sidebar.Item>
        </Sidebar.Nav>
      </Sidebar>

      {/* Main Content */}
      <div style={{ flex: 1, overflow: 'auto' }}>
        <TopBar>
          <Typography variant="h4">User Management</Typography>
          <UserAvatar name="Admin User" />
        </TopBar>

        <div style={{ padding: '24px' }}>
          {/* Statistics Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '24px' }}>
            <Card variant="elevated">
              <Typography variant="caption" color="secondary">Total Users</Typography>
              <Typography variant="h2">{users.length}</Typography>
              <Badge variant="success">+12% this month</Badge>
            </Card>
            <Card variant="elevated">
              <Typography variant="caption" color="secondary">Active Users</Typography>
              <Typography variant="h2">{users.filter(u => u.status === 'active').length}</Typography>
              <Badge variant="info">Updated now</Badge>
            </Card>
            <Card variant="elevated">
              <Typography variant="caption" color="secondary">Admin Users</Typography>
              <Typography variant="h2">{users.filter(u => u.role === 'admin').length}</Typography>
            </Card>
          </div>

          {/* User Table */}
          <Card variant="outlined">
            <div style={{ padding: '16px', borderBottom: '1px solid #e0e0e0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h5">All Users</Typography>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <SearchInput
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={setSearchTerm}
                  size="small"
                />
                <Button variant="primary" size="small">Add User</Button>
              </div>
            </div>

            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>User</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                  <Table.HeaderCell>Role</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {filteredUsers.map((user) => (
                  <Table.Row key={user.id}>
                    <Table.Cell>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <UserAvatar name={user.name} size="small" src={user.avatar} />
                        <Typography variant="body2">{user.name}</Typography>
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <Typography variant="body2" color="secondary">{user.email}</Typography>
                    </Table.Cell>
                    <Table.Cell>
                      <Badge
                        variant={
                          user.role === 'admin' ? 'primary' :
                          user.role === 'user' ? 'info' : 'neutral'
                        }
                      >
                        {user.role}
                      </Badge>
                    </Table.Cell>
                    <Table.Cell>
                      <Badge variant={user.status === 'active' ? 'success' : 'neutral'}>
                        {user.status}
                      </Badge>
                    </Table.Cell>
                    <Table.Cell>
                      <Button
                        variant="tertiary"
                        size="small"
                        onClick={() => handleEditUser(user)}
                      >
                        Edit
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Card>
        </div>
      </div>

      {/* Edit User Modal */}
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Edit User"
        size="medium"
      >
        {selectedUser && (
          <EditUserForm
            user={selectedUser}
            onSave={handleSaveUser}
            onCancel={() => setIsModalOpen(false)}
          />
        )}
      </Modal>
    </div>
  );
}

// Edit User Form Component
function EditUserForm({ user, onSave, onCancel }: {
  user: User;
  onSave: (user: User) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState(user);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        fullWidth
        required
      />
      <TextField
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        fullWidth
        required
      />
      <Select
        label="Role"
        value={formData.role}
        onChange={(e) => setFormData({ ...formData, role: e.target.value as User['role'] })}
        options={[
          { value: 'admin', label: 'Administrator' },
          { value: 'user', label: 'User' },
          { value: 'viewer', label: 'Viewer' },
        ]}
        fullWidth
      />
      <Select
        label="Status"
        value={formData.status}
        onChange={(e) => setFormData({ ...formData, status: e.target.value as User['status'] })}
        options={[
          { value: 'active', label: 'Active' },
          { value: 'inactive', label: 'Inactive' },
        ]}
        fullWidth
      />
      <div style={{ display: 'flex', gap: '12px', marginTop: '24px', justifyContent: 'flex-end' }}>
        <Button variant="tertiary" onClick={onCancel}>Cancel</Button>
        <Button variant="primary" type="submit">Save Changes</Button>
      </div>
    </form>
  );
}

export default UserDashboard;
```

### Example 2: Data Analytics Dashboard

```tsx
// examples/analytics-dashboard/src/App.tsx
import React, { useState, useEffect } from 'react';
import {
  Card,
  Typography,
  Select,
  Button,
  Grid,
  LineChart,
  BarChart,
  PieChart,
  AreaChart,
  Badge,
} from 'designbricks';

interface MetricData {
  label: string;
  value: number;
  change: number;
}

function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState('7d');
  const [metrics, setMetrics] = useState<MetricData[]>([
    { label: 'Total Revenue', value: 45231, change: 12.5 },
    { label: 'Active Users', value: 2845, change: 8.2 },
    { label: 'Conversion Rate', value: 3.24, change: -2.1 },
    { label: 'Avg. Order Value', value: 159, change: 5.7 },
  ]);

  const lineChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Revenue',
        data: [12000, 19000, 15000, 25000, 22000, 30000, 28000],
        borderColor: '#2272B4',
        backgroundColor: 'rgba(34, 114, 180, 0.1)',
      },
    ],
  };

  const barChartData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81],
        backgroundColor: '#2272B4',
      },
    ],
  };

  const pieChartData = {
    labels: ['Direct', 'Organic', 'Referral', 'Social'],
    datasets: [
      {
        data: [300, 50, 100, 80],
        backgroundColor: ['#2272B4', '#4A90CC', '#7AAFDD', '#A9CCEE'],
      },
    ],
  };

  return (
    <div style={{ padding: '24px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <Typography variant="h3">Analytics Dashboard</Typography>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            options={[
              { value: '7d', label: 'Last 7 days' },
              { value: '30d', label: 'Last 30 days' },
              { value: '90d', label: 'Last 90 days' },
              { value: '1y', label: 'Last year' },
            ]}
          />
          <Button variant="primary">Export Report</Button>
        </div>
      </div>

      {/* Metric Cards */}
      <Grid cols={4} gap="lg" style={{ marginBottom: '24px' }}>
        {metrics.map((metric, index) => (
          <Card key={index} variant="elevated" padding="large">
            <Typography variant="caption" color="secondary" style={{ marginBottom: '8px' }}>
              {metric.label}
            </Typography>
            <Typography variant="h2" style={{ marginBottom: '8px' }}>
              {metric.label.includes('Rate') ? `${metric.value}%` : 
               metric.label.includes('Revenue') || metric.label.includes('Value') ? 
               `$${metric.value.toLocaleString()}` : metric.value.toLocaleString()}
            </Typography>
            <Badge variant={metric.change >= 0 ? 'success' : 'error'}>
              {metric.change >= 0 ? '+' : ''}{metric.change}%
            </Badge>
          </Card>
        ))}
      </Grid>

      {/* Charts */}
      <Grid cols={2} gap="lg" style={{ marginBottom: '24px' }}>
        <Card variant="elevated" padding="large">
          <Typography variant="h5" style={{ marginBottom: '16px' }}>Revenue Trend</Typography>
          <LineChart
            data={lineChartData}
            height={300}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </Card>

        <Card variant="elevated" padding="large">
          <Typography variant="h5" style={{ marginBottom: '16px' }}>Top Products</Typography>
          <BarChart
            data={barChartData}
            height={300}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </Card>
      </Grid>

      <Grid cols={2} gap="lg">
        <Card variant="elevated" padding="large">
          <Typography variant="h5" style={{ marginBottom: '16px' }}>Traffic Sources</Typography>
          <PieChart
            data={pieChartData}
            height={300}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </Card>

        <Card variant="elevated" padding="large">
          <Typography variant="h5" style={{ marginBottom: '16px' }}>User Growth</Typography>
          <AreaChart
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              datasets: [
                {
                  label: 'Users',
                  data: [1200, 1900, 1500, 2500, 2200, 3000],
                  borderColor: '#2272B4',
                  backgroundColor: 'rgba(34, 114, 180, 0.2)',
                },
              ],
            }}
            height={300}
          />
        </Card>
      </Grid>
    </div>
  );
}

export default AnalyticsDashboard;
```

### Example 3: Authentication Flow

```tsx
// examples/auth-flow/src/LoginPage.tsx
import React, { useState } from 'react';
import {
  Card,
  Typography,
  TextField,
  Button,
  Checkbox,
  Alert,
  Progress,
} from 'designbricks';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Validate
      if (email === 'demo@example.com' && password === 'password') {
        console.log('Login successful');
        // Redirect to dashboard
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
    }}>
      <Card variant="elevated" padding="large" style={{ width: '100%', maxWidth: '400px' }}>
        <Typography variant="h3" align="center" style={{ marginBottom: '8px' }}>
          Welcome Back
        </Typography>
        <Typography variant="body2" color="secondary" align="center" style={{ marginBottom: '32px' }}>
          Sign in to your account to continue
        </Typography>

        {error && (
          <Alert severity="error" style={{ marginBottom: '16px' }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
            autoComplete="email"
            style={{ marginBottom: '16px' }}
          />

          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
            autoComplete="current-password"
            style={{ marginBottom: '16px' }}
          />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <Checkbox
              label="Remember me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              size="small"
            />
            <Button variant="tertiary" size="small">
              Forgot password?
            </Button>
          </div>

          {loading && <Progress variant="linear" indeterminate style={{ marginBottom: '16px' }} />}

          <Button
            variant="primary"
            type="submit"
            fullWidth
            loading={loading}
            disabled={!email || !password}
          >
            Sign In
          </Button>
        </form>

        <Typography variant="body2" color="secondary" align="center" style={{ marginTop: '24px' }}>
          Don't have an account?{' '}
          <Button variant="tertiary" size="small">
            Sign up
          </Button>
        </Typography>
      </Card>
    </div>
  );
}

export default LoginPage;
```

## Best Practices

### 1. Component Composition

Build complex UIs by composing smaller components:

```tsx
// Good: Compose smaller components
function UserProfile() {
  return (
    <Card>
      <UserHeader />
      <UserStats />
      <UserActivity />
    </Card>
  );
}
```

### 2. State Management

Use appropriate state management for complex examples:

```tsx
// For complex state, consider Context API or state management libraries
const DashboardContext = React.createContext();

function Dashboard() {
  const [state, setState] = useState(initialState);
  
  return (
    <DashboardContext.Provider value={{ state, setState }}>
      <DashboardContent />
    </DashboardContext.Provider>
  );
}
```

### 3. Performance Optimization

Optimize rendering for large datasets:

```tsx
import { useMemo } from 'react';

function DataTable({ data }) {
  const filteredData = useMemo(() => 
    data.filter(item => item.active),
    [data]
  );
  
  return <Table data={filteredData} />;
}
```

### 4. Accessibility

Always include proper ARIA labels and keyboard navigation:

```tsx
<Button
  aria-label="Delete user"
  onClick={handleDelete}
>
  <DeleteIcon />
</Button>
```

## Next Steps

- Explore each example in detail
- Modify examples to fit your needs
- Combine patterns from multiple examples
- Share your creations with the community!

## Contributing Examples

Have a great example? We'd love to include it! Check our [Contributing Guide](../CONTRIBUTING.md) for details.

