import { useParams } from 'react-router-dom';

const CarDetails = () => {
  const { id } = useParams;

  return (
    <div>
      <p>Car details -{id} </p>
    </div>
  );
};

export default CarDetails;
