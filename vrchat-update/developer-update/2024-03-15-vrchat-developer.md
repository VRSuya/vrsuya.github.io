---
slug: 20240315
title: 개발자 업데이트 2024.3.14
tags: [vrchat, developer]
---

```
VRChat 아바타 파일 용량 제한 알림
```

<!-- truncate -->

# 개발자 업데이트 2024.3.14

## Creator Economy 신청 받는 중

- 링크 : https://www.surveymonkey.com/r/vrc-ce-apply

## 월드 콘테스트(Space Jam) 개최

- 4월 5일까지(EST 기준) 제출
- 자세한 정보 : https://hello.vrchat.com/blog/space-jam

## 베니스 영화제 출품작 신청 오픈

- 2024년 5월 15일까지 제출 마감
- 자세한 정보 : https://ask.vrchat.com/t/venice-immersive-2024-vrchat-faq/23122

## VRChat 그룹 소유권 이전

- 현재 백엔드는 거의 완성 되었으며, 프론트엔드 작업 중

## Unity Standard Lite 쉐이더에 대한 개선판 작업 중

- 월드의 Light Probe를 선형적으로 해석해서 생긴 시각적 버그
- Diffuse, Bumped Diffuse 쉐이더도 업그레이드해야 함

## Udon 2 퍼포먼스 개선사례

- 단순 재컴파일만으로도 성능이 개선됨
- C#로 최적화된 코드로는 더욱 더 성능 개선 가능
- 직접 계산해야 되는 코드일 수록 성능 향상폭이 큼

## Udon 2 런타임 URL 입력 지원

- 허용된 서버(GitHub 등)로부터 받는 텍스트 또는 JSON 을 통해 String 데이터를 받아 URL 입력 가능

## 입력 인터페이스 변화 감지 가능

- 키보드, VR, 게임 컨트롤러, 터치 스크린 등 입력 장치 변화에 반응하는 이벤트 생성 가능
- 이용하면 월드가 다양한 입력 장치에 최적화된 개별화 UI 제공이 가능해질 듯

## 세이프티로 Shader 가 꺼진 경우 프리뷰 가능

- 디버깅 용 옵션, 레디얼 메뉴에서 찾을 수 있음

## 아바타 파일 용량 하드코딩 제한

- 다운로드 크기 : 500MB -> 200MB
- 실제 에셋 전체 용량 : 1.2GB -> 500MB
- 퀘스트 아바타 실제 에셋 전체 용량 : 40MB
- 7월 16일 쯔음 적용 시작

## 아바타 메모리 용량 제한 기능 추가

- 아바타 설정 탭에서 찾을 수 있음
- VRAM 제한 기능 개발도 인지하고 있음