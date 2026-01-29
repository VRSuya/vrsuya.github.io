---
slug: modular-avatar-guide
title: 모듈러 아바타 가이드
authors: macchiato
tags: [vrchat, guide, unity, modularavatar]
---

## 요약

1. 의상이나 기믹을 **아바타에 넣기 외에 뭔가 더 해야 된다면 모듈러 아바타 세팅이 덜 된 거임**
1. Prefab 개념을 이해하고 쓰면 이만한 애드온이 없으니 꼭 써 보자
1. 무슨 기능인지 알기만 하면 됨, 실제로는 넣어야 될 내용은 그다지 없음

<br/>

---

## 서론

VRChat 아바타에 옷을 입히려면 아바타와 옷 모델을 블렌더에서 합쳐서 새로운 모델 파일을 만드는게 가장 기본적이고 제일 좋은 방법임, 하지만 블렌더는 어렵고 유니티에서 어떻게 옷을 입힐 방법이 없을까 사람들이 연구하다가 방법을 발견함

**아바타의 휴머노이드 본에다가 옷의 본을 똑같이 매칭**해서 넣어주면 블렌더를 거치지 않고도 옷을 입힐 수 있다는 사실을 발견한거임, 그래서 본을 직접 일일이 넣기는 귀찮으니까 [자동으로 본을 맞춰서 넣어주는 유니티 스크립트](https://kurotori.booth.pm/items/1564788)가 나오고 그랬었음, 하지만 이런 노가다를 하면 문제가 있으니 바로 의상을 다시 빼거나 뭔가 변경을 하려고 하면 아바타의 본 하위에 들어가서 다시 다 빼야 하고, 옷을 많이 넣었으면 너무 많은 본들이 있어서 뭐가 뭔지 몰라서 헷갈리기 시작한 거임

실제 세상에서는 옷은 단순히 입고 벗으면 되는데 3D 아바타는 옷을 입히는데 한 세월 걸리니까, 어떻게 하면 단순하게 옷을 입힐 수 있을까 하다가 [일본의 개발자](https://twitter.com/bd_j)가 [모듈러 아바타](https://modular-avatar.nadena.dev/)를 만들어서 무료로 배포하고 현재까지 계속 업데이트 해 주고 있음

그래서 이번에는 모듈러 아바타 애드온에서 자주 사용하는 기능들을 알아보자

<br/>

---

## 모듈러 아바타(Modular Avatar) 개념

모듈러 아바타는 **프리팹(Prefab)을 깨지 않고 아바타에 옷이나 기믹들을 넣을 수 있게 해 주는 애드온**이라고 보면 됨

서론처럼 아바타에 옷 본을 넣으려면 프리팹을 언팩한 다음에 넣어야 되는데, **프리팹을 언팩하기 전으로 절대 되돌릴 수 없기 때문에 파괴적(Destructive)인 방식**이라고 하고, 연결이 끊어졌기 때문에 의상이 패치 되거나 [Prefab 강좌](./2025-04-07-guide-prefab.md)처럼 프리팹과 관련된 유용한 기술을 사용할 수 없어서 잘못되면 아바타를 꾸미는 것보다 고장나면 어디가 고장 났는지 찾는데 시간이 오래 걸리게 되는 부작용이 생김

하지만 모듈러 아바타는 **플레이나 업로드 단계에서만 가상으로 적용된 상태**를 만들어 주고, 유니티 상에서는 프리팹 구조를 그대로 둘 수 있으니 아바타와 옷 내용이 서로 섞일 일이 없어서 구조적으로도 눈으로도 보기에도 좋아지니 관리하기 훨씬 더 쉬워지는 것

<br/>

![Prefab](./modularavatar/Unity_Modular%20Avatar_Prefab.jpg)

[CityChic](https://eliya.booth.pm/items/5329019)는 오피스룩 의상인데, **의상과 관련된 내용은 저 안에만 존재하고 원본 아바타에는 존재하지 않기 때문**에 옷과 관련된 내용을 수정하려면 저 프리팹 내부만 조사하면 됨, 또 의상을 제거하려면 간단히 저 프리팹만 지우면 깔끔하게 없어짐

만약 모두 병합된 상태라면 FX 레이어의 데이터도 지워야 하고 파라메터도 지우고 본도 지워야 하고 의상 오브젝트도 또 찾아서 지워야 하고, 나도 모르게 바뀐거 있으면 그런 데이터도 남게 되니 이게 나중에 무슨 버그를 일으킬 지 모르겠죠?

<br/>

---

## 모듈러 아바타 기본 템플릿

![Cloth](./modularavatar/Unity_Modular%20Avatar_Cloth.jpg)
![Accessory](./modularavatar/Unity_Modular%20Avatar_Accessory.jpg)

모듈러 아바타의 각 구성요소를 살펴보기 전에 이러한 느낌으로 의상 프리팹과 액세서리 프리팹을 만드는게 목표라 생각하고 읽으면 이해하기 좋을 듯

여기서 필요하면 더 넣거나 빼는 느낌으로 작업해서 내가 **원하는 기능을 가진 프리팹을 만드는게 최종 목표**라고 보면 됨

좀 더 쉽게 설명하자면 그냥 **아바타에 완성된 모듈러 프리팹 넣으면 세팅 끝**이어야 함, 그게 아니면 뭔가 덜 세팅했다는 뜻임

<br/>

---

## 자주 사용하는 컴포넌트

모듈러 아바타에서 프리팹 만들 때 자주 사용하는 컴포넌트 위주로 작성함, 다른 컴포넌트나 더 자세하게 알고 싶으면 [모듈러 아바타 공식 문서](https://modular-avatar.nadena.dev/docs/reference)를 번역기 돌려서 봐도 좋음

<br/>

### Blendshape Sync

![Blendshape Sync](./modularavatar/Unity_Modular%20Avatar_Blendshape%20Sync_1.jpg)
![Blendshape Sync](./modularavatar/Unity_Modular%20Avatar_Blendshape%20Sync_2.jpg)

주로 **바디 쉐이프키에 맞춰서 옷의 쉐이프키 수치를 동기화**할 때 씀

바디의 가슴이 커지면, 옷도 가슴에 맞춰서 커져야 알몸 안 보이는 것처럼 서로 쉐이프키 수치를 동기화가 필요 할 때 씀

쉐이프키가 서로 이름이 다른 거는 상관 없는데, 대신 서로 반대로 동기화 하거나 절반만 찬다던가 하는 그런 기능은 없음

<br/>

### Bone Proxy

![Bone Proxy](./modularavatar/Unity_Modular%20Avatar_Bone%20Proxy_1.jpg)
![Bone Proxy](./modularavatar/Unity_Modular%20Avatar_Bone%20Proxy_2.jpg)

총이나 휴대폰, 머리핀과 같은 **오브젝트를 어떠한 본에 고정**하고 싶을 때 씀

물론 안 쓰고 직접 손이나 머리에 넣어도 되긴 하는데, 이걸로 세팅하면 굳이 해당 본까지 찾아가서 확인할 필요 없이 아바타 루트에서 모듈들을 한 번에 볼 수 있으니까 관리하기 편해짐

또한 아래의 [Merge Animator](#merge-animator)와 같이 사용하면 머리가 아니라 다른 곳에 들어가게 바꿔도 세팅한 애니메이션 경로를 바꿀 필요가 없으니 매우 편리하다

사용 방법은 **부착을 원하는 본을 지정하고, 오브젝트를 원하는 위치에 설정한 다음, 위치나 회전까지 그대로 반영**하면 된다

가슴 본 같은 특수한 본은 부모 본인 Chest를 선택하고 ``Breast_Root/Breast_L`` 같이 하위 본 경로를 정확하게 넣어주면 된다, 제대로 입력했으면 위의 Target에 본이 제대로 표시 될 거임

<br/>

### Menu Installer

![Menu Installer](./modularavatar/Unity_Modular%20Avatar_Menu%20Installer_1.jpg)
![Menu Installer](./modularavatar/Unity_Modular%20Avatar_Menu%20Installer_2.jpg)

**아바타의 메뉴에 해당 메뉴 에셋을 추가** 해 줌

개인적으로 모듈러 아바타로 메뉴 만드는 것보다 직접 메뉴 만드는게 좀 더 편해서 이걸 많이 씀

기본적으로 최상단 메뉴에 추가가 되는데, 메뉴 선택 버튼으로 원하는 서브 메뉴 안에 등록되게 수정할 수 있음, 또한 메뉴 갯수 초과하면 알아서 다음 페이지를 만들어 준다

사용 방법은 그냥 원하는 **메뉴 파일을 개발자용 메뉴 열면 나오는 빈 칸에** 넣어주면 끝이다

<br/>

### Merge Animator

![Merge Animator](./modularavatar/Unity_Modular%20Avatar_Merge%20Animator_1.jpg)
![Merge Animator](./modularavatar/Unity_Modular%20Avatar_Merge%20Animator_2.jpg)

주로 **기존 애니메이터에 원하는 애니메이터 레이어들을 추가**하는 기능을 한다

최신 버전에서는 통째로 애니메이터를 아예 교체하는 기능까지 생겼다, 주로 Action 레이어나 Locomotion(Base) 레이어에서 많이 쓸 듯

사용 방법은 **병합을 원하는 애니메이터와 무슨 레이어에 설치 될 지 정도 세팅**하면 되고, 오히려 **애니메이터와 애니메이션 경로를 이해하고 작성하는게 더 중요**하다

모듈러 아바타의 가장 핵심 기능 중에 하나라서 이거는 반드시 이해하는게 좋다


약간의 개념 이해가 필요한데, **상대 경로라는 기능으로 애니메이션 경로를 알아서 수정 해 주는 기능**이 있다

왼손에 드는 휴대폰(Phone)을 조작하는 아이템을 모듈러로 만들었다고 해 보자

그럼 [모에 아바타](https://kyubihome.booth.pm/items/4667400)를 기준으로 ``Armature/Hips/Spine/Chest/Left shoulder/Left arm/Left elbow/Left wrist/Phone`` 이라는 경로를 검색해야 휴대폰을 찾을 수 있을 것이다, 하지만 대부분 아바타들은 이러한 경로가 제각각이고 심지어 대소문자까지 구분한다

이걸 **Prefab 기준으로 바꿔주면, 해당 컴포넌트가 알아서 게임 오브젝트가 이리저리 이동하더라도 애니메이션 클립의 경로를 아바타 상태에 맞게 업데이트**를 해 준다

참으로 신묘한 기능이 아닐 수가 없다

<br/>

![Merge Animator](./modularavatar/Unity_Modular%20Avatar_Merge%20Animator_3.jpg)

간단하게 정리하자면 **프리팹 루트에 애니메이터(Animator) 컴포넌트와 해당 애니메이터를 넣고 애니메이션을 작성**하면 된다

그래서 작업용이나 의상에서 자동 생성되는 애니메이터 컴포넌트를 알아서 지워주는 Delete attached animator 기능도 있다

만약 얼굴 표정 쉐이프키 같이 **프리팹과 상관 없이 바뀌지 않는 경로가 필요할 때에는 절대 경로를 사용**하면 된다

:::info

만약 상대 경로와 절대 경로를 혼합해서 사용해야 된다면, 별도의 Merge Animator 컴포넌트로 분리해서 작성해야 한다

:::

<br/>

### Merge Armature

![Merge Armature](./modularavatar/Unity_Modular%20Avatar_Merge%20Armature_1.jpg)
![Merge Armature](./modularavatar/Unity_Modular%20Avatar_Merge%20Armature_2.jpg)

**아바타의 아마튜어랑 옷의 아마튜어를 병합**할 때 사용함

우클릭해서 Setup outfit 누르면 옷의 아마튜어에 이 컴포넌트가 자동으로 등록되면서 세팅 되는 거임, 직접 만들어서 넣어도 상관 없다

사용 방법은 그냥 **아바타의 Armature 오브젝트를 넣고, 아바타(Avatar) > 의상(Target) 적용**하면 끝

직접 모델을 만들어서 넣는 경우에는 본의 구조(상속 관계)가 서로 다르면 일치하는 부분만 작동 되니까, 안 움직인다면 의상 모델의 본 구조가 일치하는지 확인하자

부가 기능으로는 [미대응 아바타의 옷을 강제로 입혀주는 기능](https://arca.live/b/vrchat/131183103)이 있는데 이거는 다른 강좌로 갈음한다

<br/>

### Mesh Settings

![Mesh Settings](./modularavatar/Unity_Modular%20Avatar_Mesh%20Settings_1.jpg)
![Mesh Settings](./modularavatar/Unity_Modular%20Avatar_Mesh%20Settings_2.jpg)

**하위 오브젝트들의 앵커 오버라이드(Anchor Override)와 루트 본(Root Bone), 바운드를 일괄로 통일**시켜 준다

앵커 오버라이드랑 바운드 세팅을 안 하면 빛 받는 강도 달라지고, 갑자기 오브젝트가 사라지는 문제가 생기므로 아래의 내용을 그대로 사용하면 보통 문제가 없다

사용 방법은 **설정 및 상속으로 하고, 실제 아바타의 앵커 오버라이드가 무엇인지 찾아서 그걸 넣어주면 됨, 루트 본은 보통 아바타 Hips 본 넣으면 되고, 바운드는 센터 (0, 0, 0), 크기 (1, 1, 1)로** 넣어주면 됨

SPS 플러그 기능 있는 메쉬 같은 경우에는 루트 본 설정을 안 해야 되는거 같음

<br/>

### Move Independently

![Move Independently](./modularavatar/Unity_Modular%20Avatar_Move%20Independently.jpg)

간단하게 **자식 본에 영향을 안 미치고 해당 본만 조작**할 수 있게 해 줌

이거는 주로 전용 옷이 아닌 걸 입힐 때 많이 쓸 텐데, 상위 본을 건드리면 하위 본도 함께 움직여져서 여러 번 조정해야 되는데 그런 걸 해결 해 줌

<br/>

### Parameters

![Parameters](./modularavatar/Unity_Modular%20Avatar_Parameters_1.jpg)
![Parameters](./modularavatar/Unity_Modular%20Avatar_Parameters_2.jpg)

**아바타 파라메터에 기믹용 파라메터를 넣을 때 사용**함

사용 방법은 직접 파라메터들을 넣어도 되긴 하는데, 기믹 용도로 **전용 파라메터 파일을 만들고 이 에셋을 넣어주면 등록 안 된 파라메터들을 아래에 보여주는데 그걸 눌러주면 등록**이 된다, 그대로 써도 되지만 개인적으로 좀 더 정확하게 파라메터 타입이랑 기본값을 한 번 더 입력해 주는 편

여기서 누락 되면 메뉴 버튼이나 기믹이 작동 안 하니 누락이 없는지 꼭 확인하자

:::info

파라메터를 ``/``로 구분하면 계층이 생겨서 파라메터가 많아져도 찾기가 쉬워진다, 예시를 기준으로 파라메터를 호출하면 Moe, Cloth, CityChic 3개의 묶음이 생겨서 지정하기 쉬워짐

:::

<br/>

### Shape Changer

![Shape Changer](./modularavatar/Unity_Modular%20Avatar_Shape%20Changer_1.jpg)
![Shape Changer](./modularavatar/Unity_Modular%20Avatar_Shape%20Changer_2.jpg)

간단히 **컴포넌트가 세팅된 오브젝트를 켜면 다른 오브젝트들의 쉐이프키 수치를 입력한대로 바꿔주고, 꺼지면 반대로 원래대로 돌아가는 기능**을 한다

예를 들면 스타킹을 켜면 바디의 스타킹 쉐이프키를 100으로 만들 수 있다, 또한 스타킹 종류가 2개 이상이더라도 나름대로 알아서 수치를 조절해 준다

특이하게 삭제라는 쉐이프키 옵션이 있는데, 쉐이프키가 건드리는 버텍스들을 삭제하여 최적화 하는 기능이 존재한다, 이거는 ``스타킹을 항상 신고 있으니까 발 메쉬를 아예 지워 주세요`` 같이 사용할 수 있다, 따라서 쉬링크(Shrink) 쉐이프키와 같이 사용하는 걸 상정하고 만들어진 기능이다

이 컴포넌트는 Material Setter, Object Toggle 이랑 묶어서 봐도 되는 내용인데, Material Setter는 켜지면 다른 오브젝트들의 머테리얼을 지정한 걸로 바꿔주고, Object Toggle은 켜지면 다른 오브젝트들의 On/Off를 바꿀 수 있다

Object Toggle은 피직스본 오브젝트를 켜면 본들이 켜지고, 끄면 본을 비활성화 하는 방식으로 응용이 가능할 듯

이러한 컴포넌트들을 리액티브 컴포넌트라고 하는데, 이러한 형식은 **꺼지면 작동하는 방식으로 조건을 반대로 설정 할 수도 있다**, 또한 제대로 작동하는지 테스트 할 수 있는 조건을 강제로 적용해 보는 디버그 기능도 있으니 작성할 때 참고하면 좋다

<br/>

### World Fixed Object

![World Fixed Object](./modularavatar/Unity_Modular%20Avatar_World%20Fixed%20Object.jpg)

**월드에 오브젝트를 고정**할 때 사용한다

해당 컴포넌트가 들어간 오브젝트는 여러 개가 있어도 일괄로 월드 고정용 게임 오브젝트에 상속시키고 아바타의 (0, 0, 0) 위치에 고정시켜 주는데, 보통 **컨스트레인트(Constraint; 제약)로 손이나 아바타를 따라다니다가 컨스트레인트를 비활성화하면 원하는 곳에 고정**하는 방식으로 월드 고정 기능을 손쉽게 만들 수 있음

:::warning

프레임 처리 마지막에 컨스트레인트가 적용되므로 **눈으로 보는 위치와 컨텍트(Contact)가 작동하는 위치가 불일치하게 느리게 업데이트** 되므로, 이 부분은 현재 [VRChat의 한계점](https://ask.vrchat.com/t/developer-update-19-september-2024/26829#p-56092-physbone-constraint-execution-order-6)이다

:::

<br/>

---

## 파라메터 사용량 확인

![Information](./modularavatar/Unity_Modular%20Avatar_Information.jpg)

모듈러 아바타로 옷이나 기믹을 넣다보면 **업로드 할 때 Avatar validation failed라는 에러**가 발생할 때가 있는데, 여러가지 원인이 있겠지만 **보통 파라메터 초과**로 생기는 경우가 많다, 확인하려면 ``Tools > Modular Avatar > Show Modular Avatar Information`` 에 들어가면 현재 아바타 파라메터가 모듈러 아바타를 포함해서 얼마나 사용하고 있는지 보여준다

<br/>

---

## 아바타 및 의상 제작자를 위한 모듈러 아바타 내용

아무래도 아바타 제작자보다는 의상이나 기믹 제작자들이 알아야 하는 내용인데, 위의 구성요소가 누락이 되어서 직접 세팅해야 되는 경우도 종종 있어서 이런 내용들이 제대로 들어가면 더 간단하게 아이템 세팅 할 수 있으니 고객 만족도가 더 높아질 거임

개인적으로 의상의 일부를 껐다 켰다 하는 걸 많이 하는데 이런 기능도 미리 세팅해서 들어가 있으면 좋겠음, **세팅 된 내용을 유저들이 빼는거는 간단하지만, 직접 세팅하는게 상대적으로 더 어려우므로** 제작자들이 조금 더 신경 쓰면 고객이 편해진다 생각함

아울러 Variant Prefab이 안 되어있다던가 Prefab 구조가 제대로 안 되어있는 경우를 많이 보는데, 이런 좋은 기능들을 잘 활용해 줬으면 좋겠는데 라고 생각을 엄청 많이 함

<br/>

![Path](./modularavatar/Unity_Modular%20Avatar_Prefab%20Path.jpg)
 
각 컴포넌트들의 경로들은 Prefab에서 직접 수정은 안 되는데, **아바타에 설정하고 Prefab에 적용**하면 됨, 일부 아바타는 루트 본과 아마튜어 이름이 규격 외인 경우도 있어서 추가로 확인해야 하고, 앵커 오버라이드도 아바타마다 다 다르니 이걸 넣어주는게 노가다임

<br/>

---

## 후기

지금의 BOOTH 시장이 엄청 성장한 이유 중에 하나가 모듈러 아바타도 어느 정도 역할을 한다 생각함, 의상이나 기믹을 넣고 적용하기 쉬우니까 플레이어들도 부담 없이 구매 및 적용하고 더 재미있는 일에만 집중 할 수 있으니까

그리고 부스에서 의상 샀는데 위의 내용들이 안 되어있으면 나머지 모듈러 아바타 작업해야 되니까 이게 번거로움, 또한 엄연히 댓가를 지불하고 구매한 건데 깔끔하게 한 번에 들어가는 의상을 희망하는건 자연스러운거라 봄

위의 내용들을 이해하고 에셋을 만들어서 파는게 부스 아이템 제작이므로, 여러분들도 모듈러 아바타로 재미있는 아이템을 만들어서 부스에 판매해 보자