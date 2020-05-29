import React from "react";
import {
  IoMdAddCircle,
  IoIosRemoveCircle,
  IoMdBackspace,
  IoMdTrash,
} from "react-icons/io";
import { IconContext } from "react-icons";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../actions/products";
import * as actionTypes from "../../actions/actionType";

import "./cart.css";

const Cart = () => {
  let dispatch = useDispatch();

  const { cart } = useSelector((state) => ({
    cart: state.cartList.cart,
  }));

  // let orderList = cart.map(i => i.id)
  console.log("Ssssss", cart);
  const addItem = (id, productName, price) => {
    dispatch(actions.addToCart(id, productName, price));
  };

  const removeItem = (id, productName, price) => {
    dispatch(actions.removeFromCart(id, productName, price));
    console.log("rrrrrr", id, productName, price);
  };
  const handleSubmit = () => {
    dispatch(actions.placeOrder(cart));
    alert("Order placed succesfully");
  };
  const totalPrice = cart.reduce((totalPrice, currentItem) => {
    return totalPrice + currentItem.price;
  }, 0);

  const handleRemove = (id) => {
    dispatch({ type: actionTypes.REMOVE_ITEM, payload: { id } });
  };

  return (
    <div className="cart-section">
      <div className="cart-container">
        <div className="cart-title">
          <h5>Your Cart</h5>
          <IconContext.Provider value={{ color: "#ed4040", size: "1.5em" }}>
            <IoMdTrash
              className="clear-cart"
              onClick={() => dispatch({ type: actionTypes.CLEAR_CART })}
            />
          </IconContext.Provider>
        </div>
        {cart.map((item) => {
          return (
            <div className="cart-content" key={item.id}>
              <div className="cart-img">
                <img src={item.image ? item.image : "noimage.png"} alt="img" />
              </div>
              <h6>{item.productName}</h6>
              <div className="count">
                <IconContext.Provider value={{ color: "#ff7e75" }}>
                  <IoIosRemoveCircle
                    className="clear-cart"
                    onClick={() =>
                      removeItem(
                        item.id,
                        item.productName,
                        item.price / item.quantity
                      )
                    }
                  />
                  <span>{item.quantity}</span>
                  <IoMdAddCircle
                    className="clear-cart"
                    onClick={() =>
                      addItem(
                        item.id,
                        item.productName,
                        item.price / item.quantity
                      )
                    }
                  />
                </IconContext.Provider>
              </div>
              <h6>৳{item.price}</h6>
              <IconContext.Provider value={{ color: "#F44336" }}>
                <IoMdBackspace onClick={(e) => handleRemove(item.id)} />{" "}
              </IconContext.Provider>
            </div>
          );
        })}
      </div>
      <div className="cart-order">
        <button className="order-btn" onClick={handleSubmit}>
          Place Order
        </button>
        <h5>Grand Total: ৳{totalPrice}</h5>
      </div>
    </div>
  );
};

export default Cart;
