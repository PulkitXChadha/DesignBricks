module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  collectCoverageFrom: [
    'src/components/**/*.{ts,tsx}',
    '!src/components/**/*.stories.tsx',
    '!src/components/**/index.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 20,
      lines: 20,
      statements: 20
    }
  },
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{ts,tsx}',
    '<rootDir>/src/**/*.{test,spec}.{ts,tsx}'
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'jest-transform-stub'
  },
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      isolatedModules: true
    }],
    '^.+\\.js$': ['ts-jest', {
      isolatedModules: true
    }]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/storybook-static/'
  ],
  // Transform d3 ES modules to CommonJS for Jest
  transformIgnorePatterns: [
    'node_modules/(?!(d3|d3-array|d3-axis|d3-brush|d3-chord|d3-color|d3-contour|d3-delaunay|d3-dispatch|d3-drag|d3-dsv|d3-ease|d3-fetch|d3-force|d3-format|d3-geo|d3-hierarchy|d3-interpolate|d3-path|d3-polygon|d3-quadtree|d3-random|d3-scale|d3-scale-chromatic|d3-selection|d3-shape|d3-time|d3-time-format|d3-timer|d3-transition|d3-zoom|internmap|delaunator|robust-predicates)/)'
  ]
};