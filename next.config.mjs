/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cliniquelactuel.com',
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
