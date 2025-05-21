import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },
  output: "export",
  distDir:"build",
  assetPrefix: '',
  webpack: (config) => {
    config.module.rules.push({
      test: '/\.(pdf)$i',
      type: 'asset/resourse'
    })
    return config;
  },
  // turbopack: {
  //   resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json']
  // }
};

export default nextConfig;
