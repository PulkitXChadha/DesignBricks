#!/usr/bin/env node

/**
 * DesignBricks Component Generator
 * 
 * Usage:
 *   npm run generate:component -- ComponentName
 *   npm run generate:component -- ComponentName --category Foundation
 * 
 * This script generates a new component with all required files:
 * - ComponentName.tsx
 * - ComponentName.css
 * - ComponentName.stories.tsx
 * - ComponentName.test.tsx
 * - index.ts
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Parse command line arguments
const args = process.argv.slice(2);
let componentName = args[0];
let category = null;

// Parse flags
args.forEach((arg, index) => {
  if (arg === '--category' && args[index + 1]) {
    category = args[index + 1];
  }
});

// Validate component name
if (!componentName) {
  console.error('❌ Error: Component name is required');
  console.log('Usage: npm run generate:component -- ComponentName');
  process.exit(1);
}

// Ensure component name is PascalCase
componentName = componentName.charAt(0).toUpperCase() + componentName.slice(1);

// Interactive prompt if category not provided
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const categories = [
  'Foundation',
  'Inputs',
  'Navigation',
  'Feedback',
  'Data Display',
  'Overlays',
  'Layout',
  'Charts',
  'Utilities'
];

async function promptCategory() {
  if (category) return category;

  console.log('\n📦 Available categories:');
  categories.forEach((cat, index) => {
    console.log(`  ${index + 1}. ${cat}`);
  });

  return new Promise((resolve) => {
    rl.question('\nSelect category (1-9): ', (answer) => {
      const index = parseInt(answer) - 1;
      if (index >= 0 && index < categories.length) {
        resolve(categories[index]);
      } else {
        console.log('Invalid selection, using "Utilities"');
        resolve('Utilities');
      }
      rl.close();
    });
  });
}

// Component templates
const templates = {
  component: (name) => `import React from 'react';
import clsx from 'clsx';
import './${name}.css';

export interface ${name}Props {
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
 * ${name} component
 * 
 * @example
 * \`\`\`tsx
 * <${name} variant="primary" size="medium">
 *   Content
 * </${name}>
 * \`\`\`
 */
export const ${name}: React.FC<${name}Props> = ({
  className,
  children,
  variant = 'primary',
  size = 'medium',
  ...props
}) => {
  const classes = clsx(
    'db-${name.toLowerCase()}',
    \`db-${name.toLowerCase()}--\${variant}\`,
    \`db-${name.toLowerCase()}--\${size}\`,
    className
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

${name}.displayName = '${name}';
`,

  css: (name) => `.db-${name.toLowerCase()} {
  /* Base styles */
  display: block;
  box-sizing: border-box;
}

/* Variants */
.db-${name.toLowerCase()}--primary {
  /* Primary variant styles */
}

.db-${name.toLowerCase()}--secondary {
  /* Secondary variant styles */
}

/* Sizes */
.db-${name.toLowerCase()}--small {
  /* Small size styles */
}

.db-${name.toLowerCase()}--medium {
  /* Medium size styles */
}

.db-${name.toLowerCase()}--large {
  /* Large size styles */
}

/* States */
.db-${name.toLowerCase()}:hover {
  /* Hover state */
}

.db-${name.toLowerCase()}:focus {
  /* Focus state */
  outline: 2px solid var(--db-color-primary-main);
  outline-offset: 2px;
}

.db-${name.toLowerCase()}:disabled {
  /* Disabled state */
  opacity: 0.5;
  cursor: not-allowed;
}
`,

  stories: (name) => `import type { Meta, StoryObj } from '@storybook/react';
import { ${name} } from './${name}';

const meta: Meta<typeof ${name}> = {
  title: 'Components/${name}',
  component: ${name},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'The visual variant of the component',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the component',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ${name}>;

export const Default: Story = {
  args: {
    children: '${name} Content',
    variant: 'primary',
    size: 'medium',
  },
};

export const Primary: Story = {
  args: {
    ...Default.args,
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    variant: 'secondary',
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    ...Default.args,
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: 'large',
  },
};
`,

  test: (name) => `import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { ${name} } from './${name}';

expect.extend(toHaveNoViolations);

describe('${name}', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      render(<${name}>Content</${name}>);
      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('renders children correctly', () => {
      render(
        <${name}>
          <span data-testid="child">Child Content</span>
        </${name}>
      );
      expect(screen.getByTestId('child')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      const { container } = render(
        <${name} className="custom-class">Content</${name}>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('custom-class');
    });
  });

  describe('Variants', () => {
    it('renders primary variant by default', () => {
      const { container } = render(<${name}>Content</${name}>);
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('db-${name.toLowerCase()}--primary');
    });

    it('renders secondary variant', () => {
      const { container } = render(
        <${name} variant="secondary">Content</${name}>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('db-${name.toLowerCase()}--secondary');
    });
  });

  describe('Sizes', () => {
    it('renders medium size by default', () => {
      const { container } = render(<${name}>Content</${name}>);
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('db-${name.toLowerCase()}--medium');
    });

    it('renders small size', () => {
      const { container } = render(
        <${name} size="small">Content</${name}>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('db-${name.toLowerCase()}--small');
    });

    it('renders large size', () => {
      const { container } = render(
        <${name} size="large">Content</${name}>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('db-${name.toLowerCase()}--large');
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<${name}>Content</${name}>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no violations with all props', async () => {
      const { container } = render(
        <${name} variant="primary" size="large">
          Accessible Content
        </${name}>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
`,

  index: (name) => `export { ${name} } from './${name}';
export type { ${name}Props } from './${name}';
`,
};

// Generate component files
async function generateComponent() {
  const selectedCategory = await promptCategory();
  const componentDir = path.join(process.cwd(), 'src', 'components', componentName);

  // Check if component already exists
  if (fs.existsSync(componentDir)) {
    console.error(`❌ Error: Component "${componentName}" already exists at ${componentDir}`);
    process.exit(1);
  }

  // Create component directory
  fs.mkdirSync(componentDir, { recursive: true });

  // Generate files
  const files = [
    { name: `${componentName}.tsx`, content: templates.component(componentName) },
    { name: `${componentName}.css`, content: templates.css(componentName) },
    { name: `${componentName}.stories.tsx`, content: templates.stories(componentName) },
    { name: `${componentName}.test.tsx`, content: templates.test(componentName) },
    { name: 'index.ts', content: templates.index(componentName) },
  ];

  files.forEach(file => {
    const filePath = path.join(componentDir, file.name);
    fs.writeFileSync(filePath, file.content);
    console.log(`✅ Created: ${file.name}`);
  });

  console.log(`\n🎉 Component "${componentName}" generated successfully!`);
  console.log(`📁 Location: src/components/${componentName}/\n`);
  console.log(`📝 Next steps:`);
  console.log(`   1. Update src/index.ts to export your component:`);
  console.log(`      export { ${componentName} } from './components/${componentName}';`);
  console.log(`   2. Customize the component implementation in ${componentName}.tsx`);
  console.log(`   3. Add styles in ${componentName}.css`);
  console.log(`   4. Update stories in ${componentName}.stories.tsx`);
  console.log(`   5. Run tests: npm test -- ${componentName}`);
  console.log(`   6. View in Storybook: npm run storybook\n`);
  console.log(`Category: ${selectedCategory}`);
}

// Run generator
generateComponent().catch(err => {
  console.error('❌ Error generating component:', err);
  process.exit(1);
});

