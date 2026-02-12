/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/api/admin',
      },
      {
        source: '/admin/:path*',
        destination: '/api/admin/:path*',
      },
    ];
  },
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: '',
  assetPrefix: '/',

  turbopack: {},

  ...(process.env.NEXT_RUNTIME === 'nodejs' && {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      });

      // Fix for AdminJS README.md import issue
      config.module.rules.push({
        test: /\.md$/,
        type: 'asset/source',
      });

      return config;
    },
  }),
};

export default nextConfig;
