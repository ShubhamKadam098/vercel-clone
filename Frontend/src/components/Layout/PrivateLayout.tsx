import React from "react";
import Navbar from "../Header/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const PrivateLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default PrivateLayout;
