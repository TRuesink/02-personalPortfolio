import _ from "lodash";
import {
  FETCH_POSTS,
  IS_FETCHING_POSTS,
  ERROR_POSTS,
  FETCH_POST,
  UPDATE_POST,
  CREATE_POST,
  DELETE_POST,
} from "../actions/types";

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
    case FETCH_POST:
      return {
        isFetching: false,
        data: { ...state.data, [action.payload._id]: action.payload },
        errorMessage: "",
      };
    case UPDATE_POST:
      return {
        isFetching: false,
        data: { ...state.data, [action.payload._id]: action.payload },
        errorMessage: "",
      };
    case CREATE_POST:
      return {
        isFetching: false,
        data: { ...state.data, [action.payload._id]: action.payload },
        errorMessage: "",
      };
    case DELETE_POST:
      return {
        isFetching: false,
        data: _.omit(state.data, action.payload),
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
