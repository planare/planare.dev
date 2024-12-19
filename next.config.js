/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/billing",
        destination: "https://billing.stripe.com/p/login/3cs8zxaGw0eQ6ZydQQ",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination:
          "https://tome.app/planare/planare-mid-2024-portfolio-cly4zfrfy0j9utjpxmc03vayx",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
