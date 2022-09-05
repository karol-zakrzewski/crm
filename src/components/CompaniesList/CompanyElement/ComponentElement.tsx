import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { CompaniesType } from "../../../types/types";

type Props = {
  company: CompaniesType;
};

const ComponentElement = ({ company }: Props) => {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {company.name}
      </TableCell>
      <TableCell align="right">{company.nip}</TableCell>
      <TableCell align="right">{company.address.city}</TableCell>
      <TableCell align="right">{company.address.street}</TableCell>
      <TableCell align="right">{company.address.zipcode}</TableCell>
    </TableRow>
  );
};

export default ComponentElement;
