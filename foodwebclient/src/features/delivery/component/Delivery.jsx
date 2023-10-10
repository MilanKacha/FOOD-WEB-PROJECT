import React, { useEffect, useState } from "react";
import "../../../style/delivery.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllRestorantAsync, selectAllRestorants } from "../RestorantSlice";
import { Link, useLocation } from "react-router-dom";

import RestorantCard from "../../../ui/RestorantCard";

const Delivery = () => {
  // get data of restaurant
  const restaurantData = useSelector(selectAllRestorants);
  const dispatch = useDispatch();

  // for home page data (choise)
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const subcategory = queryParams.get("subcategory");
  useEffect(() => {
    dispatch(fetchAllRestorantAsync(subcategory));
  }, [dispatch]);

  // for filter
  const [filters, setFilters] = useState({
    price: null,
    ratingsAverage: null,
    expecteddeliverytime: null,
  });

  if (!restaurantData) return <p>loading</p>;

  // let beause of change data after filter
  let sortedData = [...restaurantData];

  // Sort by price
  if (filters.price === "lowToHigh") {
    sortedData.sort((a, b) => a.price - b.price);
  } else if (filters.price === "highToLow") {
    sortedData.sort((a, b) => b.price - a.price);
  } else if (filters.ratingsAverage === "lowToHigh") {
    sortedData.sort((a, b) => a.ratingsAverage - b.ratingsAverage);
  } else if (filters.ratingsAverage === "highToLow") {
    sortedData.sort((a, b) => b.ratingsAverage - a.ratingsAverage);
  } else if (filters.expecteddeliverytime === "lowToHigh") {
    sortedData.sort((a, b) => a.expecteddeliverytime - b.expecteddeliverytime);
  } else if (filters.expecteddeliverytime === "highToLow") {
    sortedData.sort((a, b) => b.expecteddeliverytime - a.expecteddeliverytime);
  }

  // function for rating 4+
  if (filters.ratingsAverage === "Rating4+") {
    sortedData = sortedData.filter(
      (restaurant) => restaurant.ratingsAverage >= 3
    );
  }

  // for handel filter
  const handleFilterChange = (filterKey, sortOrder) => {
    setFilters(() => ({
      [filterKey]: sortOrder,
    }));
  };

  const clearFilter = () => {
    setFilters({
      price: null,
      ratingsAverage: null,
      expecteddeliverytime: null,
    });
  };

  return (
    <>
      <div>
        <section className="restorantname-section">
          <div className="filter-nav-wrapper">
            <nav className="filter-nav">
              <ul className="navbar-list-filter">
                <li>
                  <span className="remove-filter" onClick={clearFilter}>
                    Remove filter
                  </span>
                </li>
                <li className="navbar-item-filter">
                  <span
                    onClick={() =>
                      handleFilterChange("expecteddeliverytime", "lowToHigh")
                    }
                    className={
                      filters.expecteddeliverytime === "lowToHigh"
                        ? "active"
                        : ""
                    }
                  >
                    Delivery Time(Low to High)
                  </span>
                </li>
                <li className="navbar-item-filter">
                  <span
                    onClick={() => {
                      handleFilterChange("ratingsAverage", "highToLow");
                    }}
                    className={
                      filters.ratingsAverage === "highToLow" ? "active" : ""
                    }
                  >
                    Rating(High to Low)
                  </span>
                </li>
                <li className="navbar-item-filter">
                  <span
                    onClick={() => {
                      handleFilterChange("ratingsAverage", "lowToHigh");
                    }}
                    className={
                      filters.ratingsAverage === "lowToHigh" ? "active" : ""
                    }
                  >
                    Rating(Low to High)
                  </span>
                </li>
                <li className="navbar-item-filter">
                  <span
                    onClick={() => {
                      handleFilterChange("price", "highToLow");
                    }}
                    className={filters.price === "highToLow" ? "active" : ""}
                  >
                    Price(High to Low)
                  </span>
                </li>
                <li className="navbar-item-filter">
                  <span
                    onClick={() => {
                      handleFilterChange("price", "lowToHigh");
                    }}
                    className={filters.price === "lowToHigh" ? "active" : ""}
                  >
                    Price(Low to High)
                  </span>
                </li>
                <li className="navbar-item-filter">
                  <span
                    onClick={() => {
                      handleFilterChange("ratingsAverage", "Rating4+");
                    }}
                    className={
                      filters.ratingsAverage === "Rating4+" ? "active" : ""
                    }
                  >
                    Rating 4+
                  </span>
                </li>
              </ul>
            </nav>
          </div>
          <div className="restaurant heading">
            <h2 style={{ color: "black" }}>Best Food in Bengaluru</h2>
          </div>
          <div className="restorsntname-container">
            {sortedData.map((item, index) => (
              <Link to={`/restaurant/${item._id}`}>
                <RestorantCard props={item} key={index} />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Delivery;
