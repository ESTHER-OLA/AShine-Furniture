import React from "react";
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";
import star from "../assets/images/Group 1045.png";
import itemContact from "../assets/images/Buttons (primay,secondary, small).png";
import whatsappIcon from "../assets/images/logos_whatsapp-icon.png";
import iconCart from "../assets/images/icon.png";

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
    const phoneNumber = "+2348165573527";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
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
            <span className="text-2xl font-medium">${price}</span>
            <span>
              <img src={star} alt="" />
            </span>
          </div>
          <div className="contactItem">
            <a href="#contactMe" onClick={handleContactMeClick}>
              <img src={itemContact} alt="" style={{ cursor: "pointer" }} />
            </a>

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
