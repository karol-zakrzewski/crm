import { Modal } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddCompanyFormTypes, CompaniesType } from "../../types/types";
import AddCompanyForm from "../Form/AddCompanyForm";
import { convertFormDataToDBObject } from "../../utils";
import { editCompany, getCompany } from "../../api";

type Props = {
  openEditForm: boolean;
  handleClose: () => void;
  companyData?: CompaniesType;
  setCompanyData: (data: CompaniesType | undefined) => void;
};

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
    setCompanyData(await getCompany("7hE8hdf1kp8rR2Agixd4"));
    reset();
    handleClose();
  };
  return (
    <Modal
      open={openEditForm}
      onSubmit={handleSubmit(onSubmit)}
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
