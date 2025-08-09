const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  distDir: 'docs',
  basePath: isProd ? '/site-ads' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Гарантируем копирование
  async exportPathMap() {
    return {
      '/.nojekyll': { page: '/' }
    }
  }
}