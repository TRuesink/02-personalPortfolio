import _ from "lodash";
import {
  CREATE_COMMENT,
  IS_FETCHING_COMMENTS,
  ERROR_COMMENTS,
  FETCH_COMMENTS,
  DELETE_COMMENT,
} from "../actions/types";

const INITIAL_STATE = {
  isFetching: false,
  data: {},
  errorMessage: "",
};

const commentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        isFetching: false,
        data: { ...state.data, ..._.mapKeys(action.payload, "_id") },
        errorMessage: "",
      };
    case CREATE_COMMENT:
      return {
        isFetching: false,
        data: { ...state.data, [action.payload.id]: action.payload },
        errorMessage: "",
      };
    case IS_FETCHING_COMMENTS:
      return {
        isFetching: true,
        data: { ...state.data },
        errorMessage: "",
      };
    case DELETE_COMMENT:
      return {
        isFetching: false,
        data: _.omit(state.data, action.payload),
        errorMessage: "",
      };
    case ERROR_COMMENTS:
      return {
        isFetching: false,
        data: {},
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default commentReducer;
