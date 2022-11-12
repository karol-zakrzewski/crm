import { Box, Button } from "@mui/material";
import { Control } from "react-hook-form";
import { AddCompanyFormTypes } from "../../types/types";
import TextInput from "../ui/inputs/TextInput";

type Props = {
  control: Control<AddCompanyFormTypes, any>;
  errors: any;
  handleSubmit: any;
  onSubmit: any;
};

const CompanyForm = ({ control, errors, handleSubmit, onSubmit }: Props) => {
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        control={control}
        errors={errors}
        fieldName="name"
        label="Nazwa firmy"
        rules={{
          required: {
            value: true,
            message: "To pole jest wymagane",
          },
        }}
      />
      <TextInput
        control={control}
        errors={errors}
        fieldName="city"
        label="Miasto"
        rules={{
          required: {
            value: true,
            message: "To pole jest wymagane",
          },
        }}
      />
      <TextInput
        control={control}
        errors={errors}
        fieldName="street"
        label="Ulica"
        rules={{
          required: {
            value: true,
            message: "To pole jest wymagane",
          },
        }}
      />
      <TextInput
        control={control}
        errors={errors}
        fieldName="zipcode"
        label="Kod pocztowy"
        rules={{
          required: {
            value: true,
            message: "To pole jest wymagane",
          },
          minLength: {
            value: 5,
            message: "Niepoprawny numer telefonu",
          },
        }}
      />
      <TextInput
        control={control}
        errors={errors}
        fieldName="email"
        label="Email"
        rules={{
          required: {
            value: true,
            message: "To pole jest wymagane",
          },
        }}
      />
      <TextInput
        control={control}
        errors={errors}
        fieldName="nip"
        label="NIP"
        rules={{
          required: {
            value: true,
            message: "To pole jest wymagane",
          },
          minLength: {
            value: 10,
            message: "Niepoprawny numer telefonu",
          },
        }}
      />
      <TextInput
        control={control}
        errors={errors}
        fieldName="persons"
        label="Osoba kontaktowa"
        rules={{
          required: {
            value: true,
            message: "To pole jest wymagane",
          },
        }}
      />
      <TextInput
        control={control}
        errors={errors}
        fieldName="phone"
        label="Numer telefonu"
        rules={{
          required: {
            value: true,
            message: "To pole jest wymagane",
          },
          minLength: {
            value: 9,
            message: "Niepoprawny numer telefonu",
          },
        }}
      />
      <Button variant="contained" type="submit">
        Dodaj
      </Button>
    </Box>
  );
};

export default CompanyForm;
