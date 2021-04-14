import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import { deleteCar, getCar } from '../actions/actionCreator';

const CarDetails = ({ currentUser, isAdmin }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const carState = useSelector((state) => state.car);
  const { data: car, isPending, error } = carState;

  useEffect(() => {
    dispatch(getCar(id));
  }, []);

  return (
    <div>
      <h2>Hey Car details</h2>
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
          />
          <h1>{car.name}</h1>
          <h1>{car.price}</h1>
          <h3>{car.description}</h3>
          {isAdmin && (
            <div>
              <Link to={`/admin/cars/${id}/update`}>UPDATE CAR</Link>
              <Button
                name="DELETEBTN"
                action={deleteCar(car.id)}
              />
            </div>
          )}
          {currentUser && (
            <div>
              <Button
                name="BOOK NOW"
                action={() => alert('BOOK NOW')}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

CarDetails.propTypes = {
  currentUser: PropTypes.oneOfType([PropTypes.object]).isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

export default CarDetails;
