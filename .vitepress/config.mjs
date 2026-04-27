import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "VRSuya",
  description: "Dream and Space",
  themeConfig: {
    logo: {
      light: '/asset/logo/vrsuya_logo_svg_light.svg',
      dark: '/asset/logo/vrsuya_logo_svg_dark.svg',
      alt: 'VRSuya'
    },
    siteTitle: false,

    search: {
      provider: 'local'
    },

    nav: [
      { text: '처음으로', link: '/' },
      { text: 'VRSuya',
        items: [
          {text: '브랜드 소개', link: '/vrsuya' },
          {text: '외주 의뢰', link: '/vrsuya/outsourcing' },
          {text: '환불 정책', link: '/vrsuya/refund' },
          {text: '포트폴리오', link: '/vrsuya/portfolio' },
          {text: '뉴스룸', link: '/vrsuya/news' }
        ]
      },
      { text: '아이템',
        items: [
          {
            items: [
              {text: 'FAQ', link: '/item/faq' }
            ]
          },
          {
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
          }
        ]
      },
      { text: '애드온',
        items: [
          {text: 'Cleaner', link: '/addon/cleaner' },
          {text: 'Core', link: '/addon/core' },
          {text: 'Installer', link: '/addon/installer' },
          {text: 'Utility', link: '/addon/utility' }
        ]
      }
    ],

    sidebar: {
      '/vrsuya/': [
        {
          text: 'VRSuya',
          items: [
            {text: '브랜드 소개', link: '/vrsuya' },
            {text: '외주 의뢰', link: '/vrsuya/outsourcing' },
            {text: '환불 정책', link: '/vrsuya/refund' }
          ]
        },
        {
          text: '포트폴리오',
          collapsed: true,
          items: [
            {text: '마요 AFK', link: '/vrsuya/portfolio/chocolate_rice_MAYO_AFK' },
            {text: '플럼 AFK', link: '/vrsuya/portfolio/komado_Plum_AFK' },
            // {text: '플레어/라줄리 AFK', link: '/vrsuya/portfolio/Elychiffon_Flare_Lazuli_AFK' },
            {text: '라무네 AFK', link: '/vrsuya/portfolio/EMOLab_Ramune_AFK' },
            {text: '쿠마리 AFK', link: '/vrsuya/portfolio/JINGO_KUMALY_AFK' },
            {text: 'VIVH AFK', link: '/vrsuya/portfolio/Rime_VIVH_AFK' },
            {text: '네하일 AFK', link: '/vrsuya/portfolio/KANAlia_Nehail_AFK' },
            {text: '노치카 AFK', link: '/vrsuya/portfolio/Hamuketsu_Nochica_AFK' },
            {text: '에쿠 AFK', link: '/vrsuya/portfolio/septem47_Eku_AFK' },
            {text: '치세 AFK', link: '/vrsuya/portfolio/VGC_Chise_AFK' },
            {text: '허니비 의상용 모션', link: '/vrsuya/portfolio/Honeybee_Promote_Motion' },
            {text: '포치마루 AFK', link: '/vrsuya/portfolio/Hamuketsu_Pochimaru_AFK' },
            {text: '밀피 AFK', link: '/vrsuya/portfolio/MitoArisaka_Milfy_AFK' },
            {text: '쇼콜라 AFK', link: '/vrsuya/portfolio/komado_Chocolat_AFK' },
            {text: 'youka 의상용 모션', link: '/vrsuya/portfolio/Honeybee_youka_Motion' },
            {text: '아이리 AFK', link: '/vrsuya/portfolio/Kyubi_Airi_AFK' },
            {text: 'Fiesta del Agua 의상용 모션', link: '/vrsuya/portfolio/Honeybee_Fiesta_del_Agua_Motion' },
            {text: '시나노 AFK', link: '/vrsuya/portfolio/pondero_Shinano_AFK' },
            {text: 'E-girls 댄스 카피', link: '/vrsuya/portfolio/ShinRoumei_E-girls_Dance' },
            {text: 'NewJeans 댄스 카피', link: '/vrsuya/portfolio/ShinRoumei_NewJeans_Dance' },
            {text: '시오 AFK', link: '/vrsuya/portfolio/chocolate_rice_Sio_AFK' },
            {text: '온나비 박수 모션', link: '/vrsuya/portfolio/Onnabi_Clap_Motion' },
            {text: '슈가 AFK', link: '/vrsuya/portfolio/Aivy_Sugar_AFK' },
            {text: 'Izanagi 의상용 AFK', link: '/vrsuya/portfolio/Jarnefeldt_Izanagi_AFK' },
            {text: 'TWICE 댄스 카피', link: '/vrsuya/portfolio/ShinRoumei_TWICE_Dance' },
            {text: 'Elyra 의상용 AFK', link: '/vrsuya/portfolio/Pini_Elyra_Motion' },
            {text: '마누카 AFK', link: '/vrsuya/portfolio/JINGO_MANUKA_AFK' },
            {text: '우즈키 AFK', link: '/vrsuya/portfolio/MinamotoSyun_Uzuki_AFK' },
            {text: '모에 AFK', link: '/vrsuya/portfolio/Kyubi_Moe_AFK' },
            {text: '튜베로즈 AFK', link: '/vrsuya/portfolio/MinamotoSyun_TubeRose_AFK' },
            {text: '마야 AFK', link: '/vrsuya/portfolio/Kyubi_Maya_AFK' }
          ]
        },
        {
          text: '뉴스룸',
          collapsed: true,
          items: [
            {text: '업데이트', link: '/vrsuya/news/update' }
          ]
        }
      ],

      '/item/': [
        {
          text: 'VRSuya 프로젝트',
          items: [
            { text: '아바타 제작기', link: '/projects/vrsuya' },
            { text: '에드온 개발', link: '/projects/addons' }
          ]
        }
      ]
    },

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
      message: 'Reproduction and distribution of the website without written permission of the author is prohibited. Built with VitePress.',
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
