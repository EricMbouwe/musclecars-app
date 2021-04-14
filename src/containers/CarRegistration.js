/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  addNewCar,
  addNewPicture,
  getCar,
  updateCar,
} from '../actions/actionCreator';
import FormUpdate from '../components/FormUpdate';
import FormNew from '../components/FormNew';

const CarRegistration = ({ dispatch }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const { id } = useParams();
  const carState = useSelector((state) => state.car);
  const { data: car } = carState;

  const [carName, setCarName] = useState(car.name || '');
  const [carPrice, setCarPrice] = useState(car.price?.toString() || '');
  const [carDescription, setCarDescription] = useState(car.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewCar(name, price, description));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateCar(carName, carPrice, carDescription, id));
  };

  const handleSubmitPicture = (e) => {
    e.preventDefault();
    dispatch(addNewPicture(url, id));
  };

  useEffect(() => {
    if (id) {
      dispatch(getCar(id));
    }
  }, []);

  return (
    <div>
      {id && car.name && (
        <FormUpdate
          car={car}
          carName={carName}
          carPrice={carPrice}
          carDescription={carDescription}
          url={url}
          setUrl={setUrl}
          setCarName={setCarName}
          setCarPrice={setCarPrice}
          setCarDescription={setCarDescription}
          handleUpdate={handleUpdate}
          handleSubmitPicture={handleSubmitPicture}
        />
      )}
      {!id && (
        <FormNew
          name={name}
          price={price}
          description={description}
          setName={setName}
          setPrice={setPrice}
          setDescription={setDescription}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

CarRegistration.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default CarRegistration;
