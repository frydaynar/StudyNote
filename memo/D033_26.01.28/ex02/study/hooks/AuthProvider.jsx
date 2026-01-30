// -- 1. import 영역 : 필요한 도구들 가져오기 --
import { createContext, useContext, useState, useEffect } from "react"
// React의 핵심 기능을 가져옴
// - createContext : 공용 데이터 바구니를 만들기
// - useContext : 바구니에서 데이터를 꺼내 씀
// - useState : 변하는 데이터(상태)를 관리
// - useEffect : 앱이 시작되거나 특정 조건일 때 실행할 코드를 적음

import { useNavigate } from "react-router";
// 페이지를 강제로 이동시키는 도구 (예 : 로그인 후 메인으로 보내기)

import axios from "axios"
// 서버(FastAPI)와 대화하기 위한 심부름꾼

// -- 2. api 기본 설정 영역(Axios 세팅) : 서버와의 약속
const api = axios.create({
  // .env 파일에서 서버 주소를 가져오고, 없으면 기본 8000번을 씀
  baseURL: import.meta.env.VITE_APP_FASTAPI_URL || "http://localhost:8000",
  
  // 【중요】백엔드가 보낸 쿠키를 브라우저에 저장하고 다시 보낼 수 있게 허용함
  withCredentials: true,
  
  headers: {
    "Content-Type": "application/json", // 우리는 데이터를 JSON 형식으로 주고받겠다
  },
})

// -- 3. AuthProvider 구현 영역 : 상태(State)와 로그인 함수 → 실제 로직

// (1) 공용 바구니(AuthContext)를 만들기
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  // (2) 로그인 여부를 기억할 변수(isLogin)를 만듦, 초기값은 false(로그아웃 상태)
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()

  // (3) 로그인 성공 시 실행할 함수
  const setAuth = status => {
    localStorage.setItem("user", status) // 브라우저 메모리에 '나 로그인했음'이라고 기록
    setIsLogin(status) // 리액트 화면을 로그인 상태로 바꿈
    navigate("/") // 메인 페이지로 보냄
  }

  // (4) 로그아웃 함수
  const removeAuth = () => {
    api.post("/logout") // 서버에 "나 이제 갈게" 라고 알림
    .then(res => {
      console.log(res)
      localStorage.removeItem("user") // 브라우저 메모리에서 기록을 지움
      setIsLogin(false) // 리액트 화면을 로그아웃 상태로 바꿈
      navigate("/") // 메인 페이지로 보냄
    })
    .catch(err => console.error(err))
  }

  // (5) 새로고침 방어 로직
  useEffect(()=> {
    // 앱이 처음 켜질 때 브라우저 메모리에 'user' 기록이 남아있다면,
    // 새로고침을 했어도 로그인 상태(true)로 인정해줌
    if(localStorage.getItem("user")) setIsLogin(true)
  }, [])

  return (
    // (6) 이 바구니(Provider)에 데이터와 함수들을 담아서 {children}(자식 컴포넌트들)에게 뿌려줌
    <AuthContext.Provider value={{ isLogin, setAuth, removeAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

// (7) 다른 파일에서 이 바구니의 데이터를 쉽게 꺼내 쓸 수 있게 만든 수신기(useAuth)
export const useAuth = () => useContext(AuthContext)

export default AuthProvider