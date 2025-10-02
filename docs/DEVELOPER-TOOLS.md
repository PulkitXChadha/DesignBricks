# Developer Tools Guide

DesignBricks provides a comprehensive set of developer tools to enhance productivity and streamline your development workflow.

## Table of Contents

1. [Component Generator](#component-generator)
2. [Design Token Validator](#design-token-validator)
3. [API Documentation Generator](#api-documentation-generator)
4. [Storybook Playground](#storybook-playground)
5. [Performance Analysis](#performance-analysis)
6. [Code Quality Tools](#code-quality-tools)

---

## Component Generator

Quickly scaffold new components with all required files and boilerplate code.

### Usage

```bash
# Generate a new component
npm run generate:component -- MyComponent

# Generate with category
npm run generate:component -- MyComponent --category Foundation
```

### Interactive Mode

If you don't specify a category, the generator will prompt you:

```bash
$ npm run generate:component -- DatePicker

📦 Available categories:
  1. Foundation
  2. Inputs
  3. Navigation
  4. Feedback
  5. Data Display
  6. Overlays
  7. Layout
  8. Charts
  9. Utilities

Select category (1-9): 2

✅ Created: DatePicker.tsx
✅ Created: DatePicker.css
✅ Created: DatePicker.stories.tsx
✅ Created: DatePicker.test.tsx
✅ Created: index.ts

🎉 Component "DatePicker" generated successfully!
📁 Location: src/components/DatePicker/
```

### Generated Files

The generator creates a complete component structure:

```
src/components/MyComponent/
├── MyComponent.tsx          # Component implementation
├── MyComponent.css          # Component styles
├── MyComponent.stories.tsx  # Storybook stories
├── MyComponent.test.tsx     # Jest tests with accessibility
└── index.ts                 # Exports
```

### Generated Component Template

Each generated component includes:

- **TypeScript Interface**: Fully typed props with JSDoc comments
- **Variants and Sizes**: Primary/secondary variants and small/medium/large sizes
- **Accessibility**: Proper ARIA attributes and keyboard support
- **Styling**: CSS with variants, sizes, and states (hover, focus, disabled)
- **Stories**: Comprehensive Storybook stories covering all props
- **Tests**: Unit tests and accessibility tests with jest-axe
- **Documentation**: JSDoc comments for API documentation

### Example Generated Component

```tsx
// MyComponent.tsx
import React from 'react';
import clsx from 'clsx';
import './MyComponent.css';

export interface MyComponentProps {
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Component children
   */
  children?: React.ReactNode;
  
  /**
   * Component variant
   */
  variant?: 'primary' | 'secondary';
  
  /**
   * Component size
   */
  size?: 'small' | 'medium' | 'large';
}

/**
 * MyComponent component
 * 
 * @example
 * ```tsx
 * <MyComponent variant="primary" size="medium">
 *   Content
 * </MyComponent>
 * ```
 */
export const MyComponent: React.FC<MyComponentProps> = ({
  className,
  children,
  variant = 'primary',
  size = 'medium',
  ...props
}) => {
  const classes = clsx(
    'db-mycomponent',
    `db-mycomponent--${variant}`,
    `db-mycomponent--${size}`,
    className
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
```

### Next Steps After Generation

1. **Export Component**: Update `src/index.ts`:
   ```tsx
   export { MyComponent } from './components/MyComponent';
   export type { MyComponentProps } from './components/MyComponent';
   ```

2. **Customize Implementation**: Modify `MyComponent.tsx` with your logic

3. **Add Styles**: Update `MyComponent.css` with your design

4. **Update Stories**: Enhance `MyComponent.stories.tsx` with more examples

5. **Run Tests**: Test your component:
   ```bash
   npm test -- MyComponent
   ```

6. **View in Storybook**: See your component in action:
   ```bash
   npm run storybook
   ```

---

## Design Token Validator

Validate design tokens for consistency, accessibility, and best practices.

### Usage

```bash
npm run validate:tokens
```

### What It Validates

#### 1. Color Tokens
- ✅ Required color groups present (primary, neutral, semantic, text, background, border)
- ✅ Valid hex color format (#RRGGBB or #RGB)
- ✅ WCAG 2.1 AA contrast ratios for text colors
- ⚠️ Warns about low contrast combinations

#### 2. Typography Tokens
- ✅ Required properties (fontSize, fontWeight, lineHeight, fontFamily)
- ✅ Font sizes within reasonable range (12px - 96px)
- ✅ Valid font weight values
- ✅ Proper format (pixels for sizes)
- ⚠️ Warns about accessibility issues

#### 3. Spacing Tokens
- ✅ Required spacing sizes (xs, sm, md, lg, xl)
- ✅ Values are multiples of base unit (4px)
- ✅ Proper format validation
- ⚠️ Warns about inconsistent spacing

#### 4. Shadow Tokens
- ✅ Required shadow sizes (sm, md, lg)
- ✅ Valid shadow syntax
- ✅ Non-empty values

#### 5. Border Radius Tokens
- ✅ Required sizes (sm, md, lg)
- ✅ Proper format (pixels or 'full')
- ✅ Consistent values

### Example Output

```bash
$ npm run validate:tokens

🔍 Validating Design Tokens...

✅ Token file loaded successfully

📋 Validating colors...
   ✅ All colors tokens are valid

📋 Validating typography...
   ⚠️  1 warning(s):
      - Font size too small: typography.fontSize.xs = 10px (minimum: 12px)

📋 Validating spacing...
   ✅ All spacing tokens are valid

📋 Validating shadows...
   ✅ All shadows tokens are valid

📋 Validating borderradius...
   ✅ All borderradius tokens are valid

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 Validation Summary

⚠️  Total Warnings: 1

Consider addressing the warnings for better design token quality.
```

### Integration with CI/CD

Add to your CI pipeline:

```yaml
# .github/workflows/ci.yml
- name: Validate Design Tokens
  run: npm run validate:tokens
```

### Custom Validation Rules

Extend validation by modifying `scripts/validate-tokens.js`:

```javascript
const RULES = {
  colors: {
    required: ['primary', 'secondary', 'custom'], // Add custom requirements
    hexPattern: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
  },
  // ... more rules
};
```

---

## API Documentation Generator

Generate comprehensive API documentation from TypeScript source code.

### Usage

```bash
# Generate documentation
npm run docs:generate

# Generate and serve documentation
npm run docs:build
npm run docs:serve
```

### Access Documentation

After running `docs:serve`, open: http://localhost:8080

### What's Generated

- **Component API Reference**: All props with types and descriptions
- **Utility Functions**: Accessibility and performance utilities
- **Design Tokens**: Complete token system documentation
- **Type Definitions**: TypeScript interfaces and types
- **Examples**: Usage examples from JSDoc comments

### Configuration

Customize documentation generation in `typedoc.json`:

```json
{
  "$schema": "https://typedoc.org/schema.json",
  "entryPoints": ["./src/index.ts"],
  "out": "./docs/api",
  "plugin": ["typedoc-plugin-markdown"],
  "excludePrivate": true,
  "excludeProtected": true,
  "categorizeByGroup": true
}
```

### GitHub Pages Integration

Deploy documentation to GitHub Pages:

```yaml
# .github/workflows/docs.yml
name: Deploy Documentation

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run docs:build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./docs/api
```

---

## Storybook Playground

Interactive component development environment.

### Usage

```bash
# Start Storybook
npm run storybook

# Build static Storybook
npm run build-storybook
```

### Features

1. **Interactive Component Explorer**
   - Live component playground
   - Prop controls for real-time updates
   - Multiple variants and states

2. **Accessibility Testing**
   - Built-in a11y addon
   - WCAG compliance checks
   - Real-time accessibility violations

3. **Responsive Design Testing**
   - Viewport addon for mobile/tablet/desktop testing
   - Custom viewport configurations

4. **Documentation**
   - Auto-generated component docs
   - MDX support for rich documentation
   - Code snippets with syntax highlighting

### Writing Stories

```tsx
// MyComponent.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from './MyComponent';

const meta: Meta<typeof MyComponent> = {
  title: 'Components/MyComponent',
  component: MyComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile component for...',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Visual variant',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MyComponent>;

export const Default: Story = {
  args: {
    children: 'Default MyComponent',
    variant: 'primary',
  },
};

export const WithCustomContent: Story = {
  args: {
    children: (
      <div>
        <h3>Custom Content</h3>
        <p>Complex example</p>
      </div>
    ),
  },
};
```

### Accessibility Testing in Storybook

Every story automatically runs accessibility checks:

```tsx
// Accessibility addon shows violations
export const AccessibleExample: Story = {
  args: {
    children: 'Accessible content',
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
        ],
      },
    },
  },
};
```

---

## Performance Analysis

Analyze and optimize bundle size and performance.

### Bundle Size Analysis

```bash
# Check bundle size
npm run size

# See what's in the bundle
npm run size:why

# Advanced analysis with webpack
npm run analyze
```

### Bundle Size Limits

Configure size limits in `.size-limit.json`:

```json
[
  {
    "path": "dist/index.js",
    "limit": "100 KB"
  }
]
```

### Performance Monitoring Utilities

Use built-in performance utilities:

```tsx
import { usePerformanceMonitor } from 'designbricks/lib/performance';

function MyComponent() {
  const { startMeasure, endMeasure, getMetrics } = usePerformanceMonitor('MyComponent');

  useEffect(() => {
    startMeasure('render');
    // Component logic
    endMeasure('render');
    
    console.log('Performance metrics:', getMetrics());
  }, []);

  return <div>Component</div>;
}
```

### Optimization Tips

1. **Tree Shaking**: Import only what you need
   ```tsx
   // Good - tree-shakeable
   import { Button, Card } from 'designbricks';
   
   // Avoid - imports everything
   import * as DB from 'designbricks';
   ```

2. **Code Splitting**: Lazy load components
   ```tsx
   import { lazyLoad } from 'designbricks/lib/performance';
   
   const HeavyComponent = lazyLoad(() => import('./HeavyComponent'));
   ```

3. **Memoization**: Prevent unnecessary re-renders
   ```tsx
   import { memo } from 'react';
   
   export const MyComponent = memo(({ data }) => {
     // Component logic
   });
   ```

---

## Code Quality Tools

### Linting

```bash
# Run ESLint
npm run lint

# Auto-fix issues
npm run lint:fix
```

### Formatting

```bash
# Check formatting
npm run format:check

# Auto-format code
npm run format
```

### Type Checking

```bash
# Run TypeScript type checker
npm run type-check
```

### Testing

```bash
# Run all tests
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage

# Debug tests
npm run test:debug
```

### Pre-commit Hooks

Set up Git hooks for automatic quality checks:

```bash
# Install husky
npm install --save-dev husky lint-staged

# Configure
npx husky init
```

```json
// package.json
{
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write",
      "npm run test:related"
    ]
  }
}
```

---

## IDE Integration

### VS Code

Install recommended extensions:

- **ESLint**: Lint JavaScript/TypeScript
- **Prettier**: Code formatting
- **TypeScript**: Enhanced TypeScript support
- **Storybook**: Storybook integration
- **Jest**: Test runner integration

### Settings

```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "jest.autoRun": "watch"
}
```

### Recommended Extensions

```json
// .vscode/extensions.json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next",
    "storybook.storybook-preview",
    "orta.vscode-jest"
  ]
}
```

---

## Workflow Examples

### Creating a New Component

```bash
# 1. Generate component
npm run generate:component -- DatePicker --category Inputs

# 2. Implement component
# Edit src/components/DatePicker/DatePicker.tsx

# 3. Add styles
# Edit src/components/DatePicker/DatePicker.css

# 4. Update stories
# Edit src/components/DatePicker/DatePicker.stories.tsx

# 5. Export component
# Add to src/index.ts

# 6. Run tests
npm test -- DatePicker

# 7. Check in Storybook
npm run storybook

# 8. Validate tokens (if using new tokens)
npm run validate:tokens

# 9. Check bundle size
npm run size

# 10. Build
npm run build
```

### Daily Development Workflow

```bash
# Start development
npm run storybook

# In another terminal, watch tests
npm run test:watch

# Make changes to components

# Before committing
npm run lint:fix
npm run format
npm run test
npm run type-check
npm run validate:tokens
```

---

## Troubleshooting

### Component Generator Issues

**Problem**: Script not executable
```bash
chmod +x scripts/generate-component.js
```

**Problem**: Component already exists
```bash
# Delete existing component first
rm -rf src/components/MyComponent
```

### Token Validation Issues

**Problem**: False positives
```bash
# Update validation rules in scripts/validate-tokens.js
```

**Problem**: Cannot load tokens
```bash
# Ensure src/tokens/index.ts exists and is valid TypeScript
```

### Documentation Generation Issues

**Problem**: TypeDoc errors
```bash
# Update TypeScript
npm update typescript

# Clear cache
rm -rf node_modules/.cache
```

---

## Contributing

Help improve our developer tools!

- Report issues: [GitHub Issues](https://github.com/PulkitXChadha/DesignBricks/issues)
- Suggest features: [GitHub Discussions](https://github.com/PulkitXChadha/DesignBricks/discussions)
- Submit PRs: [Contributing Guide](../CONTRIBUTING.md)

---

**Next Steps:**
- Try the [Component Generator](#component-generator)
- Validate your [Design Tokens](#design-token-validator)
- Explore [Storybook Playground](#storybook-playground)

