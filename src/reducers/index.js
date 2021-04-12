import { combineReducers } from 'redux';
import AppReducer from './app';
import CarListReducer from './carListReducer';

const rootReducer = combineReducers({
  app: AppReducer,
  carList: CarListReducer,
});

export default rootReducer;
