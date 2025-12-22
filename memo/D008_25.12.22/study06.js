console.log("====================================");


const start = 1;
const end1 = 10;
const end3 = 20;
const str = "javascript";
const keyword = "a";


// 문제 1 : 1부터 10까지 숫자 중 홀수만 출력하세요.

// let num = "";
// for(i = 0; i <= end1; i++){
//     if(i % 2 !== 0){
//         num = i;
//     } else {
//         continue;
//     }
//     console.log(num);
// }

for(i=start; i <= end1; i++){
    if(i % 2 === 0){
        continue;
    }
    console.log(i);
}

console.log("====================================");

// 문제 2 : 1부터 20까지 숫자 중 3의 배수를 출력에 제외하세요.

// let num2 = "";
// for(i = 0; i <= end3; i++){
//     num2 = start+i;
//     if(num2 % 3 === 0){
//         continue;
//     } 
//     console.log(num2);
// }

for(i=start; i <= end3; i++) {
    if(i % 3 === 0){
        continue;
    }
    console.log(i);
}


console.log("====================================");

// 문제 3 : 문자열 "javascript"의 각 문자를 한 줄씩 출력 중 'a'만 제외하세요.

for(let text of str){
    if(text === keyword){
        continue;
    }
    console.log(text);
}


// 한 줄로 이어쓰기

let line = "";
for(let text of str){
    if(text === keyword){
        continue;
    }
    line = line + text;
}
console.log(line);