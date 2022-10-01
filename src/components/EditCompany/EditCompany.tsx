import { Modal } from "@mui/material";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddCompanyFormTypes, CompaniesType } from "../../types/types";
import AddCompanyForm from "../Form/AddCompanyForm";
import { convertFormDataToDBObject } from "../../utils";

type Props = {
  openEditForm: boolean;
  handleClose: () => void;
  companyData?: CompaniesType;
};

const EditCompany = ({ openEditForm, handleClose, companyData }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddCompanyFormTypes>();

  const onSubmit: SubmitHandler<AddCompanyFormTypes> = (data) => {
    const companyDataToEdit = convertFormDataToDBObject(data);
    console.log(companyDataToEdit);
    reset();
    handleClose();
  };
  return (
    <Modal
      open={openEditForm}
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      autoComplete="off"
      noValidate
    >
      <AddCompanyForm
        handleClose={handleClose}
        register={register}
        errors={errors}
        companyData={companyData}
      ></AddCompanyForm>
    </Modal>
  );
};

export default EditCompany;
