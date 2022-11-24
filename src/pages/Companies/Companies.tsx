import { useEffect } from "react";
import "./Companies.css";
import { CompaniesType } from "../../types/types";
import CompaniesList from "../../components/CompaniesList/CompaniesList";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanies } from "../../store/companies-slice";

const Companies = () => {
  const { companiesList } = useSelector(
    (state: { companies: { companiesList: CompaniesType[] } }) =>
      state.companies
  );
  const dispatch: (dispatch: any) => Promise<void> = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

  return (
    <div className="companies__container">
      <Header title={"Companies"} />
      {companiesList && <CompaniesList companiesList={companiesList} />}
    </div>
  );
};

export default Companies;
