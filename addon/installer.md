---
title: VRSuya Installer
description: VRSuya Installer
aside: true
outline: [1, 3]
---

<script setup>
import { VPButton } from 'vitepress/theme'
</script>

# VRSuya Installer 설치 방법 {#setup-vpm}

<br>

<VPButton tag="a" href="/addon/vpm" text="VPM 리포지토리 등록 및 패키지 설치" theme="brand" /> 

---

# 애드온 {#addon}

### AnimationOffsetUpdater

모구모구 프로젝트의 AnimationClip에서 볼 본의 Position을 재조정하는 애드온 입니다

### AvatarPatcher

아바타의 모델 데이터와 JSON 파일 데이터를 병합하여, 새로운 모델 데이터를 출력합니다

현재 제작 중인 애드온 입니다

### AvatarRebuilder

기존 아바타를 새로운 모델 데이터로 교체하거나 추가하는 애드온 입니다

### AvatarSettingUpdater

더 이상 사용하지 않는 컴포넌트 입니다

### HDiffPatcher

아바타의 원본 모델 데이터와 HDiff<small>(차분)</small> 데이터를 병합하여, 새로운 모델 데이터를 출력합니다

`패치 후 아바타 교체`를 활성화하면 자동으로 AvatarRebuilder를 호출하여 작업을 실시합니다

<br>

---

# 모듈러 아바타 대응 컴포넌트 {#modular}

### AnimatedHairPhysBone

지정한 이름의 PhysBone 컴포넌트를 찾아서 `Is Animated` 프로퍼티를 활성화하는 컴포넌트 입니다

### AnimatedPhysBone

아바타의 볼 본의 PhysBone 컴포넌트를 찾아서 `Is Animated` 프로퍼티를 활성화하는 컴포넌트 입니다

### AnimationClipRenamer

지정한 AnimationClip의 쉐이프키 이름을 지정된 이름으로 변경하거나, 경로로 수정합니다

### ChangeStandingPose

아바타의 Action 레이어에서 기본 Stand 포즈를 아바타의 실제 Stand 포즈로 일괄 변경합니다

### ConstraintConnector

Constraint 컴포넌트를 실제 본과 연결을 합니다

### FixFacialAnimation

지정한 AnimationClip에 아바타의 Blink 쉐이프키나 지정한 쉐이프키의 값을 0으로 설정하는 키를 추가합니다, 그리고 스야스야 모드 진입시 FX 레이어의 지정한 인덱스를 비활성화 합니다

### FixLocomotion

AFK, VRCEmote 및 지정한 파라메터가 활성화 될 때, 캐릭터가 점프 및 이동으로 인해 포즈가 망가지는 현상을 개선합니다

### ForceOnWriteDefaults

아바타의 FX 레이어의 모든 State를 Write Defaults를 활성화 합니다

### MenuSelector

지정한 VRC 메뉴 에셋 이름을 기반으로 영어, 한국어, 일본어 버전을 찾아서 재할당 합니다

### PhysBoneConnector

볼 또는 발가락 PhysBone 컴포넌트를 실제 본과 연결을 합니다

### RemoveAnimatorLayer

아바타의 FX 레이어에서 지정된 이름의 레이어를 삭제합니다

### RemoveFXMask

아바타의 FX 레이어에서 모든 마스크를 제거합니다

### RemovePhysBone

아바타에서 특정 이름의 PhysBone 컴포넌트를 삭제합니다