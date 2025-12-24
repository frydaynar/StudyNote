// [ 영역 설정 ]
    // : JQuery라는 영역에 들어가야 함
    // : $()();
    // JQuery 내부에 있는건 지역 함수로 JQuery 내부에서만 사용 가능

function a(){
    console.log("a"); // a는 호출 가능 (전역 함수)
}

// [ 기본 함수 만드는 방법 (함수명) ]
    // () {} : callback 함수. 이름없는 함수, 익명 함수
    // () => {} : 애로우 함수, const 사용
function fn1(){}
const fn2 = () => {}
// function () {}


// JQuery 함수 만들기 1 : callback 함수
$(function(){
    // ====== Jquery 영역 ======
    console.log("callback");
    function b() {
        console.log("b()"); // b는 JQuery 영역 안에 들어가 있어서 밖에서 호출이 안됨 (지역 함수)
    }
});

// JQuery 함수 만들기 2 : 애로우 함수
$(() => {
    // ====== Jquery 영역 ======
    console.log("애로우");
    function b() {
        console.log("b()");
    }
});

// JQery 함수 만들기 3 : document.ready
$(document).ready(() => {
    console.log("(document).ready");
});


// 함수 만들기 번외
/*
function fn(){
    // Jquery!!
    console.log("fn()");
}

$(fn); // callback함수나 엘로우 함수 형식으로 안넣어도, 함수 자체를 넣으면 넣은 함수가 jquery 영역에 들어감
*/


// =============== Jquery 시작 : 영역 설정 ===================

