# Java Script Study

## contents

1. [객체](#1-객체)
2. [배열](#2-배열)
3. [Java Script to HTML](#3-java-script-to-html)

## 1. 객체
  + 객체란 무엇인가?

    " 우리가 변수 혹은 상수를 사용하게 될 때 하나의 이름에 여러 종류의 값을 넣을 수 있게 해준다. "

    ```js
    const dog = {
    name: '멍멍이',
    age: 2
    };

    console.log(dog.name);
    console.log(dog.age);
    ```

    ```
    멍멍이
    2
    ```

## 2. 배열
  + 배열이란 무엇인가?
  
    " 객체가 한 변수 혹은 상수에 여러가지 정보를 담기 위함이였다면, 배열은 여러개의 항목들이 들어있는 리스트와 같다. "

    ```js
    const array = [1, 2, 3, 4, 5];
    const objects = [{ name: '멍멍이' }, { name: '야옹이' }];
    ```

  + Java Script 배열 내장함수

    |명령어|설명|
    |:--|:--|
    |forEach|for문인데 index 기준이 아니라 요소의 값 기준으로 for문 돌림|
    |map|배열 안의 각 원소를 반환 할 때 사용, 이 과정에서 새로운 배열 생성|
    |filter|배열에서 특정 조건을 만족하는 값을 따로 추출 하여 새로운 배열생성|
    |join|배열 안의 값들을 문자열의 형태로 합침|
    |*reduce|배열의 각 요소를 순회하며 callback함수의 실행 값을 누적하여 하나의 결과값을 반환|

    + forEach

      " for문인데 index 기준이 아니라 요소의 값 기준으로 for문을 돌린다. "

      ```js
      const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

      superheroes.forEach(hero => {
        console.log(hero);
      });
      ```

    + map

      " 배열 안의 각 원소를 반환 할 때 사용, 이 과정에서 새로운 배열이 생성된다. "

      ```js
      const array = [1, 2, 3, 4, 5, 6, 7, 8];

      const square = n => n * n;
      const squared = array.map(square);
      console.log(squared);
      ```

    + filter

      " 배열에서 특정 조건을 만족하는 값을 따로 추출 하여 새로운 배열을 생성한다. "

      ```js
      const todos = [
        {
          id: 1,
          text: '자바스크립트 입문',
          done: true
        },
        {
          id: 2,
          text: '함수 배우기',
          done: true
        },
        {
          id: 3,
          text: '객체와 배열 배우기',
          done: true
        },
        {
          id: 4,
          text: '배열 내장함수 배우기',
          done: false
        }
      ];

      const tasksNotDone = todos.filter(todo => todo.done === false);
      console.log(tasksNotDone);
      ```

    + join

      " 배열 안의 값들을 문자열의 형태로 합친다. "

      ```js
      const array = [1, 2, 3, 4, 5];
      console.log(array.join()); // 1,2,3,4,5
      console.log(array.join(' ')); // 1 2 3 4 5
      console.log(array.join(', ')); // 1, 2, 3, 4, 5
      ```

      + reduce

      " 배열의 각 요소를 순회하며 callback함수의 실행 값을 누적하여 하나의 결과값을 반환한다. "

      ```js
      const numbers = [1, 2, 3, 4, 5];
      let sum = numbers.reduce((accumulator, current) => {
        console.log({ accumulator, current });
        return accumulator + current;
      }, 0);

      console.log(sum);
      ```

      ```console
      Object {accumulator: 0, current: 1}
      Object {accumulator: 1, current: 2}
      Object {accumulator: 3, current: 3}
      Object {accumulator: 6, current: 4}
      Object {accumulator: 10, current: 5}
      15
      ```

## 3. Java Script to HTML

  + HTML 생명주기

    |요소|설명|
    |:--|:--|
    |DOMContentLoaded|브라우저가 HTML을 전부 읽고 DOM 트리를 완성하는 즉시 발생(단, 이미지 나 스타일시트 등의 기타자원 제외)|
    |load|HTML로 DOM 트리를 만드는 게 완성되었을 뿐만 아니라 이미지, 스타일시트 등의 외부 자원도 모두 불러오는 것이 끝났을 때 발생|
    |beforeunload|사용자가 페이지를 떠나려 할 때, 변경되지 않은 사항들을 저장했는지 확인|
    |unload|사용자가 진짜 떠나기 전에 사용자 분석 정보를 담은 통계자료를 전송|

    + DOMContentLoaded

      " 브라우저가 HTML을 전부 읽고 DOM 트리를 완성하는 즉시 발생(단, 이미지 나 스타일시트 등의 기타자원 제외) "

      ```js
      window.addEventListener("DOMContentLoaded", function () {
        diplayMenuItems(menu);
        displayMenuButtons();
      });
      ```

    + load

      " HTML로 DOM 트리를 만드는 게 완성되었을 뿐만 아니라 이미지, 스타일시트 등의 외부 자원도 모두 불러오는 것이 끝났을 때 발생 "

    + beforeunload

      " 사용자가 페이지를 떠나려 할 때, 변경되지 않은 사항들을 저장했는지 확인 "

    + unload

      " 사용자가 진짜 떠나기 전에 사용자 분석 정보를 담은 통계자료를 전송 "

  + contents

    |명령어|설명|
    |:--|:--|
    |innerHTML|HTML 요소의 내용 변경에 사용|
    |includes 메서드|문자열에 특정 문자열이 존제하는지 확인|

    + innerHTML

      " HTML 요소의 내용 변경에 사용 "

    + includes

      " 문자열에 특정 문자열이 존베하는지 확인 "