import * as actionTypes from "../actions/actionType";
const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  user: null,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.USER_REGISTER_REQUEST:
      return {
        ...state,
      };
    case actionTypes.USER_LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
      };
    case actionTypes.USER_REGISTER_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};
