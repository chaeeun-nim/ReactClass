import type { TodoItem } from "@pages/TodoItem";

type TodoAction = { type: "ADD"; value: TodoItem } | { type: "TOGGLE" | "DELETE"; value: { _id: number } };

function todoReducer(state: TodoItem[], action: TodoAction) {
  let newState = state;

  //TODO 1. 상태관리 로직 생성

  return newState;
}

export default todoReducer;
