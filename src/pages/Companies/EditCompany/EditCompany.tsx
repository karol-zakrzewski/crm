import { CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { editCompany, getCompany } from "../../../api";
import CompanyForm from "../../../components/Form/CompanyForm";
import { AddCompanyFormTypes } from "../../../types/types";
import { convertFormDataToDBObject } from "../../../utils";
import { paths } from "../../../utils/paths";

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

const EditCompany = () => {
  const navigate = useNavigate();
  const { id } = useParams<string>();
  const { isLoading, data, error } = useQuery({
    queryKey: ["company"],
    queryFn: async () => await getCompany(id),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<AddCompanyFormTypes>({
    defaultValues: defaultValue,
  });
  const onSubmit: SubmitHandler<AddCompanyFormTypes> = async (data) => {
    const writableData = convertFormDataToDBObject(data);
    try {
      await editCompany(id, writableData);
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

  useEffect(() => {
    if (data) {
      const {
        name,
        address: { city, street, zipcode },
        phone,
        nip,
        email,
        persons,
      } = data;
      setValue("name", name);
      setValue("city", city);
      setValue("email", email);
      setValue("nip", nip);
      setValue("persons", persons);
      setValue("phone", phone);
      setValue("street", street);
      setValue("zipcode", zipcode);
    }
  }, [data]);

  if (isLoading) {
    return <CircularProgress />;
  } else if (error) {
    return <h2>Oops coś poszło nie tak</h2>;
  }

  return (
    <>
      <h2>Edit - {id}</h2>
      <CompanyForm
        control={control}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default EditCompany;
