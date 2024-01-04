 for( let i = 1; i <= 9; i++){
    for( let a = 1; a <= 9; a++){
    console.log(i, 'x', a,'=', i*a );
      }
}

let num = 6
for (let i = 1; i <=9; i++){
    console.log(`${num} x`)
}


//선생님 답안

// 백준도장 2739
// 구구단
/* let num = 6;
for (let i = 1; i <= 9; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
} */

// 2단 ~ 9단
for (let i = 2; i <= 9; i++) {
  console.log(`============== ${i} 단 ==============`);
  for (let k = 1; k <= 9; k++)
      console.log(`${i} x ${k} = ${i * k}`);
  console.log();
}