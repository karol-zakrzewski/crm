import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCompany } from "../../../api";
import Details from "../../../components/Details/Details";
import { Store } from "../../../types/store";
import { CompaniesType, Employee } from "../../../types/types";
import "./CompanyDetails.css";

const Company = () => {
  const { id } = useParams<{ id: any }>();
  const [companyData, setCompanyData] = useState<CompaniesType | undefined>(
    undefined
  );
  const [employees, setEmployees] = useState<Employee[] | null>(null);
  const { companiesList } = useSelector((state: Store) => state.companies);

  const getCompanyById = async (id: string) => {
    setCompanyData(await getCompany(id));
  };
  useEffect(() => {
    if (companiesList.length) {
      const company = companiesList.find((company) => company.id === id);
      setCompanyData(company);
      return;
    } else {
      getCompanyById(id);
    }
  }, [id, companiesList]);

  if (companyData === undefined) {
    return <CircularProgress />;
  }

  return (
    <Details
      companyData={companyData}
      setCompanyData={setCompanyData}
      employees={employees}
    />
  );
};

export default Company;
