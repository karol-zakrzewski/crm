import React from "react";
import { AddCompanyFormTypes } from "../../types/types";

type Props = {
  formInputValue: AddCompanyFormTypes;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClose: () => void;
};

const AddCompanyForm = ({
  formInputValue,
  handleChange,
  handleClose,
}: Props) => {
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
        <input
          type="text"
          name="name"
          value={formInputValue.name}
          onChange={handleChange}
        />
      </div>
      <div className="text__field">
        <label className="text__label" htmlFor="nip">
          NIP
        </label>
        <input
          type="text"
          name="nip"
          value={formInputValue.nip}
          onChange={handleChange}
        />
      </div>
      <div className="text__field">
        <label className="text__label" htmlFor="city">
          Miasto
        </label>
        <input
          type="text"
          name="city"
          value={formInputValue.city}
          onChange={handleChange}
        />
      </div>
      <div className="text__field">
        <label className="text__label" htmlFor="street">
          Ulica
        </label>
        <input
          type="text"
          name="street"
          value={formInputValue.street}
          onChange={handleChange}
        />
      </div>
      <div className="text__field">
        <label className="text__label" htmlFor="zipcode">
          Kod Pocztowy
        </label>
        <input
          type="text"
          name="zipcode"
          value={formInputValue.zipcode}
          onChange={handleChange}
        />
      </div>
      <div className="text__field">
        <label className="text__label" htmlFor="phone">
          Numer telefonu
        </label>
        <input
          type="text"
          name="phone"
          value={formInputValue.phone}
          onChange={handleChange}
        />
      </div>
      <div className="text__field">
        <label className="text__label" htmlFor="email">
          Email
        </label>
        <input
          type="text"
          name="email"
          value={formInputValue.email}
          onChange={handleChange}
        />
      </div>
      <div className="text__field">
        <label className="text__label" htmlFor="person">
          Osoba kontaktowa
        </label>
        <input
          type="text"
          name="person"
          value={formInputValue.person}
          onChange={handleChange}
        />
      </div>
      <button className="add__company__button">Dodaj</button>
    </div>
  );
};

export default AddCompanyForm;
