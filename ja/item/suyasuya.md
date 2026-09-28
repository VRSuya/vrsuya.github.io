---
title: すやすや
description: すやすやアイテム詳細
aside: true
outline: [1, 3]
---

<script setup>
import { VPButton } from 'vitepress/theme'
</script>

# すやすや {#suyasuya}

<div class="video-container">
  <iframe 
    src="https://www.youtube.com/embed/Ee4tZTC6bxs" 
    title="すやすや" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

<VPButton tag="a" href="https://vrsuya.booth.pm/items/5846447" text="BOOTHページへ" theme="brand" />

## 表情アニメーションの不具合を修正する {#fix-facial}

![FixFacialAnimation](/assets/fixfacialanimation/vrsuya_fixfacialanimation.jpg)

Prefabに含まれている FixFacialAnimation コンポーネントで`Get Avatar Data`ボタンを押すと、現在アバターに設定されている表情用Blendshapeの一覧が表示されます。

無効化したいBlendshapeの横にある`Add`ボタンを押して、無効化対象のBlendshapeリストへ追加します。

必要に応じて、Blendshape名を手動で追加することもできます。