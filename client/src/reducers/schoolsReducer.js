import _ from "lodash";
import {
  FETCH_EDUCATION,
  IS_FETCHING_EDUCATION,
  ERROR_EDUCATION,
} from "../actions/types";

const INITIAL_STATE = {
  isFetching: false,
  data: {},
  errorMessage: "",
};

const schoolsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_EDUCATION:
      return {
        isFetching: false,
        data: { ...state.data, ..._.mapKeys(action.payload, "_id") },
        errorMessage: "",
      };
    case IS_FETCHING_EDUCATION:
      return {
        isFetching: true,
        data: { ...state.data },
        errorMessage: "",
      };
    case ERROR_EDUCATION:
      return {
        isFetching: false,
        data: {},
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default schoolsReducer;
