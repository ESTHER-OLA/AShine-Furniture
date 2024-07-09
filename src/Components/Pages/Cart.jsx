import React from "react";
import cartImage from "../../assets/images/Group.svg";
import star from "../../assets/images/Group 1045.png";
import cardImg from "../../assets/images/Rectangle 100.png";
import iconRemove from "../../assets/images/icon-remove.svg";
import iconAdd from "../../assets/images/icon-add.svg";

const Cart = () => {
  return (
    <div className="cart">
      <div className="paymentCart">
        <div className="cartRow1">
          <div className="cartImg">
            <img src={cartImage} alt="" />
            <h4>There are three(3) items in your cart</h4>
          </div>
          <div className="cardGrid">
            <div className="card-flex">
              <div className="colImg">
                <img src={cardImg} alt="" />
              </div>
              <div className="gridCartText">
                <div className="colText">
                  EAMES DESIGNED EIFFEL DSR PLASTIC CHAIR WHITE
                </div>
                <div>
                  <img src={star} alt="" />
                </div>
                <div className="cardAdd">
                  <div className="remove">
                    <img src={iconRemove} alt="" />
                  </div>
                  <div className="number">1</div>
                  <div className="add">
                    <img src={iconAdd} alt="" />
                  </div>
                  <div className="removeText">remove</div>
                </div>
              </div>
            </div>

            <div className="card-flex">
              <div className="colImg">
                <img src={cardImg} alt="" />
              </div>
              <div className="gridCartText">
                <div className="colText">
                  EAMES DESIGNED EIFFEL DSR PLASTIC CHAIR WHITE
                </div>
                <div>
                  <img src={star} alt="" />
                </div>
                <div className="cardAdd">
                  <div className="remove">
                    <img src={iconRemove} alt="" />
                  </div>
                  <div className="number">1</div>
                  <div className="add">
                    <img src={iconAdd} alt="" />
                  </div>
                  <div className="removeText">remove</div>
                </div>
              </div>
            </div>

            <div className="card-flex">
              <div className="colImg">
                <img src={cardImg} alt="" />
              </div>
              <div className="gridCartText">
                <div className="colText">
                  EAMES DESIGNED EIFFEL DSR PLASTIC CHAIR WHITE
                </div>
                <div>
                  <img src={star} alt="" />
                </div>
                <div className="cardAdd">
                  <div className="remove">
                    <img src={iconRemove} alt="" />
                  </div>
                  <div className="number">1</div>
                  <div className="add">
                    <img src={iconAdd} alt="" />
                  </div>
                  <div className="removeText">remove</div>
                </div>
              </div>
            </div>
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

export default Cart;
