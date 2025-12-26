/*
console.log("겁나 추워요");
console.log("겁나 추워요2222");

// main.js에 있는 내용을 가져와서 쓰고 싶음 (인포트)
// const a = require("./main.js"); -> 여러개를 보낼 수 있기 때문에 '객체'로 받겠다는 영역 표시가 필요함 { a }
const { a, b } = require("./main.js");
console.log(a);
console.log(b);
*/


// node 메인 코드 -> ES6로 작성되서 이대로는 사용 못함(package.json에서 type -> module로 변경)
// server.mjs
import { createServer } from 'node:http';
import { controller } from './main.js'; // export한거 잘 가져왔는지 확인
/*  
const server = createServer((req, res) => { // req : request, res : response
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); // html 태그와 한글을 적용하기 위해 content-type을 수정함
  res.end('<h1>안녕</h1>'); // 정적 상태
});
*/

/*
const server = createServer((req, res) => { 
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(text());
});
*/


// URL 패스 제어 -> 하나의 포트내에서 화면을 바꾸는 법
/*
const server = createServer((req, res) => { 
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    // console.log(req.url);
    if(req.url === "/a") { // 요청 url의 패스가 /a 일때
        res.end("<h2>A 주소 화면 입니다.</h2>"); // 이렇게 응답함
        // return; // 여기서 끝났다. 종료. else 대신 사용 가능
    } else { // 패스가 /a가 아닐경우에는
        res.end(text()); // text()로 응답
    }
});
*/


// controller로 불러오기
// (-> index.js에 모든걸 작성하기에는 양이 많기에 다른 파일에서 불러옴)
const server = createServer((req, res) => { 
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    const html = controller(req);
    res.end(html);
});




// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
