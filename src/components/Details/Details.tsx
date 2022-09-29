import { Box } from "@mui/system";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUserPlus } from "react-icons/fa";
import { CompaniesType, Person } from "../../types/types";
import AddEmployee from "../AddEmployee/AddEmployee";
import "./Details.css";

type Props = {
  companyData: CompaniesType | undefined;
};

const Details = ({ companyData }: Props) => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Person>();
  return (
    <div className="container__details">
      <Box
        sx={{
          width: 1 / 4,
          height: 500,
          margin: 3,
          backgroundColor: "white",
          boxShadow: 1,
        }}
      >
        <div>
          <h2>{companyData?.name}</h2>
          <span>
            <FaUserPlus />
            <button onClick={() => setOpen(true)}>dodaj pracownika</button>
          </span>
          <p>NIP: {companyData?.nip}</p>
          <p>Phone: {companyData?.phone}</p>
          <p>Person: {companyData?.person}</p>
          <p>ul. {companyData?.address.street}</p>
          <span>{companyData?.address.zipcode} </span>
          <span>{companyData?.address.city}</span>
        </div>
      </Box>
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
