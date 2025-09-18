# DesignBricks - Databricks Design System

A comprehensive React component library implementing the Databricks design system.

## 📦 Installation

```bash
  npm install designbricks
  or 
  yarn install designbricks
```

## 🚀 Quick Start

```tsx
import { Button, Card, Typography } from 'designbricks';

function App() {
  return (
    <Card variant="elevated">
      <Typography variant="h3">Welcome to DesignBricks</Typography>
      <Button variant="primary">Get Started</Button>
    </Card>
  );
}
```

## 📚 Components

### Foundation
- **Button** - Primary, secondary, tertiary, and danger variants with multiple sizes
- **Typography** - Consistent text styles from h1 to caption and code

### Inputs
- **TextField** - Text input with label, helper text, and error states
- **Checkbox** - Checkbox with label and indeterminate state support

### Feedback
- **Alert** - Success, info, warning, and error alerts with multiple variants

### Data Display
- **Card** - Container component with default, outlined, and elevated variants

## 🎨 Design Tokens

The design system includes comprehensive design tokens for:
- **Colors** - Primary, neutral, semantic (success, warning, error, info)
- **Typography** - Font families, sizes, weights, line heights
- **Spacing** - Consistent spacing scale based on 4px unit
- **Shadows** - Elevation system for depth
- **Border Radius** - Consistent corner rounding

## 🛠 Development

### Setup

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Watch mode for development
npm run dev
```

### Project Structure

```
designbricks/
├── src/
│   ├── components/       # React components
│   │   ├── Button/
│   │   ├── Typography/
│   │   ├── TextField/
│   │   ├── Checkbox/
│   │   ├── Alert/
│   │   └── Card/
│   ├── tokens/           # Design tokens
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   └── index.ts
│   └── index.ts          # Main export
├── example/              # Demo application
│   ├── App.tsx
│   └── App.css
├── package.json
├── tsconfig.json
└── README.md
```

## 🎯 Design Principles

1. **Rational** - Every design decision has a clear purpose
2. **Human** - Prioritize user needs and intuitive interactions
3. **Data-Focused** - Optimized for data visualization and analysis workflows
4. **Performant** - Fast loading and responsive, especially with large datasets
5. **Collaborative** - Support team-based workflows and sharing

## 📖 Component API

### Button

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
}
```

### Typography

```tsx
interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' |
            'body1' | 'body2' | 'caption' | 'overline' | 'code';
  color?: 'primary' | 'secondary' | 'disabled' |
          'error' | 'warning' | 'success' | 'info';
  align?: 'left' | 'center' | 'right' | 'justify';
  truncate?: boolean;
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
}
```

### TextField

```tsx
interface TextFieldProps {
  label?: string;
  helperText?: string;
  error?: string;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  required?: boolean;
  disabled?: boolean;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
}
```

### Checkbox

```tsx
interface CheckboxProps {
  label?: string;
  size?: 'small' | 'medium' | 'large';
  error?: boolean;
  indeterminate?: boolean;
  helperText?: string;
  disabled?: boolean;
}
```

### Alert

```tsx
interface AlertProps {
  severity?: 'success' | 'info' | 'warning' | 'error';
  variant?: 'filled' | 'outlined' | 'standard';
  icon?: ReactNode;
  title?: string;
  onClose?: () => void;
}
```

### Card

```tsx
interface CardProps {
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'none' | 'small' | 'medium' | 'large';
  clickable?: boolean;
  selected?: boolean;
}
```

## 🎨 Theming

The design system uses CSS custom properties for theming. Colors are based on the Databricks brand:

- **Primary Blue**: `#2272B4`
- **Text Primary**: `#11171C`
- **Background Light**: `#F6F7F9`

## ♿ Accessibility

All components are built with accessibility in mind:
- Proper ARIA attributes
- Keyboard navigation support
- Focus management
- Screen reader support
- WCAG 2.1 AA compliance

## 📝 License

MIT © Databricks

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## 🔗 Links

- [Design System Documentation](https://designbricks.databricks.com)
- [Storybook](https://storybook.designbricks.databricks.com)
- [GitHub Repository](https://github.com/databricks/designbricks)

---

Built with ❤️ by Pulkit Chadha