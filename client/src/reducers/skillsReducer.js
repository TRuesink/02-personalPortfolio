import _ from "lodash";
import {
  FETCH_SKILLS,
  IS_FETCHING_SKILLS,
  ERROR_SKILLS,
} from "../actions/types";

const INITIAL_STATE = {
  isFetching: false,
  data: {},
  errorMessage: "",
};

const skillsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SKILLS:
      return {
        isFetching: false,
        data: { ...state.data, ..._.mapKeys(action.payload, "_id") },
        errorMessage: "",
      };
    case IS_FETCHING_SKILLS:
      return {
        isFetching: true,
        data: { ...state.data },
        errorMessage: "",
      };
    case ERROR_SKILLS:
      return {
        isFetching: false,
        data: {},
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default skillsReducer;
