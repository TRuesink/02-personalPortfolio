import _ from "lodash";
import {
  FETCH_USER,
  IS_FETCHING_USER,
  ERROR_USER,
  FETCH_USERS,
  DELETE_USER,
} from "../actions/types";

const INITIAL_STATE = {
  isFetching: false,
  data: {},
  errorMessage: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        isFetching: false,
        data: { ...state.data, ..._.mapKeys(action.payload, "_id") },
        errorMessage: "",
      };
    case DELETE_USER:
      return {
        isFetching: false,
        data: _.omit(state.data, action.payload),
        errorMessage: "",
      };
    case FETCH_USER:
      return {
        isFetching: false,
        data: { ...state.data, [action.payload._id]: action.payload },
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
