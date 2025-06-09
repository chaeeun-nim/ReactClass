import { useState } from 'react';


function App() {
  const [position,setPosition] = useState({x:50, y:150})

  return (
    <>
      <h1>13 상태관리 대상이 객체일 경우 주의 사항</h1>
      <div className="container" onPointerMove={ event => {
        console.log(event.pageX, event.pageY);
        // const newPosition = {x:event.pageX, y:event.pageY}
        setPosition({ x: event.pageX, y: event.pageY })
      } }>
        
      </div>
        <div className="circle" style={{pointerEvents:'none',transform:`translate(${position.x}px, ${position.y}px)`}}></div>
    </>
  )
}

export default App
