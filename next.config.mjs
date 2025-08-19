/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  
  images: {
    unoptimized: true
  },
  
  // إزالة distDir لأنه قد يتعارض مع output: 'export'
  // distDir: '.next', // محذوف
  
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  
  typescript: {
    ignoreBuildErrors: true,
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // هذا الإعداد غير مدعوم في Next.js
  // skipTrailingSlashRedirect: true, // محذوف
  
  // تحسين عملية البناء
  swcMinify: true,
  
  // تصحيح headers - إزالة /out لأنه لا يعمل مع static export
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;