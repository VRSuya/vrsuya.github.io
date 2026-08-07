---
title: モア AFK スマートフォン
description: モア AFK スマートフォンアイテム詳細
aside: true
outline: [1, 3]
---

<script setup>
import { VPButton } from 'vitepress/theme'
</script>

# モア AFK スマートフォン {#more-afk}

<div class="video-container">
  <iframe 
    src="https://www.youtube.com/embed/9UR1AOIRaNk" 
    title="モア AFK スマートフォン" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

<div class="video-container">
  <iframe 
    src="https://www.youtube.com/embed/S7vtw5Jkens" 
    title="モア AFK スマートフォン" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

<VPButton tag="a" href="https://vrsuya.booth.pm/items/6817525" text="BOOTHページへ" theme="brand" /> 

## 非対応アバターでのオフセット調整 {#offset}

### 作業前の準備 {#preset}

![アバターを複製](/assets/duplicate/vrsuya_avatar_offset_01.jpg)

最初にアバターを複製し、作業用のダミーアバターを作成します。

::: danger

複製しなくても作業は可能ですが、一部の環境ではアニメーションのポーズで固定されてしまう場合があります。  
そのため、ダミーアバターを使用して作業することをおすすめします。

:::

<br>

![Animatorを設定](/assets/duplicate/vrsuya_avatar_offset_02_more_afk.jpg)

アバターの Animator コンポーネントの Controller に `VRSuya_More-AFK_Phone_Offset` Animator Controller を割り当てます。

<br>

![Prefabを追加](/assets/duplicate/vrsuya_avatar_offset_03_more_afk.jpg)

アバターのルートに `VRSuya_More-AFK_Phone` Prefab を追加します。

<br>

![ダミーのスマートフォンを追加](/assets/more_afk/vrsuya_more_afk_add_phone_to_hand.jpg)

`VRSuya_More-AFK_Phone/RightHand/Phone` オブジェクトを複製してダミーを作成し、アバターの右手へ配置します。

その後、オブジェクトを有効化して表示されるようにします。

<br>

![アニメーションを再生](/assets/more_afk/vrsuya_more_afk_play_animation.jpg)

Animationタブ<small>（Window → Animation → Animation）</small>で、`VRSuya_More-AFK_Phone_Loop` の `0フレーム`を選択し、Previewモードを有効にします。

### スマートフォンのオフセットを調整 {#phone}

![スマートフォン（側面）](/assets/more_afk/vrsuya_more_afk_offset_phone_side.jpg)
![スマートフォン（正面）](/assets/more_afk/vrsuya_more_afk_offset_phone_front.jpg)

右手に配置した**ダミーのスマートフォンオブジェクト**の位置と回転を調整します。

- 右手の人差し指と薬指の先端を結んだラインに沿って、スマートフォンを手に持たせるように位置と回転を調整します。
- スマートフォンが小指の上に自然に乗るようなイメージで、位置と回転を調整します。

### 椅子のオフセットを調整 {#seat}

![椅子（正面）](/assets/more_afk/vrsuya_more_afk_offset_seat_frontside.jpg)
![椅子（側面）](/assets/more_afk/vrsuya_more_afk_offset_seat_side.jpg)

`VRSuya_More-AFK_Phone/Offset` オブジェクトの位置とスケールを調整します。

- 頭が椅子の上部に自然に乗るように調整します。
- 左手が椅子にめり込まず、自然に置かれているように調整します。
- 足や太ももが椅子にめり込まず、自然に乗るように調整します。

### World Transformをコピー {#copy_world_transform}

![アニメーションを停止](/assets/more_afk/vrsuya_more_afk_stop_animation.jpg)

Animationタブで Preview ボタンを押してPreviewモードを終了します。アバターが元のポーズに戻れば完了です。

<br>

![スマートフォンのWorld Transformをコピー](/assets/more_afk/vrsuya_more_afk_copy_world_transform.jpg)

右手に配置したダミーのスマートフォンオブジェクトの World Transform をコピーします。

<br>

![スマートフォンのWorld Transformを貼り付け](/assets/more_afk/vrsuya_more_afk_paste_world_transform.jpg)

`VRSuya_More-AFK_Phone/RightHand` オブジェクトへ、コピーした World Transform を貼り付けます。

### Prefabを書き出す {#export}

![Prefabを書き出す](/assets/more_afk/vrsuya_more_afk_export_prefab.jpg)

作業が完了したPrefabを `VRSuya/More-AFK/Phone/Prefab` フォルダーへドラッグ＆ドロップすると、Prefabの書き出し画面が表示されます。Prefab Variant ボタンを押すと書き出しが完了します。

作成されたVariant Prefabの名前を変更し、オフセットを調整したアバターへ追加すれば使用できます。

<br>

## スマートフォン画面の変更方法 {#change-screen}