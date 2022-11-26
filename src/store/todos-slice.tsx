import { createSlice } from "@reduxjs/toolkit";
import { FirebaseError } from "firebase/app";
import { addTodo, deleteTodo, editTodo, getTodos } from "../api/todos";
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

      state.todosList.push(todo);
    },
    editTodo(state, action) {
      const { todoId, data } = action.payload;
      const existingTodo = state.todosList.find((todo) => todo.id === todoId);

      if (existingTodo) {
        existingTodo.checked = data.checked;
      }
    },
    deleteTodo(state, action) {
      const todoId = action.payload;
      const existingTodo = state.todosList.find((todo) => todo.id === todoId);

      if (existingTodo) {
        state.todosList = state.todosList.filter((todo) => todo.id !== todoId);
      }
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
      const docRef = await addTodo(companyId, todo);
      dispatch(todosActions.addTodo({ ...todo, id: docRef.id }));
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
      throw new Error("Adding failed");
    }
  };
};

export const editTodoThunk = (
  companyId: string,
  todoId: string,
  data: Partial<Todo>
) => {
  return async (dispatch: any) => {
    try {
      await editTodo(companyId, todoId, data);
      dispatch(todosActions.editTodo({ todoId, data }));
    } catch (error) {
      if (error instanceof FirebaseError) {
        throw new Error(error.message);
      }
      throw new Error("Editing failed");
    }
  };
};

export const deleteTodoThunk = (companyId: string, todoId: string) => {
  return async (dispatch: any) => {
    try {
      await deleteTodo(companyId, todoId);
      dispatch(todosActions.deleteTodo(todoId));
    } catch (error) {
      if (error instanceof FirebaseError) {
        throw new Error(error.message);
      }
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error("Deleting failed");
    }
  };
};

export const todosActions = todosSlice.actions;
