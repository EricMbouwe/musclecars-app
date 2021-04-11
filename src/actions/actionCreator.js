import axios from 'axios';
import { useHistory } from 'react-router-dom';
import * as actions from './actionTypes';

const history = useHistory();
// const requestingData = () => ({ type: actions.REQUESTING_DATA });
// const requestingFailed = () => ({ type: actions.REQUESTING_FAILED });
const sendingData = () => ({ type: actions.SENDING_DATA });
const sendingFailed = () => ({ type: actions.SENDING_FAILED });

export const receivedNewUserData = (response) => ({
  type: actions.SIGN_UP,
  payload: response.data,
});

export const addNewUser = (name, email, password) => async (dispatch) => {
  try {
    dispatch(sendingData());
    const response = await axios.post(
      'http://localhost:3000/api/v1/users',
      {
        name,
        email,
        password,
      },
      { withCredentials: true },
    );
    if (response.data.status === 'created') {
      history.push('/');
      dispatch(receivedNewUserData(response));
    }
  } catch (e) {
    dispatch(sendingFailed());
  }
};
