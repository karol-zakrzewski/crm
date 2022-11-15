import { Box } from "@mui/material";
import { DocumentSnapshot } from "firebase/firestore";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaUserEdit, FaUserPlus } from "react-icons/fa";
import { editCompany } from "../../../api";
import { addEmployee } from "../../../api/employees";
import { CompaniesType, Employee } from "../../../types/types";
import AddEmployeeDialog from "../../ui/dialog/AddEmployeeDialog";

type Props = {
  companyData: CompaniesType | undefined;
  setOpen: (value: boolean) => void;
  setCompanyData: (data: CompaniesType | undefined) => void;
};
type Inputs = {
  name: string;
  phone: number;
  email: string;
};

const CompanyInfo = ({ companyData, setOpen, setCompanyData }: Props) => {
  const [openAddEmployeeForm, setOpenAddEmployeeForm] = useState(false);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { name: "", email: "", phone: 0 } });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const docRef = (await addEmployee(
        data
      )) as unknown as DocumentSnapshot<Employee>;
      // @ts-ignore
      if (companyData.persons) {
        const companyEmployees =
          companyData?.persons as DocumentSnapshot<Employee>[];
        // @ts-ignore
        await editCompany(companyData?.id, {
          persons: [...companyEmployees, docRef],
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };
  console.log(companyData);

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
              onClick={() => setOpenAddEmployeeForm(true)}
            >
              Dodaj pracownika
              <FaUserPlus className="icon__user" />
            </button>
            <button className="add__employee__btn">
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
      <AddEmployeeDialog
        control={control}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        open={openAddEmployeeForm}
        handleClose={() => setOpenAddEmployeeForm(false)}
        handleAddEmployee={() => console.log("edit")}
      />
    </Box>
  );
};

export default CompanyInfo;
