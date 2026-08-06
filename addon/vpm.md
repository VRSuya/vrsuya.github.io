---
title: VPM 등록 및 패키지 설치
description: VRSuya VPM 리스트를 VCC에 등록하고 패키지를 설치하는 방법
aside: true
outline: [1, 3]
---

<script setup>
import { VPButton } from 'vitepress/theme'
</script>

# VPM 등록 및 패키지 설치 {#setup-vpm}

<div class="video-container">
  <iframe 
    src="https://www.youtube.com/embed/-VFI9xH7kws" 
    title="VRSuya Installer" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

YouTube 영상에 자막이 포함되어 있으므로, 활성화하고 시청해 주세요

## VPM 리포지토리 자동 등록 {#auto-add-repository}

<VPButton tag="a" href="vcc://vpm/addRepo?url=https://vrsuya.com/vpm/vpm.json" text="VPM 리포지토리 등록" theme="brand" /> 

## VPM 리포지토리 수동 등록 {#manual-add-repository}

:::::: details 상세과정

![VRChat Creator Companion](/assets/addon/vpm/vpm_1_vcc_settings.jpg)

VRChat Creator Companion에서 **Settings 버튼을 클릭**합니다

<br>

![VPM 주소 입력](/assets/addon/vpm/vpm_2_vcc_packages.jpg)

Packages 탭에서 **Add Repository 버튼을 누른 후 `https://vrsuya.com/vpm/vpm.json` 입력**합니다

::: warning

VRSuya Installer 패키지는 [Modular Avatar](https://modular-avatar.nadena.dev/) 패키지가 필요합니다<br>
따라서 해당 패키지가 없다면 이 단계에서 같이 설치하면 좋습니다

:::

<br>

![VPM 추가](/assets/addon/vpm/vpm_3_add_repository.jpg)

**Add Repository 버튼을 눌러 등록**합니다

::::::

## VPM 패키지 설치 {#add-package}

![프로젝트 관리](/assets/addon/vpm/vpm_4_manage_project.jpg)

설치를 원하는 프로젝트의 **Manage Project 버튼을 클릭**합니다

<br>

![패키지 설치](/assets/addon/vpm/vpm_5_add_package.jpg)

**원하는 VRSuya 패키지<small>(VRSuya - Installer)</small>에서 + 버튼 클릭**합니다