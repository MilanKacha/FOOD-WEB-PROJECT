import React from "react";

const OrderSuccess = () => {
  return (
    <>
      <div className="ordersuccess">
        <div className="ordersuccess-wrapper">
          <h1 style={{ color: "black" }} className="ordersuccess-heading">
            Thanks for your order
          </h1>
          <div className="orderdetails">
            <div className="orderid">Order ID:35467890</div>
          </div>
        </div>
        <div className="order-details">
          <div className="order-items">
            <div className="orderitems-heading">Order details</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;
