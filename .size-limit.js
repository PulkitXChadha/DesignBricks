module.exports = [
  {
    name: "Entire Library (JS only)",
    path: "dist/index.js",
    limit: "150 KB",
    gzip: true,
    ignore: ["*.css"],
    modifyEsbuildConfig(config) {
      config.loader = config.loader || {};
      config.loader['.svg'] = 'dataurl';
      return config;
    }
  },
  {
    name: "Button Component",
    path: "dist/components/Button/index.js",
    limit: "5 KB",
    gzip: true,
    ignore: ["*.css"],
    modifyEsbuildConfig(config) {
      config.loader = config.loader || {};
      config.loader['.svg'] = 'dataurl';
      return config;
    }
  },
  {
    name: "TextField Component",
    path: "dist/components/TextField/index.js",
    limit: "8 KB",
    gzip: true,
    ignore: ["*.css"],
    modifyEsbuildConfig(config) {
      config.loader = config.loader || {};
      config.loader['.svg'] = 'dataurl';
      return config;
    }
  },
  {
    name: "Table Component",
    path: "dist/components/Table/index.js",
    limit: "15 KB",
    gzip: true,
    ignore: ["*.css"],
    modifyEsbuildConfig(config) {
      config.loader = config.loader || {};
      config.loader['.svg'] = 'dataurl';
      return config;
    }
  },
  {
    name: "LineChart Component (with D3)",
    path: "dist/components/LineChart/index.js",
    limit: "50 KB",
    gzip: true,
    ignore: ["*.css"],
    modifyEsbuildConfig(config) {
      config.loader = config.loader || {};
      config.loader['.svg'] = 'dataurl';
      return config;
    }
  },
  {
    name: "Design Tokens",
    path: "dist/tokens/index.js",
    limit: "3 KB",
    gzip: true
  }
];

