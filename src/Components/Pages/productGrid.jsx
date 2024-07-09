import React, { useState } from "react";
import Dropdown from "./Dropdown";
import product001 from "../../assets/images/Rectangle 98.png";
import product002 from "../../assets/images/Rectangle 99.png";
import product003 from "../../assets/images/Rectangle 100.png";
import product004 from "../../assets/images/Rectangle 101.png";
import product005 from "../../assets/images/Rectangle 102.png";
import product006 from "../../assets/images/Rectangle 103.png";
import product007 from "../../assets/images/Rectangle 104.png";
import product008 from "../../assets/images/Rectangle 105.png";
import product009 from "../../assets/images/Rectangle 106.png";
import product010 from "../../assets/images/Rectangle 107.png";
import product011 from "../../assets/images/Rectangle 98.png";
import product012 from "../../assets/images/Rectangle 98.png";
import star from "../../assets/images/Group 1045.png";
import itemContact from "../../assets/images/Buttons (primay,secondary, small).png";
import whatsappIcon from "../../assets/images/logos_whatsapp-icon.png";
import iconCart from "../../assets/images/icon.png";

const ProductGrid = () => {
  const [selected, setSelected] = useState("");
  const [numItemsToShow, setNumItemsToShow] = useState(12);
  const [activeNum, setActiveNum] = useState(12);
  const gridItems = [
    {
      imgSrc: product001,
      title: "Center Table-Coffee Table",
      price: "#95,000",
    },
    {
      imgSrc: product002,
      title: "Modern Homely Center Table - Coffee Table Home Furniture",
      price: "#90,000",
    },
    {
      imgSrc: product003,
      title: "EAMES DESIGNED EIFFEL DSR PLASTIC CHAIR WHITE",
      price: "#76,000",
    },
    {
      imgSrc: product004,
      title: "Home Sofa Q Cover Seater Stretch Elastic Chair Sofa",
      price: "#50,000",
    },
    {
      imgSrc: product005,
      title: "Universal High Stretch Polyester Sofa Cover/chair Cover",
      price: "#67,000",
    },
    {
      imgSrc: product006,
      title: "Modern Homely Center Table - Coffee Table Home Furniture",
      price: "#285,000",
    },
    {
      imgSrc: product007,
      title: "LASA 11-Drawer Storage - Dark Grey",
      price: "#147,000",
    },
    {
      imgSrc: product008,
      title:
        "New Kitchen Office Drawer Store Expandable Cutlery Tray Organiser",
      price: "#15,000",
    },
    {
      imgSrc: product009,
      title: "Accent Sweet Home Ottoman And Footstool Nationwide Delivery",
      price: "#285,000",
    },
    {
      imgSrc: product010,
      title: "Modern Homely Center Table - Coffee Table Home Furniture",
      price: "#285,000",
    },
    {
      imgSrc: product011,
      title: "Modern Homely Center Table - Coffee Table Home Furniture",
      price: "#285,000",
    },
    {
      imgSrc: product012,
      title: "Modern Homely Center Table - Coffee Table Home Furniture",
      price: "#285,000",
    },
  ];
  // Function to filter items based on selected category or title
  const filteredItems =
    selected === "All"
      ? gridItems.slice(0, numItemsToShow)
      : gridItems
          .filter(
            (item) =>
              item.title.toLowerCase().includes(selected.toLowerCase()) ||
              item.category === selected
          )
          .slice(0, numItemsToShow);

  // Function to handle click on number in the span
  const handleNumClick = (num) => {
    setNumItemsToShow(num);
    setActiveNum(num);
  };
  const handleContactMeClick = () => {
    // Replace this with your actual WhatsApp link
    window.location.href = "https://wa.me/+234 8165 5735 27";
  };
  return (
    <div className="productGrid-container">
      <div className="dropdown-container">
        <Dropdown selected={selected} setSelected={setSelected} />
      </div>
      <div className="items-filter">
        <div className="filter-Num">
          <h5> Show</h5>
          <div>
            <ul>
              <ol
                className={activeNum === 12 ? "activeNumStyle" : ""}
                onClick={() => handleNumClick(12)}
              >
                {" "}
                12
              </ol>
              <ol
                className={activeNum === 18 ? "activeNumStyle" : ""}
                onClick={() => handleNumClick(18)}
              >
                {" "}
                18
              </ol>
              <ol
                className={activeNum === 24 ? "activeNumStyle" : ""}
                onClick={() => handleNumClick(24)}
              >
                {" "}
                24
              </ol>
            </ul>
          </div>
        </div>
        <div className="gridItems">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <div className="items" key={index}>
                <div className="itemImg">
                  <img src={item.imgSrc} alt="" />
                  <img src={iconCart} alt="" className="iconCart" />
                </div>
                <div className="itemsContent">
                  <h5>{item.title}</h5>
                  <div className="flex-items">
                    <div className="price">
                      {item.price}
                      <span>
                        <img src={star} alt="" />
                      </span>
                    </div>
                    <div className="contactItem">
                      <a href="#contactMe" onClick={handleContactMeClick}>
                        <img
                          src={itemContact}
                          alt=""
                          style={{ cursor: "pointer" }}
                        />
                      </a>

                      {/* WhatsApp Icon and onClick */}
                      <a href="#contactMe" onClick={handleContactMeClick}>
                        <img
                          src={whatsappIcon}
                          alt="WhatsApp"
                          style={{ cursor: "pointer" }}
                          className="whatsappIcon"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-items-found">No items found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
