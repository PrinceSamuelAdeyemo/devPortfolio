import type { NextConfig } from "next";

const API_BASE_HOST = process.env.NEXT_PUBLIC_API_BASE_HOST;
const API_BASE_PORT = process.env.NEXT_PUBLIC_API_BASE_PORT;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.NODE_ENV === "development" ? "http" : "https",
        hostname: API_BASE_HOST!,
        port: API_BASE_PORT || undefined, // ✅ only set if exists
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
