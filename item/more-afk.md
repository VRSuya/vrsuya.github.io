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

### 작업 전 기본 설정 {#preset}

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

![더미 휴대폰 추가](/assets/more_afk/vrsuya_more_afk_add_phone_to_hand.jpg)

`VRSuya_More-AFK_Phone/RightHand/Phone` 오브젝트를 복제해서 더미를 만든 다음, 아바타의 오른손에 넣어줍니다

그 다음, 오브젝트를 활성화하여 보이도록 설정합니다

<br>

![애니메이션 재생](/assets/more_afk/vrsuya_more_afk_play_animation.jpg)

Animation 탭<small>(Window → Animation → Animation)</small>에서 `VRSuya_More-AFK_Phone_Loop`의 `0 프레임`의 Preview 모드로 진입합니다

### 휴대폰 오프셋 조정 {#phone}

![휴대폰 측면뷰](/assets/more_afk/vrsuya_more_afk_offset_phone_side.jpg)
![휴대폰 정면뷰](/assets/more_afk/vrsuya_more_afk_offset_phone_front.jpg)

오른손에 넣은 **더미 휴대폰 오브젝트의 위치와 회전을 변경**합니다

- 오른손 검지와 약지 끝을 잇는 선을 기준으로 휴대폰을 붙이는 느낌으로 회전 및 위치를 조정합니다
- 오른손 소지 위에 휴대폰을 얹는 느낌으로 회전 및 위치를 조정합니다

### 의자 오프셋 조정 {#seat}

![의자 정면뷰](/assets/more_afk/vrsuya_more_afk_offset_seat_frontside.jpg)
![의자 측면뷰](/assets/more_afk/vrsuya_more_afk_offset_seat_side.jpg)

`VRSuya_More-AFK_Phone/Offset` 오브젝트의 위치와 크기를 변경합니다

- 머리가 의자 윗부분에 안착하는 느낌으로 조정합니다
- 왼손이 묻히지 않고 의자에 손을 얹은 느낌으로 조정합니다
- 발이나 허벅지가 묻히지 않고 의자에 다리를 얹은 느낌으로 조정합니다

### 월드 Transform 복사  {#copy_world_transform}

![애니메이션 정지](/assets/more_afk/vrsuya_more_afk_stop_animation.jpg)

Animation 탭에서 Preview 버튼을 눌러서 Preview 모드를 종료합니다, 아바타가 원래 포즈로 돌아오면 됩니다

<br>

![휴대폰 월드 Transform 복사](/assets/more_afk/vrsuya_more_afk_copy_world_transform.jpg)

오른손에 넣은 더미 휴대폰 오브젝트의 World Transform을 복사합니다

<br>

![휴대폰 월드 Transform 붙여넣기](/assets/more_afk/vrsuya_more_afk_paste_world_transform.jpg)

`VRSuya_More-AFK_Phone/RightHand` 오브젝트에 방금 복사한 World Transform을 붙여넣습니다

### Prefab 내보내기 {#export}

![Prefab 내보내기](/assets/more_afk/vrsuya_more_afk_export_prefab.jpg)

작업이 완료된 Prefab을 `VRSuya/More-AFK/Phone/Prefab` 폴더 위로 끌어다 놓으면 Prefab 내보내기 창이 나옵니다, `Prefab Variant` 버튼을 누르면 내보내기가 완료가 됩니다

새로 생긴 Variant Prefab 파일 이름을 변경한 후, 맞춤 설정한 아바타에 넣으면 사용하실 수 있습니다

<br>

## 휴대폰 화면 변경 방법 {#change-screen}