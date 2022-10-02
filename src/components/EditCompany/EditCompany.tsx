import { Modal } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddCompanyFormTypes, CompaniesType } from "../../types/types";
import AddCompanyForm from "../Form/AddCompanyForm";
import { convertFormDataToDBObject } from "../../utils";
import { editCompany, getCompany } from "../../api";

interface Props {
  openEditForm: boolean;
  handleClose: () => void;
  companyData?: CompaniesType;
  setCompanyData: (data: CompaniesType | undefined) => void;
}

const EditCompany = ({
  openEditForm,
  handleClose,
  companyData,
  setCompanyData,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddCompanyFormTypes>();

  const onSubmit: SubmitHandler<AddCompanyFormTypes> = async (data) => {
    const companyDataToEdit = convertFormDataToDBObject(data);
    await editCompany(companyData?.id, companyDataToEdit);
    setCompanyData(await getCompany(companyData?.id));
    reset();
    handleClose();
  };
  return (
    <Modal
      open={openEditForm}
      onSubmit={handleSubmit((data) => onSubmit(data))}
      component="form"
      autoComplete="off"
      noValidate
    >
      <AddCompanyForm
        handleClose={handleClose}
        register={register}
        errors={errors}
        companyData={companyData}
      ></AddCompanyForm>
    </Modal>
  );
};

export default EditCompany;
