//import _ from "lodash";
import {
  AUTH_USER,
  IS_FETCHING_AUTH,
  ERROR_AUTH,
  SIGN_OUT,
} from "../actions/types";

const INITIAL_STATE = {
  isFetching: false,
  user: { name: "init", role: "init" },
  isSignedIn: false,
  errorMessage: "",
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        isFetching: false,
        isSignedIn: true,
        user: action.payload,
        errorMessage: "",
      };
    case IS_FETCHING_AUTH:
      return {
        isFetching: true,
        isSignedIn: false,
        user: { name: "pending", role: "pending" },
        errorMessage: "",
      };
    case SIGN_OUT:
      return {
        isFetching: false,
        isSignedIn: false,
        user: { name: null, role: null },
        errorMessage: "",
      };
    case ERROR_AUTH:
      return {
        isFetching: false,
        isSignedIn: false,
        user: { name: null, role: null },
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
