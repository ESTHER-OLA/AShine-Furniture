import React, { useState, useEffect } from "react";
import star from "../assets/images/Group 1045.png";
import { products } from "../Product";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../stores/cart";

const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const findDetail = products.filter(
      (product) => product.id === productId
    )[0];
    setDetail(findDetail);
  }, [productId]);
  const handleMinusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity - 1,
      })
    );
  };
  const handlePlusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };
  return (
    <div className="cardGrid">
      <div className="card-flex">
        <div className="colImg">
          <img src={detail.image} alt="" className="" />
        </div>
        <div className="gridCartText">
          <div className="colText">
            <h3>{detail.name}</h3>
            {/* <p>${detail.price * quantity}</p> */}
          </div>
          <div>
            <img src={star} alt="" />
          </div>

          <div className="cardAdd">
            <button className="remove" onClick={handleMinusQuantity}>
              -
            </button>
            <span className="number">{quantity}</span>
            <button className="add" onClick={handlePlusQuantity}>
              +
            </button>
            <span className="removeText">remove</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
