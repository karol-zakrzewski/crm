import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCompany } from "../../../api";
import { getTodos } from "../../../api/todos/index";
import Details from "../../../components/Details/Details";
import { Store } from "../../../types/store";
import { Todo } from "../../../types/todo";
import { CompaniesType, Employee } from "../../../types/types";
import "./CompanyDetails.css";

const Company = () => {
  const { id } = useParams<{ id: any }>();
  const [companyData, setCompanyData] = useState<CompaniesType | undefined>(
    undefined
  );
  const [todos, setTodos] = useState<Todo[] | null>(null);
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

  useEffect(() => {
    const getCompanyTodos = async (id: string) => {
      try {
        const todos = await getTodos(id);
        setTodos(todos);
      } catch (error) {}
    };
    if (companyData) {
      getCompanyTodos(companyData.id);
    }
  }, [companyData]);

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
