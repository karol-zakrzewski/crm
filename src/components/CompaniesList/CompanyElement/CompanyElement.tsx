import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  TableCell,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CompaniesType } from "../../../types/types";
import "./CompanyElement.css";
import { FiMoreVertical } from "react-icons/fi";
import { FaEdit, FaTrash } from "react-icons/fa";
import ConfirmDialog from "../../ui/dialog/ConfirmDialog";
import { paths } from "../../../utils/paths";
import { useDispatch } from "react-redux";
import { deleteCompanyThunk } from "../../../store/companies-slice";
import { toastActions } from "../../../store/toast-slice";
import jsonText from "../../../assets/data.json";

type Props = {
  company: CompaniesType;
};

const ComponentElement = ({ company }: Props) => {
  const dispatch: (dispatch: any) => Promise<void> = useDispatch();
  const navigate = useNavigate();
  const [isOpenConfirmDialog, setIsOpenConfirmDialog] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = async () => {
    try {
      if (typeof company.id !== "string") {
        throw new Error(jsonText.toastMessage.failedDeleteCompany);
      }
      dispatch(deleteCompanyThunk(company.id));
      setIsOpenConfirmDialog(false);
      dispatch(
        toastActions.showToast({
          isOpen: true,
          message: jsonText.toastMessage.successDeleteCompany,
          status: "success",
        })
      );
    } catch (error) {
      if (error instanceof Error) {
        dispatch(
          toastActions.showToast({
            isOpen: true,
            message: error.message,
            status: "error",
          })
        );
      }
    }
  };
  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align="left" className="action__cell">
          <IconButton
            aria-label="more"
            id="long-button"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <FiMoreVertical />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem
              onClick={() => navigate(`${paths.editComapny}/${company.id}`)}
            >
              <ListItemIcon>
                <FaEdit />
              </ListItemIcon>
              <ListItemText>Edit</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => setIsOpenConfirmDialog(true)}>
              <ListItemIcon>
                <FaTrash />
              </ListItemIcon>
              <ListItemText>Delete</ListItemText>
            </MenuItem>
          </Menu>
        </TableCell>
        <TableCell
          component="th"
          scope="row"
          onClick={() => {
            navigate("/");
          }}
        >
          {company.name}
        </TableCell>
        <TableCell
          align="right"
          onClick={() => {
            navigate("/");
          }}
        >
          {company.nip}
        </TableCell>
        <TableCell
          align="right"
          onClick={() => {
            navigate("/");
          }}
        >
          {company.address.city}
        </TableCell>
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
      </TableRow>
      <ConfirmDialog
        open={isOpenConfirmDialog}
        handleClose={() => setIsOpenConfirmDialog(false)}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default ComponentElement;
