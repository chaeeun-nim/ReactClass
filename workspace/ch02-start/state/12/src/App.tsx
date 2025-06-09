import { useState } from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0);

  return (
    <>
      <h2>12 이벤트 핸들러에서 state 값을 여러번 변경했을 때 문제점</h2>
      <p>{count}</p>
      <button onClick={()=>{
        console.log('클릭 핸들러 시작',count);
        setCount((num) => num +1 );
        setCount((num) => num +1 );
        setCount((num) => num +1 );
        console.log('클릭 핸들러 종료',count);
      }} >+1</button>
    </>
  )
}

export default App
