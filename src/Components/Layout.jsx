import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Information from "./Information";
import Delivery from "./Delivery";

const Layout = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <Outlet />
      <Delivery />
      <Information />
      <Footer />
    </div>
  );
};

export default Layout;
