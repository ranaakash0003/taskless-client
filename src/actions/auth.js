import * as actionTypes from "../actions/actionType";
import axios from "axios";

export const register = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post("/api/users", body, config);
    dispatch({ type: actionTypes.USER_REGISTER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: actionTypes.USER_REGISTER_ERROR });
  }
};
