from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from datetime import datetime, timedelta, timezone
from jose import jwt, JWTError
import mariadb
from db import findOne, save
import uuid # UUID 사용하기위해

SECRET_KEY = "your-extremely-secure-random-secret-key" # 키가 짧으면 안됨
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

def set_token(sub : int, name : str) :
  try :
    iat = datetime.now(timezone.utc) + (timedelta(hours=7)) # 영국과 우리나라 시차를 생각해서 계산했는데, JWT에서 영국 타임존으로 해도 왜인지 한국시간으로 보여줌
    exp = iat + (timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)) # 현재 시점에서 30분 이후 종료
    data = {
      "name" : str(name), # 커스텀 클레임
      "iss" : "EDU", # 토큰 발급자
      "sub" : str(sub), # 토큰 제목(사용자 식별값) / "sub" : str(1) → 문자열로 만들어줘야 함
      "iat" : iat, # 토큰 발급 시간 / 타임존이 필요 (utc : 영국 EU쪽)
      "exp" : exp # 토큰 만료 시간
    } 
    return jwt.encode(data, SECRET_KEY, algorithm=ALGORITHM) # 토큰이 만들어짐
  except JWTError as e :
    print(f"JWT ERROR : {e}")
  return None

origins = [
    "http://localhost:5173"
]

class LoginModel(BaseModel) :
  email : str = Field(..., title="이메일 주소", description="로그인을 위한 이메일 주소 입니다.")
  pwd : str = Field(..., title="비밀번호", description="로그인을 위한 비밀번호 입니다.")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
  return {"status" : True, "result" : ["공유는 해드림"]}

@app.post("/login")
def read_root(model : LoginModel) :
  sql = f"select `no`, `name` from edu.user where `email` = '{model.email}' and `pwd` = '{model.pwd}'"
  data = findOne(sql)
  # if data :
  #   print("존재")
  # else : 
  #   print("없다")
  if data :
    id = uuid.uuid4().hex
    token = set_token(data["no"], data["name"])
    sql = f"INSERT INTO edu.`login` (`id`, `userNo`, `token`) VALUE ('{id}', {data['no']}, '{token}')"
    if save(sql) :
      return {"status" : True, "access_token" : id}
  return {"status" : False}
  # print(model)

@app.post("/token")
def token() :
  result = set_token(1)
  return {"status" : True, "token" : result}

## UUID 연습
@app.get("/key")
def key(model: LoginModel) :
  sql = f"select `no`, `name` from edu.user where `email` = '{model.email}' and `pwd` = '{model.pwd}'"
  data = findOne(sql)
  if data :
    id = uuid.uuid4().hex
    token = set_token(data["no"], data["name"])
    sql = f"INSERT INTO edu.`login` (`id`, `userNo`, `token`) VALUE ('{id}', {data['no']}, '{token}')"
    if save(sql) :
      return {"status" : True, "access_token" : id}
  return { "status" : False }