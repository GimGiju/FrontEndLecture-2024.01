//1. 만 나이를 계산하기 생년, 월, 일을 변수로 설정해서 풀기


function myage(myage1){
    let biryear = birthDate.getFullyear();//생일년도
    let birmon = birthDate.getFullyear(); // 생일 월
    let birdat = birthDate.getFullyear(); // 생일 일

    let currentDate = new Date();   //현재 날짜
    let currentyear = currentDate.getFullyear(); //현재 년도
    let currentmon = currentDate.getFullyear();  //현재 월
    let currentdat = currentDate.getFullyear();  //현재 일

    let mage = currentyear - biryear; // 만 나이

    if(birmon < currentmon){
        mage--
    } //현재 생일과 현재 월 비교
    else if(currentmon === birmon && currentdat < birdat){
        mage--
    }

    return mage;
    
}
let birthDate = new Date('1998-03-31');// 내 생일
let mage = myage(myage1);
console.log(`현재 날짜는 ${currentyear}년/${currentmon}월/${currentdat}일 입니다. `)
console.log(`제 생일은 ${biryear}년 /${birmon}월/ ${birdat}일 입니다.`);
console.log(`제 만나이는 ${mage}입니다`);