/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignore ESLint during builds (known issue with ESLint 9 flat config + Next.js 15)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
