import _ from "lodash";
import { FETCH_POSTS, IS_FETCHING_POSTS, ERROR_POSTS } from "../actions/types";

const INITIAL_STATE = {
  isFetching: false,
  data: {},
  errorMessage: "",
};

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        isFetching: false,
        data: { ...state.data, ..._.mapKeys(action.payload, "_id") },
        errorMessage: "",
      };
    case IS_FETCHING_POSTS:
      return {
        isFetching: true,
        data: { ...state.data },
        errorMessage: "",
      };
    case ERROR_POSTS:
      return {
        isFetching: false,
        data: {},
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
