import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

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
  async viteFinal(config, { configType }) {
    // Return merged config
    return mergeConfig(config, {
      // Resolve configuration for Storybook preview runtime
      resolve: {
        alias: {
          // Ensure Storybook internals resolve correctly
          '@storybook/blocks': '@storybook/blocks',
        },
      },
      // Configure dependency optimization
      optimizeDeps: {
        exclude: [
          '@storybook/blocks',
          '@storybook/addon-docs',
          'storybook',
        ],
        include: [
          'react',
          'react-dom',
          'react/jsx-runtime',
        ],
        esbuildOptions: {
          // Node.js global to browser globalThis
          define: {
            global: 'globalThis',
          },
        },
      },
      // Define global variables
      define: {
        global: 'globalThis',
        'process.env': {},
      },
      // Build configuration
      build: {
        commonjsOptions: {
          include: [/node_modules/],
          transformMixedEsModules: true,
        },
        rollupOptions: {
          external: [],
        },
      },
    });
  },
  // staticDirs: ['../public'], // Uncomment if you have static assets
};

export default config;