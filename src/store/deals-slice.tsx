import { createSlice } from "@reduxjs/toolkit";
import { FirestoreError } from "firebase/firestore";
import { fetchDeals } from "../api/deals";
import { Deal } from "../types/deals";

const initialState: { dealsList: Deal[] } = {
  dealsList: [],
};

export const dealsSlice = createSlice({
  name: "deals",
  initialState,
  reducers: {
    replaceData(state, action) {
      const deals = action.payload;

      state.dealsList = deals;
    },
  },
});

export const fetchDealsThunk = () => {
  return async (dispatch: any) => {
    try {
      const data = await fetchDeals();
      dispatch(dealsActions.replaceData(data));
    } catch (error) {
      if (error instanceof FirestoreError) {
        throw Error(error.message);
      }
    }
  };
};

export const dealsActions = dealsSlice.actions;
