import React, { useState } from "react";
import { CompaniesType } from "../../types/types";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CompanyElement from "./CompanyElement/CompanyElement";

type Props = {
  companiesList?: CompaniesType[];
  setCompaniesList: (data: CompaniesType[] | undefined) => void;
};

const CompaniesList = ({ companiesList, setCompaniesList }: Props) => {
  const [openEditForm, setOpenEditForm] = useState(false);
  const renderCompanies = companiesList?.map((company) => {
    return (
      <CompanyElement
        openEditForm={openEditForm}
        handleClose={() => setOpenEditForm(false)}
        company={company}
        setCompaniesList={setCompaniesList}
        key={company.nip}
      />
    );
  });
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nazwa firmy</TableCell>
            <TableCell align="right">NIP</TableCell>
            <TableCell align="right">Miasto</TableCell>
            <TableCell align="right">Ulica</TableCell>
            <TableCell align="right">Kod pocztowy</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderCompanies}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default CompaniesList;
