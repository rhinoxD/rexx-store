/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'es'],
    defaultLocale: 'en-US',
  },
};

module.exports = nextConfig;

console.log('next.config.js', JSON.stringify(module.exports, null, 2));
