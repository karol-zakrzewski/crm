import { Box, Button } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addCompany } from "../../api";
import { AddCompanyFormTypes } from "../../types/types";
import { convertFormDataToDBObject } from "../../utils";
import { paths } from "../../utils/paths";
import TextInput from "../ui/inputs/TextInput";
import "./AddCompany.css";

const defaultValue: AddCompanyFormTypes = {
  name: "",
  nip: 0,
  city: "",
  street: "",
  zipcode: 0,
  phone: 0,
  email: "",
  persons: "",
};

const AddCompany = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddCompanyFormTypes>({
    defaultValues: defaultValue,
  });
  const onSubmit: SubmitHandler<AddCompanyFormTypes> = async (data) => {
    const { zipcode, phone, nip } = data;
    const writableData = convertFormDataToDBObject({
      ...data,
      phone: Number(phone),
      zipcode: Number(zipcode),
      nip: Number(nip),
    });
    try {
      await addCompany(writableData);
      // TODO show toast message
      setTimeout(() => {
        navigate(paths.companies);
      });
    } catch (error) {
      if (error instanceof Error) {
        // TODO show error toast message
      }
    }
  };

  return (
    <div>
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
    </div>
  );
};

export default AddCompany;
