import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getCarList } from '../actions/actionCreator';
import CarList from '../components/CarList';

const Home = ({ currentUser }) => {
  const dispatch = useDispatch();
  const carListState = useSelector((state) => state.carList);
  const { data, isPending, error } = carListState;

  useEffect(() => {
    dispatch(getCarList());
  }, []);

  const test = 'Hey Home';
  return (
    <div>
      <h2>{test}</h2>
      <CarList
        cars={data}
        isPending={isPending}
        error={error}
        dispatch={dispatch}
        currentUser={currentUser}
      />
    </div>
  );
};

Home.propTypes = {
  currentUser: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Home;
