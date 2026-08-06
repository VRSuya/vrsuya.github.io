---
title: AFK 3種セット
description: AFK 3種セットアイテム詳細
aside: true
outline: [1, 3]
---

<script setup>
import { VPButton } from 'vitepress/theme'
</script>

# AFK 3種セット {#afk}

<div class="video-container">
  <iframe 
    src="https://www.youtube.com/embed/Y9NRcc8ICf8" 
    title="AFK 3種セット" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

<VPButton tag="a" href="https://vrsuya.booth.pm/items/4197129" text="BOOTHページへ" theme="brand" /> 

## 非対応アバターでのオフセット調整 {#offset}

### 作業前の準備 {#preset}

![アバターを複製](/assets/duplicate/vrsuya_avatar_offset_01.jpg)

最初にアバターを複製し、作業用のダミーアバターを作成します。

::: danger

複製しなくても作業は可能ですが、一部の環境ではアニメーションのポーズで固定されてしまう場合があります。  
そのため、ダミーアバターを使用して作業することをおすすめします。

:::

<br>

![Animatorを設定](/assets/duplicate/vrsuya_avatar_offset_02_afk.jpg)

アバターの Animator コンポーネントの Controller に `VRSuya_AFK_Offset` Animator Controller を割り当てます。

<br>

![Prefabを追加](/assets/duplicate/vrsuya_avatar_offset_03_afk.jpg)

アバターのルートに `VRSuya_AFK_Modular` Prefab を追加します。

<br>

![Constraintを設定](/assets/afk/vrsuya_afk_constraint.jpg)

`VRSuya_AFK_Modular/Drinking/RightHand` オブジェクトの Parent Constraint の Source Transform に、アバターの``右手``ボーンの Transform を割り当てます。

### お仕事 {#working}

![アニメーションを再生](/assets/afk/vrsuya_afk_play_animation.jpg)

Animationタブ<small>（Window → Animation → Animation）</small>で、`VRSuya_AFK_Working_Master_Loop` の `0フレーム`を選択し、Previewモードを有効にします。

::: info

各モードでは、それぞれ指定された**アニメーションファイルと基準フレーム**を基準として、すべてのオフセットを調整します。

:::

<br>

![お仕事（側面）](/assets/afk/vrsuya_afk_working_offset_side.jpg)
![お仕事（上面）](/assets/afk/vrsuya_afk_working_offset_top.jpg)

`VRSuya_AFK_Modular/Working/Offset` オブジェクトの位置とスケールを調整します。

- 親指がノートPCに半分ほど埋まる程度になるようにスケールを調整します<small>（全体スケール）</small>
- 左手中指の先端がキーボードの Tabキー と Caps Lockキー の間のラインにくるように位置を調整します<small>（Z軸方向）</small>

<br>

![椅子の高さ](/assets/afk/vrsuya_afk_working_offset_chair.jpg)

`VRSuya_AFK_Modular/Working/Offset/Chair` オブジェクトのBlendshapeを調整し、椅子の高さを合わせます。

### ごくごく {#drinking}

Animationタブで `VRSuya_AFK_Drinking_Master_Intro` の `130フレーム`を選択し、Previewモードを有効にします。

![ごくごく（側面）](/assets/afk/vrsuya_afk_drinking_offset_side.jpg)
![ごくごく（上面）](/assets/afk/vrsuya_afk_drinking_offset_top.jpg)

`VRSuya_AFK_Modular/Drinking/RightHand/Object/Can` オブジェクトの位置と回転を調整します。

- 側面から見て、右手の人差し指と小指の先端を結んだラインに合わせて傾け、缶の飲み口が顔にほぼ触れる位置になるように調整します。
- 上面から見て、缶が指の内側に自然に収まるよう位置を調整し、飲み口が下向きになるように回転させます。

### すやすや {#sleeping}

Animationタブで `VRSuya_AFK_Sleeping_Master_Loop` の `0フレーム`を選択し、Previewモードを有効にします。

![すやすや（上面）](/assets/afk/vrsuya_afk_sleeping_offset_top.jpg)

`VRSuya_AFK_Modular/Sleeping/Offset` オブジェクトの位置とスケールを調整します。

- 上面から見て、右手が抱き枕の上部中央付近にくるように位置を調整します。
- 側面から見て、抱き枕が両脚の間に収まるよう高さを調整します。

### Prefabを書き出す {#export}

![Previewモードを終了](/assets/afk/vrsuya_afk_stop_animation.jpg)

Animationタブで Preview ボタンを押してPreviewモードを終了します。アバターが元のポーズに戻れば完了です。

<br>

![Prefabを書き出す](/assets/afk/vrsuya_afk_export_prefab.jpg)

作業が完了したPrefabを `VRSuya/AFK/Prefab` フォルダーへドラッグ＆ドロップすると、Prefabの書き出し画面が表示されます。Prefab Variant ボタンを押すと書き出しが完了します。

作成されたVariant Prefabの名前を変更し、オフセットを調整したアバターへ追加すれば使用できます。

## モニター画面の変更方法 {#change-screen}