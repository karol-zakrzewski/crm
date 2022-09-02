import { Avatar } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import Menu from "./Menu/Menu";

const Nav = () => {
  return (
    <header className="container">
      <div className="container__logo">Force Crm</div>
      <Menu />
      <div className="user__avatar">
        <Avatar
          sx={{ bgcolor: grey[400] }}
          alt="Remy Sharp"
          src="/broken-image.jpg"
        >
          K
        </Avatar>
      </div>
    </header>
  );
};

export default Nav;
