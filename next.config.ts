import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.cruz-dev.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "registry.npmmirror.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mir-s3-cdn-cf.behance.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
