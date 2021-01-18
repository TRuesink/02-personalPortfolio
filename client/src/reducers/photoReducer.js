import { UPLOAD_PHOTO, IS_FETCHING_PHOTO, ERROR_PHOTO } from "../actions/types";

const photoReducer = (
  state = { isFetching: false, errorMessage: "" },
  action
) => {
  switch (action.type) {
    case UPLOAD_PHOTO:
      return {
        isFetching: false,
        errorMessage: "",
      };
    case IS_FETCHING_PHOTO:
      return {
        isFetching: true,
        errorMessage: "",
      };
    case ERROR_PHOTO:
      return {
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default photoReducer;
