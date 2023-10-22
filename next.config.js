/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["books.google.com"],
    // presets: ["next/babel"]
  },
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
