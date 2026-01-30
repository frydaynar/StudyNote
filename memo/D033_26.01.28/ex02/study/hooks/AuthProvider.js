import { createContext } from 'react'; // 리액트 패키지에서 Context(데이터 바구니)를 만드는 도구를 가져옴

// 외부에서 사용할 수 있도록 'AuthContext'라는 이름의 데이터 바구니를 만들어 내보냄
// createContext(null)은 처음 바구니를 만들 때 안에 아무것도(null) 넣지 않겠다는 뜻

export const AuthContext = createContext(null);
