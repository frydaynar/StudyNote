// 연동 확인
console.log("study04");

// if문 알아보기

// 1. 참이 나오는 경우
if(true) {
    console.log("참");
} else {
    console.log("거짓");
}

// 2. 거짓이 나오는 경우
if(false) { // ! : 부정을 의미함
    console.log("참");
} else {
    console.log("거짓");
}

if(!true) { // ! : 부정을 의미함
    console.log("참");
} else {
    console.log("거짓");
}

// ==============================================
// 거짓
if(1 === 0) { 
    console.log("참");
} else {
    console.log("거짓");
}

// 참 -> == : 값만 비교
if(1 == "1") { 
    console.log("참");
} else {
    console.log("거짓");
}

// 참 -> 존재하기 때문에
var a = 10;
if(a) { 
    console.log("참");
} else {
    console.log("거짓");
}

// 참
var a = 10;
if(a > 0) { 
    console.log("참");
} else {
    console.log("거짓");
}
// ==============================================

// ※ 비교자 (w3school 참고 : https://www.w3schools.com/js/js_arithmetic.asp)
// 1. >
// 2. >=
// 3. <
// 4. <=
// 5. % : 나머지

// ==============================================

// 1. 짝수 구하기
var a = 10;
if(a % 2 === 0) { // a를 2로 나눈 나머지(%)가 0과 같으면(===) 참
    console.log("참");
} else {
    console.log("거짓");
}

// 2. 홀수 구하기
var a = 10;
if(a % 2 !== 0) { // a를 2로 나눈 나머지(%)가 0과 같지 않으면(!==) 거짓
    console.log("참");
} else {
    console.log("거짓");
}

// for문 활용
for(let i = 0; i < 10; i++) {
    if(i % 2 !== 0) { // 홀수
        console.log("홀수 : " + i)
    }
}

for(let i = 0; i < 10; i++) {
    if(i % 2 === 0) { // 짝수 (0포함)
        console.log("짝수 : " + i)
    }
}

// || : or (두 조건 중 하나만 참이여도 참) / && : and (두 조건 모두가 참이여야 참)
for(let i = 0; i < 10; i++) {
    if(i % 2 === 0 && i !==0) { // 짝수 (0미포함)
        console.log("짝수 : " + i)
    }
}

// or와 and를 안쓰고 싶다면↓
for(let i = 0; i < 10; i++) {
    if(i === 0) {
        continue; // 점프 시키는 코드, 점프가 걸리면 밑에 것이 실행이 안됨, 건너 뛰어라!
    }
    if(1 % 2 === 0) {
        console.log(i);
    }
}

// if문에 하나만 들어가 있을 경우 {}를 지우고 줄여서 사용 가능
for(let i = 0; i < 10; i++) {
    if(i === 0) continue;
    if(1 % 2 === 0) console.log(i);
}