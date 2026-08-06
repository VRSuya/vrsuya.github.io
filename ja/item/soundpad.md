---
title: VRサウンドパッド
description: VRサウンドパッドアイテム詳細
aside: true
outline: [1, 3]
---

<script setup>
import { VPButton } from 'vitepress/theme'
</script>

# VRサウンドパッド {#soundpad}

<div class="video-container">
  <iframe 
    src="https://www.youtube.com/embed/IxPpmZQ70A8" 
    title="VRサウンドパッド" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

<div class="video-container">
  <iframe 
    src="https://www.youtube.com/embed/OKuONVls5lQ" 
    title="VRサウンドパッド" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

<VPButton tag="a" href="https://vrsuya.booth.pm/items/5950846" text="BOOTHページへ" theme="brand" /> 

## オーディオファイルの差し替え方法 {#change-sfx}

### 簡単な方法 {#replace-audio}

![エクスプローラーでファイルを差し替える](/assets/soundpad/vrsuya_soundpad_explorerer.jpg)

**差し替えたいオーディオファイルで、既存のオーディオファイルを上書き**します。  
別のフォルダーで同じファイル名に変更してから上書きすると便利です。

::: danger

**Unityエディターを閉じた状態でファイルを差し替えてください。**<br>
Unityエディターを起動したまま差し替えると、ファイルが削除されたものと認識され、差し替え後のアセットを正しく認識できない場合があります。

:::

<br>

### Animatorを編集する {#edit-animator}

![FXレイヤーを開く](/assets/soundpad/vrsuya_soundpad_animator_01.jpg)

`VRSuya/SoundPad/Controller` フォルダーにある `VRSuya_SoundPad_Constraint_FXLayer` または `VRSuya_SoundPad_FXLayer` のAnimator Controllerを開きます。<br>
ワールド固定機能付きのPrefabを使用している場合は、`Constraint` が付いているファイルを編集してください。

<br>

![Animatorを編集](/assets/soundpad/vrsuya_soundpad_animator_02.jpg)

Animatorタブ<small>（Window → Animation → Animator）</small>で、`SoundPad/Effect` レイヤー内の変更したいStateを選択します。

その後、Unityプロジェクトへインポートしたオーディオファイルを、`VRC Animator Play Audio` コンポーネントの Clips に割り当てます。