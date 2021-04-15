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
    <div>
      <h2>APP HOME</h2>
      <h2>THE CAR LIST</h2>
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
