import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/products',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
