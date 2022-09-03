import React from "react";
import { CompaniesType } from "../../types/types";

type Props = {
  companiesList: CompaniesType[];
};

const CompaniesList = ({ companiesList }: Props) => {
  const renderCompanies = companiesList.map((company) => {
    return (
      <div key={company.id}>
        <h3>{company.name}</h3>
      </div>
    );
  });
  return <div>{renderCompanies}</div>;
};

export default CompaniesList;
