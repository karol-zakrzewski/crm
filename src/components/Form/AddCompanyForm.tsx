import React from "react";
import "./AddCompanyForm.css";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { AddCompanyFormTypes } from "../../types/types";

type Props = {
  handleClose: () => void;
  register: UseFormRegister<AddCompanyFormTypes>;
  errors: FieldErrorsImpl<AddCompanyFormTypes>;
};

const AddCompanyForm = ({ handleClose, register, errors }: Props) => {
  return (
    <div className="form__container">
      <div className="close" onClick={handleClose}>
        x
      </div>
      <h3 className="form__title">Dodaj firmę</h3>
      <div className="text__field">
        <label className="text__label" htmlFor="name">
          Nazwa
        </label>
        <input type="text" {...register("name", { required: true })} />
        {errors.name && (
          <span className="form__error">This field is required</span>
        )}
      </div>
      <div className="text__field">
        <label className="text__label" htmlFor="nip">
          NIP
        </label>
        <input
          type="text"
          defaultValue=""
          {...register("nip", { required: true })}
        />
        {errors.nip && (
          <span className="form__error">This field is required</span>
        )}
      </div>
      <div className="text__field">
        <label className="text__label" htmlFor="city">
          Miasto
        </label>
        <input
          type="text"
          defaultValue=""
          {...register("city", { required: true })}
        />
        {errors.city && (
          <span className="form__error">This field is required</span>
        )}
      </div>
      <div className="text__field">
        <label className="text__label" htmlFor="street">
          Ulica
        </label>
        <input
          type="text"
          defaultValue=""
          {...register("street", { required: true })}
        />
        {errors.street && (
          <span className="form__error">This field is required</span>
        )}
      </div>
      <div className="text__field">
        <label className="text__label" htmlFor="zipcode">
          Kod Pocztowy
        </label>
        <input
          type="text"
          defaultValue=""
          {...register("zipcode", { required: true })}
        />
        {errors.zipcode && (
          <span className="form__error">This field is required</span>
        )}
      </div>
      <div className="text__field">
        <label className="text__label" htmlFor="phone">
          Numer telefonu
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
        <label className="text__label" htmlFor="email">
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
      <div className="text__field">
        <label className="text__label" htmlFor="person">
          Osoba kontaktowa
        </label>
        <input
          type="text"
          defaultValue=""
          {...register("person", { required: true })}
        />
        {errors.person && (
          <span className="form__error">This field is required</span>
        )}
      </div>
      <button className="add__company__button">Dodaj</button>
    </div>
  );
};

export default AddCompanyForm;