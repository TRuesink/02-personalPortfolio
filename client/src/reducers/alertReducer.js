import { SHOW_ALERT, DISMISS_ALERT } from "../actions/types";

const alertReducer = (state = { active: false, message: {} }, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return { active: true, message: action.payload };
    case DISMISS_ALERT:
      return { active: false, message: {} };
    default:
      return state;
  }
};

export default alertReducer;
