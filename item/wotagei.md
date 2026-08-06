---
title: 오타게
description: 오타게 아이템 설명
aside: true
outline: [1, 3]
---

<script setup>
import { VPButton } from 'vitepress/theme'
</script>

# 오타게 {#wotagei}

<div class="video-container">
  <iframe 
    src="https://www.youtube.com/embed/6lURisfH9vM" 
    title="오타게" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

<div class="video-container">
  <iframe 
    src="https://www.youtube.com/embed/DnnZ-gKmgO8" 
    title="오타게" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

<VPButton tag="a" href="https://vrsuya.booth.pm/items/4519820" text="BOOTH 페이지로" theme="brand" /> 

## 미지원 아바타 오프셋 조정 {#offset}

![아바타 복제](/assets/duplicate/vrsuya_avatar_offset_01.jpg)

먼저 아바타를 복제하여 더미 아바타를 생성합니다

::: danger

복제하지 않고도 진행할 수 있으나, 일부 케이스에서는 애니메이션 포즈로 고정될 수 있으므로 더미 아바타에서 진행하는 것을 권장합니다

:::

<br>

![애니메이터 할당](/assets/duplicate/vrsuya_avatar_offset_02_wotagei.jpg)

아바타의 Animator 컴포넌트의 Controller에 `VRSuya_Wotagei_ActionLayer` 애니메이터 컨트롤러를 할당합니다

<br>

![Prefab 추가](/assets/duplicate/vrsuya_avatar_offset_03_wotagei.jpg)

아바타의 루트에 `VRSuya_Wotagei_Modular` 프리팹을 추가합니다

<br>