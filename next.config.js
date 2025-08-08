const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  distDir: 'docs',
  basePath: isProd ? '/site-ads' : '',
  assetPrefix: isProd ? '/site-ads/' : '',
  trailingSlash: true,
};