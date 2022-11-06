# Javascript

- **웹 브라우저에서의 자바스크립트 실행 순서**
    1. 웹 페이지를 열면 가장 먼저 Window객체가 생성됩니다. Window 객체는 웹 페이지의 전역 객체로 웹 페이지와 탭마다 생성됩니다.
    2. Document 객체(readyState프로퍼티 : HTML문서의 해석 상태를 뜻하는 문자열이 저장, 초기값: "loading" 문자열)가 Window객체의 프로퍼티로 생성되며 웹페이지를 해석해서 DOM 트리의 구축을 시도합니다.
    3. HTML문서는 HTML구문을 작성 순서에 따라 분석하며 Document객체 요소와 텍스트 노드를 추가해 나갑니다.
    4. HTML문서 안에 script요소 안의 코드 또는 외부파일에 저장된 코드의 구문을 분석합니다. (script 요소의 구문을 분석해서 실행 할 때는 HTML문서의 구문 분석이 일시적으로 막히고, 자바스크립트 코드의 실행을 완료한 후에는 일시적으로 막혀 있던 HTML 문서의 구문분석을 재개 합니다.)
    5. HTML 문서의 모든 내용을 읽은 후, DOM 트리 구축을 완료하면 document.readyState 프로퍼티 값이 "interactive" 로 바뀝니다.
    6. 웹 브라우저는 Document 객체에 DOM트리 구축완료를 알리기 위해 DOMCONTENTLOADED이벤트를 발생시킵니다.
    7. img 요소가 있을시, 이미지 파일 등의 외부 리소스를 이 시점에 읽어 들입니다.
    8. 모든 리소스를 읽어 들인 후 document.readyState 프로퍼티 값이 "complete"로 바뀝니다. 마지막으로 웹 브라우저는 Window객체를 상대로 load 이벤트를 발생시킵니다.
    9. 이 시점부터 다양한 이벤트(사용자 정의, 네트워크) 를 수신하며, 이벤트가 발생하면 이벤트 처리기가 비동기로 호출합니다.
