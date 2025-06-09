import { useState } from 'react'

function Message() {
  const [msg, setMsg] = useState('')
  const [count, setCount] = useState(0)
  const haddleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const inputMsg = event.target.value;
    setMsg(inputMsg)
    setCount(count+1)
  }
  return (
    <div>
      <input type="text" value={ msg } onChange={ haddleChange }/>
      <br />
      <span>입력 메세지: { msg }</span>
      <br />
      <span>입력 횟수: { count }</span>
    </div>
  )
}

export default Message;