import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";
import star from "../assets/IMAGES/Group 1045.png";
import itemContact from "../assets/IMAGES/Buttons (primay,secondary, small).png";
import whatsappIcon from "../assets/IMAGES/logos_whatsapp-icon.png";
import iconCart from "../assets/IMAGES/icon.png";

const ProductCart = (props) => {
  const carts = useSelector((store) => store.cart.items);
  const { id, name, price, image, slug } = props.data;
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
      })
    );
  };

  const handleContactMeClick = () => {
    window.location.href = "https://wa.me/+234 8165 5735 27";
  };
  return (
    <div className="items">
      <div className="itemImg">
        <img src={image} alt="" />
        <img
          src={iconCart}
          alt=""
          className="iconCart"
          onClick={handleAddToCart}
        />
      </div>
      <div className="itemsContent">
        <h5>{name}</h5>
        <div className="flex-items">
          <div className="price">
            $<span className="text-2xl font-medium">{price}</span>
            <span>
              <img src={star} alt="" />
            </span>
          </div>
          <div className="contactItem">
            <a href="#contactMe" onClick={handleContactMeClick}>
              <img src={itemContact} alt="" style={{ cursor: "pointer" }} />
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
  );
};

export default ProductCart;
