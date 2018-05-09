import Base64 from 'base-64';
import apiSettings from '../../config/apiSettings';
import strings from '../../config/strings';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

const loginRequest = () => ({
  type: LOGIN_REQUEST,
  isLoggingIn: true,
  isAuthenticated: false,
});

const loginSuccess = (token, status) => ({
  type: LOGIN_SUCCESS,
  token,
  status,
  isLoggingIn: false,
  isAuthenticated: true,
});

const loginFailure = (status, message) => ({
  type: LOGIN_FAILURE,
  status,
  message,
  isLoggingIn: false,
  isAuthenticated: false,
});

export const authentication = (username, password) => (dispatch) => {
  dispatch(loginRequest());

  const authenticationValue = Base64.encode(`${username}:${password}`);
  return fetch(`${apiSettings.api_url}/auth/login`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-api-key': apiSettings.api_key,
      Authorization: `Basic ${authenticationValue}`,
    },
  })
    .then(response =>
      response.json().then(json => ({
        json,
        response,
      })))
    .then(({ response, json }) => {
      if (response.ok) {
        return dispatch(loginSuccess(json, response.status));
      }
      return dispatch(loginFailure(
        response.status,
        response.status === 401 ? strings.authenticationError : strings.loginError,
      ));
    })
    .catch((erro) => {
      if (erro.message === 'Network request failed') {
        return dispatch(loginFailure(0, strings.noInternetConnection));
      }
      return dispatch(loginFailure(0, strings.unexpectedError));
    });
};
