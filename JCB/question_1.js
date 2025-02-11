// 1. 배열에서 값 삭제 후 출력하기.

let nums = [100, 200, 300, 400, 500];
console.log("처음 nums : " + nums);

nums.pop(); // 뒤에서부터 하나 씩 제거
console.log("pop후 nums : " + nums);

nums.shift(); // 앞에서부터 하나 씩 제거
console.log("shift후 nums : " + nums);

nums.splice(0, 1); // 0번째 인덱스부터 1개 제거
console.log("splice후 nums : " + nums);

for(let i = 0; i < nums.length; i++){ // 특정 값을 지닌 값 제거
    if(nums[i] === 300){
        nums.splice(i, 1);
    }
}
console.log("300을 제거한 nums : " + nums);