import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./Products";
import Cart from "./Cart";

const pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products></Products>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
};

export default pages;
