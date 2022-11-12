import "./Header.css";
import { IconButton } from "@mui/material";
import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { paths } from "../../utils/paths";

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return (
    <div className="companies__header">
      <h2 className="title">{title}</h2>
      <Link to={paths.addComapny}>
        <IconButton color="primary" aria-label="Add company">
          <FaUserPlus />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
