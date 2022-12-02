import { Box, Button, Grid, Paper } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AddCompanyFormTypes, CompaniesType } from "../../../types/types";
import { convertFormDataToDBObject } from "../../../utils";
import { paths } from "../../../utils/paths";
import "./AddCompany.css";
import { useDispatch } from "react-redux";
import { addCompanyThunk } from "../../../store/companies-slice";
import { toastActions } from "../../../store/toast-slice";
import jsonText from "../../../assets/data.json";
import CompanyForm from "../../../components/Form/CompanyForm";

const defaultValue: AddCompanyFormTypes = {
  name: "",
  nip: 0,
  city: "",
  street: "",
  zipcode: 0,
  phone: 0,
  email: "",
};

const AddCompany = () => {
  const dispatch: (dispatch: any) => Promise<void> = useDispatch();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddCompanyFormTypes>({
    defaultValues: defaultValue,
  });
  const onSubmit: SubmitHandler<AddCompanyFormTypes> = async (data) => {
    const writableData: Omit<CompaniesType, "id"> =
      convertFormDataToDBObject(data);
    try {
      dispatch(addCompanyThunk(writableData));
      dispatch(
        toastActions.showToast({
          isOpen: true,
          message: jsonText.toastMessage.successAddCompany,
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

  return (
    <CompanyForm
      title="Add company"
      control={control}
      errors={errors}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    />
  );
};

export default AddCompany;
