import { combineReducers } from "redux";
import jobsReducer from "./jobsReducer";
import schoolsReducer from "./schoolsReducer";
import skillsReducer from "./skillsReducer";

export default combineReducers({
  skills: skillsReducer,
  jobs: jobsReducer,
  schools: schoolsReducer,
});
