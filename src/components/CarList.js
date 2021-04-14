import PropTypes from 'prop-types';
import Car from './Car';

const CarList = ({
  cars, isPending, error, isAdmin,
}) => (
  <div>
    <h2>THE CAR LIST</h2>
    {isAdmin && <button type="button">ADMIN USER</button>}
    {isPending && <span>Loading...</span>}
    {error && <span>{error}</span>}
    {cars
      && cars.map((car) => <Car key={car.id} car={car} isAdmin={isAdmin} />)}
  </div>
);

CarList.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object).isRequired,
  isPending: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

export default CarList;
