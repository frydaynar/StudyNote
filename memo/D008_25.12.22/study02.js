// 연동 확인
console.log("study02");

// ============== 실습 ================

// 1. 변수 선언
    // var a ;
    // let b ;
    // const c ;

// 2. 대입
    // var a = 1;
    // let b = "일";
    // const c = true;

// 3. 출력
    var a = 1;
    let b = "일";
    const c = true;

    console.log( typeof b );

// 4. 조합
    console.log( a + b + c );
    console.log( typeof (a + b + c) ); // 서로 다른 자료형(타입)을 합치면 가장 큰 타입인 'string'이 나옴
    console.log(`글 : ${a}` + c); // 백틱 사용
    