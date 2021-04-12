import PropTypes from 'prop-types';
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
        <Car key={car.id} car={car} dispatch={dispatch} currentUser={currentUser} />
      ))}
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
