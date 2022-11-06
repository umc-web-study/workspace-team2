# React

- useState()
    
    **<구조>**
    
    ```jsx
    const [state 변수, setState 갱신함수] = useState(state 초기 값);
    ```
    
    1) 배열의 첫번째는 state를 담을 변수
    
    2) 두번째 배열은 앞에 있는 state 변수를 업데이트 할 수 있는setState 함수
    
    setState가 state를 변경시키는 것이 아님! 그래서 setState 호출 이후 로직에서도 state의 값은 이전과 동일함.
    
    변경된 값은 다음 컴포넌트 함수가 실행 될 때 useState가 가져온다!
    
    <예시>
    
    ![Untitled](https://user-images.githubusercontent.com/101498350/200156633-73d7eb47-274b-4fc1-943c-234f1c560fea.png)
    
    ![Untitled](https://user-images.githubusercontent.com/101498350/200156640-152da222-2163-4e8e-83d1-4204e7cb4400.png)
    
    ![Untitled](https://user-images.githubusercontent.com/101498350/200156647-05bdbdad-2744-407f-afdf-608fdf8abf53.png)
    
    *[출처] [[ React ] useState는 어떻게 동작할까 (velog.io)](https://velog.io/@jjunyjjuny/React-useState%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%8F%99%EC%9E%91%ED%95%A0%EA%B9%8C)*
    
- useEffect()
    
    리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 HOOK.
    
    - 컴포넌트가 마운트 되었을 때
        - 처음 나타났을 때
        - props로 받은 값을 컴포넌트의 로컬 상태로 설정
        - 외부 API 요청 (REST API등)
        - setInterval, setTimeout을 통한 작업 예약
    - 컴포넌트가 언마운트 되었을 때
        - 사라질 때
        - setInterval, setTimeout을 사용하여 등록한 작업들 clear하기
        - 라이브러리 인스턴스 제거
    - 컴포넌트가 업데이트 될 때
        - 특정 props가 바뀔 때
    
    ```jsx
    useEffect(() => {}) 
    //어떤 useState값이던지 변화가 일어나면 무조건 다시 실행된다 -> 메모리 낭비 심함
    
    useEffect(() => {},[]) 
    //단 한 번 실행하고 그 후에는 다시 실행하지 않는다. 
    
    useEffect(() => {}, [특정 변수, 오브젝트]
    //Dependency로 지정한 값의 변화가 있을 때만 실행
    //() 안에 있는 콜백 함수에 변화가 없으면 실행하지 않
    ```
    
- useRef()
    
    자바스크립트에서 특정 DOM을 선택해야 하는 상황에 `getElementById`, `querySelector`같은 DOM selector 함수를 사용해서 DOM을 선택 할 수 있다.
    
    리액트에서도 특정 DOM을 선택 해야 하는 상황이 있는데 그 때 useRef()를 이용한다.
    
    <예시>
    
    Input 상자에서 초기화 버튼을 클릭 했을 때, 이름 input에 포커스가 잡히도록 구현해보자
    
    ![초기화를 누르고 다시 인풋창을 눌러야 하는 번거로움이 있음](https://user-images.githubusercontent.com/101498350/200156651-22200803-d603-4417-9ad8-394b7e559bea.png)
    
    초기화를 누르고 다시 인풋창을 눌러야 하는 번거로움이 있음
    
    ```jsx
    import React, { useRef, useState } from "react";
    
    const Focus = () => {
      //객체 상태로 여러개의 인풋값을 관리하고 참조하자
      const [inputs, setInputs] = useState({
        name: "",
        nickname: "",
      });
    
      const nameInput = useRef(); //Ref 설정
    
      const { name, nickname } = inputs; //비구조화 할당 해주기
    
      const onChange = (e) => {
        const { value, name } = e.target; //우선 e.target에서 value와 name을 추출
        setInputs({
          ...inputs, //기존의 input 객체를 복사
          [name]: value, //name 키를 가진 값을 value로 설정
        });
      };
    
      const onReset = () => {
        setInputs({
          name: "",
          nickname: "",
        });
        nameInput.current.focus(); //초기화 누르면 포커스 이동
      };
    
      return (
        <div>
          <input 
            name="name"
            placeholder="이름"
            onChange={onChange}
            value={name}
            ref={nameInput} /> //포커스 여기로 맞추기
          <input
            name="nickname"
            placeholder="닉네임"
            onChange={onChange}
            value={nickname}
          />
          <button onClick={onReset}>초기화</button>
          <div>
            <b>값:</b>
            {name} ({nickname})
          </div>
        </div>
      );
    };
    
    export default Focus;
    [출처] [React] 벨로퍼트 리액트 정리 : useRef, 배열 렌더링|작성자 네모빔
    ```
    
    ![Untitled](https://user-images.githubusercontent.com/101498350/200156657-3c1e06e9-0f98-4e0a-852b-f66ee66defaf.png)
    
    **useRef()를 사용하여 Ref객체를 만들고, 이 객체를우리가 선택하고 싶은 DOM에 ref 값으로 설정!**
    
    그러면 Ref 객체의 .current 값은 우리가 원하는 DOM을 가르키게 된다
    
    위 예제에서는 onReset 함수에서 input에 포커스를 하는 focus() DOM API를 호출!
    
    *[출처] [[React] 벨로퍼트 리액트 정리 : use.. : 네이버블로그 (naver.com)](https://blog.naver.com/drakequation/222892440453)*
    
- useCallback()
    
    ```jsx
    const memoizedCallback = useCallback(function, deps);
    ```
    
    첫 번째 인자로 넘어온 함수를 두 번째 인자로 넘어온 배열 형태의 함수 실행 조건의 값이 변경될 때까지 저장해 놓고 재사용 할 수 있게 해준다.
    
    예를 들어, 리액트 컴포넌트 안에 함수가 선언 되어 있을 때, 이 함수는 해당 컴포넌트가 렌더링 될 때마다 새로운 함수가 생성 되는데, useCallback을 사용하면 해당 컴포넌트가 렌더링 되더라도 그 함수가 의존하는 값(deps)들이 바뀌지 않는 한 기존 함수를 재사용 할 수 있음
    
    자세한 설명과 예시 → [React Hooks: useCallback 사용법 | Engineering Blog by Dale Seo](https://www.daleseo.com/react-hooks-use-callback/)
    
- styled components
    
    ```jsx
    $ npm i styled-components
    ```
    
    터미널에서 이 명령어를 통해 설치 할 수 있음
    
    ```jsx
    import React from 'react';
    import styled from "styled-components";
    
    const TestDiv = styled.div`
    // <div> HTML 엘리먼트에 대한 스타일 정의
    `;
    
    const List = () => {
    	return <TestDiv>hello</TestDiv>;
    }
    
    export default List;
    ```
    
    이런 방식으로 코드를 작성!
    
    Styled Components는 npm의 모듈로 불필요한 css 파일 생성을 막아준다.