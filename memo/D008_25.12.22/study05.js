// 연동 확인
console.log("study05");

// 문제 (for문 & if문)
//     출력 예시 : 
//     O
//     OX 
//     OXO
//     OXOX
//     OXOXO
//     OXOXOX
//     OXOXOXO
//     OXOXOXOX
//     OXOXOXOXO (9개)

// MY
    /*
        var a = "O"
        var b = "X"
        for(i = 0; i < 9; i++) {
            if(i % 2 === 0){
                console.log(a)
            } else {
                console.log(b)
            }
        }
    */

// Teacher  
    const a = "O"
    const b = "X"
    let 값 = ""
    for(i = 0; i < 9; i++) {
        if(i % 2 !== 0){ // if문 정의
            값 = 값 + b;
        } else {
            값 = 값 + a;
        }
        console.log(값);
    }
    

// 코드 줄인 버전
    /*
    const a = "O"
    const b = "X"
    let 값 = ""
    for(i = 0; i < 9; i++) {
        값 = (i % 2 !== 0) ? 값 + b : 값 + a; //삼항 연산자
        console.log(값);
    }
    */


// 연습

console.log("====================================");

let value = "";
const star1 = "☆";
const star2 = "★";

for (i = 0; i < 9; i++) {
    if(i % 2 === 0){
        value = value + star1;
    } else {
        value = value + star2;
    }
    console.log(value);
}

console.log("====================================");

let value2 = "";
const star3 = "☆";
const star4 = "★";

for(i = 0; i < 9; i++) {
    if(i % 2 !== 0) {
        value2 = value2 + star4;
    } else {
        value2 = value2 + star3;
    }
    console.log(value2);
}

console.log("====================================");

// ○●○●○●○●○●
let value3 = ""
const round1 = "○";
const round2 = "●";

for(i = 0; i < 9; i++){
    if(i % 2 === 0) {
        value3 = value3 + round1;
    } else {
        value3 = value3 + round2;
    }
}
console.log(value3);

console.log("====================================");

let value4 = "";
const round3 = "○";
const round4 = "●";

for(i = 0; i < 9; i++){
    if(i % 2 === 0){
        value4 = value4 + round3;
    } else {
        value4 = value4 + round4;
    }
    console.log(value4.length + " : " + value4);
}

console.log("====================================");

let value5 = "";
const heart1 = "♡";
// const heart2 = "♥";

for(i = 0; i < 9; i++) {
    if(i % 2 === 0) {
        value5 = value5 + heart1;
    } else {
        continue;
    }
    console.log(value5.length + " : " + value5);
}

