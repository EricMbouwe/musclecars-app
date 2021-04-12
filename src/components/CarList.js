import PropTypes from 'prop-types';

const CarList = ({ cars, isPending, error }) => (
  <div>
    <h2>THE CAR LIST</h2>
    {isPending && <span>Loading...</span>}
    {error && <span>{error}</span>}
    {cars && cars.map((car) => <p key={car.id}>{car.name}</p>)}
  </div>
);

CarList.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object).isRequired,
  isPending: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  // dispatch: PropTypes.func.isRequired,
};

export default CarList;
