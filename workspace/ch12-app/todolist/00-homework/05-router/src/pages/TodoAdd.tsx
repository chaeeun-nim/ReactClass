import Footer from "@components/Footer";
import Header from "@components/Header";
import { Link } from "react-router";

function TodoAdd() {
  return (
    <>
      <Header />
      <div className="main">
        <h2>할일 추가</h2>
        <div className="todo">
          <form>
            <label htmlFor="title">제목 :</label>
            <input type="text" id="title" autoFocus />
            <br />
            <label htmlFor="content">내용 :</label>
            <textarea id="content" cols={23} rows={5}></textarea>
            <br />
            <Link to="/todoinfo">추가</Link>
            <Link to="/todolist">취소</Link>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TodoAdd;
