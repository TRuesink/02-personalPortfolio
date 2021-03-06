import _ from "lodash";
import { FETCH_JOBS, IS_FETCHING_JOBS, ERROR_JOBS } from "../actions/types";

const INITIAL_STATE = {
  isFetching: false,
  data: {},
  errorMessage: "",
};

const jobsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return {
        isFetching: false,
        data: { ...state.data, ..._.mapKeys(action.payload, "_id") },
        errorMessage: "",
      };
    case IS_FETCHING_JOBS:
      return {
        isFetching: true,
        data: { ...state.data },
        errorMessage: "",
      };
    case ERROR_JOBS:
      return {
        isFetching: false,
        data: {},
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default jobsReducer;
