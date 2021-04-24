import PropTypes from 'prop-types';
import { useState } from 'react';
import { deleteAppointment } from '../actions/actionCreator';
import Button from '../components/Button';
import DeleteModal from '../components/DeleteModal';

const Appointment = ({ appointment }) => {
  const [openDel, setOpenDel] = useState(false);

  return (
    <div className="border border-gray-200 w-3/12 rounded my-1">
      <div className="image w-full h-60">
        <img
          src={appointment.car?.pictures[0]?.url}
          alt={appointment.city}
          className="border border-gray-300 w-full h-full object-cover"
        />
      </div>
      <div className="details mt-4">
        <h3 className="text-xl uppercase text-gray-400 font-extrabold py-1">
          {appointment.car?.name}
        </h3>
        <h1 className="text-sm text-gray-400 font-bold py-1">
          {appointment.city.toUpperCase()}
        </h1>
        <h2 className="text-sm text-gray-400 font-bold py-1">
          {appointment.appointment_date}
        </h2>
      </div>
      <DeleteModal
        open={openDel}
        setOpen={setOpenDel}
        deleteObj={deleteAppointment}
        id={appointment?.id?.toString()}
      />
      <Button
        name="DELETE"
        action={() => setOpenDel(true)}
        className="my-4 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
      />
    </div>
  );
};

Appointment.propTypes = {
  appointment: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Appointment;
