import styled from "@emotion/styled";
import { Avatar, Button, IconButton, useMediaQuery } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Drawer from "../ui/drawer/Drawer";
import Menu from "./Menu/Menu";

const StyledMobileMenuButton = styled(IconButton)``;

const Nav = () => {
  const matches = useMediaQuery("(max-width:768px)");
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  return (
    <header className="container">
      <div className="container__logo">Force Crm</div>
      {matches ? (
        <StyledMobileMenuButton
          onClick={() => setIsOpenDrawer(true)}
          aria-label="menu"
          className="menu__button"
        >
          <FaBars />
        </StyledMobileMenuButton>
      ) : (
        <>
          <Menu />
          <div className="user__avatar">
            <Avatar sx={{ bgcolor: grey[400] }} alt="User">
              K
            </Avatar>
          </div>
        </>
      )}
      <Drawer open={isOpenDrawer} handleClose={() => setIsOpenDrawer(false)} />
    </header>
  );
};

export default Nav;
