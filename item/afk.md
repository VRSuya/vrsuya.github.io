---
title: VRChat AFK 3종 세트
description: VRChat AFK 3종 세트 아이템 설명
aside: true
outline: [1, 3]
---

<script setup>
import { VPButton } from 'vitepress/theme'
</script>

# VRChat AFK 3종 세트 {#afk}

<div class="video-container">
  <iframe 
    src="https://www.youtube.com/embed/Y9NRcc8ICf8" 
    title="VRChat AFK 3종 세트" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

<VPButton tag="a" href="https://vrsuya.booth.pm/items/4197129" text="BOOTH 페이지로" theme="brand" /> 

## 미지원 아바타 오프셋 조정 {#offset}

### 작업 전 기본 설정 {#preset}

![아바타 복제](/assets/duplicate/vrsuya_avatar_offset_01.jpg)

먼저 아바타를 복제하여 더미 아바타를 생성합니다

::: danger

복제하지 않고도 진행할 수 있으나, 일부 케이스에서는 애니메이션 포즈로 고정될 수 있으므로 더미 아바타에서 진행하는 것을 권장합니다

:::

<br>

![애니메이터 할당](/assets/duplicate/vrsuya_avatar_offset_02_afk.jpg)

아바타의 Animator 컴포넌트의 Controller에 `VRSuya_AFK_Offset` 애니메이터 컨트롤러를 할당합니다

<br>

![Prefab 추가](/assets/duplicate/vrsuya_avatar_offset_03_afk.jpg)

아바타의 루트에 `VRSuya_AFK_Modular` 프리팹을 추가합니다

<br>

![Constraint 할당](/assets/afk/vrsuya_afk_constraint.jpg)

`VRSuya_AFK_Modular/Drinking/RightHand` 오브젝트의 Parent Constraint의 Source Transform에 `오른손` 본의 Transform을 할당합니다

### 일하는 중 {#working}

![애니메이션 재생](/assets/afk/vrsuya_afk_play_animation.jpg)

Animation 탭<small>(Window → Animation → Animation)</small>에서 `VRSuya_AFK_Working_Master_Loop`의 `0 프레임`의 Preview 모드로 진입합니다

::: info

각 모드마다 오프셋을 위한 **애니메이션 파일과 기준 프레임**을 기준 삼아서 모든 오프셋을 조정합니다

:::

<br>

![일하는 중 사이드뷰](/assets/afk/vrsuya_afk_working_offset_side.jpg)
![일하는 중 탑뷰](/assets/afk/vrsuya_afk_working_offset_top.jpg)

`VRSuya_AFK_Modular/Working/Offset` 오브젝트의 위치와 크기를 변경합니다

- 엄지 손가락이 노트북에 반쯤 묻혀 있는 정도로 크기를 조정합니다<small>(전체 스케일)</small>
- 왼손 중지 끝부분이 키보드의 Tab키와 Caps Lock키 사이 라인에 걸치도록 위치합니다<small>(Z축 위치)</small>

<br>

![의자 높이](/assets/afk/vrsuya_afk_working_offset_chair.jpg)

`VRSuya_AFK_Modular/Working/Offset/Chair` 오브젝트의 Blendshape를 조절하여 의자 높이를 맞춥니다

### 마시는 중 {#drinking}

Animation 탭에서 `VRSuya_AFK_Drinking_Master_Intro`의 `130 프레임`의 Preview 모드로 진입합니다

![마시는 중 사이드뷰](/assets/afk/vrsuya_afk_drinking_offset_side.jpg)
![마시는 중 탑뷰](/assets/afk/vrsuya_afk_drinking_offset_top.jpg)

`VRSuya_AFK_Modular/Drinking/RightHand/Object/Can` 오브젝트의 위치와 회전을 변경합니다

- 측면에서 봤을 때, 오른손 검지와 소지 끝를 잇는 선을 기준으로 기울여 줍니다, 캔의 입구가 얼굴에 거의 맞닿도록 위치를 변경합니다
- 상단면에서 봤을 때, 캔이 손가락 안쪽 면에 잘 맞게 위치를 변경해 줍니다, 캔의 입구가 아래로 가도록 회전합니다

### 자는 중 {#sleeping}

Animation 탭에서 `VRSuya_AFK_Sleeping_Master_Loop`의 `0 프레임`의 Preview 모드로 진입합니다

![자는 중 탑뷰](/assets/afk/vrsuya_afk_sleeping_offset_top.jpg)

`VRSuya_AFK_Modular/Sleeping/Offset` 오브젝트의 위치와 크기를 변경합니다

- 상단면에서 봤을 때, 오른손이 다키마쿠라 상단 중앙 쯤에 위치하도록 변경합니다
- 측면에서 봤을 때에는 다리 사이에 다키마쿠라가 위치하도록 높이를 조절합니다

### Prefab 내보내기 {#export}

![프리뷰 모드 종료](/assets/afk/vrsuya_afk_stop_animation.jpg)

Animation 탭에서 Preview 버튼을 눌러서 Preview 모드를 종료합니다, 아바타가 원래 포즈로 돌아오면 됩니다

<br>

![Prefab 내보내기](/assets/afk/vrsuya_afk_export_prefab.jpg)

작업이 완료된 Prefab을 `VRSuya/AFK/Prefab` 폴더 위로 끌어다 놓으면 Prefab 내보내기 창이 나옵니다, `Prefab Variant` 버튼을 누르면 내보내기가 완료가 됩니다

새로 생긴 Variant Prefab 파일 이름을 변경한 후, 맞춤 설정한 아바타에 넣으면 사용하실 수 있습니다

## 모니터 화면 변경 방법 {#change-screen}