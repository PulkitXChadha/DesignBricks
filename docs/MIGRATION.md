# Migration Guide

This guide helps you migrate to DesignBricks from other popular component libraries.

## Table of Contents

1. [Material-UI (MUI) to DesignBricks](#material-ui-mui-to-designbricks)
2. [Ant Design to DesignBricks](#ant-design-to-designbricks)
3. [Chakra UI to DesignBricks](#chakra-ui-to-designbricks)
4. [Bootstrap React to DesignBricks](#bootstrap-react-to-designbricks)
5. [General Migration Strategy](#general-migration-strategy)
6. [Breaking Changes](#breaking-changes)
7. [Codemod Scripts](#codemod-scripts)

---

## Material-UI (MUI) to DesignBricks

### Installation

```bash
# Remove MUI
npm uninstall @mui/material @emotion/react @emotion/styled

# Install DesignBricks
npm install designbricks
```

### Component Mapping

| Material-UI | DesignBricks | Notes |
|-------------|--------------|-------|
| `Button` | `Button` | Similar API |
| `TextField` | `TextField` | Prop names match |
| `Checkbox` | `Checkbox` | Direct replacement |
| `Alert` | `Alert` | Similar severity prop |
| `Card` | `Card` | Equivalent variants |
| `Typography` | `Typography` | Similar variants |
| `Dialog` | `Modal` | Renamed component |
| `Select` | `Select` | Simplified API |
| `CircularProgress` | `Progress` | Use variant prop |
| `Tabs` | `Tabs` | Similar compound component |
| `Drawer` | `Sidebar` | Similar functionality |
| `Table` | `Table` | Compound component pattern |
| `Chip` | `Badge` | Similar use cases |
| `Avatar` | `UserAvatar` | Enhanced features |

### Migration Examples

#### Button

```tsx
// Before (MUI)
import Button from '@mui/material/Button';

<Button variant="contained" color="primary" size="large">
  Click Me
</Button>

// After (DesignBricks)
import { Button } from 'designbricks';

<Button variant="primary" size="large">
  Click Me
</Button>
```

#### TextField

```tsx
// Before (MUI)
import TextField from '@mui/material/TextField';

<TextField
  label="Email"
  helperText="Enter your email"
  error={!!errors.email}
  helperText={errors.email}
  fullWidth
/>

// After (DesignBricks)
import { TextField } from 'designbricks';

<TextField
  label="Email"
  helperText="Enter your email"
  error={errors.email}
  fullWidth
/>
```

#### Dialog → Modal

```tsx
// Before (MUI)
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

<Dialog open={open} onClose={handleClose}>
  <DialogTitle>Title</DialogTitle>
  <DialogContent>Content</DialogContent>
</Dialog>

// After (DesignBricks)
import { Modal } from 'designbricks';

<Modal open={open} onClose={handleClose} title="Title">
  Content
</Modal>
```

#### Typography

```tsx
// Before (MUI)
import Typography from '@mui/material/Typography';

<Typography variant="h1" color="primary">
  Heading
</Typography>

// After (DesignBricks)
import { Typography } from 'designbricks';

<Typography variant="h1" color="primary">
  Heading
</Typography>
```

### Theme Migration

```tsx
// Before (MUI)
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#2272B4' },
  },
});

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>

// After (DesignBricks)
// Use CSS custom properties
:root {
  --db-color-primary-main: #2272B4;
}

<App />
```

---

## Ant Design to DesignBricks

### Installation

```bash
# Remove Ant Design
npm uninstall antd

# Install DesignBricks
npm install designbricks
```

### Component Mapping

| Ant Design | DesignBricks | Notes |
|------------|--------------|-------|
| `Button` | `Button` | Different variant names |
| `Input` | `TextField` | Enhanced with label |
| `Checkbox` | `Checkbox` | Similar API |
| `Alert` | `Alert` | Type → severity |
| `Card` | `Card` | Similar structure |
| `Typography.Title` | `Typography` | Use variant prop |
| `Modal` | `Modal` | Similar API |
| `Select` | `Select` | Simplified options |
| `Spin` | `Progress` | Loading indicator |
| `Tabs` | `Tabs` | Similar pattern |
| `Drawer` | `Sidebar` | Navigation focused |
| `Table` | `Table` | Compound component |
| `Tag` | `Badge` | Visual labels |
| `Avatar` | `UserAvatar` | User representation |

### Migration Examples

#### Button

```tsx
// Before (Ant Design)
import { Button } from 'antd';

<Button type="primary" size="large">
  Click Me
</Button>

// After (DesignBricks)
import { Button } from 'designbricks';

<Button variant="primary" size="large">
  Click Me
</Button>
```

#### Input → TextField

```tsx
// Before (Ant Design)
import { Input, Form } from 'antd';

<Form.Item label="Email" help="Enter your email">
  <Input placeholder="Email" />
</Form.Item>

// After (DesignBricks)
import { TextField } from 'designbricks';

<TextField
  label="Email"
  helperText="Enter your email"
  placeholder="Email"
/>
```

#### Alert

```tsx
// Before (Ant Design)
import { Alert } from 'antd';

<Alert type="success" message="Success" description="Operation completed" />

// After (DesignBricks)
import { Alert } from 'designbricks';

<Alert severity="success" title="Success">
  Operation completed
</Alert>
```

---

## Chakra UI to DesignBricks

### Installation

```bash
# Remove Chakra UI
npm uninstall @chakra-ui/react @emotion/react @emotion/styled framer-motion

# Install DesignBricks
npm install designbricks
```

### Component Mapping

| Chakra UI | DesignBricks | Notes |
|-----------|--------------|-------|
| `Button` | `Button` | Similar variants |
| `Input` | `TextField` | Different structure |
| `Checkbox` | `Checkbox` | Similar API |
| `Alert` | `Alert` | Status → severity |
| `Box` | Use native div | CSS-in-JS → CSS |
| `Text` | `Typography` | Use variant prop |
| `Modal` | `Modal` | Compound → single component |
| `Select` | `Select` | Simplified |
| `Spinner` | `Progress` | Loading states |
| `Tabs` | `Tabs` | Similar pattern |
| `Drawer` | `Sidebar` | Navigation |
| `Table` | `Table` | Different structure |
| `Badge` | `Badge` | Similar use |
| `Avatar` | `UserAvatar` | Enhanced |

### Migration Examples

#### Button

```tsx
// Before (Chakra UI)
import { Button } from '@chakra-ui/react';

<Button colorScheme="blue" size="lg">
  Click Me
</Button>

// After (DesignBricks)
import { Button } from 'designbricks';

<Button variant="primary" size="large">
  Click Me
</Button>
```

#### Box Styling

```tsx
// Before (Chakra UI)
import { Box } from '@chakra-ui/react';

<Box bg="blue.500" p={4} borderRadius="md">
  Content
</Box>

// After (DesignBricks)
import { tokens } from 'designbricks';

<div style={{
  backgroundColor: tokens.colors.primary.main,
  padding: tokens.spacing.md,
  borderRadius: tokens.borderRadius.md,
}}>
  Content
</div>

// Or use Card component
import { Card } from 'designbricks';

<Card variant="elevated" padding="medium">
  Content
</Card>
```

---

## Bootstrap React to DesignBricks

### Installation

```bash
# Remove React Bootstrap
npm uninstall react-bootstrap bootstrap

# Install DesignBricks
npm install designbricks
```

### Component Mapping

| React Bootstrap | DesignBricks | Notes |
|-----------------|--------------|-------|
| `Button` | `Button` | Different variants |
| `Form.Control` | `TextField` | Enhanced features |
| `Form.Check` | `Checkbox` | Simplified |
| `Alert` | `Alert` | Similar variants |
| `Card` | `Card` | Similar structure |
| `Modal` | `Modal` | Similar API |
| `Dropdown` | `Dropdown` | Enhanced |
| `Spinner` | `Progress` | Loading states |
| `Tabs` | `Tabs` | Similar |
| `Navbar` | `TopBar` | Navigation |
| `Table` | `Table` | Enhanced |
| `Badge` | `Badge` | Similar |
| No equivalent | `UserAvatar` | New component |

### Migration Examples

#### Button

```tsx
// Before (React Bootstrap)
import Button from 'react-bootstrap/Button';

<Button variant="primary" size="lg">
  Click Me
</Button>

// After (DesignBricks)
import { Button } from 'designbricks';

<Button variant="primary" size="large">
  Click Me
</Button>
```

#### Form.Control → TextField

```tsx
// Before (React Bootstrap)
import Form from 'react-bootstrap/Form';

<Form.Group>
  <Form.Label>Email</Form.Label>
  <Form.Control type="email" placeholder="Enter email" />
  <Form.Text>We'll never share your email.</Form.Text>
</Form.Group>

// After (DesignBricks)
import { TextField } from 'designbricks';

<TextField
  label="Email"
  type="email"
  placeholder="Enter email"
  helperText="We'll never share your email."
/>
```

---

## General Migration Strategy

### Step 1: Audit Your Current Components

Create an inventory of all components you're using:

```bash
# Find all component imports
grep -r "from '@mui/material" src/
grep -r "from 'antd'" src/
grep -r "from '@chakra-ui/react'" src/
```

### Step 2: Create a Migration Plan

Prioritize components by usage frequency:

1. Most used components first
2. Simple components before complex ones
3. Leaf components before containers

### Step 3: Gradual Migration

You can run DesignBricks alongside your existing library:

```tsx
// During migration
import { Button as MuiButton } from '@mui/material';
import { Button as DBButton } from 'designbricks';

// Old code
<MuiButton>Old Button</MuiButton>

// New code
<DBButton>New Button</DBButton>
```

### Step 4: Update Styling

Replace theme provider with CSS custom properties:

```css
/* theme.css */
:root {
  --db-color-primary-main: #2272B4;
  --db-color-primary-dark: #1A5A8C;
  --db-spacing-unit: 4px;
  /* ... more tokens */
}
```

### Step 5: Update Tests

Update component selectors in tests:

```tsx
// Before
const button = screen.getByRole('button', { name: /submit/i });

// After (same API, just verify)
const button = screen.getByRole('button', { name: /submit/i });
```

### Step 6: Remove Old Dependencies

After complete migration:

```bash
npm uninstall @mui/material @emotion/react @emotion/styled
# or
npm uninstall antd
# or
npm uninstall @chakra-ui/react
```

---

## Breaking Changes

### Version 0.1.x → 0.2.x (Upcoming)

#### Renamed Props

- `Button`: `color` → `variant`
- `Alert`: `type` → `severity`
- `Modal`: `visible` → `open`

#### Removed Props

- `Button`: Removed `rounded` (use `borderRadius` token)
- `Card`: Removed `shadow` (use `variant="elevated"`)

#### Changed Defaults

- `Button`: Default size changed from `large` to `medium`
- `Modal`: Default size changed from `large` to `medium`

---

## Codemod Scripts

We provide codemod scripts to automate common migrations:

### Install Codemod

```bash
npx @designbricks/codemod <transform> <path>
```

### Available Transforms

#### MUI to DesignBricks

```bash
npx @designbricks/codemod mui-to-designbricks src/
```

This will:
- Update import statements
- Rename components (Dialog → Modal)
- Update prop names (contained → primary)
- Convert theme provider to CSS custom properties

#### Ant Design to DesignBricks

```bash
npx @designbricks/codemod antd-to-designbricks src/
```

#### Chakra UI to DesignBricks

```bash
npx @designbricks/codemod chakra-to-designbricks src/
```

### Manual Review

Always review codemod changes:

```bash
git diff
```

Some changes require manual intervention:
- Complex theme customizations
- Custom component compositions
- Advanced styling patterns

---

## Common Issues

### Issue: Styles Not Applying

**Solution**: Import global styles

```tsx
import 'designbricks/dist/styles/global.css';
```

### Issue: TypeScript Errors

**Solution**: Update `tsconfig.json`

```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "esModuleInterop": true
  }
}
```

### Issue: Missing Icons

**Solution**: DesignBricks doesn't bundle icons. Use your preferred icon library:

```tsx
import { Button } from 'designbricks';
import { SaveIcon } from 'your-icon-library';

<Button iconBefore={<SaveIcon />}>
  Save
</Button>
```

### Issue: Animation Differences

**Solution**: DesignBricks uses CSS animations. Adjust timing if needed:

```css
.your-component {
  transition-duration: 200ms; /* Adjust as needed */
}
```

---

## Migration Checklist

- [ ] Audit current component usage
- [ ] Review component mapping table
- [ ] Install DesignBricks
- [ ] Create migration branch
- [ ] Migrate simple components first
- [ ] Update imports
- [ ] Update prop names
- [ ] Replace theme provider with CSS custom properties
- [ ] Update tests
- [ ] Review accessibility
- [ ] Test in all browsers
- [ ] Remove old dependencies
- [ ] Update documentation

---

## Getting Help

Need assistance with migration?

- 💬 [GitHub Discussions](https://github.com/PulkitXChadha/DesignBricks/discussions)
- 🐛 [Report Migration Issues](https://github.com/PulkitXChadha/DesignBricks/issues/new?labels=migration)
- 📖 [Read the Docs](./GETTING-STARTED.md)

---

## Success Stories

_Have you successfully migrated? Share your story!_

---

**Next Steps:**
- Review [Getting Started Guide](./GETTING-STARTED.md)
- Explore [API Documentation](./API.md)
- Try [Real-World Examples](../examples/README.md)

