import { atom } from "recoil";
import { ITodoList } from "../../types/todoList";

export const todoListState = atom<ITodoList[]>({
  key: "todoList",
  default: [],
});
