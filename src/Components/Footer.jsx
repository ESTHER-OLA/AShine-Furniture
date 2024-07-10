import React, { useState } from "react";
import iconFB from "../assets/IMAGES/Group 1064.svg";
import iconIG from "../assets/IMAGES/Group 1062.svg";
import iconWhspp from "../assets/IMAGES/logos_whatsapp-icon.png";

const Footer = () => {
  const [activeLink, setActiveLink] = useState("");
  const handleContactMeClick = () => {
    // Replace this with your actual WhatsApp link
    window.location.href = "https://wa.me/+234 8165 5735 27";
    setActiveLink("contactMe");
  };

  return (
    <div className="footer container">
      <div className="flex1">
        <h3 className="colorText">Get in touch</h3>
        <h7>
          Discover our exquisite range of modern and classic furniture to
          transform your home. From chic sofas to elegant dining sets, find the
          perfect pieces to create your dream living space.
        </h7>
        <div className="icons">
          <a href="#">
            <img src={iconFB} alt="" />
          </a>
          <a href="#">
            <img src={iconIG} alt="" />
          </a>
        </div>
      </div>
      <div className="hl"></div>
      <div className="flex2">
        <div className="contactFooter">
          <div className="iconWhspp">
            <img src={iconWhspp} alt="" />
          </div>
          <div className="num">
            <h3>+234 8165 5735 27</h3>
          </div>
        </div>
        <div className="linksfooter">
          <a href="#product">Product</a>
          <a href="#">Follow Me</a>
          <a
            to="#"
            className={activeLink === "comtactMe" ? "active" : ""}
            onClick={handleContactMeClick}
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
