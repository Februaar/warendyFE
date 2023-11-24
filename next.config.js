/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.vivino.com"],
  },
  env: {
    PUBLIC_BASE_URL: process.env.PUBLIC_BASE_URL,
    KAKAO_MAP_KEY: process.env.KAKAO_MAP_KEY,
  },
};

module.exports = nextConfig;
