import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
  images: {
    unoptimized: true,
    remotePatterns: [new URL('https://placehold.co')]
  }

};

export default nextConfig;
