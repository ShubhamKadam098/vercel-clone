import React from "react";
import Navbar from "../Header/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";

const PrivateLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 my-4">
        <Outlet />
      </div>
      <Toaster position="bottom-right" />
      <Footer />
    </div>
  );
};

export default PrivateLayout;
