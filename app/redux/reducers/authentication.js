import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS
} from "../actions/authentication";

const initialState = {
  isAuthenticated: false,
  status: null,
  message: null,
  isLoggingIn: false,
  token: null,
  username: null,
  password: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isLoggingIn: action.isLoggingIn,
        isAuthenticated: action.isAuthenticated
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isLoggingIn: action.isLoggingIn,
        isAuthenticated: action.isAuthenticated,
        status: action.status,
        message: action.message
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoggingIn: action.isLoggingIn,
        isAuthenticated: action.isAuthenticated,
        token: action.token,
        status: action.status
      });
    default:
      return state;
  }
};

export default reducer;
