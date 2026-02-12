/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Enables the App Router (already default in Next 14)
  experimental: {
    appDir: true
  }
};

module.exports = nextConfig;
