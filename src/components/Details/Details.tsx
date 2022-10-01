import { Box } from "@mui/system";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CompaniesType, Person } from "../../types/types";
import AddEmployee from "../AddEmployee/AddEmployee";
import CompanyInfo from "./CompanyInfo/CompanyInfo";
import "./Details.css";

type Props = {
  companyData: CompaniesType | undefined;
  setCompanyData: (data: CompaniesType | undefined) => void;
};

const Details = ({ companyData, setCompanyData }: Props) => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Person>();

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
      ></Box>
      <Box
        sx={{
          width: 1 / 4,
          height: 500,
          margin: 3,
          backgroundColor: "white",
          boxShadow: 1,
        }}
      ></Box>
      <AddEmployee
        open={open}
        register={register}
        handleClose={() => setOpen(false)}
        errors={errors}
      />
    </div>
  );
};

export default Details;
