import React from "react";

const HeaderFilter = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          {/* <Link to="/" className="navbar-link"> */}
          Filter
          {/* </Link> */}
        </li>
        <li className="navbar-item">
          {/* <Link to="/about" className="navbar-link"> */}
          Rating(High to Low)
          {/* </Link> */}
        </li>
        <li className="navbar-item">
          {/* <Link to="/about" className="navbar-link"> */}
          Rating(Low to High)
          {/* </Link> */}
        </li>
        <li className="navbar-item">
          {/* <Link to="/about" className="navbar-link"> */}
          Price(High to Low)
          {/* </Link> */}
        </li>
        <li className="navbar-item">
          {/* <Link to="/about" className="navbar-link"> */}
          Price(Low to High)
          {/* </Link> */}
        </li>
      </ul>
    </nav>
  );
};

export default HeaderFilter;
