import TodoInfo from "@pages/TodoInfo";
import { Link } from "react-router";

function TodoEdit() {
  return (
    <>
      <TodoInfo />
      <h2>할일 수정</h2>
      <div className="todo">
        <form>
          <label htmlFor="title">제목 :</label>
          <input type="text" id="title" value="잠자기" autoFocus />
          <br />
          <label htmlFor="content">내용 :</label>
          <textarea id="content" cols={23} rows={5}>
            주말에 수업 끝나면 잠이나 실컷 자야지
          </textarea>
          <br />
          <label htmlFor="done">완료 :</label>
          <input type="checkbox" id="done" checked />
          <br />
          <Link to="/todoinfo">수정</Link>
          <Link to="/todoinfo">취소</Link>
        </form>
      </div>
    </>
  );
}

export default TodoEdit;
