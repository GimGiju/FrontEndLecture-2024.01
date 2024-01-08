//연습문제
//1. 1에서 1000사이에 0은 몇번, 1은 몇번, ...., 9는 몇번 사용되었는가?
// 0123456789101112131415....9991000
let numStr = '';
for (let i = 1; i <= 1000; i++){
    numStr += i;
}

//정규표현식 사용
// 1이 몇번 사용되었나?

//1234567890101112131415   0, 2-9 

console.log(numStr.replace(/[^1]/g, ''));

for(let i = 0; i <= 9; i++){
    let pattern = new RegExp('[^' + i + ']', 'g');
    count = numStr.replace(pattern, '').length

    console.log(`${i}: ${count}`);
}

//count 배열을 만들어 일일이 체크
let countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 0; i < numStr.length; i++){
    let num = Number(numStr[i]);
    countArr[num]++;
}
console.log(countArr);


// 2. 디지텔 시계, 00:00 ~ 23:59
// 하루동안 3이 표시되는 시간은 몇초인가?
let hour = date.getHours;
let min = date.getMinutes;
let sec = date.getSeconds;

for (let i = 0; i <= 1000; i++){
    h  += i; 
}
for (let i = 0; i < 3; i++ ){

}





// 3. 두개의 세자리수를 곱해서 나온 결과가 palindrome일때
// 가장 큰 palindrome 수와 어떤 수를 곱해서 나온 결과인가?





//4. C:Workspace/WebProject/03.JavaScript/ch07.표준내장객체/04.String연습.js
//에서 파일명(04.string연습.js)만 출력하세요.

const find ='C:Workspace/WebProject/03.JavaScript/ch07.표준내장객체/04.String연습.js';
// let fi = find.slice(49 , 64);
// console.log(fi);
let fi = find.split('/').pop();
console.log(fi);
// console.log(fi.pop());

// console.log(find.split('/'));
// console.log(find.pop());





