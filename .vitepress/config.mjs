import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VRSuya",
  description: "Dream and Space",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/logo/vrsuya_logo_svg_light.svg',
      dark: '/logo/vrsuya_logo_svg_dark.svg',
      alt: 'VRSuya'
    },
    siteTitle: false,

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'VRSuya',
        items: [
          {text: '브랜드 소개', link: '/vrsuya' },
          {text: '외주 의뢰', link: '/vrsuya/outsourcing' },
          {text: '포트폴리오', link: '/vrsuya/portfolio' },
          {text: '환불 정책', link: '/vrsuya/refund' }
        ]
      },
      { text: '아이템',
        items: [
          {text: 'AFK 3종 세트', link: '/item/afk' },
          {text: '모구모구 프로젝트', link: '/item/mogumogu' },
          {text: '오타게', link: '/item/wotagei' },
          {text: '아시아시 프로젝트', link: '/item/asiasi' },
          {text: '뇨로뇨로 로코모션', link: '/item/nyoronyoro' },
          {text: '핸드모션', link: '/item/handmotion' },
          {text: '스야스야', link: '/item/suyasuya' },
          {text: 'VR 사운드패드', link: '/item/soundpad' },
          {text: 'More AFK', link: '/item/more-afk' }
        ]
      },
      { text: '애드온',
        items: [
          {text: 'Cleaner', link: '/addon/cleaner' },
          {text: 'Core', link: '/addon/core' },
          {text: 'Installer', link: '/addon/installer' },
          {text: 'Utility', link: '/item/Utility' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { 
        icon: {
          svg: '<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M0,0h24v24H0V0ZM18.14,10.27v-1.15l-2.88-4.62h-1l-1.57,3.78-1.55-3.25h-.87s-2.62,6.19-2.62,6.19v-5.88h-1.78v.52h-1.36v1.81h1.36v5.23c0,.46.38.84.84.84h.89v5.76h1.82s0-2.61,0-2.61c0-1.45,1.25-2.62,2.8-2.63,0,0,.01,0,.02,0h0c2.53,0,4.58,1.92,4.58,4.28v.96h1.33v-5.17h1.36v-2.86l-1.36-1.2Z"/></svg>'
        },
        link: 'https://vrsuya.booth.pm',
        ariaLabel: 'BOOTH'
      },
      { icon: 'twitter', link: 'https://twitter.com/VRSuya' },
      { icon: 'discord', link: 'https://discord.gg/6CWGHSCxzH' },
      { icon: 'youtube', link: 'https://www.youtube.com/@VRSuya' },
      { icon: 'github', link: 'https://github.com/VRSuya' }
    ],

    externalLinkIcon: true,

    docFooter: {
      prev: false,
      next: false
    },

    footer: {
      message: 'Powered by VitePress',
      copyright: 'Copyright 2022-2026 VRSuya. All rights reserved.'
    }
  },
  lang: 'ko',
  locales: {
    root: {
      label: '한국어',
      lang: 'ko',
      link: '/'
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/'
    }
  },
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  sitemap: {
    hostname: 'https://www.vrsuya.com'
  }
})
