# DesignBricks Documentation

Welcome to the comprehensive documentation for DesignBricks - the Databricks Design System component library.

## 📚 Documentation Index

### Getting Started

- **[Getting Started Guide](./GETTING-STARTED.md)** - Complete guide from installation to your first component (< 30 minutes)
  - Prerequisites and installation
  - Quick start examples
  - Design tokens usage
  - TypeScript support
  - Accessibility features

### API Reference

- **[API Documentation](./API.md)** - Comprehensive component API reference
  - All components with props and examples
  - Utilities and hooks
  - Design tokens reference
  - TypeScript types

### Guides & Tutorials

- **[Real-World Examples](../examples/README.md)** - Production-ready application examples
  - User Dashboard
  - E-commerce Catalog
  - Analytics Dashboard
  - Settings Panel
  - Authentication Flow

- **[Migration Guide](./MIGRATION.md)** - Migrate from other libraries
  - From Material-UI (MUI)
  - From Ant Design
  - From Chakra UI
  - From Bootstrap React
  - Codemod scripts and automation

- **[Developer Tools](./DEVELOPER-TOOLS.md)** - Productivity tools and workflows
  - Component Generator CLI
  - Design Token Validator
  - API Documentation Generator
  - Storybook Playground
  - Performance Analysis

### Component Categories

#### Foundation Components
- **Button** - Primary, secondary, tertiary, and danger variants
- **Typography** - Consistent text styles from h1 to caption

#### Input Components
- **TextField** - Text input with validation
- **Checkbox** - Checkbox with indeterminate state
- **Select** - Dropdown select
- **SearchInput** - Search with autocomplete
- **Toggle** - Toggle switch
- **PillControl** - Multi-select pills

#### Navigation Components
- **Tabs** - Tabbed navigation
- **Sidebar** - Sidebar navigation
- **Dropdown** - Dropdown menus
- **Breadcrumbs** - Breadcrumb navigation
- **TopBar** - Top navigation bar

#### Feedback Components
- **Alert** - Success, info, warning, error messages
- **Badge** - Labels and status indicators
- **Progress** - Linear and circular progress
- **Modal** - Dialog modals
- **Notification** - Toast notifications
- **Tooltip** - Contextual tooltips

#### Data Display Components
- **Card** - Container with variants
- **Table** - Data tables
- **List** - List display
- **UserAvatar** - User avatars

#### Overlay Components
- **Popover** - Contextual popups
- **Command** - Command palette

#### Layout Components
- **Flex** - Flexbox layouts
- **Grid** - Grid layouts

#### Chart Components
- **LineChart** - Line charts
- **BarChart** - Bar charts
- **PieChart** - Pie charts
- **AreaChart** - Area charts
- **ScatterChart** - Scatter plots
- **MultiLineChart** - Multi-line charts

## 🚀 Quick Links

### For Developers

