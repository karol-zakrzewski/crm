import { Box, Grid } from "@mui/material";
import { DocumentSnapshot } from "firebase/firestore";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  FaBuilding,
  FaEnvelope,
  FaPhone,
  FaUserEdit,
  FaUserPlus,
} from "react-icons/fa";
import { AiOutlineFileSearch } from "react-icons/ai";
import { addEmployee } from "../../../api/employees";
import { CompaniesType, Employee } from "../../../types/types";
import AddEmployeeDialog from "../../ui/dialog/AddEmployeeDialog";
import {
  StyledBox,
  StyledCompanyInfo,
  StyledImgWrapper,
} from "./StyledCompanyInfo";

type Props = {
  companyData: CompaniesType | undefined;
  setOpen: (value: boolean) => void;
  setCompanyData: (data: CompaniesType | undefined) => void;
};
type Inputs = {
  name: string;
  phone: number;
  email: string;
};

const CompanyInfo = ({ companyData, setOpen, setCompanyData }: Props) => {
  const [openAddEmployeeForm, setOpenAddEmployeeForm] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { name: "", email: "", phone: 0 } });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const docRef = (await addEmployee(
        data
      )) as unknown as DocumentSnapshot<Employee>;
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <>
      <Grid container sx={{ background: "white" }}>
        <StyledImgWrapper item xs={12} sm={4}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/sales-power-crm.appspot.com/o/default-company.jpeg?alt=media&token=75098b55-5efd-41cf-ba32-c87b8c9185ac"
            alt={companyData?.name}
            className="company__img"
          />
        </StyledImgWrapper>
        <Grid item xs={12} sm={8}>
          <StyledBox>
            <div className="add_employee">
              <h2>{companyData?.name}</h2>
              <div className="btn__wrapper">
                <button
                  className="add__employee__btn"
                  onClick={() => setOpenAddEmployeeForm(true)}
                >
                  Add Employee
                  <FaUserPlus className="icon__user" />
                </button>
                <button className="add__employee__btn">
                  Edit
                  <FaUserEdit className="icon__user" />
                </button>
              </div>
            </div>
            <StyledCompanyInfo>
              <div>
                <p>
                  <FaBuilding /> ul. {companyData?.address?.street}
                </p>
                <span>{companyData?.address?.zipcode}, </span>
                <span>{companyData?.address?.city}</span>
                <p>
                  <AiOutlineFileSearch /> {companyData?.nip}
                </p>
              </div>
              <div>
                <p>
                  <FaPhone /> {companyData?.phone}
                </p>
                <p>
                  <FaEnvelope /> {companyData?.email}
                </p>
              </div>
            </StyledCompanyInfo>
          </StyledBox>
        </Grid>
      </Grid>
      <AddEmployeeDialog
        control={control}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        open={openAddEmployeeForm}
        handleClose={() => setOpenAddEmployeeForm(false)}
        handleAddEmployee={() => console.log("edit")}
      />
    </>
  );
};

export default CompanyInfo;
