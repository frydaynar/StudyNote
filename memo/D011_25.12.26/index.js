import { createServer } from 'node:http';
import Main from './main.js'; // 대표 export가 있어서 중괄호가 없음
const server = createServer(Main); // 콜백함수(Main) 들어감
server.listen(3000, "127.0.0.1", () => {
  console.log('Listening on 127.0.0.1:3000');
});
