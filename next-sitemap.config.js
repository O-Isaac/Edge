/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.VERCEL_ENV === 'preview' ? `https://${process.env.VERCEL_URL}` : 'https://edge-ui-docs.vercel.app/',
    generateRobotsTxt: true,
}
  