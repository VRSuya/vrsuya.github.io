---
title: VRSuya Installer
description: VRSuya Installer
aside: true
outline: [1, 3]
---

<script setup>
import { VPButton } from 'vitepress/theme'
</script>

# VRSuya Installerのインストール方法 {#setup-vpm}

<br>

<VPButton tag="a" href="./vpm" text="VPMリポジトリの登録とパッケージのインストール" theme="brand" />

---

# VRSuya HDiffPatcher 使用方法 {#setup-hdiffpatcher}

<br>

<VPButton tag="a" href="./installer_hdiffpatcher" text="HDiffPatcher 使用方法" theme="brand" /> 

---

# VRSuya AvatarRebuilder 使用方法 {#setup-avatarrebuilder}

<br>

<VPButton tag="a" href="./installer_avatarrebuilder" text="AvatarRebuilder 使用方法" theme="brand" /> 

---

# アドオン {#addon}

### AnimationOffsetUpdater

もぐもぐプロジェクトのAnimationClipに含まれるボーンのPositionを再調整するアドオンです。

### AvatarPatcher

アバターのモデルデータとJSONファイルを結合し、新しいモデルデータを生成するアドオンです。

現在開発中です。

### AvatarRebuilder

既存のアバターを新しいモデルデータへ置き換えたり、追加したりするためのアドオンです。

### AvatarSettingUpdater

現在は非推奨となっているコンポーネントです。

### HDiffPatcher

アバターの元モデルデータとHDiff<small>（差分）</small>データを結合し、新しいモデルデータを生成するアドオンです。

**「パッチ後にアバターを置き換える」**を有効にすると、自動的にAvatarRebuilderを呼び出して処理を実行します。

<br>

---

# Modular Avatar対応コンポーネント {#modular}

### AnimatedHairPhysBone

指定した名前のPhysBoneコンポーネントを検索し、`Is Animated`プロパティを有効にするコンポーネントです。

### AnimatedPhysBone

アバターの頬ボーンに設定されているPhysBoneコンポーネントを検索し、`Is Animated`プロパティを有効にするコンポーネントです。

### AnimationClipRenamer

指定したAnimationClip内のシェイプキー名を別の名前へ変更したり、パスを修正したりするコンポーネントです。

### ChangeStandingPose

アバターのActionレイヤー内にあるStandモーションを、アバター本来のStandポーズへ一括で置き換えるコンポーネントです。

### ConstraintConnector

Constraintコンポーネントを対応する実際のボーンへ接続するコンポーネントです。

### FixFacialAnimation

指定したAnimationClipに、アバターのBlinkシェイプキーまたは指定したシェイプキーの値を0に設定するキーを追加します。さらに、「すやすやモード」へ移行した際に、FXレイヤー内の指定したインデックスを無効化します。

### FixLocomotion

AFK、VRCEmote、または指定したパラメータが有効になっている間、ジャンプや移動によってポーズが崩れる問題を改善するコンポーネントです。

### ForceOnWriteDefaults

アバターのFXレイヤー内にあるすべてのStateで、Write Defaultsを有効にします。

### MenuSelector

指定したVRCメニューアセット名をもとに、日本語・英語・韓国語版のメニューアセットを検索し、自動的に再割り当てします。

### PhysBoneConnector

頬ボーンまたは足指ボーンのPhysBoneコンポーネントを対応する実際のボーンへ接続するコンポーネントです。

### RemoveAnimatorLayer

アバターのFXレイヤーから、指定した名前のレイヤーを削除します。

### RemoveFXMask

アバターのFXレイヤーに設定されているすべてのMaskを削除します。

### RemovePhysBone

アバターから指定した名前のPhysBoneコンポーネントを削除します。