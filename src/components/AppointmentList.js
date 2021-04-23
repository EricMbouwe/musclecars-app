import PropTypes from 'prop-types';
import Appointment from '../containers/Appointment';

const AppointmentList = ({
  appointments,
  isPending,
  error,
}) => (
  <div className="car-list flex flex-wrap mt-5">
    {isPending && <span>Loading...</span>}
    {error && <span>{error}</span>}
    {appointments.length === 0 && <span>You dont have any appointment</span>}
    {appointments.length > 0
      && appointments.map((appointment) => (
        <Appointment
          key={appointment.id}
          appointment={appointment}
        />
      ))}
  </div>
);

AppointmentList.propTypes = {
  appointments: PropTypes.arrayOf(PropTypes.object).isRequired,
  isPending: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

export default AppointmentList;
