import { combineReducers } from "redux";
import jobsReducer from "./jobsReducer";
import skillsReducer from "./skillsReducer";

export default combineReducers({
  skills: skillsReducer,
  jobs: jobsReducer,
});
