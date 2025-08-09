const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  distDir: 'docs',
  basePath: isProd ? '/site-ads' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async generateBuildId() {
    return "build-" + Date.now();
  },
  async exportPathMap(defaultPathMap) {
    return {
      ...defaultPathMap,
      "./.nojekyll": { page: "" } // Добавляем .nojekyll
    }
  }
}