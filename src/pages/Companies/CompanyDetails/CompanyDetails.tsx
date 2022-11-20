import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCompany } from "../../../api";
import Details from "../../../components/Details/Details";
import { CompaniesType, Employee } from "../../../types/types";
import "./CompanyDetails.css";

const Company = () => {
  const { id } = useParams<{ id: any }>();
  const [companyData, setCompanyData] = useState<CompaniesType | undefined>(
    undefined
  );
  const [employees, setEmployees] = useState<Employee[] | null>(null);

  const getCompanyById = async (id: string) => {
    setCompanyData(await getCompany(id));
  };
  useEffect(() => {
    getCompanyById(id);
  }, [id]);

  if (companyData === undefined) {
    return <h2>Oops coś poszło nie tak...</h2>;
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
