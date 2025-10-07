## [Unreleased]

### 🎨 CSS Distribution

#### Added
- Explicit CSS file exports in `package.json` for proper style distribution
- Comprehensive CSS import guide (`docs/CSS-IMPORTS.md`) with 400+ lines of documentation
- Enhanced build script to ensure all CSS files are copied to distribution
- CSS import examples in README and Getting Started guide
- Test script to verify CSS distribution (`npm run test:css`)

#### Changed
- Updated `scripts/copy-assets.js` to recursively copy all CSS files from `src/` to `dist/`
- Improved documentation with three CSS import strategies:
  - Global styles (recommended for most apps)
  - Individual component styles (optimal tree-shaking)
  - Bundler-specific configurations (Webpack, Vite, Next.js, CRA, Remix)
- Enhanced Quick Start guide with CSS import requirements as step 2

#### Fixed
- **CSS files are now properly exported and accessible to package consumers**
- Distribution now includes 34 CSS files (32 component styles + 2 global styles)
- All components now have their styles available for import

## [0.2.1](https://github.com/PulkitXChadha/DesignBricks/compare/v0.2.0...v0.2.1) (2025-10-07)

### ♻️ Code Refactoring

* update Card component stories to use new Typography structure ([c21ef31](https://github.com/PulkitXChadha/DesignBricks/commit/c21ef31db11f84b77d6f18b006d41d90dd01bc88))

## [0.2.0](https://github.com/PulkitXChadha/DesignBricks/compare/v0.1.6...v0.2.0) (2025-10-07)

### 🚀 Features

* integrate Collapsible into Sidebar component ([9f04a0a](https://github.com/PulkitXChadha/DesignBricks/commit/9f04a0acaafadf1e786188a84b44368f6c94664c))
* update ESLint configurations for Storybook and relax rules ([8f00dcb](https://github.com/PulkitXChadha/DesignBricks/commit/8f00dcb7ed7c48cffe0e447303d3dcec78e04c6d))

### 🐛 Bug Fixes

* resolve Storybook build failure in GitHub workflow ([8bc51a0](https://github.com/PulkitXChadha/DesignBricks/commit/8bc51a08932187d09abef5fa160a3f8336e9c1a6))

### ♻️ Code Refactoring

* remove Notification component and update documentation ([517250a](https://github.com/PulkitXChadha/DesignBricks/commit/517250ad54ffe16df506107eabb7bc4c4061dfcd))
* standardize function parameter naming and improve code clarity ([8bc2e55](https://github.com/PulkitXChadha/DesignBricks/commit/8bc2e551809a9d176aac24415e31d7b9e1670290))
* standardize function parameter naming and improve test clarity ([ae4a98f](https://github.com/PulkitXChadha/DesignBricks/commit/ae4a98fd86f23f5c9b359ed551c4b40072457ad3))

### 📝 Documentation

* update README to remove project status section ([b0321cc](https://github.com/PulkitXChadha/DesignBricks/commit/b0321cc7fffb31f3d0088305404ffcdbc2ddbf91))
