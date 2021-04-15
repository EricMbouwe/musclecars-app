import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { deleteCar } from '../actions/actionCreator';
import Button from './Button';

const Car = ({ car, isAdmin }) => (
  <div className="mx-5">
    <Link to={`cars/${car.id}`}>
      <img
        src={car?.pictures[0]?.url}
        alt={car.name}
        width="250"
        height="200"
        className="border border-gray-300 mx-auto my-4"
      />
      <h1>{car.name}</h1>
      <span>{car.price}</span>
      <span>$</span>
    </Link>
    {isAdmin && (
      <div>
        <Button name="DELETEBTN" action={deleteCar(car.id)} />
      </div>
    )}
  </div>
);

Car.propTypes = {
  car: PropTypes.oneOfType([PropTypes.object]).isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

export default Car;
