/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/ajuda', destination: '/contato', permanent: true },
      { source: '/parceiros', destination: '/sobre', permanent: true },
    ];
  },
};

module.exports = nextConfig;
