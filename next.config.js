/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: "/billing",
        destination: "https://pay.planare.dev/p/login/3cs8zxaGw0eQ6ZydQQ",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
