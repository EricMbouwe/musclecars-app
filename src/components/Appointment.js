import PropTypes from 'prop-types';

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
      <button type="button">update</button>
      <button type="button">Delete</button>
    </div>
  </div>
);

Appointment.propTypes = {
  appointment: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Appointment;
