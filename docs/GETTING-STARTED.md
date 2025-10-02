# Getting Started with DesignBricks

Welcome to DesignBricks! This comprehensive guide will help you get up and running with the Databricks Design System React component library in less than 30 minutes.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Quick Start](#quick-start)
4. [Your First Component](#your-first-component)
5. [Using Design Tokens](#using-design-tokens)
6. [Theming](#theming)
7. [TypeScript Support](#typescript-support)
8. [Accessibility](#accessibility)
9. [Next Steps](#next-steps)

## Prerequisites

Before you begin, ensure you have:

- **Node.js**: Version 16.x or higher
- **npm** or **yarn**: Latest stable version
- **React**: Version 16.8.0 or higher (for hooks support)
- Basic knowledge of React and TypeScript

## Installation

### Using npm

```bash
npm install designbricks
```

### Using yarn

```bash
yarn add designbricks
```

### Peer Dependencies

DesignBricks requires React and React DOM as peer dependencies. If you haven't installed them:

```bash
npm install react react-dom
```

## Quick Start

### 1. Basic Setup

Create a new React app or use your existing project:

```bash
npx create-react-app my-app --template typescript
cd my-app
npm install designbricks
```

### 2. Import Components

```tsx
import { Button, Card, Typography } from 'designbricks';

function App() {
  return (
    <div className="App">
      <Card variant="elevated">
        <Typography variant="h2">Welcome to DesignBricks</Typography>
        <Typography variant="body1">
          Build beautiful UIs with the Databricks Design System
        </Typography>
        <Button variant="primary">Get Started</Button>
      </Card>
    </div>
  );
}

export default App;
```

### 3. Import Global Styles (Optional)

For optimal appearance, import the global styles in your main CSS file or component:

```tsx
// In your main index.tsx or App.tsx
import 'designbricks/dist/styles/global.css';
```

## Your First Component

Let's build a simple dashboard card with multiple components:

```tsx
import React, { useState } from 'react';
import {
  Card,
  Typography,
  Button,
  TextField,
  Alert,
  Progress,
} from 'designbricks';

function Dashboard() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <Card variant="elevated" padding="large">
      <Typography variant="h3" style={{ marginBottom: '16px' }}>
        Join Our Newsletter
      </Typography>
      
      {submitted ? (
        <Alert severity="success" title="Success!">
          Thank you for subscribing to our newsletter.
        </Alert>
      ) : (
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            helperText="We'll never share your email"
            fullWidth
            required
          />
          
          {loading && <Progress variant="linear" />}
          
          <div style={{ marginTop: '16px' }}>
            <Button
              variant="primary"
              type="submit"
              loading={loading}
              disabled={!email}
            >
              Subscribe
            </Button>
          </div>
        </form>
      )}
    </Card>
  );
}

export default Dashboard;
```

## Using Design Tokens

DesignBricks provides a comprehensive design token system for consistent styling:

### Importing Tokens

```tsx
import { tokens } from 'designbricks';

const {
  colors,
  typography,
  spacing,
  shadows,
  borderRadius
} = tokens;
```

### Using Tokens in Your Components

```tsx
import { tokens } from 'designbricks';

function CustomComponent() {
  return (
    <div
      style={{
        backgroundColor: tokens.colors.primary.main,
        padding: tokens.spacing.lg,
        borderRadius: tokens.borderRadius.md,
        boxShadow: tokens.shadows.md,
      }}
    >
      <h2 style={{
        fontSize: tokens.typography.fontSize.xl,
        fontWeight: tokens.typography.fontWeight.bold,
        color: tokens.colors.neutral.white,
      }}>
        Custom Styled Component
      </h2>
    </div>
  );
}
```

### Available Design Tokens

#### Colors

```tsx
tokens.colors.primary      // Primary brand color
tokens.colors.neutral      // Neutral grays
tokens.colors.semantic     // Success, warning, error, info
tokens.colors.text         // Text colors
tokens.colors.background   // Background colors
tokens.colors.border       // Border colors
```

#### Typography

```tsx
tokens.typography.fontSize      // xs, sm, md, lg, xl, 2xl, 3xl, 4xl
tokens.typography.fontWeight    // normal, medium, semibold, bold
tokens.typography.lineHeight    // tight, normal, relaxed
tokens.typography.fontFamily    // primary, mono
```

#### Spacing

```tsx
tokens.spacing  // xs, sm, md, lg, xl, 2xl, 3xl, 4xl (based on 4px scale)
```

#### Shadows

```tsx
tokens.shadows  // sm, md, lg, xl (elevation system)
```

#### Border Radius

```tsx
tokens.borderRadius  // sm, md, lg, full
```

## Theming

DesignBricks supports theming through CSS custom properties:

### Creating a Custom Theme

```css
/* theme.css */
:root {
  /* Primary Colors */
  --db-color-primary-main: #2272B4;
  --db-color-primary-dark: #1A5A8C;
  --db-color-primary-light: #4A90CC;
  
  /* Text Colors */
  --db-color-text-primary: #11171C;
  --db-color-text-secondary: #5A6872;
  
  /* Background Colors */
  --db-color-background-default: #FFFFFF;
  --db-color-background-paper: #F6F7F9;
  
  /* Spacing (4px base) */
  --db-spacing-unit: 4px;
  
  /* Border Radius */
  --db-border-radius-sm: 4px;
  --db-border-radius-md: 8px;
  --db-border-radius-lg: 12px;
}

/* Dark Mode */
[data-theme="dark"] {
  --db-color-text-primary: #FFFFFF;
  --db-color-text-secondary: #B4B9BD;
  --db-color-background-default: #11171C;
  --db-color-background-paper: #1E2529;
}
```

### Applying Themes

```tsx
import React, { useState } from 'react';
import { Button, Card, Typography } from 'designbricks';
import './theme.css';

function ThemedApp() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div data-theme={theme}>
      <Card variant="elevated">
        <Typography variant="h3">Theme Switcher</Typography>
        <Button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
      </Card>
    </div>
  );
}
```

## TypeScript Support

DesignBricks is built with TypeScript and provides full type definitions:

### Component Props with Types

```tsx
import { Button, ButtonProps, Card, CardProps } from 'designbricks';

// Use component props types
const buttonProps: ButtonProps = {
  variant: 'primary',
  size: 'medium',
  onClick: () => console.log('clicked'),
};

const cardProps: CardProps = {
  variant: 'elevated',
  padding: 'large',
  clickable: true,
};

function TypedComponent() {
  return (
    <Card {...cardProps}>
      <Button {...buttonProps}>Click Me</Button>
    </Card>
  );
}
```

### Custom Component with DesignBricks Types

```tsx
import React from 'react';
import { Button, ButtonProps, Typography } from 'designbricks';

interface ActionCardProps {
  title: string;
  description: string;
  buttonProps: ButtonProps;
  onAction: () => void;
}

const ActionCard: React.FC<ActionCardProps> = ({
  title,
  description,
  buttonProps,
  onAction,
}) => {
  return (
    <div style={{ padding: '16px', border: '1px solid #e0e0e0' }}>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="body2">{description}</Typography>
      <Button {...buttonProps} onClick={onAction}>
        Take Action
      </Button>
    </div>
  );
};
```

## Accessibility

DesignBricks is built with accessibility as a core principle. All components follow WCAG 2.1 AA standards:

### Keyboard Navigation

All interactive components support keyboard navigation:

```tsx
import { Button, Modal, Tabs } from 'designbricks';

function AccessibleApp() {
  return (
    <>
      {/* Buttons support keyboard activation */}
      <Button variant="primary">
        Press Enter or Space to activate
      </Button>
      
      {/* Modals trap focus and support Escape key */}
      <Modal open={true} onClose={() => {}}>
        Modal content with focus trapping
      </Modal>
      
      {/* Tabs support arrow key navigation */}
      <Tabs defaultValue="tab1">
        <Tabs.List>
          <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </>
  );
}
```

### ARIA Attributes

Components include proper ARIA attributes automatically:

```tsx
import { Alert, Progress, TextField } from 'designbricks';

function AriaExample() {
  return (
    <>
      {/* Alerts have role="alert" */}
      <Alert severity="error">
        This error will be announced to screen readers
      </Alert>
      
      {/* Progress bars have proper ARIA labels */}
      <Progress value={75} aria-label="Loading progress" />
      
      {/* Form fields have proper associations */}
      <TextField
        label="Username"
        required
        error="Username is required"
        helperText="Choose a unique username"
      />
    </>
  );
}
```

### Focus Management

```tsx
import { useFocusTrap } from 'designbricks/lib/accessibility';
import { useRef } from 'react';

function FocusTrappedDialog() {
  const dialogRef = useRef<HTMLDivElement>(null);
  
  // Enable focus trapping for dialogs and modals
  useFocusTrap(dialogRef, {
    enabled: true,
    returnFocusOnDeactivate: true,
  });

  return (
    <div ref={dialogRef} role="dialog" aria-modal="true">
      <h2>Dialog Title</h2>
      <button>First focusable element</button>
      <button>Last focusable element</button>
    </div>
  );
}
```

## Next Steps

Now that you've learned the basics, explore these resources:

### Component Documentation

- 📚 **[Storybook Documentation](https://pulkitxchadha.github.io/DesignBricks/)** - Interactive component playground
- 📖 **[API Documentation](./API.md)** - Complete API reference
- 🎨 **[Design Tokens Guide](./DESIGN-TOKENS.md)** - Deep dive into the design system

### Real-World Examples

- 💼 **[Example Applications](../examples/README.md)** - Complete application examples
- 🧩 **[Component Patterns](./PATTERNS.md)** - Common usage patterns and best practices
- 🎯 **[Migration Guide](./MIGRATION.md)** - Migrate from other component libraries

### Advanced Topics

- ⚡ **[Performance Optimization](./PERFORMANCE.md)** - Optimize your application
- ♿ **[Accessibility Guide](./ACCESSIBILITY.md)** - Build inclusive applications
- 🔧 **[Customization Guide](./CUSTOMIZATION.md)** - Extend and customize components

### Community & Support

- 💬 **[GitHub Discussions](https://github.com/PulkitXChadha/DesignBricks/discussions)** - Ask questions and share ideas
- 🐛 **[Issue Tracker](https://github.com/PulkitXChadha/DesignBricks/issues)** - Report bugs and request features
- 🤝 **[Contributing Guide](../CONTRIBUTING.md)** - Contribute to DesignBricks

## Common Patterns

### Form Building

```tsx
import { Card, TextField, Select, Checkbox, Button, Alert } from 'designbricks';
import { useState } from 'react';

function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'user',
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to terms';
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <Card variant="outlined" padding="large">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          error={errors.name}
          fullWidth
          required
        />
        
        <TextField
          label="Email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          error={errors.email}
          fullWidth
          required
        />
        
        <Select
          label="Role"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          options={[
            { value: 'user', label: 'User' },
            { value: 'admin', label: 'Administrator' },
            { value: 'viewer', label: 'Viewer' },
          ]}
          fullWidth
        />
        
        <Checkbox
          label="I agree to the terms and conditions"
          checked={formData.agreeToTerms}
          onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
          error={!!errors.agreeToTerms}
          helperText={errors.agreeToTerms}
        />
        
        {Object.keys(errors).length > 0 && (
          <Alert severity="error">
            Please fix the errors before submitting
          </Alert>
        )}
        
        <Button variant="primary" type="submit" fullWidth>
          Submit
        </Button>
      </form>
    </Card>
  );
}
```

### Data Display

```tsx
import { Table, Badge, UserAvatar, Dropdown } from 'designbricks';

function UsersTable() {
  const users = [
    { id: 1, name: 'John Doe', role: 'Admin', status: 'active' },
    { id: 2, name: 'Jane Smith', role: 'User', status: 'active' },
    { id: 3, name: 'Bob Johnson', role: 'User', status: 'inactive' },
  ];

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>User</Table.HeaderCell>
          <Table.HeaderCell>Role</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {users.map((user) => (
          <Table.Row key={user.id}>
            <Table.Cell>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <UserAvatar name={user.name} size="small" />
                {user.name}
              </div>
            </Table.Cell>
            <Table.Cell>
              <Badge variant={user.role === 'Admin' ? 'primary' : 'default'}>
                {user.role}
              </Badge>
            </Table.Cell>
            <Table.Cell>
              <Badge variant={user.status === 'active' ? 'success' : 'neutral'}>
                {user.status}
              </Badge>
            </Table.Cell>
            <Table.Cell>
              <Dropdown>
                <Dropdown.Trigger>Actions</Dropdown.Trigger>
                <Dropdown.Menu>
                  <Dropdown.Item>Edit</Dropdown.Item>
                  <Dropdown.Item>Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
```

## Troubleshooting

### Component Styles Not Applying

Make sure you've imported the global styles:

```tsx
import 'designbricks/dist/styles/global.css';
```

### TypeScript Errors

Ensure you have the latest type definitions:

```bash
npm install --save-dev @types/react @types/react-dom
```

### Build Errors with D3 Charts

If you encounter issues with chart components, ensure your bundler supports ES modules:

```json
// tsconfig.json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "esModuleInterop": true
  }
}
```

## Getting Help

If you need assistance:

1. Check the **[FAQ](./FAQ.md)**
2. Search **[existing issues](https://github.com/PulkitXChadha/DesignBricks/issues)**
3. Ask in **[GitHub Discussions](https://github.com/PulkitXChadha/DesignBricks/discussions)**
4. Create a **[new issue](https://github.com/PulkitXChadha/DesignBricks/issues/new)**

---

**Ready to build amazing UIs? Start exploring our [component library](https://pulkitxchadha.github.io/DesignBricks/)!** 🚀

