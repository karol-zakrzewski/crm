import React, { useEffect, useState } from "react";
import "./Companies.css";
import { fetchCompanies } from "../../api";
import { CompaniesType } from "../../types/types";
import CompaniesList from "../../components/CompaniesList/CompaniesList";
import Header from "../../components/Header/Header";

const defaultValue = {
  id: "",
  name: "",
  address: { city: "", zipcode: 0, street: "" },
  nip: 0,
  phone: 0,
  email: "",
  persons: [],
};

const Companies = () => {
  const [companiesList, setCompaniesList] = useState<
    CompaniesType[] | undefined
  >([defaultValue]);

  useEffect(() => {
    fetchCompanies((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setCompaniesList(data);
    });
  }, []);

  return (
    <div className="companies__container">
      <Header title={"Companies"} />
      {companiesList && <CompaniesList companiesList={companiesList} />}
    </div>
  );
};

export default Companies;
