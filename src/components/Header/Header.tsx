import React from "react";
import "./Header.css";
import { IconButton } from "@mui/material";
import { FaUserPlus } from "react-icons/fa";

type Props = {
  title: string;
  handleOpen: () => void;
};

const Header = ({ title, handleOpen }: Props) => {
  return (
    <div className="companies__header">
      <h2 className="title">{title}</h2>
      <IconButton
        color="primary"
        aria-label="add to shopping cart"
        onClick={handleOpen}
      >
        <FaUserPlus />
      </IconButton>
    </div>
  );
};

export default Header;
