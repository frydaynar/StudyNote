import axios from 'axios'
import { useState } from 'react'
import { jwtDecode } from "jwt-decode"

const Login = () => {
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")

  const submitEvent = e => {
    e.preventDefault()
    const params = { email, pwd } 
    // console.log("확인", params)
    axios.post("http://localhost:8000/login", params)
    .then(res => {
      console.log(res)
      if(res.data.status) {
        // console.log(jwtDecode(res.data.access_token))
        console.log(res.data.access_token)
      }
    })
  }

  return(
    <div className="container mt-3">
			<h1 className="display-1 text-center">로그인</h1>
			<form onSubmit={submitEvent}>
				<div className="mb-3 mt-3">
					<label htmlFor="email" className="form-label">이메일</label>
          {/* name은 빠질 수 있음, id는 못 뺌 */}
					<input type="email" className="form-control" id="email" placeholder="이메일를 입력하세요." name="email" value={email} onChange={e=>setEmail(e.target.value)}/>
				</div>
				<div className="mb-3">
					<label htmlFor="pwd" className="form-label">비밀번호</label>
					<input type="password" className="form-control" id="pwd" placeholder="비밀번호를 입력하세요." name="pwd" value={pwd} onChange={e=>setPwd(e.target.value)}/>
				</div>
        <div className="d-flex">
          <div className="p-2 flex-fill d-grid">
            <button type="submit" className="btn btn-primary">로그인</button>
          </div>
          <div className="p-2 flex-fill d-grid">
            <button type="button" className="btn btn-primary">취소</button>
          </div>
        </div>
			</form>
		</div>
  )
}

export default Login