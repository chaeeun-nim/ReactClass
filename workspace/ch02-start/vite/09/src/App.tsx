import Title from "./components/Title";
import TodoList, { type TodoItem } from "./pages/todo/List";



// Title, TodoList의 부모 컴포넌트
function App(){
  const list: TodoItem[] = [
    {_id:1, title:'React 공부', done:false},
    {_id:2, title:'Javascript 프로젝트', done:true},
    {_id:3, title:'Javascript 공부', done:true},
  ]
  return (
    <div id="app">
      <div>
        <Title />
        <Title titleName="니 똥 칼라 파워"/>
        <Title titleName="개똥아 똥쌌니 아니오"/>
        <TodoList list = {list} />
      </div>
    </div>
  );
}

export default App;