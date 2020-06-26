//types
import {
  SET_AUTHENTICATED,
  SET_USER,
  SET_UNAUTHENTICATED,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNIN_FAIL,
  SIGNIN_START,
  SIGNIN_SUCCESS,
} from "./user-types";

const axios = require("axios");

const signInStart = () => ({ type: SIGNIN_START });
const signInSuccess = (user) => ({ type: SIGNIN_SUCCESS, payload: user });
const signInFail = (error) => ({ type: SIGNIN_FAIL, payload: error });

export const signIn = (user, history) => (dispatch) => {
  dispatch(signInStart());
  axios
    .post("/users/login", user)
    .then((res) => {
      const securumToken = `Bearer ${res.data.token}`;
      localStorage.setItem("securum", securumToken);
      axios.defaults.headers.common["Authorization"] = securumToken;
      dispatch(signInSuccess(res.data.user));
      history.push("/");
    })
    .catch((err) => dispatch(signInFail(err)));
};

export const signOut = () => (dispatch) => {
  localStorage.removeItem("securum");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
  window.location.href = "/";
};

const signUpStart = () => ({ type: SIGNUP_START });
const signUpSuccess = () => ({ type: SIGNUP_SUCCESS });
const signUpFail = (error) => ({ type: SIGNUP_FAIL, payload: error });

export const signUp = (user) => (dispatch) => {
  dispatch(signUpStart());
  axios
    .post("/users/add", user)
    .then((res) => dispatch(signUpSuccess()))
    .catch((err) => dispatch(signUpFail(err)));
};
