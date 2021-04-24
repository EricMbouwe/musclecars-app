import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getCarList } from '../actions/actionCreator';
import CarList from '../components/CarList';

const Home = ({ isAdmin }) => {
  const dispatch = useDispatch();
  const carListState = useSelector((state) => state.carList);
  const { data, isPending, error } = carListState;

  useEffect(() => {
    dispatch(getCarList());
  }, []);

  return (
    <div className="md:container md:mx-auto">
      <div className="headings my-12">
        <h2 className="font-bold text-3xl leading-normal">LATEST MODELS</h2>
        <p className="text-xs text-gray-400 font-bold">Please select a Car Model</p>
      </div>
      <CarList
        cars={data}
        isPending={isPending}
        error={error}
        isAdmin={isAdmin}
      />
    </div>
  );
};

Home.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
};

export default Home;
