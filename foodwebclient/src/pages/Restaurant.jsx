import React from "react";
import LayOut from "../ui/LayOut";
import RestorantDetails from "../features/delivery/component/RestorantDetails";

const Restaurant = () => {
  return (
    <>
      <LayOut>
        <div className="page-wrapper">
          <RestorantDetails />
        </div>
      </LayOut>
    </>
  );
};

export default Restaurant;
