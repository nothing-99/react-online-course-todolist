import { useSetRecoilState } from "recoil";
import { ITodoList } from "../types/todoList";
import { todoListState } from "../recoil/todoList/atoms";

export default function TodoItem({ id, text, status }: ITodoList) {
  const setTodoList = useSetRecoilState(todoListState);

  const onClick = (status: ITodoList["status"]) =>
    setTodoList((currentTodoList) =>
      currentTodoList.reduce((newTodoList: ITodoList[], todo) => {
        if (todo.id === id) newTodoList.push({ ...todo, status: status });
        else newTodoList.push(todo);
        return newTodoList;
      }, [])
    );

  return (
    <li>
      <span>{text}</span>
      {status !== "before" && (
        <button
          name="before"
          onClick={() => onClick("before")}>
          before
        </button>
      )}
      {status !== "doing" && (
        <button
          name="doing"
          onClick={() => onClick("doing")}>
          doing
        </button>
      )}
      {status !== "done" && (
        <button
          name="done"
          onClick={() => onClick("done")}>
          done
        </button>
      )}
    </li>
  );
}
