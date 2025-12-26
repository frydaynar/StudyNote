
/* 1
const a = true;
const b = false;
// index.js에서 사용할 수 있게 보내주는 작업
// module을 안붙여주면 undefined가 나옴 (제대로 보내주지 못함)
module.exports = { a, b };
*/


/* 2
let cnt = 0;

function event1 () {
    console.log("호출");
    cnt = cnt + 1;
    return cnt;
}

export function text() {
    return `<h1>방문자 : ${event1()}</h1>`;
}
*/

/*
function text() {
    let html = "";

    html += "<h1>html 입니다.</h1>";
    html += "<p>node service ...</p>";

    return html;
}

// controller로 내보내기
export function controller(req) { // 최소 url 주소를 알려면 req와 res가 필요함, 여기서는 req만 사용해봄

    let html = "";

    // 특정 주소를 매칭시켜서 논리적으로 정의함
    if(req.url === "/a") { // .js 파일까지 안감(URI 형태가 X)
        html = "<h2>A 주소 화면 입니다.</h2>";
    } else if(req.url === "/b") {
        html = "<h2>B 주소 화면 입니다.</h2>";
    } else {
        html = text();
    }

    return html;
}
*/


/*
// 한글이 안 깨진 상태 payload 꺼내기
export function controller(req) { 

    let html = "";
    // console.log(req.url.lastIndexOf("?"));
    let url = req.url; // 예외처리를 위해
    const index = req.url.lastIndexOf("?");
    if(index > 0) url = req.url.substring(0, index); // 예외처리 완료 -> b화면이 나오게 해줌
    if(url === "/a") { 
        // console.log(req.headers.host); // IP가 달라질 수 있음. 요청 객체 안에서 꺼내옴
        const parameters = new URL(req.url, `http://${req.headers.host}`); // url주소 가져올 때 사용

        // console.log(parameters.searchParams.get("name"));
        // console.log(parameters.searchParams.get("age"));
        // 가변적일때 하나씩 꺼낸다면? -> 반복문 사용

        // console.log(typeof parameters.searchParams); // object 형식

        for(const [key, value] of parameters.searchParams) {
            console.log(`${key} : ${value}`);
            html += `<h2>${value}</h2>`;
        }

        // html = "<h2>A 주소 화면 입니다.</h2>";
    } else if(url === "/b") {
        html = "<h2>B 주소 화면 입니다.</h2>";
    } else {
        html = text();
    }

    return html;
}
*/


// 위의 코드 정리
function text() {
    let html = "";

    html += "<h1>html 입니다.</h1>";
    html += "<p>node service ...</p>";

    return html;
}

export function controller(req) {
    let html = "";
    let url = req.url;
    const index = req.url.lastIndexOf("?");
    if(index > 0) url = req.url.substring(0, index);
    if(url === "/a") {
        const parameters = new URL(req.url, `http://${req.headers.host}`);
        for(const [key, value] of parameters.searchParams) {
            console.log(`${key} : ${value}`);
            html += `<h2>${value}</h2>`;
        }
        // html = "<h2>A 주소 화면 입니다.</h2>";
    } else if(url === "/b") {
        html = "<h2>B 주소 화면 입니다.</h2>";
    } else {
        html = text();
    }
    return html;
}