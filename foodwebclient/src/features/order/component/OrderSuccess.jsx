import { useSelector } from "react-redux";
import "../../../style/ordersuccess.css";
import { currentOrder } from "../orderSlice";
import { Link, useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  // Declare currentOrder get from localStorage
  const navigate = useNavigate();

  console.log(currentOrder);
  const goToHomePage = () => {
    // Remove the currentOrder from local storage
    localStorage.removeItem("currentOrder");
    // Navigate to the home page
    navigate("/");
  };
  return (
    <>
      <div className="ordersuccess">
        <div className="ordersuccess-wrapper">
          <h2 style={{ color: "black" }} className="ordersuccess-heading">
            Thanks for your order
          </h2>
          <div className="orderdetails">
            <span className="orderid">
              Order ID:{currentOrder.data.order._id}
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
