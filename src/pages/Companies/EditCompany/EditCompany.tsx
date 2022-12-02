import { CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCompany } from "../../../api";
import CompanyForm from "../../../components/Form/CompanyForm";
import { editCompanyThunk } from "../../../store/companies-slice";
import { toastActions } from "../../../store/toast-slice";
import { AddCompanyFormTypes } from "../../../types/types";
import { convertFormDataToDBObject } from "../../../utils";
import { paths } from "../../../utils/paths";
import jsonText from "../../../assets/data.json";

const defaultValue: AddCompanyFormTypes = {
  name: "",
  nip: 0,
  city: "",
  street: "",
  zipcode: 0,
  phone: 0,
  email: "",
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
  const dispatch: (dispatch: any) => Promise<void> = useDispatch();
  const onSubmit: SubmitHandler<AddCompanyFormTypes> = async (data) => {
    const writableData = convertFormDataToDBObject(data);
    try {
      if (typeof id !== "string") {
        throw new Error("Nieprawidłowe id");
      }
      dispatch(editCompanyThunk(id, writableData));
      dispatch(
        toastActions.showToast({
          isOpen: true,
          message: jsonText.toastMessage.successEditTodo,
          status: "success",
        })
      );
      setTimeout(() => {
        navigate(paths.companies);
      });
    } catch (error) {
      if (error instanceof Error) {
        dispatch(
          toastActions.showToast({
            isOpen: true,
            message: error.message,
            status: "error",
          })
        );
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
      } = data;
      setValue("name", name);
      setValue("city", city);
      setValue("email", email);
      setValue("nip", nip);
      setValue("phone", phone);
      setValue("street", street);
      setValue("zipcode", zipcode);
    }
  }, [data]);

  if (isLoading) {
    return <CircularProgress />;
  } else if (error) {
    return <h2>Oops something went wrong...</h2>;
  }

  return (
    <>
      <CompanyForm
        title="Edit form"
        control={control}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default EditCompany;
