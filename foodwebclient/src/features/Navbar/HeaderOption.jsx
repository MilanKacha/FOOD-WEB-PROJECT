// import { Link } from "react-router-dom";
import "../../style/headeroption.css";
import { RiEBikeLine } from "react-icons/ri";
import { MdDining } from "react-icons/md";

const HeaderOption = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          {/* <Link to="/" className="navbar-link"> */}
          <RiEBikeLine />
          Delivery
          {/* </Link> */}
        </li>
        <li className="navbar-item">
          {/* <Link to="/about" className="navbar-link"> */}
          <MdDining />
          Dining Out
          {/* </Link> */}
        </li>
        <li className="navbar-item">
          {/* <Link to="/services" className="navbar-link"> */}
          Nightlife
          {/* </Link> */}
        </li>
      </ul>
    </nav>
  );
};

export default HeaderOption;
