---
title: VRSuya AvatarRebuilder
description: 순정이 아닌 아바타 모델의 패치 방법에 대한 가이드 문서
aside: true
outline: [1, 3]
---

::: danger

해당 문서는 아바타 모델이 **순정이 아닌 경우**에 볼 본이나 발가락 본을 아바타에 넣는 방법에 대해 설명하는 문서 입니다

순정 아바타 모델인 경우에는 [HDiffPatcher](./installer_hdiffpatcher) 유틸리티를 이용하여 패치해 주시기 바랍니다

:::

::: danger

VRSuya의 아이템은 아바타의 순정 상태<small>(스케일링 등)</small>를 최대한 그대로 보존하는 것을 목표로 개발되었습니다<br>
**타사의 모델 패치는 이러한 데이터를 덮어씌우기를 하여, 결과물이 올바르게 내보내기가 되지 않는 경우도 존재**할 수 있습니다

이 경우에는 해당 아이템 제작자에게 순정 상태에 가깝게 내보내기를 하도록 업데이트를 하거나, 사용자가 직접 문제를 해결해야 합니다

:::

<br>

---

# 개요 {#outline}

1. 순정 아바타에 **모델 수정 패치를 적용**한다<small>(페이셜 패치와 같은 모델 패치를 먼저 적용)</small>
1. Blender에서 VRSuya AvatarPatcher 애드온에서 추가 본에 관한 JSON 파일을 불러와서 **추가 모델 패치를 적용**한다
1. Unity에서 VRSuya AvatarRebuilder를 통해 **아바타를 교체**한다

<br>

---

# 적용 방법 {#guide}

<div class="video-container">
  <iframe 
    src="https://www.youtube.com/embed/4LkA4Y58XC4" 
    title="VRSuya Patcher" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

YouTube 영상에 자막이 포함되어 있으므로, 활성화하고 시청해 주세요

<br>

---

### Blender에서 아바타 패치

![Blender 설정](/assets/avatarpatch/vrsuya_avatar_patch_01.jpg)

Edit → **Preferences 메뉴**에 들어갑니다

<br>

![애드온 탭](/assets/avatarpatch/vrsuya_avatar_patch_02.jpg)

**Add-ons 탭으로 이동**합니다

<br>

![디스크에서 설치](/assets/avatarpatch/vrsuya_avatar_patch_03.jpg)

우측 상단의 메뉴에서 **`Install from Disk` 메뉴**로 들어갑니다

<br>

![애드온 설치](/assets/avatarpatch/vrsuya_avatar_patch_04.jpg)

**`AvatarPatcher` 애드온을 설치**합니다, 아시아시 프로젝트의 경우 `Bone Recalculator` 애드온도 추가로 설치합니다

<br>

![불필요한 오브젝트 삭제](/assets/avatarpatch/vrsuya_avatar_patch_05.jpg)

기본 상태의 Blender라면 불필요한 오브젝트가 존재할 것입니다, **불필요한 오브젝트를 모두 선택(A키)한 다음 삭제(X키)**를 합니다

<br>

![JSON 불러오기](/assets/avatarpatch/vrsuya_avatar_patch_06.jpg)

우측 패널(N키)에서 VRSuya 탭에 들어가면 Avatar Patcher 패널을 볼 수 있습니다

**`Load JSON File` 버튼을 눌러 JSON 파일**을 불러옵니다

<br>

![JSON 선택](/assets/avatarpatch/vrsuya_avatar_patch_07.jpg)

적용하려는 아바타에 **해당되는 JSON 파일을 불러옵니다**

<br>

![FBX 불러오기](/assets/avatarpatch/vrsuya_avatar_patch_08.jpg)

**`Import FBX` 버튼**을 눌러서 FBX 파일을 불러옵니다

<br>

![원본 모델 파일 지정](/assets/avatarpatch/vrsuya_avatar_patch_09.jpg)

**패치를 하려는 모델 FBX 파일**을 불러옵니다

::: danger

반드시 수정된 모델 파일을 지정해야만 합니다, 순정 모델 파일을 지정하면 이전에 적용한 내용이 초기화 됩니다

:::

<br>

::: details 모구모구 프로젝트의 경우

![FBX 내보내기](/assets/avatarpatch/vrsuya_avatar_patch_10-1.jpg)

`Apply Patch` 버튼을 눌러 내보내기를 합니다

:::

::: details 아시아시 프로젝트의 경우

![발가락 회전 적용](/assets/avatarpatch/vrsuya_avatar_patch_10-2.jpg)

`Export FBX right after applying patch`를 체크해제 한 다음, `Apply Patch` 버튼을 눌러 먼저 패치를 적용을 합니다

그 다음 `Recalculate Toe Bones` 버튼을 눌러 발가락 회전을 적용해 줍니다

<br>

![FBX 내보내기](/assets/avatarpatch/vrsuya_avatar_patch_11-2.jpg)

`Export FBX` 버튼을 눌러 내보내기를 합니다

:::

<br>

![FBX 파일 내보내기](/assets/avatarpatch/vrsuya_avatar_patch_12.jpg)

**기존 모델 경로에 새로운 이름으로 FBX 파일을 내보내기** 합니다

<br>

---

### Unity에서 아바타 교체

![AvatarRebuilder 메뉴](/assets/avatarpatch/vrsuya_avatar_patch_13.jpg)

Tools → VRSuya → Installer → **AvatarRebuilder** 메뉴로 들어갑니다

<br>

![새로운 아바타 모델 지정](/assets/avatarpatch/vrsuya_avatar_patch_14.jpg)

기존 아바타에 교체를 하려는 아바타가 올바르게 들어가 있는지 확인한 후, Blender에서 **수정한 아바타를 새 아바타에 할당**합니다

::: warning

Blender에서 패치한 모델 파일을 Unity 프로젝트로 가져오지 않았다면 임포트를 해야만 합니다

:::

<br>

![Prefab 추가](/assets/avatarpatch/vrsuya_avatar_patch_15.jpg)

해당 아바타에 맞는 모구모구 프로젝트 또는 아시아시 프로젝트 **Prefab을 아바타에 추가**합니다