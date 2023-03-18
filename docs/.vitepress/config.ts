import { defineConfig } from 'vitepress'
import { withTwoslash } from 'vitepress-plugin-shiki-twoslash'

import { version } from '../../package.json'

export default withTwoslash(
  defineConfig({
    cleanUrls: true,
    description: 'VitePress Plugin for Shiki Twoslash',
    head: [
      ['meta', { name: 'theme-color', content: '#729b1a' }],
      [
        'meta',
        {
          name: 'keywords',
          content: 'vitepress, plugin, shiki, twoslash',
        },
      ],
    ],
    lang: 'en-US',
    lastUpdated: true,
    markdown: {
      theme: { dark: 'vitesse-dark', light: 'vitesse-light' },
    },
    twoslash: {
      addTryButton: true,
    },
    themeConfig: {
      // algolia: {
      //   appId: '4QMG0RYQG7',
      //   apiKey: 'd2114bafbf2a7fb3c9c2a856d4bc9e38',
      //   indexName: 'abitype',
      // },
      editLink: {
        pattern:
          'https://github.com/wagmi-dev/vitepress-plugin-shiki-twoslash/edit/main/site/:path',
        text: 'Suggest changes to this page',
      },
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2023-PRESENT weth, LLC  ',
      },
      nav: [
        { text: 'Guide', link: '/' },
        { text: 'API', link: '/api/types' },
        {
          text: `v${version}`,
          items: [
            {
              text: 'Release Notes ',
              link: 'https://github.com/wagmi-dev/vitepress-plugin-shiki-twoslash/releases',
            },
            {
              text: 'Contributing ',
              link: 'https://github.com/wagmi-dev/vitepress-plugin-shiki-twoslash/blob/main/.github/CONTRIBUTING.md',
            },
          ],
        },
      ],
      outline: [2, 3],
      sidebar: {
        '/': [
          {
            text: 'Guide',
            items: [
              {
                text: 'Getting Started',
                link: '/',
              },
              {
                text: 'Markdown Extensions',
                link: '/guide/markdown-extensions',
              },
              {
                text: 'Using a Custom Theme',
                link: '/guide/custom-theme',
              },
            ],
          },
          {
            text: 'API',
            items: [
              {
                text: 'Queries',
                link: '/api/queries',
              },
              {
                text: 'Imports',
                link: '/api/imports',
              },
              {
                text: 'Cut',
                link: '/api/cut',
              },
              {
                text: 'Completions',
                link: '/api/completions',
              },
              {
                text: 'Errors',
                link: '/api/errors',
              },
              {
                text: 'Logging',
                link: '/api/logging',
              },
              {
                text: 'Annotations',
                link: '/api/annotations',
              },
            ],
          },
          {
            text: 'Config',
            items: [
              {
                text: 'Reference',
                link: '/config',
              },
            ],
          },
        ],
      },
      socialLinks: [
        {
          icon: 'github',
          link: 'https://github.com/wagmi-dev/vitepress-plugin-shiki-twoslash',
        },
      ],
    },
    title: 'VitePress Twoslash',
  }),
)
