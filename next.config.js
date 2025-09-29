/** @type {import('next').NextConfig} */

module.exports = {
  eslint: {
    dirs: ['src'],
  },
   images: {
     remotePatterns: [
       {
         protocol: 'https',
         hostname: 'images.unsplash.com',
       },
     ],
     formats: ['image/avif', 'image/webp'],
     minimumCacheTTL: 60,
   },

  reactStrictMode: true,

  // Performance-Optimierungen
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Entferne console.log im Produktionsmodus
  },

  // Optimiere Caching
  headers: async () => {
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
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};
