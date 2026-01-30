from fastapi import FastAPI # FastAPI라는 요리 도구 세트를 가져옴
from fastapi.middleware.cors import CORSMiddleware # 다른 포트에서 오는 요청을 허용해주는 '통행증' 관리 도구를 가져옴

# ---- 1. CORS ----
# 브라우저는 기본적으로 '나(5173)'와 '남(8000)'의 통신을 막음
# 그래서 백엔드에서 CORSMiddleware로 "얘는 내 친구야" 라고 허락해줘야 함


# 이 식당에 들어올 수 있는 손님(프론트엔드 주소) 명단
origins = [
    "http://localhost:5173" # 리액트가 5173 포트를 쓰고 있다면 이 주소를 허용함
]

app = FastAPI() # FastAPI 앱 객체를 생성 (!!식당 오픈!!)

# 보안 정책(CORS) 설정을 추가
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins, # 위에서 정한 주소(리액트)만 접속 허락
    allow_credentials=True, # 쿠키나 로그인 정보 등을 주고받는 것을 허락
    allow_methods=["*"], # get, post 등 모든 방식의 요청을 허락
    allow_headers=["*"], # 모든 종류의 메타 정보(헤더)를 주고받는 것을 허락
)

# 손님이 "주소/" 경로로 get 요청(단순 조회)을 보내면 실행되는 함수
@app.get("/")
def read_root() :
    # 손님에게 줄 데이터(메뉴)를 딕셔너리 형태로 반환
    return {"status" : True, "result" : ["공유는 해드림"]}