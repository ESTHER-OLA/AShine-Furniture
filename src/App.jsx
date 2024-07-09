import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Pages from "./Components/Pages/pages";
import Footer from "./Components/footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Pages />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
