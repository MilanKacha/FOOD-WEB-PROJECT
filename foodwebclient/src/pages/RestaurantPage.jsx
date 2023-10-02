import React from "react";
import LayOut from "../ui/LayOut";
import Delivery from "../features/delivery/component/Delivery";

const RestaurantPage = () => {
  return (
    <>
      <LayOut>
        <div className="page-wrapper">
          <Delivery />
        </div>
      </LayOut>
    </>
  );
};

export default RestaurantPage;
