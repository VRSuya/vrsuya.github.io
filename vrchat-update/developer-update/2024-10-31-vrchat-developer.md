---
slug: 20241031
title: 개발자 업데이트 2024.10.31
tags: [vrchat, developer]
---

```
서버 단위에서 PC 아바타 크기 제한 적용 / VRChat 모바일 헤드 트래킹
```

<!-- truncate -->

# 개발자 업데이트 2024.10.31

## VRChat 2024.4.1 릴리즈

## NVIDIA GeForce Now에서 VRChat 플레이 가능

## Spookality 2024 우승자 발표

- 수상자 10명 ( https://hello.vrchat.com/blog/spookality-2024-winners )

## 서버 단위에서 PC 아바타 크기 제한 적용

- 다운로드 크기 200MB, 비압축 크기 500MB 넘으면 로드 불가능
- 넘을 경우 ``Security Checks Failed``라고 표시

## AMD GPU 유저 알림

- AMD 그래픽 카드에서 특정 VR로 무선 스트리밍을 하고 있으면 끊김이 발생
- AMD 그래픽 카드에서는 하드웨어 비디오 디코딩이 비활성화 상태
- 따라서 비디오 플레이어는 CPU가 연산을 하고 있었음
- 최근 드라이버 업데이트로 문제가 해결 된 것으로 알고 있으나 현재 체크 중
- ``--enable-hw-video-decoding`` 플래그를 사용하여 강제 적용 가능
- 테스트 후 문제 있으면 보고 바람

## 웹사이트 업데이트

## VRChat 안드로이드 모바일에서 헤드 트래킹 지원

- 머리 트래킹 및 눈, 입 관련 표정 트래킹 지원
- Viseme 및 Blink 설정을 활용하여 지원
- VRCFT를 최대한 활용 할 수 있는 쪽으로 개발 목표

## 크리에이터 문서에 샘플 추가함

- 월드 만들 때 참고하여서 개발하면 좋음
- https://creators.vrchat.com/worlds/examples/