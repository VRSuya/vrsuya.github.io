---
title: More AFK 스마트폰
description: More AFK 스마트폰 아이템 설명
aside: true
outline: [1, 3]
---

<script setup>
import { VPButton } from 'vitepress/theme'
</script>

# More AFK 스마트폰 {#more-afk}

<div class="video-container">
  <iframe 
    src="https://www.youtube.com/embed/9UR1AOIRaNk" 
    title="More AFK 스마트폰" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

<div class="video-container">
  <iframe 
    src="https://www.youtube.com/embed/S7vtw5Jkens" 
    title="More AFK 스마트폰" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

<VPButton tag="a" href="https://vrsuya.booth.pm/items/6817525" text="BOOTH 페이지로" theme="brand" /> 

## 미지원 아바타 오프셋 조정 {#offset}

![아바타 복제](/assets/duplicate/vrsuya_avatar_offset_01.jpg)

먼저 아바타를 복제하여 더미 아바타를 생성합니다

::: danger

복제하지 않고도 진행할 수 있으나, 일부 케이스에서는 애니메이션 포즈로 고정될 수 있으므로 더미 아바타에서 진행하는 것을 권장합니다

:::

<br>

![애니메이터 할당](/assets/duplicate/vrsuya_avatar_offset_02_more_afk.jpg)

아바타의 Animator 컴포넌트의 Controller에 `VRSuya_More-AFK_Phone_Offset` 애니메이터 컨트롤러를 할당합니다

<br>

![Prefab 추가](/assets/duplicate/vrsuya_avatar_offset_03_more_afk.jpg)

아바타의 루트에 `VRSuya_More-AFK_Phone` 프리팹을 추가합니다

<br>

## 휴대폰 화면 변경 방법 {#change-screen}