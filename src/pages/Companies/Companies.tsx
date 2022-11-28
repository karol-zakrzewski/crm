import { useEffect } from "react";
import "./Companies.css";
import { CompaniesType } from "../../types/types";
import CompaniesList from "../../components/CompaniesList/CompaniesList";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanies } from "../../store/companies-slice";
import { Link } from "react-router-dom";
import { paths } from "../../utils/paths";
import { IconButton } from "@mui/material";
import { FaUserPlus } from "react-icons/fa";

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
      <Header title={"Companies"}>
        <Link to={paths.addComapny}>
          <IconButton color="primary" aria-label="Add company">
            <FaUserPlus />
          </IconButton>
        </Link>
      </Header>
      {companiesList && <CompaniesList companiesList={companiesList} />}
    </div>
  );
};

export default Companies;
