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
  async redirects() {
    return [
      // Redirect www to non-www (e.g., https://www.nextco.it.com → https://nextco.it.com)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.nextco.it.com' }],
        destination: 'https://nextco.it.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
