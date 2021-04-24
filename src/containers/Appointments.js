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
      <AppointmentList
        appointments={data}
        isPending={isPending}
        error={error}
      />
      <Button
        name="BACK"
        action={() => history.goBack()}
        className="my-5 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
      />
    </div>
  );
};

Appointments.defaultProps = {
  currentUser: null,
};

Appointments.propTypes = {
  currentUser: PropTypes.oneOfType([PropTypes.object]),
};

export default Appointments;
