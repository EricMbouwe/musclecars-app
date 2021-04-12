import { combineReducers } from 'redux';
import AppReducer from './app';
import CarListReducer from './carListReducer';
import CarReducer from './carReducer';

const rootReducer = combineReducers({
  app: AppReducer,
  carList: CarListReducer,
  car: CarReducer,
});

export default rootReducer;
