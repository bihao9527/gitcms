/** @type {import('next').NextConfig} */
const nextConfig = {
  // SEO优化配置
  trailingSlash: false,
  generateEtags: true,
  poweredByHeader: false,
  
  // 图片优化
  images: {
    domains: ['i.postimg.cc'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // 压缩配置
  compress: true,
  
  // 重定向配置
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
  
  // 头部配置
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
