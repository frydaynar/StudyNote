/*
$(document).ready(() => {
    const html = `
        <div class="bg2"></div>
        <div class="bg1"></div>
        <div class="bg2"></div>
        <div class="bg1"></div>
        <div class="bg2"></div>

        <div class="bg1"></div>
        <div class="bg2"></div>
        <div class="bg1"></div>
        <div class="bg2"></div>
        <div class="bg1"></div>

        <div class="bg2"></div>
        <div class="bg1"></div>
        <div class="bg2"></div>
        <div class="bg1"></div>
        <div class="bg2"></div>

        <div class="bg1"></div>
        <div class="bg2"></div>
        <div class="bg1"></div>
        <div class="bg2"></div>
        <div class="bg1"></div>

        <div class="bg2"></div>
        <div class="bg1"></div>
        <div class="bg2"></div>
        <div class="bg1"></div>
        <div class="bg2"></div>`;

    $("section").html(html);
});
*/


// 반복문 형식
/*
$(document).ready(() => {
    
    function view1() {
        var html = "";
        for(let i = 0; i < 25; i++) {
            let css = "1";
            if(i % 2 === 0) css = "2"
            html += `<div class="bg${ css }"></div>`;
        }
        
        $("section").html(html);
        state = true; // 그리기/비우기 <-> 만능버튼 상호작용을 위해 논리값 넣어주기
    }
    
    // 버튼 3개의 기능 한 번에 처리 with 콜백함수
    var state = false; // 만능버튼 논리값을 위한 변수
    $("button").click(function(e) { // function() 콜백함수 넣었음 (또는 애로우 함수 넣기 : () => {})
        // console.log(e.target); // .target을 넣어서 버튼을 타켓으로 지정함
        // ↑ document.getElementsByTagName("button")[0] 과 같은 말
        const index = $("button").index(e.target); // button이 몇 번째인지 알고 싶어서 사용, 고정시키고 싶어서 const
        if(index === 0) { // 그리기 버튼
            view1();
        } else if(index === 1) { // 비우기 버튼
            $("section").empty();
            state = false; // 비우기는 그리기 처럼 함수로 따로 안만들어서 다 넣어줌
        } else if(index === 2){ // 만능 버튼
            if(!state) view1();
            else {
                $("section").empty();
                state = false; // 비우기는 그리기 처럼 함수로 따로 안만들어서 다 넣어줌
            }
        }
    });
    
});
*/



// 위의 코드 정리

$(document).ready(() => {

    function view1() {
        var html = "";
        for( let i = 0; i < 25; i++ ) {
            let css = "1";
            if( i % 2 === 0) css = "2"
            html += `<div class = "bg${ css }"></div>`;
        }

        $("section").html(html);
        state = true;
    }

    var state = "false";
    $("button").click(function(e) {
        const index = $("button").index(e.target);
        if(index === 0) {
            view1();
        } else if(index === 1) {
            $("section").empty();
            state = false;
        } else if(index === 2) {
            if(!state) view1();
            else {
                $("section").empty();
                state = false;
            }
        }
    });
});




/* 중복 실행
$(document).ready(() => {

    function view1() {
        var html = "";
        for( let i = 0; i < 25; i++ ) {
            let css = "1";
            if( i % 2 === 0) css = "2"
            html += `<div class = "bg${ css }"></div>`;
        }

        $("section").html(html);
    }

    //off와 on을 사용해 중복 실행을 해결 할 수 있음 (예를들어 코드가 길 때 위에 만든것을 잊어서 중복 실행되는 경우)
    // 뒤에 나와 있는 동작만을 위해 행동함
    // off와 on을 세트로 사용하지만, off만 단독으로 쓰기도 함 (모두 동작 못하게 할 때)
    $("button").off().on("click", function(e) {
        console.log(e);
        // const index = $("button").index(e.target);
        // if(index === 0) {
        //     view1();
        // }
    });
});
*/




