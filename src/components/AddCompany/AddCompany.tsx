import { Modal } from "@mui/material";
import React, { useState } from "react";
import { addCompany } from "../../api";
import { AddCompanyFormTypes } from "../../types/types";
import { covertFormDataToDBObject } from "../../utils";
import AddCompanyForm from "../Form/AddCompanyForm";
import "./AddCompany.css";

type Props = {
  open: boolean;
  handleClose: () => void;
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

const AddCompany = ({ open, handleClose }: Props) => {
  const [formInputValue, setFormInputValue] =
    useState<AddCompanyFormTypes>(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormInputValue({ ...formInputValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const companyToAdd = covertFormDataToDBObject(formInputValue);
    await addCompany(companyToAdd);
    setFormInputValue(defaultValue);
    handleClose();
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        onSubmit={handleSubmit}
        component="form"
        autoComplete="off"
        noValidate
      >
        <AddCompanyForm
          formInputValue={formInputValue}
          handleChange={handleChange}
          handleClose={handleClose}
        />
      </Modal>
    </div>
  );
};

export default AddCompany;
