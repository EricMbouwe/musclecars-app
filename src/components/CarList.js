import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Car from './Car';

const CarList = ({
  cars, isPending, error, dispatch, isAdmin,
}) => (
  <div>
    <h2>THE CAR LIST</h2>
    {isAdmin && (
      <button type="button">
        New car
      </button>
    )}
    {isPending && <span>Loading...</span>}
    {error && <span>{error}</span>}
    {cars
      && cars.map((car) => (
        <Link to={`cars/${car.id}`} key={car.id}><Car car={car} dispatch={dispatch} isAdmin={isAdmin} /></Link>
      ))}
  </div>
);

CarList.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object).isRequired,
  isPending: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

export default CarList;
