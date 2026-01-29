import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VRSuya',
  tagline: 'Dream and Space',
  favicon: 'favicon.ico',
  url: 'https://crestudio.github.io/',
  baseUrl: '/',
  organizationName: 'crestudio',
  projectName: 'crestudio.github.io',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko','ja','en'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      ko: {
        label: '한국어',
        direction: 'ltr',
        htmlLang: 'ko-KR',
        calendar: 'gregory',
        path: 'ko',
      },
      ja: {
        label: '日本語',
        direction: 'ltr',
        htmlLang: 'ja-JP',
        calendar: 'gregory',
        path: 'ja',
      }
    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          id: 'default',
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.js'
        },
        blog: {
          blogTitle: 'VRSuya 블로그',
          blogDescription: 'VRSuya 블로그',
          postsPerPage: 'ALL',
          showReadingTime: false
        },
        theme: {
          customCss: './src/css/custom.css',
        }
      })
    ]
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'vrchat-update',
        routeBasePath: 'vrchat-update',
        path: './vrchat-update',
        blogTitle: 'VRChat 업데이트 로그',
        blogDescription: 'VRChat 업데이트 번역 및 요약 블로그',
        blogSidebarTitle: 'All posts',
        blogSidebarCount: 'ALL',
        postsPerPage: 'ALL',
        showReadingTime: false,
        onUntruncatedBlogPosts: 'ignore',
        feedOptions: {
          type: 'all',
          copyright: `Copyright © ${new Date().getFullYear()} VRSuya. All rights reserved.`,
          createFeedItems: async (params) => {
            const {blogPosts, defaultCreateFeedItems, ...rest} = params;
            return defaultCreateFeedItems({
              blogPosts: blogPosts.filter((item, index) => index < 10),
              ...rest,
            });
          },
        },
      }
    ]
  ],

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css?family=Nanum+Gothic:400',
      rel: 'stylesheet'
    }
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/vrsuya_socialcard.jpg',
      announcementBar: {
        id: 'new_content',
        content:
          '여유와 휴식, 그리고 감상... <a target="_blank" rel="external" href="https://vrsuya.booth.pm/items/6817525">More AFK</a> 아이템이 출시 되었습니다!',
        backgroundColor: '#fc4d50',
        textColor: '#ffffff',
        isCloseable: true,
      },
      navbar: {
        title: 'VRSuya',
        logo: {
          alt: 'VRSuya Logo',
          src: 'img/vrsuya_logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'VRSuyaSidebar',
            position: 'left',
            label: 'VRSuya',
          },
          {
            type: 'docSidebar',
            sidebarId: 'VRChatSidebar',
            position: 'left',
            label: 'VRChat',
          },
          {
            type: 'docSidebar',
            sidebarId: 'LethalCompanySidebar',
            position: 'left',
            label: 'Lethal Company',
          },
          {to: '/blog', label: '블로그', position: 'left'},
          {
            href: 'https://vrsuya.booth.pm/',
            label: 'BOOTH',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'VRSuya',
            items: [
              {
                label: '트위터',
                href: 'https://twitter.com/VRSuya'
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@VRSuya'
              },
              {
                label: 'BOOTH',
                href: 'https://vrsuya.booth.pm/'
              }
            ]
          },
          {
            title: '레빈',
            items: [
              {
                label: '트위터',
                href: 'https://twitter.com/bunny_64479'
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@_Levin_'
              },
              {
                label: 'BOOTH',
                href: 'https://projectlevin.booth.pm/'
              }
            ]
          },
          {
            title: '마끼아또',
            items: [
              {
                label: '트위터',
                href: 'https://twitter.com/VRC_Macchiato'
              },
              {
                label: '디스코드',
                href: 'https://discord.gg/macchiato'
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@crestudio'
              },
              {
                label: '픽시브',
                href: 'https://pixiv.me/crestudio'
              },
              {
                label: 'BOOTH',
                href: 'https://macchiato.booth.pm/'
              }
            ]
          }
        ],
        copyright: `Copyright ${new Date().getFullYear()} VRSuya. All rights reserved. Built with Docusaurus.`
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['csharp','python','sql','yaml','json']
      }
    })
};

export default config;
