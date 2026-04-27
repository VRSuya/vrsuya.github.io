---
title: VRSuya 소개
description: VRSuya 팀과 멤버에 대한 설명
layout: home
pageClass: vrsuya

hero:
  name: VRSuya
  tagline: VRSuya는 VRChat 관련 3D 애니메이션 및 아이템을 판매하는 크리에이터 그룹 입니다.

features:
  - title: '💎 고품질 VRChat 에셋'
    details: 'VRChat에서 즉시 사용 가능하도록 꼼꼼하게 최적화 되어있으면서, 성능과 균형을 이루는 고품질의 에셋을 제공하는 것을 목표로 합니다. 많은 유저들이 사용하더라도 누구나 쾌적하게 즐길 수 있도록 많은 부분을 세심하게 살펴 제작합니다.'
  - title: '✏️ 자유로운 커스텀마이징'
    details: 'VRChat 세계는 자신의 취향과 추구하고자 하는 바를 마음껏 표현할 수 있는 공간입니다. VRSuya의 아이템들은 자유로운 커스텀 옵션을 제공하여 꾸미는 재미와 함께 본인의 개성을 표현할 수 있게 디자인 합니다.'
  - title: '🔧 지속적인 지원'
    details: 'VRChat과 Unity는 지금도 계속 발전하고 있습니다. 아이템을 제작할 때부터 어떻게 하면 오랫동안 사용이 가능한지 에셋과 구조 단계에서 설계하여 적용을 합니다. 이러한 장기적인 업데이트에 맞춰서 지속적으로 대응하여 구매한 아이템을 계속 사용할 수 있도록 연구 및 노력합니다.'

---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
   {
    avatar: '/asset/member/levin.jpg',
    name: '레빈',
    title: '3D 게임 애니메이터',
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
    avatar: '/asset/member/macchiato.jpg',
    name: '마끼아또',
    title: '기술지원 담당',
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
    avatar: '/asset/member/nijey.jpg',
    name: 'Nijey',
    title: '3D 게임 애니메이터',
    links: [
      { icon: 'twitter', link: 'https://twitter.com/Nijey_06' }
    ]
  },
  {
    avatar: '/asset/member/futo.jpg',
    name: '후토',
    title: '3D 게임 애니메이터',
    links: [
      { icon: 'twitter', link: 'https://twitter.com/_Futo_10_07' }
    ]
  },
  {
    avatar: '/asset/member/hopeskyd.jpg',
    name: 'HopeskyD',
    title: '아시아시 프로젝트 IP 담당',
    links: [
      { icon: 'twitter', link: 'https://twitter.com/HopeskyD_VR' }
    ]
  }
]

</script>

---

# 멤버 소개 {#member}

<VPTeamMembers size="medium" :members />