/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose",
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
