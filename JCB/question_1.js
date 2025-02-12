// 문제 1. 별찍기

/**
 *
 *     *
 *    ***
 *   *****
 *  *******
 * *********
 */

function solution(count) {
  /**
   * 체크포인트
   * 1. 총 5줄로 이루어져 있음
   * 2. 공백이 N-1개부터 0개까지 줄어듬
   * 3. 별의 갯수가 1,3,5,7,9 로 1+(2*i)개씩 늘어남
   */

  for (let i = 0; i < count; i++) {
    let star = "*";
    let space = " ";
    // string의 repeat() 메서드는 안에 인자값의 숫자 만큼 반복함.
    console.log(space.repeat(count - 1 - i) + star.repeat(1 + 2 * i));
  }
}
const count = 3;
solution(count);
