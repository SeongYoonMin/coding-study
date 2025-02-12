// 문제 3. Set에 관하여

// Set 은 중복되지 않는 데이터를 저장하는 데이터 구조이다.
// Set 객체는 값 콜렉션으로, 삽입 순서대로 요소를 순회할 수 있다. Set 객체 내의 요소는 유일하다. 즉, 어떤 요소는 한 번만 나타날 수 있다.

const array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

let setArray = new Set(array);
console.log(setArray); // Set { 1, 2, 3, 4, 5 }
console.log(setArray.has(1)); // true