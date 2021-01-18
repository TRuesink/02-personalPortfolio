import { IN_PROGRESS, COMPLETE } from "../actions/types";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case IN_PROGRESS:
      return true;
    case COMPLETE:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
