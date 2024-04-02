import { useState } from "react";

export default function TodoList() {
  const [todo, setTodo] = useState("");
  const [todoErr, setTodoErr] = useState("");
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setTodo(value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.match(/^[^a-z0-9]/i)) {
      return setTodoErr(() => {
        const message = "todo must start 0-9 or a-z";
        console.log(message);
        return "todo must start 0-9 or a-z";
      });
    } else if (todo.length < 10) {
      return setTodoErr(() => {
        const message = "todo size >= 10";
        console.log(message);
        return "todo size >= 10";
      });
    }
    return setTodoErr("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          onChange={onChange}
          placeholder="Write todo"
        />
        <button>Add</button>
        {!todoErr ? "" : todoErr}
      </form>
    </div>
  );
}
