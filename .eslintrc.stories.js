module.exports = {
  // ESLint overrides for Storybook stories
  overrides: [
    {
      files: ['**/*.stories.tsx'],
      rules: {
        'react-hooks/rules-of-hooks': 'off', // Allow hooks in render functions for interactive stories
        'no-console': 'off', // Allow console for demos
      },
    },
  ],
};

