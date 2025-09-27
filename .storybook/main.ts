import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)', '../src/**/*.mdx'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    // Configure dependency optimization to handle problematic dependencies
    config.optimizeDeps = {
      ...config.optimizeDeps,
      exclude: [
        ...(config.optimizeDeps?.exclude || []),
        '@storybook/blocks',
        '@storybook/addon-docs',
        'storybook',
      ],
      include: [
        ...(config.optimizeDeps?.include || []),
        'react',
        'react-dom',
      ],
    };
    
    // Ensure proper handling of globals and build
    config.define = {
      ...config.define,
      global: 'globalThis',
    };
    
    // Configure build options to prevent external marking issues
    config.build = {
      ...config.build,
      rollupOptions: {
        ...config.build?.rollupOptions,
        external: [],
      },
    };
    
    return config;
  },
  // staticDirs: ['../public'], // Uncomment if you have static assets
};

export default config;