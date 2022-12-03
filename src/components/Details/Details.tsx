import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { CompaniesType, Employee } from "../../types/types";
import Todo from "../Feature/Todo/Todo";
import CompanyInfo from "./CompanyInfo/CompanyInfo";
import "./Details.css";

type Props = {
  employees: Employee[] | null;
  companyData: CompaniesType | undefined;
  setCompanyData: (data: CompaniesType | undefined) => void;
};

const Details = ({ employees, companyData, setCompanyData }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <Container sx={{ marginTop: "20px" }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={8}>
          <CompanyInfo
            companyData={companyData}
            setOpen={setOpen}
            setCompanyData={setCompanyData}
          />

          <Grid
            xs={12}
            sx={{ background: "white", height: "300px", marginTop: "1rem" }}
          >
            Post
            {employees &&
              employees.map((employee) => {
                return <p>{employee.name}</p>;
              })}
          </Grid>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ width: "100%" }}>
            <Todo />
            <Box
              sx={{
                background: "white",
                height: "100px",
                marginTop: ".5rem",
              }}
            >
              Deals
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Details;
