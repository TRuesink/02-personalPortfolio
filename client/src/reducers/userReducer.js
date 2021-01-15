//import _ from "lodash";
import { FETCH_USER, IS_FETCHING_USER, ERROR_USER } from "../actions/types";

const INITIAL_STATE = {
  isFetching: false,
  data: {},
  errorMessage: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        isFetching: false,
        data: { ...state.data, [action.payload.id]: action.payload.name },
        errorMessage: "",
      };
    case IS_FETCHING_USER:
      return {
        isFetching: true,
        data: { ...state.data },
        errorMessage: "",
      };
    case ERROR_USER:
      return {
        isFetching: false,
        data: {},
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
