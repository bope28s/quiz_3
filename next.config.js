/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  trailingSlash: false,
  async rewrites() {
    return []
  }
}

module.exports = nextConfig