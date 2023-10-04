import Navbar from "../features/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const LayOut = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default LayOut;
