import { useForm } from "react-hook-form";
import { IForm } from "../types/todoList";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../recoil/todoList/atoms";

export default function TodoForm() {
  const { register, handleSubmit, setValue, formState } = useForm<IForm>();
  const setTodoList = useSetRecoilState(todoListState);

  const onSubmit = ({ todo }: IForm) => {
    setTodoList((curTodo) => [
      { id: Date.now(), text: todo, status: "before" },
      ...curTodo,
    ]);
    setValue("todo", "");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          <input
            {...register("todo", {
              required: "투두를 입력하세요",
            })}
            placeholder="투두를 입력하세요"
          />
          <span>{formState?.errors?.todo?.message}</span>
        </label>
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
}
