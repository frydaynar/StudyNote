console.log("스터디01");

/*
function load() {
    state = true;
    var html = "";

    // 반복문 실행
    for( let i = 0; i < 25; i++) {

        // if문 사용
        // let css = "1";
        // if(i % 2 === 0) css = "2"
        // html += `<div class="bg${ css }"></div>`; // html에서 찾아야 하니 html 태그 사용

        // 삼항연산
        html += `<div class="bg${ ( i % 2 === 0 ) ? '2' : '1' }"></div>`;
    }

    document.getElementsByTagName("section")[0].innerHTML = html; // 특정태그를 찾기 위한 코드 (여기서는 section)
    state = true; // 세 가지 버튼 모두 사용하기 위해
    // index 0의 section을 부모로 하는 자식들(div)을 교체
}
*/


// body에 포함이 안된 함수라 실행이 안됨
function f1() {
    for(let i = 1; i <= 10; i++) {
        console.log("인덱스 : " + i);
    }
}


// 비우기
function clean() {
    document.getElementsByTagName("section")[0].innerHTML = ""; 
    state = false; // 세가지 버튼 모두 사용하기 위해
}


// 만능버튼
// 그리기 <-> 비우기 과정이 프로그램 입장에서는 on-off 하나의 동작 처럼 느낄 수 있음 (토글)
// 즉, 버튼 하나로 동작이 가능 => ★true(보임)인지 false(안보임)인지 '상태'가 필요함★

// var state = false; // 처음에는 안보이게, 전역 변수
// function btnToggle() {
//     if(!state) {
//         load();
//     } else {
//         clean();
//     } // 상태가 일어남
//     state = !state; // true, false 스위치(교체)
// }

// 코드 짧게
// function btnToggle() {
//     if(!state) load();
//     else clean();
//     state = !state;
// }


// 3가지 버튼을 둔 상태에서 모두 사용 할 수 있게 하는 법
// 그리기 <-> 비우기는 가능한 상태
// but 그리기/비우기 <-> 만능버튼 동작은 약간 이상함
// state = 각 함수에 넣어줌

var state = false; // 처음에는 안보이게, 전역 변수 -> 전체 함수에 적용 가능
function btnToggle() {
    if(!state) {
        load();
    } else {
        clean();
    }
}


// css-bg3을 (2,2)에 출력
function load() {
    state = true;
    var html = "";

    for(let i = 0; i < 25; i++) {
        let css = "1";
        if(i % 2 === 0) css = "2"
    
        if(i === 6) css = "3"
        html += `<div class="bg${ css }"></div>`;
    }

    document.getElementsByTagName("section")[0].innerHTML = html;
    state = true; // 세 가지 버튼 모두 사용하기 위해

}