import PropTypes from 'prop-types';
import { deleteCar } from '../actions/actionCreator';
import Button from './Button';

const Car = ({ car, isAdmin }) => (
  <div className="" style={{ height: '600px' }}>
    <img
      src={car?.pictures[0]?.url}
      alt={car.name}
      className="object-cover h-4/5 rounded-md"
      style={{ pointerEvents: 'initial' }}
    />
    <div className="mt-4 pointer-events-none">
      <h1 className="font-bold">{car.name?.toUpperCase()}</h1>
      <span className="text-sm text-gray-400 font-bold">$ </span>
      <span className="text-sm text-gray-400 font-bold">{car.price}</span>
    </div>
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
