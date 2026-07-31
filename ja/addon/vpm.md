---
title: VPM登録とパッケージのインストール
description: VRSuya VPMリポジトリをVCCに登録し、パッケージをインストールする方法
aside: true
outline: [1, 3]
---

<script setup>
import { VPButton } from 'vitepress/theme'
</script>

# VPM登録とパッケージのインストール {#setup-vpm}

<div class="video-container">
  <iframe 
    src="https://www.youtube.com/embed/-VFI9xH7kws" 
    title="VRSuya Installer" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

YouTube動画には字幕をご用意しています。字幕をオンにしてご視聴ください。

## VPMを自動で登録する {#auto-add-repository}

<VPButton tag="a" href="vcc://vpm/addRepo?url=https://vrsuya.com/vpm/vpm.json" text="VPMリポジトリを登録" theme="brand" /> 

## VPMを手動で登録する {#manual-add-repository}

![VRChat Creator Companion](/assets/addon/vpm/vpm_1_vcc_settings.jpg)

VRChat Creator Companionで**「Settings」ボタン**をクリックします。

<br>

![VPMアドレス入力](/assets/addon/vpm/vpm_2_vcc_packages.jpg)

**「Packages」**タブを開き、**「Add Repository」**ボタンをクリックして、`https://vrsuya.com/vpm/vpm.json` を入力します。

::: warning

VRSuya Installerを使用するには、[Modular Avatar](https://modular-avatar.nadena.dev/)パッケージが必要です。<br>
インストールされていない場合は、このタイミングで一緒に導入することをおすすめします。

:::

<br>

![VPM追加](/assets/addon/vpm/vpm_3_add_repository.jpg)

**「Add Repository」**ボタンをクリックして登録します。

## VPMパッケージをインストールする {#add-package}

![プロジェクト管理](/assets/addon/vpm/vpm_4_manage_project.jpg)

インストールしたいプロジェクトの**「Manage Project」**ボタンをクリックします。

<br>

![パッケージのインストール](/assets/addon/vpm/vpm_5_add_package.jpg)

インストールしたい**VRSuyaパッケージ<small>（VRSuya - Installer）</small>**の**「＋」**ボタンをクリックします。