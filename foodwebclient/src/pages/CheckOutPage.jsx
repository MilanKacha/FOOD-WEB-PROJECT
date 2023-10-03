import React from "react";
import LayOut from "../ui/LayOut";
import OrderCheckOut from "../features/order/component/OrderCheckOut";

const CheckOutPage = () => {
  return (
    <>
      <LayOut>
        <div className="page-wrapper">
          <OrderCheckOut />
        </div>
      </LayOut>
    </>
  );
};

export default CheckOutPage;
