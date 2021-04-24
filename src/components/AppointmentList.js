import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import Appointment from '../containers/Appointment';

const AppointmentList = ({ appointments, isPending, error }) => (
  <div className="appontment-list mt-5 md:container md:mx-auto">
    {isPending && (
      <div className="appointment--spinner flex justify-center items-center h-96">
        <Loader type="Bars" color="#10B981" height={70} width={70} />
      </div>
    )}
    {error && <span>{error}</span>}
    {appointments.length === 0 && <span>You dont have any appointment</span>}
    <div className="applist flex flex-wrap">
      {appointments.length > 0
        && appointments.map((appointment) => (
          <Appointment key={appointment.id} appointment={appointment} />
        ))}
    </div>
  </div>
);

AppointmentList.propTypes = {
  appointments: PropTypes.arrayOf(PropTypes.object).isRequired,
  isPending: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

export default AppointmentList;
