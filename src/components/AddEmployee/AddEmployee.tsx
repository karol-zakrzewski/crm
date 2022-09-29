import { Modal } from "@mui/material";
import React from "react";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { Person } from "../../types/types";
import AddEmployeeForm from "../Form/AddEmployeeForm";

type Props = {
  open: boolean;
  register: UseFormRegister<Person>;
  handleClose: () => void;
  errors: FieldErrorsImpl<Person>;
};

const AddEmployee = ({ open, register, handleClose, errors }: Props) => {
  return (
    <div>
      <Modal component="form" open={open} autoComplete="off" noValidate>
        <AddEmployeeForm
          register={register}
          handleClose={handleClose}
          errors={errors}
        />
      </Modal>
    </div>
  );
};

export default AddEmployee;