- 📖 [API Documentation](./API.md) - Full component API reference
- 🛠️ [Developer Tools](./DEVELOPER-TOOLS.md) - CLI tools and workflows
- 💡 [Getting Started](./GETTING-STARTED.md) - Quick start guide
- 🎨 [Storybook](https://pulkitxchadha.github.io/DesignBricks/) - Live component playground

### For Designers

- 🎨 Design Tokens - Color, typography, spacing system
- ♿ Accessibility - WCAG 2.1 AA compliance
- 📐 Layout System - Flexbox and Grid utilities
- 🌈 Color System - Semantic color palette

### For Product Managers

- 📊 [Real-World Examples](../examples/README.md) - Production examples
- 🔄 [Migration Guide](./MIGRATION.md) - Migration from other libraries
- 📈 Component Coverage - 37 production-ready components
- ✨ Features - Accessibility, TypeScript, Storybook

## 🎯 Common Tasks

### I want to...

**Get started quickly**
→ Read the [Getting Started Guide](./GETTING-STARTED.md)

**See components in action**
→ Check out the [Storybook](https://pulkitxchadha.github.io/DesignBricks/)

**Build a real application**
→ Explore [Real-World Examples](../examples/README.md)

**Migrate from another library**
→ Follow the [Migration Guide](./MIGRATION.md)

**Generate a new component**
→ Use the [Component Generator](./DEVELOPER-TOOLS.md#component-generator)

**Validate design tokens**
→ Run the [Token Validator](./DEVELOPER-TOOLS.md#design-token-validator)

**Check API documentation**
→ Browse the [API Reference](./API.md)

**Understand TypeScript types**
→ Review [API Documentation](./API.md) and TypeScript examples

**Ensure accessibility**
→ See [Accessibility Guide](./GETTING-STARTED.md#accessibility)

**Optimize performance**
→ Read [Performance Analysis](./DEVELOPER-TOOLS.md#performance-analysis)

## 📦 Installation

```bash
npm install designbricks
```

## 💻 Quick Example

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

## 🏗️ Project Structure

```
DesignBricks/
├── docs/                      # Documentation
│   ├── GETTING-STARTED.md     # Getting started guide
│   ├── API.md                 # API reference
│   ├── MIGRATION.md           # Migration guide
│   ├── DEVELOPER-TOOLS.md     # Developer tools
│   └── README.md              # This file
├── examples/                  # Real-world examples
│   └── README.md              # Examples overview
├── src/
│   ├── components/            # React components (37 total)
│   ├── tokens/                # Design tokens
│   ├── lib/                   # Utilities
│   │   ├── accessibility.ts   # Accessibility utilities
│   │   └── performance.ts     # Performance utilities
│   └── index.ts               # Main export
├── scripts/
│   ├── generate-component.js  # Component generator CLI
│   └── validate-tokens.js     # Token validator
└── package.json
```

## 🎨 Design System

### Design Tokens

```tsx
import { tokens } from 'designbricks';

// Colors
tokens.colors.primary.main    // #2272B4
tokens.colors.semantic.success // #00A854

// Typography
tokens.typography.fontSize.lg  // 18px
tokens.typography.fontWeight.bold // 700

// Spacing
tokens.spacing.md              // 16px
tokens.spacing.lg              // 24px

// Shadows
tokens.shadows.md              // 0 2px 4px rgba(0,0,0,0.1)

// Border Radius
tokens.borderRadius.md         // 8px
```

### Component Variants

Most components support consistent variant props:

- **variant**: `'primary' | 'secondary' | 'tertiary'`
- **size**: `'small' | 'medium' | 'large'`
- **fullWidth**: `boolean`
- **disabled**: `boolean`

## ♿ Accessibility

All components follow WCAG 2.1 AA standards:

- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ ARIA attributes
- ✅ Focus management
- ✅ Color contrast compliance
- ✅ Reduced motion support

## 🧪 Testing

Components include comprehensive test coverage:

- ✅ **2,222 tests** across 37 components
- ✅ **77.93% code coverage**
- ✅ **Zero accessibility violations**
- ✅ Unit, integration, and accessibility tests

## 🛠️ Developer Tools

```bash
# Generate new component
npm run generate:component -- MyComponent

# Validate design tokens
npm run validate:tokens

# Generate API documentation
npm run docs:generate

# Start Storybook
npm run storybook

# Run tests
npm test
```

## 📊 Features

### Production-Ready
- ✅ 37 fully tested components
- ✅ TypeScript support
- ✅ Tree-shakeable
- ✅ < 100KB gzipped

### Developer Experience
- ✅ Component generator CLI
- ✅ Design token validator
- ✅ Auto-generated API docs
- ✅ Storybook playground

### Quality Assurance
- ✅ 2,222 comprehensive tests
- ✅ CI/CD pipeline
- ✅ Automated accessibility testing
- ✅ Security scanning

### Accessibility
- ✅ WCAG 2.1 AA compliant
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Focus management utilities

## 🤝 Contributing

We welcome contributions! See:

- [Contributing Guide](../CONTRIBUTING.md)
- [Code of Conduct](../CODE_OF_CONDUCT.md)
- [Development Guide](./DEVELOPER-TOOLS.md)

## 📝 License

MIT License - see [LICENSE](../LICENSE) file

## 🔗 Links

- 🏠 [Homepage](https://github.com/PulkitXChadha/DesignBricks)
- 📖 [Storybook](https://pulkitxchadha.github.io/DesignBricks/)
- 💬 [Discussions](https://github.com/PulkitXChadha/DesignBricks/discussions)
- 🐛 [Issue Tracker](https://github.com/PulkitXChadha/DesignBricks/issues)
- 📦 [NPM Package](https://www.npmjs.com/package/designbricks)

## 🆘 Getting Help

Need help? Here's how to get support:

1. 📖 Check the [Getting Started Guide](./GETTING-STARTED.md)
2. 🔍 Search [existing issues](https://github.com/PulkitXChadha/DesignBricks/issues)
3. 💬 Ask in [GitHub Discussions](https://github.com/PulkitXChadha/DesignBricks/discussions)
4. 🐛 [Create a new issue](https://github.com/PulkitXChadha/DesignBricks/issues/new)

## 📈 Project Status

- **Phase 1**: ✅ Testing Infrastructure (100% Complete)
- **Phase 2**: ✅ CI/CD & Automation (100% Complete)
- **Phase 3**: ✅ Performance & Accessibility (100% Complete)
- **Phase 4**: ✅ Developer Experience (100% Complete)
- **Phase 5**: 🔜 Community & Ecosystem (Upcoming)

---

**Ready to get started? Jump to the [Getting Started Guide](./GETTING-STARTED.md)!** 🚀

