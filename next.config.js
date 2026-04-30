const withImages = require('next-images');

module.exports = withImages({
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/portfolio',
  },
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
