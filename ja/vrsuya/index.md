---
title: VRSuyaについて
description: VRSuyaチームとメンバーのご紹介
layout: home
pageClass: vrsuya

hero:
  name: VRSuya
  tagline: VRSuyaは、VRChat向けの3Dアニメーションやアイテムを制作・販売しているクリエイターグループです。

features:
  - title: '💎 高品質なVRChatアセット'
    details: 'VRChatですぐにご利用いただけるよう、細部まで丁寧に最適化を行い、品質とパフォーマンスの両立を目指したアセットを制作しています。多くのユーザーが同時に使用しても快適に楽しめるよう、細かな部分までこだわり抜いて開発しています。'
  - title: '✏️ 自由なカスタマイズ'
    details: 'VRChatは、自分らしさや理想のスタイルを自由に表現できる世界です。VRSuyaのアイテムは豊富なカスタマイズ機能を備え、アバターを着飾る楽しさと、自分だけの個性を表現できるデザインを目指しています。'
  - title: '🔧 継続的なサポート'
    details: 'VRChatやUnityは、今もなお進化を続けています。VRSuyaでは、アイテムの制作段階から長く使い続けられることを考慮し、アセットやシステム構成を設計しています。将来のアップデートにも継続して対応し、ご購入いただいたアイテムを安心して長くお使いいただけるよう、日々研究と改善を重ねています。'

---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
   {
    avatar: '/assets/member/levin.jpg',
    name: 'Levin',
    title: '3Dゲームアニメーター',
    links: [
      { 
        icon: {
          svg: '<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M0,0h24v24H0V0ZM18.14,10.27v-1.15l-2.88-4.62h-1l-1.57,3.78-1.55-3.25h-.87s-2.62,6.19-2.62,6.19v-5.88h-1.78v.52h-1.36v1.81h1.36v5.23c0,.46.38.84.84.84h.89v5.76h1.82s0-2.61,0-2.61c0-1.45,1.25-2.62,2.8-2.63,0,0,.01,0,.02,0h0c2.53,0,4.58,1.92,4.58,4.28v.96h1.33v-5.17h1.36v-2.86l-1.36-1.2Z"/></svg>'
        },
        link: 'https://projectlevin.booth.pm',
        ariaLabel: 'BOOTH'
      },
      { icon: 'twitter', link: 'https://twitter.com/bunny_64479' },
      { icon: 'youtube', link: 'https://www.youtube.com/@_Levin_' }
    ]
  },
  {
    avatar: '/assets/member/macchiato.jpg',
    name: 'マキアート',
    title: 'テクニカルサポート担当',
    links: [
      { 
        icon: {
          svg: '<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M0,0h24v24H0V0ZM18.14,10.27v-1.15l-2.88-4.62h-1l-1.57,3.78-1.55-3.25h-.87s-2.62,6.19-2.62,6.19v-5.88h-1.78v.52h-1.36v1.81h1.36v5.23c0,.46.38.84.84.84h.89v5.76h1.82s0-2.61,0-2.61c0-1.45,1.25-2.62,2.8-2.63,0,0,.01,0,.02,0h0c2.53,0,4.58,1.92,4.58,4.28v.96h1.33v-5.17h1.36v-2.86l-1.36-1.2Z"/></svg>'
        },
        link: 'https://macchiato.booth.pm',
        ariaLabel: 'BOOTH'
      },
      { icon: 'twitter', link: 'https://twitter.com/VRC_Macchiato' },
      { icon: 'discord', link: 'https://discord.gg/macchiato' },
      { icon: 'youtube', link: 'https://www.youtube.com/@%EB%A7%88%EB%81%BC%EC%95%84%EB%98%90-Art' },
      { icon: 'github', link: 'https://github.com/crestudio' }
    ]
  },
  {
    avatar: '/assets/member/nijey.jpg',
    name: 'Nijey',
    title: '3Dゲームアニメーター',
    links: [
      { 
        icon: {
          svg: '<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M0,0h24v24H0V0ZM18.14,10.27v-1.15l-2.88-4.62h-1l-1.57,3.78-1.55-3.25h-.87s-2.62,6.19-2.62,6.19v-5.88h-1.78v.52h-1.36v1.81h1.36v5.23c0,.46.38.84.84.84h.89v5.76h1.82s0-2.61,0-2.61c0-1.45,1.25-2.62,2.8-2.63,0,0,.01,0,.02,0h0c2.53,0,4.58,1.92,4.58,4.28v.96h1.33v-5.17h1.36v-2.86l-1.36-1.2Z"/></svg>'
        },
        link: 'https://babyxoxo.booth.pm/',
        ariaLabel: 'BOOTH'
      },
      { icon: 'twitter', link: 'https://twitter.com/Nijey_06' }
    ]
  },
  {
    avatar: '/assets/member/futo.jpg',
    name: 'Futo',
    title: '3Dゲームアニメーター',
    links: [
      { icon: 'twitter', link: 'https://twitter.com/_Futo_10_07' }
    ]
  },
  {
    avatar: '/assets/member/hopeskyd.jpg',
    name: 'HopeskyD',
    title: '足足プロジェクトIP担当',
    links: [
      { icon: 'twitter', link: 'https://twitter.com/HopeskyD_VR' }
    ]
  }
]

</script>

---

# メンバー紹介 {#member}

<VPTeamMembers size="medium" :members />