import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import AppointmentList from '../components/AppointmentList';
import { getAppointmentList } from '../actions/actionCreator';
import history from '../history';
import Button from '../components/Button';

const Appointments = ({ currentUser }) => {
  const dispatch = useDispatch();
  const appointmentListState = useSelector((state) => state.appointmentList);
  const { data, isPending, error } = appointmentListState;

  useEffect(() => {
    dispatch(getAppointmentList(currentUser.id));
  }, []);

  return (
    <div>
      <h2 className="my-5">MY APPOINTMENTS LIST</h2>
      <AppointmentList
        appointments={data}
        isPending={isPending}
        error={error}
      />
      <Button name="BACK" action={() => history.goBack()} />
    </div>
  );
};

Appointments.propTypes = {
  currentUser: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Appointments;
