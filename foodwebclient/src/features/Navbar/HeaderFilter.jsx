import React from "react";

const HeaderFilter = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <span>Delivery Time(Low to High)</span>
        </li>
        <li className="navbar-item">
          <span>Rating(High to Low)</span>
        </li>
        <li className="navbar-item">
          <span>Rating(Low to High)</span>
        </li>
        <li className="navbar-item">
          <span>Price(High to Low)</span>
        </li>
        <li className="navbar-item">
          <span>Price(Low to High)</span>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderFilter;
