# -- 1. 도구 가져오기 및 환경 설정 --
from fastapi import FastAPI, Request, Response # FastAPI의 핵심 기능(요청, 응답 처리)을 가져옴
from fastapi.middleware.cors import CORSMiddleware # 다른 포트(리액트)의 접속을 허용하는 '통행증' 도구
from pydantic import BaseModel # 데이터의 규격(형식)을 정해주는 도구

# 허용할 프론트엔드 주소 (리액트 기본 포트 5173)
origins = [
    "http://localhost:5173"
]

# [로그인 규격] 손님이 보낼 데이터는 반드시 이 형식(이메일, 비밀번호)이어야 한다고 정함
class LoginModel(BaseModel) :
    email : str # 문자열 형태의 이메일
    pwd : str # 문자열 형태의 비밀번호

app = FastAPI() # FastAPI 주방을 오픈

# CORS 설정 : 리액트 앱이 이 서버에 안전하게 접근할 수 있도록 문을 열어줌
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True, # 【중요】리액트 앱이 이 서버에 안전하게 접근할 수 있도록 문을 열어줌 
    allow_methods=["*"], # 모든 방식(get, post 등) 허용
    allow_headers=["*"], # 모든 메타 정보 허용
)

# -- 2. 기능(메뉴) 만들기 --
# ① 기본 화면 (GET /)
@app.get("/")
def read_root() :
    # 서버가 잘 작동하는지 확인하는 용도의 간단한 응답
    return {"status" : True, "result" : ["공유는 해드림"]}

# ② 로그인 (POST /login) : 현재 코드의 핵심 부분
@app.post("/login")
def login(loginModel : LoginModel, response : Response) :
    # response.set_cookie : 손님(브라우저)의 가방에 'user'라는 이름의 이름표(쿠키)를 넣어줌
    response.set_cookie(
        key = "user",               # 이름표의 이름
        value = loginModel.email,   # 이름표에 적힐 내용 (사용자 이메일)
        max_age = 60 * 60,          # 1시간 동안 유지 (60초 * 60분)
        expires = 60 * 60,          # 만료 시간 설정
        path = "/",                 # 모든 페이지에서 이 쿠키를 사용할 수 있음
        domain = "localhost",       # 이 주소에서만 쿠키가 유효함
        secure = True,              # 보안 연결(HTTPS)에서만 전송 (로컬 테스트 시 간혹 주의)
        httponly = True,            # 자바스크립트가 쿠키를 훔쳐가지 못하게 방어
        samesite = "lax",           # 서로 다른 사이트 간의 요청 시 보안 설정
    )
    # 로그인 성공 메시지와 함께 받은 데이터를 그대로 돌려줌
    return {"status" : True, "model" : loginModel}

# ③ 로그아웃 (POST /logout)
@app.post("/logout")
def logout(response : Response) :
    # 손님의 가방에서 'user' 이름표를 찾아 삭제
    response.delete_cookie(key="user")
    return {"staus" : True}

# ④ 사용자 확인 (GET /user)
@app.get("/user")
def user(request : Request) :
    # 손님이 가져온 가방에서 'user'라는 이름표가 있는지 확인
    email = request.cookies.get("user")
    if email :
        # 이름표가 있다면 "너는 누구구나!" 하고 알려줌
        return {"status" : True, "me" : email}
    else :
        # 이름표가 없다면 로그인하지 않은 상태로 간주
        return {"status" : False}