- **DOMContentLoaded**
    
    ![Untitled](https://github.com/umc-web-study/workspace-team2/blob/one/one/javascript-menu/DOMContentLoaded.png)
    
    초기 HTML 문서가 완전히 스타일 시트, 이미지를 기다리지 않고, 로드 및 구문 분석되어 화재 및 서브 프레임 로드를 완료한다. 
    
    페이지 DOM이 로드 되자마자 바로 실행된다.
    
- **.join()**
    
    리스트에 담긴 요소 값들을 하나의 문자열로 만들어주는 함수
    
    **.join()** : 리스트 요소를 콤마를 포함한 전체를 하나의 문자열로 만들어줌
    
    .**join(’’)** : 리스트 요소를 콤마를 빼고 하나의 문자열로 만들어줌
    
    **.join(’구분 기호’)** : 리스트 요소를 구분 기호를 넣어 하나의 문자열로 만들어줌
    
    ![Untitled](https://github.com/umc-web-study/workspace-team2/blob/one/one/javascript-menu/join.png)
    
    첫번째 - 리스트 요소 전체가 하나의 문자열로 변환됨
    
    두번째 - 콤마를 빼고 문자열로 변환됨
    
    세번째 - 리스트 요소 사이에 구분기호가 삽입된 채 하나의 문자열로 변환됨
    
- ************************************innerHTML 속성************************************
    
    특정 요소의 텍스트를 가져오거나 변경할 수 있는 속성이다.
    
    **참고:**
     **주의:**
     `<div>`, `<span>`, `<noembed>` 노드가 (&), (<), (>) 문자를 포함하는 텍스트 노드를 자식으로 가지고 있다면, `innerHTML`은 이러한 문자들을 각각 `"&amp;"`, `"&lt;"`,`"&gt;"`로 반환합니다. `Node.textContent`를 사용하여 이러한 텍스트 노드 내용의 원본을 복사할 수 있습니다.
    
    ### 예제 1
    
    - id의 값이 jb인 요소의 텍스트를 가져와서 출력한다.
    - 태그 등은 제외한 텍스트만 가져온다.
    
    ```jsx
    <!doctype html>
    <html lang="ko">
      <head>
        <meta charset="utf-8">
        <title>JavaScript</title>
        <style>
          body {
            font-family: Consolas, monospace;
            font-size: 20px;
          }
        </style>
      </head>
      <body>
        <p id="jb"><span style="color: red;">Hello</span> World!</p>
        <script>
          var jbText = document.getElementById( "jb" ).innerText;
          document.write( jbText );
        </script>
      </body>
    </html>
    ```
    
    ![Untitled](https://github.com/umc-web-study/workspace-team2/blob/one/one/javascript-menu/innerHTML.png)
    
- **.target과 .currentTarget**
    - **`.target`**
        - 실제 이벤트가 발생한 대상
        - 이벤트 버블링의 가장 마지막에 위치한 최하위 요소를 반환한다.
    - **`.currentTarget`**
        - 이벤트를 적용시킨 대상
        - 이벤트가 바인딩 된 요소, 해당하는 요소를 반환한다.
    
    예시)
    
    ```jsx
    <div id="clickBox">
    	<span>click</span>
    <div>
    
    <script>
    	document.getElementById('clickBox').addEventListener('click', function(event) {
    		let target = event.target;
    		let currentTarget = event.currentTarget;
    		console.log(target);
    
    		console.log(currentTarget);
    	});
    </script>
    ```
    
    div 내부 span 태그를 클릭한 경우 결과
    
    ```jsx
    event.target:
    //<span>click</span>
    event.currentTarget:
    //<div id="clickBox">
    		<span>click</span>
    	</div>
    ```
    
- **reduce() 메서드**
    
    배열에 대하여 주어진 **리듀서(reducer)함수**를 실행하고 결과 값을 반환한다.
    
    **`reduce(콜백함수, 초기값)`**의 형태를 가지고 있으며, 배열의 각 요소가 주어진 콜백함수를 거치게 된다.
    
    이 콜백함수가 바로 **리듀서(reducer)**이다.
    
    - **리듀서 -** 네 가지 인자를 가진다.
        - **accumulator(누산기)** : 누산기는 콜백(리듀서)의 반환 값을 누적한다. 만약, 초기값이 제공된다면, 리듀서의 첫번째 호출 시 accumulator의 값은 초기값과 같다.
        만약, 초기값이 제공되지 않는다면, accumumlaor는 배열의 첫번째 값이 자동으로 들어가게 된다.
        - **currentValue** : 현재 처리할 요소이다.
        - **currentIndex(optional)** : 처리할 현재 요소의 인덱스이다.
        초기값이 제공되지 않았다면 accumulator에 배열의 첫번째 값인 index 0의 값이 들어가고, currentIndex는 index 1부터 시작하게 된다.
        - **array(optional)** : reduce()를 호출한 배열초기 값은 최초의 리듀서 호출에 accumulator(누산기)에 제공하는 값이다.
        초기값이 없다면 배열의 첫번째 요소(0번 인덱스)를 사용하고, 초기값이 있따면 주어진 초기값을 사용한다.
        
        **reduce()의 반환 값은 각 요소가 리듀서를 거쳐 누적된 값의 결과 값이다.**
        
        ```jsx
        const sumCallback = ( acc, cur ) => { return acc + cur };
        
        // 초기값 없이 reduce()실행할 경우 3가지
        [1, 2, 3].reduce( sumCallback ); // 1 + 2 + 3 = 6 : 초기값이 없으므로 0번 인덱스를 accumulator에 누적
        [1].reduce( sumCallback ); // 1 : 배열의 요소 값이 1개이고 초기값 X
        [].reduce( sumCallback, 1 ); // 1 : 빈 배열에 초기값 1
        [ ].reduce( sumCallback ); // TypeError
        [출처] 자바스크립트 reduce() 이해하기 _ 마감기한 1월 10일 오늘|작성자 개발자 카이트
        ```
        
        초기값이 없는 경우
        
        ```jsx
        [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
          return accumulator + currentValue;
        }); //최종 반환 값 10
        [출처] 자바스크립트 reduce() 이해하기 _ 마감기한 1월 10일 오늘|작성자 개발자 카이트
        ```
        
        ![Untitled](https://github.com/umc-web-study/workspace-team2/blob/one/one/javascript-menu/reduce-1.png)
        
        초기값이 없기 때문에, accumulator에 배열의 첫번째 값이 들어간 상태로 배열의 두번째 값부터 리듀서를 거치기 시작한다. 따라서 콜백함수(리듀서) 호출은 4번만 실행된다. 
        
        초기값이 있는 경우 - 초기값 10
        
        ```jsx
        [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
          return accumulator + currentValue;
        }, 10); //최종 반환 값 20
        [출처] 자바스크립트 reduce() 이해하기 _ 마감기한 1월 10일 오늘|작성자 개발자 카이트
        ```
        
        ![Untitled](https://github.com/umc-web-study/workspace-team2/blob/one/one/javascript-menu/reduce-2.png)
        
        초기값이 10으로 주어졌다. 따라서 accumulator에 10이 들어간 상태에서 주어진 배열의 첫번째 값인 0부터 리듀서를 거치지 시작한다. 콜백함수 (리듀서)는 5번 실행 된다.
        
        **reduce() 사용해보기**
        
        객체로 이루어진 배열에서의 값 합산
        
        각 항목이 모두 리듀서를 거치게 하려면 반드시 초기값을 주어야 한다.
        
        ```jsx
        const initialValue = '';
        const sum = [{x: 'Hello'}, {x: 'World'}, {x: '!'}].reduce(function (accumulator, currentValue) {
            return accumulator + (currentValue.x + '*'); //요소 뒤에 별표 추가
        }, initialValue)
        
        console.log(sum) //Hello*World*!*
        [출처] 자바스크립트 reduce() 이해하기 _ 마감기한 1월 10일 오늘|작성자 개발자 카이트
        ```
        
        배열내의 요소수를 세어서 객체로 반환하기
        
        ```jsx
        const fruits = ['Apple', 'Banana', 'Banana', 'Lemon', 'Apple', 'Kiwi'];
        
        const countedFruits = fruits.reduce(function (allFruits, fruit) { 
          if (fruit in allFruits) { //누산된 객체 allFruits에 해당 fruit의 property가 있으면
            allFruits[fruit]++; //해당 fruit의 value값을 1 증가시킴
          }
          else {
            allFruits[fruit] = 1; //allFruits에 해당 fruit의 property값이 없으면 만들어주고 1을 넣어줌
          }
          return allFruits;
        }, {});
        // countedFruits
        // { Apple: 2, Banana: 2, Lemon: 1, Kiwi: 1 }
        [출처] 자바스크립트 reduce() 이해하기 _ 마감기한 1월 10일 오늘|작성자 개발자 카이트
        ```
        
        배열의 중복 항목 제거하기
        
        ```jsx
        let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
        let result = arr.sort().reduce((accumulator, current) => {
            const length = accumulator.length
            if (length === 0 || accumulator[length - 1] !== current) {
                accumulator.push(current);
            }
            return accumulator;
        }, []);
        console.log(result); //[1,2,3,4,5]
        [출처] 자바스크립트 reduce() 이해하기 _ 마감기한 1월 10일 오늘|작성자 개발자 카이트
        ```