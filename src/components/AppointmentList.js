import PropTypes from 'prop-types';
import Appointment from './Appointment';

const AppointmentList = ({
  appointments,
  isPending,
  error,
  dispatch,
  isAdmin,
}) => (
  <div>
    <h2>THE APPOINTMENTS LIST</h2>
    {isPending && <span>Loading...</span>}
    {error && <span>{error}</span>}
    {appointments.length > 0
      && appointments.map((appointment) => (
        <Appointment
          key={appointment.id}
          appointment={appointment}
          dispatch={dispatch}
          isAdmin={isAdmin}
        />
      ))}
  </div>
);

AppointmentList.propTypes = {
  appointments: PropTypes.arrayOf(PropTypes.object).isRequired,
  isPending: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

export default AppointmentList;
