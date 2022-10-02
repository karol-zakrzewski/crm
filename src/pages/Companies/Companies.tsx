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
  nip: "",
  phone: "",
  email: "",
  person: "",
};

const Companies = () => {
  const [open, setOpen] = useState(false);

  const [companiesList, setCompaniesList] = useState<
    CompaniesType[] | undefined
  >([defaultValue]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const retriveCompanies = async () => {
    try {
      const companies = await getCompanies();
      setCompaniesList(companies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    retriveCompanies();
  }, []);

  return (
    <div className="companies__container">
      <Header title={"Companies"} handleOpen={handleOpen} />
      <AddCompany
        open={open}
        handleClose={handleClose}
        getCompanies={retriveCompanies}
      />
      <CompaniesList
        companiesList={companiesList}
        setCompaniesList={setCompaniesList}
      />
    </div>
  );
};

export default Companies;
