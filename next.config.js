/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: "/billing",
        destination: "https://billing.stripe.com/p/login/3cs8zxaGw0eQ6ZydQQ",
        permanent: true,
      },
      {
        source: "/fulfillment-policy",
        destination: "/working-with-us",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
