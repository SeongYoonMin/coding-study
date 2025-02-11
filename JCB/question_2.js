// 2. 배열의 내장함수
// 배열의 내장함수를 이용하여 [200, 100, 10000, 300]으로 변환하여 출력하기

let arr = [200, 100, 300];
console.log("처음 arr : " + arr);
function builtInFunction(arr) {
  // splice(시작 인덱스, 제거할 요소의 수, [...추가할 요소])
  // 추가 요소의 경우 생략 가능
  arr.splice(2, 0, 10000); // 2번째 인덱스에서 아무것도 제거하지않고 10000 을 추가
  return arr;
}
console.log("수정 arr : " + builtInFunction(arr));
// [200, 100, 10000, 300] 출력
