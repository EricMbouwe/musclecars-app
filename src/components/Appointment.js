import PropTypes from 'prop-types';
import history from '../history';
import Button from './Button';

const Appointment = ({ appointment }) => (
  <div className="mx-5">
    <img
      src={appointment?.car?.pictures[0]?.url}
      alt={appointment.city}
      width="250"
      height="200"
      className="border border-gray-300 mx-auto my-4"
    />
    <h1>{appointment.city.toUpperCase()}</h1>
    <h2>{appointment.appointment_date}</h2>
    <Button name="BACK" action={() => history.goBack()} />
  </div>
);

Appointment.propTypes = {
  appointment: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Appointment;
