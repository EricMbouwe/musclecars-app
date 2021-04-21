import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import { deleteCar, getCar } from '../actions/actionCreator';
import BookNowModal from './BookNowModal';
import DeleteModal from '../components/DeleteModal';

const CarDetails = ({ currentUser, isAdmin }) => {
  const dispatch = useDispatch();
  const carState = useSelector((state) => state.car);
  const { id } = useParams();
  const { data: car, isPending, error } = carState;
  const [open, setOpen] = useState(false);
  const [openDel, setOpenDel] = useState(false);

  useEffect(() => {
    dispatch(getCar(id));
  }, []);

  return (
    <div>
      <h2>CAR DETAILS</h2>
      {isPending && <span>Loading...</span>}
      {error && <span>{error}</span>}
      {car.status === 'AD' && <h1>You do not belong there, sign in please!</h1>}
      {car.name && (
        <div>
          <img
            src={car?.pictures[0]?.url}
            alt={car.name}
            width="250"
            height="200"
            className="border border-gray-300 mx-auto my-5"
          />
          <h1>{car.name}</h1>
          <h1>{car.price}</h1>
          <h3 className="my-5">{car.description}</h3>
          <BookNowModal
            open={open}
            setOpen={setOpen}
            dispatch={dispatch}
            carID={id}
            userID={currentUser.id}
            currCarName={car.name}
            currUserName={currentUser.name}
          />
          <DeleteModal
            open={openDel}
            setOpen={setOpenDel}
            deleteObj={deleteCar}
            id={id}
          />
          {currentUser && (
            <Button
              name="BOOK NOW"
              action={() => setOpen(true)}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            />
          )}
          {isAdmin && (
            <div className="mt-4">
              <Link
                to={`/admin/cars/${id}/update`}
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                UPDATE CAR
              </Link>
              <Button
                name="DELETEBTN"
                action={() => setOpenDel(true)}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

CarDetails.defaultProps = {
  currentUser: null,
};

CarDetails.propTypes = {
  currentUser: PropTypes.oneOfType([PropTypes.object]),
  isAdmin: PropTypes.bool.isRequired,
};

export default CarDetails;
