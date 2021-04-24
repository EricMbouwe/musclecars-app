import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Car from './Car';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarList = ({
  cars, isPending, error, isAdmin,
}) => (
  <div className="car-list flex flex-wrap my-5 md:container:container md:mx-auto">
    {isPending && <span>Loading...</span>}
    {error && <span>{error}</span>}
    <Carousel
      autoFocus
      autoPlay={false}
      stopOnHover
      centerSlidePercentage={55}
      dynamicHeight={false}
      centerMode
      showArrows
      showIndicators
      showStatus={false}
      infiniteLoop
      transitionTime={1500}
      useKeyboardArrows
    >
      {cars.length > 0
        && cars.map((car) => (
          <Link to={`cars/${car.id}`} key={car.id} className="mx-2 block h-120">
            <Car key={car.id} car={car} isAdmin={isAdmin} />
          </Link>
        ))}
    </Carousel>
  </div>
);

CarList.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object).isRequired,
  isPending: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

export default CarList;
