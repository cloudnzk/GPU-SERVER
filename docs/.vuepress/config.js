module.exports = {
  title: 'GPU-SERVER',
  description: 'Lab GPU server configuration, management, usage documentation.',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '配置', link: '/configure/' },
      { text: '管理', link: '/admin/' },
      { text: 'Github', link: 'https://github.com' },
    ],
    search: false,
    sidebar: 'auto',
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    smoothScroll: true,
  },
  plugins: ['@vuepress/back-to-top','@vuepress/active-header-links','@vuepress/nprogress']
}
