import { createSlice } from "@reduxjs/toolkit";
import { addCompany, deleteCompany, editCompany, getCompanies } from "../api";
import { CompaniesType } from "../types/types";

const initialState: { companiesList: CompaniesType[] } = {
  companiesList: [],
};

export const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    replaceCompanies(state, action) {
      state.companiesList = action.payload;
    },
    addCompany(state, action) {
      const company = action.payload;
      state.companiesList.push(company);
    },
    deleteCompany(state, action) {
      const id = action.payload;
      const existingCompany = state.companiesList.find(
        (company) => company.id === id
      );
      if (existingCompany) {
        state.companiesList = state.companiesList.filter(
          (company) => company.id !== id
        );
      }
    },
  },
});

export const fetchCompanies = () => {
  return async (dispatch: any) => {
    const fetchdata = async () => {
      return await getCompanies();
    };

    try {
      const data = await fetchdata();

      dispatch(companiesActions.replaceCompanies(data));
    } catch (error) {
      alert(error);
    }
  };
};

export const addCompanyThunk = (data: Omit<CompaniesType, "id">) => {
  return async (dispatch: any) => {
    try {
      await addCompany(data);
    } catch (error) {
      alert(error);
    }
  };
};

export const editCompanyThunk = (
  id: string,
  data: Omit<CompaniesType, "id">
) => {
  return async (dispatch: any) => {
    try {
      await editCompany(id, data);
    } catch (error) {
      alert(error);
    }
  };
};

export const deleteCompanyThunk = (id: string) => {
  return async (dispatch: any) => {
    try {
      await deleteCompany(id);
      dispatch(companiesActions.deleteCompany(id));
    } catch (error) {
      alert(error);
    }
  };
};

export const companiesActions = companiesSlice.actions;
