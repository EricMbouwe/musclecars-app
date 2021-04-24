import { combineReducers } from 'redux';
import AppReducer from './app';
import AppointmentListReducer from './AppointmentListReducer';
import CarListReducer from './carListReducer';
import CarReducer from './carReducer';

const rootReducer = combineReducers({
  app: AppReducer,
  carList: CarListReducer,
  car: CarReducer,
  appointmentList: AppointmentListReducer,
});

export default rootReducer;
