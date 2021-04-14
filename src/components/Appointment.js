import PropTypes from 'prop-types';
import history from '../history';
import Button from './Button';

const Appointment = ({ appointment }) => (
  <div>
    <img
      src={appointment.car.pictures[0]?.url}
      alt={appointment.name}
      width="250"
      height="200"
    />
    <h1>{appointment.city.toUpperCase()}</h1>
    <h2>{appointment.appointment_date}</h2>
    <div>
      <Button name="UPDATEBTN" action={() => alert('Update car')} />
      <Button name="DELETEBTN" action={() => alert('Delete appointment')} />
    </div>
    <Button name="BACK" action={() => history.goBack()} />
  </div>
);

Appointment.propTypes = {
  appointment: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Appointment;
