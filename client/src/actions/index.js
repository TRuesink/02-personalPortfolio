import axios from "axios";
import { reset } from "redux-form";
import history from "../history";
import _ from "lodash";
import {
  FETCH_SKILLS,
  IS_FETCHING_SKILLS,
  ERROR_SKILLS,
  FETCH_JOBS,
  IS_FETCHING_JOBS,
  ERROR_JOBS,
  FETCH_EDUCATION,
  IS_FETCHING_EDUCATION,
  ERROR_EDUCATION,
  FETCH_POSTS,
  IS_FETCHING_POSTS,
  ERROR_POSTS,
  IS_FETCHING_MESSAGES,
  CREATE_MESSAGE,
  ERROR_MESSAGES,
  SHOW_ALERT,
  DISMISS_ALERT,
} from "./types";

// --------------------- RESUME RESOURCES ---------------------- //

// Skills
export const fetchSkills = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_FETCHING_SKILLS });
      const skills = await axios.get("/api/v1/resume/skills");
      dispatch({ type: FETCH_SKILLS, payload: skills.data.data });
    } catch (error) {
      console.log(error.response);
      if (!error.response.message) {
        return dispatch({ type: ERROR_SKILLS, payload: error.response.data });
      }
      dispatch({ type: ERROR_SKILLS, payload: error.response.message });
    }
  };
};

// Jobs
export const fetchJobs = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_FETCHING_JOBS });
      const jobs = await axios.get("/api/v1/resume/jobs");
      dispatch({ type: FETCH_JOBS, payload: jobs.data.data });
    } catch (error) {
      if (!error.response.message) {
        return dispatch({ type: ERROR_JOBS, payload: error.response.data });
      }
      dispatch({ type: ERROR_JOBS, payload: error.response.message });
    }
  };
};

// Education
export const fetchEducation = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_FETCHING_EDUCATION });
      const education = await axios.get("/api/v1/resume/education");
      dispatch({ type: FETCH_EDUCATION, payload: education.data.data });
    } catch (error) {
      if (!error.response.message) {
        return dispatch({
          type: ERROR_EDUCATION,
          payload: error.response.data,
        });
      }
      dispatch({ type: ERROR_EDUCATION, payload: error.response.message });
    }
  };
};

// --------------------- POST RESOURCES ---------------------- //
// get list of Posts
export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_FETCHING_POSTS });
      const posts = await axios.get("/api/v1/posts");
      dispatch({ type: FETCH_POSTS, payload: posts.data.data });
    } catch (error) {
      if (!error.response.message) {
        return dispatch({
          type: ERROR_POSTS,
          payload: error.response.data,
        });
      }
      dispatch({ type: ERROR_POSTS, payload: error.response.message });
    }
  };
};

// --------------------- MESSAGE RESOURCES ---------------------- //
// create Message
export const createMessage = (formValues) => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_FETCHING_MESSAGES });
      const message = await axios.post("/api/v1/messages", formValues);
      dispatch({ type: CREATE_MESSAGE, payload: message.data });
      dispatch(reset("contactForm"));
      history.push("/");
    } catch (error) {
      if (!error.response.message) {
        return dispatch({
          type: ERROR_MESSAGES,
          payload: error.response.data,
        });
      }
      dispatch({ type: ERROR_MESSAGES, payload: error.response.message });
    }
  };
};

// --------------------- ALERT ACTION CREATORS ---------------------- //
// show alert
export const showAlert = (message) => {
  return { type: SHOW_ALERT, payload: message };
};

// dismess alert
export const dismissAlert = () => {
  return { type: DISMISS_ALERT };
};
