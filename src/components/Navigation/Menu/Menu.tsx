import { FaDollarSign, FaHome } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import { paths } from "../../../utils/paths";

const Menu = () => {
  return (
    <ul className="container__navigation">
      <li className="navigation__item">
        <Link to="/" className="navigation__link">
          <FaHome />
        </Link>
      </li>
      <li className="navigation__item">
        <Link to={paths.companies} className="navigation__link">
          <MdContactPhone />
        </Link>
      </li>
      <li className="navigation__item">
        <Link to={paths.deal} className="navigation__link">
          <FaDollarSign />
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
