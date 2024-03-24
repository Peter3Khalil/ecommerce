/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'themes.muffingroup.com',
        protocol: 'https',
        port: '',
      },
    ],
  },
};

export default nextConfig;
