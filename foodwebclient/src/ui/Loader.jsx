import React from "react";
import { ClipLoader } from "react-spinners";

import "../style/loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <ClipLoader
        size={50}
        color={"#f48f8f"}
        loading={true}
        className="clip-loader"
      />
    </div>
  );
};

export default Loader;
