import React, { useEffect, useState } from "react";
import "./Companies.css";
import { getCompanies } from "../../api";
import { CompaniesType } from "../../types/types";
import CompaniesList from "../../components/CompaniesList/CompaniesList";
import Header from "../../components/Header/Header";
import AddCompany from "../../components/AddCompany/AddCompany";

const defaultValue = {
  id: "",
  name: "",
  address: { city: "", zipcode: "", street: "" },
  nip: 0,
};

const Companies = () => {
  const [open, setOpen] = useState(false);

  const [companiesList, setCompaniesList] = useState<CompaniesType[]>([
    defaultValue,
  ]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const retriveCompanies = async () => {
    const companies = await getCompanies();
    console.log(companies);
    setCompaniesList(companies);
  };

  useEffect(() => {
    retriveCompanies();
  }, []);

  return (
    <div className="companies__container">
      <Header title={"Companies"} handleOpen={handleOpen} />
      <AddCompany open={open} handleClose={handleClose} />
      <CompaniesList companiesList={companiesList} />
    </div>
  );
};

export default Companies;
