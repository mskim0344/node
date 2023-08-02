var app = require('express')(); 
//express 모듈을 실행하고 app이라는 이름으로 저장



const PORT = process.env.PORT || 8000 // 주의 반드시 대무낮 PORT

app.get('/',(req, res)=>{
    res.send('주소창에 localhost:8000 로 요청이 와서 이 문자를 보내줘서 띄어줄게')
})

app.listen(PORT, () =>{
    console.log('콘솔에서 시간으로 확인해보면 바로 알게됨');
})
//서버는 듣겠다. 8080에 대한 요청이 발생시 콘솔에 아래의 메세지 출력


// 노드의 역활은 서버 / 즉 데이터와 연동하지않을 테이터는 리액트컴포넌트로 표현
// 나머지 불필요한 라우터삭제