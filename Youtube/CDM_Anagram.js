// 애너그램(Anagram) 판별
// 애너그램이란 단어의 낱말을 가지고 재조합하여 다른 단어 혹은 문장을 만든것

// 나의생각
// listen 이라는 단어가 있다고 가정할 때 해당 단어의 길이와 낱말의 갯수를 체크하여
// sitenl 이라는 단어의 길이, 낱말의 갯수를 체크해 같을 경우 true 리턴

// 문제풀이중 수정 - 낱말을 정렬하여 같은 값인지 체크하면 될듯.

function myAnagram(string, anaString) {
  if (string.length !== anaString.length) {
    return false;
  }
  const str = string.split("").sort().join("");
  const anaStr = anaString.split("").sort().join("");
  console.log(str, anaStr);
  if (str === anaStr) {
    return true;
  } else {
    return false;
  }
}

// 코딩문 선생님의 풀이
// 1번안 - split, sort, join을 이용 - 나와 같은 풀이
// 2번안 - hashmap 사용

function hashAnagram(str, anaStr) {
  if (str.length !== anaStr.length) {
    return false;
  }
  const hashMap = {};
  for (const char of str) {
    hashMap[char] = hashMap[char] ? hashMap[char] + 1 : 1;
  }
  for (const char of anaStr) {
    if (!hashMap[char]) {
      return false;
    }
    hashMap[char]--;
  }
  return true;
}
