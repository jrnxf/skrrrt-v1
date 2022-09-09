const withPWA = require('next-pwa')({
  dest: 'public',
})

/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

if (process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_RUNNING_LOCAL !== 'true') {
  nextConfig = withPWA(nextConfig)
}

module.exports = nextConfig
