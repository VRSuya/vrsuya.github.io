---
title: VR 사운드패드
description: VR 사운드패드 아이템 설명
aside: true
outline: [1, 3]
---

<script setup>
import { VPButton } from 'vitepress/theme'
</script>

# VR 사운드패드 {#soundpad}

<div class="video-container">
  <iframe 
    src="https://www.youtube.com/embed/IxPpmZQ70A8" 
    title="VR 사운드패드" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

<div class="video-container">
  <iframe 
    src="https://www.youtube.com/embed/OKuONVls5lQ" 
    title="VR 사운드패드" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

<VPButton tag="a" href="https://vrsuya.booth.pm/items/5950846" text="BOOTH 페이지로" theme="brand" /> 

## 오디오 파일 교체 방법 {#change-sfx}

### 간단한 방법 {#replace-audio}

![윈도우 탐색기에서 파일 교체](/assets/soundpad/vrsuya_soundpad_explorerer.jpg)

**변경하려는 오디오 파일을 기존에 존재하는 오디오 파일에 덮어쓰기** 합니다, 다른 폴더에서 이름을 동일하게 변경 후 덮어쓰기하면 편리합니다

::: danger

반드시 **Unity 에디터가 비활성화 상태일 때 파일을 교체**하여야 합니다<br>
그렇지 않으면 Unity 에디터가 파일 삭제 된 것으로 인식하여, 변경된 에셋을 찾을 수 없을 수 있습니다

:::

<br>

### 애니메이터 수정 {#edit-animator}

![FX 레이어 열기](/assets/soundpad/vrsuya_soundpad_animator_01.jpg)

`VRSuya/SoundPad/Controller` 폴더에서 `VRSuya_SoundPad_Constraint_FXLayer` 또는 `VRSuya_SoundPad_FXLayer` 애니메이터 컨트롤러 파일을 엽니다<br>
월드 고정 기능이 있는 Prefab을 사용 중이라면 `Constraint`가 있는 파일을 수정해 주세요

<br>

![애니메이터 수정](/assets/soundpad/vrsuya_soundpad_animator_02.jpg)

Animator 탭<small>(Window → Animation → Animator)</small>에서 `SoundPad/Effect` 레이어에서 수정을 원하는 State를 선택합니다

그 다음, Unity 프로젝트에 따로 임포트한 오디오 파일을 `VRC Animator Play Audio` 컴포넌트의 Clips에 할당해 줍니다