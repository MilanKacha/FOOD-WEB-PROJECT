import { useSelector } from "react-redux";
import "../../../style/ordersuccess.css";

import { Link, useNavigate } from "react-router-dom";
import { selectCurrentOrder } from "../orderSlice";

const OrderSuccess = () => {
  // Declare currentOrder get from localStorage
  const navigate = useNavigate();
  const currentOrder =
    useSelector(selectCurrentOrder) ||
    JSON.parse(localStorage.getItem("currentOrder"));
  console.log(currentOrder);
  const goToHomePage = () => {
    navigate("/");
  };

  if (!currentOrder || !currentOrder.data || !currentOrder.data.order) {
    // Handle the case where currentOrder is not available or is invalid
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="ordersuccess">
        <div className="ordersuccess-wrapper">
          <h2 style={{ color: "black" }} className="ordersuccess-heading">
            Thanks for your order
          </h2>
          <div className="orderdetails">
            <span className="orderid">
              Order ID:{currentOrder?.data.order._id}
            </span>
            <span className="ordersuccess-text">
              You can check your Orders in my account My Order
            </span>
            <span
              style={{ color: "blue" }}
              className="ordersuccess-gotohome"
              onClick={goToHomePage}
            >
              Go to homepage
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;
