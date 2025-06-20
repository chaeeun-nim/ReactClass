import type { TodoItem } from "@pages/TodoInfo";
import type React from "react";
import { Link, useNavigate, useOutletContext } from "react-router";

interface OutletContextProps {
  item: TodoItem;
}

function TodoEdit() {
  const navigate = useNavigate();
  const { item } = useOutletContext<OutletContextProps>();

  const updateTodo = (event: React.FormEvent) => {
    event.preventDefault();
    alert("할일이 수정되었습니다.");
    console.log("수정함!");
    navigate(`/list/${item._id}`);
    // navigate(`/list/3`);
  };
  return (
    <>
      <h2>할일 수정</h2>
      <div className="todo">
        <form onSubmit={updateTodo}>
          <label htmlFor="title">제목 :</label>
          <input type="text" id="title" defaultValue={item.title} autoFocus />
          <br />
          <label htmlFor="content">내용 :</label>
          <textarea id="content" cols={23} rows={5} defaultValue={item.content} />

          <br />
          <label htmlFor="done">완료 :</label>
          <input type="checkbox" id="done" defaultChecked={item.done} />
          <br />
          <button type="submit">수정</button>
          <Link to={`/list/${item._id}`}>취소</Link>
        </form>
      </div>
    </>
  );
}

export default TodoEdit;
