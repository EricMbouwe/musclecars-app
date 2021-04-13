import PropTypes from 'prop-types';
import { deleteCar } from '../actions/actionCreator';
import Button from './Button';

const Car = ({ car, dispatch, isAdmin }) => (
  <div>
    <div>
      <img src={car?.pictures[0]?.url} alt={car.name} width="250" height="200" />
    </div>
    <h1>{car.name}</h1>
    <span>{car.price}</span>
    <span>$</span>
    {isAdmin && (
      <div>
        <button type="button">update</button>
        <button type="button" onClick={() => dispatch(deleteCar(car.id))}>Delete</button>
        <Button dispatch={dispatch} name="deleteBTN" action={deleteCar(car.id)} />
      </div>
    )}
  </div>
);

Car.propTypes = {
  car: PropTypes.oneOfType([PropTypes.object]).isRequired,
  dispatch: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

export default Car;
