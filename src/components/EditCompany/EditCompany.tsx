import { Modal } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddCompanyFormTypes, CompaniesType } from "../../types/types";
import { convertFormDataToDBObject } from "../../utils";
import { editCompany, getCompanies, getCompany } from "../../api";

interface Props {
  openEditForm: boolean;
  handleClose: () => void;
  companyData?: CompaniesType;
  setCompanyData: (data: CompaniesType | undefined) => void;
  // setCompaniesData?: (data: CompaniesType[] | undefined) => void;
}

const EditCompany = ({
  openEditForm,
  handleClose,
  companyData,
  setCompanyData,
}: // setCompaniesData,
Props) => {
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
    // if (Object.keys(data).length > 0) {
    // } else {
    //   setCompaniesData(await getCompanies());
    // }
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
      {/* <AddCompanyForm
        handleClose={handleClose}
        register={register}
        errors={errors}
        companyData={companyData}
      ></AddCompanyForm> */}
      <div>Modal</div>
    </Modal>
  );
};

export default EditCompany;
