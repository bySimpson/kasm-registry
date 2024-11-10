/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'bySimpson's kasm registry',
    description: 'Images based on official images with some additional tooling',
    icon: '/img/logo.svg',
    listUrl: 'https://thmr.at/',
    contactUrl: 'https://thmr.at/gh',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
