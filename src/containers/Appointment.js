import PropTypes from 'prop-types';
import { useState } from 'react';
import { deleteAppointment } from '../actions/actionCreator';
import Button from '../components/Button';
import DeleteModal from '../components/DeleteModal';

const Appointment = ({ appointment }) => {
  const [openDel, setOpenDel] = useState(false);

  return (
    <div className="mx-5">
      <img
        src={appointment.car?.pictures[0]?.url}
        alt={appointment.city}
        width="250"
        height="200"
        className="border border-gray-300 mx-auto my-4"
      />
      <h3>{appointment.car?.name}</h3>
      <h1>{appointment.city.toUpperCase()}</h1>
      <h2>{appointment.appointment_date}</h2>
      <DeleteModal
        open={openDel}
        setOpen={setOpenDel}
        deleteObj={deleteAppointment}
        id={appointment?.id?.toString()}
      />
      <Button
        name="DELETEBTN"
        action={() => setOpenDel(true)}
        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
      />
    </div>
  );
};

Appointment.propTypes = {
  appointment: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Appointment;
