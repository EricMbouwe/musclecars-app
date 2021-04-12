import PropTypes from 'prop-types';
import { deleteCar } from '../actions/actionCreator';

const Car = ({ car, dispatch, currentUser }) => (
  <div>
    <div>
      <img src={car.pictures[0].url} alt={car.name} />
    </div>
    <h1>{car.name}</h1>
    <span>{car.price}</span>
    <span>$</span>
    {currentUser.role === 'admin' && (
      <div>
        <button type="button">update</button>
        <button type="button" onClick={() => dispatch(deleteCar())}>Delete</button>
      </div>
    )}
  </div>
);

Car.propTypes = {
  car: PropTypes.oneOfType([PropTypes.object]).isRequired,
  dispatch: PropTypes.func.isRequired,
  currentUser: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Car;
