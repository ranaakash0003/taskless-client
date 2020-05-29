import axios from "axios";
import * as actionTypes from "./actionType";

const baseUrl = "https://taskless-server.herokuapp.com";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_PRODUCT_REQUEST,
    });
    let res = await axios.get(`${baseUrl}/products`);

    dispatch({
      type: actionTypes.GET_PRODUCT_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_ERROR,
    });
  }
};

export const addToCart = (id, image, productName, price) => async (
  dispatch
) => {
  try {
    const data = {
      id,
      image,
      productName,
      price,
    };
    dispatch({ type: actionTypes.ADD_TO_CART_REQUEST });
    dispatch({ type: actionTypes.ADD_TO_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.ADD_TO_CART_ERROR });
  }
};

export const removeFromCart = (id, productName, price) => async (dispatch) => {
  try {
    const data = {
      id,
      productName,
      price,
    };
    dispatch({ type: actionTypes.REMOVE_FROM_CART_REQUEST });
    dispatch({ type: actionTypes.REMOVE_FROM_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.REMOVE_FROM_CART_ERROR });
  }
};

export const placeOrder = (cart) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.PLACE_ORDER_REQUEST });
    let orderList = cart.map((item) => ({
      id: item.id,
      quantity: item.quantity,
    }));

    let res = await axios.post(`${baseUrl}/order`, { orderList });
    dispatch({ type: actionTypes.PLACE_ORDER_SUCCESS });
    dispatch({ type: actionTypes.CLEAR_CART });
  } catch (error) {}
};
