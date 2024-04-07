export interface ITodoList {
  id: number;
  text: string;
  status: "before" | "doing" | "done";
}

export interface IForm {
  todo: string;
}
