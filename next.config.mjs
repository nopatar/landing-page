/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['digitalassets-shop.tesla.com', 'digitalassets.tesla.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'digitalassets-shop.tesla.com',
      },
    ],
  },
};

export default nextConfig;
