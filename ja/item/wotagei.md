---
title: ヲタ芸
description: ヲタ芸アイテム詳細
aside: true
outline: [1, 3]
---

<script setup>
import { VPButton } from 'vitepress/theme'
</script>

# ヲタ芸 {#wotagei}

<div class="video-container">
  <iframe 
    src="https://www.youtube.com/embed/6lURisfH9vM" 
    title="ヲタ芸" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

<div class="video-container">
  <iframe 
    src="https://www.youtube.com/embed/DnnZ-gKmgO8" 
    title="ヲタ芸" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

<VPButton tag="a" href="https://vrsuya.booth.pm/items/4519820" text="BOOTHページへ" theme="brand" /> 

## 非対応アバターでのオフセット調整 {#offset}

### 作業前の準備 {#preset}

![アバターを複製](/assets/duplicate/vrsuya_avatar_offset_01.jpg)

最初にアバターを複製し、作業用のダミーアバターを作成します。

::: danger

複製しなくても作業は可能ですが、一部の環境ではアニメーションのポーズで固定されてしまう場合があります。  
そのため、ダミーアバターを使用して作業することをおすすめします。

:::

<br>

![Animatorを設定](/assets/duplicate/vrsuya_avatar_offset_02_wotagei.jpg)

アバターの Animator コンポーネントの Controller に `VRSuya_Wotagei_ActionLayer` Animator Controller を割り当てます。

<br>

![Prefabを追加](/assets/duplicate/vrsuya_avatar_offset_03_wotagei.jpg)

アバターのルートに `VRSuya_Wotagei_Modular` Prefab を追加します。