import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/xigui-beikao/',
  title: '系规备考',
  description: '软考系统规划与管理师（高级）备考文档站',
  lang: 'zh-CN',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }]
  ],
  themeConfig: {
    logo: '📘',
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '基础', link: '/basic/' },
      { text: '思维导图', link: '/mindmap/' },
      { text: '背诵', link: '/recite/' }
    ],
    sidebar: {
      '/basic/': [
        {
          text: '基础（考点精讲）',
          items: [
            { text: '章节索引', link: '/basic/' },
            { text: '第11章 信息系统治理', link: '/basic/chapter11' }
          ]
        }
      ],
      '/mindmap/': [
        {
          text: '思维导图',
          items: [
            { text: '章节索引', link: '/mindmap/' },
            { text: '第11章 信息系统治理', link: '/mindmap/chapter11' }
          ]
        }
      ],
      '/recite/': [
        {
          text: '背诵清单',
          items: [
            { text: '章节索引', link: '/recite/' },
            { text: '第11章 信息系统治理', link: '/recite/chapter11' },
            { text: '第12章 信息系统服务管理', link: '/recite/chapter12' },
            { text: '默写练习工具', link: '/moxie/' }
          ]
        }
      ]
    },
    footer: {
      message: '软考系统规划与管理师（高级）备考资料 · 内容以官方教材为准',
      copyright: '系规备考'
    }
  }
})
