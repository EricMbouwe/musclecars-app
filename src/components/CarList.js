import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Car from './Car';

const CarList = ({
  cars, isPending, error, dispatch, currentUser,
}) => (
  <div>
    <h2>THE CAR LIST</h2>
    {isPending && <span>Loading...</span>}
    {error && <span>{error}</span>}
    {cars
      && cars.map((car) => (
        <Link to={`cars/${car.id}`} key={car.id}><Car car={car} dispatch={dispatch} currentUser={currentUser} /></Link>
      ))}
    {currentUser.role === 'admin' && (
    <div>
      <button type="button">
        New car
      </button>
    </div>
    )}
  </div>
);

CarList.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object).isRequired,
  isPending: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  currentUser: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default CarList;
