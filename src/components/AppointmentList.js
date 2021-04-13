import PropTypes from 'prop-types';
import Appointment from './Appointment';

const AppointmentList = ({ appointments, isPending, error }) => (
  <div>
    <h2>MY APPOINTMENTS LIST</h2>
    {isPending && <span>Loading...</span>}
    {error && <span>{error}</span>}
    {appointments
      && appointments.map((appointment) => (
        <Appointment key={appointment.id} appointment={appointment} />
      ))}
  </div>
);

AppointmentList.propTypes = {
  appointments: PropTypes.arrayOf(PropTypes.object).isRequired,
  isPending: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

export default AppointmentList;
