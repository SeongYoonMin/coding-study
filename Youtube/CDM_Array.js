// Array 중복 제거

const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

// 1. Set() 사용
const mySet = new Set();
mySet.add(1);
mySet.add(1);
mySet.add(2);
mySet.add(2);

console.log(mySet); // Set(2) {1,2}

const newArr = [...new Set(arr)];
console.log(newArr); // [1,2,3,4,5]

// 2. indexOf() 사용
const indexArr = arr.filter((el, index) => {
  return arr.indexOf(el) === index;
});
console.log(indexArr); // [1,2,3,4,5]

// 3. caching / frequency map - array를 loop하여 미리 지정된 caching object 에 존재 여부 확인.

function cachingArr(arr) {
  const caching = {};
  const result = [];
  for (let i of arr) {
    if (!caching[i]) {
      // caching에 i가 존재하는지 체크 => 없을때만 추가
      result.push(i);
    }
    caching[i] = i; // caching에 i를 추가
  }
  return result;
}
console.log(cachingArr(arr)); // [1,2,3,4,5]
