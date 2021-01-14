import { combineReducers } from "redux";
import jobsReducer from "./jobsReducer";
import postsReducer from "./postsReducer";
import schoolsReducer from "./schoolsReducer";
import skillsReducer from "./skillsReducer";
import { reducer as formReducer } from "redux-form";
import messageReducer from "./messageReducer";
import alertReducer from "./alertReducer";
import userReducer from "./userReducer";

export default combineReducers({
  skills: skillsReducer,
  jobs: jobsReducer,
  schools: schoolsReducer,
  posts: postsReducer,
  messages: messageReducer,
  alert: alertReducer,
  users: userReducer,
  form: formReducer,
});
