import { combineReducers } from "redux";
import { productReducer, cartReducer } from "./products";

export default combineReducers({
  productList: productReducer,
  cartList: cartReducer,
});
