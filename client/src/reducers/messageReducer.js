import _ from "lodash";
import {
  CREATE_MESSAGE,
  IS_FETCHING_MESSAGES,
  ERROR_MESSAGES,
  FETCH_MESSAGES,
} from "../actions/types";

const INITIAL_STATE = {
  isFetching: false,
  data: {},
  errorMessage: "",
};

const messageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MESSAGES:
      return {
        isFetching: false,
        data: { ...state.data, ..._.mapKeys(action.payload, "_id") },
        errorMessage: "",
      };
    case CREATE_MESSAGE:
      return {
        isFetching: false,
        data: { ...state.data, [action.payload.id]: action.payload },
        errorMessage: "",
      };
    case IS_FETCHING_MESSAGES:
      return {
        isFetching: true,
        data: { ...state.data },
        errorMessage: "",
      };
    case ERROR_MESSAGES:
      return {
        isFetching: false,
        data: {},
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default messageReducer;
