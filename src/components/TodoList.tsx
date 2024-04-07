import { useRecoilValue } from "recoil";
import { todoListState } from "../recoil/todoList/atoms";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todoList = useRecoilValue(todoListState);

  // test
  console.log(todoList);
  return (
    <div>
      <header>
        <h1>오늘의 할 일</h1>
      </header>
      <TodoForm />
      <ul>
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
          />
        ))}
      </ul>
    </div>
  );
}
