import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  TableCell,
  TableRow,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CompaniesType } from "../../../types/types";
import "./CompanyElement.css";
import { FiMoreVertical } from "react-icons/fi";
import { FaEdit, FaTrash } from "react-icons/fa";
import { deleteCompany } from "../../../api";

type Props = {
  company: CompaniesType;
};

const ComponentElement = ({ company }: Props) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = async (id: string | undefined) => {
    deleteCompany(id);
  };
  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
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
        <TableCell align="right" className="action__cell">
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
            <MenuItem>
              <ListItemIcon>
                <FaEdit />
              </ListItemIcon>
              <ListItemText>Edit</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <FaTrash />
              </ListItemIcon>
              <ListItemText>Delete</ListItemText>
            </MenuItem>
          </Menu>
        </TableCell>
      </TableRow>
    </>
  );
};

export default ComponentElement;
