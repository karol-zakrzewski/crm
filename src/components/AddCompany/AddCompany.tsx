import { Modal } from "@mui/material";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { addCompany } from "../../api";
import { AddCompanyFormTypes } from "../../types/types";
import { convertFormDataToDBObject } from "../../utils";
import AddCompanyForm from "../Form/AddCompanyForm";
import "./AddCompany.css";

type Props = {
  open: boolean;
  handleClose: () => void;
  getCompanies: () => void;
};

const defaultValue: AddCompanyFormTypes = {
  name: "",
  nip: "",
  city: "",
  street: "",
  zipcode: "",
  phone: "",
  email: "",
  person: "",
};

const AddCompany = ({ open, handleClose, getCompanies }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddCompanyFormTypes>();

  const onSubmit: SubmitHandler<AddCompanyFormTypes> = async (data) => {
    const companyToAdd = convertFormDataToDBObject(data);
    await addCompany(companyToAdd);
    reset();
    getCompanies();
    handleClose();
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        autoComplete="off"
        noValidate
      >
        <AddCompanyForm
          handleClose={handleClose}
          register={register}
          errors={errors}
        />
      </Modal>
    </div>
  );
};

export default AddCompany;
