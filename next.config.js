/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
    ],
  },
  transpilePackages: ['three'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'esbuild': 'esbuild-wasm'
    }
    return config
  }
}

module.exports = nextConfig
