import type { NextConfig } from "next";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const API_BASE_HOST = process.env.NEXT_PUBLIC_API_BASE_HOST
const API_BASE_PORT = process.env.NEXT_PUBLIC_API_BASE_PORT

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: `${API_BASE_HOST}`,
        port: `${API_BASE_PORT}`,
        pathname: '/media/**'
      },
    ]
  }
};

export default nextConfig;
