import type { TodoItem } from "@pages/TodoItem";
import { produce } from "immer";

type TodoAction = { type: "ADD"; value: TodoItem } | { type: "TOGGLE" | "DELETE"; value: { _id: number } };

function todoReducer(state: TodoItem[], action: TodoAction) {
  let newState = state;

  const thisListIndex = action.type !== "ADD" ? state.findIndex((state) => state._id === action.value._id) : 0;

  //TODO 1. 상태관리 로직 생성
  switch (action.type) {
    case "ADD":
      return (newState = produce(state, (stateCopy) => {
        stateCopy.push(action.value);
      }));
      break;
    case "DELETE":
      return (newState = produce(state, (stateCopy) => {
        stateCopy.splice(thisListIndex, 1);
      }));
      break;
    case "TOGGLE":
      return (newState = produce(state, (stateCopy) => {
        stateCopy[thisListIndex].done = !stateCopy[thisListIndex].done;
      }));
      break;
  }

  return newState;
}

export default todoReducer;
