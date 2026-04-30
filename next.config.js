const withImages = require('next-images');

module.exports = withImages({
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
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
