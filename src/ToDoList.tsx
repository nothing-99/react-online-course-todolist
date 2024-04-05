import { useForm, SubmitHandler } from "react-hook-form";

interface IFormValues {
  userId: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmed: string;
}

export default function TodoList() {
  const { register, handleSubmit, formState, setError } =
    useForm<IFormValues>();

  const onSumibt: SubmitHandler<IFormValues> = (data) => {
    const { password, confirmed } = data;
    if (password !== confirmed) {
      setError(
        "confirmed",
        { message: "비밀번호가 맞지 않습니다" },
        { shouldFocus: true }
      );
    }
  };

  console.log(formState.errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onSumibt)}>
        {/* userId */}
        <div>
          <label>
            <input
              {...register("userId", {
                required: {
                  value: true,
                  message: "아이디를 입력하세요",
                },
                pattern: {
                  value: /^[\w]{4,20}$/,
                  message:
                    "4자 이상, 20자 이하로 입력하세요/알파벳, 숫자, _ 만으로 구성하세요",
                },
                validate: (v) =>
                  !v.includes("fuck") || "fuck 단어를 포함하지 마세요",
              })}
              placeholder="아이디 (영문, 숫자, _ / 8자 이상 20자 이하)"
            />
          </label>
          <div>
            <ul>
              {formState.errors?.userId?.message?.split("/").map((v, i) => (
                <li key={i}>{v}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* email */}
        <div>
          <label>
            <input
              {...register("email", {
                required: { value: true, message: "이메일을 입력하세요" },
                pattern: {
                  value: /^[a-zA-Z0-9]+@[a-zA-z0-9]+\.[a-zA-z0-9.]+$/,
                  message: "올바른 이메일을 입력하세요",
                },
              })}
              placeholder="이메일"
            />
          </label>
          <div>
            <span>{formState.errors?.email?.message}</span>
          </div>
        </div>
        {/* phoneNumber */}
        <div>
          <label>
            <input
              {...register("phoneNumber", {
                required: { value: true, message: "전화번호를 입력하세요" },
                pattern: {
                  value: /^[0-9]{10,12}$/,
                  message: "- 없이 입력하세요",
                },
              })}
              placeholder="전화번호 (- 없이)"
            />
          </label>
          <div>
            <span>{formState.errors?.phoneNumber?.message}</span>
          </div>
        </div>
        {/* password */}
        <div>
          <label>
            <input
              {...register("password", {
                required: { value: true, message: "비밀번호를 입력하세요" },
                minLength: {
                  value: 8,
                  message: "최소 8자",
                },
              })}
              placeholder="비밀번호 (8자 이상)"
            />
          </label>
          <div>
            <span>{formState.errors?.password?.message}</span>
          </div>
        </div>
        {/* confirmed (password) */}
        <div>
          <label>
            <input
              {...register("confirmed", {
                required: { value: true, message: "비밀번호를 입력하세요" },
                minLength: { value: 8, message: "최소 8자" },
              })}
              placeholder="비밀번호 확인"
            />
          </label>
          <div>
            <span>{formState.errors?.confirmed?.message}</span>
          </div>
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}
