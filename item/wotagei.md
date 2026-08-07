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

### 작업 전 기본 설정 {#preset}

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

![더미 LightStick 추가](/assets/wotagei/vrsuya_wotagei_setup_lightstick.jpg)

`VRSuya_Wotagei_Modular/LeftHand/LightStick`과 `VRSuya_Wotagei_Modular/RightHand/LightStick` 오브젝트를 복제해서 더미를 만든 다음, 각각 아바타의 왼손과 오른손에 넣어줍니다

그 다음, 오브젝트를 활성화하여 보이도록 설정합니다

<br>

![애니메이션 재생](/assets/wotagei/vrsuya_wotagei_play_animation.jpg)

Animation 탭<small>(Window → Animation → Animation)</small>에서 `VRSuya_Wotagei_Cheer_16_Idle`의 `0 프레임`의 Preview 모드로 진입합니다

### LightStick 오프셋 조정 {#lightstick}

![LightStick 탑뷰](/assets/wotagei/vrsuya_wotagei_offset_top.jpg)
![LightStick 정면뷰](/assets/wotagei/vrsuya_wotagei_offset_front.jpg)
![LightStick 측면뷰](/assets/wotagei/vrsuya_wotagei_offset_frontside.jpg)

왼손과 오른손에 넣은 **더미 LightStick 오브젝트의 위치와 회전을 각각 변경**합니다

- LightStick을 최대한 수직으로 세우는 느낌으로 회전합니다
- 각 손에 맞춰서 높이와 위치를 조정합니다

### 월드 Transform 복사  {#copy_world_transform}

![애니메이션 정지](/assets/wotagei/vrsuya_wotagei_stop_animation.jpg)

Animation 탭에서 Preview 버튼을 눌러서 Preview 모드를 종료합니다, 아바타가 원래 포즈로 돌아오면 됩니다

<br>

![LightStick 월드 Transform 복사](/assets/wotagei/vrsuya_wotagei_copy_world_transform.jpg)

왼손이나 오른손에 넣은 더미 LightStick 오브젝트의 World Transform을 복사합니다

<br>

![LightStick 월드 Transform 붙여넣기](/assets/wotagei/vrsuya_wotagei_paste_world_transform.jpg)

왼손이나 오른손에 해당 되는 `VRSuya_Wotagei_Modular/LeftHand` 또는 `VRSuya_Wotagei_Modular/RightHand` 오브젝트에 방금 복사한 World Transform을 붙여넣습니다

반대편도 같은 과정으로 World Transform을 반영해 줍니다

### Prefab 내보내기 {#export}

![Prefab 내보내기](/assets/wotagei/vrsuya_wotagei_export_prefab.jpg)

작업이 완료된 Prefab을 `VRSuya/Wotagei/Prefab` 폴더 위로 끌어다 놓으면 Prefab 내보내기 창이 나옵니다, `Prefab Variant` 버튼을 누르면 내보내기가 완료가 됩니다

새로 생긴 Variant Prefab 파일 이름을 변경한 후, 맞춤 설정한 아바타에 넣으면 사용하실 수 있습니다