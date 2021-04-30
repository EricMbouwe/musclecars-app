import * as actions from '../actions/actionTypes';

const defaultState = {
  loggedInStatus: 'NOT_LOGGED_IN',
  user: {},
};

const AppReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.SIGN_UP:
      localStorage.setItem(
        'user',
        JSON.stringify({
          id: action.payload.user.id,
          name: action.payload.user.name,
          role: action.payload.user.role,
        }),
      );
      localStorage.setItem('loggedStatus', 'LOGGED_IN');
      return {
        ...state,
        loggedInStatus: 'LOGGED_IN',
        user: action.payload.user,
      };
    case actions.LOGGED_IN:
      if (action.payload.logged_in) {
        localStorage.setItem(
          'user',
          JSON.stringify({
            id: action.payload?.user.id,
            name: action.payload?.user.name,
            role: action.payload?.user.role,
          }),
        );
        localStorage.setItem('loggedStatus', 'LOGGED_IN');
      }
      return {
        ...state,
        loggedInStatus: action.payload.logged_in
          ? 'LOGGED_IN'
          : 'NOT_LOGGED_IN',
        user: action.payload.logged_in ? action.payload.user : {},
      };
    case actions.LOGIN:
      localStorage.setItem(
        'user',
        JSON.stringify({
          id: action.payload.user.id,
          name: action.payload.user.name,
          role: action.payload.user.role,
        }),
      );
      localStorage.setItem('loggedStatus', 'LOGGED_IN');
      return {
        ...state,
        loggedInStatus: 'LOGGED_IN',
        user: action.payload.user,
      };
    case actions.LOGOUT:
      localStorage.clear();
      return {
        ...state,
        loggedInStatus: 'NOT_LOGGED_IN',
        user: {},
      };
    default:
      return state;
  }
};

export default AppReducer;
