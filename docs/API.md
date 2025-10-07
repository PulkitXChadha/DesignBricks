# DesignBricks API Documentation

This document provides a comprehensive reference for all components, utilities, and design tokens available in DesignBricks.

## Quick Navigation

- [Foundation Components](#foundation-components)
- [Input Components](#input-components)
- [Navigation Components](#navigation-components)
- [Feedback Components](#feedback-components)
- [Data Display Components](#data-display-components)
- [Overlay Components](#overlay-components)
- [Layout Components](#layout-components)
- [Chart Components](#chart-components)
- [Utilities](#utilities)
- [Design Tokens](#design-tokens)

---

## Foundation Components

### Button

A versatile button component with multiple variants and sizes.

```tsx
import { Button } from 'designbricks';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'tertiary' \| 'danger'` | `'primary'` | Visual style variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `fullWidth` | `boolean` | `false` | Whether button takes full container width |
| `loading` | `boolean` | `false` | Shows loading spinner |
| `disabled` | `boolean` | `false` | Disables button interaction |
| `iconBefore` | `ReactNode` | - | Icon displayed before text |
| `iconAfter` | `ReactNode` | - | Icon displayed after text |
| `onClick` | `(event: MouseEvent) => void` | - | Click handler |

#### Examples

```tsx
// Primary button
<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>

// Loading state
<Button variant="primary" loading>
  Processing...
</Button>

// With icon
<Button variant="secondary" iconBefore={<Icon />}>
  Save
</Button>

// Full width
<Button variant="primary" fullWidth>
  Submit
</Button>
```

---

### Typography

Text component with consistent typographic styles.

```tsx
import { Typography } from 'designbricks';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6' \| 'body1' \| 'body2' \| 'caption' \| 'overline' \| 'code'` | `'body1'` | Typography variant |
| `color` | `'primary' \| 'secondary' \| 'disabled' \| 'error' \| 'warning' \| 'success' \| 'info'` | `'primary'` | Text color |
| `align` | `'left' \| 'center' \| 'right' \| 'justify'` | `'left'` | Text alignment |
| `truncate` | `boolean` | `false` | Truncate with ellipsis |
| `weight` | `'normal' \| 'medium' \| 'semibold' \| 'bold'` | - | Font weight override |

#### Examples

```tsx
// Heading
<Typography variant="h1">Page Title</Typography>

// Body text with color
<Typography variant="body1" color="secondary">
  Description text
</Typography>

// Truncated text
<Typography variant="body2" truncate>
  This is a very long text that will be truncated with ellipsis...
</Typography>
```

---

## Input Components

### TextField

Text input field with label, helper text, and error states.

```tsx
import { TextField } from 'designbricks';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Input label |
| `helperText` | `string` | - | Helper text below input |
| `error` | `string` | - | Error message |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Input size |
| `fullWidth` | `boolean` | `false` | Full container width |
| `required` | `boolean` | `false` | Required field indicator |
| `disabled` | `boolean` | `false` | Disabled state |
| `iconBefore` | `ReactNode` | - | Icon before input |
| `iconAfter` | `ReactNode` | - | Icon after input |
| `type` | `string` | `'text'` | Input type (text, email, password, etc.) |
| `value` | `string` | - | Controlled value |
| `onChange` | `(event: ChangeEvent) => void` | - | Change handler |

#### Examples

```tsx
// Basic text field
<TextField
  label="Username"
  helperText="Choose a unique username"
/>

// With error
<TextField
  label="Email"
  error="Invalid email address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

// Required field
<TextField
  label="Password"
  type="password"
  required
  fullWidth
/>
```

---

### Checkbox

Checkbox input with label and indeterminate state support.

```tsx
import { Checkbox } from 'designbricks';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Checkbox label |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Checkbox size |
| `error` | `boolean` | `false` | Error state |
| `indeterminate` | `boolean` | `false` | Indeterminate state |
| `helperText` | `string` | - | Helper text |
| `disabled` | `boolean` | `false` | Disabled state |
| `checked` | `boolean` | - | Checked state |
| `onChange` | `(event: ChangeEvent) => void` | - | Change handler |

#### Examples

```tsx
// Basic checkbox
<Checkbox label="I agree to terms" />

// Indeterminate state
<Checkbox
  label="Select all"
  indeterminate={someSelected && !allSelected}
  checked={allSelected}
  onChange={handleSelectAll}
/>
```

---

### Select

Dropdown select component with options.

```tsx
import { Select } from 'designbricks';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Select label |
| `options` | `Array<{value: string, label: string}>` | - | Select options |
| `value` | `string` | - | Selected value |
| `onChange` | `(event: ChangeEvent) => void` | - | Change handler |
| `placeholder` | `string` | - | Placeholder text |
| `error` | `string` | - | Error message |
| `helperText` | `string` | - | Helper text |
| `fullWidth` | `boolean` | `false` | Full width |
| `disabled` | `boolean` | `false` | Disabled state |

#### Examples

```tsx
<Select
  label="Country"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
  ]}
  value={country}
  onChange={(e) => setCountry(e.target.value)}
/>
```

---

### SearchInput

Search input with built-in search icon and clear button.

```tsx
import { SearchInput } from 'designbricks';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placeholder` | `string` | `'Search...'` | Placeholder text |
| `value` | `string` | - | Search value |
| `onChange` | `(value: string) => void` | - | Change handler |
| `onSearch` | `(value: string) => void` | - | Search handler |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Input size |
| `fullWidth` | `boolean` | `false` | Full width |
| `loading` | `boolean` | `false` | Loading state |

#### Examples

```tsx
<SearchInput
  placeholder="Search users..."
  value={searchTerm}
  onChange={setSearchTerm}
  onSearch={handleSearch}
/>
```

---

### Toggle

Toggle switch component.

```tsx
import { Toggle } from 'designbricks';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | - | Toggle state |
| `onChange` | `(checked: boolean) => void` | - | Change handler |
| `label` | `string` | - | Toggle label |
| `disabled` | `boolean` | `false` | Disabled state |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Toggle size |

---

## Feedback Components

### Alert

Alert component for displaying messages with different severity levels.

```tsx
import { Alert } from 'designbricks';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `severity` | `'success' \| 'info' \| 'warning' \| 'error'` | `'info'` | Alert severity |
| `variant` | `'filled' \| 'outlined' \| 'standard'` | `'standard'` | Visual variant |
| `icon` | `ReactNode` | - | Custom icon |
| `title` | `string` | - | Alert title |
| `onClose` | `() => void` | - | Close handler |

#### Examples

```tsx
// Success alert
<Alert severity="success" title="Success!">
  Your changes have been saved.
</Alert>

// Error alert with close
<Alert
  severity="error"
  onClose={() => setShowAlert(false)}
>
  An error occurred while processing your request.
</Alert>
```

---

### Badge

Small badge component for labels and counts.

```tsx
import { Badge } from 'designbricks';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'info' \| 'neutral'` | `'primary'` | Badge variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Badge size |
| `dot` | `boolean` | `false` | Show as dot |

---

### Progress

Progress indicator component (linear and circular).

```tsx
import { Progress } from 'designbricks';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'linear' \| 'circular'` | `'linear'` | Progress type |
| `value` | `number` | - | Progress value (0-100) |
| `indeterminate` | `boolean` | `false` | Indeterminate state |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Size |
| `color` | `'primary' \| 'secondary'` | `'primary'` | Color |

---

### Modal

Modal dialog component.

```tsx
import { Modal } from 'designbricks';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | - | Modal visibility |
| `onClose` | `() => void` | - | Close handler |
| `title` | `string` | - | Modal title |
| `size` | `'small' \| 'medium' \| 'large' \| 'fullscreen'` | `'medium'` | Modal size |
| `closeOnOverlayClick` | `boolean` | `true` | Close on overlay click |
| `showCloseButton` | `boolean` | `true` | Show close button |

---

## Data Display Components

### Card

Container component with variants.

```tsx
import { Card } from 'designbricks';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'outlined' \| 'elevated'` | `'default'` | Card variant |
| `padding` | `'none' \| 'small' \| 'medium' \| 'large'` | `'medium'` | Card padding |
| `clickable` | `boolean` | `false` | Clickable style |
| `selected` | `boolean` | `false` | Selected state |

---

### Table

Table component for data display.

```tsx
import { Table } from 'designbricks';
```

#### Sub-components

- `Table.Header` - Table header section
- `Table.Body` - Table body section
- `Table.Row` - Table row
- `Table.HeaderCell` - Header cell
- `Table.Cell` - Data cell

#### Examples

```tsx
<Table>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Name</Table.HeaderCell>
      <Table.HeaderCell>Email</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>John Doe</Table.Cell>
      <Table.Cell>john@example.com</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
```

---

## Utilities

### Design Tokens

```tsx
import { tokens } from 'designbricks';
```

Access design system tokens:

```tsx
tokens.colors        // Color palette
tokens.typography    // Typography system
tokens.spacing       // Spacing scale
tokens.shadows       // Shadow system
tokens.borderRadius  // Border radius values
```

### Accessibility Utilities

```tsx
import { useFocusTrap, useAnnouncement, useKeyboardNavigation } from 'designbricks/lib/accessibility';
```

#### useFocusTrap

Trap focus within a component.

```tsx
const dialogRef = useRef<HTMLDivElement>(null);
useFocusTrap(dialogRef, {
  enabled: true,
  returnFocusOnDeactivate: true,
});
```

#### useAnnouncement

Announce messages to screen readers.

```tsx
const announce = useAnnouncement();
announce('Form submitted successfully', 'polite');
```

#### useKeyboardNavigation

Manage keyboard navigation with roving tabindex.

```tsx
const { activeIndex, handleKeyDown } = useKeyboardNavigation({
  itemCount: items.length,
  onSelect: (index) => handleSelect(items[index]),
});
```

### Performance Utilities

```tsx
import { usePerformanceMonitor, useDebounce, useThrottle } from 'designbricks/lib/performance';
```

#### usePerformanceMonitor

Monitor component performance.

```tsx
const { startMeasure, endMeasure, getMetrics } = usePerformanceMonitor('MyComponent');

useEffect(() => {
  startMeasure('render');
  // Component logic
  endMeasure('render');
}, []);
```

#### useDebounce

Debounce a value.

```tsx
const debouncedValue = useDebounce(searchTerm, 300);
```

#### useThrottle

Throttle a callback.

```tsx
const throttledScroll = useThrottle(handleScroll, 100);
```

---

## Auto-Generated Documentation

For complete, auto-generated API documentation including all type definitions and internal APIs, run:

```bash
npm run docs:generate
```

This will generate comprehensive API documentation in the `docs/api` directory.

---

## Contributing

Found an issue with the documentation? Please [open an issue](https://github.com/PulkitXChadha/DesignBricks/issues) or submit a pull request.

