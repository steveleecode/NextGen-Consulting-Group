/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/sitemap.xml/', // ← add trailing slash so App Router picks it up
      },
    ];
  },
};

module.exports = nextConfig; 