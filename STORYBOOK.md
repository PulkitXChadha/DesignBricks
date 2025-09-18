# DesignBricks Storybook Workshop

Welcome to the DesignBricks Storybook - an interactive frontend workshop for the Databricks Design System.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start Storybook development server
npm run storybook

# Build Storybook for production
npm run build-storybook
```

Storybook will open automatically at [http://localhost:6006](http://localhost:6006)

## 📚 What's Inside

### Component Documentation
- **Interactive Playground**: Each component has a playground where you can modify props in real-time
- **Code Examples**: Copy-paste ready code snippets
- **API Documentation**: Complete props documentation with TypeScript types
- **Visual States**: See all component states and variants

### Component Categories

#### Foundation
- **Button**: Primary actions with multiple variants and states
- **Typography**: Complete text system with semantic HTML

#### Inputs
- **TextField**: Text input with validation and helper text
- **Checkbox**: Single and group selection with indeterminate state

#### Feedback
- **Alert**: Contextual feedback messages with severity levels

#### Data Display
- **Card**: Container component for content grouping

## 🎨 Features

### Interactive Controls
- Modify component props using the controls panel
- See changes instantly in the canvas
- Copy the updated code with your modifications

### Accessibility Testing
- Built-in a11y addon for accessibility checking
- Keyboard navigation testing
- Screen reader compatibility verification
- Color contrast analysis

### Responsive Preview
- Test components at different viewport sizes
- Mobile, tablet, and desktop presets
- Custom viewport configuration

### Documentation
- Auto-generated docs from TypeScript interfaces
- MDX support for rich documentation
- Code snippets with syntax highlighting

## 🛠 Development Workflow

### Creating New Stories

1. Create a new file: `ComponentName.stories.tsx`
2. Define the meta configuration:

```tsx
const meta: Meta<typeof Component> = {
  title: 'Category/Component',
  component: Component,
  parameters: {
    docs: {
      description: {
        component: 'Component description',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    // Define controls
  },
};
```

3. Create story variations:

```tsx
export const Default: Story = {
  args: {
    // Default props
  },
};
```

### Story Best Practices

1. **Playground Story**: Always include a playground story for experimentation
2. **Variants**: Show all visual variants
3. **States**: Demonstrate all interactive states
4. **Combinations**: Show real-world usage combinations
5. **Edge Cases**: Include stories for edge cases

## 📂 Project Structure

```
.storybook/
├── main.ts           # Storybook configuration
├── preview.tsx       # Global decorators and parameters
└── manager.ts        # UI configuration

src/
├── Introduction.mdx  # Welcome page
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.css
│   │   └── Button.stories.tsx
│   └── ...
└── tokens/           # Design tokens
```

## 🎯 Using Storybook for Development

### Component Development
1. Start Storybook: `npm run storybook`
2. Navigate to your component
3. Use controls to test different prop combinations
4. Check accessibility panel for issues
5. Test responsive behavior

### Design Validation
1. Compare implementations with design specs
2. Verify spacing, colors, and typography
3. Test interactive states
4. Validate responsive breakpoints

### Documentation
1. Document new props in TypeScript interfaces
2. Add JSDoc comments for better documentation
3. Create comprehensive story examples
4. Include usage guidelines in MDX

## 🔧 Configuration

### Adding Addons

Edit `.storybook/main.ts`:

```ts
addons: [
  '@storybook/addon-essentials',
  '@storybook/addon-a11y',
  '@storybook/addon-interactions',
  // Add new addons here
]
```

### Custom Themes

Edit `.storybook/preview.tsx` to customize:
- Background colors
- Viewport sizes
- Global styles
- Decorators

## 📝 Tips & Tricks

### Keyboard Shortcuts
- `F`: Toggle fullscreen
- `D`: Toggle docs panel
- `A`: Toggle addons panel
- `S`: Toggle sidebar
- `/`: Focus search

### URL Parameters
- `?path=/story/component--story`: Direct link to story
- `&args=prop:value`: Set initial prop values
- `&viewMode=docs`: Open in docs mode

### Testing
- Use controls to test edge cases
- Check different viewport sizes
- Verify keyboard navigation
- Test with different color themes

## 🚢 Deployment

Build and deploy Storybook:

```bash
# Build static files
npm run build-storybook

# Files will be in storybook-static/
# Deploy to any static hosting service
```

### Deployment Options
- **GitHub Pages**: Free hosting for public repos
- **Netlify**: Automatic deploys from Git
- **Vercel**: Zero-config deployments
- **Chromatic**: Visual testing platform

## 🆘 Troubleshooting

### Common Issues

**Port already in use:**
```bash
npx storybook@latest dev -p 6007
```

**Clear cache:**
```bash
rm -rf node_modules/.cache
npm run storybook
```

**Update Storybook:**
```bash
npx storybook@latest upgrade
```

## 📚 Resources

- [Storybook Documentation](https://storybook.js.org/docs)
- [Component Story Format](https://storybook.js.org/docs/react/api/csf)
- [Addons Gallery](https://storybook.js.org/addons)
- [Best Practices](https://storybook.js.org/docs/react/writing-stories/introduction)

## 🤝 Contributing

1. Create stories for new components
2. Ensure all props are documented
3. Include interactive examples
4. Test accessibility
5. Add usage guidelines

---

Happy component building! 🎨✨