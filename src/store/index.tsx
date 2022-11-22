import { configureStore } from "@reduxjs/toolkit";
import { companiesSlice } from "./companies-slice";
import { toastSlice } from "./toast-slice";

export const store = configureStore({
  reducer: {
    companies: companiesSlice.reducer,
    toast: toastSlice.reducer,
  },
});
