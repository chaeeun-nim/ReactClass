import Footer from "@components/Footer";
import Header from "@components/Header";
import TodoListItem from "@pages/TodoListItem";
import { Link } from "react-router";

function TodoList() {
  return (
    <>
      <Header />
      <div className="main">
        <h2>할일 목록</h2>
        <div className="todo">
          <Link to="/todoadd">추가</Link>
          <br />
          <form className="search">
            <input type="text" autoFocus />
            <button type="submit">검색</button>
          </form>
          <ul className="todolist">
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TodoList;
