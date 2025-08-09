const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  distDir: isProd ? 'docs' : 'out',
  basePath: isProd ? '/site-ads' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}