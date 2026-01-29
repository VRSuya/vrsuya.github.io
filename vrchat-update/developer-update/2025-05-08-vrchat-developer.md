---
slug: 20250508
title: 개발자 업데이트 2025.5.8
tags: [vrchat, developer]
---

```
VRChat 및 SDK 베타 릴리즈 / Persistence 데이터 손실
```

<!-- truncate -->

# 개발자 업데이트 2025.5.8

## VRChat Pride 제출 시작

- 2025년 5월 30일 오후 12시(PST) 마감
- [가이드라인](https://docs.google.com/presentation/d/1xT84ES2ouMHcSRN9TmCYc7Z5nYNnmd4wZ8DrFZKvZKE/edit#slide=id.p)

## VRChat 가이드라인 개편 중

- VRChat이 다양한 기능이 많아지고 복잡해지면서 신규 플레이어들이 배우기 어려워졌음
- 1-2분 내외로 플레이어들이 궁금해 할 내용들을 다룰 예정
- [VRChat YouTube 채널](https://www.youtube.com/@vrchat_learning_channel)

## VRChat 2025.2.1 릴리즈

- 대명사 추가
- 모바일 번역 추가

## VRCSDK 베타 릴리즈

- SendCustomNetworkEvent에 매개변수 지원
- Udon API 추가

## 2025.2.1 패치 버그로 Persistence 데이터 손실 보고

- VRChat 2025.2.1 버그로 월드의 Persistence 데이터가 손실 될 수 있어서 2025.2.1p1 패치가 배포됨
- VRCUrl, VRCUrl[], string[] 타입의 Persistence 데이터 불러오기 실패하여 기본값으로 덮어쓰는 버그
- Persistence 서비스가 제대로 유지 될 수 있도록 QA 자동화 테스트 및 인프라에 더 많은 투자를 할 예정
- 손실된 데이터를 복구할 수 있는 방법도 찾을 예정