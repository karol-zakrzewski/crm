import React from "react";
import "./Header.css";
import { FaHome, FaDollarSign, FaBars } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { Avatar } from "@mui/material";
import { grey } from "@mui/material/colors";

const Header = () => {
  return (
    <header className="container">
      <div className="container__logo">Force Crm</div>
      <ul className="container__navigation">
        <li className="navigation__item">
          <a href="/home" className="navigation__link">
            <FaHome />
          </a>
        </li>
        <li className="navigation__item">
          <a href="/companies" className="navigation__link">
            <MdContactPhone />
          </a>
        </li>
        <li className="navigation__item">
          <a href="/sales" className="navigation__link">
            <FaDollarSign />
          </a>
        </li>
      </ul>

      <div className="user__avatar">
        <Avatar
          sx={{ bgcolor: grey[400] }}
          alt="Remy Sharp"
          src="/broken-image.jpg"
        >
          K
        </Avatar>
        <div className="menu__button">
          <FaBars />
        </div>
      </div>
    </header>
  );
};

export default Header;
