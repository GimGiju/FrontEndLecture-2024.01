//3. 어레이를 매개변수로 받아서 합의 제곱과 제곱의 합의 차이를 구하는 함수를 만들고,
//[24, 67, 45, 97, 43]의 결과를 출력

let addArray = [24, 67, 45, 97, 43]

function divSum(arr){
    let sum = 0;
    let meet = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i] * arr[i];
        meet += arr[i] 
    }
      
    let dif = meet * meet - sum ;
    return dif;
}

console.log(divSum(addArray));


