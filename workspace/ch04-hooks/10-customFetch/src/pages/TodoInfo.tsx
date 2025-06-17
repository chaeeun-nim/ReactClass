import type { TodoItemRes } from "#types/todo";
import useAxios from "@hooks/useAxios";

function TodoInfo() {
  console.log(location);
  const todoId = location.pathname.split("/").pop();
  const { isLoading, error, data } = useAxios<TodoItemRes>({ url: `/todolist/${todoId}?delay=1000` });
  console.log("App 랜더링", isLoading, error, data);

  return (
    <>
      <h1>10 Custom Hook - 커스텀 훅 없이 fetch API 사용</h1>
      <h2>할일 상세조회</h2>

      {/* 로딩중일 때 로딩중 메시지 표시 */}
      {isLoading && <p>로딩중...</p>}

      {/* 에러가 있을 경우 빨간색으로 에러 메시지 표시 */}
      {error && <p style={{ color: "red" }}>{error.message}</p>}

      {/* Todo 목록을 리스트로 렌더링 */}
      <div>
        <div>제목 : {data?.item.title}</div>
        <div>내용 : {data?.item.content}</div>
        <div>상태 : {data?.item.done ? "완료" : "미완료"}</div>
        <div>작성일 : {data?.item.createAt}</div>
        <div>수정일 : {data?.item.updatedAt}</div>
      </div>
    </>
  );
}

export default TodoInfo;
