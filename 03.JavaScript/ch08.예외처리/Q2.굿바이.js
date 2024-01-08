// 2. 백준도장 31090 다음 사례에 대해서 Good/Bye를 출력 2023, 2024,... 2040 
//단 조건에 맞는지를 확인해주는 함수 iscicisible(year)를 만들어서 해결
//백준 온라인 저지의 송년대회 Good Bye, BOJ 2023!의 개최일은 2023년 12월 31일이다. 
//키파는 대회가 개최된다는 사실이 기뻐 2023과 2024를 뚫어져라 보다가 무언가 특별하다는 사실을 깨달았다.
//그렇다. 내년의 연도인 2024가 올해 연도의 끝 두 자리인 23으로 나누어 떨어진다! 
//다음에도 이런 연도가 오려면 6년 뒤인 2029/2030년이 되어야 한다.
//양의 정수 N이 주어진다. N년과 + 1년이 이러한 조건을 만족하는 관계인지 판별하는 프로그램을 작성하라.


function isDicisible(year){
    let year1 = year + 1;
    let year2 = year % 100;
    
    for(let i = 2023; i <= 2040; i++){
      if(isDicisible(i))
          console.log('good');
          else
          console.log('bye');
        return'good' ;
        return 'bye'
    }
  }