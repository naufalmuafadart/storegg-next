/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['storegg-server-naufal.herokuapp.com'],
  },
};

module.exports = nextConfig;
