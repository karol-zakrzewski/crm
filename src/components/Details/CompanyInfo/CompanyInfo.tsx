import { Box } from "@mui/material";
import React, { useState } from "react";
import { FaUserEdit, FaUserPlus } from "react-icons/fa";
import { CompaniesType } from "../../../types/types";

type Props = {
  companyData: CompaniesType | undefined;
  setOpen: (value: boolean) => void;
  setCompanyData: (data: CompaniesType | undefined) => void;
};

const CompanyInfo = ({ companyData, setOpen, setCompanyData }: Props) => {
  const [openEditForm, setOpenEditForm] = useState(false);
  return (
    <Box
      sx={{
        width: 1 / 4,
        height: 500,
        margin: 3,
        backgroundColor: "white",
        boxShadow: 1,
      }}
    >
      <div className="add__employee__wrapper">
        <div className="add_employee">
          <h2>{companyData?.name}</h2>
          <div className="btn__wrapper">
            <button
              className="add__employee__btn"
              onClick={() => setOpen(true)}
            >
              Dodaj pracownika
              <FaUserPlus className="icon__user" />
            </button>
            <button
              className="add__employee__btn"
              onClick={() => setOpenEditForm(true)}
            >
              Edytuj
              <FaUserEdit className="icon__user" />
            </button>
          </div>
        </div>
        <p>NIP: {companyData?.nip}</p>
        <div className="company__img__wrapper">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/sales-power-crm.appspot.com/o/default-company.jpeg?alt=media&token=75098b55-5efd-41cf-ba32-c87b8c9185ac"
            alt={companyData?.name}
            className="company__img"
          />
        </div>
        <p>Phone: {companyData?.phone}</p>
        <p>Email: {companyData?.email}</p>
        <span>Adres</span>
        <span>ul. {companyData?.address?.street}</span>
        <span>{companyData?.address?.zipcode} </span>
        <span>{companyData?.address?.city}</span>
      </div>
      {/* <EditCompany
        openEditForm={openEditForm}
        handleClose={() => setOpenEditForm(false)}
        companyData={companyData}
        setCompanyData={setCompanyData}
      /> */}
    </Box>
  );
};

export default CompanyInfo;
