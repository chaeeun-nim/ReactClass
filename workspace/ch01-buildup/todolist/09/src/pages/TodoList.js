import TodoItem from "./TodoItem.js";
import Reaction from "../reaction.js";

function TodoList({itemList, toggleDone,deleteItem}){
  const items = itemList.map(item => TodoItem({ item, toggleDone,deleteItem }))
  return(
    Reaction.createElement('ul', { class: 'todolist' }, items)
  );
}

export default TodoList;