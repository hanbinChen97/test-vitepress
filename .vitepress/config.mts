import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "上海安保服务集团",
  description: "专业的安保服务提供商，为您提供全方位的安全解决方案",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '公司介绍', link: '/company' },
      { text: '服务项目', link: '/services' },
      { text: '新闻动态', link: '/news' },
      { text: '案例展示', link: '/cases' },
      { text: '联系我们', link: '/contact' }
    ],

    sidebar: {
      '/services/': [
        {
          text: '服务项目',
          items: [
            { text: '保安服务', link: '/services/security' },
            { text: '技防服务', link: '/services/tech' },
            { text: '消防服务', link: '/services/fire' },
            { text: '安全咨询', link: '/services/consulting' },
            { text: '培训服务', link: '/services/training' },
            { text: '风险管理', link: '/services/risk' }
          ]
        }
      ],
      '/news/': [
        {
          text: '新闻动态',
          items: [
            { text: '公司新闻', link: '/news/company' },
            { text: '行业动态', link: '/news/industry' },
            { text: '政策法规', link: '/news/policy' },
            { text: '媒体报道', link: '/news/media' }
          ]
        }
      ]
    },

    footer: {
      message: '上海市保安服务集团有限公司',
      copyright: '© 2024 版权所有 | 沪ICP备XXXXXXXX号'
    },

    socialLinks: [
      { icon: 'weixin', link: '#' },
      { icon: 'weibo', link: '#' },
      { icon: 'phone', link: 'tel:400-123-4567' },
      { icon: 'mail', link: 'mailto:info@shsecurity.com' }
    ]
  }
})
