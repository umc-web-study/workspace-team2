# React Hooks

## content
  0. [hooks](#0-hook)
  1. [useState()](#1-usestate)
  2. [useEffect()](#2-useeffect)
  3. [useRef()](#3-useref)
  4. [useCallback()](#4-usecallback)

## 0. hook
  - 소개
    ```text
    Hook은 함수형 컴포넌트가 클래스형 컴포넌트의 기능을 사용할 수 있도록 해주는 기능
    ```

  - 필요한 이유
    ```text
    Hook을 사용해 함수형 컴포넌트에서도 state와 생명주기를 다룰 수 있어 클래스형 컴포넌트에서만 가능하던 상태관리를 더 손쉽게 할 수 있기 때문
    ```
  
  - Hook의 규칙
    ```text
    Hook에는 규칙이 있다. 이를 꼭 지켜야 정상적으로 hook이 실행되고 코드가 꼬이지 않는다.
    eslint-plugin-react-hooks (ESLint 플러그인) 을 사용한다면 아래 두 규칙을 강제한다. (CRA에 포함)
    ```

  1. 최상위에서만 Hook을 호출할 것

      + React 함수(컴포넌트)의 최상위에서만 Hook을 호출 할 것
      + 반복문, 조건문, 중첩된 함수 등에서 호출 금지

  2. React 함수에서만 Hook을 호출할 것

      + **Custom Hook**에서는 호출 가능
      + 일반적인 JavaScript 함수에서는 호출 금지

  3. Hook을 만들때는 앞에 use를 붙일 것

      + 시각적으로 구분을 하기 위함

  4. React는 Hook 호출되는 순서에 의존

      + 한 컴포넌트에서 여러개의 hook이 사용되는 경우 hook은 위에서 부터 아래의 순서로 작동

  - Hook 종류

    기본 :

    |command|기능|
    |:--|:--|
    |useState|동적 상태 관리|
    |useEffect|side effect 수행 -mount/unmount/update|
    |useContext|컴포넌트를 중첩하지 않도고도 전역 값 관리|

    추가 :

    |command|기능|
    |:--|:--|
    |useRedcuer|복잡한 컴포넌트들의 state를 관리-분리|
    |useCallback|특정 함수 재사용|
    |useMemo|연산한 값 재사용|
    |useRef|DOM선택, 컴포넌트 안에서 조회/수정할 수 있는 변수 관리|
    |useImperativeHandle||
    |useLayoutEffect||
    |useDebugValue||


## 1. useState()
  - 개념
    ```text
    - 동적 상태 관리
    - 컴포넌트에서 동적인 값을 상태(state)라고 한다.
    ```

  - 사용
    ```js
    const [number, setNumber] = useState(0);
    ```

## 2. useEffect()
  - 개념
    ```text
    - Hook 을 사용하여 컴포넌트가 마운트(처음 나타났을 때) 됐을때, 언마운트(사라질 때) 됐을때, 그리고 업데이트 될 때(특정 props가 바뀔 때) 특정 작업을 처리하는 기능
    ```
## 3. useRef()
  - 개념
    ```text
    - DOM선택, 컴포넌트 안에서 조회/수정할 수 있는 변수 관리
    ```

## 4. useCallback()
   - 개념
    ```text
    - 특정 함수 재사용 기능
    ```