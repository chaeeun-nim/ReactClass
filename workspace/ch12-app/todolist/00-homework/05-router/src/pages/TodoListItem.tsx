import { Link } from "react-router";

function TodoListItem() {
  return (
    <>
      <li>
        <span>1</span>
        <Link to="/todoinfo">잠자기</Link>
        <Link to="/todolist">삭제</Link>
      </li>
    </>
  );
}

export default TodoListItem;
