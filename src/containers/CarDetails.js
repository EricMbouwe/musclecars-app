import { useParams } from 'react-router-dom';

const CarDetails = () => {
  const { id } = useParams;

  return (
    <div>
      <h2>Hey Car details</h2>
      <p>
        Car details
        <span>{id}</span>
      </p>
    </div>
  );
};

export default CarDetails;
