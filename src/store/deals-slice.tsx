import { createSlice } from "@reduxjs/toolkit";
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
  return async (dispatch) => {
    try {
      await fetchDeals();
    } catch (error) {}
  };
};

export const dealsActions = dealsSlice.actions;
