//types
import {
  SET_USER,
  SIGNUP_FAIL,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SIGNIN_FAIL,
  SIGNIN_START,
  SIGNIN_SUCCESS,
} from "../actions/user-types";

const INITIAL_STATE = {
  currentUser: null,
  users: [],
  autheniticated: false,
  loading: false,
  error: null,
  success: null,
  signInError: null,
  signInSuccess: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return setUser(state, action);
    case SIGNUP_START:
      return { ...state, loading: true };
    case SIGNUP_SUCCESS:
      return { ...state, loading: false, success: true };
    case SIGNUP_FAIL:
      return { ...state, loading: false, error: action.payload };
    case SIGNIN_START:
      return { ...state, loading: true };
    case SIGNIN_SUCCESS:
      return signInSuccess(state, action.payload);
    case SIGNIN_FAIL:
      return { ...state, loading: false, signInError: action.payload };
    case SET_AUTHENTICATED:
      return { ...state, autheniticated: true };
    case SET_UNAUTHENTICATED:
      return { ...state, autheniticated: false };
    default:
      return state;
  }
};

export default userReducer;

const setUser = (state, action) => {
  return {
    ...state,
    currentUser: action.user,
  };
};

const signInSuccess = (state, payload) => {
  return {
    ...state,
    loading: false,
    autheniticated: true,
    currentUser: payload,
    signInSuccess: true,
  };
};
