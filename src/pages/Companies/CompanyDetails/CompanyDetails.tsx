import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCompany } from "../../../api";
import Details from "../../../components/Details/Details";
import { CompaniesType } from "../../../types/types";
import "./CompanyDetails.css";

const defaultValue = {
  id: "",
  name: "",
  nip: "",
  address: {
    city: "",
    street: "",
    zipcode: "",
  },
  phone: "",
  email: "",
  person: "",
};

const Company = () => {
  const { id } = useParams<{ id?: any }>();
  const [companyData, setCompanyData] = useState<CompaniesType | undefined>(
    defaultValue
  );

  const getCompanyById = async () => {
    const res = await getCompany(id).then((value) => {
      setCompanyData(value);
    });
    return res;
  };
  useEffect(() => {
    getCompanyById();
  }, []);
  return <Details />;
};

export default Company;
