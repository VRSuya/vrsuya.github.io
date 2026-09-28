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

<br>

![ダミーのLightStickを追加](/assets/wotagei/vrsuya_wotagei_setup_lightstick.jpg)

`VRSuya_Wotagei_Modular/LeftHand/LightStick` と `VRSuya_Wotagei_Modular/RightHand/LightStick` オブジェクトを複製してダミーを作成し、それぞれアバターの左手と右手へ配置します。

その後、オブジェクトを有効化して表示されるようにします。

<br>

![アニメーションを再生](/assets/wotagei/vrsuya_wotagei_play_animation.jpg)

Animationタブ<small>（Window → Animation → Animation）</small>で、`VRSuya_Wotagei_Cheer_16_Idle` の `0フレーム`を選択し、Previewモードを有効にします。

### LightStickのオフセットを調整 {#lightstick}

![LightStick（上面）](/assets/wotagei/vrsuya_wotagei_offset_top.jpg)
![LightStick（正面）](/assets/wotagei/vrsuya_wotagei_offset_front.jpg)
![LightStick（側面）](/assets/wotagei/vrsuya_wotagei_offset_frontside.jpg)

左右の手に配置した**ダミーのLightStickオブジェクト**の位置と回転を、それぞれ調整します。

- LightStickができるだけ垂直になるように回転を調整します。
- 左右それぞれの手に合わせて、高さと位置を調整します。

### World Transformをコピー {#copy_world_transform}

![アニメーションを停止](/assets/wotagei/vrsuya_wotagei_stop_animation.jpg)

Animationタブで Preview ボタンを押してPreviewモードを終了します。アバターが元のポーズに戻れば完了です。

<br>

![LightStickのWorld Transformをコピー](/assets/wotagei/vrsuya_wotagei_copy_world_transform.jpg)

左手または右手に配置したダミーのLightStickオブジェクトの World Transform をコピーします。

<br>

![LightStickのWorld Transformを貼り付け](/assets/wotagei/vrsuya_wotagei_paste_world_transform.jpg)

対応する `VRSuya_Wotagei_Modular/LeftHand` または `VRSuya_Wotagei_Modular/RightHand` オブジェクトへ、コピーした World Transform を貼り付けます。

反対側の手も同じ手順で World Transform を反映してください。

### Prefabを書き出す {#export}

![Prefabを書き出す](/assets/wotagei/vrsuya_wotagei_export_prefab.jpg)

作業が完了したPrefabを `VRSuya/Wotagei/Prefab` フォルダーへドラッグ＆ドロップすると、Prefabの書き出し画面が表示されます。Prefab Variant ボタンを押すと書き出しが完了します。

作成されたVariant Prefabの名前を変更し、オフセットを調整したアバターへ追加すれば使用できます。