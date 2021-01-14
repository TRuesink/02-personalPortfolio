import _ from "lodash";
import { AUTH_USER, IS_FETCHING_AUTH, ERROR_AUTH } from "../actions/types";

const INITIAL_STATE = {
  isFetching: false,
  token: "",
  errorMessage: "",
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        isFetching: false,
        token: action.payload,
        errorMessage: "",
      };
    case IS_FETCHING_AUTH:
      return {
        isFetching: true,
        token: "",
        errorMessage: "",
      };
    case ERROR_AUTH:
      return {
        isFetching: false,
        token: "",
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
