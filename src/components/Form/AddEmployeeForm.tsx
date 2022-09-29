import React from "react";
import { Person } from "../../types/types";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<Person>;
  handleClose: () => void;
  errors: FieldErrorsImpl<Person>;
};
const AddEmployeeForm = ({ register, handleClose, errors }: Props) => {
  return (
    <div className="form__container">
      <div className="close" onClick={handleClose}>
        x
      </div>
      <h3 className="form__title">Dodaj firmę</h3>
      <div className="text__field">
        <label className="text__label" htmlFor="name">
          Imię
        </label>
        <input type="text" {...register("name", { required: true })} />
        {errors.name && (
          <span className="form__error">This field is required</span>
        )}
      </div>
      <div className="text__field">
        <label className="text__label" htmlFor="nip">
          Nazwisko
        </label>
        <input
          type="text"
          defaultValue=""
          {...register("lastName", { required: true })}
        />
        {errors.lastName && (
          <span className="form__error">This field is required</span>
        )}
      </div>
      <div className="text__field">
        <label className="text__label" htmlFor="city">
          Telefon
        </label>
        <input
          type="text"
          defaultValue=""
          {...register("phone", { required: true })}
        />
        {errors.phone && (
          <span className="form__error">This field is required</span>
        )}
      </div>
      <div className="text__field">
        <label className="text__label" htmlFor="street">
          Email
        </label>
        <input
          type="text"
          defaultValue=""
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="form__error">This field is required</span>
        )}
      </div>

      <button className="add__company__button">Dodaj</button>
    </div>
  );
};

export default AddEmployeeForm;
