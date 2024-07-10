import React, { useState, useEffect } from "react";
import cart from "../assets/images/Group.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusTab } from "../stores/cart";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);
  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };

  const showSidebar = () => {
    setSidebarOpen(true);
  };

  const hideSidebar = () => {
    setSidebarOpen(false);
  };

  const handleContactMeClick = () => {
    // Replace this with your actual WhatsApp link
    window.location.href = "https://wa.me/+234 8165 5735 27";
    setActiveLink("contactMe");
    hideSidebar(); // Optionally close sidebar when navigating
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ul className={sidebarOpen ? "sidebar open" : "sidebar"}>
          <li onClick={hideSidebar}>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 96 960 960"
                width="48"
              >
                <path
                  d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
                  fill="black"
                />
              </svg>
            </a>
          </li>
          <Link to="/">
            <li>
              <a
                href="#product"
                className={activeLink === "product" ? "active" : ""}
                onClick={() => setActiveLink("product")}
              >
                Product
              </a>
            </li>
          </Link>
          <li>
            <a
              href="#followMe"
              className={activeLink === "followMe" ? "active" : ""}
              onClick={() => setActiveLink("followMe")}
            >
              Follow Me
            </a>
          </li>
          <li>
            <a
              href="#contactMe"
              className={activeLink === "contactMe" ? "active" : ""}
              onClick={handleContactMeClick}
            >
              Contact Me
            </a>
          </li>
        </ul>

        <ul className="navlist">
          <li className="hideOnMobile">
            <Link
              to="/"
              href="#product"
              className={activeLink === "product" ? "active" : ""}
              onClick={() => setActiveLink("product")}
            >
              {" "}
              Product
            </Link>
          </li>
          <li className="hideOnMobile">
            <a
              href="#followMe"
              className={activeLink === "followMe" ? "active" : ""}
              onClick={() => setActiveLink("followMe")}
            >
              Follow Me
            </a>
          </li>
          <li className="hideOnMobile">
            <a
              href="#contactMe"
              className={activeLink === "comtactMe" ? "active" : ""}
              onClick={handleContactMeClick}
            >
              Contact Me
            </a>
          </li>
          <li className="cart-img">
            <span className="total-num">{totalQuantity}</span>
            <Link to="/CartTab">
              <img src={cart} alt="" onClick={handleOpenTabCart} />
            </Link>
          </li>
          <li className="menu-button" onClick={showSidebar}>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 96 960 960"
                width="48"
              >
                <path
                  d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"
                  fill="black"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
