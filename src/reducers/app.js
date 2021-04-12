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
      if (action.payload.logged_in && state.loggedInStatus === 'NOT_LOGGED_IN') {
        return {
          ...state,
          loggedInStatus: 'LOGGED_IN',
          user: action.payload.user,
        };
      }
      if (!action.payload.logged_in && state.loggedInStatus === 'LOGGED_IN') {
        return {
          ...state,
          loggedInStatus: 'NOT_LOGGED_IN',
          user: {},
        };
      }
      break;
    case actions.LOGIN:
      return {
        ...state,
        loggedInStatus: 'LOGGED_IN',
        user: action.payload.user,
      };
    case actions.LOGOUT:
      return {
        ...state,
        loggedInStatus: 'NOT_LOGGED_IN',
        user: {},
      };
    default:
      return state;
  }
  return state;
};

export default AppReducer;
