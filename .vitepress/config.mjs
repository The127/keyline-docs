import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Keyline',
  description: 'Documentation for Keyline — a simple, fast and secure open-source OIDC provider',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/introduction' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/The127/Keyline' },
    ],
  },
})
