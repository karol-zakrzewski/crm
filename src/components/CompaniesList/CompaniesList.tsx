import React from "react";
import { CompaniesType } from "../../types/types";

type Props = {
  companiesList: CompaniesType[];
};

const CompaniesList = ({ companiesList }: Props) => {
  const renderCompanies = companiesList.map((company) => {
    return (
      <div key={company.id}>
        <h3>{company.id}</h3>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
      </div>
    );
  });
  return <div>{renderCompanies}</div>;
};

export default CompaniesList;
