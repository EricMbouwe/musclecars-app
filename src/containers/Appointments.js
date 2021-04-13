import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import AppointmentList from '../components/AppointmentList';
import { getAppointmentList } from '../actions/actionCreator';

const Appointments = ({ currentUser }) => {
  const dispatch = useDispatch;
  const appointmentListState = useSelector((state) => state.appointmentList);
  const { data, isPending, error } = appointmentListState;

  useEffect(() => {
    dispatch(getAppointmentList(currentUser.id));
  }, []);

  return (
    <div>
      <AppointmentList
        appointments={data}
        isPending={isPending}
        error={error}
      />
    </div>
  );
};

Appointments.propTypes = {
  currentUser: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Appointments;
