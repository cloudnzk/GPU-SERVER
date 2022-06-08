module.exports = {
  title: 'GPU-SERVER',
  description: 'Lab GPU server configuration, management, usage documentation.',
  dest: './public',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '问答', link: '/question/' },
    ],
    sidebar: 'auto',
    search: false,
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'cloudnzk/GPU-SERVER',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'Github',

    // 以下为可选的编辑链接选项
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    docsBranch: 'main',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
  },
  plugins: ['@vuepress/back-to-top','@vuepress/active-header-links','@vuepress/nprogress']
}
