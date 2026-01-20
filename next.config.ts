import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["flagcdn.com"], // ✅ allow loading flags from this domain
  },
};

export default nextConfig;