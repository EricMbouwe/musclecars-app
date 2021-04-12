import axios from 'axios';
import * as actions from './actionTypes';
import history from '../history';

// REQUEST ACTIONS
const requestingData = () => ({ type: actions.REQUESTING_DATA });
const requestingFailed = () => ({ type: actions.REQUESTING_FAILED });
const sendingData = () => ({ type: actions.SENDING_DATA });
const sendingFailed = () => ({ type: actions.SENDING_FAILED });

// SIGNUP ACTIONS
export const receivedNewUserData = (response) => ({
  type: actions.SIGN_UP,
  payload: response.data,
});

export const addNewUser = (name, email, password) => async (dispatch) => {
  try {
    dispatch(sendingData());
    const response = await axios.post(
      'http://localhost:3001/api/v1/users',
      {
        name,
        email,
        password,
      },
      { withCredentials: true },
    );
    if (response.data.status === 'created') {
      dispatch(receivedNewUserData(response));
      history.push('/');
    }
  } catch (error) {
    dispatch(sendingFailed());
  }
};

// LOGIN ACTIONS
export const receivedSignedInUserData = (response) => ({
  type: actions.LOGIN,
  payload: response.data,
});

export const signIn = (email, password) => async (dispatch) => {
  try {
    dispatch(sendingData());
    const response = await axios.post(
      'http://localhost:3001/sessions',
      {
        email,
        password,
      },
      { withCredentials: true },
    );
    if (response.data.logged_in) {
      dispatch(receivedSignedInUserData(response));
      history.push('/');
    }
  } catch (error) {
    dispatch(sendingFailed());
  }
};

export const receivedLoggedInStatusData = (response) => ({
  type: actions.LOGGED_IN,
  payload: response.data,
});

export const checkLoggedInStatus = () => async (dispatch) => {
  try {
    dispatch(requestingData());
    const response = await axios.get('http://localhost:3001/logged_in', {
      withCredentials: true,
    });
    dispatch(receivedLoggedInStatusData(response));
  } catch (error) {
    dispatch(requestingFailed());
  }
};

// LOGOUT ACTIONS
export const receivedLogOutStatusData = (response) => ({
  type: actions.LOGOUT,
  payload: response.data,
});

export const logOut = () => async (dispatch) => {
  try {
    dispatch(sendingData());
    const response = await axios.delete('http://localhost:3001/logout', {
      withCredentials: true,
    });
    dispatch(receivedLogOutStatusData(response));
  } catch (error) {
    dispatch(sendingFailed());
  }
};
