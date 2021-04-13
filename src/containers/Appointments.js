import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import AppointmentList from '../components/AppointmentList';
import { getAppointmentList } from '../actions/actionCreator';

const Appointments = ({ currentUser, isAdmin }) => {
  const dispatch = useDispatch;
  const appointmentListState = useSelector((state) => state.appointmentList);
  const { data: appointments, isPending, error } = appointmentListState;

  useEffect(() => {
    dispatch(getAppointmentList(currentUser.id));
  }, []);

  return (
    <div>
      <AppointmentList
        appointments={appointments}
        isPending={isPending}
        error={error}
        dispatch={dispatch}
        isAdmin={isAdmin}
        currentUser={currentUser}
      />
    </div>
  );
};

Appointments.propTypes = {
  currentUser: PropTypes.oneOfType([PropTypes.object]).isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

export default Appointments;
