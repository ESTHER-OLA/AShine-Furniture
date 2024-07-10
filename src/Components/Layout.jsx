import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CartTab from "./CartTab";
import { useSelector } from "react-redux";

const Layout = () => {
  const statusTabCart = useSelector((store) => store.cart.statusTab);
  return (
    <div className="">
      <main>
        <Header />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
