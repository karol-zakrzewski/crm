import { configureStore } from "@reduxjs/toolkit";
import { companiesSlice } from "./companies-slice";
import { dealsSlice } from "./deals-slice";
import { toastSlice } from "./toast-slice";
import { todosSlice } from "./todos-slice";

export const store = configureStore({
  reducer: {
    companies: companiesSlice.reducer,
    toast: toastSlice.reducer,
    todos: todosSlice.reducer,
    deals: dealsSlice.reducer,
  },
});
