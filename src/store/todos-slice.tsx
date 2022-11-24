import { createSlice } from "@reduxjs/toolkit";
import { FirebaseError } from "firebase/app";
import { addTodo, getTodos } from "../api/todos";
import { Todo } from "../types/todo";
import { toastActions } from "./toast-slice";
import jsonText from "../assets/data.json";

const initialState: { todosList: Todo[] } = {
  todosList: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    replaceTodos(state, action) {
      state.todosList = action.payload;
    },
    addTodo(state, action) {
      const todo: Todo = action.payload;
      console.log(todo);

      state.todosList.push(todo);
    },
  },
});

export const fetchTodosThunk = (companyId: string) => {
  return async (dispatch: any) => {
    try {
      const data = await getTodos(companyId);
      dispatch(todosActions.replaceTodos(data));
    } catch (error) {
      if (error instanceof FirebaseError) {
        throw new Error(error.message);
      }
    }
  };
};

export const addTodoThunk = (companyId: string, todo: Omit<Todo, "id">) => {
  return async (dispatch: any) => {
    try {
      await addTodo(companyId, todo);
      dispatch(todosActions.addTodo(todo));
      dispatch(
        toastActions.showToast({
          isOpen: true,
          message: jsonText.toastMessage.successAddTodo,
          status: "success",
        })
      );
    } catch (error) {
      if (error instanceof FirebaseError) {
        throw new Error(error.message);
      }
    }
  };
};

export const todosActions = todosSlice.actions;
