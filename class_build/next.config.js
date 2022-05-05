/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  // 빌드시 스토리지와 VM 아이디 일치를 위해 작성
  generateBuildId: () => 'flute-tennis-deploy',

  // ssg 빌드를 허용해줘, ssr 페이지는 적으면 안된다
  exportPathMap: () => ({
    '/': { page: '/' },
    '/boards': { page: '/boards' },
    '/404': { page: '/404' },
  }),
};

module.exports = nextConfig;
