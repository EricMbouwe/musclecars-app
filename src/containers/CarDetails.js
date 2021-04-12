import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import { deleteCar, getCar } from '../actions/actionCreator';

const CarDetails = () => {
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
      {car.name && (
        <div>
          <img src={car?.pictures[0]?.url} alt={car.name} width="250" height="200" />
          <h1>{car.name}</h1>
          <h1>{car.price}</h1>
          <h3>{car.description}</h3>
          <button type="button" onClick={() => dispatch(deleteCar(id))}>
            delete car
          </button>
        </div>
      )}
    </div>
  );
};

export default CarDetails;
