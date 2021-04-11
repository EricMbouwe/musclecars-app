import * as actions from '../actions/actionTypes';

const defaultState = {
  loggedInStatus: 'NOT_LOGGED_IN',
  user: {},
};

const AppReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.SIGN_UP:
      return {
        ...state,
        loggedInStatus: 'LOGGED_IN',
        user: action.payload.user,
      };
    case actions.LOGGED_IN:
      return {};
    case actions.LOGIN:
      return {};
    case actions.LOGOUT:
      return {};
    default:
      return state;
  }
};

export default AppReducer;
