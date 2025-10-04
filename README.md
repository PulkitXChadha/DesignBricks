# DesignBricks - Databricks Extended Design System


> **Note**: [@databricks/design-system](https://www.npmjs.com/package/@databricks/design-system) is the official Databricks Design System package.  
DesignBricks is an extended, community-driven implementation offering additional features and components.

A React component library implementing the Databricks design system.

## 📊 Project Status

✅ **Phase 1-4 Complete** (80% of improvement plan)  
🎉 **2,222 tests passing** | **80%+ code coverage** | **37 components**  
📚 **Comprehensive documentation** | 🛠️ **Developer tools** | ♿ **WCAG 2.1 AA**

[View Full Project Plan →](./project_plan/TEAM-IMPROVEMENT-PLAN.md)

## 📦 Installation

```bash
npm install designbricks
# or
yarn add designbricks
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

**New to DesignBricks?** Check out our [Getting Started Guide](./docs/GETTING-STARTED.md) for a comprehensive tutorial (< 30 minutes).

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

### Quick Start

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Run tests
npm test

# Build the library
npm run build
```

### Developer Tools 🆕

```bash
# Generate new component
npm run generate:component -- MyComponent

# Validate design tokens
npm run validate:tokens

# Generate API documentation
npm run docs:generate

# Check CI locally (validates all GitHub Actions steps)
npm run check-ci          # Full check with auto-fix
npm run check-ci:quick    # Fast check (no tests/security)
npm run precommit         # Pre-commit validation
```

[Learn more about Developer Tools →](./docs/DEVELOPER-TOOLS.md) | [CI Check Guide →](./docs/CI-CHECK.md)

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

## 📚 Documentation

- 📖 **[Getting Started](./docs/GETTING-STARTED.md)** - Complete onboarding guide
- 📋 **[API Documentation](./docs/API.md)** - Full component reference
- 🔄 **[Migration Guide](./docs/MIGRATION.md)** - Migrate from MUI, Ant Design, Chakra, Bootstrap
- 🛠️ **[Developer Tools](./docs/DEVELOPER-TOOLS.md)** - CLI tools and workflows
- 💡 **[Real-World Examples](./examples/README.md)** - 5 production-ready applications
- 🎨 **[Storybook](https://pulkitxchadha.github.io/DesignBricks/)** - Interactive playground

## 🤝 Contributing

Contributions are welcome! See our [Contributing Guide](./CONTRIBUTING.md).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Storybook](https://pulkitxchadha.github.io/DesignBricks)
- [GitHub Repository](https://github.com/PulkitXChadha/DesignBricks)

---

Built with ❤️ by Pulkit Chadha