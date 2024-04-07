import { ITodoList } from "../types/todoList";

export default function TodoItem({ text }: ITodoList) {
  return (
    <li>
      <span>{text}</span>
      <button>before</button>
      <button>doing</button>
      <button>done</button>
    </li>
  );
}
