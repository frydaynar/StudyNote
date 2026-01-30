import axios from 'axios' // 서버와 통신하기 위한 심부름꾼 도구인 'axios'를 가져옴 (종업원)

const Home = () => {
  // 버튼을 눌렀을 때 실행될 이벤트 함수를 정의
  const btn1Event = () => {
    console.log("btn1 호출") // 브라우저 콘솔에 로그를 남김

    // 1. axios를 이용해 백엔드 서버(8000번 포트)에 데이터를 달라고 요청
    axios.get("http://localhost:8000")
    // 2. 서버가 성공적으로 응답을 보내주면 실행됨 (res는 서버에서 온 결과 봉투)
    .then(res => {
      console.log(res.data) // 서버에서 보내준 진짜 데이터 ({status : True...})를 출력
      
      // 서버 응답의 status가 True라면 알림창에 첫 번째 결과값을 띄움
      if(res.data.status) {
        alert(res.data.result[0]) // "공유는 해드림"이 뜸
      } else {
        alert("오류 발생") // status가 False라면 오류 알림을 띄움
      }
    })

    // 3. 서버가 꺼져있거나 주소가 틀리는 등 '통신 에러'가 나면 실행됨
    .catch(err => console.error(err))

    // 4. 성공하든 실패하든 통신이 끝나면 무조건 마지막에 실행됨
    .finally(() => console.log("완료"))
  }

  // 화면에 보여줄 HTML 구조를 반환
  return (
    <div className="text-center">
      <h1>메인 화면입니다.</h1>
      <button type="button" onClick={btn1Event}>FastAPI 확인</button>
    </div>
  )
}

export default Home // 다른 파일에서 이 컴포넌트를 가져다 쓸 수 있게 내보냄