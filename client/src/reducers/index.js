import { combineReducers } from "redux";
import jobsReducer from "./jobsReducer";
import postsReducer from "./postsReducer";
import schoolsReducer from "./schoolsReducer";
import skillsReducer from "./skillsReducer";
import { reducer as formReducer } from "redux-form";
import messageReducer from "./messageReducer";
import alertReducer from "./alertReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import loadingReducer from "./loadingReducer";

export default combineReducers({
  skills: skillsReducer,
  jobs: jobsReducer,
  schools: schoolsReducer,
  posts: postsReducer,
  messages: messageReducer,
  alert: alertReducer,
  users: userReducer,
  auth: authReducer,
  loading: loadingReducer,
  form: formReducer,
});
