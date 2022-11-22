import { createSlice } from "@reduxjs/toolkit";
import { Toast } from "../types/toast";

const initialState: Toast = {
  message: "",
  status: undefined,
  isOpen: false,
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast(state, action: { payload: Toast }) {
      const { message, status, isOpen } = action.payload;

      state.message = message;
      state.status = status;
      state.isOpen = isOpen;

      console.log(message, status, isOpen);
    },
  },
});

export const toastActions = toastSlice.actions;
