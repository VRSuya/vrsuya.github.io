---
slug: 20240412
title: 개발자 업데이트 2024.4.11
tags: [vrchat, developer]
---

```
오픈 베타 릴리즈 및 VRC 월드 SDK 패치
```

<!-- truncate -->

# 개발자 업데이트 2024.4.11

## Space Jam 우승자 공개 예정

## 2024. 2. 1 오픈 베타 릴리즈

- Unity 2022.3.22f1 엔진 이전
- 프로젝트에서는 아직 업그레이드 불필요, 추후 Unity 에디터 업데이트 일정 공개

## 매우 인기 있는 아바타는 자동으로 임포스터 적용

- 퍼플릭 아바타 대부분 적용되는게 목표, 웹 사이트에서 언제든지 제거 가능

## 프로필에 추가 가능한 언어 추가

## 그룹 관련

- 그룹에서 Kick 할 때, 상대방에게 알림이 전송되지 않음
- 그룹 관리 로그에 경고, 추방도 추가됨
- 그룹에서 차단될 때, 사유가 상대방에게 전달되게 만들 것

## VRChat 제작자 문서 업데이트

## VRChat 홈 월드 업데이트

# VRC 월드 SDK 패치

## 컴포넌트 UI 개선

- 다중 편집 가능, 드롭다운 설정 저장, 사용되지 않는 필도 제거
- ? 버튼을 누르면 바로 관련 문서로 이동
- 컴포넌트 추가 VRChat 드롭다운 섹션 아래에서 추가 할 수 있도록 개선

## ClientSim Persistence 관련

- 글로벌 PlayerData + 로컬 Player Objects 두 가지 인터페이스로 접근

### PlayerData (글로벌)

- PlayerData는 ClientSim Player Data 윈도우에서 변수 재설정, 업데이트, JSON 저장 위치로 이동 기능 제공
- ClientSim Player Data UI 개선 중

### Player Objects (로컬)

-  Client Sim Network Id Holder 컴포넌트로 VRCObjectSync, UdonBehaviour의 Synced 변수들을 볼 수 있음
- 아직 UI 개선 중임

## Udon 그래프 노드 복사/ 붙여넣기 개선

- 그룹 및 댓글도 복붙 가능
- 웹에서 문자열 형태로 공유할 수 있도록 개선
https://ask.vrchat.com/t/developer-update-11-april-2024/23928