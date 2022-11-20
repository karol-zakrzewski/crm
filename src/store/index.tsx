import { configureStore } from "@reduxjs/toolkit";
import { companiesSlice } from "./companies-slice";

export const store = configureStore({
  reducer: {
    companies: companiesSlice.reducer,
  },
});
