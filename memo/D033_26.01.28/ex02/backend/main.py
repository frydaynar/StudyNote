from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware 
from pydantic import BaseModel

origins = [
    "http://localhost:5173"
]

class LoginModel(BaseModel) :
    email : str
    pwd : str

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root() :
    return {"status" : True, "result" : ["공유는 해드림"]}

@app.post("/login")
def login(loginModel : LoginModel, response : Response) :
    response.set_cookie(
        key = "user",
        value = loginModel.email,
        max_age = 60 * 60,
        expires = 60 * 60,
        path = "/",
        domain = "localhost",
        secure = True,
        httponly = True,
        samesite = "lax",
    )
    return {"status" : True, "model" : loginModel}

@app.post("/logout")
def logout(response : Response) :
    response.delete_cookie(key="user")
    return {"staus" : True}

@app.get("/user")
def user(request : Request) :
    email = request.cookies.get("user")
    if email :
        return {"status" : True, "me" : email}
    else :
        return {"status" : False}