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
  FETCH_MESSAGES,
  SHOW_ALERT,
  DISMISS_ALERT,
  IS_FETCHING_USER,
  FETCH_USER,
  ERROR_USER,
  AUTH_USER,
  SIGN_OUT,
  ERROR_AUTH,
  IS_FETCHING_AUTH,
  UPDATE_MESSAGE,
  DELETE_MESSAGE,
  FETCH_USERS,
  DELETE_USER,
  FETCH_POST,
  UPDATE_POST,
  CREATE_POST,
  DELETE_POST,
  IS_FETCHING_PHOTO,
  UPLOAD_PHOTO,
  ERROR_PHOTO,
  SELECT_PHOTO,
  IS_FETCHING_COMMENTS,
  FETCH_COMMENTS,
  ERROR_COMMENTS,
  CREATE_COMMENT,
  DELETE_COMMENT,
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
      dispatch({ type: ERROR_SKILLS, payload: error.response.data.error });
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
      dispatch({ type: ERROR_JOBS, payload: error.response.data.error });
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
      dispatch({ type: ERROR_EDUCATION, payload: error.response.data.error });
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
      dispatch({ type: ERROR_POSTS, payload: error.response.data.error });
    }
  };
};

// get single Post
export const fetchPost = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_FETCHING_POSTS });
      const post = await axios.get(`/api/v1/posts/${id}`);
      dispatch({ type: FETCH_POST, payload: post.data.data });
    } catch (error) {
      dispatch({ type: ERROR_POSTS, payload: error.response.data.error });
    }
  };
};

// update Post
export const updatePost = (id, formValues) => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_FETCHING_POSTS });
      const post = await axios.put(`/api/v1/posts/${id}`, formValues);
      dispatch({ type: UPDATE_POST, payload: post.data.data });
      history.push("/admin/posts");
    } catch (error) {
      dispatch({ type: ERROR_POSTS, payload: error.response.data.error });
    }
  };
};

// create Post
export const createPost = (formValues) => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_FETCHING_POSTS });
      const post = await axios.post(`/api/v1/posts`, formValues);
      dispatch({ type: CREATE_POST, payload: post.data.data });
      history.push("/admin/posts");
    } catch (error) {
      dispatch({ type: ERROR_POSTS, payload: error.response.data.error });
    }
  };
};

// delete Post
export const deletePost = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_FETCHING_POSTS });
      await axios.delete(`/api/v1/posts/${id}`);
      dispatch({ type: DELETE_POST, payload: id });
      history.push("/admin/posts");
    } catch (error) {
      dispatch({ type: ERROR_POSTS, payload: error.response.data.error });
    }
  };
};

// --------------------- MESSAGE ACTION CREATORS ---------------------- //
// create Message
export const createMessage = (formValues) => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_FETCHING_MESSAGES });
      const message = await axios.post("/api/v1/messages", formValues);
      dispatch({ type: CREATE_MESSAGE, payload: message.data });
      dispatch(reset("contactForm"));
      history.push("/#");
    } catch (error) {
      dispatch({ type: ERROR_MESSAGES, payload: error.response.data.error });
    }
  };
};

// fetch all messages
export const fetchMessages = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_FETCHING_MESSAGES });
      const response = await axios.get("/api/v1/messages");
      dispatch({ type: FETCH_MESSAGES, payload: response.data.data });
    } catch (error) {
      dispatch({ type: ERROR_MESSAGES, payload: error.response.data.error });
    }
  };
};

// update a message
export const updateMessage = (id, value) => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_FETCHING_MESSAGES });
      const response = await axios.put(`/api/v1/messages/${id}`, {
        read: value,
      });
      dispatch({ type: UPDATE_MESSAGE, payload: response.data.data });
    } catch (error) {
      dispatch({ type: ERROR_MESSAGES, payload: error.response.data.error });
    }
  };
};

// delete a message
export const deleteMessage = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_FETCHING_MESSAGES });
      await axios.delete(`/api/v1/messages/${id}`);
      dispatch({ type: DELETE_MESSAGE, payload: id });
    } catch (error) {
      dispatch({ type: ERROR_MESSAGES, payload: error.response.data.error });
    }
  };
};

// --------------------- USER ACTION CREATORS ---------------------- //
// get a user name
export const fetchUser = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_FETCHING_USER });
      const user = await axios.get(`/api/v1/users/${id}`);
      dispatch({ type: FETCH_USER, payload: user.data.data });
    } catch (error) {
      dispatch({ type: ERROR_USER, payload: error.response.data.error });
    }
  };
};

