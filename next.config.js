const withImages = require('next-images');

module.exports = withImages({
  output: 'export',
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
