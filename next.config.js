const withImages = require('next-images');

module.exports = withImages({
  output: 'export',
  basePath: '/website_frontend',
  assetPrefix: '/website_frontend/',
  compiler: {
    styledComponents: true
  },
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
})
