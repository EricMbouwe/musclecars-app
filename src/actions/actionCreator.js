import axios from 'axios';
import * as actions from './actionTypes';

// REQUEST ACTIONS
// const requestingData = () => ({ type: actions.REQUESTING_DATA });
// const requestingFailed = () => ({ type: actions.REQUESTING_FAILED });
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
      console.log('user is', response.data);
      dispatch(receivedNewUserData(response));
    }
  } catch (error) {
    console.log('Regsitration Errors', error.message);
    dispatch(sendingFailed());
  }
};
