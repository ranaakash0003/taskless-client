import * as actionTypes from "../actions/actionType";
import { addToCart, removeFromCart } from "../actions/products";
const initialState = {
  products: [],
  cart: [],
};

export const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.GET_PRODUCT_REQUEST:
    case actionTypes.GET_PRODUCT_ERROR:
      return {
        ...state,
      };
    case actionTypes.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        products: payload,
      };

    default:
      return state;
  }
};

export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.ADD_TO_CART_REQUEST:
    case actionTypes.REMOVE_FROM_CART_REQUEST:
    case actionTypes.REMOVE_FROM_CART_ERROR:
    case actionTypes.ADD_TO_CART_ERROR:
      return {
        ...state,
      };
    case actionTypes.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        cart: addProductToCart(state.cart, payload),
      };
    case actionTypes.REMOVE_FROM_CART_SUCCESS: {
      return {
        ...state,
        cart: removeProductFromCart(state.cart, payload),
      };
    }
    case actionTypes.CLEAR_CART: {
      return {
        ...state,
        cart: [],
      };
    }
    case actionTypes.REMOVE_ITEM: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id != payload.id),
      };
    }

    default:
      return state;
  }
};

const addProductToCart = (cart, payload) => {
  let existedProduct = cart.find((item) => item.id == payload.id);
  let newCart = [...cart];
  if (existedProduct) {
    newCart = cart.map((item) => {
      if (item.id == payload.id) {
        let quantity = item.quantity + 1;
        return {
          ...item,
          quantity: quantity,
          price: quantity * payload.price,
        };
      } else {
        return {
          ...item,
        };
      }
    });
  } else {
    return [...newCart, { ...payload, quantity: 1 }];
  }
  return newCart;
};

const removeProductFromCart = (cart, payload) => {
  let existedProduct = cart.find((item) => item.id == payload.id);
  let newCart = [...cart];
  if (existedProduct) {
    if (existedProduct.quantity == 1) {
      return newCart.filter((item) => item.id != payload.id);
    }
    newCart = cart.map((item) => {
      if (item.id == payload.id) {
        let quantity = item.quantity - 1;
        return {
          ...item,
          quantity: quantity,
          price: item.price - payload.price,
        };
      } else {
        return {
          ...item,
        };
      }
    });
  } else {
    return [...newCart];
  }
  return newCart;
};
