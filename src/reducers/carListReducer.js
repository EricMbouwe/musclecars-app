import * as actions from '../actions/actionTypes';

const defaultState = {
  isPending: false,
  data: [],
  error: '',
};

const CarListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.REQUESTING_DATA:
      return {
        ...state,
        isPending: true,
      };
    case actions.REQUESTING_FAILED:
      return {
        ...state,
        isPending: false,
        error: 'Sorry, unable to find data, retry!',
      };
    case actions.GET_CARLIST:
      return {
        ...state,
        isPending: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default CarListReducer;
