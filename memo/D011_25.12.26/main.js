const contentList = [ // 응답에 사용할 정보 유형 -> 이 형식에 따라 응답됨
  { 'Content-Type': 'text/plain; charset=utf-8' }, // 글만 retrun
  { 'Content-Type': 'text/html; charset=utf-8' }, // html 형식 retrun
  { 'Content-Type': 'application/json; charset=utf-8' } // data형식 retrun
];

function page1() { // 글만 출력
  return "html 입니다.";
}

function page2(req) { // parameta 포함해서 출력
  return getParams1(req);
}

function page3(req) {
  return getParams2(req);
}

function getUrl(req) {
  let url = req.url;
  const index = req.url.lastIndexOf("?"); // ? 있니?
  if(index > 0) url = req.url.substring(0, index); // 있으면 잘라내
  return url; // 없으면 그냥 ㄱㄱ
}

function getParams1(req) { // url 가져와서 parameta 꺼내는 작업
  const url = new URL(req.url, `http://${req.headers.host}`);
  let html = ""; // 아무것도 없으면 길게 가고
  for(const [key, value] of url.searchParams){ // 있으면 꺼내서 작업함
    html += `<h2>${value}</h2>`;
  }
  return html;
}

function getParams2(req) {
  const index = req.url.lastIndexOf("?");
  const obj = {}; // 데이터 형식이 object라서 이름도 object라 함
  if(index > 0) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    console.log(url?.searchParams);
    for(const [key, value] of url.searchParams){
      obj[key] = value;
    }
    return JSON.stringify(obj); // object를 문자열로 바꿔서 return
  }
  return obj;
}

export default function Main(req, res) { // 얘만 export해서 쓸거라 default를 줌, 인자값 (req, res)
    let url = getUrl(req); // url 가져옴
    let html = "";
    let contents = {};
    if(url === "/a") {
        html = page2(req);
        contents = contentList[1]; // html 형식으로 parameta 보여주기
    } else if(url === "/b") {
        html = page3(req);
        contents = contentList[2]; // json 형식으로 
    } else {
        html = page1();
        contents = contentList[0]; // 글만
    }
    res.writeHead(200, contents);
    res.end(html);
}
