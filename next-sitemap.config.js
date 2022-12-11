/**
 * @type {import('next-sitemap').IConfig}
 */

module.exports = {
  changefreq: 'weekly',
  generateIndexSitemap: false,
  generateRobotsTxt: true,
  priority: 0.7,
  siteUrl: 'https://planare.dev',
  sitemapBaseFileName: 'sitemap',
  sitemapSize: 15_000,
};
