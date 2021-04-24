import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { Carousel } from 'react-responsive-carousel';
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
      {isPending && (
        <div className="car--spinner flex justify-center items-center h-96">
          <Loader type="Bars" color="#10B981" height={70} width={70} />
        </div>
      )}
      {error && <span>{error}</span>}
      {car.name && (
        <div>
          <div className="car-images-carousel">
            {car?.pictures.length > 1 ? (
              <Carousel
                autoFocus
                autoPlay={false}
                stopOnHover
                centerSlidePercentage={50}
                dynamicHeight={false}
                centerMode
                showArrows
                showIndicators
                showStatus={false}
                infiniteLoop
                transitionTime={1500}
                useKeyboardArrows
              >
                {car?.pictures.map((picture) => (
                  <img
                    key={picture.id}
                    src={picture.url}
                    alt={car.name}
                    className="border border-gray-300 mx-auto my-5"
                  />
                ))}
              </Carousel>
            ) : (
              <div className="w-6/12 mt-4 container mx-auto">
                <img
                  src={car?.pictures[0].url}
                  alt={car.name}
                  className="border border-green-100 rounded-md w-full"
                />
              </div>
            )}
          </div>

          <div className="car-details">
            <h1>{car.name}</h1>
            <h1>{car.price}</h1>
            <h3 className="my-5">{car.description}</h3>
          </div>

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
              className="my-5 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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
