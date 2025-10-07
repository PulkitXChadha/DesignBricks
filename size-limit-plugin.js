module.exports = [
  {
    name: '@size-limit/esbuild',
    before() {
      // Configure esbuild to handle SVG files as text
      this.config.esbuildOptions = this.config.esbuildOptions || {};
      this.config.esbuildOptions.loader = this.config.esbuildOptions.loader || {};
      this.config.esbuildOptions.loader['.svg'] = 'text';
    }
  }
];

