// 중년 조건문(Nested If)
//윤년
// 4로 나누어지면 윤년 100으로 나누어지면 평년, 400으로 나누어지면 윤년

let year = 2024;
if (year % 4 == 0){
    if(year % 100 ==0){
        if (year % 400 == 0){
            console.log(`${year}년은 윤년입니다`);
        }else{
            console.log(`${year}년은 평년입니다`);
        }
    }else {
        console.log(`${year}년은 윤년입니다`);
    }

}else{
    console.log(`${year}년은 평년입니다`);
}

// 코드 개선 - Refactoring
//4로 나누어지고(and &&) 100으로는 나누어지지 않거나(or ||) 400으로 나누어지면 윤년
if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
    console.log(`${year}년은 윤년입니다.`);
else    
    console.log(`${year}년은 평년입니다.`);

