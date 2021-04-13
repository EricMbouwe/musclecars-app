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

// CAR LIST ACTIONS
export const receivedCarListData = (response) => ({
  type: actions.GET_CARLIST,
  payload: response.data,
});

export const getCarList = () => async (dispatch) => {
  try {
    dispatch(requestingData());
    const response = await axios.get('http://localhost:3001/api/v1/cars', {
      withCredentials: true,
    });
    dispatch(receivedCarListData(response));
  } catch (error) {
    dispatch(requestingFailed());
  }
};

// CAR ACTIONS
export const receivedCarData = (response) => ({
  type: actions.GET_CAR,
  payload: response.data,
});

export const getCar = (id) => async (dispatch) => {
  try {
    dispatch(requestingData());
    const response = await axios.get(
      `http://localhost:3001/api/v1/cars/${id}`,
      {
        withCredentials: true,
      },
    );
    dispatch(receivedCarData(response));
  } catch (error) {
    dispatch(requestingFailed());
  }
};

export const deleteCar = (id) => async (dispatch) => {
  try {
    dispatch(sendingData());
    const response = await axios.delete(
      `http://localhost:3001/admin/cars/${id}`,
      { withCredentials: true },
    );
    dispatch(getCarList(response));
    history.push('/');
  } catch (error) {
    dispatch(sendingFailed());
  }
};

// APPOINTMENTS ACTIONS
export const receivedAppointmentListData = (response) => ({
  type: actions.GET_APPOINTMENTLIST,
  payload: response.data,
});

export const getAppointmentList = (id) => async (dispatch) => {
  try {
    dispatch(requestingData());
    const response = await axios.get(
      `http://localhost:3001/api/v1/users/${id}/appointments`,
      { withCredentials: true },
    );
    dispatch(receivedAppointmentListData(response));
  } catch (error) {
    dispatch(requestingFailed());
  }
};
