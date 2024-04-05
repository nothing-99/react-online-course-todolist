import { useForm } from "react-hook-form";

interface IForm {
  todo: string;
}

export default function TodoList() {
  const { register, handleSubmit, setValue, formState } = useForm<IForm>();

  const onSubmit = (data: IForm) => {
    console.log(data.todo);
    setValue("todo", "");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <div>
          <input
            {...register("todo", {
              required: "투두를 입력하세요",
            })}
            placeholder="투두를 입력하세요"
          />
          <span>{formState?.errors?.todo?.message}</span>
        </div>
      </label>
      <button>Add</button>
    </form>
  );
}
