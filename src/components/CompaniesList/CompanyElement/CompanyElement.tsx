import { TableCell, TableRow } from "@mui/material";
import React, { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import { CompaniesType } from "../../../types/types";
import "./CompanyElement.css";
import { IoEllipsisVerticalCircleOutline } from "react-icons/io5";
import { FaEdit, FaTrash } from "react-icons/fa";
import EditCompany from "../../EditCompany/EditCompany";

type Props = {
  openEditForm: boolean;
  handleClose: () => void;
  company: CompaniesType;
  setCompaniesList: (data: CompaniesType[] | undefined) => void;
};

const ComponentElement = ({
  openEditForm,
  handleClose,
  company,
  setCompaniesList,
}: Props) => {
  const openContextMenu = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    const { currentTarget } = e;
    const { nextElementSibling } = currentTarget;

    if (nextElementSibling?.classList.contains("active")) {
      nextElementSibling.classList.remove("active");
      currentTarget.classList.remove("hidden");
      return;
    }
    currentTarget.classList.add("hidden");
    nextElementSibling?.classList.add("active");
  };
  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell component="th" scope="row">
          {company.name}
        </TableCell>
        <TableCell align="right">{company.nip}</TableCell>
        <TableCell align="right">{company.address.city}</TableCell>
        <TableCell align="right">{company.address.street}</TableCell>
        <TableCell align="right">{company.address.zipcode}</TableCell>
        <TableCell align="right">
          <Link
            className="link__company__details"
            to={`/company/${company.id}`}
          >
            Szczegóły
          </Link>
        </TableCell>
        <TableCell align="right" className="action__cell">
          <IoEllipsisVerticalCircleOutline
            className="action__btn"
            onClick={openContextMenu}
          />
          <div className="context__menu">
            <FaEdit className="context__menu__btn context__menu__btn--edit" />
            <FaTrash className="context__menu__btn context__menu__btn--delete" />
          </div>
        </TableCell>
      </TableRow>
      {/* <EditCompany
        openEditForm={openEditForm}
        handleClose={handleClose}
        companyData={company}
      /> */}
    </>
  );
};

export default ComponentElement;
