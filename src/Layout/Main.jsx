import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navber from "../Navber/Navber";

const Main = () => {
  return (
    <div>
      {/* <h1>Main.jsx</h1> */}
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
