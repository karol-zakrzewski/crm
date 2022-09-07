import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { CompaniesType } from "../../../types/types";
import "./CompanyElement.css";

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
      <TableCell align="right">
        <Link className="link__company__details" to={`/company/${company.id}`}>
          Szczegóły
        </Link>
      </TableCell>
    </TableRow>
  );
};

export default ComponentElement;
