import React, { useEffect, useState } from "react";
import "../../../style/delivery.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllRestorantAsync, selectAllRestorants } from "../RestorantSlice";
import { Link, useLocation, useParams } from "react-router-dom";

import HeaderFilter from "../../Navbar/HeaderFilter";
import RestorantCard from "../../../ui/RestorantCard";
import { MdCancel } from "react-icons/md";

import SliderComponent from "../../../ui/SliderComponent";
import Button from "../../../ui/Button";

const Delivery = () => {
  // get data of restaurant
  const restaurantData = useSelector(selectAllRestorants);
  const dispatch = useDispatch();
  // console.log(restaurantData);
  useEffect(() => {
    dispatch(fetchAllRestorantAsync());
  }, [dispatch]);

  // for home page data (choise)
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const subcategory = queryParams.get("subcategory");

  // for filter
  const [filters, setFilters] = useState({
    price: null,
    ratingsAverage: null,
    expecteddeliverytime: null,
    subCategory: subcategory || null,
  });

  if (!restaurantData) return <p>loading</p>;

  // let beause of change data after filter
  let sortedData = [...restaurantData];

  // for home page subcategory filter

  if (filters.subCategory === subcategory) {
    sortedData = sortedData.filter(
      (restaurant) => restaurant.subCategory === subcategory
    );
  }

  // Sort by price
  if (filters.price === "lowToHigh") {
    sortedData.sort((a, b) => a.price - b.price);
  } else if (filters.price === "highToLow") {
    sortedData.sort((a, b) => b.price - a.price);
  }

  // Sort by ratingsAverage
  if (filters.ratingsAverage === "lowToHigh") {
    sortedData.sort((a, b) => a.ratingsAverage - b.ratingsAverage);
  } else if (filters.ratingsAverage === "highToLow") {
    sortedData.sort((a, b) => b.ratingsAverage - a.ratingsAverage);
  }

  // Sort by expecteddeliverytime
  if (filters.expecteddeliverytime === "lowToHigh") {
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
  // const handleFilterChange = (filterKey, sortOrder) => {
  //   setFilters(() => ({
  //     [filterKey]: sortOrder,
  //   }));
  // };

  const handleFilterChange = (filterKey, sortOrder) => {
    // Create a new object with the updated filter and include other active filters
    const updatedFilters = {
      ...filters,
      [filterKey]: sortOrder,
    };
    setFilters(updatedFilters);
  };

  const clearFilter = () => {
    setFilters({
      price: null,
      ratingsAverage: null,
      expecteddeliverytime: null,
      subCategory: filters.subCategory,
    });
  };
  // when no filter
  if (
    !filters.subCategory &&
    !filters.price &&
    !filters.ratingsAverage &&
    !filters.expecteddeliverytime
  ) {
    sortedData = [...restaurantData];
  }

  return (
    <>
      <div>
        <section className="restorantname-section">
          <div className="filter-nav-wrapper">
            <nav className="filter-nav">
              <ul className="navbar-list-filter">
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
                <li>
                  <span className="remove-filter" onClick={clearFilter}>
                    Remove filter
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
