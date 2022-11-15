import { Box } from "@mui/system";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CompaniesType, Employee, Person } from "../../types/types";
import CompanyInfo from "./CompanyInfo/CompanyInfo";
import "./Details.css";

type Props = {
  employees: Employee[] | null;
  companyData: CompaniesType | undefined;
  setCompanyData: (data: CompaniesType | undefined) => void;
};

const Details = ({ employees, companyData, setCompanyData }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container__details">
      <CompanyInfo
        companyData={companyData}
        setOpen={setOpen}
        setCompanyData={setCompanyData}
      />
      <Box
        sx={{
          width: 1 / 2,
          height: 500,
          margin: 3,
          backgroundColor: "white",
          boxShadow: 1,
        }}
      >
        {employees &&
          employees.map((employee) => {
            return <p>{employee.name}</p>;
          })}
      </Box>
      <Box
        sx={{
          width: 1 / 4,
          height: 500,
          margin: 3,
          backgroundColor: "white",
          boxShadow: 1,
        }}
      ></Box>
    </div>
  );
};

export default Details;
