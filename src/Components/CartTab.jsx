import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusTab } from "../stores/cart";
import CartItem from "./CartItem";
import cartImage from "../assets/IMAGES/Group.svg";

const CartTab = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);
  return (
    <div className="cart">
      <div className="paymentCart">
        <div className="cartRow1">
          <div className="cartImg">
            <img src={cartImage} alt="" />
            <h4>There are ({totalQuantity}) items in your cart</h4>
          </div>
          <div className="p-5">
            {carts.map((item, key) => (
              <CartItem key={key} data={item} />
            ))}
          </div>
        </div>
        <div className="Order-summ">
          <div className="text colorText">Order Summary</div>
          <div className="row-sum">
            <div>EAMES DESIGNED EIFFEL DSR PLASTIC CHAIR WHITE</div>
            <div className="amount">75000</div>
          </div>
          <hr />
          <div className="row-sum">
            <div>Modern Homely Center Table - Coffee Table Home Furniture</div>
            <div className="amount">95000</div>
          </div>
          <hr />
          <div className="row-sum">
            <div>Home Sofa Q Cover Seater Stretch Elastic Chair Sofa</div>
            <div className="amount">50000</div>
          </div>
          <hr />
          <div className="row-sum-total">
            <div className="total-v">
              <div>Sub Total</div>
              <div className="amount">22000</div>
            </div>
            <div className="total-w">
              <div>Vat:</div>
              <div className="amount">200</div>
            </div>
            <div className="total-x">
              <div>Total</div>
              <div className="amount">220200</div>
            </div>
          </div>
          <div className="btnCart">
            <div className="btnCart-color">
              <button>Proceed to Payment</button>
            </div>
            <div className="btnCart-white">
              <button>Continue Shopping</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTab;
