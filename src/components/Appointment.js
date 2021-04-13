import PropTypes from 'prop-types';
import Button from './Button';

const Appointment = ({ appointment }) => (
  <div>
    <div>
      <img
        src={appointment.car?.pictures[0]?.url}
        alt={appointment.car.name}
        width="250"
        height="200"
      />
    </div>
    <h1>{appointment.appointment_date}</h1>
    <span>{appointment.city}</span>
    <div>
      <Button name="UPDATEBTN" action={() => alert('Update car')} />
      <Button name="DELETEBTN" action={() => alert('Delete appoint')} />
    </div>
  </div>
);

Appointment.propTypes = {
  appointment: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Appointment;
