# knitting_pattern_viewer
## ➊ 니트 패턴 뷰어 실행

1. `git`, `Node.js`, `VSCode`을 설치한다.

2. 작업할 폴더에서 VSCode을 오픈한다.

3. 다음 명령어를 실행하여 React 프로젝트를 내려받는다.

```
git clone git@github.com:okxooxoo/knitting_pattern_viewer.git
```

3. 라이브러리를 추가한다.
```
yarn install
```

4. React 프로젝트를 실행한다.
```
yarn start
```

---

## ➋ 도안 변경
App.tsx 파일의 `pattern` 변수에 다음과 같은 2차원 테이블을 할당합니다.  
이때 테이블의 각 셀은 `symbol`, `color`을 프로퍼티로 갖는 Object 입니다.  
`color`은 RGB 값을 담는 1차원 배열이어야 합니다.

```js
// 예시

const pattern = [
  [
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
  ],
  [
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
  ],
  [
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
  ],
  [
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
  ],
  [
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
  ],
  [
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
  ],

  [
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
  ],
  [
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
  ],
  [
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
  ],
  [
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
  ],
  [
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
  ],
  [
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "K", color: [255, 0, 0] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
    { symbol: "P", color: [0, 0, 255] },
  ],
];
```