// get a user name
export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_FETCHING_USER });
      const users = await axios.get(`/api/v1/users`);
      dispatch({ type: FETCH_USERS, payload: users.data.data });
    } catch (error) {
      dispatch({ type: ERROR_USER, payload: error.response.data.error });
    }
  };
};

// delete user
export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_FETCHING_USER });
      await axios.delete(`/api/v1/users/${id}`);
      dispatch({ type: DELETE_USER, payload: id });
    } catch (error) {
      dispatch({ type: ERROR_USER, payload: error.response.data.error });
    }
  };
};

// upload a post photo
export const uploadPhoto = (id, formData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_FETCHING_PHOTO });
      await axios.put(`/api/v1/posts/${id}/photos`, formData);
      dispatch({ type: UPLOAD_PHOTO, payload: id });
    } catch (error) {
      dispatch({ type: ERROR_PHOTO, payload: error.response.data.error });
    }
  };
};

// select photo
export const selectPhoto = (photo) => {
  return { type: SELECT_PHOTO, payload: photo };
};

// --------------------- POST & USERS ACTION CREATORS --------------- //
export const fetchPostsAndUsers = () => {
  return async (dispatch, getState) => {
    await dispatch(fetchPosts());

    const userIds = _.uniq(_.map(getState().posts.data, "user"));
    userIds.forEach((id) => dispatch(fetchUser(id)));
  };
};

// get single Post and single user
export const fetchPostAndUser = (id) => {
  return async (dispatch, getState) => {
    await dispatch(fetchPost(id));
    const userId = getState().posts.data[id].user;
    await dispatch(fetchUser(userId));
  };
};

// --------------------- AUTH ACTION CREATORS ---------------------- //
// Log in user
export const logInUser = (formValues, callback) => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_FETCHING_AUTH });
      const response = await axios.post(`/api/v1/login`, formValues);
      dispatch({ type: AUTH_USER, payload: response.data.data });
      callback();
      dispatch(reset("signInForm"));
      history.push("/");
    } catch (error) {
      dispatch({ type: ERROR_AUTH, payload: error.response.data.error });
      callback();
    }
  };
};

// get current user info
export const getMe = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_FETCHING_AUTH });
      const response = await axios.get(`/api/v1/me`);
      dispatch({ type: AUTH_USER, payload: response.data.data });
    } catch (error) {
      dispatch({ type: ERROR_AUTH, payload: error.response.data.error });
    }
  };
};

// sign out
export const signOut = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_FETCHING_AUTH });
      await axios.get(`/api/v1/logout`);
      dispatch({ type: SIGN_OUT });
      dispatch({
        type: SHOW_ALERT,
        payload: {
          type: "success",
          content: "You have signed out successfully",
        },
      });
    } catch (error) {
      dispatch({ type: ERROR_AUTH, payload: error.response.data.error });
    }
  };
};

// Register a user
export const register = (formValues, callback) => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_FETCHING_AUTH });
      const response = await axios.post(`/api/v1/register`, formValues);
      dispatch({ type: AUTH_USER, payload: response.data.data });
      callback();
      dispatch(reset("registerForm"));
      history.push("/");
    } catch (error) {
      dispatch({ type: ERROR_AUTH, payload: error.response.data.error });
      callback();
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

// --------------------- COMMENT RESOURCES ---------------------- //
// get list of Comment for Post
export const fetchComments = (postId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_FETCHING_COMMENTS });
      const comments = await axios.get(`/api/v1/posts/${postId}/comments`);
      dispatch({ type: FETCH_COMMENTS, payload: comments.data.data });
    } catch (error) {
      dispatch({ type: ERROR_COMMENTS, payload: error.response.data.error });
    }
  };
};

// fetch comments and users
export const fetchCommentsAndUsers = (postId) => {
  return async (dispatch, getState) => {
    await dispatch(fetchComments(postId));

    const userIds = _.uniq(_.map(getState().comments.data, "user"));
    userIds.forEach((user) => dispatch(fetchUser(user._id)));
  };
};

// create comment for post
export const createComment = (postId, formValues) => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_FETCHING_COMMENTS });
      const comment = await axios.post(
        `/api/v1/posts/${postId}/comments`,
        formValues
      );
      dispatch({ type: CREATE_COMMENT, payload: comment.data.data });
      dispatch(reset("commentForm"));
    } catch (error) {
      dispatch({ type: ERROR_COMMENTS, payload: error.response.data.error });
    }
  };
};

// delete comment for post
export const deleteComment = (postId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_FETCHING_COMMENTS });
      await axios.delete(`/api/v1/comments/${postId}`);
      dispatch({ type: DELETE_COMMENT, payload: postId });
    } catch (error) {
      dispatch({ type: ERROR_COMMENTS, payload: error.response.data.error });
    }
  };
};
