import React from "react";
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
import ComponentElement from "./CompanyElement/ComponentElement";

type Props = {
  companiesList: CompaniesType[];
};

const CompaniesList = ({ companiesList }: Props) => {
  const renderCompanies = companiesList.map((company) => {
    return <ComponentElement company={company} key={company.nip} />;
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
          </TableRow>
        </TableHead>
        <TableBody>{renderCompanies}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default CompaniesList;
