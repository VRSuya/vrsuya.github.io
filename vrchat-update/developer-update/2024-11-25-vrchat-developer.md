---
slug: 20241125
title: 개발자 업데이트 2024.11.25
tags: [vrchat, developer]
---

```
Soba 언어 개발 중 / 영구 유저 데이터 저장소 및 1회성 구매 오픈
```

<!-- truncate -->

# 개발자 업데이트 2024.11.25

## 크리에이터 로드맵 업데이트

- https://ask.vrchat.com/t/vrchat-creators-roadmap-november-2024/28124

## 영구 유저 데이터 저장소 오픈

- RPG 게임과 같은 게임 월드, 월드 세팅을 자동으로 저장하는 등 다양한 분야에 활용 가능
- PlayerData = Key-Value 데이터베이스
- PlayerObjects = 자동으로 인스턴스로 생성 되는 GameObject, Udon 변수도 플래그 표시하면 영구적일 수 있음

## 1회성 구매 오픈

- 영구적이거나, 기간만료가 있는 등 다양한 조건 제공
- 월드 스토어에서 여러 월드에 존재하는 스토어를 볼 수 있게 제공

## Soba 언어 발표

- C# 9.0 대부분 기능에 액세스 허용
- CIL로 컴파일 되어 다양한 플랫폼(iOS, 안드로이드, PC 등)에 사용 가능
- UdonBehaviour가 아닌 클래스, 사용자 정의 인터페이스, 정적 필드 등 포함 될 것, 이를 위한 제네릭 구현을 위한 준비
- 훨씬 더 C#, .NET Core 및 Mono에 같은 표준 구현과 유사
- UdonSharp, Udon Graph, Soba는 혼용으로 사용 가능
- 기존 월드도 그대로 사용 가능
- Soba로 이전하는 가이드 제공할 것