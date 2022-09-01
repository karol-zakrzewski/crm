import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Companies.css";
import { FaUserPlus } from "react-icons/fa";
import { getCompanies } from "../../api";
import { CompaniesType } from "../../types/types";
import CompaniesList from "./CompaniesList/CompaniesList";

const defaultValue = {
  id: "",
  name: "",
  address: { city: "", zipcode: "", street: "" },
  nip: 0,
};

const Companies = () => {
  const [companiesList, setCompaniesList] = useState<CompaniesType[]>([
    defaultValue,
  ]);

  const retriveCompanies = async () => {
    const companies = await getCompanies();
    console.log(companies);
    setCompaniesList(companies);
  };

  useEffect(() => {
    retriveCompanies();
  }, []);
  const handleClick = () => {};

  return (
    <div className="companies__container">
      <div className="companies__header">
        <h2 className="title">Companies</h2>
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          onClick={handleClick}
        >
          <FaUserPlus />
        </IconButton>
      </div>
      <CompaniesList companiesList={companiesList} />
    </div>
  );
};

export default Companies;
