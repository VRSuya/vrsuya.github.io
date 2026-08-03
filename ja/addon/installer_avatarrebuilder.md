---
title: VRSuya AvatarRebuilder
description: 改変済みアバターモデルへのパッチ適用ガイド
aside: true
outline: [1, 3]
---

::: danger

このドキュメントでは、**改変済みのアバターモデル**に対して、頬ボーンや足指ボーンを追加する方法について説明します。

改変していないアバターの場合は、[HDiffPatcher](./installer_hdiffpatcher) を使用してパッチを適用してください。

:::

::: danger

VRSuyaのアイテムは、アバターの素体データ<small>（スケールなど）</small>を可能な限りそのまま保持できるよう設計されています。<br>
**他社製のモデルパッチでは、これらのデータを上書きしてしまうため、正しく出力できない場合があります。**

その場合は、該当アイテムの制作者へ、できる限り素体の状態を維持したまま出力できるようアップデートをご依頼いただくか、ユーザーご自身で問題を修正してください。

:::

<br>

---

# 概要 {#outline}

1. 素体アバターに**モデル改変パッチ**を適用します。<small>（フェイシャルパッチなどのモデル改変を先に適用してください）</small>
2. BlenderでVRSuya AvatarPatcherアドオンを使用し、追加ボーン用のJSONファイルを読み込んで**追加モデルパッチを適用**します。
3. UnityでVRSuya AvatarRebuilderを使用して、**アバターを置き換えます。**

<br>

---

# 導入方法 {#guide}

### Blenderでアバターへパッチを適用する

![Blender設定](/assets/avatarpatch/vrsuya_avatar_patch_01.jpg)

**Edit → Preferences**を開きます。

<br>

![アドオンタブ](/assets/avatarpatch/vrsuya_avatar_patch_02.jpg)

**「Add-ons」タブ**へ移動します。

<br>

![ディスクからインストール](/assets/avatarpatch/vrsuya_avatar_patch_03.jpg)

右上のメニューから**`Install from Disk`を選択**します。

<br>

![アドオンのインストール](/assets/avatarpatch/vrsuya_avatar_patch_04.jpg)

**`AvatarPatcher`アドオンをインストール**します。足足プロジェクトの場合は、`Bone Recalculator`アドオンも追加でインストールしてください。

<br>

![不要なオブジェクトを削除](/assets/avatarpatch/vrsuya_avatar_patch_05.jpg)

初期状態のBlenderには不要なオブジェクトが配置されています。**すべてのオブジェクトを選択（Aキー）してから削除（Xキー）してください。**

<br>

![JSONの読み込み](/assets/avatarpatch/vrsuya_avatar_patch_06.jpg)

右側のサイドバー（Nキー）のVRSuyaタブを開くと、Avatar Patcherパネルが表示されます。

**`Load JSON File`ボタンをクリック**してJSONファイルを読み込みます。

<br>

![JSONを選択](/assets/avatarpatch/vrsuya_avatar_patch_07.jpg)

パッチを適用するアバターに対応した**JSONファイルを選択**します。

<br>

![FBXの読み込み](/assets/avatarpatch/vrsuya_avatar_patch_08.jpg)

`Import FBX`ボタンをクリックして**FBXファイルを読み込みます。**

<br>

![元モデルファイルを指定](/assets/avatarpatch/vrsuya_avatar_patch_09.jpg)

**パッチを適用したいモデルのFBXファイルを選択**します。

::: danger

**必ず改変済みのモデルファイルを指定してください。**素体モデルのFBXを指定すると、それまで適用していた改変内容が初期化されます。

:::

<br>

::: details もぐもぐプロジェクトの場合

![FBXを書き出す](/assets/avatarpatch/vrsuya_avatar_patch_10-1.jpg)

`Apply Patch`ボタンをクリックして書き出します。

:::

::: details 足足プロジェクトの場合

![足指の回転を適用](/assets/avatarpatch/vrsuya_avatar_patch_10-2.jpg)

`Export FBX right after applying patch`のチェックを外してから、`Apply Patch`ボタンをクリックして先にパッチを適用します。

その後、`Recalculate Toe Bones`ボタンをクリックして足指の回転を適用します。

<br>

![FBXを書き出す](/assets/avatarpatch/vrsuya_avatar_patch_11-2.jpg)

`Export FBX`ボタンをクリックして書き出します。

:::

<br>

![FBXファイルを書き出す](/assets/avatarpatch/vrsuya_avatar_patch_12.jpg)

**元のモデルと同じフォルダーへ、新しい名前でFBXファイルを書き出します。**

<br>

---

### Unityでアバターを置き換える

![AvatarRebuilderメニュー](/assets/avatarpatch/vrsuya_avatar_patch_13.jpg)

**Tools → VRSuya → Installer → AvatarRebuilder** を開きます。

<br>

![新しいアバターモデルを指定](/assets/avatarpatch/vrsuya_avatar_patch_14.jpg)

置き換え対象のアバターが正しく設定されていることを確認したら、Blenderで**パッチを適用したアバターを「新しいアバター」に割り当てます。**

::: warning

Blenderでパッチを適用したモデルファイルをまだUnityプロジェクトへ取り込んでいない場合は、先にインポートしてください。

:::

<br>

![Prefabを追加](/assets/avatarpatch/vrsuya_avatar_patch_15.jpg)

対象アバターに対応するもぐもぐプロジェクトまたは足足プロジェクトの**Prefabをアバターへ追加**します。